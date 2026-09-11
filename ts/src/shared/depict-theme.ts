/**
 * Whether a 2D depiction is drawn for a dark ground, and what that costs RDKit.
 *
 * ## Why this is one decision and not two
 *
 * A depiction is ink on a ground, and the two are only legible together. RDKit
 * draws for paper: bonds black, element letters a palette picked against white,
 * atom indices black. Put that on a dark panel and there is nothing to see; put
 * the dark palette on a white one and there is nothing to see either. So the
 * ground a view paints and the palette it asks RDKit for come from here, from a
 * single switch, rather than from two places that can disagree.
 *
 * ## What the switch follows
 *
 * The page theme, like everything else in the interface. `theme.ts` reads the
 * host's colour-scheme preference once at load and never changes it, so a
 * depiction is drawn once, for the theme in force, and never has to be redrawn.
 *
 * `setDarkDepictions` exists for the two callers that need the answer to be
 * something other than the page's: the parity page, which puts our drawing
 * beside gufe's own white one and has to compare like with like, and the tests.
 * It is not a user setting. If it becomes one it belongs in `DepictStyle` with
 * the rest of the taste, not here.
 *
 * ## Two grounds, one switch
 *
 * A depiction sits on a panel in the single-molecule and mapping views and on a
 * node's plate in the two network views, and those are different colours. Both
 * come from here so that neither can be flipped without the other: a plate that
 * stayed on paper while its structures went dark would be a white square in the
 * middle of a dark graph, and one that went dark while they did not would be a
 * node with nothing drawn in it.
 */

import type { ElementColors } from "./depict-style.js";
import { DARK_ATOM_PALETTE, DARK_DRAW_OPTIONS, DARK_MONO_PALETTE, MAPPING_BW_PALETTE } from "./atom-colors.js";
import { isDark, THEMES } from "./theme.js";

/**
 * The override, when there is one. Null means "follow the page".
 *
 * Asked each time rather than captured at load, so that a depiction drawn after
 * `setTheme` is drawn for the theme now in force rather than the one this module
 * happened to be imported under.
 */
let forced: boolean | null = null;

/** Whether depictions are currently drawn for a dark ground. */
export function darkDepictions(): boolean {
  return forced ?? isDark();
}

/** Override the switch. See the note above: dev pages and tests, nothing else. */
export function setDarkDepictions(on: boolean): void {
  forced = on;
}

/**
 * The surface a full-panel depiction is drawn on.
 *
 * Read off the switch rather than off `T`, so that forcing the switch moves the
 * ground with it. A caller told to draw for paper has to be given paper to draw
 * it on whatever the page theme is, and the other way round.
 */
export function depictGround(): string {
  return THEMES[darkDepictions() ? "dark" : "light"].canvas2DBg;
}

/**
 * The plate a network node's structure sits on, and the ink for the name under
 * it. The plate is the graph canvas's own colour, so what it really does is
 * cover the styled disc and whatever edge passes beneath.
 */
export function nodeCardGround(): string {
  return THEMES[darkDepictions() ? "dark" : "light"].netDepictBg;
}

export function nodeCardCaption(): string {
  return THEMES[darkDepictions() ? "dark" : "light"].netDepictCaption;
}

/**
 * The RDKit draw options that put the ink where the ground can carry it.
 *
 * `mono` is gufe's palette: one ink for every element, so the mapping highlight
 * colours are the only colour on the page. `cpk` leaves the element colouring to
 * RDKit. Both have a dark form and the light form is what this project has
 * always drawn, which is why light `cpk` is empty rather than explicit.
 */
export function depictThemeOptions(elementColors: ElementColors): Record<string, unknown> {
  if (!darkDepictions()) return elementColors === "mono" ? { atomColourPalette: MAPPING_BW_PALETTE } : {};
  return {
    ...DARK_DRAW_OPTIONS,
    atomColourPalette: elementColors === "mono" ? DARK_MONO_PALETTE : DARK_ATOM_PALETTE,
  };
}
