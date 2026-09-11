/**
 * The interface, in one place.
 *
 * Every button, dropdown, panel, label and piece of text in every view is built
 * from this file. Change a value here and it changes everywhere; there is no
 * second place to look, and a view that writes its own `font-size` is a bug
 * rather than a style choice.
 *
 * **Interface only.** Colours that mean something chemical live elsewhere and
 * are not ours to restyle: `atom-colors.ts` holds the mapping highlights and the
 * pair ramp, mirrored from gufe and matplotlib, and `molecule-colors.ts` holds
 * the 3D mode colours from the framejs prototype. Nothing in this file should
 * ever describe an atom.
 *
 * The palette itself is `theme.ts`, which is the light and dark colour tables.
 * This is the front door to it: views import from here, not from there, so the
 * set of things a view can reach for is the set of things that have been decided
 * on.
 */

import { T, V } from "./theme.js";

// --- tokens ----------------------------------------------------------------
//
// Named by role rather than by size, so "the small text" is a decision made once
// rather than a number retyped thirty times. The values are the ones the views
// had converged on by hand.

export const FONT = {
  family: "'Inter',system-ui,sans-serif",
  mono: "ui-monospace,SFMono-Regular,Menlo,monospace",
  /** Label captions and dense readouts. */
  tiny: "10px",
  /** The default for chrome: chips, legends, list rows. */
  small: "11px",
  /** Body text, toolbars, form controls. */
  body: "12px",
  /** Pane labels and anything heading a section of a view. */
  heading: "13px",
  /** A view's title. */
  title: "15px",
  /**
   * The one value a card is built around: a formula, a concentration. Large
   * enough that a reader takes it from the shape of the card rather than from
   * reading a row, which is the only reason to use it - a card with two of
   * these has no hierarchy left.
   */
  display: "26px",
} as const;

export const WEIGHT = {
  normal: "400",
  bold: "700",
} as const;

export const SPACE = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px",
} as const;

export const RADIUS = {
  sm: "3px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  pill: "999px",
} as const;

/** Text colours, by what the text is for. */
export const TEXT = {
  title: V.titleColor,
  primary: V.textPrimary,
  muted: V.textMuted,
  faint: V.textMuted2,
  error: V.errorFg,
} as const;

/** Surfaces, for anything that needs one directly. */
export const SURFACE = {
  card: V.cardBg,
  /**
   * Where a 3D engine draws. Interface, not chemistry: it is the paper.
   *
   * The one literal here, and a function so it is read when a viewer is built
   * rather than when this module loads. 3Dmol wants `0x2b2b40`, which is not a
   * colour CSS has ever heard of, so this is the one surface a custom property
   * cannot carry.
   */
  viewer: (): string => T.viewerBg,
} as const;

// The 2D depiction ground is deliberately absent. It has to be decided with the
// palette RDKit draws in, so it comes from `depictGround()` in `depict-theme.ts`
// and is read when a view draws rather than when this module loads.

// --- controls --------------------------------------------------------------

/**
 * A button.
 *
 * `base` deliberately sets no `background`. The three states - resting, hover,
 * and on - are a stylesheet rule keyed off `BUTTON.className` and the button's
 * own `aria-pressed` / `aria-expanded`, which is why they are not here: an
 * inline background would beat the rule, and every button would be back to
 * carrying a pair of pointer handlers to do what `:hover` does.
 *
 * Use `button()` in `controls.ts` rather than this directly; it is what puts the
 * class on.
 */
export const BUTTON = {
  // `max-width` and `box-sizing` are what keep a button inside whatever holds
  // it. A label wider than the menu column would otherwise run out over the
  // picture, and `width:100%` on a padded, bordered button means 100% plus the
  // padding and the border - twenty pixels past the edge of the panel.
  base:
    `color:${V.btnFg};border:1px solid ${V.btnBorder};` +
    `padding:${SPACE.sm} 9px;font-size:${FONT.small};font-weight:${WEIGHT.bold};` +
    `border-radius:${RADIUS.sm};cursor:pointer;font-family:inherit;` +
    "max-width:100%;box-sizing:border-box;",
  /** What the stylesheet in `theme.ts` paints. */
  className: "gufe-btn",
} as const;

/** A dropdown. */
export const SELECT =
  `background:${V.selectBg};color:${V.textPrimary};border:1px solid ${V.selectBorder};` +
  `border-radius:${RADIUS.md};padding:${SPACE.sm} ${SPACE.lg};font-size:${FONT.body};` +
  "cursor:pointer;font-family:inherit;";

/** A text or search field. Same shape as a dropdown, so a form lines up. */
export const INPUT = `${SELECT}width:100%;box-sizing:border-box;cursor:text;`;

// --- containers ------------------------------------------------------------

/**
 * How tall one line of a header strip is, which is how tall the menu button is:
 * a 14px icon, 4px of padding above and below it, and a 1px border.
 *
 * Every line in the strip is given this height so the button can be aligned to
 * the first of them. In a pane narrow enough to wrap the stats onto a second
 * line, a centred button hangs in the gap between the two rather than beside
 * the title it belongs to.
 */
export const HEADER_LINE = "24px";

/**
 * The strip at the top of a view: menu slot, title, stats.
 *
 * Top-aligned, not baseline-aligned. A baseline-aligned line puts its baseline
 * group flush to the top, which left the title sitting a few pixels above the
 * button beside it; the shared `line-height` is what centres them against each
 * other instead. Title and stats keep their shared baseline inside
 * `headerStrip`'s own row.
 */
export const HEADER =
  `display:flex;align-items:flex-start;gap:12px;padding:9px ${SPACE.xxl};flex-shrink:0;` +
  `line-height:${HEADER_LINE};background:${V.toolbarBg};border-bottom:1px solid ${V.toolbarBorder};`;

/** How wide the menu is allowed to be when it is a column beside the panes. */
export const MENU_PANEL_WIDTH = { min: "236px", max: "340px" };

/**
 * The four things about the panel that a stacked view has to change.
 *
 * Custom properties rather than a restyling pass, because the panel is built on
 * the first open and the arrangement is decided before that: something set on
 * the wrapper above it lands on the panel whenever the panel appears, and again
 * whenever the arrangement changes, with nothing having to remember either.
 * `orientMenuPanel` is what sets them.
 */
export const MENU_VAR = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y",
} as const;

/**
 * The chrome menu's own column: the network views' search, filters, list and
 * export controls.
 *
 * Stretches to the row it is placed in rather than fixing its own width, so that
 * anything wider than the controls - the export block, the debug one - lines up
 * with them instead of hanging off the edge of the background. The floor is the
 * width the menus were designed at; the ceiling stops one long unbroken SMILES
 * in a ligand list from dragging the whole panel across the view.
 *
 * `overflow-y:auto` is the last resort, and only bites in a view too short to
 * hold `MENU_LIST`'s floor and the controls both: the panel scrolls, so nothing
 * in it is ever unreachable. Above that height the list is the part that gives.
 */
export const MENU_PANEL =
  `display:flex;flex-direction:column;gap:${SPACE.lg};flex:1;` +
  `min-width:var(${MENU_VAR.min},${MENU_PANEL_WIDTH.min});max-width:var(${MENU_VAR.max},${MENU_PANEL_WIDTH.max});` +
  `box-sizing:border-box;padding:${SPACE.xl};min-height:0;overflow-y:auto;background:${V.panelBg};` +
  `border:0 solid ${V.splitBorder};` +
  `border-right-width:var(${MENU_VAR.ruleX},1px);border-bottom-width:var(${MENU_VAR.ruleY},0);`;

/** The most of a stacked view the menu may take, leaving the rest to the panes. */
export const MENU_PANEL_STACKED_SHARE = "45%";

/**
 * The scrolling list of nodes or edges inside `MENU_PANEL`.
 *
 * `flex` with a floor and `overflow:auto` together are the whole point: the
 * list is the one part of the menu that grows with the payload, so it is the
 * part that gives. It is also the only item here that can shrink at all - a
 * scroll container's automatic minimum size is zero, where a button's is the
 * button - which is what makes the shrinking land on the list rather than
 * squashing the controls. Without this a network of two hundred ligands makes a
 * list two hundred rows tall and pushes the hint, the export block and the
 * clear button off the bottom of the view.
 *
 * The floor is about three rows. A list squeezed below that has stopped being a
 * list you can pick from, and it is better for the panel to scroll than for the
 * list to vanish between the filters and the buttons.
 */
export const MENU_LIST = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;";

/** The row of controls under a canvas: both graph views carry one. */
export const TOOLBAR =
  `display:flex;align-items:center;gap:${SPACE.xl};flex-wrap:wrap;padding:${SPACE.lg} ${SPACE.xxl};` +
  `flex-shrink:0;background:${V.toolbarBg};border-top:1px solid ${V.toolbarBorder};`;

/** The bar naming a pane: "3D", "2D", a molecule's name. */
export const PANE_LABEL =
  `flex-shrink:0;padding:${SPACE.sm} ${SPACE.xl};font-size:${FONT.heading};` +
  `font-weight:${WEIGHT.bold};color:${V.labelFg};background:${V.labelBg};`;

/**
 * The same name, floating over the top left of a pane rather than in a bar
 * above it. A bar costs every pane a row of height whether or not the name
 * needs one, and in a pair of molecules the picture wants that height more than
 * the name does. It keeps the bar's own background so it stays readable over a
 * dark viewer and a white depiction alike, and takes no pointer events so it
 * cannot swallow a drag meant for the molecule underneath.
 *
 * The pane it sits in must be `position:relative`.
 */
export const PANE_LABEL_OVERLAY =
  `position:absolute;top:${SPACE.md};left:${SPACE.md};z-index:10;pointer-events:none;` +
  `max-width:calc(100% - ${SPACE.xxl} - ${SPACE.xxl});white-space:nowrap;overflow:hidden;` +
  `text-overflow:ellipsis;padding:${SPACE.xs} ${SPACE.lg};border-radius:${RADIUS.md};` +
  `font-size:${FONT.heading};font-weight:${WEIGHT.bold};color:${V.labelFg};background:${V.labelBg};`;

/**
 * The pill a floating name or readout is drawn in.
 *
 * The same background the bars use, so the text stays readable over a dark
 * viewer and a white depiction alike.
 */
export const PANE_CHIP =
  `padding:${SPACE.xs} ${SPACE.lg};border-radius:${RADIUS.md};white-space:nowrap;overflow:hidden;` +
  `text-overflow:ellipsis;color:${V.labelFg};background:${V.labelBg};`;

/**
 * The chrome of a 3D pane, floating over its top left: the menu button, and
 * the name of what is drawn.
 *
 * A bar above the picture costs a row of height for the whole of a sitting,
 * whether or not anyone is reading it, and a picture of a protein wants that
 * height more than a button does. Over the picture the chrome costs nothing
 * when it is not being used, and it is still the top left corner - the place a
 * reader looks for it.
 *
 * The pane it sits in must be `position:relative`.
 */
export const PANE_CHROME_OVERLAY =
  `position:absolute;top:${SPACE.lg};left:${SPACE.lg};z-index:15;display:flex;align-items:center;` +
  `gap:${SPACE.md};min-width:0;max-width:calc(100% - ${SPACE.xxl} - ${SPACE.xxl});`;

/** How far the menu panel's own contents start below the floating chrome. */
export const PANE_CHROME_CLEARANCE = "42px";

/** A bordered box: the standard container for anything that is not a viewer. */
export const CARD =
  `display:flex;flex-direction:column;gap:${SPACE.xs};padding:${SPACE.xxl} 18px;` +
  `border-radius:${RADIUS.xl};background:${V.cardBg};border:1px solid ${V.cardBorder};`;

/**
 * A card or a row that can be picked, as in a list of components or ligands.
 *
 * Like `BUTTON`, it sets neither `background` nor `border-color`: which of the
 * two states it is in is `aria-pressed` on the element, and `PICK.className` is
 * what the stylesheet paints from. One fact, read by the reader through a
 * screen reader and by the eye through a colour, rather than two that can
 * disagree.
 */
export const PICK = {
  card:
    `display:flex;flex-direction:column;align-items:flex-start;gap:${SPACE.sm};` +
    `padding:${SPACE.lg} ${SPACE.xl};text-align:left;border-radius:${RADIUS.lg};` +
    `border:1px solid;cursor:pointer;font-family:inherit;font-size:${FONT.body};width:100%;`,
  /** The compact form: one line in a network menu's list rather than a card. */
  row:
    `display:flex;align-items:center;gap:${SPACE.md};padding:5px ${SPACE.lg};` +
    `border:1px solid;border-radius:${SPACE.md};text-align:left;font-family:inherit;` +
    `font-size:${FONT.small};cursor:pointer;width:100%;min-width:0;color:${V.textPrimary};`,
  className: "gufe-pick",
} as const;

/** A floating readout that follows the pointer. */
export const TOOLTIP =
  `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;` +
  `padding:7px ${SPACE.xl};border-radius:${RADIUS.md};font-size:${FONT.small};line-height:1.5;` +
  `max-width:260px;background:${V.tooltipBg};border:1px solid ${V.tooltipBorder};` +
  `color:${V.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`;

/** The floating cluster of controls a 3D pane carries, bottom right. */
export const OVERLAY_CONTROLS =
  `position:absolute;bottom:${SPACE.xl};right:${SPACE.xl};display:flex;gap:${SPACE.sm};` +
  `padding:${SPACE.sm};border-radius:${RADIUS.md};z-index:10;background:${V.switcherBg};` +
  "box-shadow:0 2px 8px rgba(0,0,0,0.25);";

// --- text ------------------------------------------------------------------

/** A block of monospaced detail: keys, correspondences, annotations. */
export const MONO = `font-family:${FONT.mono};font-size:${FONT.small};line-height:1.7;color:${V.textMuted};`;

/** A small uppercase heading over a list or a block. */
export const SECTION_LABEL =
  `font-size:${FONT.small};font-weight:${WEIGHT.bold};letter-spacing:.08em;` +
  `text-transform:uppercase;color:${V.textMuted2};`;

/**
 * A chip in a row of them, and the row itself.
 *
 * `button` is for a chip that selects what it counts, which is what the atom
 * mapping's Info legend is: the count is the label, and clicking it narrows the
 * table under it to those atoms. `plain` keeps a chip that does not select
 * sitting on the same line as one that does.
 */
export const CHIP = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${SPACE.xs} ${SPACE.sm};font-size:${FONT.small};`,
  plain:
    `display:inline-flex;align-items:center;padding:${SPACE.xs} ${SPACE.md};` +
    `border:1px solid transparent;border-radius:${RADIUS.pill};` +
    `font-family:inherit;font-size:${FONT.small};color:${V.textMuted};`,
  /**
   * A chip that selects what it counts.
   *
   * Deliberately sets no `background`: like `BUTTON` and `PICK`, resting, hover
   * and picked are one stylesheet rule keyed off `aria-pressed`, and an inline
   * background would beat it. Pair it with `CHIP.className`.
   */
  button: `cursor:pointer;border-color:${V.btnBorder};`,
  /**
   * A chip that is read rather than clicked: a value the card is quoting, in a
   * box that says so. Drawn like a button and deliberately not one, so it does
   * not invite the click a `button` chip answers.
   */
  outline: `background:${V.btnBg};border-color:${V.btnBorder};color:${V.textPrimary};`,
  className: "gufe-chip",
} as const;

/** A note under something, explaining or qualifying it. */
export const NOTE = `font-size:${FONT.small};line-height:1.6;color:${V.textMuted2};`;
