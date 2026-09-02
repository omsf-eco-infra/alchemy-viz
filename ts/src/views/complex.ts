/**
 * `<gufe-complex>` - the components of one chemical system in a single scene.
 *
 * Every other view draws one component. This one draws several, and it exists
 * because a bound complex is not a protein next to a ligand: the two carry
 * coordinates in the same frame, and that frame is the result - it is where the
 * ligand sits in the site, which is the thing a binding campaign is about. Draw
 * them one at a time, as `<gufe-chemical-system>` otherwise does, and the pose
 * is the one part of the payload nobody can see.
 *
 * Nothing here computes the arrangement. The SDF conformer and the PDB arrive
 * already sharing a frame - docked upstream, carried through gufe unmoved - so
 * this loads both into one 3Dmol viewer and does not touch a coordinate. That is
 * also the failure mode to watch for: anything that recentres a model on its own
 * bounding box would pull the ligand out of the site, and it would be obvious.
 *
 * It is deliberately not in `VIEW_TAGS`. The dispatcher's table maps schema
 * types to elements, and a complex is not a type - it is a way of looking at a
 * `ChemicalSystemViz` that happens to hold both kinds of component. So
 * `<gufe-chemical-system>` mounts this itself, beside the per-component pane,
 * and `complexPartsFor` is what decides whether there is anything to mount.
 */

import { buttonGroup, dropdown, toggleButton, el, errText, nameWanted, viewerHost } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { choice, flag, type Setting } from "../shared/settings.js";
import { load3Dmol, ThreeDmol, type ThreeDmolViewer } from "../shared/engines.js";
import { resetControl, viewerInteraction, type BoundedZoom, type Interaction } from "../shared/interact.js";
import {
  applyLigandStyles,
  applyProteinStyles,
  parsePdbStats,
  proteinStatsText,
  type PdbStats,
  type ProteinColorScheme,
  type ProteinOptions,
  type ProteinRepresentation,
  type StatusFn,
} from "../shared/pdb.js";
import { ensureSDFTerminator, parseCounts } from "../shared/sdf.js";
import { buildRegistry, lookup, type RegistryIndex } from "../schema/registry.js";
import { FONT, SURFACE, TOOLBAR } from "../shared/style.js";
import { T } from "../shared/theme.js";
import type { ChemicalSystemViz, ComponentViz, SmallMoleculeComponentViz } from "../schema/types.js";
import type { PdbPayload } from "./protein.js";

/** The three payload types that carry a PDB, which is what a structure is here. */
const PDB_TYPES = ["ProteinComponentViz", "SolvatedPDBComponentViz", "ProteinMembraneComponentViz"];

/** The components of a system this view can put in one scene, split by kind. */
export interface ComplexParts {
  structures: PdbPayload[];
  ligands: SmallMoleculeComponentViz[];
}

/**
 * What of `system` could be drawn as a complex.
 *
 * Both the offer and the drawing come from here, so the button cannot appear
 * over a scene that turns out to have nothing in it. A system with no ligand or
 * no structure is not half a complex, it is a solvent leg or a bare protein, and
 * `hasComplex` is false for it.
 */
export function complexPartsFor(system: ChemicalSystemViz, registry: RegistryIndex): ComplexParts {
  const structures: PdbPayload[] = [];
  const ligands: SmallMoleculeComponentViz[] = [];
  for (const key of Object.values(system.components ?? {})) {
    const component = lookup(registry, key) as ComponentViz | undefined;
    if (!component) continue;
    if (PDB_TYPES.includes(component.type)) structures.push(component as PdbPayload);
    else if (component.type === "SmallMoleculeComponentViz") ligands.push(component);
  }
  return { structures, ligands };
}

/** Whether there is a complex in `parts` at all - both kinds, or it is not one. */
export function hasComplex(parts: ComplexParts): boolean {
  return parts.structures.length > 0 && parts.ligands.length > 0;
}

const PROTEIN_REPS = [
  { id: "cartoon", label: "Cartoon", title: "Ribbon / cartoon backbone" },
  { id: "surface", label: "Surface", title: "Molecular (VDW) surface" },
  { id: "stick", label: "Stick", title: "All-atom sticks" },
  { id: "sphere", label: "Sphere", title: "Space-filling spheres" },
] as const;

const PROTEIN_COLOR_SCHEMES = [
  { id: "chain", label: "Chain" },
  { id: "spectrum", label: "Spectrum" },
  { id: "ss", label: "Secondary structure" },
  { id: "element", label: "Element" },
] as const;

const FOCUS_MODES = [
  { id: "site", label: "Site", title: "Frame the ligand and the site around it" },
  { id: "whole", label: "Whole", title: "Frame the entire complex" },
] as const;

type Focus = (typeof FOCUS_MODES)[number]["id"];

/**
 * How far to pull back from the ligand for the site framing.
 *
 * `zoomTo` on the ligand alone fills the pane with the ligand and nothing else,
 * which answers the wrong question: the point of the picture is what surrounds
 * it. Below 1 zooms out, and this much puts a shell of residues around the
 * molecule at the pane sizes this view is used at.
 */
const SITE_ZOOM_OUT = 0.4;

export class GufeComplex extends GufeElement<ChemicalSystemViz> {
  protected override placeholder(): string {
    return "Waiting for a ChemicalSystem payload...";
  }

  protected renderView(host: HTMLDivElement, payload: ChemicalSystemViz): ViewHandle {
    const parts = complexPartsFor(payload, buildRegistry(payload));

    // The models go in structures-first, so a protein's index is its position in
    // `structures` and a ligand's is offset past all of them. Every selection
    // below is built from these two arrays and never from a literal, because the
    // one thing that would silently produce a wrong picture here is styling the
    // ligand as though it were a chain.
    const proteinModels = parts.structures.map((_, i) => i);
    const ligandModels = parts.ligands.map((_, i) => parts.structures.length + i);

    // The same stored preferences as `<gufe-protein>`, on purpose. "I read
    // proteins as ribbons coloured by chain" is a fact about the reader, not
    // about which pane they are looking at, and two keys for it would mean
    // setting it twice. Waters are the exception the protein view already makes
    // for its own reason and this one makes for another: in a complex they sit
    // between the eye and the site.
    const repSetting = choice(
      "protein.representation",
      "cartoon",
      PROTEIN_REPS.map((r) => r.id),
    );
    const colorSetting = choice(
      "protein.color",
      "chain",
      PROTEIN_COLOR_SCHEMES.map((c) => c.id),
    );
    const watersSetting = flag("protein.waters", false);
    const heteroSetting = flag("protein.hetero", true);
    const spinSetting = flag("protein.spin", false);
    const focusSetting = choice<Focus>(
      "complex.focus",
      "site",
      FOCUS_MODES.map((f) => f.id),
    );

    const opts: ProteinOptions = {
      rep: repSetting.get() as ProteinRepresentation,
      color: colorSetting.get() as ProteinColorScheme,
      waters: watersSetting.get(),
      hetero: heteroSetting.get(),
      spin: spinSetting.get(),
    };
    let focus: Focus = focusSetting.get();
    let viewer: ThreeDmolViewer | null = null;
    let interaction: (BoundedZoom & Interaction) | null = null;
    let stats: PdbStats | null = null;

    // --- toolbar ---
    const toolbar = el("div", TOOLBAR.top);
    host.appendChild(toolbar);

    if (nameWanted(this)) {
      toolbar.appendChild(
        el(
          "span",
          `font-weight:700;font-size:${FONT.heading};letter-spacing:.02em;color:${T.titleColor};`,
          payload.name || "Complex",
        ),
      );
    }

    const groupLabel = (text: string) => el("span", `font-size:${FONT.small};color:${T.textMuted};`, text);

    toolbar.appendChild(groupLabel("Style:"));
    toolbar.appendChild(
      buttonGroup(
        PROTEIN_REPS,
        opts.rep,
        (id) => {
          opts.rep = id as ProteinRepresentation;
          restyle();
        },
        repSetting,
      ),
    );

    toolbar.appendChild(groupLabel("Color:"));
    toolbar.appendChild(
      dropdown(
        PROTEIN_COLOR_SCHEMES,
        opts.color,
        (id) => {
          opts.color = id as ProteinColorScheme;
          restyle();
        },
        colorSetting,
      ),
    );

    toolbar.appendChild(groupLabel("Focus:"));
    toolbar.appendChild(
      buttonGroup(
        FOCUS_MODES,
        focus,
        (id) => {
          focus = id as Focus;
          reframe();
        },
        focusSetting,
      ),
    );

    const toggles = el("div", "display:flex;gap:4px;");
    toolbar.appendChild(toggles);
    const toggleSpecs: [keyof ProteinOptions, string, string, Setting<boolean>, () => void][] = [
      ["waters", "Waters", "Show water molecules", watersSetting, () => restyle()],
      ["hetero", "Hetero", "Show hetero atoms / ions / lipids in the structure", heteroSetting, () => restyle()],
      ["spin", "Spin", "Rotate the view continuously", spinSetting, () => viewer?.spin(opts.spin ? "y" : false)],
    ];
    for (const [key, label, title, remember, onChange] of toggleSpecs) {
      toggles.appendChild(
        toggleButton(
          label,
          opts[key] as boolean,
          (on) => {
            (opts[key] as boolean) = on;
            onChange();
          },
          { title, remember },
        ),
      );
    }

    // Reset goes back to the framing in force, not to the whole scene: someone
    // reading a site who has spun the camera off it wants the site back.
    toggles.appendChild(resetControl(() => reframe(), "Reset view"));

    const statsEl = el("span", `margin-left:auto;font-size:${FONT.small};white-space:nowrap;color:${T.textMuted2};`);
    toolbar.appendChild(statsEl);

    // --- viewer + status overlay ---
    const pane = viewerHost();
    host.appendChild(pane.wrap);

    const statusEl = el(
      "div",
      "position:absolute;top:12px;left:50%;transform:translateX(-50%);padding:6px 14px;border-radius:6px;" +
        `font-size:${FONT.body};z-index:20;display:none;pointer-events:none;`,
    );
    pane.wrap.appendChild(statusEl);

    const showStatus: StatusFn = (msg, kind) => {
      if (msg == null) {
        statusEl.style.display = "none";
        return;
      }
      statusEl.textContent = msg;
      statusEl.style.display = "block";
      const isError = kind === "error";
      statusEl.style.background = isError ? T.warnBg : T.toolbarBg;
      statusEl.style.color = isError ? T.warnFg : T.textMuted;
      statusEl.style.border = `1px solid ${isError ? T.warnBorder : T.toolbarBorder}`;
    };

    function restyle(): void {
      if (!viewer) return;
      applyProteinStyles(viewer, opts, stats, showStatus, { model: proteinModels });
      applyLigandStyles(viewer, { model: ligandModels });
      viewer.render();
    }

    /**
     * Point the camera at whatever the focus asks for, and re-measure the zoom.
     *
     * The bounded zoom takes its limits from the framing it was built on, so a
     * switch between a site and a whole kinase domain has to build a new one -
     * keeping the old one would clamp the way out of a site to the distance a
     * site needed.
     */
    function reframe(): void {
      if (!viewer) return;
      if (focus === "site" && ligandModels.length) {
        viewer.zoomTo({ model: ligandModels });
        viewer.zoom(SITE_ZOOM_OUT);
      } else {
        viewer.zoomTo();
      }
      viewer.render();
      interaction?.cleanup();
      interaction = viewerInteraction(pane.container, viewer);
    }

    if (!parts.structures.length || !parts.ligands.length) {
      // `<gufe-chemical-system>` only offers this pane when both are there, so
      // reaching it means a payload changed under the element rather than a
      // reader clicking something they should not have been shown.
      showStatus("This system has no ligand and structure to draw together.");
      return {};
    }

    statsEl.textContent = complexStatsText(parts, () => stats);
    try {
      // The first structure's statistics, which is all of them in every payload
      // gufe produces: a system with two proteins in it has no natural single
      // readout, and the colour-by-residue gradient needs one structure's range.
      stats = parsePdbStats(parts.structures[0].pdb);
      statsEl.textContent = complexStatsText(parts, () => stats);
    } catch (e) {
      showStatus(`PDB parse error: ${errText(e)}`, "error");
    }

    showStatus("Loading 3D viewer...");
    load3Dmol()
      .then(() => {
        viewer = ThreeDmol!.createViewer(pane.container, { backgroundColor: SURFACE.viewer });
        // Structures first, then ligands: this is what `proteinModels` and
        // `ligandModels` above are indices into.
        for (const structure of parts.structures) viewer.addModel(structure.pdb, "pdb");
        for (const ligand of parts.ligands) viewer.addModel(ensureSDFTerminator(ligand.sdf), "sdf");
        restyle();
        reframe();
        viewer.spin(opts.spin ? "y" : false);
        viewer.render();
      })
      .catch((e: unknown) => {
        showStatus(`Failed to render structure: ${errText(e)}`, "error");
      });

    return {
      onResize() {
        if (viewer) {
          viewer.resize();
          viewer.render();
        }
      },
      cleanup() {
        interaction?.cleanup();
        interaction = null;
        if (!viewer) return;
        try {
          viewer.spin(false);
        } catch {
          /* 3Dmol v1 quirk */
        }
        try {
          viewer.clear();
        } catch {
          /* already gone */
        }
        viewer = null;
      },
    };
  }
}

/**
 * The readout: what is in the scene, from both sides of it.
 *
 * The protein statistics are the same line `<gufe-protein>` shows, so the two
 * panes of one system agree about the structure, with the ligand's own atom
 * count in front of it - that being the number a reader of a complex is
 * actually checking.
 */
function complexStatsText(parts: ComplexParts, stats: () => PdbStats | null): string {
  const atoms = parts.ligands.reduce((total, ligand) => {
    const counts = parseCounts(ligand.sdf);
    return counts ? total + counts.atoms : total;
  }, 0);
  const ligand = `${parts.ligands.length === 1 ? "ligand" : `${parts.ligands.length} ligands`} ${atoms} atoms`;
  const structure = stats();
  return structure ? `${ligand} | ${proteinStatsText(structure)}` : ligand;
}

defineElement("gufe-complex", GufeComplex);
