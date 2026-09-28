/**
 * `<gufe-alchemical-network>` - chemical systems joined by transformations.
 *
 * This is the ligand network one level up, and a box here is a ligand with every
 * chemical system that carries it: a campaign runs one ligand series twice, in
 * solvent and in complex, and a graph that drew a node per system drew that as
 * two disconnected copies of the same ligand map. `alchemical-legs.ts` is the
 * collapsing, and the reasoning behind it. What the canvas is for is the ligand
 * map - which ligands exist and what maps onto what - and every line on it is
 * every transformation between its two ligands, so nothing on the canvas
 * belongs to one leg and nothing on it is coloured by one. Which leg is a
 * question asked of one thing at a time, in the pane.
 *
 * Inside that box, zoomed in far enough, is the ligand. It is the thing a chemist
 * recognises a box by - the name is a convention - and it is drawn on the same
 * terms as the ligand network's: built lazily, only for the boxes on screen, and
 * only past the zoom where it can be read. `ZOOM_LEVELS` is where that threshold
 * is. A system with no small molecule in it - a solvent-only reference state, an
 * apo protein - is a box of its own with nothing to put in it, drawn as it
 * always was.
 *
 * The detail pane is where a whole system is drawn, and this view draws none of
 * one itself. Every reference in the payload resolves to a complete payload
 * object, so a selected box opens as a `ChemicalSystemViz` - its legs'
 * components merged into one list - and a selected line as one of its
 * `TransformationViz`, chosen by a switch above the pane; those are exactly
 * what `<gufe-chemical-system>` and
 * `<gufe-transformation>` take. The pane mounts one `<alchemy-view>` and re-points
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
 * What the network runs is on the header rather than in the pane: the
 * protocols. A network may run several - the schema says a protocol per
 * transformation - so one is a readout and several are a chip each, colour
 * coded, and picking a chip colours the lines that protocol runs. `protocolsOf`
 * is what counts them, `edgesByProtocol` what says which lines are whose, and
 * `<gufe-protocol>` is still what draws one on its own.
 *
 * Like the ligand network, d3 is asked for a force layout and nothing else: the
 * SVG, the selection and the fallback circular layout are plain DOM, so the
 * graph still draws when d3 cannot be fetched. Getting around the canvas -
 * framing, wheel zoom, drag to pan, and the reset that undoes both - is
 * `sceneCamera`, which is the same one the ligand network moves on.
 */

import { el, truncate } from "../shared/dom.js";
import { buttonGroup, pickable } from "../shared/controls.js";
import { centredMessage, floatingWarning, headerStrip, statChip } from "../shared/panels.js";
import { chromeMenu, orientMenuPanel, splitter } from "../shared/chrome.js";
import { framejsMenuItem } from "../shared/framejs.js";
import { defineElement, generations, AlchemyElement, type ViewHandle } from "../shared/element.js";
import { extentOf, sceneCamera } from "../shared/camera.js";
import { withoutLayout } from "../shared/layout.js";
import { optionalRDKit, type RDKitModule } from "../shared/engines.js";
import { relax as relaxWith } from "../shared/network/force.js";
import { resolveNetwork } from "../shared/network/resolve.js";
import { networkMenu } from "../shared/network/menu.js";
import { DIM, levelAt as levelIn } from "../shared/network/detail.js";
import { Depictions, detailPane, draggableNodes, visibleAt } from "../shared/network/canvas.js";
import { floatingReset } from "../shared/interact.js";
import { flag, num } from "../shared/settings.js";
import { createMatcher, type MatchOutcome } from "../shared/smarts.js";
import { svg, titled } from "../shared/svg.js";
import { depictSVG } from "../shared/sdf.js";
import { depictThemeOptions, nodeCardGround } from "../shared/depict-theme.js";
import { chargeLabel } from "../shared/charge.js";
import { DEPICT_STYLE } from "../shared/depict-style.js";
import { mountDepiction } from "../shared/depict-node.js";
import { CHIP, FONT, SPACE, TEXT, TOOLBAR, WEIGHT } from "../shared/style.js";
import { T, V } from "../shared/theme.js";
import {
  buildRegistry,
  entryLabel,
  lookup,
  lookupOfType,
  protocolLabel,
  type RegistryIndex,
} from "../schema/registry.js";
import {
  compositionOf,
  componentTypes,
  groupSystems,
  legIndex,
  mergedSystem,
  sharedName,
  tabLabels,
  type LegIndex,
  type SystemGroup,
} from "./alchemical-legs.js";
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
// The typings and the driver are `shared/network/force.ts`. What is not shared
// with the ligand-network view is the force set: box-shaped nodes here against
// depiction-sized discs there, at different scales. A link here is a plain pair
// of endpoints, because a transformation carries nothing that changes how far
// apart its two systems settle.

/** What d3-force wants a link to look like; it rewrites these in place. */
interface D3Link {
  source: string;
  target: string;
}

/**
 * A box on the canvas: a ligand and its systems, with its layout position.
 *
 * `SystemGroup` rather than a `ChemicalSystemViz`, because a box stands for
 * every leg of one ligand and no single system is the box. What it keeps of a
 * system is the key it is addressed by and the name it is drawn under - which
 * is all `SelectableNode` asks for, so the menu and the copy-out block work on
 * boxes without knowing any of this.
 */
interface GraphNode extends SystemGroup {
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
 * A line on the canvas: every transformation running between the same two boxes.
 *
 * One per pair rather than one per transformation, because once a ligand is one
 * box its legs run between the same two of them: two lines there are two things
 * to click that say the same thing about which ligands are being compared, and
 * the reader has no way of knowing which is which until one is open. Which leg
 * is chosen in the pane instead, the same way a box's is.
 *
 * `legs` are those transformations, in leg order, and `labels` what to call each
 * of them - the leg, or its own name where the leg cannot tell two apart. See
 * `tabLabels`.
 */
interface GraphEdge {
  index: number;
  from: GraphNode;
  to: GraphNode;
  legs: TransformationViz[];
  labels: string[];
  /** What the line is called: what its transformations' names share, or the first's. */
  name: string;
}

/** What a box is drawn in, which is the same thing for every box on the canvas. */
interface NodeColors {
  fill: string;
  stroke: string;
}

/**
 * The plain box, read per render because the theme can change under a live view.
 *
 * The canvas's own uncoloured node rather than a card's. A card sits on a panel
 * and is bordered just enough to come away from it; a card's border on a canvas
 * is a box held together by nothing but its text - white on white in the light
 * theme, and a shade off the ground in the dark one. `netNodeStroke` is the shade
 * the ligand network draws its own plain nodes in, and it is picked to carry an
 * outline rather than to edge a card.
 */
const plainColors = (): NodeColors => ({ fill: T.netNodeFill, stroke: T.netNodeStroke });

/**
 * The two boxes a system is drawn in.
 *
 * `height` is a system with nothing to depict: a name and what it is made of,
 * and no room asked for beyond them. `depictedHeight` is one with a ligand, and
 * the extra is the square the ligand is drawn in plus the two rows of text that
 * move underneath it.
 *
 * Which of the two a system gets is decided once, by whether it carries a
 * ligand, and no zoom changes it. What a zoom changes is what is drawn inside:
 * the writing goes when it is too small to read and the picture goes when it is
 * too small to recognise, and through both of those a system stays the shape it
 * was. It cost two shapes to fit the box to its contents at every distance, and
 * what the reader got for it was a graph whose nodes changed shape underneath
 * them as they pulled back, which is a worse thing to look at than a box with a
 * little room to spare in it.
 *
 * The layout reserves room for the taller box either way, and
 * `FORCE.collisionRadius` holds two systems far enough apart for it, so no
 * arrangement of shapes can bring two of them into each other.
 */
const NODE = { width: 176, height: 54, depictedHeight: 176, radius: 10 };

/** The shape a system is drawn in: its ligand decides, and the zoom never does. */
const boxHeightOf = (sdf: string | null | undefined): number => (sdf ? NODE.depictedHeight : NODE.height);

/**
 * The square a ligand is drawn on inside its box, and the room it leaves.
 *
 * A plate at all because a structure drawn straight onto the box's own ground is
 * a structure nobody can read: whichever palette RDKit is using, it was picked
 * against a plain ground and not against whatever a box is filled with.
 * `depict-theme.ts` says which plain ground, so that the plate and the ink on it
 * move together. The plate is square and inset rather than filling the box,
 * which leaves the box showing as a frame on all four sides: the picture is the
 * ligand and the frame around it is the box holding it, which is what keeps a
 * drawing from reading as one that has been cut out and laid on the canvas.
 * Square because a depiction is - a plate wider than the drawing it holds is a
 * band with a molecule in the middle of it.
 */
const PLATE = { pad: 6, size: 122, radius: 6, inset: 4 };

/** The square RDKit is asked to draw in, in its own units. */
const DEPICT_SIZE = 200;

/**
 * The formal charge of the ligand in a box, and the mark on a transformation
 * that changes one. See `shared/charge.ts` for why either is drawn at all.
 *
 * The badge is pinned to the box's top corner, which is where a reader looks
 * for a mark on a thing rather than a mark on its picture. It is drawn over
 * whatever is there and nothing is laid out around it: the box is the size the
 * system's own contents make it, with or without a charge, so a charged system
 * and a neutral one are the same shape. Dashes rather than a colour on the
 * edges: a line's colour here already says whether it is the selected one.
 */
const CHARGE_BADGE = {
  /** How far in from the box's top corner the charge is written. */
  inset: 22,
  fontSize: 26,
  /**
   * The charge on the zooms that draw no ligand: bigger, and across the upper
   * part of the box rather than in its corner.
   *
   * Out there a box is a rectangle with a name in it, and the charge is the
   * only other thing this view still knows about the system. At the corner size
   * it would be a mark on a block; this is the second thing a reader can still
   * make out. `bigAt` is a fraction of the box's height and keeps it off the
   * two lines of writing, which sit in the middle once there is no picture for
   * them to sit under.
   */
  bigAt: 0.28,
  bigFontSize: 64,
};
const CHARGE_DASH = "6 4";

/** The name and the line under it: their sizes, and where they sit. */
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
 * is lost by it - the box keeps its ligand, and hovering one still gives its
 * name, its systems and their legs in full.
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
export const levelAt = (scale: number): NodeDetail => levelIn(ZOOM_LEVELS, scale);

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
const EDGE = {
  width: 2,
  selectedWidth: 3.5,
  min: 1,
  hit: 20,
  rail: 5,
  /**
   * What the protocol lens multiplies a line's weight by.
   *
   * A multiplier rather than a width of its own, so a lens line doubles whatever
   * the zoom and the selection had already settled on: the lens has to read at
   * every distance, and a fixed weight would be the whole canvas up close and a
   * hairline on a campaign framed at a third.
   */
  lensScale: 2,
};

/**
 * How far apart the two rails of a double line are, in graph units at this zoom.
 *
 * A line holding both legs of a mapping is drawn as two, which is the one thing
 * the canvas says about a line's legs without being opened - see `GraphEdge`.
 * `rail` is the separation in *screen* pixels, like every other width here, and
 * this converts it: the strokes are non-scaling, so rails held a fixed distance
 * apart in graph units would draw a double line up close and a single thick one
 * on a campaign framed at a third. Divided by the zoom, the pair sits the same
 * few pixels apart at every distance, which is what the two strokes between them
 * already do.
 *
 * The floor under the scale is arithmetic rather than judgement: nothing ever
 * asks this at a zoom of zero, and a division that could produce an infinity is
 * a coordinate that would take a line off the canvas.
 */
export const railShift = (scale: number): number => EDGE.rail / 2 / Math.max(scale, 0.001);

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
 * `chargeStrength` is what decides whether the graph reads at all. Repulsion
 * weak enough that collision is the only thing holding boxes apart leaves a
 * layout jammed against that boundary, and a jammed layout is one where lines
 * cross each other and run through boxes that have nothing to do with them.
 * Untangling that by hand afterwards is the reader doing the layout's job. It
 * is not a question of settling for longer: `relax` already runs d3's schedule
 * to completion, and running it several times over moves nothing, so the
 * tangles are where the forces balance rather than somewhere on the way there.
 *
 * `chargeDistanceMax` is what stops that repulsion being paid for in framing.
 * Unbounded, every box pushes every other box, so the layout grows with the
 * size of the network rather than with how crowded any part of it is, and a
 * campaign of a couple of hundred ligands settles over a span that frames each
 * box down to nothing. Bounded, repulsion only separates boxes near enough to
 * be in each other's way, which is the only place it was wanted: the crowded
 * neighbourhood spreads and the graph as a whole does not. A large network
 * comes out framed larger this way than it did at the weaker charge.
 */
const FORCE = {
  linkDistance: 252,
  linkStrength: 0.4,
  chargeStrength: -3600,
  /** Repulsion is local. Past this, boxes are already out of each other's way. */
  chargeDistanceMax: 1200,
  collisionRadius: 126,
  collisionIterations: 3,
  tickMultiplier: 2,
};

/** How much of the width the graph gets, before anyone drags the divider. */
const CANVAS_SHARE = { initial: 0.56, min: 0.25, max: 0.78 };

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

/** How far in the canvas zooms to show one system the reader went looking for. */
const FOCUS_SCALE = 1.4;

/**
 * What the filters leave lit, as sets of box keys and edge indices.
 *
 * A box is lit when nothing is being asked for at all, or when it is selected,
 * or when it survives every filter. A line is lit when both of its boxes are -
 * so a selection reads as "these ligands and what runs between them", which is
 * also exactly what the Transformations export copies.
 *
 * Null means nothing is filtering, which the canvas draws as full strength
 * everywhere rather than as "everything happens to be lit".
 *
 * Pure and outside the render, like the ligand network's `emphasisFor`: it was a
 * thirty-line callback declared as a no-op at the top of `renderView` and
 * reassigned from inside `paint`, which is the wrong place for the one part of
 * this view that is a rule rather than a wiring.
 */
function emphasisFor(
  nodes: readonly GraphNode[],
  edges: readonly GraphEdge[],
  haystacks: readonly string[],
  selected: ReadonlySet<string>,
  query: string,
  matched: ReadonlySet<number> | null,
): { nodes: ReadonlySet<string>; edges: ReadonlySet<number> } | null {
  const text = query.trim().toLowerCase();
  if (!selected.size && !text && matched === null) return null;

  // A selection on its own lights only what is in it: with no search and no
  // pattern there is nothing for the filters to narrow, and a `shown` that
  // answered "yes, trivially" would light the whole canvas back up.
  const narrowing = text.length > 0 || matched !== null;
  const litNodes = new Set<string>();
  nodes.forEach((node, index) => {
    const shown =
      narrowing && (!text || haystacks[index].includes(text)) && (!matched || matched.has(index));
    if (selected.has(node["gufe-key"]) || shown) litNodes.add(node["gufe-key"]);
  });

  const litEdges = new Set<number>();
  edges.forEach((edge, index) => {
    if (litNodes.has(edge.from["gufe-key"]) && litNodes.has(edge.to["gufe-key"])) litEdges.add(index);
  });
  return { nodes: litNodes, edges: litEdges };
}

/** A box's label: its name, or a short form of the gufe key it is addressed by. */
const nodeLabel = entryLabel;

/**
 * Everything about a system that a search should be able to find it by.
 *
 * Its own name and key, but also its components': someone looking for
 * `lig_ejm_42` is looking for the box that ligand is drawn in, and the system
 * inside it may be called nothing of the sort. A system named
 * "lig_ejm_42_solvent" would be found either way, but that naming is a
 * convention rather than a guarantee - a network whose systems are unnamed has
 * nothing but its components to go on.
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

/**
 * The same, for a box: its own name and every system in it.
 *
 * Every system, so that searching a campaign for `lig_ejm_42_complex` still
 * finds the box that leg was collapsed into. A reader who knows the names the
 * payload uses must not have them taken away by a picture that stopped drawing
 * them.
 */
function nodeHaystack(node: SystemGroup, registry: RegistryIndex): string {
  const parts = [nodeLabel(node), ...node.systems.map((system) => systemHaystack(system, registry))];
  return parts.join(" ").toLowerCase();
}

/** The molecules a network's boxes are built from, and who carries what. */
interface LigandIndex {
  /** One structure per distinct small molecule, which is what the matcher sweeps. */
  sources: string[];
  /** The formal charge of each of those, in the same order. */
  charges: number[];
  /** Which of those each box carries, indexed as the nodes are. */
  perNode: number[][];
}

/**
 * Index the small molecules of a network once, by molecule rather than by
 * system.
 *
 * The legs of a ligand hold the very same `SmallMoleculeComponent`, so indexing
 * per system would parse the same molecule twice for every pattern. Indexing per
 * molecule and mapping back afterwards halves the sweep on a campaign, and on a
 * network with a shared cofactor it does much better than that. It is also what
 * makes a box's ligand one entry rather than one per leg.
 *
 * Only small molecules: a protein has no SMARTS anyone is asking about, and
 * handing a matcher a PDB the size of a receptor per keystroke would be a
 * frozen tab for an answer nobody wanted.
 */
function ligandIndex(nodes: readonly GraphNode[], registry: RegistryIndex): LigandIndex {
  const sources: string[] = [];
  const charges: number[] = [];
  const at = new Map<GufeKey, number>();
  const perNode = nodes.map((node) => {
    const mine = new Set<number>();
    for (const system of node.systems) {
      for (const key of Object.values(system.components ?? {})) {
        const component = lookupOfType<SmallMoleculeComponentViz>(registry, key, "SmallMoleculeComponentViz");
        if (!component) continue;
        let index = at.get(key);
        if (index === undefined) {
          index = sources.length;
          at.set(key, index);
          sources.push(component.sdf ?? "");
          charges.push(component.total_charge ?? 0);
        }
        mine.add(index);
      }
    }
    return [...mine];
  });
  return { sources, charges, perNode };
}

/**
 * What a box draws: what it says, and the ligand in it.
 *
 * One object per box rather than three accessors, because the answers are read
 * together every time and most of them come from the same pass over its
 * systems' components.
 */
interface NodeFace {
  /**
   * The line under the name: the legs this ligand was run in, or, on a box
   * standing for a single system, what that system is made of.
   *
   * The legs, because that is the fact collapsing took off the canvas - a
   * campaign's boxes used to say "Protein + Solvent" against "Solvent" and the
   * reader took the leg from that. A box that is one system says nothing about
   * legs it is not part of, and goes on saying what it is made of.
   */
  composition: string;
  /** The same line for a box that is showing its ligand. See `subtitleFor`. */
  besides: string;
  /** The ligand to draw in the box, as SDF, or null where there is none to draw. */
  sdf: string | null;
  /**
   * The formal charge of that same ligand, and 0 where there is none.
   *
   * The ligand the box is showing rather than a total over the system, so the
   * number a reader sees belongs to the picture it is written on. A cofactor
   * carries its own charge and is not counted here; it is the same cofactor on
   * both ends of a transformation, so it cancels out of the one question this
   * is for, which is whether an edge changes the charge.
   */
  charge: number;
  /** The whole box in a sentence, for its tooltip: its systems and their legs. */
  title: string;
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

/**
 * What one box says under its name, and what it says when it is showing its
 * ligand.
 *
 * A box standing for several systems says its legs - "solvent, complex" - and
 * says them at every zoom, because a leg is not something the picture above can
 * account for. A box standing for one goes on saying what that system is made
 * of, which is `subtitleFor`'s rule and the reason the two lines differ at all.
 */
function captionFor(
  node: SystemGroup,
  types: readonly string[],
  depicted: boolean,
  ligands: number,
): { composition: string; besides: string } {
  if (node.systems.length > 1) {
    const legs = node.legs.join(", ");
    return { composition: legs, besides: legs };
  }
  return { composition: types.join(" + "), besides: subtitleFor(types, depicted, ligands) };
}

/**
 * A box in full, for the tooltip: every system it stands for, under its leg.
 *
 * What the box itself cannot hold. A caption is one truncated line and the
 * systems inside a box keep their own names in the payload, so hovering one is
 * how a reader gets from the ligand back to `lig_ejm_31_complex` - and the only
 * place the composition of each leg is written out where the box is saying
 * "solvent, complex" instead.
 */
/** A resolved transformation, before its ends are swapped for the boxes they are in. */
type ResolvedEdge = TransformationViz & { index: number; from: ChemicalSystemViz; to: ChemicalSystemViz };

/**
 * Gather the transformations into one line per pair of boxes.
 *
 * Pairs in the order the payload first names them, and the transformations
 * within a pair in leg order, so a line's tabs read the way every other line's
 * do. Keyed on the unordered pair, because nothing says the legs of a mapping
 * wrote their two states the same way round.
 *
 * By the pair and not by the mapping: two lines between one pair of boxes are
 * two things to click that say the same thing about which ligands are being
 * compared, whether they are the legs of one mapping or two mappings that
 * happen to share their endpoints. Either way the choice belongs in the pane,
 * where there is room to say what is being chosen between.
 */
function bundleEdges(links: readonly ResolvedEdge[], boxOf: Map<GufeKey, GraphNode>, legs: LegIndex): GraphEdge[] {
  const held = new Map<string, { from: GraphNode; to: GraphNode; at: number[] }>();
  const order: string[] = [];
  links.forEach((link, at) => {
    const from = boxOf.get(link.from["gufe-key"])!;
    const to = boxOf.get(link.to["gufe-key"])!;
    const key = [from["gufe-key"], to["gufe-key"]].sort().join(" ");
    const mine = held.get(key);
    if (mine) {
      mine.at.push(at);
      return;
    }
    held.set(key, { from, to, at: [at] });
    order.push(key);
  });

  return order.map((key, index) => {
    const { from, to, at } = held.get(key)!;
    const sorted = [...at].sort((a, b) => legs.ofEdge[a] - legs.ofEdge[b] || a - b);
    // The graph's own fields come off here, so what a pane is handed is the
    // payload's own transformation and the schema allows all of it.
    const mine = sorted.map((i) => {
      const { index: _index, from: _from, to: _to, ...edge } = links[i];
      return edge;
    });
    const names = mine.map((edge) => entryLabel(edge));
    const labels = tabLabels(
      sorted.map((i) => legs.signatures[legs.ofEdge[i]]),
      names,
    );
    return { index, from, to, legs: mine, labels, name: sharedName(names) || names[0] };
  });
}

function titleFor(node: SystemGroup, registry: RegistryIndex): string {
  if (node.systems.length === 1) return `${nodeLabel(node)} - ${compositionOf(node.systems[0], registry)}`;
  const lines = node.systems.map(
    (system, at) => `${node.legs[at]}: ${entryLabel(system)} - ${compositionOf(system, registry)}`,
  );
  return [nodeLabel(node), ...lines].join("\n");
}

/** One protocol a network runs, and how much of the network it runs. */
interface ProtocolEntry {
  protocol: ProtocolViz;
  /** What the header calls it. */
  label: string;
  /** How many of the network's transformations name it. */
  count: number;
  /**
   * The colour its chip carries and its lines take when it is picked.
   *
   * On the entry rather than worked out twice, because the swatch on the header
   * and the strokes on the canvas saying different things is the one way this
   * feature can be wrong.
   */
  color: string;
}

/**
 * Which protocols a network runs, in label order, with a transformation count
 * each.
 *
 * Grouped by gufe key and not by class name: nothing in the schema or in gufe
 * says a network runs one protocol, a campaign that ran its solvent leg under
 * different settings from its complex leg is two protocols of the same class,
 * and settings are not in this payload - so the key is the only thing that can
 * tell those two apart. Where a class name does repeat, the key's tail goes on
 * the label, which is what `entryLabel` does for a component with no name.
 *
 * Sorted, so the same network reads the same way on every reload.
 */
function protocolsOf(links: readonly TransformationViz[], registry: RegistryIndex): ProtocolEntry[] {
  const held = new Map<GufeKey, ProtocolEntry>();
  for (const edge of links) {
    const protocol = lookupOfType<ProtocolViz>(registry, edge.protocol, "ProtocolViz");
    if (!protocol) continue;
    const entry = held.get(protocol["gufe-key"]);
    if (entry) {
      entry.count++;
      continue;
    }
    held.set(protocol["gufe-key"], {
      protocol,
      label: protocolLabel(protocol),
      count: 1,
      // Assigned below, once the entries are in the order they are read in.
      color: T.netEdgeLine,
    });
  }

  const entries = [...held.values()];
  const sharing = new Map<string, number>();
  for (const entry of entries) sharing.set(entry.label, (sharing.get(entry.label) ?? 0) + 1);
  for (const entry of entries) {
    if ((sharing.get(entry.label) ?? 0) > 1) entry.label = `${entry.label} ${entryLabel(entry.protocol)}`;
  }
  entries.sort((a, b) => (a.label < b.label ? -1 : a.label > b.label ? 1 : 0));
  // After the sort, so the colours run in the order the chips are read in. Ten
  // of them, which is what a campaign that ran a protocol per leg across five
  // targets needs before two chips share a colour. Cycled past that rather than
  // given up on: one lens is lit at a time, so a repeat at eleven costs a reader
  // nothing on the canvas, and the chip row still names which one they picked.
  entries.forEach((entry, at) => {
    entry.color = T.netProtocolStroke[at % T.netProtocolStroke.length];
  });
  return entries;
}

/**
 * What the header says a network runs, where it runs one.
 *
 * A readout and not a control. What this payload knows about a protocol is its
 * class name - settings are deliberately not in the schema - so the name is the
 * whole of it, and a chip that opened a card saying the same name again was a
 * click that led nowhere. With one protocol there is nothing to pick out on the
 * canvas either: every line is running it.
 */
function protocolReadout(entry: ProtocolEntry): HTMLSpanElement {
  const chip = statChip("protocol", entry.label);
  chip.title = `${entry.label} - ${countedEdges(entry.count)}`;
  return chip;
}

/**
 * The protocols as a chip each, where a network runs more than one: a colour
 * per protocol, and picking one colours the lines it runs.
 *
 * Listed rather than counted, because "protocols 3" names a fact a reader then
 * has no way to open, and because the names are the whole of what the payload
 * holds. What the colour adds is the question the names cannot answer on their
 * own: *which* of a campaign's lines ran under this one. Nothing in gufe says a
 * network runs a single protocol - a campaign whose solvent leg ran under
 * different settings from its complex leg is two of them - and that split is
 * invisible on a canvas where every line is drawn the same.
 *
 * One at a time, and the picked chip clears itself. This is a lens rather than a
 * filter: it recolours, it hides nothing, and two lenses at once would put two
 * colours on the lines that run both, which is a picture that means nothing. The
 * pane is not touched either - the protocols are not what is selected, the boxes
 * and the lines still are - so a reader can pick a protocol and then go on
 * reading transformations with its lines still marked.
 *
 * `aria-pressed` carries which one, so the chips are as pickable to a screen
 * reader as they look to the eye; the swatch is what makes the colour on the
 * canvas readable back to a name.
 */
function protocolChips(entries: readonly ProtocolEntry[], pick: (entry: ProtocolEntry | null) => void): HTMLDivElement {
  // Named, the way the graph's own SVG is: which shape the header is in is the
  // first thing anyone asks when it looks wrong, and a class is how that is
  // visible in devtools and assertable in a test.
  const host = el("div", `display:inline-flex;align-items:center;flex-wrap:wrap;gap:${SPACE.xs};`);
  host.className = "gufe-protocols";
  host.appendChild(el("span", "", "protocols"));

  let chosen: ProtocolEntry | null = null;
  const chips = entries.map((entry) => {
    const chip = pickable(`${CHIP.plain}${CHIP.button}gap:5px;`, CHIP.className);
    chip.setAttribute("aria-pressed", "false");
    chip.appendChild(
      el("span", `width:8px;height:8px;border-radius:50%;background:${entry.color};flex-shrink:0;`),
    );
    chip.appendChild(el("b", `color:${TEXT.primary};`, entry.label));
    chip.title = `${entry.label} - ${countedEdges(entry.count)}`;
    return chip;
  });

  const apply = (): void => {
    entries.forEach((entry, at) => {
      const on = chosen === entry;
      chips[at].setAttribute("aria-pressed", on ? "true" : "false");
      // The border as well as the swatch, so the picked chip is tied to the
      // colour now on the canvas by more than an eight-pixel dot.
      chips[at].style.borderColor = on ? entry.color : CHIP.restBorder;
    });
    pick(chosen);
  };

  entries.forEach((entry, at) => {
    chips[at].onclick = () => {
      chosen = chosen === entry ? null : entry;
      apply();
    };
    host.appendChild(chips[at]);
  });
  return host;
}

/**
 * Which lines a protocol runs, by graph-edge index.
 *
 * A line is every transformation between two ligands, so it can run more than
 * one protocol: a campaign that ran its two legs differently has both of them on
 * every line. A line is therefore in the set of each protocol any of its legs
 * names, and a picked protocol colours a line if that protocol is on it at all.
 * The alternative - colouring only the lines that run nothing else - would leave
 * exactly the lines a reader is asking about uncoloured.
 */
function edgesByProtocol(edges: readonly GraphEdge[]): Map<GufeKey, Set<number>> {
  const held = new Map<GufeKey, Set<number>>();
  edges.forEach((edge, index) => {
    for (const leg of edge.legs) {
      const at = held.get(leg.protocol) ?? new Set<number>();
      at.add(index);
      held.set(leg.protocol, at);
    }
  });
  return held;
}

/** "14 transformations", pluralised - the share of a network a protocol runs. */
function countedEdges(count: number): string {
  return `${count} transformation${count === 1 ? "" : "s"}`;
}

interface MenuParts {
  nodes: readonly GraphNode[];
  edges: readonly GraphEdge[];
  /** What each box can be searched by, indexed as `nodes` is. */
  haystacks: readonly string[];
  /** What each box says under its name, for a row's tooltip. */
  captions: readonly string[];
  selected: Set<string>;
  query: { text: string };
  /** Re-run the emphasis after the query or the selection moves. */
  refresh(): void;
  /** Bring one box into view and open it. */
  focus(index: number): void;
  /** Bring one line into view and open the transformations it holds. */
  focusEdge(index: number): void;
  /**
   * Which boxes the current SMARTS pattern left, or null when there is none.
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
 * The network's menu: search, a SMARTS filter, and the two lists.
 *
 * The skeleton is `networkMenu`, shared with the ligand network. What is here is
 * what an *alchemical* network's menu is: it searches a precomputed haystack per
 * box - name, systems, components - rather than a system itself.
 *
 * Its second tab lists the transformations, one row per line on the canvas, and
 * every filter above the list reaches them through their ends: a search for
 * `lig_ejm_31` leaves the transformations that ligand was run in, which is the
 * question asked of a campaign more often than "which ligands are in it".
 *
 * There is no filter by leg, because there is nothing left for one to narrow. A
 * ligand belongs to every leg it was run in, so a leg says nothing about which
 * boxes to show; and the legs of a mapping are one line now, so it says nothing
 * about which lines to show either. Which leg is a question asked of one thing
 * at a time, in the pane.
 *
 * Its SMARTS box also does the opposite of the ligand network's. There a node is
 * a molecule and a match has a structure to colour; here a box holds a system
 * made of several, so a match is something to narrow the list by. `shows` is
 * where that difference lives.
 */
function buildMenu(parts: MenuParts): HTMLDivElement {
  const indexOf = new Map(parts.nodes.map((node, index) => [node["gufe-key"], index]));
  /**
   * Whether a box survives the filters now in force.
   *
   * Named rather than written into `shows`, because the transformation list
   * answers the same question of both of a line's ends.
   */
  const showsBox = (index: number): boolean => {
    const text = parts.query.text.trim().toLowerCase();
    if (text && !parts.haystacks[index].includes(text)) return false;
    const matched = parts.matched();
    if (matched && !matched.has(index)) return false;
    return true;
  };
  const endsOf = (edge: GraphEdge): number[] =>
    [edge.from, edge.to].map((node) => indexOf.get(node["gufe-key"]) ?? -1).filter((index) => index >= 0);

  return networkMenu<GraphNode, GraphEdge>({
    namespace: "alchemical-network",
    nodes: parts.nodes,
    edges: parts.edges,
    selected: parts.selected,
    query: parts.query,
    search: {
      placeholder: "Search",
      label: "Search ligands by name, component, system or gufe key",
    },
    smarts: {
      placeholder: "Filter by SMARTS",
      label: "Show only the ligands whose structures match this SMARTS pattern",
      describe: (outcome) => {
        const unread = outcome.unreadable ? `, ${outcome.unreadable} could not be read` : "";
        const left = parts.matched()?.size ?? parts.nodes.length;
        return `${left} of ${parts.nodes.length} ligands contain it${unread}`;
      },
    },
    match: (pattern) => parts.match(pattern),
    shows: (_node, index) => showsBox(index),
    row: (node, index) => ({
      name: nodeLabel(node),
      title: `${nodeLabel(node)}\n${parts.captions[index]}`,
    }),
    // Either end rather than both, because a line is listed for each of the
    // ligands it runs to: narrowing to one ligand and being shown none of its
    // transformations would be the opposite of what the search was for.
    edgeShows: (edge) => endsOf(edge).some(showsBox),
    edgeRow: (edge) => ({
      name: edge.name,
      title: [
        `${nodeLabel(edge.from)} to ${nodeLabel(edge.to)}`,
        // What the line bundles, which is the one thing a row cannot show: the
        // legs are a pane's tabs, and the row is one line of text.
        edge.legs.length > 1 ? `${edge.legs.length} legs: ${edge.labels.join(", ")}` : edge.labels[0],
      ].join("\n"),
    }),
    words: {
      nodes: { tab: "Ligands", plural: "ligands" },
      edges: { tab: "Transformations", plural: "transformations" },
    },
    refresh: parts.refresh,
    focus: parts.focus,
    focusEdge: parts.focusEdge,
    mounted: parts.mounted,
  });
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
function relax(nodes: GraphNode[], edges: GraphEdge[], width: number, height: number): Promise<boolean> {
  // One link per pair of boxes rather than one per transformation. The legs of a
  // mapping run between the same two ligands, and handing the layout both of
  // them would pull that pair twice as hard as a pair mapped in one leg only -
  // a campaign laid out as though half its steps mattered more than the rest.
  const linked = new Map<string, D3Link>();
  for (const edge of edges) {
    const source = edge.from["gufe-key"];
    const target = edge.to["gufe-key"];
    const key = [source, target].sort().join(" ");
    if (!linked.has(key)) linked.set(key, { source, target });
  }

  return relaxWith<GraphNode, D3Link>({
    nodes,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: [...linked.values()],
    tickMultiplier: FORCE.tickMultiplier,
    forces: (d3, links) => [
      [
        "link",
        d3
          .forceLink(links)
          .id((node) => node["gufe-key"])
          .distance(FORCE.linkDistance)
          .strength(FORCE.linkStrength),
      ],
      ["charge", d3.forceManyBody().strength(FORCE.chargeStrength).distanceMax(FORCE.chargeDistanceMax)],
      ["center", d3.forceCenter(width / 2, height / 2)],
      ["collision", d3.forceCollide(FORCE.collisionRadius).iterations(FORCE.collisionIterations)],
    ],
  });
}

/** What is on the canvas now. The mirror of the ligand network's `NetworkScene`. */
interface GraphScene {
  setSelected(selection: { kind: "node" | "edge"; index: number } | null): void;
  /** Fade what the filters left out. Null on either means "nothing is filtered". */
  setEmphasis(nodeKeys: ReadonlySet<string> | null, edgeIndices: ReadonlySet<number> | null): void;
  /**
   * Colour the lines one protocol runs. Null means no protocol is picked, which
   * puts every line back to the resting stroke.
   */
  setProtocol(edgeIndices: ReadonlySet<number> | null, color: string): void;
  /** Bring one system to the middle, zoomed in enough to read it. */
  focusOn(index: number): void;
  /** Frame one line: the midpoint of its two boxes, so both ends stay on screen. */
  focusOnEdge(index: number): void;
  reset(): void;
  cleanup(): void;
}

export class GufeAlchemicalNetwork extends AlchemyElement<AlchemicalNetworkViz> {
  protected override placeholder(): string {
    return "Waiting for an AlchemicalNetwork payload...";
  }

  protected renderView(host: HTMLDivElement, payload: AlchemicalNetworkViz): ViewHandle {
    // The nodes are gufe keys; the chemical systems live in the registry, once,
    // which is what lets forty systems share one protein without carrying the
    // PDB forty times. A key that names no entry, or a transformation naming a
    // system this network does not contain, is a schema-valid payload the view
    // has to survive: both are counted and reported rather than drawn as a
    // silently smaller network. `resolveNetwork` is that rule, shared with the
    // ligand network.
    const registry = buildRegistry(payload);
    const {
      nodes: systems,
      edges: links,
      unresolved,
      dangling,
    } = resolveNetwork<TransformationViz, ChemicalSystemViz>({
      registry,
      keys: payload.nodes ?? [],
      nodeType: "ChemicalSystemViz",
      edges: payload.edges ?? [],
      ends: (edge) => [edge.stateA, edge.stateB],
    });

    // The legs before the boxes and the lines, because they are what puts the
    // systems of a box and the transformations of a line in order: every one of
    // them lists its legs the same way round rather than the way the payload
    // happened to.
    const legs = legIndex(links, registry);
    const legRankOf = (system: ChemicalSystemViz): number => {
      const at = legs.signatures.indexOf(compositionOf(system, registry));
      return at < 0 ? legs.signatures.length : at;
    };

    // One box per ligand. The layout's fields come off the systems on the way
    // in rather than on the way out to a detail pane: a box carries its own
    // position now, so the systems inside it are the payload's own objects and
    // stay that way. `alchemical-legs.ts` is the rule and the reasoning.
    const nodes: GraphNode[] = groupSystems(
      systems.map((system) => withoutLayout(system)),
      registry,
      legRankOf,
    ).map((group) => ({ ...group, x: 0, y: 0 }));

    const boxOf = new Map<GufeKey, GraphNode>();
    for (const node of nodes) for (const system of node.systems) boxOf.set(system["gufe-key"], node);

    // One line per pair of boxes - see `GraphEdge` - holding every
    // transformation that runs between them, in leg order.
    const edges: GraphEdge[] = bundleEdges(links, boxOf, legs);

    // Every transformation names one, which is why a protocol is a registry
    // entry rather than a field repeated per edge, and why what the header has
    // to say is however many of them the network turned out to name.
    const protocols = protocolsOf(links, registry);
    /** Which lines each protocol runs, for the header's chips to colour. */
    const linesOfProtocol = edgesByProtocol(edges);
    /**
     * The protocol the header has picked out, or null when none is.
     *
     * Held here rather than in `protocolChips` as well: a redraw builds a graph
     * with nothing coloured on it, so the lens has to be applied again from
     * outside the chips that set it.
     */
    let lens: ProtocolEntry | null = null;
    const applyLens = (): void => {
      const lit = lens ? linesOfProtocol.get(lens.protocol["gufe-key"]) : undefined;
      scene?.setProtocol(lit ?? null, lens?.color ?? T.netEdgeLine);
    };

    const bar = headerStrip(payload.name || "Alchemical network");
    // Both counts where they differ, because that is where a reader has to be
    // told that a box is not a system: ten boxes over twenty systems is a
    // campaign, and the chip is what says so before anything is clicked.
    if (nodes.length !== systems.length) bar.statsEl.appendChild(statChip("ligands", String(nodes.length)));
    bar.statsEl.appendChild(statChip("systems", String(systems.length)));
    bar.statsEl.appendChild(statChip("transformations", String(links.length)));
    // What the legs are called, so the words on a pane's tabs are on the header
    // too: the canvas itself no longer says which leg anything is.
    if (legs.signatures.length > 1) bar.statsEl.appendChild(statChip("legs", legs.names.join(", ")));
    // One protocol is a readout: every line is running it, so there is nothing
    // for a colour to pick out. Several are chips, one colour each, and picking
    // one colours the lines it runs.
    if (protocols.length === 1) bar.statsEl.appendChild(protocolReadout(protocols[0]));
    if (protocols.length > 1) {
      bar.statsEl.appendChild(
        protocolChips(protocols, (entry) => {
          lens = entry;
          applyLens();
        }),
      );
    }
    // Placed inside the graph pane rather than above the whole view - see
    // `left` below. The name and the counts are about the network, so they sit
    // over the network, and the detail pane keeps the full height for whatever
    // view is drawing the current selection.

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
    const query = { text: "" };

    /**
     * The canvas as it is painted right now, or null before the first paint.
     *
     * One nullable handle rather than a set of callbacks reassigned from inside
     * `paint`: no scene yet, nothing to ask. See `GraphScene`.
     */
    let scene: GraphScene | null = null;

    /**
     * Push whatever the filters now leave lit at whatever is painted now.
     *
     * `emphasisFor` is the rule; this is the line that applies it. A no-op before
     * the first paint, which is correct rather than merely harmless - the next
     * paint applies it again from scratch.
     */
    const applyEmphasis = (): void => {
      const lit = emphasisFor(nodes, edges, haystacks, selected, query.text, matched);
      scene?.setEmphasis(lit?.nodes ?? null, lit?.edges ?? null);
    };

    // Built once, here rather than in the menu, because the canvas filters
    // against them too and a menu nobody opened must not be what decides
    // whether a remembered search works.
    const haystacks = nodes.map((node) => nodeHaystack(node, registry));

    /**
     * RDKit, fetched once and only if something asks.
     *
     * Behind an accessor rather than called here, so that a network nothing
     * draws a structure for never fetches seven megabytes of WebAssembly to do
     * nothing with. `optionalRDKit` answers null instead of rejecting, which is
     * what lets a node fall back to initials.
     */
    const rdkit = (): Promise<RDKitModule | null> => optionalRDKit();

    const ligands = ligandIndex(nodes, registry);
    const matcher = createMatcher(rdkit, ligands.sources);

    /**
     * What each box draws, worked out once here rather than per paint.
     *
     * A redraw - a resize, a dragged divider - repaints the whole canvas, and
     * none of this changes when it does: which ligand a box carries, which legs
     * it was run in and what its systems are made of are all properties of the
     * payload.
     */
    const faces: NodeFace[] = nodes.map((node, index) => {
      // The first small molecule with a structure in it. A box whose systems
      // carry two is a ligand and a cofactor, and which of them the network is
      // about is the one the payload lists first; the caption names both.
      const drawable = ligands.perNode[index].find((source) => ligands.sources[source]);
      const sdf = drawable === undefined ? null : ligands.sources[drawable];
      // Over every system in the box, so that a box standing for one system
      // says exactly what that system is made of, as it always did.
      const types = [...new Set(node.systems.flatMap((system) => componentTypes(system, registry)))].sort();
      const caption = captionFor(node, types, sdf !== null, ligands.perNode[index].length);
      return {
        composition: caption.composition,
        besides: caption.besides,
        sdf,
        charge: drawable === undefined ? 0 : ligands.charges[drawable],
        title: titleFor(node, registry),
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
          captions: faces.map((face) => face.composition),
          selected,
          query,
          refresh: () => applyEmphasis(),
          matched: () => matched,
          match: (pattern) => runMatch(pattern),
          mounted: (rerender) => {
            refreshList = rerender;
          },
          // Finding a ligand in the list and opening it are one action: the
          // list is how you reach one you cannot see on the canvas, and
          // reaching it is not the point.
          focus: (index) => {
            scene?.focusOn(index);
            select("node", index);
          },
          // The same action for a line: reaching it is not the point, and a
          // transformation the reader cannot see on the canvas is exactly the
          // one they came to the list for.
          focusEdge: (index) => {
            scene?.focusOnEdge(index);
            select("edge", index);
          },
        }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => redraw(),
        remember: flag("alchemical-network.menuOpen", false),
        extras: framejsMenuItem,
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
    const left = el("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${V.netCanvasBg};`);
    const right = el("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${V.appBg};`);
    const canvas = el("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${V.netCanvasBg};`);
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

    let forceUnavailable = false;
    let selectedItem: { kind: "node" | "edge"; index: number } | null = null;
    /** Which draw is the current one, and whether the view is still alive. */
    const eras = generations();

    // Whether any transformation changes the charge, which decides whether the
    // strip below explains the dashes. Read off the same ligands the boxes show.
    const chargeByKey = new Map(nodes.map((node, index) => [node["gufe-key"], faces[index].charge]));
    const anyChargeChange = edges.some(
      (edge) => (chargeByKey.get(edge.to["gufe-key"]) ?? 0) !== (chargeByKey.get(edge.from["gufe-key"]) ?? 0),
    );

    floatingReset(canvas, () => scene?.reset(), "Reset pan and zoom");
    if (anyChargeChange) left.appendChild(this.#chargeKey());

    const select = (kind: "node" | "edge", index: number): void => {
      selectedItem = { kind, index };
      detail.show(kind === "node" ? nodes[index] : edges[index], kind);
      scene?.setSelected(selectedItem);
    };

    const draw = (): void => {
      const current = eras.start();
      const width = canvas.clientWidth || 800;
      const height = canvas.clientHeight || 600;
      seedPositions(nodes, width, height);

      const paint = () => {
        if (!current()) return;
        // The outgoing scene owns wheel and pointer listeners on an SVG that is
        // about to be thrown away. Every one of them, not the first: an earlier
        // draw may have appended one before this guard existed to stop it.
        // Torn down here rather than when the draw started, so the graph on
        // screen stays there while the layout for the next one is worked out.
        scene?.cleanup();
        canvas.querySelectorAll("svg").forEach((stale) => stale.remove());
        scene = this.#paint(canvas, nodes, edges, width, height, faces, rdkit, select);

        // A redraw builds a graph with nothing on it, so all three are applied
        // again here rather than only when the reader changes them.
        scene.setSelected(selectedItem);
        applyEmphasis();
        applyLens();
      };

      if (forceUnavailable) {
        paint();
        return;
      }
      relax(nodes, edges, width, height).then((relaxed) => {
        if (!current()) return;
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
        eras.stop();
        scene?.cleanup();
        scene = null;
        detail.cleanup();
      },
    };
  }

  /**
   * The strip under the canvas: what the dashes mean, where there are any.
   *
   * The reset is not here. It floats over the bottom left of the canvas, so a
   * network the reader has flung off the edge still has one control always in
   * the same place without every network paying a row of height for it; a
   * network whose transformations all keep the charge then draws no strip at
   * all.
   *
   * There is no key for the legs. A line is every transformation between its two
   * ligands, so it belongs to no one leg and there is no colour on this canvas
   * for a legend to explain - which leg is a question the pane answers, about
   * one line at a time.
   */
  #chargeKey(): HTMLDivElement {
    const bar = el("div", TOOLBAR);
    const charge = el("div", "display:flex;align-items:center;gap:6px;min-width:0;");
    charge.appendChild(el("span", `width:24px;height:0;border-top:2px dashed ${V.netEdgeLine};flex-shrink:0;`));
    charge.appendChild(el("span", `font-size:${FONT.small};color:${V.textMuted};`, "net charge change"));
    bar.appendChild(charge);
    return bar;
  }

  /**
   * The right-hand pane, and what this view puts in it.
   *
   * The pane itself is `detailPane`, shared with the ligand network. What is
   * here is this view's own half: what a box and a line stand for, and which of
   * it to draw.
   *
   * ## A box is drawn as one system
   *
   * A box holds every leg of its ligand, and the legs of a campaign are the same
   * components twice over - the ligand and the solvent in both, the protein in
   * one - so choosing between them was a control over a list that was mostly
   * itself repeated. `mergedSystem` is the merge, and the only thing it has to
   * be careful about is a label naming two different components.
   *
   * ## A line is drawn as one of its transformations
   *
   * A line is every transformation between two ligands, and they really are
   * different calculations: different states, different mapping, a different
   * picture in the pane. So this is where the choice lives, as a row of legs
   * above the pane, and it is only there on a line that has more than one.
   *
   * Which leg is remembered across lines rather than reset per line. Reading a
   * campaign is going along one leg - clicking six edges to see each one in the
   * protein - and a switch that went back to the solvent leg on every click
   * would make that six clicks longer. A line without the remembered leg opens
   * on its first, which is the leg the header names first.
   *
   * Either way what is handed on has to be cut loose from the network first: the
   * graph staples an index and two endpoints onto a line, and the schema allows
   * neither. A box's systems need no cleaning - a box carries its own position,
   * so the systems inside it were never laid out.
   *
   * ## A protocol is not in here
   *
   * The pane shows what is on the canvas, and a protocol is not on it: it is
   * what runs the lines rather than something drawn. So the protocols are on the
   * header - named by `protocolReadout`, or picked out by `protocolChips`, which
   * colours their lines and leaves whatever this pane is showing alone - and
   * never opened in here.
   */
  #detailPane(
    host: HTMLDivElement,
    registry: RegistryIndex,
  ): {
    show(item: GraphNode | GraphEdge, kind: "node" | "edge"): void;
    message(text: string): void;
    cleanup(): void;
  } {
    const switcher = el("div", `${TOOLBAR}border-top:none;border-bottom:1px solid ${V.toolbarBorder};display:none;`);
    host.appendChild(switcher);
    const pane = detailPane(host);
    /** The leg the reader last opened, by name, so the next line opens on it too. */
    let wanted = "";

    const hideSwitcher = (): void => {
      switcher.style.display = "none";
      switcher.replaceChildren();
    };

    return {
      ...pane,
      show(item, kind) {
        if (kind === "node") {
          hideSwitcher();
          pane.show(systemPayloadFor(mergedSystem(item as GraphNode), registry));
          return;
        }

        const edge = item as GraphEdge;
        const openLeg = (at: number): void => {
          wanted = edge.labels[at] ?? "";
          const cut = transformationPayloadFor(edge.legs[at], registry);
          if (!cut) {
            pane.message("This transformation names two chemical systems, and its registry does not hold them.");
            return;
          }
          pane.show(cut);
        };
        const at = Math.max(0, edge.labels.indexOf(wanted));

        if (edge.legs.length > 1) {
          switcher.replaceChildren();
          switcher.appendChild(el("span", `font-size:${FONT.small};color:${V.textMuted};flex-shrink:0;`, "leg"));
          switcher.appendChild(
            buttonGroup(
              edge.labels.map((label, index) => ({
                id: String(index),
                label,
                title: entryLabel(edge.legs[index]),
              })),
              String(at),
              (id) => openLeg(Number(id)),
            ),
          );
          switcher.style.display = "";
        } else {
          hideSwitcher();
        }
        openLeg(at);
      },
    };
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
  ): GraphScene {
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
      hint: "Click the graph or hold Ctrl to zoom",
      onTransform: (scale, tx, ty) => onZoom(scale, tx, ty),
    });

    // A pan begins wherever the pointer went down, which on a graph this dense
    // is usually on top of a box or an edge. Without this, letting go of a pan
    // would also change what the detail pane is showing.
    const click = (kind: "node" | "edge", index: number): void => {
      if (!camera.wasPan()) onSelect(kind, index);
    };

    /**
     * The zoom the strokes are drawn against, which is what makes them measure
     * the same on screen at every distance: the widths through `edgePx` and
     * `strokePx`, and how far apart a double line's two rails sit through
     * `railShift`. Declared here because the first lay-out below reads it.
     */
    let zoomScale = 1;

    /** The line each edge is drawn as, and the second rail where it has two. */
    const lines: SVGLineElement[] = [];
    const rails: (SVGLineElement | null)[] = [];
    /** The invisible twin of each line, in the same order: what is clicked. */
    const hits: SVGLineElement[] = [];
    /** Which edges are drawn double, so a zoom re-lays those and not all 594. */
    const doubled: number[] = [];
    // What each box's ligand carries, by key, so an edge can ask what it does to
    // the charge. Faces are indexed as nodes are; an edge names its ends.
    const chargeAt = new Map(nodes.map((node, index) => [node["gufe-key"], faces[index].charge]));
    const chargeChangeOf = (edge: GraphEdge): number =>
      (chargeAt.get(edge.to["gufe-key"]) ?? 0) - (chargeAt.get(edge.from["gufe-key"]) ?? 0);

    edges.forEach((edge, index) => {
      const charged = chargeChangeOf(edge);
      const stroke = {
        stroke: T.netEdgeLine,
        "stroke-width": edgePx(1, false),
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        ...(charged ? { "stroke-dasharray": CHARGE_DASH } : {}),
      };
      // Every transformation on the line, under its leg. The canvas says which
      // ligands are being compared and how many legs were run between them, and
      // this is the rest: which legs those are, and what the payload calls them.
      const title = [
        edge.name || "transformation",
        ...edge.legs.map((leg, at) => `${edge.labels[at]}: ${entryLabel(leg)}`),
        charged && `net charge change ${chargeLabel(charged)}`,
      ]
        .filter(Boolean)
        .join("\n");

      const line = svg("line", { class: "gufe-edge", ...stroke, style: "cursor:pointer;" });
      titled(line, title);
      line.addEventListener("click", () => click("edge", index));
      lineLayer.appendChild(line);
      lines.push(line);

      // The second rail of a double line. A line standing for both legs of a
      // mapping is drawn twice, which is the one thing about its legs the canvas
      // can say without being opened - and it is still one edge: the rail takes
      // no pointer events, so what is clicked, hovered and selected is the edge
      // rather than whichever of the two strokes the pointer happened to land
      // on. `railShift` is how far apart they sit.
      if (edge.legs.length > 1) {
        const rail = svg("line", { class: "gufe-edge-rail", ...stroke, "pointer-events": "none" });
        lineLayer.appendChild(rail);
        rails.push(rail);
        doubled.push(index);
      } else {
        rails.push(null);
      }

      // A wider, invisible line under the visible ones, so an edge is clickable
      // without having to be thick. Also a screen-pixel width: a target that
      // shrank with the graph would be hardest to hit on the graphs that have
      // the most edges to tell apart. It carries the tooltip too, being the
      // thing a pointer over an edge actually meets.
      const hit = svg("line", {
        class: "gufe-edge-hit",
        stroke: "transparent",
        "stroke-width": EDGE.hit,
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke",
        style: "cursor:pointer;",
      });
      titled(hit, title);
      hit.addEventListener("click", () => click("edge", index));
      lineLayer.appendChild(hit);
      hits.push(hit);
    });

    /**
     * Put one edge's strokes where its two boxes now are.
     *
     * A single line and the click target run centre to centre. A double line's
     * two rails are pushed either side of that, along its normal, by whatever
     * `railShift` makes a few screen pixels at the zoom in force - so a drag and
     * a zoom both come back through here.
     */
    const layEdge = (index: number): void => {
      const { from, to } = edges[index];
      const write = (line: SVGLineElement, dx: number, dy: number): void => {
        line.setAttribute("x1", String(from.x + dx));
        line.setAttribute("y1", String(from.y + dy));
        line.setAttribute("x2", String(to.x + dx));
        line.setAttribute("y2", String(to.y + dy));
      };
      write(hits[index], 0, 0);
      const rail = rails[index];
      const span = rail ? Math.hypot(to.x - from.x, to.y - from.y) : 0;
      // No rails to separate, or an edge from a box to itself - a payload the
      // schema allows - which has no normal to separate them along.
      if (!rail || !span) {
        write(lines[index], 0, 0);
        rail?.setAttribute("display", "none");
        return;
      }
      rail.removeAttribute("display");
      const shift = railShift(zoomScale);
      const nx = (-(to.y - from.y) / span) * shift;
      const ny = ((to.x - from.x) / span) * shift;
      write(lines[index], nx, ny);
      write(rail, -nx, -ny);
    };
    edges.forEach((_edge, index) => layEdge(index));

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
    /** The formal charge, written on the box. Null on a system whose ligand is neutral, or which has none. */
    const badges: (SVGTextElement | null)[] = [];
    // The group that puts the middle of the plate at the origin. Kept because
    // the plate moves: which of the three box heights is in force decides where
    // the top of the box is, and the plate is measured down from it.
    const holders: (SVGGElement | null)[] = [];
    const depictionGroups: (SVGGElement | null)[] = [];

    // One colour for every box: a box is a ligand, and the palette that used to
    // tell a solvent leg's boxes from a complex leg's has nothing left to say
    // now that a ligand's legs are one box and their steps one line.
    const boxColors = plainColors();

    nodes.forEach((node, index) => {
      const face = faces[index];
      // Built in the tall shape and shrunk by the first `show`, so everything
      // inside a depicted box - the plate, the group the structure mounts into -
      // is positioned once, against the only box height it is ever drawn in.
      const boxHeight = boxHeightOf(face.sdf);
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
        fill: boxColors.fill,
        stroke: boxColors.stroke,
        "stroke-width": strokePx(1, false),
        // The border is a line in screen pixels, like an edge. See `BOX_STROKE`.
        "vector-effect": "non-scaling-stroke",
      });
      group.appendChild(box);
      boxes.push(box);
      restingStroke.push(boxColors.stroke);

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

        // The box's top corner, not the plate's: it marks the system, and the
        // drawing keeps all of its own room. Only a charged ligand gets one, and
        // `show` takes it away again with the picture when the zoom has stopped
        // drawing that.
        if (face.charge) {
          const text = svg("text", {
            class: "gufe-node-charge",
            "text-anchor": "middle",
            "dominant-baseline": "central",
            fill: T.badgeFg,
            "pointer-events": "none",
          }) as SVGTextElement;
          text.textContent = chargeLabel(face.charge);
          group.appendChild(text);
          badges.push(text);
        } else {
          badges.push(null);
        }

        // Two groups: this one puts the middle of the plate at the origin, and
        // the one inside it is what the depiction is mounted into - which
        // overwrites its own transform to scale the drawing down to size.
        const holder = svg("g", { transform: `translate(0,${-boxHeight / 2 + PLATE.pad + PLATE.size / 2})` });
        const depiction = svg("g", { class: "gufe-node-depiction", display: "none", "pointer-events": "none" });
        holder.appendChild(depiction);
        group.appendChild(holder);
        holders.push(holder);
        depictionGroups.push(depiction);
      } else {
        plates.push(null);
        holders.push(null);
        depictionGroups.push(null);
        badges.push(null);
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

      titled(group, face.title);
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
      // Both ends of each, rather than the one that moved: an edge from a box
      // to itself is a payload the schema allows and has this node at both, and
      // a double line's rails are laid out from the direction between its two
      // boxes, which either of them turns. `layEdge` is that rule.
      for (const e of incident[index]) layEdge(e);
    };

    // --- the ligands, drawn as the zoom asks for them ----------------------

    /** Which ligands are drawn, and which RDKit refused. See `Depictions`. */
    const depictions = new Depictions();

    /**
     * The palette every ligand here is drawn in, asked for once per view.
     *
     * `cpk`: a box shows one molecule, not a mapping, so RDKit's element colours
     * are what a reader recognises it by. On a dark page they are the dark ones,
     * which is the page on which `PLATE` is dark.
     */
    const depictOptions = depictThemeOptions("cpk");

    const inject = (RDKit: RDKitModule, index: number): void => {
      if (!depictions.wants(index)) return;
      const target = depictionGroups[index];
      const sdf = faces[index].sdf;
      if (!target || !sdf) return;
      const markup = depictSVG(RDKit, sdf, DEPICT_SIZE, DEPICT_STYLE.layout, undefined, depictOptions);
      // Marked failed rather than left to be tried again: a molecule RDKit
      // cannot draw now will not draw on the next pan either, and a node that
      // keeps asking pays for the attempt every time the view moves.
      if (!markup || !mountDepiction(target, markup, DEPICT_SIZE, PLATE.size - PLATE.inset * 2)) {
        depictions.refused(index);
        return;
      }
      depictions.drew(index);
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
     * see `LABEL_MIN_PX`. What none of it touches is the box: a node keeps the
     * shape `NODE` gave it, so a zoom takes things out of a system and never
     * remakes it.
     */
    const show = (index: number, structures: boolean, scale: number): void => {
      const face = faces[index];
      const showing = structures && depictions.has(index);
      const legible = (size: number): boolean => size * scale >= LABEL_MIN_PX;
      const named = legible(CAPTION.nameSize);
      const described = legible(CAPTION.subSize);
      labels[index].setAttribute("display", named ? "inline" : "none");
      subs[index].setAttribute("display", described ? "inline" : "none");
      plates[index]?.setAttribute("display", showing ? "inline" : "none");
      depictionGroups[index]?.setAttribute("display", showing ? "inline" : "none");
      const boxHeight = boxHeightOf(face.sdf);
      const top = -boxHeight / 2 + PLATE.pad;
      // Drawn at every zoom, because a charge is a fact about the system rather
      // than a detail of its picture, and the zoom that takes the picture away
      // is the one with the least else left in the box. It only changes size:
      // a corner badge over the plate, and half the box across without one.
      const badge = badges[index];
      if (badge) {
        badge.setAttribute("x", String(showing ? NODE.width / 2 - CHARGE_BADGE.inset : 0));
        badge.setAttribute(
          "y",
          String(showing ? -boxHeight / 2 + CHARGE_BADGE.inset : -boxHeight * CHARGE_BADGE.bigAt),
        );
        badge.setAttribute("font-size", String(showing ? CHARGE_BADGE.fontSize : CHARGE_BADGE.bigFontSize));
        // Bold only where it is carrying the box on its own. Over a ligand it is
        // a note beside a drawing, and a bold one competes with the drawing for
        // the same glance.
        badge.setAttribute("font-weight", showing ? WEIGHT.normal : WEIGHT.bold);
      }
      plates[index]?.setAttribute("y", String(top));
      holders[index]?.setAttribute("transform", `translate(0,${top + PLATE.size / 2})`);
      const bottom = boxHeight / 2 - CAPTION.bottom;
      // The name takes the composition's row when the composition has gone, so
      // the writing sits on the bottom of the box either way. With no picture
      // above it there is nothing to sit under, and both lines go back to the
      // middle.
      labels[index].setAttribute("y", String(showing ? bottom - (described ? CAPTION.gap : 0) : -2));
      subs[index].setAttribute("y", String(showing ? bottom : 14));
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
     * can put back a weight the other has just chosen: a selection that wrote a
     * fixed width would be wrong at every zoom but one.
     */
    let selectedBox: number | null = null;
    let selectedLine: number | null = null;
    /**
     * The lines the header's picked protocol runs, and the colour it gave them.
     *
     * A third writer of the same strokes, which is why it comes through
     * `paintStrokes` like the other two rather than painting the lines itself.
     */
    let lensLines: ReadonlySet<number> | null = null;
    let lensColor = T.netEdgeLine;
    const paintStrokes = (): void => {
      boxes.forEach((box, index) => {
        const active = selectedBox === index;
        box.setAttribute("stroke", active ? T.cardBorderActive : restingStroke[index]);
        box.setAttribute("stroke-width", String(strokePx(zoomScale, active)));
      });
      lines.forEach((line, index) => {
        const active = selectedLine === index;
        const lit = lensLines?.has(index) ?? false;
        // The selection wins over the lens: it is one line against however many
        // a protocol runs, and which line the pane is showing has to stay
        // readable whatever else is coloured.
        const color = active ? T.netHaloColor : lit ? lensColor : T.netEdgeLine;
        // Twice the weight where the lens has it. A two-pixel stroke recoloured
        // is a difference a reader has to go looking for, and the whole point of
        // the lens is that the lines it marks are findable at a glance on a
        // campaign too big to read line by line. Doubled from whatever the line
        // would otherwise be, so a lens line the pane is also showing stays the
        // heaviest thing on the canvas rather than dropping to the lens weight.
        const width = String(edgePx(zoomScale, active) * (lit ? EDGE.lensScale : 1));
        // The rail with it: the two strokes are one edge, so a selection that
        // lit one of them would read as an edge half selected.
        for (const stroke of [line, rails[index]]) {
          if (!stroke) continue;
          stroke.setAttribute("stroke", color);
          stroke.setAttribute("stroke-width", width);
        }
      });
    };

    const applyLevel = (scale: number, tx: number, ty: number): void => {
      const level = levelAt(scale);
      current = level;
      // On the canvas rather than only in this closure: which level is in force
      // is the first thing anyone asks when the picture looks wrong, and this
      // way it is visible in devtools and assertable in a test.
      root.setAttribute("data-detail", level.id);
      const zoomed = zoomScale !== scale;
      zoomScale = scale;
      paintStrokes();
      // How far apart a double line's rails sit is a distance in screen pixels,
      // so the zoom is what turns it into coordinates - and only the zoom: a pan
      // moves the whole scene and leaves every rail where it was relative to its
      // own line. Only the doubled edges, because on a network with none this
      // costs nothing at all.
      if (zoomed) for (const index of doubled) layEdge(index);
      for (let i = 0; i < nodes.length; i++) show(i, level.structure, scale);
      if (!level.structure) return;

      // Only the nodes on screen, plus a margin so panning does not tear.
      const wanted = visibleAt(
        nodes,
        { scale, tx, ty },
        { width, height },
        (index) => Boolean(faces[index].sdf) && depictions.wants(index),
      );
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

    // Dragging a system, and telling a drag from a click: `draggableNodes`,
    // shared with the ligand network. What is this view's is `place`, which
    // rewrites only the edges incident on the node that moved.
    draggableNodes(nodeGroups, nodes, camera, { moved: place, clicked: (index) => onSelect("node", index) });

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
      setProtocol(edgeIndices, color) {
        lensLines = edgeIndices;
        lensColor = color;
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
          // Both rails of a double line, for the reason `paintStrokes` writes
          // both: what a filter leaves out is an edge, not a stroke.
          for (const stroke of [line, rails[i]]) stroke?.setAttribute("opacity", lit ? "1" : String(DIM.edge));
        });
      },

      focusOn(index: number) {
        const node = nodes[index];
        if (node) camera.centreOn(node.x, node.y, FOCUS_SCALE);
      },

      focusOnEdge(index: number) {
        const edge = edges[index];
        // The midpoint rather than one end: what a reader picked out of the
        // list is the line, and a line framed on one of its boxes is a line
        // with the other end off the screen.
        if (edge) camera.centreOn((edge.from.x + edge.to.x) / 2, (edge.from.y + edge.to.y) / 2, FOCUS_SCALE);
      },

      reset: camera.reset,
      cleanup: camera.cleanup,
    };
  }
}

defineElement("gufe-alchemical-network", GufeAlchemicalNetwork);
