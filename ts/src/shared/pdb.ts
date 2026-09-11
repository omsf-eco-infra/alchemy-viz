/**
 * PDB stats, styles and colour schemes.
 *
 * The statistics are computed in one pass over the text and the styling is done
 * through 3Dmol selections rather than per-atom DOM work, so structures with
 * tens of thousands of atoms stay responsive.
 */

import { errText, fmt } from "./dom.js";
import { ThreeDmol, type ThreeDmolViewer } from "./engines.js";

const WATER_RESN = ["HOH", "WAT", "SOL", "TIP3"];
const SEL_POLYMER = { hetflag: false };
const SEL_HETERO = { hetflag: true };
const SEL_WATER = { resn: WATER_RESN };

/**
 * Which models in a viewer a call here is about.
 *
 * A viewer holding one structure needs none of this, and the selections above
 * say what they mean on their own. A viewer holding a protein *and* a ligand
 * does: an SDF model carries no `hetflag`, so it answers to `{hetflag:false}`
 * and would be handed the protein's cartoon. Naming the models is what keeps
 * each structure's styling to itself.
 */
export interface ModelScope {
  model: number | number[];
}

/**
 * Whether the scene that asked for a surface is still on screen.
 *
 * A surface is computed off a `setTimeout`, so the view can be torn down between
 * the request and the work. Without this the work still happens - seconds of CPU
 * on a kinase, for a viewer that has already been cleared - and its result is
 * written into a status line nobody can see. Per-scene rather than module state,
 * because two structures on one page are two independent answers.
 */
export type StillWanted = () => boolean;

export const PROTEIN_CONFIG = {
  stick: { radius: 0.15 },
  sphere: { scale: 0.3 },
  hetero: { stickRadius: 0.2, sphereScale: 0.28 },
  water: { stickRadius: 0.05, sphereScale: 0.18 },
  /**
   * A bound ligand, drawn thicker than the protein's own hetero atoms.
   *
   * It is the subject of the picture and everything around it is context, so
   * it is the one thing in a complex allowed to be heavier than the rest. The
   * colours stay `Jmol`, as everywhere else in this project - a ligand that
   * changed what its atom colours meant on the way into a pocket would be
   * worse, not clearer.
   */
  ligand: { stickRadius: 0.24, sphereScale: 0.32 },
  surfaceOpacity: 0.85,
  /** Above this many atoms a surface is slow enough to be worth warning about. */
  surfaceAtomWarn: 40000,
} as const;

export interface PdbStats {
  chains: number;
  residues: number;
  atoms: number;
  hetatms: number;
  waters: number;
  resiMin: number;
  resiMax: number;
}

export type ProteinRepresentation = "cartoon" | "surface" | "stick" | "sphere";
export type ProteinColorScheme = "chain" | "spectrum" | "ss" | "element";

export interface ProteinOptions {
  rep: ProteinRepresentation;
  color: ProteinColorScheme;
  waters: boolean;
  hetero: boolean;
  spin?: boolean;
}

export type StatusFn = (message: string | null, kind?: "error") => void;

/**
 * Single pass over the PDB text for the stats readout. Only the first MODEL is
 * counted (NMR ensembles would otherwise multiply every number). Residues are
 * keyed by chain + sequence number + insertion code + name, which is what makes
 * them unique in a PDB.
 */
export function parsePdbStats(pdbText: string): PdbStats {
  const chains = new Set<string>();
  const residues = new Set<string>();
  let atoms = 0;
  let hetatms = 0;
  let waters = 0;
  let resiMin = Infinity;
  let resiMax = -Infinity;

  for (const line of pdbText.split(/\r?\n/)) {
    const rec = line.slice(0, 6);
    if (rec === "ENDMDL") break;
    if (rec !== "ATOM  " && rec !== "HETATM") continue;

    atoms++;
    if (rec === "HETATM") hetatms++;

    const resName = line.slice(17, 20).trim();
    const chainId = line.slice(21, 22).trim() || "_";
    const resSeq = line.slice(22, 26).trim();
    const iCode = line.slice(26, 27).trim();

    if (WATER_RESN.indexOf(resName) !== -1) waters++;
    chains.add(chainId);
    residues.add(`${chainId}|${resSeq}${iCode}|${resName}`);

    const resi = parseInt(resSeq, 10);
    if (!isNaN(resi)) {
      if (resi < resiMin) resiMin = resi;
      if (resi > resiMax) resiMax = resi;
    }
  }

  return {
    chains: chains.size,
    residues: residues.size,
    atoms,
    hetatms,
    waters,
    resiMin: resiMin === Infinity ? 0 : resiMin,
    resiMax: resiMax === -Infinity ? 0 : resiMax,
  };
}

/**
 * What is in the structure, one phrase per fact.
 *
 * A list rather than a sentence because of where it is read: the counts live in
 * the controls panel, which is a column narrow enough that a single line of
 * them wraps between a number and its noun.
 */
export function proteinStatsParts(stats: PdbStats): string[] {
  return [
    `${fmt(stats.chains)} chains`,
    `${fmt(stats.residues)} residues`,
    `${fmt(stats.atoms)} atoms`,
    `${fmt(stats.hetatms)} HETATM` + (stats.waters > 0 ? ` (${fmt(stats.waters)} water)` : ""),
  ];
}

/** Colour arguments for a scheme, valid for any representation. */
function proteinColorArgs(scheme: ProteinColorScheme, stats: PdbStats | null): { colorscheme: unknown } {
  if (scheme === "chain") return { colorscheme: "chain" };
  if (scheme === "ss") return { colorscheme: "ssJmol" };
  if (scheme === "spectrum" && stats && stats.resiMax > stats.resiMin) {
    // A residue-index gradient works for every representation, unlike 3Dmol's
    // cartoon-only `color: 'spectrum'`.
    return { colorscheme: { prop: "resi", gradient: "roygb", min: stats.resiMin, max: stats.resiMax } };
  }
  return { colorscheme: "Jmol" };
}

/**
 * Re-apply every protein style from scratch.
 *
 * The `setStyle` calls are ordered deliberately: each one *replaces* the style
 * of the atoms it matches, so waters (matched last) win over the blanket hetero
 * rule they would otherwise fall under.
 *
 * `onStatus` is optional - a surface is the one genuinely expensive operation
 * here, and is computed off a timeout so its message gets a chance to paint.
 *
 * `scope` is optional too, and only a viewer holding more than one structure
 * needs it: see :type:`ModelScope`.
 */
export function applyProteinStyles(
  viewer: ThreeDmolViewer,
  opts: ProteinOptions,
  stats: PdbStats | null,
  onStatus?: StatusFn,
  scope?: ModelScope,
  stillWanted: StillWanted = () => true,
): void {
  const status: StatusFn = onStatus || (() => {});
  const color = proteinColorArgs(opts.color, stats);
  // Every selection below, including the blanket clear, narrowed to the models
  // this call is about. Unscoped it is the whole viewer, which is what the
  // single-structure views want and what this did before there was a second
  // kind of caller.
  const sel = (base: object): object => (scope ? { ...base, ...scope } : base);

  try {
    viewer.removeAllSurfaces();
  } catch {
    /* none yet */
  }

  viewer.setStyle(sel({}), {});
  viewer.setStyle(
    sel(SEL_POLYMER),
    opts.rep === "stick"
      ? { stick: { radius: PROTEIN_CONFIG.stick.radius, ...color } }
      : opts.rep === "sphere"
        ? { sphere: { scale: PROTEIN_CONFIG.sphere.scale, ...color } }
        : // For 'surface' the shell is added separately; leave the atoms bare so
          // it is not cluttered from the inside.
          opts.rep === "surface"
          ? {}
          : { cartoon: { ...color } },
  );

  viewer.setStyle(
    sel(SEL_HETERO),
    opts.hetero
      ? {
          stick: { radius: PROTEIN_CONFIG.hetero.stickRadius, colorscheme: "Jmol" },
          sphere: { scale: PROTEIN_CONFIG.hetero.sphereScale, colorscheme: "Jmol" },
        }
      : {},
  );

  viewer.setStyle(
    sel(SEL_WATER),
    opts.waters
      ? {
          stick: { radius: PROTEIN_CONFIG.water.stickRadius, colorscheme: "Jmol" },
          sphere: { scale: PROTEIN_CONFIG.water.sphereScale, colorscheme: "Jmol" },
        }
      : {},
  );

  if (opts.rep !== "surface") {
    status(null);
    viewer.render();
    return;
  }

  status(
    stats && stats.atoms > PROTEIN_CONFIG.surfaceAtomWarn
      ? "Computing surface (large structure, this may take a while)..."
      : "Computing surface...",
  );
  viewer.render();
  setTimeout(() => {
    // The view may have gone in the 30ms since the surface was asked for. See
    // `StillWanted`.
    if (!stillWanted()) return;
    try {
      // 3Dmol v2 returns a promise; v1 returns a surface id.
      Promise.resolve(
        viewer.addSurface(
          ThreeDmol!.SurfaceType.VDW,
          { opacity: PROTEIN_CONFIG.surfaceOpacity, ...color },
          sel(SEL_POLYMER),
        ),
      )
        .then(() => {
          if (!stillWanted()) return;
          status(null);
          viewer.render();
        })
        .catch((err: unknown) => status(`Surface failed: ${errText(err)}`, "error"));
    } catch (err) {
      status(`Surface failed: ${errText(err)}`, "error");
    }
  }, 30);
}

/**
 * Draw the ligand models of a complex.
 *
 * Separate from `applyProteinStyles` rather than a branch inside it, because a
 * bound ligand has none of the choices a protein has: there is no cartoon
 * through a small molecule, no chain to colour by and no waters in it. What it
 * has is one job, which is to be findable inside several thousand protein
 * atoms, and that is what `PROTEIN_CONFIG.ligand` is for.
 */
export function applyLigandStyles(viewer: ThreeDmolViewer, scope: ModelScope): void {
  viewer.setStyle(scope, {
    stick: { radius: PROTEIN_CONFIG.ligand.stickRadius, colorscheme: "Jmol" },
    sphere: { scale: PROTEIN_CONFIG.ligand.sphereScale, colorscheme: "Jmol" },
  });
}
