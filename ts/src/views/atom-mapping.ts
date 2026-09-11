/**
 * `<gufe-atom-mapping>` - which atom of ligand A becomes which atom of ligand B.
 *
 * This is the single element for that question, and every view that shows a
 * *pair of ligands* mounts it rather than drawing its own:
 *
 *   `<gufe-ligand-network>`   the detail pane, for the selected edge
 *   `<gufe-transformation>`   the mapping the transformation carries
 *   `<gufe-view>`             a mapping payload on its own
 *
 * All three hand it the same payload shape - `mappingPayloadFor` below is what
 * cuts an edge loose into one - so there is one drawing path and the in-context
 * picture cannot drift from the standalone one.
 *
 * ## What is in this file
 *
 * Everything true of a mapping before anyone decides how to look at it:
 * resolving the payload's two keys, reading both SDFs, putting the second
 * molecule into the first's frame, and classifying every atom. `preparePair`
 * does all of it once and hands back a `MappedPair`.
 *
 * How it is then drawn - the six modes - is `mapping-modes.ts`, and the boxes
 * they draw into are `mapping-stage.ts`. The split is the same one
 * `protein-scene.ts` makes: the thing on screen, the chrome around it, and the
 * facts underneath are three files rather than one six-hundred-line method.
 *
 * ## Every mode that shows both molecules superposes them first
 *
 * A payload carries whatever conformer each molecule was built with, and two
 * conformers built independently face in unrelated directions; drawn together,
 * that reads as a chemical difference rather than an accident of the file.
 * `inFrameOf` below is the one place it is undone, in 3D, and `layoutPair` is
 * the same job in 2D. Both are applied once for the pair rather than per mode,
 * so no two modes can disagree about which way round the pair sits.
 */

import { el, errText } from "../shared/dom.js";
import { switcher } from "../shared/controls.js";
import { centredMessage, nameWanted } from "../shared/panels.js";
import { defineElement, generations, GufeElement, type ViewHandle } from "../shared/element.js";
import { choice } from "../shared/settings.js";
import { load3Dmol } from "../shared/engines.js";
import { kabsch, applyRT, type Vec3 } from "../shared/kabsch.js";
import { parseSDF, type Molecule } from "../shared/sdf.js";
import { MAPPING_RAMP_3D } from "../shared/atom-colors.js";
import { OVERLAY_CONTROLS } from "../shared/style.js";
import { buildRegistry, entriesFor, entryLabel, lookupOfType, type RegistryIndex } from "../schema/registry.js";
import { mappingStage, type MappingStage } from "./mapping-stage.js";
import {
  render2D,
  renderColored,
  renderInfo,
  renderLines,
  renderOpenFE,
  renderPlain,
} from "./mapping-modes.js";
import type { LigandAtomMappingViz, SmallMoleculeComponentViz } from "../schema/types.js";

const MODES = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" },
] as const;

type Mode = (typeof MODES)[number]["id"];

/**
 * gufe's separation for 3D Overlay, and not ours to tune.
 *
 * Read off `_get_max_dist_in_x`. A different floor separates the copies by a
 * different amount than the notebook does for the same mapping, which is the one
 * thing that mode exists not to do. The rest of gufe's numbers - the sphere the
 * mode draws with - are with the mode, in `mapping-modes.ts`.
 */
const OPENFE = {
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5,
};

/** One side of a mapping, classified the way gufe classifies it. */
export interface Uniques {
  /** Atoms of this molecule that map to nothing at all. */
  atoms: number[];
  /** Atoms that map to an atom of a different element. */
  elements: number[];
  /** Atoms that map to the same element - drawn plain, as gufe draws them. */
  mapped: number[];
}

/**
 * Split one molecule's atoms into unique, element-changing and unremarkable.
 *
 * Mirrors gufe's `_get_unique_bonds_and_atoms`: an index absent from the mapping
 * is unique, an index present but whose element differs from its partner's is an
 * element change, and everything else gets no highlight.
 */
export function uniqueAtoms(
  pairs: ReadonlyMap<number, number>,
  symbols: readonly string[],
  otherSymbols: readonly string[],
): Uniques {
  const atoms: number[] = [];
  const elements: number[] = [];
  const mapped: number[] = [];
  for (let index = 0; index < symbols.length; index++) {
    const partner = pairs.get(index);
    if (partner === undefined) atoms.push(index);
    else if (symbols[index] !== otherSymbols[partner]) elements.push(index);
    else mapped.push(index);
  }
  return { atoms, elements, mapped };
}

/** The A-to-B correspondence as a map, from the payload's pair list. */
function pairMap(payload: LigandAtomMappingViz): Map<number, number> {
  const pairs = new Map<number, number>();
  for (const pair of payload.componentA_to_componentB ?? []) {
    if (Number.isInteger(pair?.index_A) && Number.isInteger(pair?.index_B)) {
      pairs.set(pair.index_A, pair.index_B);
    }
  }
  return pairs;
}

/** Which of the four things a row of Info's correspondence table can say. */
export type RelationKind = "mapped" | "element" | "uniqueA" | "uniqueB";

/**
 * One row of the correspondence: one atom of one molecule, and what it becomes.
 *
 * Either index is null when the atom on that side does not exist, which is how
 * an atom the mapping relates to nothing is a row rather than a footnote. Both
 * element symbols travel with it because the row is read on its own: `5 O -> 9
 * N` says why it is an element change without the reader holding two molecules
 * in their head.
 */
export interface Relation {
  kind: RelationKind;
  a: number | null;
  b: number | null;
  symbolA: string;
  symbolB: string;
}

/**
 * The correspondence as one row per atom, in the order the atoms are indexed.
 *
 * Every atom of both molecules appears exactly once: a mapped one on the row of
 * its partner, an unmapped one on a row of its own, with B's leftovers after A's
 * atoms because there is no partner index to interleave them by.
 *
 * This is the same three-way split `uniqueAtoms` makes, made again from the same
 * two inputs rather than read back out of `Uniques`, because a row also needs
 * the partner index and both symbols. The two must agree, and `views.test.ts`
 * asserts they do: the counts in the chips are `uniqueAtoms`, the rows they
 * filter are these.
 */
export function relations(
  pairs: ReadonlyMap<number, number>,
  symbolsA: readonly string[],
  symbolsB: readonly string[],
): Relation[] {
  const rows: Relation[] = [];
  for (let a = 0; a < symbolsA.length; a++) {
    const symbolA = symbolsA[a] ?? "";
    const b = pairs.get(a);
    if (b === undefined) {
      rows.push({ kind: "uniqueA", a, b: null, symbolA, symbolB: "" });
      continue;
    }
    const symbolB = symbolsB[b] ?? "";
    rows.push({ kind: symbolA === symbolB ? "mapped" : "element", a, b, symbolA, symbolB });
  }
  const taken = new Set(pairs.values());
  for (let b = 0; b < symbolsB.length; b++) {
    if (taken.has(b)) continue;
    rows.push({ kind: "uniqueB", a: null, b, symbolA: "", symbolB: symbolsB[b] ?? "" });
  }
  return rows;
}

/**
 * A mapping, cut loose as a payload that stands on its own.
 *
 * An edge of a ligand network and a mapping of a transformation are both already
 * `LigandAtomMappingViz`; what they lack is a registry of their own, so this
 * gives them one holding the two ligands they name. What comes out is exactly
 * the payload this element receives when someone drops a mapping on the page by
 * itself, which is what lets one element serve every case.
 */
export function mappingPayloadFor(
  mapping: LigandAtomMappingViz,
  registry: RegistryIndex,
): LigandAtomMappingViz | null {
  const from = lookupOfType<SmallMoleculeComponentViz>(registry, mapping.componentA, "SmallMoleculeComponentViz");
  const to = lookupOfType<SmallMoleculeComponentViz>(registry, mapping.componentB, "SmallMoleculeComponentViz");
  if (!from || !to) return null;
  // Both endpoints resolve, so `entriesFor` finds both; it also collapses a
  // mapping of a ligand onto itself into the one entry a registry may hold.
  return { ...mapping, registry: entriesFor(registry, [mapping.componentA, mapping.componentB]) };
}

/**
 * `moving` put into `fixed`'s frame, superposed on the atoms the mapping relates.
 *
 * Every 3D mode here draws the two molecules at once, and all four are making
 * the same claim: this is what changes between them. That claim is unreadable
 * when the two are turned differently, whether they sit side by side, shifted
 * along x, or one above the other - the reader cannot tell a substitution from
 * a rotation.
 *
 * Nothing in a payload guarantees they arrive facing the same way. A
 * `SmallMoleculeComponent` carries whatever conformer it was built with, and
 * two molecules embedded independently come out turned arbitrarily with respect
 * to each other; `examples/ligand_network_large.json` has pairs a hundred and
 * sixty degrees apart. A docked series - which is what an OpenFE network
 * usually holds - already shares a frame, and there this is very nearly the
 * identity, because the transform that best superposes two molecules already on
 * top of each other is no transform at all.
 *
 * The mapped atoms are what it superposes on, which is the only defensible
 * choice: they are by definition the part of the two molecules that is meant to
 * correspond, and the unique atoms are the part that is not.
 *
 * `pairs` runs from `fixed`'s atom indices to `moving`'s, which is the
 * payload's own direction: A stays put and B is moved onto it.
 *
 * `moving` comes back untouched when the mapping does not pin a rotation down -
 * fewer than three mapped atoms, or mapped atoms all on one line. See
 * `Transform.determined`. A molecule left in its own frame is a picture of two
 * conformers, which is at least true; a molecule turned by an arbitrary
 * rotation is a picture of nothing.
 */
export function inFrameOf(
  fixed: Molecule,
  moving: Molecule,
  pairs: ReadonlyMap<number, number>,
): Molecule {
  const P: Vec3[] = [];
  const Q: Vec3[] = [];
  for (const [here, there] of pairs) {
    const anchor = fixed.coords[here];
    const partner = moving.coords[there];
    if (anchor && partner) {
      P.push(anchor as Vec3);
      Q.push(partner as Vec3);
    }
  }
  const rt = kabsch(P, Q);
  if (!rt?.determined) return moving;
  return { ...moving, coords: moving.coords.map((c) => applyRT(c as Vec3, rt.R, rt.t)) };
}

/**
 * How far along x 3D Overlay pushes each copy, from gufe's `_get_max_dist_in_x`.
 *
 * gufe measures, in either molecule, the largest `x[j] - x[i]` for an atom `j`
 * at or after an atom `i` in file order, rounds that to a tenth, floors it at 5
 * and multiplies by 1.5. Read in file order rather than as a plain extent
 * because that is what gufe measures, and a number that matched the extent
 * instead would separate the copies by a different amount than the notebook
 * does for the same mapping.
 */
export function openfeShift(a: readonly Vec3[], b: readonly Vec3[]): number {
  let widest = 0;
  for (const coords of [a, b]) {
    let earliest = Infinity;
    for (const point of coords) {
      if (point[0] < earliest) earliest = point[0];
      if (point[0] - earliest > widest) widest = point[0] - earliest;
    }
  }
  const rounded = Math.round(widest * 10) / 10;
  return (rounded > OPENFE.minSpread ? rounded : OPENFE.minSpread) * OPENFE.spreadFactor;
}

/**
 * The colour gufe paints on mapped pair `index` of `count`, in 3Dmol's form.
 *
 * `_add_spheres` asks matplotlib for `hsv` resampled to one entry per mapped
 * pair and then takes entry `index`, which is `hsv` read at `index / (count -
 * 1)`. `MAPPING_RAMP_3D` is that same colormap at 128 stops, so the colour is a
 * lookup with a straight interpolation between neighbouring stops - the ramp is
 * dense enough that the difference from evaluating `hsv` itself is invisible.
 *
 * Both atoms of a pair are given it, and the shared colour is the whole message:
 * it says these two atoms map to each other. It says nothing about the element.
 * `hsv` very nearly closes its circle, so the first and last pair of a mapping
 * come out reds a shade apart; that is matplotlib's doing, and the notebook has
 * it too.
 */
export function pairColour(index: number, count: number): string {
  const stops = MAPPING_RAMP_3D;
  const fraction = count > 1 ? Math.min(Math.max(index / (count - 1), 0), 1) : 0;
  const position = fraction * (stops.length - 1);
  const lower = Math.floor(position);
  const upper = Math.min(lower + 1, stops.length - 1);
  const blend = position - lower;
  let hex = "0x";
  for (let channel = 0; channel < 3; channel++) {
    const at = (stop: string): number => parseInt(stop.slice(1 + channel * 2, 3 + channel * 2), 16);
    const value = Math.round(at(stops[lower]) + (at(stops[upper]) - at(stops[lower])) * blend);
    hex += value.toString(16).padStart(2, "0");
  }
  return hex;
}

/**
 * Everything the six modes draw from, once the payload has been resolved and its
 * two molecules read.
 *
 * One object rather than ten locals at the top of `renderView`, which is where
 * these lived: the whole of that method was 663 lines, and its first fifty were
 * this - resolving two keys, parsing two SDFs, putting the second into the
 * first's frame, and working out which atoms are unique to each. None of it
 * touches the DOM, and all of it is the same for every mode, so it does not
 * belong inside the thing that builds the panes.
 */
export interface MappedPair {
  from: SmallMoleculeComponentViz;
  to: SmallMoleculeComponentViz;
  nameA: string;
  nameB: string;
  /**
   * A's atom index to B's, as the payload gives it.
   *
   * Only this direction. The reverse is built inside `preparePair`, because
   * classifying B's atoms needs it, and it is not carried: nothing downstream
   * reads B against A, and a field that is always derivable from `pairs` is one
   * more thing that can be handed on stale.
   */
  pairs: Map<number, number>;
  molA: Molecule;
  /** Already in `molA`'s frame - see `inFrameOf`. */
  molB: Molecule;
  uniquesA: Uniques;
  uniquesB: Uniques;
}

/**
 * The pair, or the sentence to put on the page instead of a picture.
 *
 * Two things can go wrong before anything is drawn and neither is exceptional: a
 * schema-valid payload can name molecules its registry does not hold, and an SDF
 * can be unreadable. Returning the message rather than throwing keeps both on
 * the same footing as every other "cannot draw this" in the codebase.
 */
export type PreparedPair = { pair: MappedPair } | { problem: string; isError: boolean };

export function preparePair(payload: LigandAtomMappingViz, registry: RegistryIndex): PreparedPair {
  const from = lookupOfType<SmallMoleculeComponentViz>(registry, payload.componentA, "SmallMoleculeComponentViz");
  const to = lookupOfType<SmallMoleculeComponentViz>(registry, payload.componentB, "SmallMoleculeComponentViz");
  if (!from || !to) {
    return {
      problem: "This mapping names two molecules, and its registry does not hold them.",
      isError: false,
    };
  }

  const nameA = entryLabel(from);
  const nameB = entryLabel(to);
  const pairs = pairMap(payload);

  let molA: Molecule;
  let molB: Molecule;
  try {
    molA = parseSDF(from.sdf, nameA);
    molB = parseSDF(to.sdf, nameB);
  } catch (e) {
    return { problem: `Could not read a molecule: ${errText(e)}`, isError: true };
  }

  // Both molecules into one frame, once, before any mode draws - see
  // `inFrameOf`. Here rather than inside each mode so that clicking along the
  // switcher cannot also turn a molecule, and so the four 3D modes cannot
  // disagree about which way round the pair sits. 2D arrives at the same
  // place by its own route: `layoutPair` aligns the two depictions in two
  // dimensions, so the flat picture agrees with the spatial ones.
  //
  // Coordinates are all this changes. Symbols, bonds and atom indices are
  // untouched, so everything downstream that reads the mapping - the marking,
  // the counts, Info's correspondence - reads exactly what it read before.
  molB = inFrameOf(molA, molB, pairs);

  const flipped = new Map<number, number>();
  for (const [a, b] of pairs) flipped.set(b, a);

  return {
    pair: {
      from,
      to,
      nameA,
      nameB,
      pairs,
      molA,
      molB,
      uniquesA: uniqueAtoms(pairs, molA.symbols, molB.symbols),
      uniquesB: uniqueAtoms(flipped, molB.symbols, molA.symbols),
    },
  };
}

export class GufeAtomMapping extends GufeElement<LigandAtomMappingViz> {
  protected override placeholder(): string {
    return "Waiting for a LigandAtomMapping payload...";
  }

  protected renderView(host: HTMLDivElement, payload: LigandAtomMappingViz): ViewHandle {
    const prepared = preparePair(payload, buildRegistry(payload));
    if ("problem" in prepared) {
      host.appendChild(centredMessage(prepared.problem, prepared.isError));
      return {};
    }
    const pair = prepared.pair;

    // The stage, and the floating switcher over it. `nameWanted` is whether each
    // box names its molecule: on by default, off where something above has
    // already named them. See `HIDE_NAME_ATTRIBUTE`.
    const wrapper = el("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    host.appendChild(wrapper);
    const stage = mappingStage(wrapper, nameWanted(host));

    // Which way someone looks at a mapping is a preference, so it survives a
    // reload and carries from one mapping to the next.
    const modeSetting = choice<Mode>("atom-mapping.mode", "plain", MODES.map((m) => m.id));
    let mode: Mode = modeSetting.get();
    // Six ways of looking, and the labels are words rather than numbers, so this
    // is a wide bar: on a pane too narrow for it the modes become a dropdown
    // rather than running off the side. See `switcher`.
    const controls = el("div", OVERLAY_CONTROLS);
    const modes = switcher(
      MODES,
      mode,
      (id) => {
        mode = id as Mode;
        render();
      },
      { remember: modeSetting, fit: { pane: wrapper, bar: controls } },
    );
    controls.appendChild(modes);
    wrapper.appendChild(controls);

    /**
     * Which mode's render is the current one.
     *
     * A teardown is not the only thing that can supersede a 3D mode: so is
     * another mode. `load3Dmol` resolves on a microtask once it is memoised, so
     * two clicks along the switcher can leave the first mode's `.then` to run
     * after the second has already cleared and refilled the stage - drawing the
     * old mode's boxes into the new mode's stage. Guarding only teardown, which
     * is what this did, catches neither half of that.
     */
    const renders = generations();

    /** The four modes that need 3Dmol, and what each one draws with it. */
    const IN_3D: Partial<Record<Mode, (stage: MappingStage, pair: MappedPair) => void>> = {
      plain: renderPlain,
      colored: renderColored,
      openfe: renderOpenFE,
      lines: renderLines,
    };

    const render = (): void => {
      const current = renders.start();
      // Every mode rebuilds the stage, because the modes differ in how many
      // boxes they want. Releasing the old viewers first is what keeps the count
      // of live WebGL contexts bounded as someone clicks along the switcher.
      stage.clear();

      if (mode === "info") return renderInfo(stage, pair, payload);
      if (mode === "2d") return render2D(stage, pair);

      const draw = IN_3D[mode]!;
      stage.element.appendChild(centredMessage("Loading 3D viewer..."));
      load3Dmol()
        .then(() => {
          if (!current()) return;
          stage.element.replaceChildren();
          draw(stage, pair);
        })
        .catch((e: unknown) => {
          if (!current()) return;
          stage.element.replaceChildren(centredMessage(`3D render failed: ${errText(e)}`, true));
        });
    };

    render();

    return {
      onResize: () => stage.resize(),
      cleanup: () => {
        renders.stop();
        modes.cleanup();
        stage.cleanup();
      },
    };
  }
}

defineElement("gufe-atom-mapping", GufeAtomMapping);
