/**
 * `<gufe-ligand-network>` - the network graph, and a detail pane driven by it.
 *
 * This file is drawing code and nothing else. Python hands over the ligands in
 * the payload's registry and the mappings as edges that name them by gufe key,
 * so nothing here decodes a structure format: no atomic-number tables, no
 * conformer blobs, no GraphML. Resolving a key gives back a whole
 * `SmallMoleculeComponentViz` - which is what lets the detail pane draw the two
 * molecules of the selected mapping without a second shape to unpack, and a
 * clicked ligand by handing that same object straight to the ligand view.
 *
 * Both halves of the graph are clickable and the pane holds one at a time: an
 * edge opens `<gufe-atom-mapping>`, a node opens `<gufe-small-molecule>`. Which
 * is open is the `Selection` below, and it is saved with the view.
 *
 * d3 is used for one thing: the force layout. Zoom, pan, drag, the colour ramp
 * and the SVG itself are plain DOM, so a network still draws when d3 cannot be
 * fetched - it falls back to the circular layout and says why.
 */

import { el, esc, truncate } from "../shared/dom.js";
import { dropdown } from "../shared/controls.js";
import { centredMessage, floatingWarning, headerStrip, statChip } from "../shared/panels.js";
import { chromeMenu, orientMenuPanel, splitter } from "../shared/chrome.js";
import { framejsMenuItem } from "../shared/framejs.js";
import { defineElement, generations, AlchemyElement, seededViewState, type ViewHandle } from "../shared/element.js";
import { choice, flag, num, type Setting } from "../shared/settings.js";
import { svg } from "../shared/svg.js";
import { resetControl } from "../shared/interact.js";
import { extentOf, sceneCamera, type Camera } from "../shared/camera.js";
import { withoutLayout } from "../shared/layout.js";
import { optionalRDKit, type RDKitModule } from "../shared/engines.js";
import { relax as relaxWith } from "../shared/network/force.js";
import { resolveNetwork } from "../shared/network/resolve.js";
import { networkMenu } from "../shared/network/menu.js";
import { DIM, levelAt as levelIn, levelUnder as levelBelow } from "../shared/network/detail.js";
import {
  Depictions,
  detailPane,
  draggableNodes,
  visibleAt,
  type DetailPane,
} from "../shared/network/canvas.js";
import { DEPICT_STYLE, rgbTriple } from "../shared/depict-style.js";
import { depictSVG } from "../shared/sdf.js";
import { chargeChange, chargeLabel } from "../shared/charge.js";
import { depictThemeOptions, nodeCardCaption, nodeCardGround } from "../shared/depict-theme.js";
import { mountDepiction } from "../shared/depict-node.js";
import { createMatcher, type MatchOutcome } from "../shared/smarts.js";
import { FONT, SPACE, TOOLBAR, TOOLTIP, WEIGHT } from "../shared/style.js";
import { T, V } from "../shared/theme.js";
import { buildRegistry, entryLabel, type RegistryIndex } from "../schema/registry.js";
import { mappingPayloadFor } from "./atom-mapping.js";
import type { LigandAtomMappingViz, LigandNetworkViz, SmallMoleculeComponentViz } from "../schema/types.js";

// --- just enough of d3-force to configure it -------------------------------
//
// The typings and the driver are `shared/network/force.ts`; what stays here is
// the link shape this view lays out with and the forces it asks for. A ligand
// network's links carry the mapping score, because how good a mapping is decides
// how near its two ligands settle.

/** What d3-force wants a link to look like. It rewrites these in place, which
 * is why they are their own objects rather than the payload's edges. */
interface D3Link {
  source: string;
  target: string;
  score: number | null;
}

// --- layout state ----------------------------------------------------------

/**
 * A ligand resolved out of the registry, with the coordinates the layout gives
 * it. It is the whole `SmallMoleculeComponentViz` - SDF, SMILES and all - not a
 * node-shaped subset of one, so the depiction and the detail pane read the same
 * object the schema declares.
 */
interface NetNode extends SmallMoleculeComponentViz {
  x: number;
  y: number;
  /** Pinned position: set by the non-force layouts and by dragging. */
  fx?: number;
  fy?: number;
}

/**
 * An edge - which is a `LigandAtomMappingViz`, the same object a standalone
 * mapping payload is - with its two endpoint keys resolved to their ligands.
 */
interface NetEdge extends LigandAtomMappingViz {
  index: number;
  from: NetNode;
  to: NetNode;
}

const LAYOUTS = ["Force-directed", "Circular", "Radial"] as const;
type Layout = (typeof LAYOUTS)[number];

// --- restoring a view ------------------------------------------------------
//
// What a `Setting` does not cover, because none of it is a preference: the
// layout the force simulation settled on, where the canvas is panned to, and
// what is open in the detail pane. All three are about the network on screen rather than
// about how someone likes to read networks, which is the line `settings.ts`
// draws and the reason these travel separately.
//
// The positions are here because they are the expensive, unrepeatable half. A
// force layout converges against the canvas it was given, so the same network
// laid out again in a window of a different size is a different picture - and
// any node the reader dragged is a decision no layout would reproduce at all.

/**
 * What the detail pane is showing.
 *
 * Two things can be open in it and only ever one at a time: the mapping an edge
 * carries, or a ligand on its own. Which one is a discriminated pair rather than
 * two indices, because "an edge is open and so is a ligand" is not a state this
 * view has, and a shape that can express it is a shape someone has to check.
 */
export type Selection = { kind: SelectionKind; index: number } | null;

/** Whether an index into this view's selection means an edge or a ligand. */
export type SelectionKind = "edge" | "ligand";

/** What `<gufe-ligand-network>` saves, and what it will take back. */
export interface NetworkViewState {
  /** Every node's position, in the order the payload lists them. */
  nodes: [number, number][];
  /** The canvas transform: zoom, then pan. */
  scale: number;
  tx: number;
  ty: number;
  /** The open edge or ligand, or -1 for none. */
  selected: number;
  /** Which of the two `selected` counts. Absent in a state saved before ligands could be opened, and read as an edge. */
  selectedKind?: SelectionKind;
}

/** The key this view's state travels under. See `seededViewState`. */
const VIEW_STATE_KEY = "ligand-network";

/** What the detail pane says when nothing is open, and it names both halves. */
const SELECT_HINT = "Click a ligand or an edge to see it.";

/** An edge as the mapping it is, without the two endpoints and the index this view added. */
function mappingOf(edge: NetEdge): LigandAtomMappingViz {
  const { index: _index, from: _from, to: _to, ...mapping } = edge;
  return mapping;
}

/**
 * A node as the payload the standalone ligand view takes.
 *
 * A `NetNode` is a whole `SmallMoleculeComponentViz` with a layout stapled to
 * it, and the layout is this view's business rather than the ligand's - so it
 * comes off before the payload is handed on. Which fields those are is
 * `withoutLayout`'s to know: the force simulation writes more of them than this
 * file does.
 */
function ligandPayloadFor(node: NetNode): SmallMoleculeComponentViz {
  return withoutLayout(node);
}

/** Two decimals is under a thousandth of a node radius, and a third of the size. */
const round2 = (n: number): number => Math.round(n * 100) / 100;

/**
 * Read back what this view saved, or null.
 *
 * Checked the way `settings.ts` checks a stored value, and for the same reason:
 * it arrives as data from outside, possibly written by an older version of this
 * file. The node count has to match as well, because positions are matched to
 * the payload by position - a state restored onto a network with a different
 * number of ligands would place them all wrong rather than fail.
 */
function asNetworkViewState(value: unknown, nodeCount: number): NetworkViewState | null {
  if (!value || typeof value !== "object") return null;
  const state = value as Partial<NetworkViewState>;
  const finite = (n: unknown): n is number => typeof n === "number" && Number.isFinite(n);
  if (!finite(state.scale) || state.scale <= 0 || !finite(state.tx) || !finite(state.ty)) return null;
  if (!Array.isArray(state.nodes) || state.nodes.length !== nodeCount) return null;
  if (!state.nodes.every((at) => Array.isArray(at) && at.length === 2 && at.every(finite))) return null;
  const selected = finite(state.selected) ? Math.trunc(state.selected) : -1;
  // An older state names no kind, and everything an older state could have had
  // open was an edge.
  const selectedKind: SelectionKind = state.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: state.nodes, scale: state.scale, tx: state.tx, ty: state.ty, selected, selectedKind };
}

/**
 * Put the nodes back where they were.
 *
 * Called after `seedPositions`, so it overwrites a seeding rather than racing
 * it, and it carries `fx`/`fy` along wherever the layout was using them - a
 * pinned node whose pin still names its old position would snap back on the
 * next `place()`.
 */
function placeNodesAt(nodes: NetNode[], at: readonly [number, number][]): void {
  nodes.forEach((node, i) => {
    node.x = at[i][0];
    node.y = at[i][1];
    if (node.fx !== undefined) node.fx = node.x;
    if (node.fy !== undefined) node.fy = node.y;
  });
}

// Dimensions came from the framejs prototype and are kept the same, so the two
// pictures are the same picture. The force constants no longer are: see
// `NODE_SPACING` for what was wrong with them and why they had to move.
/** How much of the width the graph gets, before anyone drags the divider. */
const CANVAS_SHARE = { initial: 0.58, min: 0.25, max: 0.8 };

const NODE_RADIUS = 38;
/** The ring round a node, drawn on the styled disc and on the plate that replaces it. */
const NODE_STROKE = 1.5;

/**
 * The formal charge badge on a node, and the mark on an edge that changes one.
 *
 * A charge is drawn only where there is one: a neutral ligand gets no badge,
 * because a badge on every node would be a column of zeros with the two that
 * matter hidden in it. The same rule on the edges - a transformation that keeps
 * the charge is drawn as it always was, and one that does not is dashed.
 *
 * Both read `total_charge` through `shared/charge.ts`, which is where the rule
 * itself lives and where the alchemical network reads the same one.
 */
const CHARGE_BADGE = {
  /** Where the charge sits while the structure has the middle of the node, as a fraction of the radius. */
  at: 0.55,
  fontSize: 22,
  /**
   * The charge on the zooms that draw no structure: bigger, and across the top
   * of the node rather than in the corner of it.
   *
   * Out there a node is a disc with a name in it, and the charge is the only
   * other thing about a ligand this view still knows. At the corner size it
   * would be a dot on a dot; this is the second thing a reader can still make
   * out, which is what a level of detail is for.
   *
   * It stays in the corner rather than moving to the middle, because the middle
   * is where that name is drawn: a charge over it makes two unreadable things
   * out of one readable one, and at this zoom the node is small enough that the
   * corner is beside it rather than far from it.
   */
  bigFontSize: 30,
};
const CHARGE_DASH = "6 4";
const DEPICT_SIZE = 200;

/** How much clear ground is left between the structure's square and the ring. */
const DEPICT_PADDING = 2;

/**
 * The square a structure is drawn in, inside a round node.
 *
 * A square *inscribed* in the disc, not one spanning its width: the corners of a
 * square as wide as the circle stand a further 41% out from the centre, which is
 * where a compact ligand - a fused ring with a substituent on each side, which
 * is most of a campaign - crossed the ring and ran out onto the canvas. A long
 * thin molecule never showed it, because RDKit scales a drawing to its box and a
 * long one only reaches the sides, where the circle is widest.
 *
 * RDKit's own margin inside the box is on top of this, so the clearance a reader
 * sees is a little more than `DEPICT_PADDING` rather than exactly it.
 */
const DEPICT_FIT = Math.SQRT2 * (NODE_RADIUS - DEPICT_PADDING);
const LABEL_MAX_CHARS = 14;
const INITIALS_SIZE = 18;

/**
 * The node's name: its size under a node, how far under, the least it shrinks
 * to when it sits inside one instead, and the width it has to fit there.
 *
 * `below` only applies to a depicted node, and is a baseline: most of the 12 is
 * the font's ascent, so the name's own white plate lands just clear of the
 * disc rather than merged into it. Only just, though - zoomed in the name
 * belongs to the picture above it, and a wider gap reads as though it belonged
 * to nothing.
 */
const CAPTION = {
  fontSize: 11,
  below: NODE_RADIUS + 12,
  minFontSize: 7,
  insideWidth: (NODE_RADIUS - 6) * 2,
};

/**
 * The ground a depicted node stands on, painted the canvas's own colour.
 *
 * A disc of exactly `NODE_RADIUS`, which is the disc the zooms below draw, so
 * crossing the threshold changes what is inside a node and not how big it is.
 * What it is for is clearing the way: without it a structure is drawn over the
 * styled disc and has the network's own edges running through it. Which colour
 * that is comes from `depict-theme.ts`, along with the palette the structure on
 * it is drawn in, because a plate and its ink are one decision.
 *
 * It carries the node's ring too, in `NODE_STROKE`, which is the styled disc's
 * own weight. A structure takes the disc away, and with it the only thing
 * saying where one node ends: unringed, a ligand at the structure level is a
 * drawing floating on the canvas with the edges arriving at nothing. The ring
 * takes the match colour for the same reason the disc below it does.
 *
 * The name below the disc gets its own plate rather than a bigger disc, for the
 * same reason the disc is not simply grown: the clearing a name needs is the
 * shape of the name, and a disc wide enough to hold one would swallow the edges
 * arriving at the node.
 */
const PLATE = { captionPadX: 4, captionPadY: 1, captionRadius: 3 };
const EDGE_MIN_WIDTH = 1.5;
const EDGE_MAX_WIDTH = 6.5;
const EDGE_OPACITY = 0.9;
const HIT_WIDTH = 14;

/** The arrowhead, and how far back from the node centre it stops. */
const ARROW = { size: 8, clearance: 8 };

/**
 * An edge's score, drawn straight onto the canvas with nothing behind it.
 *
 * Which zooms draw it at all is `ZOOM_LEVELS`, not here.
 */
const EDGE_LABEL = { fontSize: 10 };

/** The disc RDKit draws behind a matched atom, in its own units. */
const MATCH_ATOM_RADIUS = 0.4;

/**
 * The match colour as RDKit wants it.
 *
 * A function rather than a module-level constant: `T` follows `setTheme`, and a
 * value read at import time is the one thing that cannot. Converted per view
 * rather than per node - `levelOfDetail` asks once and closes over the answer.
 */
const matchRgb = (): [number, number, number] => rgbTriple(T.netMatchAtom);

/** The selection halo, sized from the edge or the node it sits under. */
const HALO = { padding: 4, opacity: 0.95 };

/**
 * One zoom level: everything the network draws differently at that distance.
 *
 * The point of the shape is that a level is a row of data rather than a set of
 * thresholds compared in the drawing code. Changing what a zoom shows is an
 * edit to one row here; adding a level is adding a row. Nothing below reads a
 * number off the zoom directly.
 */
export interface DetailLevel {
  /** Its name, so the level in force can be read off the DOM and talked about. */
  id: "structures" | "names" | "shape";
  /** The lowest zoom this level covers. */
  from: number;
  /** The disc behind a node. A structure replaces it rather than sitting on it. */
  disc: boolean;
  /** The 2D structure inside a node. */
  structure: boolean;
  /** The ligand's name: under the node, across the disc, or not at all. */
  name: "below" | "inside" | "none";
  /** The two-letter stand-in, for when there is no room for a name. */
  initials: boolean;
  /** The mapping score over each edge. */
  edgeScores: boolean;
}

/**
 * The levels, closest zoom first. `from` is the lowest zoom each one covers.
 *
 * Zoomed out, the shape of the network is the thing worth seeing, and a caption
 * under every node buries it - a nine-hundred-ligand network is unreadable long
 * before it is slow. Zoomed in, the structures are what people navigate by:
 * project chemists know what a ligand looks like more reliably than what it is
 * called. So names arrive first and structures second.
 *
 * `shape` draws no edge scores. Everything on the canvas is scaled by the zoom,
 * so out here a 10px score is 4px on screen: it is not read, it is just texture
 * over the lines whose shape is the whole reason to be this far out.
 *
 * Structures are the expensive part - one RDKit call and an SVG subtree per
 * node - so they are built lazily, only for nodes actually on screen, and only
 * once each.
 *
 * `structures` starts below 1, which is the zoom a network small enough to
 * frame itself opens at: a handful of ligands shows what they are without being
 * zoomed into first, and a bigger one still frames itself well under this and
 * opens on its shape. The cost of moving it down is that more nodes are on
 * screen when structures switch on, and each of those is a depiction - which
 * is what the cull and the once-each rule above are for.
 *
 * The two thresholds moved out together, and by the same factor, so the band
 * each level covers is the one it always had. A structure at this distance is
 * read by its outline rather than its letters, which is the same bargain the
 * alchemical network makes, and both have to stay above `ZOOM_LIMITS.min`: the
 * wheel stops there on a graph small enough to be framed above it, so a level
 * starting at the floor is a level with nothing reachable below it.
 */
export const ZOOM_LEVELS: readonly DetailLevel[] = [
  { id: "structures", from: 0.4, disc: false, structure: true, name: "below", initials: false, edgeScores: true },
  { id: "names", from: 0.25, disc: true, structure: false, name: "inside", initials: false, edgeScores: true },
  { id: "shape", from: 0, disc: true, structure: false, name: "none", initials: true, edgeScores: false },
];

/** The level a zoom falls in. */
export const levelAt = (scale: number): DetailLevel => levelIn(ZOOM_LEVELS, scale);

/** The level below a given one - what a node falls back to, and the last one stays put. */
const levelUnder = (level: DetailLevel): DetailLevel => levelBelow(ZOOM_LEVELS, level);

/**
 * Zoom to at least this when jumping to a ligand from the sidebar.
 *
 * It has to clear the `structures` level's `from`, or clicking a ligand lands
 * on a disc and a name rather than the structure that was asked for. Well clear
 * of it, since landing exactly on the threshold draws the structure at the
 * smallest size it is ever drawn. This is the knob for how close that lands.
 */
const FOCUS_SCALE = 1.8;

/**
 * How much room a node needs around it, centre to centre.
 *
 * Both discs, plus air between them, and the number the distances below are
 * measured against. That they are measured against anything is the point. The
 * two that decide how a graph packs - how far apart collision holds a pair, and
 * how far apart a link wants one - were written in unrelated units: a link
 * asked for 18 to 28 while collision enforced 100, so the link force was a
 * constant squeeze that every pair resisted only by sitting exactly on the
 * collision boundary. Two hundred ligands came out with every gap in the graph
 * the same 100 units, which is a picture with no structure in it, and with the
 * score that is meant to draw a well-mapped pair closer making no difference at
 * all, because its whole range was underneath the boundary.
 */
const NODE_SPACING = 2 * NODE_RADIUS + 68;

const FORCE = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: NODE_SPACING,
  linkScoreBonus: 90,
  linkStrength: 0.45,
  // Repulsion is local rather than the width of the graph. Reaching further
  // does not move neighbours apart - collision already decides that - it only
  // inflates the whole layout, and a graph spread over thousands of units is
  // one that is both too small to read as a whole and too crowded to read up
  // close.
  chargeStrength: -900,
  chargeDistanceMin: 20,
  chargeDistanceMax: 900,
  centerStrength: 0.08,
  /** Holds a pair exactly `NODE_SPACING` apart, so links settle at their distance rather than against this. */
  collisionPadding: NODE_SPACING / 2 - NODE_RADIUS,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2,
};

/**
 * An arrowhead marker per edge colour, made once and reused.
 *
 * A marker cannot inherit the colour of the line it terminates, so a
 * continuously coloured ramp needs one marker per distinct colour. Deduplicating
 * by the colour string is what stops that being one marker per edge.
 */
/**
 * The hover readout.
 *
 * A floating panel rather than the SVG's native `<title>`: a title waits for the
 * browser's own delay, cannot be styled, and cannot show a score next to the
 * colour it produced. This is what the prototype shows, and hovering an edge is
 * how you read a network without clicking through every one of them.
 */
function hoverTooltip(host: HTMLElement): {
  show(html: string, x: number, y: number): void;
  hide(): void;
  remove(): void;
} {
  const tip = el("div", TOOLTIP);
  host.appendChild(tip);
  return {
    show(html, x, y) {
      tip.innerHTML = html;
      tip.style.left = `${x + 14}px`;
      tip.style.top = `${y - 10}px`;
      tip.style.opacity = "1";
    },
    hide() {
      tip.style.opacity = "0";
    },
    remove() {
      tip.remove();
    },
  };
}

function arrowMarkers(defs: SVGDefsElement): (colour: string) => string {
  const known = new Map<string, string>();
  return (colour: string): string => {
    const existing = known.get(colour);
    if (existing) return existing;
    const id = `arrow-${colour.replace(/[^a-zA-Z0-9]/g, "")}`;
    known.set(colour, id);
    const marker = svg("marker", {
      id,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: NODE_RADIUS + ARROW.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: ARROW.size,
      markerHeight: ARROW.size,
      orient: "auto",
    });
    marker.appendChild(svg("path", { d: "M0,-5L10,0L0,5", fill: colour }));
    defs.appendChild(marker);
    return id;
  };
}

// --- the score ramp --------------------------------------------------------
//
// `T.netEdgeRamp` is two colours, so this is a lerp rather than a reason to
// pull in d3-scale and d3-interpolate.

function parseHex(hex: string): [number, number, number] {
  const value = parseInt(hex.replace("#", ""), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function scoreColor(score: number | null | undefined): string {
  const [from, to] = T.netEdgeRamp.map(parseHex);
  const t = Math.max(0, Math.min(1, score ?? 0.5));
  const mix = from.map((c, i) => Math.round(c + (to[i] - c) * t));
  return `rgb(${mix.join(",")})`;
}

/** A ligand's label, from the registry entry the node key resolved to. */
const label = entryLabel;

/**
 * Whether a ligand answers the search box.
 *
 * Name, SMILES and gufe key, because all three are things people paste in: a
 * name from a spreadsheet, a SMILES from a paper, a key from a log. `text` is
 * expected already trimmed and lowercased - the caller has a whole list to test
 * and should not redo that per node.
 *
 * One definition because there were three: the menu filtered its list with it,
 * the canvas decided what stays lit with it, and the two were written out
 * separately. A search that highlighted a different set than it listed is the bug
 * that invites.
 */
function matchesQuery(node: NetNode, text: string): boolean {
  if (!text) return true;
  return (
    label(node).toLowerCase().includes(text) ||
    (node.smiles ?? "").toLowerCase().includes(text) ||
    node["gufe-key"].toLowerCase().includes(text)
  );
}

/** Which nodes and edges stay lit, or null when nothing is narrowing the view. */
export interface Emphasis {
  nodes: ReadonlySet<string>;
  edges: ReadonlySet<number>;
}

/**
 * What the current search, selection and score threshold leave emphasised.
 *
 * A ligand is lit when nothing is selected and nothing is searched for, or when
 * it is selected, or when it matches the search. An edge is lit when it clears
 * the score threshold *and* both its ends are lit - so a selection reads as
 * "these ligands and what connects them" rather than as a set of loose discs.
 *
 * Null means nothing is filtering at all, which the canvas draws as full
 * strength everywhere rather than as "everything happens to be lit". The
 * distinction matters because the threshold alone can filter with no search and
 * no selection.
 *
 * Pure, and outside the render closure, because it is the one piece of this view
 * that is a rule rather than a wiring: it was a hundred lines deep in a callback
 * that was declared as a no-op and reassigned later.
 */
function emphasisFor(
  nodes: readonly NetNode[],
  edges: readonly NetEdge[],
  selected: ReadonlySet<string>,
  query: string,
  minScore: number,
): Emphasis | null {
  const text = query.trim().toLowerCase();
  const narrowed = selected.size > 0 || text.length > 0;
  if (!narrowed && minScore <= 0) return null;

  const litNodes = new Set<string>();
  for (const node of nodes) {
    const key = node["gufe-key"];
    if (!narrowed || selected.has(key) || (text.length > 0 && matchesQuery(node, text))) litNodes.add(key);
  }

  const litEdges = new Set<number>();
  edges.forEach((edge, i) => {
    if ((edge.score ?? 0) < minScore) return;
    if (!litNodes.has(edge.from["gufe-key"]) || !litNodes.has(edge.to["gufe-key"])) return;
    litEdges.add(i);
  });

  return { nodes: litNodes, edges: litEdges };
}

interface DetailParts {
  nodes: NetNode[];
  circles: SVGCircleElement[];
  /** The white disc under a structure, and the plate under the name below it. */
  plates: SVGCircleElement[];
  captionPlates: SVGRectElement[];
  captions: SVGTextElement[];
  initials: SVGTextElement[];
  /** The formal charge, written on the node. Null on a neutral ligand. */
  charges: (SVGTextElement | null)[];
  depictionGroups: SVGGElement[];
  /** Every edge score in one group, so a level can drop the lot in one write. */
  edgeLabels: SVGGElement;
  /** The canvas, which carries the level in force as `data-detail`. */
  stage: SVGSVGElement;
  /** Node index to the atoms a SMARTS pattern matched, for whatever is current. */
  matched: () => ReadonlyMap<number, number[]>;
  rdkit: () => Promise<RDKitModule | null>;
  viewport: () => { width: number; height: number };
}

/**
 * Draw the network at whatever level the zoom is in.
 *
 * What each level shows is `ZOOM_LEVELS`, not this function: everything here
 * reads a row and does as it says. The one thing it decides on its own is which
 * structures to build, because that cannot come from a table - a structure
 * costs an RDKit call and an SVG subtree, so they are built at most once per
 * node and only for nodes currently on screen, which is what makes a network of
 * several hundred ligands draw at all rather than paying for every structure
 * before the first frame.
 *
 * A node showing a structure loses the styled disc - its fill and its border
 * both say things the structure says better - and gains the plain one behind
 * it that `PLATE` describes. A node without a structure keeps the styled disc,
 * and its name moves inside it, where there is nothing else to show.
 */
function levelOfDetail(parts: DetailParts): {
  apply(scale: number, tx: number, ty: number): void;
  forget(): void;
} {
  const depictions = new Depictions();

  /**
   * The palette every structure here is drawn in, asked for once per view.
   *
   * `cpk` because a node is one molecule rather than a mapping, and RDKit's
   * element colours are what a reader picks a ligand out by. On a dark page
   * these are the dark ones, which is the page on which `PLATE` is dark.
   */
  const depictOptions = depictThemeOptions("cpk");
  const matchColor = matchRgb();

  /** The match a structure was drawn against, so a new one knows what to redraw. */
  const marking = (index: number): string => (parts.matched().get(index) ?? []).join(",");

  const inject = (RDKit: RDKitModule, index: number): void => {
    if (!depictions.wants(index)) return;
    const node = parts.nodes[index];
    const atoms = parts.matched().get(index);
    const drawn =
      node.sdf &&
      depictSVG(
        RDKit,
        node.sdf,
        DEPICT_SIZE,
        DEPICT_STYLE.layout,
        atoms && { atoms, color: matchColor, radius: MATCH_ATOM_RADIUS },
        depictOptions,
      );
    if (!drawn) {
      depictions.refused(index);
      return;
    }
    // The ground RDKit draws behind a structure is dropped on the way in, and
    // `PLATE`'s disc is what this view puts there instead: round, and exactly
    // the size of the node rather than of the square the depiction was drawn in.
    if (!mountDepiction(parts.depictionGroups[index], drawn, DEPICT_SIZE, DEPICT_FIT)) {
      depictions.refused(index);
      return;
    }
    depictions.drew(index, marking(index));
  };

  /** Drop the structures whose highlighting the current pattern has outdated. */
  const forget = (): void =>
    depictions.forget(marking, (index) => parts.depictionGroups[index].replaceChildren());

  const fitted: number[] = [];

  /**
   * The size a name shrinks to so it fits across the disc, measured once per
   * node. Long names would otherwise run out over the edges.
   */
  const insideSize = (index: number, caption: SVGTextElement): number => {
    if (fitted[index]) return fitted[index];
    caption.setAttribute("font-size", String(CAPTION.fontSize));
    let width = 0;
    try {
      width = caption.getBBox().width;
    } catch {
      return CAPTION.fontSize; // jsdom has no layout, and this is only a fit
    }
    if (!width) return CAPTION.fontSize; // not laid out yet; measure next time
    const room = (CAPTION.fontSize * CAPTION.insideWidth) / width;
    fitted[index] = Math.max(CAPTION.minFontSize, Math.min(CAPTION.fontSize, room));
    return fitted[index];
  };

  /**
   * Fit the white plate to the name it sits behind, once per node.
   *
   * Measured rather than computed: names are truncated to a character count,
   * not to a width, so the plate under a long one and the plate under a short
   * one are different sizes. `getBBox` throws where there is no layout and
   * returns zeros before there has been one; either way the plate stays hidden
   * and the next `apply` measures again, so the worst case is the name drawn
   * bare, which is what it was drawn as before.
   */
  const platedAt: number[] = [];
  const plateCaption = (index: number): void => {
    const plate = parts.captionPlates[index];
    if (platedAt[index] === CAPTION.below) {
      plate.setAttribute("display", "inline");
      return;
    }
    let box: { x: number; y: number; width: number; height: number } | null = null;
    try {
      box = parts.captions[index].getBBox();
    } catch {
      box = null;
    }
    if (!box?.width) {
      plate.setAttribute("display", "none");
      return;
    }
    plate.setAttribute("x", String(box.x - PLATE.captionPadX));
    plate.setAttribute("y", String(box.y - PLATE.captionPadY));
    plate.setAttribute("width", String(box.width + PLATE.captionPadX * 2));
    plate.setAttribute("height", String(box.height + PLATE.captionPadY * 2));
    plate.setAttribute("display", "inline");
    platedAt[index] = CAPTION.below;
  };

  /**
   * Draw one node at a level: disc, structure, initials and name together.
   *
   * A node asked for a structure it has not got yet draws the level below
   * instead, which is what it will keep drawing if RDKit never arrives.
   */
  const show = (index: number, wanted: DetailLevel): void => {
    const level = wanted.structure && !depictions.has(index) ? levelUnder(wanted) : wanted;
    parts.depictionGroups[index].setAttribute("display", level.structure ? "inline" : "none");
    const plate = parts.plates[index];
    plate.setAttribute("display", level.structure ? "inline" : "none");
    // A match has to be visible at every level, and each level has a different
    // thing to say it with: the disc when there is one, the name when there is
    // one, and once the structure is drawn both its matched atoms and the ring
    // the plate carries in the disc's place.
    const hit = parts.matched().has(index);
    plate.setAttribute("stroke", hit ? T.netMatchStroke : T.netNodeStroke);
    // The disc is painted out rather than removed, so the whole node stays a hit
    // target for hover and drag; a structure's thin strokes are nothing to grab.
    const circle = parts.circles[index];
    circle.setAttribute("fill", level.disc ? (hit ? T.netMatchFill : T.netNodeFill) : "none");
    circle.setAttribute("stroke", level.disc ? (hit ? T.netMatchStroke : T.netNodeStroke) : "none");
    parts.initials[index].setAttribute("display", level.initials ? "inline" : "none");
    // At every level, because a charge is a fact about the ligand rather than a
    // detail of the drawing, and the zooms that drop the drawing are the ones
    // with the least else to say. It only changes size: a corner badge while
    // the structure has the middle of the node, and half the node across once
    // nothing is drawn there.
    const charge = parts.charges[index];
    if (charge) {
      const big = !level.structure;
      // The same corner at either size - the corner of a centred drawing, and
      // so the emptiest part of a node that has one; beside the name rather
      // than over it on a node that does not.
      const at = NODE_RADIUS * CHARGE_BADGE.at;
      charge.setAttribute("x", String(at));
      charge.setAttribute("y", String(-at));
      charge.setAttribute("font-size", String(big ? CHARGE_BADGE.bigFontSize : CHARGE_BADGE.fontSize));
      // Bold only where it is carrying the node on its own. Over a structure it
      // is a note beside a drawing, and a bold one competes with the drawing for
      // the same glance.
      charge.setAttribute("font-weight", big ? WEIGHT.bold : WEIGHT.normal);
    }

    const caption = parts.captions[index];
    const below = level.name === "below";
    // Below the node the name is on the plate, so it takes the ink that reads
    // against whatever the plate was painted rather than the one picked to sit
    // against the canvas.
    caption.setAttribute("fill", hit ? T.netMatchStroke : below ? nodeCardCaption() : T.netNodeCaption);
    caption.setAttribute("display", level.name === "none" ? "none" : "inline");
    if (!below) parts.captionPlates[index].setAttribute("display", "none");
    if (level.name === "none") return;
    const inside = level.name === "inside";
    caption.setAttribute("y", inside ? "0" : String(CAPTION.below));
    caption.setAttribute("dominant-baseline", inside ? "middle" : "auto");
    caption.setAttribute("font-size", String(inside ? insideSize(index, caption) : CAPTION.fontSize));
    if (below) plateCaption(index);
  };

  /**
   * The level the last `apply` put in force.
   *
   * Read again when a structure arrives, because RDKit answers a frame or two
   * late and the zoom may have left that level in the meantime. Drawing the
   * level the request was made at is how a node ended up wearing a structure
   * and a white disc on a canvas that had already zoomed out to bare shapes.
   */
  let current: DetailLevel | null = null;

  const apply = (scale: number, tx: number, ty: number): void => {
    const level = levelAt(scale);
    current = level;
    // On the canvas rather than only in this closure: which level is in force is
    // the first thing anyone asks when the picture looks wrong, and this way it
    // is visible in devtools and assertable in a test.
    parts.stage.setAttribute("data-detail", level.id);
    parts.edgeLabels.setAttribute("display", level.edgeScores ? "inline" : "none");
    for (let i = 0; i < parts.nodes.length; i++) show(i, level);
    if (!level.structure) return;

    // Only what is on screen, plus a margin so panning does not tear.
    const visible = visibleAt(parts.nodes, { scale, tx, ty }, parts.viewport(), (i) => depictions.wants(i));
    if (!visible.length) return;

    parts
      .rdkit()
      .then((RDKit) => {
        if (!RDKit || current !== level) return;
        for (const index of visible) {
          inject(RDKit, index);
          show(index, level);
        }
      })
      .catch(() => undefined);
  };

  return { apply, forget };
}

interface MenuParts {
  nodes: NetNode[];
  edges: NetEdge[];
  /** Re-run emphasis after the query, the selection or the threshold moves. */
  refresh(): void;
  /** Bring one ligand into view and select it. */
  focus(index: number): void;
  selected: Set<string>;
  filter: { minScore: number };
  query: { text: string };
  /** Colour the ligands containing a substructure. Nothing is hidden by it. */
  match(smarts: string): Promise<MatchOutcome>;
}

/**
 * The network's menu: search, the ligand list, and the score filter.
 *
 * The skeleton - search, SMARTS box, count, list, hint, export, clear - is
 * `networkMenu`, which the alchemical network builds its menu from too. What is
 * here is what a *ligand* network's menu is: it searches names, SMILES and gufe
 * keys, it filters on mapping score, and its rows carry no mark because a node
 * here is one molecule rather than a system made of several.
 *
 * The score filter is the one control the other view has no equivalent of. A
 * ligand network's edges carry a score and hiding the poor ones is the question
 * people ask of it; an alchemical network has legs instead.
 */
function buildMenu(parts: MenuParts): HTMLDivElement {
  const scoreSetting = num("ligand-network.minScore", 0, 0, 1);
  return networkMenu<NetNode>({
    namespace: "ligand-network",
    noun: "ligands",
    nodes: parts.nodes,
    edges: parts.edges,
    selected: parts.selected,
    query: parts.query,
    search: {
      placeholder: "Search ligands",
      label: "Search ligands by name, SMILES or gufe key",
    },
    // The SMARTS box sits below the search and does the opposite thing: the
    // search narrows the list, and this hides nothing at all. Asked for that way
    // on purpose - which ligands do *not* contain the scaffold is the half of
    // the answer a filter throws away.
    smarts: {
      placeholder: "Colour by SMARTS",
      label: "Colour the ligands matching this SMARTS pattern",
      describe: (outcome) => {
        const unread = outcome.unreadable ? `, ${outcome.unreadable} could not be read` : "";
        return `${outcome.matched.size} of ${parts.nodes.length} ligands match${unread}`;
      },
    },
    match: (pattern) => parts.match(pattern),
    filters: () => {
      const row = el("div", `display:flex;align-items:center;gap:${SPACE.lg};font-size:${FONT.small};color:${V.textMuted};`);
      const value = el("span", `min-width:28px;color:${V.textPrimary};`, "0.00");
      const score = el("input", "flex:1;") as HTMLInputElement;
      score.type = "range";
      score.min = "0";
      score.max = "1";
      score.step = "0.01";
      score.value = String(scoreSetting.get());
      parts.filter.minScore = Number(score.value);
      score.setAttribute("aria-label", "Hide mappings scoring below this");
      // Only the canvas emphasis answers this, not the list: the threshold is
      // about edges, and the list holds ligands.
      score.oninput = () => {
        parts.filter.minScore = Number(score.value);
        value.textContent = parts.filter.minScore.toFixed(2);
        scoreSetting.set(parts.filter.minScore);
        parts.refresh();
      };
      row.appendChild(el("span", "", "score >="));
      row.appendChild(score);
      row.appendChild(value);
      return [row];
    },
    shows: (node) => matchesQuery(node, parts.query.text.trim().toLowerCase()),
    row: (node) => ({
      name: label(node),
      title: `${label(node)}\n${node.smiles ?? ""}`,
    }),
    export: {
      // Named "mappings" rather than "edges": on this canvas an edge is a
      // mapping, and the panel says so everywhere else.
      nodes: { button: "Ligands", plural: "ligands" },
      edges: { button: "Edges", plural: "mappings" },
    },
    refresh: parts.refresh,
    focus: parts.focus,
  });
}

/**
 * Everything a painted canvas can be asked to do afterwards.
 *
 * Named rather than inferred from `#paint`'s return, because the render holds one
 * of these in a single variable. One nullable handle says what a set of
 * separately-declared callbacks cannot: no scene yet, nothing to ask.
 *
 * Nothing on it is named for a method on `window`. A local called `stop` reads
 * as a local right up until it is deleted, at which point `stop?.()` still
 * compiles - as `window.stop()`, which aborts the page's own loading.
 */
interface NetworkScene {
  setSelected(selection: Selection): void;
  setEmphasis(nodeKeys: ReadonlySet<string> | null, edgeIndices: ReadonlySet<number> | null): void;
  setMatches(matched: ReadonlyMap<number, number[]>): void;
  focusOn(index: number): void;
  fit(): void;
  reset(): void;
  /** Where the canvas is now, and how to put it back there. */
  transform(): { scale: number; tx: number; ty: number };
  setTransform(scale: number, tx: number, ty: number): void;
  cleanup(): void;
}

export class GufeLigandNetwork extends AlchemyElement<LigandNetworkViz> {
  protected override placeholder(): string {
    return "Waiting for a LigandNetwork payload...";
  }

  protected renderView(host: HTMLDivElement, payload: LigandNetworkViz): ViewHandle {
    // The nodes are gufe keys; the ligands themselves are in the registry. A key
    // that names no entry, or an edge naming a ligand this network does not
    // contain, is a schema-valid payload the view has to survive - JSON Schema
    // cannot express "this key resolves" - so both are counted and reported
    // rather than crashed on. `resolveNetwork` is that rule, shared with the
    // alchemical network so the two cannot answer it differently.
    const registry = buildRegistry(payload);
    const { nodes, edges, unresolved, dangling } = resolveNetwork<LigandAtomMappingViz, SmallMoleculeComponentViz>({
      registry,
      keys: payload.nodes ?? [],
      nodeType: "SmallMoleculeComponentViz",
      edges: payload.edges ?? [],
      ends: (edge) => [edge.componentA, edge.componentB],
    });

    const bar = headerStrip(payload.name || "Ligand network");
    bar.statsEl.appendChild(statChip("ligands", String(nodes.length)));
    bar.statsEl.appendChild(statChip("mappings", String(edges.length)));
    host.appendChild(bar);

    const split = el("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    host.appendChild(split);

    // What is emphasised, and what dims. One set shared by the list, the canvas
    // and - when it lands - the export, so all three cannot disagree.
    const selected = new Set<string>();
    const filter = { minScore: 0 };
    const query = { text: "" };

    /**
     * RDKit, fetched once and only if something asks.
     *
     * Behind an accessor rather than called here, so that a network nothing
     * draws a structure for never fetches seven megabytes of WebAssembly to do
     * nothing with. `optionalRDKit` answers null instead of rejecting, which is
     * what lets a node fall back to initials.
     */
    const rdkit = (): Promise<RDKitModule | null> => optionalRDKit();

    /**
     * SMARTS matching, over this network's ligands, indexed as `nodes` is.
     *
     * Held here rather than in the scene because a redraw builds a new scene: a
     * pattern someone typed has to survive changing the layout, and the sweep it
     * costs must not be paid again for the same pattern.
     *
     * Declared above the menu, and not merely before its first use, because a
     * menu that was left open builds during this render and applies whatever
     * pattern it remembers as it does - so everything it can reach has to exist
     * by the time it is constructed, not by the time the view has finished.
     */
    const matcher = createMatcher(
      rdkit,
      nodes.map((node) => node.sdf ?? ""),
    );
    let matched: ReadonlyMap<number, number[]> = new Map();

    const runMatch = async (pattern: string): Promise<MatchOutcome> => {
      const outcome = await matcher.run(pattern);
      // A superseded run says nothing about what should be on screen; the run
      // that superseded it is still going and will.
      if (outcome.status === "superseded") return outcome;
      matched = outcome.status === "ok" ? outcome.matched : new Map();
      applyMatches();
      return outcome;
    };

    const menu = chromeMenu(
      bar,
      () =>
        buildMenu({
          nodes,
          edges,
          selected,
          filter,
          query,
          refresh: () => applyEmphasis(),
          // Jumping to a ligand and opening it are one action: the list is
          // how you find one you cannot see, and finding it is not the point.
          focus: (index) => {
            scene?.focusOn(index);
            select({ kind: "ligand", index });
          },
          match: (pattern) => runMatch(pattern),
        }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => draw(),
        remember: flag("ligand-network.menuOpen", false),
        extras: framejsMenuItem,
      },
    );
    split.appendChild(menu.panel);

    // Set once there is a graph to draw; a no-op until then, because a network
    // with no ligands returns before there is one and the divider is still
    // there to be dragged.
    let redraw = () => {};

    // `min-height` as well as `min-width`, because the split divides the height
    // instead when the view is taller than it is wide: without it a pane's
    // contents are its floor along whichever axis it is being divided on, and
    // the graph pushes the mapping off the bottom.
    const left = el("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${V.netCanvasBg};`);
    const right = el("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${V.appBg};`);
    split.appendChild(left);
    split.appendChild(
      splitter(split, left, right, {
        min: CANVAS_SHARE.min,
        max: CANVAS_SHARE.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: num("ligand-network.canvasShare", CANVAS_SHARE.initial, CANVAS_SHARE.min, CANVAS_SHARE.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => redraw(),
        onOrient: (stacked) => orientMenuPanel(menu.panel, stacked),
      }),
    );
    split.appendChild(right);

    const canvas = el("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${V.netCanvasBg};`);
    left.appendChild(canvas);
    const layoutSetting = choice<Layout>("ligand-network.layout", "Force-directed", LAYOUTS);
    const toolbar = this.#toolbar(
      (next) => draw(next),
      () => scene?.reset(),
      layoutSetting,
      edges.some((edge) => chargeChange(edge.from, edge.to) !== 0),
    );
    left.appendChild(toolbar.bar);

    const detail = this.#detailPane(right, registry);

    if (!nodes.length) {
      // Naming the cause matters here: "no ligands" and "the ligands it names
      // are missing from its registry" are very different bugs to go looking
      // for, and only the payload knows which one happened.
      canvas.appendChild(
        centredMessage(
          unresolved ? "None of this network's ligands are in its registry." : "This network has no ligands.",
        ),
      );
      detail.message("Nothing to show.");
      return {};
    }
    if (unresolved) {
      floatingWarning(
        canvas,
        `${unresolved} ligand${unresolved === 1 ? "" : "s"} named by this network are not in its registry`,
      );
    }
    if (dangling) {
      floatingWarning(canvas, `${dangling} mapping${dangling === 1 ? "" : "s"} name a ligand this network does not contain`);
    }

    // Depictions are RDKit's job alone, so start the fetch now rather than
    // after the layout - the graph draws with initials and they fill in.
    const rdkitReady = rdkit();

    const tip = hoverTooltip(canvas);

    /**
     * The canvas as it is painted right now, or null before the first paint and
     * between a teardown and the next one. See `NetworkScene`.
     */
    let scene: NetworkScene | null = null;

    // Taken once, before the first draw. The transform is applied to the first
    // paint only, because after that the reader owns the camera and a resize
    // must not undo where they have panned to.
    const restored = asNetworkViewState(seededViewState(VIEW_STATE_KEY), nodes.length);
    let pendingTransform = restored && { scale: restored.scale, tx: restored.tx, ty: restored.ty };

    /**
     * The positions the view opened on, or null once a layout has replaced them.
     *
     * Every redraw uses them while they last, because a resize or the menu
     * opening is not a request to lay the network out again: they are where the
     * reader left it, and a simulation run against a canvas of a different size
     * would not reproduce them.
     *
     * Choosing a layout *is* that request, and it is what drops them - which is
     * why this is a variable rather than the state object it came from. Read
     * straight off `restored` on every redraw, the picker was dead for the life
     * of a restored view: each new layout was seeded and then immediately
     * overwritten by the positions it was meant to replace.
     */
    let opening = restored ? restored.nodes : null;

    /**
     * What the detail pane is showing, and what the halos mark.
     *
     * It opens on the first mapping, because a network's edges are what it is
     * about and a pane that starts empty makes the reader guess what to click.
     * A restored one is taken only if it names something this network has: the
     * state may have been saved against a different payload.
     */
    let selection: Selection = edges.length ? { kind: "edge", index: 0 } : null;
    if (restored && restored.selected >= 0) {
      const kind: SelectionKind = restored.selectedKind ?? "edge";
      if (restored.selected < (kind === "ligand" ? nodes.length : edges.length)) {
        selection = { kind, index: restored.selected };
      }
    }
    /** Where the canvas is, or the identity view before there is one to ask. */
    const transformNow = (): { scale: number; tx: number; ty: number } =>
      scene?.transform() ?? { scale: 1, tx: 0, ty: 0 };
    let layout: Layout = layoutSetting.get();
    let forceUnavailable = false;
    /** Which redraw is the current one, and whether the view is still alive. */
    const eras = generations();

    /** Put something in the detail pane, and mark it on the canvas. */
    const showSelection = (): void => {
      if (!selection) {
        detail.message(edges.length ? SELECT_HINT : "Click a ligand to see it.");
        return;
      }
      if (selection.kind === "edge") detail.showMapping(edges[selection.index]);
      else detail.showLigand(nodes[selection.index]);
    };

    const select = (next: Selection) => {
      selection = next;
      showSelection();
      scene?.setSelected(selection);
    };

    /**
     * Which nodes and edges stay lit, pushed at whatever is painted now.
     *
     * `emphasisFor` is the rule; this is the one line that applies it. A no-op
     * before the first paint, which is correct rather than merely harmless: the
     * next paint applies it again from scratch.
     */
    const applyEmphasis = (): void => {
      const lit = emphasisFor(nodes, edges, selected, query.text, filter.minScore);
      scene?.setEmphasis(lit?.nodes ?? null, lit?.edges ?? null);
    };

    /** Likewise the SMARTS colouring, which outlives any one scene. */
    const applyMatches = (): void => scene?.setMatches(matched);

    const draw = (next: Layout = layout): void => {
      // A redraw that is not a change of layout - the menu opening, the window
      // resizing - must not throw away where the reader has panned to. Only a
      // new layout is a new picture, and only a new picture is worth reframing.
      // Before the first paint there is no camera to keep, so that one frames.
      // A scene exists exactly when a paint has installed one, so it is also
      // the answer to "is there a camera worth keeping".
      const keepCamera = scene && next === layout ? scene.transform() : null;
      // A new layout is a request to lay the network out again, which is exactly
      // what the opening positions would prevent. See `opening`.
      if (next !== layout) opening = null;
      const current = eras.start();
      layout = next;
      scene?.cleanup();
      scene = null;
      // Every one of them, not the first: a paint that has already been dropped
      // may still have left one behind before the guard existed to stop it.
      canvas.querySelectorAll("svg").forEach((stale) => stale.remove());

      const width = canvas.clientWidth || 800;
      const height = canvas.clientHeight || 600;
      seedPositions(nodes, width, height, layout, edges);
      if (opening) placeNodesAt(nodes, opening);

      const paint = () => {
        if (!current()) return;
        const painted = this.#paint(canvas, nodes, edges, width, height, select, rdkitReady, tip);
        scene = painted;

        // A redraw builds nodes with nothing on them, so everything that is in
        // force is applied again here rather than only when it is chosen.
        painted.setSelected(selection);
        applyEmphasis();
        applyMatches();
        // Frame the graph, which also draws the level of detail the resulting
        // zoom calls for. Everything else arrives as the user zooms in. A
        // restored camera goes through the same path, so it draws its own level
        // of detail rather than the framed one's.
        const camera = pendingTransform ?? keepCamera;
        if (camera) {
          painted.setTransform(camera.scale, camera.tx, camera.ty);
          pendingTransform = null;
        } else {
          painted.fit();
        }
      };

      // A restored network is placed, not laid out: the positions it came with
      // are the answer the simulation would spend a second failing to reproduce
      // against a canvas of a different size.
      if (layout !== "Force-directed" || forceUnavailable || opening) {
        paint();
        return;
      }

      // The simulation is run to completion and the result drawn once, rather
      // than animated: a DOM write per node per frame is what melts a browser
      // on a network with a few hundred ligands.
      relax(nodes, edges, width, height).then((relaxed) => {
        if (!current()) return;
        if (relaxed) {
          paint();
          return;
        }
        // No d3, so no force layout. Say so once, and show something.
        forceUnavailable = true;
        toolbar.picker.value = "Circular";
        floatingWarning(canvas, "d3 could not be loaded - showing the circular layout instead");
        draw("Circular");
      }, paint);
    };

    redraw = () => draw();
    draw();
    showSelection();

    return {
      onResize: () => draw(),
      cleanup: () => {
        eras.stop();
        matcher.cancel();
        tip.remove();
        scene?.cleanup();
        scene = null;
        detail.cleanup();
      },
      viewState: (): NetworkViewState => ({
        nodes: nodes.map((node) => [round2(node.x), round2(node.y)]),
        ...transformNow(),
        selected: selection ? selection.index : -1,
        selectedKind: selection ? selection.kind : "edge",
      }),
    };
  }

  #toolbar(
    onLayout: (layout: Layout) => void,
    onReset: () => void,
    layoutSetting: Setting<string>,
    anyChargeChange: boolean,
  ): { bar: HTMLDivElement; picker: HTMLSelectElement } {
    const toolbar = el(
      "div",
      TOOLBAR,
    );

    const legend = el("div", `display:flex;align-items:center;gap:6px;font-size:${FONT.small};color:${V.textMuted};`);
    legend.appendChild(el("span", "", "score"));
    legend.appendChild(
      el(
        "span",
        // The literal ramp rather than a custom property: the edges it is a key
        // to are SVG attributes, which cannot resolve one, so the key is drawn
        // from the same two colours the lines were.
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${T.netEdgeRamp.join(",")});`,
      ),
    );
    legend.appendChild(el("span", "", "0 -> 1"));
    toolbar.appendChild(legend);

    // Only where there is one to explain. A network whose ligands all carry the
    // same charge is the common case, and a key for a line it does not draw is
    // a reader looking for something that is not there.
    if (anyChargeChange) {
      const charge = el("div", `display:flex;align-items:center;gap:6px;font-size:${FONT.small};color:${V.textMuted};`);
      charge.appendChild(
        el(
          "span",
          `width:24px;height:0;border-top:2px dashed ${V.netEdgeLine};display:inline-block;`,
        ),
      );
      charge.appendChild(el("span", "", "net charge change"));
      toolbar.appendChild(charge);
    }

    toolbar.appendChild(el("label", `font-size:${FONT.body};margin-left:auto;color:${V.textMuted};`, "Layout"));
    const picker = dropdown(
      LAYOUTS.map((name) => ({ id: name, label: name })),
      layoutSetting.get(),
      (id) => onLayout(id as Layout),
      layoutSetting,
    );
    toolbar.appendChild(picker);
    toolbar.appendChild(resetControl(onReset, "Reset pan and zoom"));

    return { bar: toolbar, picker };
  }

  /**
   * The right-hand pane, and what this view puts in it.
   *
   * The pane itself is `detailPane`, shared with the alchemical network. What is
   * here is the one thing that is this view's: an edge is a mapping, so it opens
   * `<gufe-atom-mapping>`; a node is one ligand, so it opens
   * `<gufe-small-molecule>` - and both have to be cut loose from the network
   * first, because an edge carries this view's index and both endpoints
   * resolved, a node carries wherever the layout put it, and a payload handed on
   * is a payload someone may validate.
   *
   * Neither picture is drawn twice, so the in-context one and the standalone one
   * cannot drift apart, and clicking either half of the graph puts the reader in
   * front of a view they have already met.
   */
  #detailPane(
    host: HTMLDivElement,
    registry: RegistryIndex,
  ): DetailPane & { showMapping(edge: NetEdge): void; showLigand(node: NetNode): void } {
    const pane = detailPane(host);
    return {
      ...pane,
      showMapping: (edge) => pane.show(mappingPayloadFor(mappingOf(edge), registry)),
      showLigand: (node) => pane.show(ligandPayloadFor(node)),
    };
  }

  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #paint(
    canvas: HTMLDivElement,
    nodes: NetNode[],
    edges: NetEdge[],
    width: number,
    height: number,
    onSelect: (selection: Selection) => void,
    rdkitReady: Promise<RDKitModule | null>,
    tip: ReturnType<typeof hoverTooltip>,
  ): NetworkScene {
    // Named, because "the svg in this view" stopped being unambiguous the moment
    // the menu button started carrying an icon of its own.
    const root = svg("svg", {
      class: "gufe-graph",
      width,
      height,
      style: "display:block;touch-action:none;",
    });
    const scene = svg("g");
    root.appendChild(scene);
    canvas.appendChild(root);

    const defs = svg("defs");
    const markerFor = arrowMarkers(defs);
    root.appendChild(defs);

    const halos: SVGLineElement[] = [];
    const lines = svg("g");
    const hits = svg("g");
    const labels = svg("g", { "pointer-events": "none" });
    const nodeLayer = svg("g");
    scene.append(lines, hits, labels, nodeLayer);

    for (const edge of edges) {
      const colour = scoreColor(edge.score);
      const width = EDGE_MIN_WIDTH + (edge.score ?? 0.5) * (EDGE_MAX_WIDTH - EDGE_MIN_WIDTH);
      const halo = svg("line", {
        stroke: T.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": width + HALO.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none",
      });
      // Dashed rather than recoloured: the colour of an edge is its score, and
      // a second meaning in the same channel would make both harder to read.
      const charged = chargeChange(edge.from, edge.to);
      const line = svg("line", {
        stroke: colour,
        "stroke-width": width,
        "stroke-opacity": EDGE_OPACITY,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${markerFor(colour)})`,
        "pointer-events": "none",
        ...(charged ? { "stroke-dasharray": CHARGE_DASH } : {}),
      });
      const hit = svg("line", { stroke: "transparent", "stroke-width": HIT_WIDTH, style: "cursor:pointer;" });
      hit.addEventListener("click", (event) => {
        event.stopPropagation();
        onSelect({ kind: "edge", index: edge.index });
      });
      hit.addEventListener("mousemove", (event: MouseEvent) => {
        tip.show(
          `<div style="font-weight:700;color:${V.titleColor};">${esc(label(edge.from))} -&gt; ${esc(label(edge.to))}</div>` +
            (edge.score == null
              ? `<div style="color:${V.textMuted2};">no score</div>`
              : `<div style="margin-top:4px;">score <b>${edge.score.toFixed(3)}</b></div>`) +
            (charged
              ? `<div style="margin-top:4px;">net charge <b>${esc(chargeLabel(charged))}</b>` +
                ` <span style="color:${V.textMuted2};">(${esc(chargeLabel(edge.from.total_charge ?? 0))} to ` +
                `${esc(chargeLabel(edge.to.total_charge ?? 0))})</span></div>`
              : "") +
            `<div style="margin-top:4px;font-size:${FONT.tiny};color:${V.textMuted2};">Click to see the mapping</div>`,
          event.offsetX,
          event.offsetY,
        );
      });
      hit.addEventListener("mouseleave", () => tip.hide());
      halos.push(halo);
      lines.append(halo, line);
      hits.appendChild(hit);

      // The score, as bare text. The group is kept even for an edge that has
      // none, so a label's index is its edge's index and `place` can move them
      // together.
      const text = svg("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": EDGE_LABEL.fontSize,
        "font-weight": 600,
        fill: T.netEdgeLabel,
      });
      text.textContent = edge.score == null ? "" : edge.score.toFixed(2);
      const group = svg("g", { class: "gufe-edge-label" });
      group.appendChild(text);
      labels.appendChild(group);
    }

    const depictionGroups: SVGGElement[] = [];
    const circles: SVGCircleElement[] = [];
    const plates: SVGCircleElement[] = [];
    const captionPlates: SVGRectElement[] = [];
    const nodeHalos: SVGCircleElement[] = [];
    const initials: SVGTextElement[] = [];
    const captions: SVGTextElement[] = [];
    const charges: (SVGTextElement | null)[] = [];
    const groups = nodes.map((node) => {
      const group = svg("g", { class: "gufe-node", style: "cursor:grab;" });
      group.addEventListener("mousemove", (event: MouseEvent) => {
        tip.show(
          `<div style="font-weight:700;color:${V.titleColor};">${esc(label(node))}</div>` +
            (node.smiles
              ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${esc(node.smiles)}</div>`
              : "") +
            (node.total_charge
              ? `<div style="margin-top:3px;">formal charge <b>${esc(chargeLabel(node.total_charge))}</b></div>`
              : "") +
            `<div style="margin-top:3px;font-size:${FONT.tiny};color:${V.textMuted2};overflow-wrap:anywhere;">${esc(node["gufe-key"])}</div>` +
            `<div style="margin-top:4px;font-size:${FONT.tiny};color:${V.textMuted2};">Click to see the ligand</div>`,
          event.offsetX,
          event.offsetY,
        );
      });
      group.addEventListener("mouseleave", () => tip.hide());

      // The ring behind everything else, rather than the disc restyled: at the
      // zoom where a node draws its structure it has no disc left to restyle,
      // and a selected ligand has to be findable at every zoom.
      const nodeHalo = svg("circle", {
        class: "gufe-node-halo",
        r: NODE_RADIUS + HALO.padding,
        fill: "none",
        stroke: T.netHaloColor,
        "stroke-width": HALO.padding * 2,
        opacity: 0,
        "pointer-events": "none",
      }) as SVGCircleElement;
      group.appendChild(nodeHalo);
      nodeHalos.push(nodeHalo);

      const circle = svg("circle", {
        class: "gufe-node-disc",
        r: NODE_RADIUS,
        fill: T.netNodeFill,
        stroke: T.netNodeStroke,
        "stroke-width": NODE_STROKE,
        "pointer-events": "all",
      }) as SVGCircleElement;
      group.appendChild(circle);
      circles.push(circle);

      // Under the structure and over the styled disc, which is painted out at
      // the only level that shows either. See `PLATE`.
      const plate = svg("circle", {
        class: "gufe-node-plate",
        r: NODE_RADIUS,
        fill: nodeCardGround(),
        stroke: T.netNodeStroke,
        "stroke-width": NODE_STROKE,
        display: "none",
        "pointer-events": "none",
      }) as SVGCircleElement;
      group.appendChild(plate);
      plates.push(plate);

      const depiction = svg("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      group.appendChild(depiction);
      depictionGroups.push(depiction);

      const initial = svg("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": INITIALS_SIZE,
        "font-weight": 700,
        fill: T.netInitials,
        "pointer-events": "none",
      });
      initial.textContent = label(node).slice(0, 2).toUpperCase();
      group.appendChild(initial);
      initials.push(initial);

      // Pinned to the node's top corner, the way a mark on a thing is, rather
      // than tucked into the drawing or set beside the name below. Drawn over
      // whatever is there: a node is the size `NODE_RADIUS` makes it whether or
      // not its ligand carries a charge, so nothing is laid out around this and
      // a charged node is the same shape as a neutral one.
      if (node.total_charge) {
        const text = svg("text", {
          class: "gufe-node-charge",
          "text-anchor": "middle",
          "dominant-baseline": "central",
          fill: T.badgeFg,
          "pointer-events": "none",
        }) as SVGTextElement;
        text.textContent = chargeLabel(node.total_charge);
        group.appendChild(text);
        charges.push(text);
      } else {
        charges.push(null);
      }

      const caption = svg("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: CAPTION.below,
        "font-size": CAPTION.fontSize,
        "font-weight": 600,
        fill: T.netNodeCaption,
        "pointer-events": "none",
      });
      caption.textContent = truncate(label(node), LABEL_MAX_CHARS);
      caption.setAttribute("display", "none");
      captions.push(caption);

      // Sized by `plateCaption` once the name has been laid out, so it is
      // appended before the name and stays behind it.
      const captionPlate = svg("rect", {
        class: "gufe-node-caption-plate",
        rx: PLATE.captionRadius,
        fill: nodeCardGround(),
        display: "none",
        "pointer-events": "none",
      }) as SVGRectElement;
      captionPlates.push(captionPlate);
      group.appendChild(captionPlate);
      group.appendChild(caption);

      nodeLayer.appendChild(group);
      return group;
    });

    const place = () => {
      edges.forEach((edge, i) => {
        for (const line of [halos[i], lines.children[i * 2 + 1], hits.children[i]]) {
          const target = line as SVGElement;
          target.setAttribute("x1", String(edge.from.x));
          target.setAttribute("y1", String(edge.from.y));
          target.setAttribute("x2", String(edge.to.x));
          target.setAttribute("y2", String(edge.to.y));
        }
        const group = labels.children[i] as SVGGElement;
        group.setAttribute(
          "transform",
          `translate(${(edge.from.x + edge.to.x) / 2},${(edge.from.y + edge.to.y) / 2 - 8})`,
        );
      });
      nodes.forEach((node, i) => groups[i].setAttribute("transform", `translate(${node.x},${node.y})`));
    };
    place();

    /**
     * What the current SMARTS pattern matched, as node index to matched atoms.
     *
     * Held by the scene rather than read from the view, because everything that
     * paints a node reads it and a redraw builds all of this again.
     */
    let marks: ReadonlyMap<number, number[]> = new Map();

    const detail = levelOfDetail({
      nodes,
      circles,
      plates,
      captionPlates,
      matched: () => marks,
      captions,
      initials,
      charges,
      depictionGroups,
      edgeLabels: labels,
      stage: root,
      rdkit: () => rdkitReady,
      viewport: () => ({ width, height }),
    });

    const view = this.#interact(root, scene, nodes, groups, place, detail.apply, (index) =>
      onSelect({ kind: "ligand", index }),
    );

    return {
      setSelected(selection: Selection) {
        const edge = selection?.kind === "edge" ? selection.index : -1;
        const ligand = selection?.kind === "ligand" ? selection.index : -1;
        halos.forEach((halo, i) => halo.setAttribute("opacity", i === edge ? String(HALO.opacity) : "0"));
        nodeHalos.forEach((halo, i) => halo.setAttribute("opacity", i === ligand ? String(HALO.opacity) : "0"));
      },

      /**
       * Colour the ligands a SMARTS pattern matched.
       *
       * Colour rather than filter, and deliberately a different channel from
       * `setEmphasis`: dimming answers "which ones did I ask for", colouring
       * answers "which ones contain this" - and the whole point of the second
       * question is seeing the ones that do not. So the two compose, and
       * neither hides anything.
       */
      setMatches(matched) {
        marks = matched;
        detail.forget();
        const { scale, tx, ty } = view.transform();
        detail.apply(scale, tx, ty);
      },

      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(nodeKeys, edgeIndices) {
        groups.forEach((group, i) => {
          const lit = !nodeKeys || nodeKeys.has(nodes[i]["gufe-key"]);
          group.setAttribute("opacity", lit ? "1" : String(DIM.node));
        });
        edges.forEach((_edge, i) => {
          const lit = !edgeIndices || edgeIndices.has(i);
          const opacity = lit ? "0.9" : String(DIM.edge);
          (lines.children[i * 2 + 1] as SVGElement).setAttribute("stroke-opacity", opacity);
          (labels.children[i] as SVGElement).setAttribute("opacity", lit ? "1" : String(DIM.edge));
        });
      },

      focusOn(index: number) {
        const node = nodes[index];
        if (node) view.centreOn(node.x, node.y);
      },

      fit: view.fit,
      reset: view.reset,
      transform: view.transform,
      setTransform: view.setTransform,
      cleanup: view.cleanup,
    };
  }

  /**
   * The camera this view moves on, with its nodes made draggable.
   *
   * The camera - wheel zoom, background pan, framing - is `sceneCamera`; the
   * drag and the click-versus-drag rule are `draggableNodes`. Both are shared
   * with the alchemical network. What is left here is the two things that are
   * about a *ligand* network rather than about a canvas: how far a node reaches
   * from its position, and how close `focus` lands.
   */
  #interact(
    root: SVGSVGElement,
    scene: SVGGElement,
    nodes: NetNode[],
    groups: SVGGElement[],
    place: () => void,
    onTransform: (scale: number, tx: number, ty: number) => void,
    onClickNode: (index: number) => void,
  ): Camera {
    const view = sceneCamera(root, scene, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => extentOf(nodes, NODE_RADIUS),
      onTransform,
      hint: "Click the graph or hold Ctrl to zoom",
    });

    // Every edge is redrawn on every move, because a ligand network's edges are
    // few enough that finding the incident ones costs more than rewriting them.
    draggableNodes(groups, nodes, view, { moved: () => place(), clicked: onClickNode });

    return {
      ...view,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (x: number, y: number) => view.centreOn(x, y, FOCUS_SCALE),
    };
  }
}

// --- layouts ---------------------------------------------------------------

/**
 * Give every node a starting position.
 *
 * Circular and Radial are the answer; for Force-directed it is the seed. Either
 * way it is deterministic, which is what makes the picture the same on every
 * reload - d3's own phyllotaxis seeding is fine but ours is one line and lets
 * the force layout converge from something already spread out.
 */
function seedPositions(nodes: NetNode[], width: number, height: number, layout: Layout, edges: NetEdge[]): void {
  const cx = width / 2;
  const cy = height / 2;
  const ring = (subset: NetNode[], radius: number) => {
    subset.forEach((node, i) => {
      const angle = (2 * Math.PI * i) / Math.max(1, subset.length) - Math.PI / 2;
      node.x = cx + radius * Math.cos(angle);
      node.y = cy + radius * Math.sin(angle);
      node.fx = layout === "Force-directed" ? undefined : node.x;
      node.fy = layout === "Force-directed" ? undefined : node.y;
    });
  };

  if (layout === "Radial" && nodes.length) {
    // Breadth-first rings from the best-connected ligand - the shape a hub-and-
    // spoke network actually has, which a circle hides.
    const neighbours = new Map<string, string[]>(nodes.map((n) => [n["gufe-key"], []]));
    for (const edge of edges) {
      neighbours.get(edge.from["gufe-key"])!.push(edge.to["gufe-key"]);
      neighbours.get(edge.to["gufe-key"])!.push(edge.from["gufe-key"]);
    }
    const byKey = new Map(nodes.map((n) => [n["gufe-key"], n]));
    const start = nodes.reduce((best, n) =>
      neighbours.get(n["gufe-key"])!.length > neighbours.get(best["gufe-key"])!.length ? n : best,
    );

    const seen = new Set([start["gufe-key"]]);
    let level = [start["gufe-key"]];
    let depth = 0;
    const step = Math.min(width, height) * 0.18;
    while (level.length) {
      ring(
        level.map((key) => byKey.get(key)!),
        depth === 0 ? 0 : depth * step + 40,
      );
      const next: string[] = [];
      for (const id of level) {
        for (const other of neighbours.get(id)!) {
          if (!seen.has(other)) {
            seen.add(other);
            next.push(other);
          }
        }
      }
      level = next;
      depth++;
    }
    // Anything unreachable from the hub still needs somewhere to be.
    ring(nodes.filter((n) => !seen.has(n["gufe-key"])), Math.min(width, height) * 0.45);
    return;
  }

  ring(nodes, Math.min(width, height) * 0.34);
}

/**
 * Relax the seeded positions with d3's force simulation, in place.
 *
 * Resolves `false` when d3 is unreachable, which is the offline case the
 * caller turns into the circular layout plus a banner rather than an error.
 */
function relax(nodes: NetNode[], edges: NetEdge[], width: number, height: number): Promise<boolean> {
  return relaxWith<NetNode, D3Link>({
    nodes,
    // d3-force rewrites link endpoints in place, so it gets its own objects.
    links: edges.map((edge) => ({
      source: edge.from["gufe-key"],
      target: edge.to["gufe-key"],
      score: edge.score,
    })),
    tickMultiplier: FORCE.tickMultiplier,
    forces: (d3, links) => [
      [
        "link",
        d3
          .forceLink(links)
          .id((node) => node["gufe-key"])
          .distance((link) => FORCE.linkBaseDistance + (1 - ((link as D3Link).score ?? 0.5)) * FORCE.linkScoreBonus)
          .strength(FORCE.linkStrength),
      ],
      [
        "charge",
        d3
          .forceManyBody()
          .strength(FORCE.chargeStrength)
          .distanceMin(FORCE.chargeDistanceMin)
          .distanceMax(FORCE.chargeDistanceMax),
      ],
      ["center", d3.forceCenter(width / 2, height / 2).strength(FORCE.centerStrength)],
      ["collision", d3.forceCollide(NODE_RADIUS + FORCE.collisionPadding).iterations(FORCE.collisionIterations)],
      ["x", d3.forceX(width / 2).strength(FORCE.drift)],
      ["y", d3.forceY(height / 2).strength(FORCE.drift)],
    ],
  });
}

defineElement("gufe-ligand-network", GufeLigandNetwork);
