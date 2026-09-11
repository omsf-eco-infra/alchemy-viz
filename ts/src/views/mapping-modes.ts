/**
 * The six ways `<gufe-atom-mapping>` draws one pair of ligands.
 *
 *   2D          depictions with the mapping highlighted
 *   3D          both molecules, side by side, plain
 *   3D-Map      the same, with the mapping marked in the 2D colours
 *   3D Overlay  gufe's own `view_3d`, reproduced - see `renderOpenFE`
 *   Pairs       one above the other, a line per mapped pair
 *   Info        the mapping in numbers - counts, the correspondence, annotations
 *
 * Each is a function of `(stage, pair)` and nothing else. That is the whole
 * point of the file: they were six closures inside a six-hundred-line
 * `renderView`, each reaching into twenty locals, so none of them could be read
 * or tested without the other five. What they all needed - a box, a viewer in
 * it, a bounded wheel, a remembered pose, and a teardown - is `mapping-stage.ts`,
 * and what they are all about is `MappedPair`, which `preparePair` builds once
 * before any of them runs.
 *
 * Five of the six are a port of the viewer panel in the framejs prototype at
 * /j/019f2b55e1f57722af0293acbda78362, which is where the modes, the box labels
 * and the 3D colours come from. Anything that looks arbitrary here is arbitrary
 * there, and changing it in one place means changing it in both.
 *
 * **2D and 3D-Map diverge from the prototype together, and in the same
 * direction.** The prototype colours core atoms grey and each molecule's unique
 * atoms by side. gufe colours by *meaning* - an element change against a unique
 * atom, with core atoms not highlighted at all - and that is what OpenFE users
 * are taught, so both modes follow gufe. See `shared/atom-colors.ts`.
 *
 * They follow it through one call rather than two implementations: `markGroups`
 * in `shared/depict-style.ts` says which atoms are marked and in what colour,
 * and `render2D` and `renderColored` both ask it. Someone looking at a mapping
 * flat and then in space is looking at one claim drawn twice, so the two must
 * not be able to disagree about a single atom.
 */

import { pickable } from "../shared/controls.js";
import { el, errText, NO_VALUE } from "../shared/dom.js";
import { loadRDKit, type RDKitModule } from "../shared/engines.js";
import { centredMessage, statChip } from "../shared/panels.js";
import type { Vec3 } from "../shared/kabsch.js";
import { placeDepiction, type Molecule } from "../shared/sdf.js";
import { layoutPair } from "../shared/depict-layout.js";
import { depictGround } from "../shared/depict-theme.js";
import {
  DEPICT_STYLE,
  depictStyledSVG,
  depictionDetails,
  effectiveMarkStyle,
  markGroups,
  parseAtomSpec,
  postProcessDepiction,
  threeDmolColor,
  type Side,
} from "../shared/depict-style.js";
import { MOL } from "../shared/molecule-colors.js";
import {
  CHIP,
  FONT,
  MONO,
  PANE_LABEL_OVERLAY,
  RADIUS,
  SECTION_LABEL,
  SPACE,
  SURFACE,
  TEXT,
  WEIGHT,
} from "../shared/style.js";
import type { MappedPair, Relation, RelationKind } from "./atom-mapping.js";
import { pairColour, openfeShift, relations } from "./atom-mapping.js";
import type { MappingStage } from "./mapping-stage.js";
import type { LigandAtomMappingViz } from "../schema/types.js";

const DEPICT_SIZE = 420;

/**
 * Sizes, all of them the prototype's.
 *
 * `markStick` and `markSphere` are what a marked atom swells to in 3D-Map. The
 * prototype marked only each molecule's unique atoms; the same sizes now carry
 * element changes too, which is why they are not named for either.
 */
const STYLE = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04,
};

/** How far apart Pairs mode lifts the second molecule. */
const PAIRS = { gap: 2.5, minLiftFraction: 0.6 };

/**
 * Room left at the sides when 3D Overlay is fitted to a pane, in pixels.
 *
 * Ours rather than gufe's, and the same number the ligand network fits its graph
 * with. See `renderOpenFE` for why a fit with nothing to spare is not enough.
 */
const FIT_MARGIN = 24;

/**
 * gufe's numbers for 3D Overlay, and not ours to tune.
 *
 * Every one of them is read off `display_mapping_3d` and `_add_spheres`. A
 * different radius or a different floor draws a different picture from the
 * notebook, which is the one thing this mode exists not to do.
 */
const OPENFE = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
};

/**
 * What Info's correspondence rows are striped with, and how narrow a column of
 * them may get.
 *
 * The colours are the depiction style's, which is where the chips above the
 * table take theirs from too: a row, the chip that counts it and the atom in the
 * 2D depiction are one colour or the picture and its reading disagree. A mapped
 * atom has no colour anywhere, so it has none here.
 */
const RELATION_COLOR: Record<RelationKind, string | null> = {
  mapped: null,
  element: DEPICT_STYLE.modifiedColor,
  uniqueA: DEPICT_STYLE.destroyedColor,
  uniqueB: DEPICT_STYLE.createdColor,
};

/** Narrowest a correspondence column may be, in pixels: about `123 Cl -> 123 Cl`. */
const RELATION_COLUMN = 132;

/** Per-axis extent of a set of coordinates. */
function extents(coords: readonly Vec3[]): { min: Vec3; max: Vec3; span: Vec3 } {
  const min: Vec3 = [Infinity, Infinity, Infinity];
  const max: Vec3 = [-Infinity, -Infinity, -Infinity];
  for (const point of coords) {
    for (let k = 0; k < 3; k++) {
      if (point[k] < min[k]) min[k] = point[k];
      if (point[k] > max[k]) max[k] = point[k];
    }
  }
  return { min, max, span: [max[0] - min[0], max[1] - min[1], max[2] - min[2]] };
}

/**
 * Where to lift the second molecule in Pairs mode, and by how much.
 *
 * Along the molecule's *thinnest* axis, so the lines between mapped atoms cross
 * the shortest gap and stay readable. The lift is whichever is larger: enough to
 * clear the first molecule, or a fraction of its longest span - the second is
 * what stops two flat molecules ending up nearly on top of each other.
 */
function liftFor(a: readonly Vec3[], b: readonly Vec3[]): { axis: number; lift: number } {
  const first = extents(a);
  const second = extents(b);
  let axis = 0;
  if (first.span[1] < first.span[axis]) axis = 1;
  if (first.span[2] < first.span[axis]) axis = 2;
  const longest = Math.max(first.span[0], first.span[1], first.span[2]);
  const clearance = first.max[axis] - second.min[axis] + PAIRS.gap;
  const minimum = PAIRS.minLiftFraction * longest + PAIRS.gap;
  return { axis, lift: Math.max(clearance, minimum) };
}

/**
 * The two molecules, each with the side it is on and the atoms named for it.
 *
 * `render2D` and `renderColored` both walk this, which is what makes them ask
 * `markGroups` the same question about the same atoms: the two pictures are one
 * claim, drawn flat and drawn in space.
 */
function sidesOf(pair: MappedPair): {
  mol: Molecule;
  uniques: MappedPair["uniquesA"];
  side: Side;
  custom: ReadonlySet<number>;
}[] {
  const custom = parseAtomSpec(DEPICT_STYLE.customSpec);
  return [
    { mol: pair.molA, uniques: pair.uniquesA, side: "left" as Side, custom: custom.left },
    { mol: pair.molB, uniques: pair.uniquesB, side: "right" as Side, custom: custom.right },
  ];
}

// --- the 3D modes ----------------------------------------------------------

export function renderPlain(stage: MappingStage, pair: MappedPair): void {
  for (const mol of [pair.molA, pair.molB]) {
    const box = stage.box(mol.name);
    const viewer = stage.open(box, [mol]);
    viewer.setStyle(
      {},
      { stick: { radius: STYLE.stick, colorscheme: "Jmol" }, sphere: { scale: STYLE.sphere, colorscheme: "Jmol" } },
    );
    viewer.zoomTo();
    viewer.render();
    stage.settle(box);
    stage.pose(box);
  }
  stage.sync();
}

/**
 * The mapping, marked on the structures in the colours 2D marks it with.
 *
 * *Which* atom is marked and *in which colour* is not decided here: it is
 * `markGroups`, the same call `render2D` makes, reading the same style document.
 * So an atom cannot be a unique atom in one picture and an element change in the
 * other, and the two cannot disagree about what a colour means - which is the
 * whole reason someone looks at both.
 *
 * What 2D does with a group and this does not is bonds and letters. A stick has
 * no letter, and 3Dmol colours a bond from the atoms at its ends, so a marked
 * atom simply swells and takes the colour.
 */
export function renderColored(stage: MappingStage, pair: MappedPair): void {
  const style = DEPICT_STYLE;
  const mol = MOL();
  for (const side of sidesOf(pair)) {
    const box = stage.box(side.mol.name);
    const viewer = stage.open(box, [side.mol]);
    viewer.setStyle(
      {},
      { stick: { radius: STYLE.stick, color: mol.core }, sphere: { scale: STYLE.sphere, color: mol.core } },
    );
    // 3Dmol's V2000 reader numbers `serial` from zero within a model, so an
    // atom's serial is the payload's own index. Adding one to it marked the next
    // atom along, all the way up the molecule, and 3D-Map then disagreed with 2D
    // about every atom it coloured.
    const mark = (index: number, colour: string): void => {
      viewer.addStyle(
        { serial: index },
        {
          stick: { radius: STYLE.markStick, color: threeDmolColor(colour) },
          sphere: { scale: STYLE.markSphere, color: threeDmolColor(colour) },
        },
      );
    };
    for (const group of markGroups(style, side.mol, side.uniques, side.side)) {
      for (const atom of group.atoms) mark(atom, group.color);
    }
    // Last, so an atom named in `customSpec` takes the custom colour whatever
    // the mapping would have given it, exactly as it does in 2D.
    for (const atom of side.custom) {
      if (atom < side.mol.symbols.length) mark(atom, style.customColor);
    }
    viewer.zoomTo();
    viewer.render();
    stage.settle(box);
    stage.pose(box);
  }
  stage.sync();
}

/**
 * `LigandAtomMapping.view_3d()`, drawn here instead of in a notebook.
 *
 * gufe's `display_mapping_3d` puts four models in one scene: a copy of each
 * molecule pushed out along x, and both molecules again unmoved in the middle,
 * where they overlap. Everything is plain sticks in element colours, and the
 * mapping is said entirely with translucent spheres - one on each atom of a
 * mapped pair, both the same colour, so following a colour from the left copy to
 * the right one is following the mapping.
 *
 * The middle is the overlap on its own terms: no spheres, just how well the two
 * conformers sit on each other.
 *
 * Every number here is gufe's, in `OPENFE` and `openfeShift`, because the point
 * of the mode is that it matches. `show_atomIDs` is gufe's other option and it
 * is off by default there, so it is absent here.
 *
 * One thing is not gufe's: the two molecules are superposed before any of this,
 * by `inFrameOf`. gufe does not superpose, because it does not need to - a
 * mapping in a notebook comes from ligands already docked into one frame, and
 * there the middle of the picture is the overlap it is meant to be. This element
 * is handed whatever a payload holds, and on conformers that do not share a
 * frame the un-superposed middle is two molecules lying across each other at an
 * angle, which is the picture this mode most exists to show and the one it would
 * then get wrong. On ligands gufe would be given, the superposition is near
 * enough the identity and the picture is the notebook's.
 */
export function renderOpenFE(stage: MappingStage, pair: MappedPair): void {
  const { molA, molB, nameA, nameB, pairs } = pair;
  const box = stage.box(`${nameA} (left), both overlaid (middle), ${nameB} (right)`);
  const shift = openfeShift(molA.coords, molB.coords);
  const pushed = (mol: Molecule, alongX: number): Molecule => ({
    ...mol,
    coords: mol.coords.map(([x, y, z]) => [x + alongX, y, z] as Vec3),
  });
  const left = pushed(molA, -shift);
  const right = pushed(molB, shift);

  const viewer = stage.open(box, [left, right, molA, molB]);
  // One style for every model, at 3Dmol's own defaults, which is what
  // `setStyle({stick: {}})` asks for.
  viewer.setStyle({}, { stick: {} });

  const mapped = Array.from(pairs);
  mapped.forEach(([a, b], index) => {
    const here = left.coords[a];
    const there = right.coords[b];
    if (!here || !there) return;
    const colour = pairColour(index, mapped.length);
    for (const [x, y, z] of [here, there]) {
      viewer.addSphere({
        center: { x, y, z },
        radius: OPENFE.sphereRadius,
        color: colour,
        alpha: OPENFE.sphereAlpha,
      });
    }
  });

  viewer.zoomTo();
  // gufe frames this in a square 600 by 600 view, and 3Dmol's `zoomTo` fits a
  // scene to the height alone. Three molecules across is much wider than it is
  // tall, so in a pane taller than it is wide - the ligand network's detail pane
  // is one - both shifted copies land off the sides. Pulling back to the pane's
  // width is what a square view gives for free.
  //
  // The margin is not decoration. `zoomTo` fits the scene's bounding sphere at
  // the depth of its centre, and the camera is a perspective one, so the half
  // nearer the camera draws larger than that fit allows for: fitted with nothing
  // to spare, the near edge of each shifted copy is cut off. Nothing happens in
  // a pane wide enough that the height is still what binds, which is the case
  // `zoomTo` already had right.
  const { clientWidth, clientHeight } = box.container;
  const across = clientWidth - 2 * FIT_MARGIN;
  if (across > 0 && across < clientHeight) viewer.zoom(across / clientHeight);
  viewer.render();
  stage.settle(box);
}

export function renderLines(stage: MappingStage, pair: MappedPair): void {
  const { molA, molB, nameA, nameB, pairs } = pair;
  const box = stage.box(`${nameA} to ${nameB}  (${pairs.size} mapped pairs)`);

  // The superposition this mode needs most is already done - `inFrameOf` - so
  // all that is left is to lift B clear of A. Unaligned, these lines would cross
  // each other and say nothing about how good the mapping is.
  const { axis, lift } = liftFor(molA.coords as Vec3[], molB.coords as Vec3[]);
  const lifted: Molecule = {
    ...molB,
    coords: molB.coords.map((c) => {
      const out: Vec3 = [c[0], c[1], c[2]];
      out[axis] += lift;
      return out;
    }),
  };

  // Both molecules in the element colours the plain 3D view uses. Which is which
  // is already said by where they sit and by the line between them, so colouring
  // them by side would only cost the reader the elements.
  const viewer = stage.open(box, [molA, lifted]);
  const pairStyle = {
    stick: { radius: STYLE.stick, colorscheme: "Jmol" },
    sphere: { scale: STYLE.pairSphere, colorscheme: "Jmol" },
  };
  viewer.setStyle({ model: 0 }, pairStyle);
  viewer.setStyle({ model: 1 }, pairStyle);
  for (const [a, b] of pairs) {
    const pa = molA.coords[a];
    const pb = lifted.coords[b];
    if (!pa || !pb) continue;
    viewer.addCylinder({
      start: { x: pa[0], y: pa[1], z: pa[2] },
      end: { x: pb[0], y: pb[1], z: pb[2] },
      radius: STYLE.lineRadius,
      dashed: true,
      fromCap: "round",
      toCap: "round",
      color: MOL().pairLine,
    });
  }
  viewer.zoomTo();
  // Turn the camera so the lift is across the screen rather than into it.
  if (axis === 2) viewer.rotate(90, "x");
  else if (axis === 0) viewer.rotate(-90, "z");
  viewer.render();
  stage.settle(box);
}

// --- 2D --------------------------------------------------------------------

/**
 * The flat picture.
 *
 * *Which* atom is marked, and why, is gufe's scheme rather than the prototype's:
 * an element change against a unique atom, with everything else unhighlighted.
 * That is what OpenFE users are taught, and it is the one place this view does
 * not follow the prototype.
 *
 * *How* those atoms are drawn is not decided here at all. It is one JSON
 * document, `shared/depict-style.ts`, authored by hand in the editor that file
 * links to and compiled into this bundle. At its defaults it draws what gufe
 * draws.
 */
export function render2D(stage: MappingStage, pair: MappedPair): void {
  const style = DEPICT_STYLE;
  const targets = sidesOf(pair).map((side) => {
    const wrap = el("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;");
    const box = el(
      "div",
      "flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;" +
        `background:${depictGround()};`,
    );
    box.appendChild(centredMessage("Loading 2D depiction..."));
    wrap.appendChild(box);
    // On the depiction, not above it, and outside the box the depiction replaces
    // the contents of when RDKit comes back.
    if (stage.named) wrap.appendChild(el("div", PANE_LABEL_OVERLAY, side.mol.name));
    stage.element.appendChild(wrap);
    return { box, side };
  });

  loadRDKit()
    .then((RDKit: RDKitModule) => {
      // Asked once per pair rather than once per panel: it is a property of the
      // RDKit build, and the two panels must not disagree about it.
      const markStyle = effectiveMarkStyle(style, RDKit);
      // Where the coordinates come from is decided once for the pair rather than
      // per panel, because aligning the second molecule onto the first needs
      // both layouts in hand. gufe does the same two things here.
      const laid = layoutPair(RDKit, pair.from.sdf, pair.to.sdf, style.layout, style.alignPair ? pair.pairs : null);
      for (const { box, side } of targets) {
        const groups = markGroups(style, side.mol, side.uniques, side.side);
        const details = depictionDetails(style, DEPICT_SIZE, groups, side.custom, markStyle, side.mol.symbols.length);
        const drawn = depictStyledSVG(RDKit, side.side === "left" ? laid.left : laid.right, DEPICT_SIZE, details);
        box.replaceChildren();
        if (!drawn) {
          box.appendChild(centredMessage("Failed to parse molecule", true));
          continue;
        }
        placeDepiction(box, drawn, DEPICT_SIZE);
        // After it is in the document: the post-processing reads the styles
        // RDKit set on each element, which needs the elements to be real.
        const svg = box.querySelector("svg");
        if (svg) postProcessDepiction(svg, side.mol, style, groups, side.custom, markStyle);
      }
    })
    .catch((e: unknown) => {
      for (const { box } of targets) {
        box.replaceChildren(centredMessage(`RDKit failed to load: ${errText(e)}`, true));
      }
    });
}

// --- Info ------------------------------------------------------------------

/**
 * The mapping in numbers: what it relates, and the correspondence itself.
 *
 * Last among the modes because it is a reading of the picture rather than a
 * picture, and it is where everything that is not a molecule lives: the name,
 * the counts, the correspondence and the annotations. There is deliberately no
 * header strip and no statistics bar anywhere in this view - the prototype has
 * neither, the box labels already name both ligands, and anything else above the
 * molecules is saying a second time what this says properly.
 */
export function renderInfo(stage: MappingStage, pair: MappedPair, payload: LigandAtomMappingViz): void {
  const { nameA, nameB, pairs, molA, molB, uniquesA, uniquesB } = pair;

  // `min-width:0` because the correspondence below is a grid of monospaced cells
  // that cannot shrink: without it this pane takes their width as its own
  // minimum and pushes the chips off the side of a narrow detail pane.
  const body = el(
    "div",
    "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;",
  );
  stage.element.appendChild(body);

  // With no header strip, Info is where the payload names itself. Only names it:
  // the gufe class and the gufe key are Python and hashing vocabulary, and what
  // this payload is, the two molecules and the correspondence already say.
  body.appendChild(
    el(
      "div",
      `font-size:${FONT.title};font-weight:${WEIGHT.bold};color:${TEXT.title};`,
      payload.name || `${nameA} to ${nameB}`,
    ),
  );

  // The chips are the whole of the colour legend, and in a view with no molecule
  // in it a colour that only names itself is decoration. So every chip that
  // carries one also selects the atoms it counts: clicking it narrows the
  // correspondence below to those rows, clicking it again widens it back out.
  // The counts come from `uniqueAtoms` and the rows from `relations`, which is
  // why those two must agree about every atom.
  const rows = relations(pairs, molA.symbols, molB.symbols);
  const counts = el("div", CHIP.row);
  const chips: { node: HTMLButtonElement; kinds: readonly RelationKind[] }[] = [];
  let filter: readonly RelationKind[] | null = null;

  // The chips take their colours from the depiction style rather than from the
  // constants, so the legend cannot say one thing while 2D draws another.
  const filterChip = (label: string, value: number, kinds: readonly RelationKind[], color?: string): void => {
    const node = pickable(`${CHIP.plain}${CHIP.button}`, CHIP.className);
    node.appendChild(statChip(label, String(value), color));
    node.onclick = () => {
      filter = filter === kinds ? null : kinds;
      refresh();
    };
    chips.push({ node, kinds });
    counts.appendChild(node);
  };
  const plainChip = (label: string, value: string): void => {
    const holder = el("span", CHIP.plain);
    holder.appendChild(statChip(label, value));
    counts.appendChild(holder);
  };

  filterChip("mapped atoms", pairs.size, ["mapped", "element"]);
  filterChip("element changes", uniquesA.elements.length, ["element"], DEPICT_STYLE.modifiedColor);
  filterChip(`unique to ${nameA}`, uniquesA.atoms.length, ["uniqueA"], DEPICT_STYLE.destroyedColor);
  filterChip(`unique to ${nameB}`, uniquesB.atoms.length, ["uniqueB"], DEPICT_STYLE.createdColor);
  plainChip(`atoms in ${nameA}`, String(molA.symbols.length));
  plainChip(`atoms in ${nameB}`, String(molB.symbols.length));
  plainChip("score", payload.score == null ? NO_VALUE : payload.score.toFixed(3));
  body.appendChild(counts);

  body.appendChild(el("div", SECTION_LABEL, "Correspondence"));
  // What the two columns of every row are, said once above them rather than as a
  // header the grid would have to repeat in every column.
  const caption = el("div", `font-size:${FONT.small};line-height:1.6;color:${TEXT.faint};`);
  body.appendChild(caption);

  // A row per atom, laid out in as many columns as the pane is wide. The indices
  // are padded to the widest of them and drawn monospaced, so the arrows line up
  // down a column and a hundred atoms read as a table rather than as one long
  // sentence, which is what a run of `3 -> 5` separated by spaces had become.
  const table = el(
    "div",
    `display:grid;grid-template-columns:repeat(auto-fill,minmax(${RELATION_COLUMN}px,1fr));` +
      `gap:${SPACE.xs} ${SPACE.md};font-family:${FONT.mono};font-size:${FONT.small};color:${TEXT.primary};`,
  );
  body.appendChild(table);

  const digits = String(Math.max(molA.symbols.length, molB.symbols.length, 1) - 1).length;
  const side = (index: number | null, symbol: string): string =>
    `${(index == null ? NO_VALUE : String(index)).padStart(digits)} ${symbol.padEnd(2)}`;
  const describe = (row: Relation): string => {
    if (row.kind === "uniqueA") return `${nameA} atom ${row.a} ${row.symbolA} maps to nothing`;
    if (row.kind === "uniqueB") return `${nameB} atom ${row.b} ${row.symbolB} maps to nothing`;
    const change = row.kind === "element" ? ", an element change" : "";
    return `${nameA} atom ${row.a} ${row.symbolA} maps to ${nameB} atom ${row.b} ${row.symbolB}${change}`;
  };
  // The stripe down the left of a row is the colour of the chip that counts it,
  // so a row and the legend above it are one claim rather than two.
  const cell = (row: Relation): HTMLElement => {
    const node = el(
      "div",
      `white-space:pre;padding:${SPACE.xs} ${SPACE.md};border-radius:${RADIUS.sm};` +
        `background:${SURFACE.card};border-left:3px solid ${RELATION_COLOR[row.kind] ?? "transparent"};`,
      `${side(row.a, row.symbolA)} -> ${side(row.b, row.symbolB)}`,
    );
    node.title = describe(row);
    // Which kind of row this is, in the DOM rather than only in a colour:
    // visible in devtools and assertable in a test, and the one thing a stripe
    // cannot say to a reader who cannot see it.
    node.dataset.gufeRelation = row.kind;
    return node;
  };

  const refresh = (): void => {
    const active = filter;
    const shown = active ? rows.filter((row) => active.includes(row.kind)) : rows;
    table.replaceChildren(...shown.map(cell));
    if (!shown.length) {
      table.appendChild(
        el(
          "div",
          `font-size:${FONT.small};line-height:1.6;color:${TEXT.faint};grid-column:1/-1;`,
          filter ? "No atoms of that kind." : "This mapping has no atoms.",
        ),
      );
    }
    caption.textContent =
      (pairs.size ? "" : "This mapping relates no atoms at all. ") +
      `${nameA} -> ${nameB}, by atom index and element` +
      (filter ? "; click the chip again for all of them" : "");
    for (const chip of chips) {
      const on = chip.kinds === filter;
      // `aria-pressed` alone: the stylesheet paints a picked chip from it, the
      // same way it paints every other pickable thing.
      chip.node.setAttribute("aria-pressed", String(on));
      chip.node.title = on ? "Show every atom" : "Show only these atoms";
    }
  };
  refresh();

  const annotations = Object.entries(payload.annotations ?? {}).filter(([key]) => key !== "score");
  if (!annotations.length) return;
  body.appendChild(el("div", SECTION_LABEL, "Annotations"));
  const notes = el("div", `${MONO}color:${TEXT.faint};`);
  for (const [key, value] of annotations) {
    notes.appendChild(el("div", "", `${key}: ${String(value)}`));
  }
  body.appendChild(notes);
}
