/**
 * `<gufe-alchemical-network>` - chemical systems joined by transformations.
 *
 * This is the ligand network one level up, and a node here is a whole chemical
 * system rather than a single molecule: what the canvas is for is composition
 * and topology - which systems exist, what they are made of, and what maps onto
 * what. So a node is a labelled box, coloured by what its system is made of.
 *
 * Inside that box, zoomed in far enough, is the system's ligand. A campaign is
 * one ligand series run twice, in solvent and in complex, and which ligand a
 * system carries is the thing a chemist recognises a node by - the name is a
 * convention and the composition is shared by half the graph. So the box keeps
 * saying what the system is made of and gains a picture of the one component
 * that tells it apart, on the same terms as the ligand network's: built lazily,
 * only for the nodes on screen, and only past the zoom where it can be read.
 * `ZOOM_LEVELS` is where that threshold is. A system with no small molecule in
 * it - a solvent-only reference state, an apo protein - is drawn as it always
 * was, because there is nothing to put in the box.
 *
 * The detail pane is where a whole system is drawn, and this view draws none of
 * one itself. Every reference in the payload resolves to a complete payload
 * object, so a selected node is a `ChemicalSystemViz` and a selected edge is a
 * `TransformationViz` - which are exactly what `<gufe-chemical-system>` and
 * `<gufe-transformation>` take. The pane mounts one `<gufe-view>` and re-points
 * it, so selecting a system gets that view's component list and, through its
 * own nested dispatcher, the ligand depiction or the 3D protein; and selecting
 * a transformation gets the state diff and the atom mapping with all of its
 * modes. Nothing about a component or a mapping is drawn twice in this repo,
 * and this view cannot drift from the standalone one because it *is* the
 * standalone one.
 *
 * `systemPayloadFor` and `transformationPayloadFor` are what cut a node or an
 * edge loose into a payload that stands on its own, the way `mappingPayloadFor`
 * does one level further down.
 *
 * Like the ligand network, d3 is asked for a force layout and nothing else: the
 * SVG, the selection and the fallback circular layout are plain DOM, so the
 * graph still draws when d3 cannot be fetched. Getting around the canvas -
 * framing, wheel zoom, drag to pan, and the reset that undoes both - is
 * `sceneCamera`, which is the same one the ligand network moves on.
 */

import {
  BTN_CSS,
  centredMessage,
  chromeMenu,
  dropdown,
  el,
  floatingWarning,
  headerStrip,
  orientMenuPanel,
  SELECT_CSS,
  splitter,
  statChip,
} from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { extentOf, sceneCamera } from "../shared/camera.js";
import { withoutLayout } from "../shared/layout.js";
import { loadD3, loadRDKit, type RDKitModule } from "../shared/engines.js";
import { resetControl } from "../shared/interact.js";
import { flag, num, text as textSetting } from "../shared/settings.js";
import { exportBlock, MULTI_SELECT_HINT } from "../shared/selection.js";
import { createMatcher, smartsBox, type MatchOutcome } from "../shared/smarts.js";
import { errText } from "../shared/dom.js";
import { svg, titled } from "../shared/svg.js";
import { depictSVG } from "../shared/sdf.js";
import { depictThemeOptions, nodeCardGround } from "../shared/depict-theme.js";
import { DEPICT_STYLE } from "../shared/depict-style.js";
import { mountDepiction } from "../shared/depict-node.js";
import { FONT, MENU_LIST, MENU_PANEL, TOOLBAR } from "../shared/style.js";
import { T } from "../shared/theme.js";
import { buildRegistry, entryLabel, lookup, lookupOfType, type RegistryIndex } from "../schema/registry.js";
import { systemPayloadFor } from "./chemical-system.js";
import { transformationPayloadFor } from "./transformation.js";
import type {
  AlchemicalNetworkViz,
  ChemicalSystemViz,
  GufeKey,
  ProtocolViz,
  SmallMoleculeComponentViz,
  TransformationViz,
} from "../schema/types.js";

// --- just enough of d3-force to configure it -------------------------------
//
// Deliberately not shared with the ligand-network view: the two configure
// different forces at different scales - box-shaped nodes here against
// depiction-sized discs there - and a shared wrapper would have to be
// parameterized by everything that differs, which is all of it.

interface D3Force {
  id(accessor: (node: GraphNode) => string): D3Force;
  distance(value: number): D3Force;
  strength(value: number): D3Force;
  iterations(value: number): D3Force;
}

interface D3Simulation {
  force(name: string, force: D3Force): D3Simulation;
  stop(): D3Simulation;
  tick(): D3Simulation;
  alphaMin(): number;
  alphaDecay(): number;
}

interface D3ForceModule {
  forceSimulation(nodes: GraphNode[]): D3Simulation;
  forceLink(links: { source: string; target: string }[]): D3Force;
  forceManyBody(): D3Force;
  forceCenter(x: number, y: number): D3Force;
  forceCollide(radius: number): D3Force;
}

/** A chemical system resolved out of the registry, with its layout position. */
interface GraphNode extends ChemicalSystemViz {
  x: number;
  y: number;
  /**
   * Pinned position, set by a drag and honoured by every layout after it.
   *
   * d3's own field name, because d3 is what reads it: a node with `fx` set is
   * held there through the simulation rather than pushed around by the forces.
   * `withoutLayout` strips it with the rest before a node is handed to a view.
   */
  fx?: number;
  fy?: number;
}

/**
 * An edge, which *is* a `TransformationViz` - there is no separate edge type -
 * with its two state keys resolved to the nodes they name.
 */
interface GraphEdge extends TransformationViz {
  index: number;
  from: GraphNode;
  to: GraphNode;
}

/** What a node is drawn in: one pair per composition the network contains. */
interface NodeColors {
  fill: string;
  stroke: string;
}

/**
 * The two boxes a system is drawn in.
 *
 * `height` is a system with nothing to depict: a name and what it is made of,
 * and no room asked for beyond them. `depictedHeight` is one with a ligand, and
 * the extra is the square the ligand is drawn in plus the two rows of text that
 * move underneath it.
 *
 * `platedHeight` is the third case, and it is the plate and its padding and
 * nothing else: out where `LABEL_MIN_PX` has taken the two lines of text away,
 * a box still tall enough for them is a picture with a band of empty colour
 * under it. It is the same box as `depictedHeight` with the part that held the
 * writing cut off, so what a zoom takes away is only ever the thing it stopped
 * drawing.
 *
 * A box grows into the taller shape when its ligand is drawn and shrinks back
 * when it is not, which is why the layout reserves room for the tallest one
 * whether or not it is in force: a campaign of twenty systems frames itself
 * well below the structure threshold, and boxes that stayed tall out there
 * would be twenty empty rectangles taking three times the room their names need
 * and shrinking the shape of the network to fit. Growing rather than reserving
 * on screen is safe because `FORCE.collisionRadius` holds two systems far
 * enough apart for the taller box, so nothing a zoom does can make two of them
 * collide.
 */
const NODE = { width: 176, height: 54, depictedHeight: 176, platedHeight: 134, radius: 10 };

/**
 * The square a ligand is drawn on inside its box, and the room it leaves.
 *
 * A plate at all because a structure drawn straight onto the box's own
 * composition colour is a structure nobody can read: whichever palette RDKit is
 * using, it was picked against a plain ground and not against a wash of blue or
 * amber. `depict-theme.ts` says which plain ground, so that the plate and the
 * ink on it move together. The plate is square and inset rather than filling the
 * box, which leaves the colour showing as a frame on all four sides: the picture
 * says which ligand, and the frame around it goes on saying which leg. Square
 * because a depiction is - a plate wider than the drawing it holds is a band
 * with a molecule in the middle of it.
 */
const PLATE = { pad: 6, size: 122, radius: 6, inset: 4 };

/** The square RDKit is asked to draw in, in its own units. */
const DEPICT_SIZE = 200;

/** The name and the composition line: their sizes, and where they sit. */
const CAPTION = { nameSize: 12, subSize: 10, gap: 13, bottom: 9, nameChars: 20, subChars: 24 };

/**
 * The smallest either line of a box may be drawn, on screen, before it is not
 * drawn at all.
 *
 * Text in a box is in the graph's own units, so it is scaled by the zoom along
 * with everything else: a 12px name is 12px only at a zoom of 1, and a campaign
 * of twenty frames itself at about a third, where it is four. Four pixels is
 * not a name - it is a grey bar in the middle of every box, and twenty of them
 * are a texture laid over exactly the shape somebody pulled back to see.
 *
 * A floor in *screen* pixels is what makes this one decision rather than a pair
 * of thresholds guessed against two font sizes: the same number covers both
 * lines, and the smaller one goes first because it is the smaller one. Nothing
 * is lost by it - the box keeps its composition colour, which the legend names,
 * and hovering one still gives its name and its composition in full.
 */
const LABEL_MIN_PX = 7;

/**
 * One zoom level: what a node draws at that distance.
 *
 * A row of data rather than a threshold compared in the drawing code, which is
 * the shape the ligand network's levels take too. There are two of them here
 * because there is one thing to decide: a box that is only ever a box has
 * nothing to drop as the view pulls back.
 */
export interface NodeDetail {
  /** Its name, so the level in force can be read off the DOM and talked about. */
  id: "structures" | "boxes";
  /** The lowest zoom this level covers. */
  from: number;
  /** The ligand's 2D structure inside the box. */
  structure: boolean;
}

/**
 * The levels, closest zoom first.
 *
 * The threshold is where the drawing stops being big enough to recognise a
 * molecule in, and it is deliberately well under the zoom at which any of the
 * writing in a box is still legible - see `LABEL_MIN_PX`. The outline of a
 * ligand survives being made small in a way that letters do not: a chemist
 * reads a molecule by its shape long before its element symbols, so the levels
 * pull the writing out of a box well before they pull the picture out of it,
 * and a campaign that frames itself well under a third still opens on its
 * ligands rather than on twenty boxes that have to be zoomed into one at a time
 * before they say anything. A twenty-system campaign frames at about a fifth,
 * which is the case this number is set for.
 *
 * Below the threshold the boxes are what the canvas is for - which systems
 * exist and what runs between them - and a grid of structures too small to tell
 * apart is texture over exactly the shape somebody pulled back to see. It is
 * also what keeps the cost down: a structure is an RDKit call and an SVG
 * subtree, and zoomed out is where the most nodes are on screen at once. The
 * culling in `applyLevel` is what bounds that, so the threshold trades
 * legibility rather than a campaign's worth of RDKit calls.
 *
 * It has to stay above `ZOOM_LIMITS.min`, which is where the wheel stops on a
 * graph small enough to be framed above it. A threshold at the floor is a level
 * below it that a reader can never reach.
 */
export const ZOOM_LEVELS: readonly NodeDetail[] = [
  { id: "structures", from: 0.18, structure: true },
  { id: "boxes", from: 0, structure: false },
];

/** The level a zoom falls in. */
export const levelAt = (scale: number): NodeDetail =>
  ZOOM_LEVELS.find((level) => scale >= level.from) ?? ZOOM_LEVELS[ZOOM_LEVELS.length - 1];

/** How far outside the viewport a structure is still built, so panning does not tear. */
const CULL_MARGIN = 200;

/**
 * How wide a transformation is drawn, and how wide it is to a pointer.
 *
 * Both in screen pixels rather than in graph units - `vector-effect` below is
 * what makes that true - but the drawn line and the target answer the zoom
 * differently, because they are asked different questions.
 *
 * The target does not move. The camera frames a whole campaign at once and
 * never zooms in past 1, so a twenty-system graph is drawn at about a third and
 * a two-hundred-system one at a few hundredths: a target that shrank with the
 * graph would be hardest to hit on exactly the networks with the most edges to
 * tell apart. `hit` is that target, an invisible line under the visible one, so
 * an edge can be easy to click without being drawn heavy enough to crowd the
 * boxes it runs between.
 *
 * The drawn line does move, through `edgePx`. Held at one weight it reads well
 * up close and turns a pulled-back campaign into a mesh of cables between dots:
 * the boxes shrink with the scene and the lines between them do not, so what is
 * left is mostly edge. It tracks the zoom down to `min`, which is the floor that
 * keeps a hairline drawn at all - under the floor `BOX_STROKE` keeps, so a
 * pulled-back campaign reads as boxes with lines between them rather than the
 * other way round.
 */
const EDGE = { width: 2, selectedWidth: 3.5, min: 1, hit: 20 };

/** How heavy an edge is drawn at this zoom, in screen pixels. */
export const edgePx = (scale: number, selected: boolean): number => {
  const full = selected ? EDGE.selectedWidth : EDGE.width;
  return Math.max(EDGE.min, Math.min(full, full * scale));
};

/**
 * The border round a system's box, in screen pixels rather than graph units.
 *
 * A box is a shape and scales with the scene, but its border is a line, and a
 * line drawn in graph units is a line the zoom can take away: the camera frames
 * a whole campaign at once, so a dense network sits at a few hundredths and a
 * two-unit border there is nothing at all. That is exactly backwards - the
 * further back a reader stands, the more the outline is what tells one box from
 * the next, because the picture inside it has stopped being legible.
 *
 * So it is drawn like the edges are, in pixels through `vector-effect`, and
 * `strokePx` tracks the zoom between `min` and the full-zoom weight. `min` is
 * what a box pulled back to a block keeps; without a floor the border would
 * vanish at the zoom that needs it most, and without a ceiling a block a few
 * pixels across would be drawn as nothing but border.
 */
const BOX_STROKE = { width: 3, selectedWidth: 4.5, min: 1.25 };

/** How heavy a box's border is drawn at this zoom, in screen pixels. */
export const strokePx = (scale: number, selected: boolean): number => {
  const full = selected ? BOX_STROKE.selectedWidth : BOX_STROKE.width;
  return Math.max(BOX_STROKE.min, Math.min(full, full * scale));
};

/**
 * `collisionRadius` holds two centres 252 apart, which clears the corner of a
 * depicted box - half its diagonal is a little under 125 - so no zoom can bring
 * two boxes into each other. That is the only reason it is this number, and it
 * is why growing `NODE` is a change to this table as well. `linkDistance` is
 * twice it for the reason the ligand network's own forces are written against
 * one number: a link asking for less than collision enforces is a squeeze every
 * pair resists by sitting exactly on the collision boundary, which is a layout
 * with no structure left in it.
 *
 * `chargeStrength` was pulled in when the boxes grew. Repulsion is what sets
 * how far apart the graph settles, and leaving it where it was would have
 * inflated the layout by as much as the boxes grew - the same picture at a
 * smaller framing, which is no bigger a box on anybody's screen. Pulling it in
 * is what turns a bigger box into a bigger share of the canvas.
 */
const FORCE = {
  linkDistance: 252,
  linkStrength: 0.4,
  chargeStrength: -950,
  collisionRadius: 126,
  collisionIterations: 3,
  tickMultiplier: 2,
};

/** How much of the width the graph gets, before anyone drags the divider. */
const CANVAS_SHARE = { initial: 0.56, min: 0.25, max: 0.78 };

/** Breathing room between the outermost box and the edge of the canvas. */
const FIT_MARGIN = 24;

/**
 * How far a node's own box reaches from its position, which is its centre.
 *
 * What the camera frames is boxes rather than points: an outermost system has
 * to be inside the canvas along with its label, not centred on the edge of it.
 * The taller of the two boxes whether or not any is drawn that way, because a
 * fit that framed short boxes and then grew one at the edge of the canvas into
 * its structure would cut that structure in half.
 */
const NODE_EXTENT = { x: NODE.width / 2, y: NODE.depictedHeight / 2 };

/**
 * How far what a filter left out is faded, rather than removed.
 *
 * Dimmed and not hidden, for the same reason the ligand network dims: seeing
 * what is *not* in the answer is half of reading a filter. The two numbers
 * differ because an edge is a thin line and a box is a filled shape - equal
 * opacities do not read as equally faded.
 */
const DIM = { node: 0.12, edge: 0.06 };

/** How far in the canvas zooms to show one system the reader went looking for. */
const FOCUS_SCALE = 1.4;

/** How far a pointer may wander during a node drag and still count as a click, in pixels. */
const CLICK_SLOP = 3;

/** A node's label: its name, or a short form of its gufe key. */
const nodeLabel = entryLabel;

function truncate(text: string, limit: number): string {
  return text.length > limit ? `${text.slice(0, limit - 1)}...` : text;
}

/**
 * What a chemical system is made of, as the set of its component types, sorted.
 *
 * The labels are deliberately not part of it. A campaign calls the same protein
 * "protein" in one system and something else in the next, and what tells a
 * solvent leg from a complex leg is that one has a protein in it at all - so
 * this is the set of component *types*, sorted, which is stable against both
 * the labels and the order the components were written in.
 */
function componentTypes(system: ChemicalSystemViz, registry: RegistryIndex): string[] {
  const types = new Set<string>();
  for (const key of Object.values(system.components ?? {})) {
    const component = lookup(registry, key);
    if (!component) {
      types.add("missing");
      continue;
    }
    types.add(
      component.type === "UnknownComponentViz"
        ? component.gufe_type
        : component.type.replace(/(?:Component)?Viz$/, ""),
    );
  }
  return [...types].sort();
}

/** The same thing as one string, which is what two systems are compared by. */
const compositionOf = (system: ChemicalSystemViz, registry: RegistryIndex): string =>
  componentTypes(system, registry).join(" + ");

/** What the systems are made of, and what that makes them look like. */
interface CompositionGroups {
  /** What each system is made of, indexed as the nodes are. */
  signatures: string[];
  /** The distinct compositions, in order of first appearance. */
  compositions: string[];
  colorOf(index: number): NodeColors;
  /** One entry per composition when they are coloured, and empty when they are not. */
  legend: [string, NodeColors][];
}

/**
 * Group the systems by what they are made of, and give each group a colour.
 *
 * The point is the picture a binding campaign makes: every mapping becomes two
 * transformations, a solvent leg and a complex leg, and the graph is two
 * components whose only difference is that one carries a protein. Uncoloured,
 * that reads as one graph that happens to be in two pieces.
 *
 * Nothing is coloured when there is only one composition, because there is
 * nothing to tell apart and a legend saying so is noise. Nothing is coloured
 * when there are more than the palette holds either: at that point the colours
 * have stopped being a distinction and started being decoration.
 */
function compositionGroups(nodes: readonly GraphNode[], registry: RegistryIndex): CompositionGroups {
  // The canvas's own uncoloured node rather than a card's, which is what this
  // used to borrow. A card sits on a panel and is bordered just enough to come
  // away from it; a box sits on the graph canvas, and a card's border on a
  // canvas is a box held together by nothing but its text - white on white in
  // the light theme, and a shade off the ground in the dark one. `netNodeStroke`
  // is the shade the ligand network draws its own plain nodes in, and it is
  // picked to carry an outline rather than to edge a card.
  const plain: NodeColors = { fill: T.netNodeFill, stroke: T.netNodeStroke };
  const signatures = nodes.map((node) => compositionOf(node, registry));
  const compositions = [...new Set(signatures)];
  // The colouring is dropped here, and the compositions are handed back
  // regardless: "show me only the complex leg" is a question worth answering on
  // a network with seven compositions, even where colouring all seven is not.
  if (compositions.length < 2 || compositions.length > T.netGroupFill.length) {
    return { signatures, compositions, colorOf: () => plain, legend: [] };
  }

  const colors = new Map<string, NodeColors>(
    compositions.map((signature, i) => [signature, { fill: T.netGroupFill[i], stroke: T.netGroupStroke[i] }]),
  );
  return {
    signatures,
    compositions,
    colorOf: (index) => colors.get(signatures[index]) ?? plain,
    legend: compositions.map((signature) => [signature, colors.get(signature)!]),
  };
}

/**
 * Everything about a system that a search should be able to find it by.
 *
 * Its own name and key, but also its components': someone looking for
 * `lig_ejm_42` is looking for the two systems that carry that ligand, and
 * neither of them is called that. A system named "lig_ejm_42_solvent" would be
 * found either way, but that naming is a convention rather than a guarantee -
 * a network whose systems are unnamed has nothing but its components to go on.
 */
function systemHaystack(system: ChemicalSystemViz, registry: RegistryIndex): string {
  const parts = [system.name ?? "", system["gufe-key"]];
  for (const [label, key] of Object.entries(system.components ?? {})) {
    parts.push(label);
    const component = lookup(registry, key);
    if (!component) continue;
    parts.push(entryLabel(component), component["gufe-key"]);
    const smiles = (component as { smiles?: string }).smiles;
    if (smiles) parts.push(smiles);
  }
  return parts.join(" ").toLowerCase();
}

/** The molecules a network's systems are built from, and who carries what. */
interface LigandIndex {
  /** One structure per distinct small molecule, which is what the matcher sweeps. */
  sources: string[];
  /** Which of those each system carries, indexed as the nodes are. */
  perNode: number[][];
}

/**
 * Index the small molecules of a network once, by molecule rather than by
 * system.
 *
 * A campaign runs every ligand twice - once in solvent, once in complex - so
 * indexing per system would parse the same molecule twice for every pattern.
 * Indexing per molecule and mapping back afterwards halves the sweep, and on a
 * network with a shared cofactor it does much better than that.
 *
 * Only small molecules: a protein has no SMARTS anyone is asking about, and
 * handing a matcher a PDB the size of a receptor per keystroke would be a
 * frozen tab for an answer nobody wanted.
 */
function ligandIndex(nodes: readonly GraphNode[], registry: RegistryIndex): LigandIndex {
  const sources: string[] = [];
  const at = new Map<GufeKey, number>();
  const perNode = nodes.map((node) => {
    const mine: number[] = [];
    for (const key of Object.values(node.components ?? {})) {
      const component = lookupOfType<SmallMoleculeComponentViz>(registry, key, "SmallMoleculeComponentViz");
      if (!component) continue;
      let index = at.get(key);
      if (index === undefined) {
        index = sources.length;
        at.set(key, index);
        sources.push(component.sdf ?? "");
      }
      mine.push(index);
    }
    return mine;
  });
  return { sources, perNode };
}

/**
 * What a node draws: how it is coloured, what it says, and the ligand in it.
 *
 * One object per node rather than three accessors, because the three answers
 * are read together every time and two of them come from the same pass over the
 * system's components.
 */
interface NodeFace {
  colors: NodeColors;
  /** The line under the name: what the system is made of. */
  composition: string;
  /** The same line for a box that is showing its ligand. See `subtitleFor`. */
  besides: string;
  /** The ligand to draw in the box, as SDF, or null where there is none to draw. */
  sdf: string | null;
}

/**
 * The line under the name of a node that is showing its ligand.
 *
 * The whole composition, minus the type the picture above it is already
 * showing: a complex leg reads "Protein + Solvent" over a drawing of its
 * ligand, which says "this ligand, in the protein" without either half being
 * said twice.
 *
 * Only while the picture is there, which is why this is a second line rather
 * than the only one: zoomed out there is nothing to account for the missing
 * type, and a solvent leg reading "Solvent" would be indistinguishable from a
 * system that really is nothing but solvent. Only where the system has exactly
 * one small molecule, too - with a cofactor beside the ligand the picture
 * accounts for one of the two and dropping the type would hide the other - and
 * only where something is left, so a system that is nothing but a ligand still
 * says what it is.
 */
function subtitleFor(types: readonly string[], depicted: boolean, ligands: number): string {
  if (!depicted || ligands !== 1) return types.join(" + ");
  const rest = types.filter((type) => type !== "SmallMolecule");
  return (rest.length ? rest : types).join(" + ");
}

interface MenuParts {
  nodes: readonly GraphNode[];
  edges: readonly GraphEdge[];
  /** What each system can be searched by, indexed as `nodes` is. */
  haystacks: readonly string[];
  /** What each system is made of, indexed as `nodes` is. */
  signatures: readonly string[];
  /** The colour of each system, for the swatch that ties a row to the canvas. */
  colorOf(index: number): NodeColors;
  /** The distinct compositions, in the order the legend lists them. */
  compositions: readonly string[];
  selected: Set<string>;
  filter: { composition: string };
  query: { text: string };
  /** Re-run the emphasis after the query, the composition or the selection moves. */
  refresh(): void;
  /** Bring one system into view and open it. */
  focus(index: number): void;
  /**
   * Which systems the current SMARTS pattern left, or null when there is none.
   *
   * A function rather than a value: the sweep is asynchronous, so what it
   * answers changes under a menu that has already been built.
   */
  matched(): ReadonlySet<number> | null;
  /** Sweep a pattern. The view decides what its result then hides. */
  match(smarts: string): Promise<MatchOutcome>;
  /** Hand back the list's own redraw, for when a sweep finishes. */
  mounted(rerender: () => void): void;
}

/**
 * The network's menu: search, the composition filter, and the system list.
 *
 * The same three things the ligand network's menu is, asking the two questions
 * an alchemical network raises instead of the two a ligand network does. A
 * ligand network filters by mapping score, which nothing here has; what this
 * has instead is legs - the same campaign run in solvent and in complex - and
 * "show me only the complex leg" is the filter people reach for. The search is
 * the same idea in both, over a different haystack.
 *
 * Everything is a preference and survives a reload, except the selection: it
 * names systems in the network on screen, and restoring it onto a different one
 * would restore nonsense.
 *
 * Lazily built, like the ligand one, and for the same reason: at two hundred
 * systems the list is the most expensive thing in the view, and a menu nobody
 * opened should not pay for it.
 */
function buildMenu(parts: MenuParts): HTMLDivElement {
  const querySetting = textSetting("alchemical-network.query");
  const compositionSetting = textSetting("alchemical-network.composition");

  const panel = el("div", MENU_PANEL);

  const search = el("input", `${SELECT_CSS}width:100%;box-sizing:border-box;`) as HTMLInputElement;
  search.type = "search";
  search.placeholder = "Search systems";
  search.value = querySetting.get();
  parts.query.text = search.value;
  search.setAttribute("aria-label", "Search systems by name, component or gufe key");
  panel.appendChild(search);

  // Under the search and doing the same job by a different route: the search
  // knows a system by its name, this one knows it by what its ligands are made
  // of. Both narrow, so both feed the same list - which is the difference from
  // the ligand network, where a node *is* a molecule and a match has a
  // structure to colour rather than a box to hide.
  const smarts = smartsBox({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: textSetting("alchemical-network.smarts"),
    run: (pattern) => parts.match(pattern),
    describe: (outcome) => {
      const unread = outcome.unreadable ? `, ${outcome.unreadable} could not be read` : "";
      const left = parts.matched()?.size ?? parts.nodes.length;
      return `${left} of ${parts.nodes.length} systems contain it${unread}`;
    },
  });
  panel.appendChild(smarts.element);

  // Only when there is more than one, which is also the rule the legend and the
  // node colouring follow: a network whose systems are all made of the same
  // things has nothing here to choose between.
  if (parts.compositions.length > 1) {
    const row = el("div", `display:flex;align-items:center;gap:6px;font-size:${FONT.small};color:${T.textMuted};`);
    row.appendChild(el("span", "flex-shrink:0;", "made of"));
    const picker = dropdown(
      [{ id: "", label: "anything" }, ...parts.compositions.map((signature) => ({ id: signature, label: signature }))],
      "",
      (id) => {
        parts.filter.composition = id;
        render();
        parts.refresh();
      },
      compositionSetting,
    );
    picker.style.cssText += "flex:1;min-width:0;";
    parts.filter.composition = picker.value;
    row.appendChild(picker);
    panel.appendChild(row);
  }

  const count = el("div", `font-size:${FONT.small};color:${T.textMuted2};`);
  panel.appendChild(count);

  const list = el("div", MENU_LIST);
  panel.appendChild(list);

  panel.appendChild(el("div", `font-size:${FONT.tiny};line-height:1.5;color:${T.textMuted2};`, MULTI_SELECT_HINT));

  const exporter = exportBlock({
    nodes: parts.nodes,
    edges: parts.edges,
    selected: parts.selected,
    words: {
      nodes: { button: "Systems", plural: "systems" },
      edges: { button: "Transformations", plural: "transformations" },
    },
    setting: "alchemical-network.exportAs",
  });
  panel.appendChild(exporter.box);

  const clear = el("button", `${BTN_CSS}width:100%;`, "Clear selection");
  clear.onclick = () => {
    parts.selected.clear();
    render();
    parts.refresh();
  };
  panel.appendChild(clear);

  /** Whether a system survives every filter. The list and the canvas ask this. */
  const shows = (index: number): boolean => {
    const text = parts.query.text.trim().toLowerCase();
    if (text && !parts.haystacks[index].includes(text)) return false;
    if (parts.filter.composition && parts.signatures[index] !== parts.filter.composition) return false;
    const matched = parts.matched();
    if (matched && !matched.has(index)) return false;
    return true;
  };

  const render = (): void => {
    // Whatever the export last said was about a selection that has now changed.
    exporter.clearNote();
    list.replaceChildren();
    const shown = parts.nodes.map((node, index) => ({ node, index })).filter(({ index }) => shows(index));
    count.textContent = `${shown.length} of ${parts.nodes.length} systems`;

    for (const { node, index } of shown) {
      const key = node["gufe-key"];
      const picked = parts.selected.has(key);
      const row = el(
        "button",
        "display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;" +
          `font-family:inherit;font-size:${FONT.small};cursor:pointer;width:100%;min-width:0;` +
          `border:1px solid ${picked ? T.cardBorderActive : T.cardBorder};` +
          `background:${picked ? T.cardBgActive : T.cardBg};color:${T.textPrimary};`,
      );
      // The same colour the box on the canvas is drawn in, so a row and a node
      // are recognisably the same thing without reading either label.
      const colors = parts.colorOf(index);
      row.appendChild(
        el(
          "span",
          "width:10px;height:10px;border-radius:3px;flex-shrink:0;" +
            `background:${colors.fill};border:1px solid ${colors.stroke};`,
        ),
      );
      // The full name, because the canvas caption is truncated to fit its box.
      const name = el("span", "flex:1;min-width:0;overflow-wrap:anywhere;", nodeLabel(node));
      name.title = `${nodeLabel(node)}\n${parts.signatures[index]}`;
      row.appendChild(name);
      row.onclick = (event) => {
        // Plain click jumps to it and opens it; modifier-click adds to the
        // selection, which is what makes "copy the transformations between
        // these six systems" possible.
        if (event.shiftKey || event.metaKey || event.ctrlKey) {
          if (parts.selected.has(key)) parts.selected.delete(key);
          else parts.selected.add(key);
        } else {
          parts.selected.clear();
          parts.selected.add(key);
          parts.focus(index);
        }
        render();
        parts.refresh();
      };
      list.appendChild(row);
    }

    if (!shown.length) {
      list.appendChild(el("div", `font-size:${FONT.small};padding:8px;color:${T.textMuted2};`, "Nothing matches."));
    }
  };

  search.oninput = () => {
    parts.query.text = search.value;
    querySetting.set(search.value);
    render();
    parts.refresh();
  };

  render();
  // The sweep is asynchronous and the pattern may be one this menu opened with,
  // so the list has to be redrawable from outside it.
  parts.mounted(render);
  smarts.apply();
  return panel;
}

/**
 * Seed every node on a circle - deterministic, so reloads look the same.
 *
 * A node someone dragged is left where they put it. A resize redraws from
 * scratch, and a reader who has just pulled two systems apart to get at the
 * transformation between them should not have that undone by a window they
 * happened to widen.
 */
function seedPositions(nodes: GraphNode[], width: number, height: number): void {
  const radius = Math.max(90, Math.min(width, height) * 0.36);
  nodes.forEach((node, i) => {
    if (node.fx !== undefined && node.fy !== undefined) {
      node.x = node.fx;
      node.y = node.fy;
      return;
    }
    const angle = (2 * Math.PI * i) / Math.max(1, nodes.length) - Math.PI / 2;
    node.x = width / 2 + radius * Math.cos(angle);
    node.y = height / 2 + radius * Math.sin(angle);
  });
}

/**
 * Relax the seeded positions with d3, in place. Resolves `false` when d3 is
 * unreachable, which the caller turns into the circular layout and a banner.
 */
async function relax(nodes: GraphNode[], edges: GraphEdge[], width: number, height: number): Promise<boolean> {
  let d3: D3ForceModule;
  try {
    d3 = (await loadD3()) as D3ForceModule;
    if (typeof d3?.forceSimulation !== "function") return false;
  } catch {
    return false;
  }

  // d3-force rewrites link endpoints in place, so it gets its own objects.
  const links = edges.map((edge) => ({ source: edge.from["gufe-key"], target: edge.to["gufe-key"] }));
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((node: GraphNode) => node["gufe-key"])
        .distance(FORCE.linkDistance)
        .strength(FORCE.linkStrength),
    )
    .force("charge", d3.forceManyBody().strength(FORCE.chargeStrength))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide(FORCE.collisionRadius).iterations(FORCE.collisionIterations))
    .stop();

  // Run to completion and draw once, rather than animating a DOM write per node
  // per frame.
  const ticks = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
  for (let i = 0; i < ticks * FORCE.tickMultiplier; i++) simulation.tick();
  return true;
}

export class GufeAlchemicalNetwork extends GufeElement<AlchemicalNetworkViz> {
  protected override placeholder(): string {
    return "Waiting for an AlchemicalNetwork payload...";
  }

  protected renderView(host: HTMLDivElement, payload: AlchemicalNetworkViz): ViewHandle {
    // The nodes are gufe keys; the chemical systems live in the registry, once,
    // which is what lets forty systems share one protein without carrying the
    // PDB forty times.
    const registry = buildRegistry(payload);
    const nodes: GraphNode[] = [];
    let unresolved = 0;
    for (const key of payload.nodes ?? []) {
      const system = lookupOfType<ChemicalSystemViz>(registry, key, "ChemicalSystemViz");
      if (!system) {
        unresolved++;
        continue;
      }
      nodes.push({ ...system, x: 0, y: 0 });
    }
    const byId = new Map(nodes.map((node) => [node["gufe-key"], node]));

    // An edge whose endpoints are not both present cannot be drawn. The schema
    // cannot express "source names a node that exists", so a valid payload can
    // still say this: drop the edge and count it rather than showing a smaller
    // network with no explanation.
    const edges: GraphEdge[] = [];
    let dangling = 0;
    for (const edge of payload.edges ?? []) {
      const from = byId.get(edge.stateA);
      const to = byId.get(edge.stateB);
      if (!from || !to) {
        dangling++;
        continue;
      }
      edges.push({ ...edge, index: edges.length, from, to });
    }

    // Every transformation of a network usually names the same protocol, which
    // is why it is a registry entry rather than a field repeated per edge. A
    // Protocol has no name of its own, so its class name is what identifies it.
    const protocolName = (edge: TransformationViz): string => {
      const protocol = lookupOfType<ProtocolViz>(registry, edge.protocol, "ProtocolViz");
      return protocol?.gufe_type || protocol?.name || "";
    };
    const protocols = new Set(edges.map(protocolName).filter(Boolean));

    const bar = headerStrip(payload.name || "Alchemical network");
    bar.statsEl.appendChild(statChip("systems", String(nodes.length)));
    bar.statsEl.appendChild(statChip("transformations", String(edges.length)));
    if (protocols.size) bar.statsEl.appendChild(statChip("protocol", [...protocols].join(", ")));
    // Placed inside the graph pane rather than above the whole view - see
    // `left` below. The name and the counts are about the network, so they sit
    // over the network, and the detail pane keeps the full height for whatever
    // view is drawing the current selection.

    const groups = compositionGroups(nodes, registry);

    const split = el("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    host.appendChild(split);

    // Set once the graph has a draw function; a no-op until then, because an
    // empty network returns before there is one and the divider is still there
    // to be dragged.
    let redraw = () => {};

    /**
     * What the menu holds, declared before it because a menu that was left open
     * builds during this render.
     *
     * The menu reads and writes these; the canvas reads them back out through
     * `applyEmphasis`. They are plain boxes rather than values so that both
     * sides see the same one after the other has changed it.
     */
    const selected = new Set<string>();
    const filter = { composition: "" };
    const query = { text: "" };
    let applyEmphasis = () => {};
    let focusNode: (index: number) => void = () => {};
    // Assigned once there is a scene; the menu can be opened before there is.
    let openNode: (index: number) => void = () => {};

    // Built once, here rather than in the menu, because the canvas filters
    // against them too and a menu nobody opened must not be what decides
    // whether a remembered search works.
    const haystacks = nodes.map((node) => systemHaystack(node, registry));

    /**
     * RDKit, fetched once and only if something asks.
     *
     * Behind an accessor rather than started here, so that a network nobody
     * types a pattern into never fetches seven megabytes of WebAssembly to do
     * nothing with. This view draws no structures of its own, so unlike the
     * ligand network there is nothing else that would have paid for it.
     */
    let rdkitPromise: Promise<RDKitModule | null> | null = null;
    const rdkit = (): Promise<RDKitModule | null> =>
      (rdkitPromise ??= loadRDKit().catch((e: unknown) => {
        console.warn("[gufe-viz] RDKit failed to load:", errText(e));
        return null;
      }));

    const ligands = ligandIndex(nodes, registry);
    const matcher = createMatcher(rdkit, ligands.sources);

    /**
     * What each node draws, worked out once here rather than per paint.
     *
     * A redraw - a resize, a dragged divider - repaints the whole canvas, and
     * none of this changes when it does: which ligand a system carries and what
     * it is made of are properties of the payload.
     */
    const faces: NodeFace[] = nodes.map((node, index) => {
      // The first small molecule with a structure in it. A system with two is a
      // ligand and a cofactor, and which of them the network is about is the
      // one the payload lists first; the subtitle goes on naming both.
      const sdf = ligands.perNode[index].map((source) => ligands.sources[source]).find((source) => source) ?? null;
      const types = componentTypes(node, registry);
      return {
        colors: groups.colorOf(index),
        composition: types.join(" + "),
        besides: subtitleFor(types, sdf !== null, ligands.perNode[index].length),
        sdf,
      };
    });

    /** The systems the pattern left, or null when there is no pattern in force. */
    let matched: ReadonlySet<number> | null = null;
    let refreshList = () => {};

    const runMatch = async (pattern: string): Promise<MatchOutcome> => {
      const outcome = await matcher.run(pattern);
      // A superseded run says nothing about what should be on screen; the run
      // that superseded it is still going and will.
      if (outcome.status === "superseded") return outcome;
      // Only a sweep that worked filters anything. A pattern RDKit refused
      // leaves the network alone rather than emptying it, which would read as
      // "nothing matches" - a different answer, and the wrong one.
      matched =
        outcome.status === "ok"
          ? new Set(nodes.flatMap((_node, index) => (ligands.perNode[index].some((i) => outcome.matched.has(i)) ? [index] : [])))
          : null;
      refreshList();
      applyEmphasis();
      return outcome;
    };

    const menu = chromeMenu(
      bar,
      () =>
        buildMenu({
          nodes,
          edges,
          haystacks,
          signatures: groups.signatures,
          colorOf: groups.colorOf,
          compositions: groups.compositions,
          selected,
          filter,
          query,
          refresh: () => applyEmphasis(),
          matched: () => matched,
          match: (pattern) => runMatch(pattern),
          mounted: (rerender) => {
            refreshList = rerender;
          },
          // Finding a system in the list and opening it are one action: the
          // list is how you reach one you cannot see on the canvas, and
          // reaching it is not the point.
          focus: (index) => {
            focusNode(index);
            openNode(index);
          },
        }),
      {
        label: "Search, filter and select systems",
        onToggle: () => redraw(),
        remember: flag("alchemical-network.menuOpen", false),
      },
    );
    // `min-height` as well as `min-width`, because the split divides the height
    // instead when the view is taller than it is wide: without it a pane's
    // contents are its floor along whichever axis it is being divided on, and
    // the graph pushes the detail pane off the bottom.
    //
    // The header and the menu are inside this pane rather than above the split,
    // so the row the splitter divides is the graph against the detail pane and
    // nothing else: a selected system gets the pane's whole height for the view
    // that draws it.
    const left = el("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${T.netCanvasBg};`);
    const right = el("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${T.appBg};`);
    const canvas = el("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${T.netCanvasBg};`);
    // The menu beside the canvas, both under the header: a column while there
    // is width for one, a band above the graph when there is not, which is the
    // arrangement `orientMenuPanel` styles the panel for.
    const graphRow = el("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;overflow:hidden;");
    graphRow.appendChild(menu.panel);
    graphRow.appendChild(canvas);
    left.appendChild(bar);
    left.appendChild(graphRow);

    split.appendChild(left);
    split.appendChild(
      splitter(split, left, right, {
        min: CANVAS_SHARE.min,
        max: CANVAS_SHARE.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: num("alchemical-network.canvasShare", CANVAS_SHARE.initial, CANVAS_SHARE.min, CANVAS_SHARE.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => redraw(),
        onOrient: (stacked) => {
          // Stacked, the graph pane is a wide short box and the menu belongs
          // above the canvas rather than beside it, which is the arrangement
          // `orientMenuPanel` restyles the panel for.
          graphRow.style.flexDirection = stacked ? "column" : "row";
          orientMenuPanel(menu.panel, stacked);
        },
      }),
    );
    split.appendChild(right);

    const detail = this.#detailPane(right, registry);

    if (!nodes.length) {
      canvas.appendChild(
        centredMessage(
          unresolved
            ? "None of this network's chemical systems are in its registry."
            : "This network has no chemical systems.",
        ),
      );
      detail.message("Nothing to show.");
      return { cleanup: () => detail.cleanup() };
    }
    if (unresolved) {
      floatingWarning(
        canvas,
        `${unresolved} chemical system${unresolved === 1 ? "" : "s"} named by this network are not in its registry`,
      );
    }
    if (dangling) {
      floatingWarning(
        canvas,
        `${dangling} transformation${dangling === 1 ? "" : "s"} name a system this network does not contain`,
      );
    }

    let alive = true;
    let forceUnavailable = false;
    let selectedItem: { kind: "node" | "edge"; index: number } | null = null;
    let refreshSelection = () => {};
    /** The camera of the scene currently on the canvas; a redraw replaces both. */
    let resetView = () => {};
    let stopScene = () => {};
    /**
     * Which draw is the current one.
     *
     * A draw waits on the force layout, so two of them - the first paint and a
     * resize, or two resizes - are in flight at once, and without this both
     * finish and both append a graph. Which is what happened: a network drawn
     * three times was three graphs stacked down the canvas, the top one
     * covering the rest.
     */
    let era = 0;

    left.appendChild(this.#canvasBar(groups.legend, () => resetView()));

    const select = (kind: "node" | "edge", index: number): void => {
      selectedItem = { kind, index };
      detail.show(kind === "node" ? nodes[index] : edges[index], kind);
      refreshSelection();
    };
    openNode = (index) => select("node", index);

    const draw = (): void => {
      const mine = ++era;
      const width = canvas.clientWidth || 800;
      const height = canvas.clientHeight || 600;
      seedPositions(nodes, width, height);

      const paint = () => {
        if (!alive || mine !== era) return;
        // The outgoing scene owns wheel and pointer listeners on an SVG that is
        // about to be thrown away. Every one of them, not the first: an earlier
        // draw may have appended one before this guard existed to stop it.
        // Torn down here rather than when the draw started, so the graph on
        // screen stays there while the layout for the next one is worked out.
        stopScene();
        canvas.querySelectorAll("svg").forEach((stale) => stale.remove());
        const scene = this.#paint(canvas, nodes, edges, width, height, faces, rdkit, select);
        stopScene = scene.cleanup;
        resetView = scene.reset;
        focusNode = (index) => scene.focusOn(index);
        refreshSelection = () => scene.setSelected(selectedItem);
        refreshSelection();

        /**
         * What the filters leave lit, applied to the canvas.
         *
         * A system is lit when nothing is being asked for at all, or when it is
         * selected, or when it survives both filters. A transformation is lit
         * when both of its systems are - so a selection reads as "these systems
         * and what runs between them", which is also exactly what the
         * Transformations export copies.
         */
        applyEmphasis = () => {
          const text = query.text.trim().toLowerCase();
          const filtering = selected.size > 0 || text.length > 0 || filter.composition !== "" || matched !== null;
          if (!filtering) {
            scene.setEmphasis(null, null);
            return;
          }

          // A selection on its own lights only what is in it: with no search
          // and no composition chosen there is nothing for the two filters to
          // narrow, and a `shown` that answered "yes, trivially" would light
          // the whole canvas back up.
          const narrowing = text.length > 0 || filter.composition !== "" || matched !== null;
          const litNodes = new Set<string>();
          nodes.forEach((node, index) => {
            const shown =
              narrowing &&
              (!text || haystacks[index].includes(text)) &&
              (!filter.composition || groups.signatures[index] === filter.composition) &&
              (!matched || matched.has(index));
            if (selected.has(node["gufe-key"]) || shown) litNodes.add(node["gufe-key"]);
          });

          const litEdges = new Set<number>();
          edges.forEach((edge, index) => {
            if (litNodes.has(edge.from["gufe-key"]) && litNodes.has(edge.to["gufe-key"])) litEdges.add(index);
          });
          scene.setEmphasis(litNodes, litEdges);
        };
        applyEmphasis();
      };

      if (forceUnavailable) {
        paint();
        return;
      }
      relax(nodes, edges, width, height).then((relaxed) => {
        if (!alive || mine !== era) return;
        if (!relaxed) {
          forceUnavailable = true;
          floatingWarning(canvas, "d3 could not be loaded - showing the circular layout instead");
        }
        paint();
      }, paint);
    };

    redraw = draw;
    draw();
    // Start on the first system rather than on an empty pane: half the width is
    // given to the detail, and "click something" is a poor use of it when there
    // is always something worth showing.
    select("node", 0);

    return {
      onResize: () => draw(),
      cleanup: () => {
        alive = false;
        stopScene();
        detail.cleanup();
      },
    };
  }

  /**
   * The strip under the canvas: how to get back, and what the colours mean.
   *
   * The reset is always there and the legend is not. Zoom and pan have no
   * bottom, so a network the reader has flung off the edge needs one control
   * that is always in the same place; a network of one composition has nothing
   * to explain and a legend saying so is noise.
   */
  #canvasBar(entries: readonly [string, NodeColors][], onReset: () => void): HTMLDivElement {
    const bar = el("div", TOOLBAR.bottom);
    bar.appendChild(resetControl(onReset, "Reset pan and zoom"));
    if (!entries.length) return bar;
    bar.appendChild(el("span", `font-size:${FONT.small};color:${T.textMuted};`, "systems made of"));
    for (const [signature, colors] of entries) {
      const item = el("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      item.appendChild(
        el(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;` +
            `background:${colors.fill};border:2px solid ${colors.stroke};`,
        ),
      );
      item.appendChild(
        el("span", `font-size:${FONT.small};color:${T.textPrimary};overflow-wrap:anywhere;`, signature),
      );
      bar.appendChild(item);
    }
    return bar;
  }

  /**
   * The right-hand pane: the selected system or transformation, drawn by the
   * view that already draws it.
   *
   * One `<gufe-view>`, re-pointed rather than rebuilt, which is the same
   * create/update/destroy contract the top level uses: the payload setter tears
   * the outgoing view down, so a protein's 3Dmol context is released before the
   * next selection asks for another one.
   */
  #detailPane(
    host: HTMLDivElement,
    registry: RegistryIndex,
  ): {
    show(item: GraphNode | GraphEdge, kind: "node" | "edge"): void;
    message(text: string): void;
    cleanup(): void;
  } {
    const body = el("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    host.appendChild(body);

    const child = document.createElement("gufe-view") as HTMLElement & { payload: unknown; resize?(): void };
    child.style.cssText = "flex:1;min-width:0;min-height:0;";

    const message = (text: string) => body.replaceChildren(centredMessage(text));

    const show = (item: GraphNode | GraphEdge, kind: "node" | "edge") => {
      // The graph adds fields of its own to the payload's objects - what the
      // layout leaves on a node, an index and two endpoints on an edge - and the
      // schema allows none of them, so what is handed on is everything except
      // those. A node's are `withoutLayout`'s to know: d3 writes more of them
      // than this file does.
      let cut: ChemicalSystemViz | TransformationViz | null;
      if (kind === "node") {
        cut = systemPayloadFor(withoutLayout(item as GraphNode), registry);
      } else {
        const { index: _index, from: _from, to: _to, ...edge } = item as GraphEdge;
        cut = transformationPayloadFor(edge, registry);
      }
      if (!cut) {
        message("This transformation names two chemical systems, and its registry does not hold them.");
        return;
      }
      child.payload = cut;
      if (child.parentNode !== body) body.replaceChildren(child);
    };

    // Removing the nested view fires its own `disconnectedCallback`, which is
    // where whatever it mounted releases its viewers.
    return { show, message, cleanup: () => child.remove() };
  }

  /** Build the SVG for the current positions, and hand back the selection hook. */
  #paint(
    canvas: HTMLDivElement,
    nodes: GraphNode[],
    edges: GraphEdge[],
    width: number,
    height: number,
    faces: readonly NodeFace[],
    rdkit: () => Promise<RDKitModule | null>,
    onSelect: (kind: "node" | "edge", index: number) => void,
  ): {
    setSelected(selection: { kind: "node" | "edge"; index: number } | null): void;
    /** Fade what the filters left out. Null on either means "nothing is filtered". */
    setEmphasis(nodeKeys: ReadonlySet<string> | null, edgeIndices: ReadonlySet<number> | null): void;
    /** Bring one system to the middle, zoomed in enough to read it. */
    focusOn(index: number): void;
    reset(): void;
    cleanup(): void;
  } {
    // Named, so the graph itself can be found among whatever the detail pane
    // has drawn beside it - the ligand-network view names its own the same way.
    // `touch-action` off, or a drag to pan scrolls the page instead.
    const root = svg("svg", { class: "gufe-graph", width, height, style: "display:block;touch-action:none;" });
    canvas.appendChild(root);

    // Everything hangs off one group, which is what the camera moves: the
    // layout's own coordinates are left alone, so what is drawn and where it is
    // drawn stay separate questions.
    const scene = svg("g");
    root.appendChild(scene);
    const lineLayer = svg("g");
    const nodeLayer = svg("g");
    scene.append(lineLayer, nodeLayer);

    /**
     * What a move of the camera redraws, set once the nodes exist.
     *
     * The camera is built before them because the drag handlers below need it,
     * and a zoom cannot redraw nodes that have not been made yet; between here
     * and there a move does nothing, which is what a graph with nothing on it
     * should do.
     */
    let onZoom: (scale: number, tx: number, ty: number) => void = () => {};

    const camera = sceneCamera(root, scene, {
      bounds: () => extentOf(nodes, NODE_EXTENT.x, NODE_EXTENT.y),
      margin: FIT_MARGIN,
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (scale, tx, ty) => onZoom(scale, tx, ty),
    });

    // A pan begins wherever the pointer went down, which on a graph this dense
    // is usually on top of a box or an edge. Without this, letting go of a pan
    // would also change what the detail pane is showing.
    const click = (kind: "node" | "edge", index: number): void => {
      if (!camera.wasPan()) onSelect(kind, index);
    };

    const lines: SVGLineElement[] = [];
    /** The invisible twin of each visible line, in the same order. */
    const hits: SVGLineElement[] = [];
    edges.forEach((edge, index) => {
      const line = svg("line", {
        x1: edge.from.x,
        y1: edge.from.y,
        x2: edge.to.x,
        y2: edge.to.y,
        stroke: T.netEdgeLine,
        "stroke-width": edgePx(1, false),
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;",
      });
      titled(line, edge.name || "transformation");
      line.addEventListener("click", () => click("edge", index));
      lineLayer.appendChild(line);
      lines.push(line);

      // A wider, invisible line under the visible one, so an edge is clickable
      // without having to be thick. Also a screen-pixel width: a target that
      // shrank with the graph would be hardest to hit on the graphs that have
      // the most edges to tell apart.
      const hit = svg("line", {
        x1: edge.from.x,
        y1: edge.from.y,
        x2: edge.to.x,
        y2: edge.to.y,
        stroke: "transparent",
        "stroke-width": EDGE.hit,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;",
      });
      hit.addEventListener("click", () => click("edge", index));
      lineLayer.appendChild(hit);
      hits.push(hit);
    });

    // Which edges each node is an end of, so a drag rewrites those and not all
    // of them: a two-hundred-system campaign has 594, and touching every line
    // on every pointer move is the difference between a drag that follows the
    // hand and one that does not.
    const incident: number[][] = nodes.map(() => []);
    const indexOf = new Map(nodes.map((node, index) => [node, index]));
    edges.forEach((edge, index) => {
      const from = indexOf.get(edge.from);
      const to = indexOf.get(edge.to);
      if (from !== undefined) incident[from].push(index);
      if (to !== undefined && to !== from) incident[to].push(index);
    });

    const boxes: SVGRectElement[] = [];
    // What each box goes back to when it stops being the selected one. Read off
    // the colours rather than recomputed, so there is one answer to what a node
    // is drawn in.
    const restingStroke: string[] = [];
    const nodeGroups: SVGGElement[] = [];
    const labels: SVGTextElement[] = [];
    const subs: SVGTextElement[] = [];
    /** The plate under a ligand, and the group it is drawn into. Null where there is no ligand. */
    const plates: (SVGRectElement | null)[] = [];
    // The group that puts the middle of the plate at the origin. Kept because
    // the plate moves: which of the three box heights is in force decides where
    // the top of the box is, and the plate is measured down from it.
    const holders: (SVGGElement | null)[] = [];
    const depictions: (SVGGElement | null)[] = [];

    nodes.forEach((node, index) => {
      const face = faces[index];
      // Built in the tall shape and shrunk by the first `show`, so everything
      // inside a depicted box - the plate, the group the structure mounts into -
      // is positioned once, against the only box height it is ever drawn in.
      const boxHeight = face.sdf ? NODE.depictedHeight : NODE.height;
      // Placed by one transform on the group rather than by coordinates on each
      // child: a node is five elements now, and a drag that had to rewrite all
      // of them per pointer move is a drag that lags behind the hand.
      const group = svg("g", {
        class: "gufe-node",
        style: "cursor:pointer;",
        transform: `translate(${node.x},${node.y})`,
      });
      nodeGroups.push(group);
      const box = svg("rect", {
        class: "gufe-node-box",
        x: -NODE.width / 2,
        y: -boxHeight / 2,
        width: NODE.width,
        height: boxHeight,
        rx: NODE.radius,
        fill: face.colors.fill,
        stroke: face.colors.stroke,
        "stroke-width": strokePx(1, false),
        // The border is a line in screen pixels, like an edge. See `BOX_STROKE`.
        "vector-effect": "non-scaling-stroke",
      });
      group.appendChild(box);
      boxes.push(box);
      restingStroke.push(face.colors.stroke);

      if (face.sdf) {
        const plate = svg("rect", {
          class: "gufe-node-plate",
          x: -PLATE.size / 2,
          y: -boxHeight / 2 + PLATE.pad,
          width: PLATE.size,
          height: PLATE.size,
          rx: PLATE.radius,
          fill: nodeCardGround(),
          display: "none",
          "pointer-events": "none",
        }) as SVGRectElement;
        group.appendChild(plate);
        plates.push(plate);

        // Two groups: this one puts the middle of the plate at the origin, and
        // the one inside it is what the depiction is mounted into - which
        // overwrites its own transform to scale the drawing down to size.
        const holder = svg("g", { transform: `translate(0,${-boxHeight / 2 + PLATE.pad + PLATE.size / 2})` });
        const depiction = svg("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        holder.appendChild(depiction);
        group.appendChild(holder);
        holders.push(holder);
        depictions.push(depiction);
      } else {
        plates.push(null);
        holders.push(null);
        depictions.push(null);
      }

      const label = svg("text", {
        class: "gufe-node-label",
        x: 0,
        y: -2,
        "text-anchor": "middle",
        fill: T.netNodeLabel,
        "font-size": CAPTION.nameSize,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif",
      });
      label.textContent = truncate(nodeLabel(node), CAPTION.nameChars);
      group.appendChild(label);
      labels.push(label);

      const sub = svg("text", {
        class: "gufe-node-composition",
        x: 0,
        y: 14,
        "text-anchor": "middle",
        fill: T.netInitials,
        "font-size": CAPTION.subSize,
        "font-family": "ui-sans-serif,system-ui,sans-serif",
      });
      sub.textContent = truncate(face.composition, CAPTION.subChars);
      group.appendChild(sub);
      subs.push(sub);

      titled(group, `${nodeLabel(node)} - ${face.composition}`);
      nodeLayer.appendChild(group);
    });

    /**
     * Redraw one node where it now is, and the edges hanging off it.
     *
     * Only that node: the layout is not re-run and nothing else has moved, so
     * rewriting the whole scene per pointer move would be work spent to produce
     * the same picture.
     */
    const place = (index: number): void => {
      const node = nodes[index];
      nodeGroups[index].setAttribute("transform", `translate(${node.x},${node.y})`);
      for (const e of incident[index]) {
        for (const line of [lines[e], hits[e]]) {
          // Both ends, and not one or the other: an edge from a system to
          // itself is a payload the schema allows, and it has this node at both.
          if (edges[e].from === node) {
            line.setAttribute("x1", String(node.x));
            line.setAttribute("y1", String(node.y));
          }
          if (edges[e].to === node) {
            line.setAttribute("x2", String(node.x));
            line.setAttribute("y2", String(node.y));
          }
        }
      }
    };

    // --- the ligands, drawn as the zoom asks for them ----------------------

    /** Nodes whose ligand is drawn, and nodes whose ligand RDKit could not draw. */
    const drawn = new Set<number>();
    const failed = new Set<number>();

    /**
     * The palette every ligand here is drawn in, asked for once per view.
     *
     * `cpk`: a box shows one molecule, not a mapping, so RDKit's element colours
     * are what a reader recognises it by. On a dark page they are the dark ones,
     * which is the page on which `PLATE` is dark.
     */
    const depictOptions = depictThemeOptions("cpk");

    const inject = (RDKit: RDKitModule, index: number): void => {
      if (drawn.has(index) || failed.has(index)) return;
      const target = depictions[index];
      const sdf = faces[index].sdf;
      if (!target || !sdf) return;
      const markup = depictSVG(RDKit, sdf, DEPICT_SIZE, DEPICT_STYLE.layout, undefined, depictOptions);
      // Marked failed rather than left to be tried again: a molecule RDKit
      // cannot draw now will not draw on the next pan either, and a node that
      // keeps asking pays for the attempt every time the view moves.
      if (!markup || !mountDepiction(target, markup, DEPICT_SIZE, PLATE.size - PLATE.inset * 2)) {
        failed.add(index);
        return;
      }
      drawn.add(index);
    };

    /**
     * Draw one node at a level and a zoom.
     *
     * A node that has no ligand, or whose ligand has not been drawn yet, shows
     * what it showed before: its name and its composition in the middle of the
     * box. A node with one shows it, and the two lines of text move down to sit
     * under the picture rather than across it.
     *
     * `scale` is here for the writing alone. Which level is in force is a
     * decision about the whole canvas; whether a line in a box can still be
     * read is a measurement in screen pixels, and only the zoom knows that -
     * see `LABEL_MIN_PX`. A box whose writing has gone loses the room it was
     * being kept in with it, so what is left is the picture and its frame
     * rather than the picture and a band of empty colour.
     */
    const show = (index: number, structures: boolean, scale: number): void => {
      const showing = structures && drawn.has(index);
      const legible = (size: number): boolean => size * scale >= LABEL_MIN_PX;
      const named = legible(CAPTION.nameSize);
      const described = legible(CAPTION.subSize);
      labels[index].setAttribute("display", named ? "inline" : "none");
      subs[index].setAttribute("display", described ? "inline" : "none");
      plates[index]?.setAttribute("display", showing ? "inline" : "none");
      depictions[index]?.setAttribute("display", showing ? "inline" : "none");
      const written = named || described;
      const boxHeight = showing ? (written ? NODE.depictedHeight : NODE.platedHeight) : NODE.height;
      boxes[index].setAttribute("y", String(-boxHeight / 2));
      boxes[index].setAttribute("height", String(boxHeight));
      const top = -boxHeight / 2 + PLATE.pad;
      plates[index]?.setAttribute("y", String(top));
      holders[index]?.setAttribute("transform", `translate(0,${top + PLATE.size / 2})`);
      const bottom = boxHeight / 2 - CAPTION.bottom;
      // The name takes the composition's row when the composition has gone, so
      // a box is never padded out by a line that is not being drawn.
      labels[index].setAttribute("y", String(showing ? bottom - (described ? CAPTION.gap : 0) : -2));
      subs[index].setAttribute("y", String(showing ? bottom : 14));
      const face = faces[index];
      subs[index].textContent = truncate(showing ? face.besides : face.composition, CAPTION.subChars);
    };

    /**
     * The level the last move put in force.
     *
     * Read again when RDKit answers, because it answers a frame or two late and
     * the view may have pulled back out in the meantime: what a structure is
     * drawn against is where the canvas is now, not where it was when the
     * structure was asked for.
     */
    let current: NodeDetail | null = null;

    /**
     * Every stroke the zoom and the selection decide between them, repainted
     * when either moves.
     *
     * A box's border and an edge each say two things at once - what it is, in
     * its colour, and whether it is the selected one - while how heavily it says
     * them is the zoom's business. Both writers go through here so that neither
     * can put back a weight the other has just chosen: selecting used to write a
     * fixed width, which at any zoom but one was the wrong one.
     */
    let zoomScale = 1;
    let selectedBox: number | null = null;
    let selectedLine: number | null = null;
    const paintStrokes = (): void => {
      boxes.forEach((box, index) => {
        const active = selectedBox === index;
        box.setAttribute("stroke", active ? T.cardBorderActive : restingStroke[index]);
        box.setAttribute("stroke-width", String(strokePx(zoomScale, active)));
      });
      lines.forEach((line, index) => {
        const active = selectedLine === index;
        line.setAttribute("stroke", active ? T.netHaloColor : T.netEdgeLine);
        line.setAttribute("stroke-width", String(edgePx(zoomScale, active)));
      });
    };

    const applyLevel = (scale: number, tx: number, ty: number): void => {
      const level = levelAt(scale);
      current = level;
      // On the canvas rather than only in this closure: which level is in force
      // is the first thing anyone asks when the picture looks wrong, and this
      // way it is visible in devtools and assertable in a test.
      root.setAttribute("data-detail", level.id);
      zoomScale = scale;
      paintStrokes();
      for (let i = 0; i < nodes.length; i++) show(i, level.structure, scale);
      if (!level.structure) return;

      // Only the nodes on screen, plus a margin so panning does not tear. This
      // and the once-each rule above are what a two-hundred-system campaign
      // costs instead of two hundred RDKit calls before the first frame.
      const wanted: number[] = [];
      nodes.forEach((node, index) => {
        if (!faces[index].sdf || drawn.has(index) || failed.has(index)) return;
        const x = node.x * scale + tx;
        const y = node.y * scale + ty;
        if (x < -CULL_MARGIN || y < -CULL_MARGIN || x > width + CULL_MARGIN || y > height + CULL_MARGIN) return;
        wanted.push(index);
      });
      if (!wanted.length) return;

      rdkit()
        .then((RDKit) => {
          if (!RDKit || current !== level) return;
          for (const index of wanted) {
            inject(RDKit, index);
            show(index, true, scale);
          }
        })
        .catch(() => undefined);
    };
    onZoom = applyLevel;

    /**
     * Dragging a system, and telling a drag from a click.
     *
     * A campaign graph is laid out by a force simulation, which packs systems
     * as tightly as the forces allow: edges end up crossing and running
     * alongside each other, and the one a reader wants is under two others.
     * Pulling a system aside is how you get at it - so the same press has to be
     * able to mean "select this" and "move this", and only the distance the
     * pointer travelled says which.
     *
     * The click is decided here rather than by the camera's `wasPan`. A node
     * swallows its own `pointerdown` so the background does not pan under it,
     * and a camera that never saw the press cannot answer for it.
     */
    nodeGroups.forEach((group, index) => {
      let dragging: { x: number; y: number } | null = null;
      let moved = false;
      group.addEventListener("pointerdown", (event: PointerEvent) => {
        event.stopPropagation();
        const { scale } = camera.transform();
        dragging = { x: event.clientX - nodes[index].x * scale, y: event.clientY - nodes[index].y * scale };
        moved = false;
        group.setPointerCapture(event.pointerId);
      });
      group.addEventListener("pointermove", (event: PointerEvent) => {
        if (!dragging) return;
        // A second finger turns the press into a pinch, and a system that
        // follows one of the two fingers through a zoom is not what either hand
        // meant. The drag is abandoned rather than paused: the gesture owns the
        // canvas from here, and the node keeps where it had got to.
        if (camera.gesturing()) {
          dragging = null;
          moved = true;
          return;
        }
        const { scale } = camera.transform();
        const x = (event.clientX - dragging.x) / scale;
        const y = (event.clientY - dragging.y) / scale;
        if (Math.hypot(x - nodes[index].x, y - nodes[index].y) * scale > CLICK_SLOP) moved = true;
        nodes[index].x = nodes[index].fx = x;
        nodes[index].y = nodes[index].fy = y;
        place(index);
      });
      const release = (): void => {
        dragging = null;
      };
      group.addEventListener("pointerup", release);
      group.addEventListener("pointercancel", release);
      group.addEventListener("click", (event: MouseEvent) => {
        event.stopPropagation();
        if (!moved) onSelect("node", index);
      });
    });

    // Framed rather than left at the identity transform: the force layout puts
    // a twenty-system network well outside an eight-hundred-pixel box, and an
    // unframed one is a blank canvas with nothing on the page saying why.
    camera.fit();

    return {
      setSelected(selection) {
        selectedBox = selection?.kind === "node" ? selection.index : null;
        selectedLine = selection?.kind === "edge" ? selection.index : null;
        paintStrokes();
      },
      /**
       * Dim what is not lit rather than hiding it.
       *
       * Which ones a filter left out is half of what a filter is for: on a
       * campaign graph, seeing that the complex leg has a transformation the
       * solvent leg does not is the whole point, and removing the rest would
       * take that picture away.
       */
      setEmphasis(nodeKeys, edgeIndices) {
        nodeGroups.forEach((group, i) => {
          const lit = !nodeKeys || nodeKeys.has(nodes[i]["gufe-key"]);
          group.setAttribute("opacity", lit ? "1" : String(DIM.node));
        });
        lines.forEach((line, i) => {
          const lit = !edgeIndices || edgeIndices.has(i);
          line.setAttribute("opacity", lit ? "1" : String(DIM.edge));
        });
      },

      focusOn(index: number) {
        const node = nodes[index];
        if (node) camera.centreOn(node.x, node.y, FOCUS_SCALE);
      },

      reset: camera.reset,
      cleanup: camera.cleanup,
    };
  }
}

defineElement("gufe-alchemical-network", GufeAlchemicalNetwork);
