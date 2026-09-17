/**
 * The pieces a view is assembled from: a card, a header strip, a labelled row, a
 * chip, a message, a viewer host.
 *
 * These display rather than accept input - that is
 * `controls.ts` - and they are deliberately small and unopinionated about
 * arrangement, which is `chrome.ts`. Every one of them takes its styling from
 * `style.ts`, so a view that writes its own padding here is a bug.
 */

import { el, esc } from "./dom.js";
import { CARD, FONT, HEADER, HEADER_LINE, RADIUS, SPACE, TEXT, WEIGHT } from "./style.js";
import { V } from "./theme.js";

/** "label <b>value</b>" with an optional colour dot - the stats readouts. */
export function statChip(label: string, value: string, dotColor?: string): HTMLSpanElement {
  const chip = el("span", `display:inline-flex;align-items:center;gap:5px;white-space:nowrap;`);
  if (dotColor) {
    chip.appendChild(
      el("span", `width:8px;height:8px;border-radius:50%;background:${dotColor};display:inline-block;`),
    );
  }
  const txt = el("span");
  txt.innerHTML = `${esc(label)} <b style="color:${TEXT.primary};">${esc(value)}</b>`;
  chip.appendChild(txt);
  return chip;
}

/** A floating banner pinned to the top of a positioned host. */
export function floatingWarning(host: HTMLElement, message: string): HTMLDivElement {
  const warn = el("div", "", `⚠ ${message}`);
  warn.style.cssText =
    `position:absolute;top:${SPACE.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;` +
    `padding:${SPACE.md} ${SPACE.xxl};border-radius:${RADIUS.md};font-size:${FONT.body};` +
    `background:${V.warnBg};color:${V.warnFg};border:1px solid ${V.warnBorder};`;
  host.appendChild(warn);
  return warn;
}

/** A centred message filling its container - the placeholder / error state. */
export function centredMessage(text: string, isError = false): HTMLDivElement {
  return el(
    "div",
    "flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;" +
      `font-size:${FONT.heading};color:${isError ? TEXT.error : TEXT.faint};`,
    text,
  );
}

export interface HeaderStrip extends HTMLDivElement {
  titleEl: HTMLSpanElement;
  statsEl: HTMLDivElement;
  /**
   * Where `chromeMenu` puts its button: first in the strip, so the control sits
   * at the top left in every view that has one. Empty, and taking no room, until
   * a view asks for a menu.
   */
  toggleEl: HTMLDivElement;
  /**
   * Title and stats together, so the pair share a baseline while the strip
   * itself centres them against the menu button.
   */
  textEl: HTMLDivElement;
}

/**
 * The standard header strip: a menu slot, a bold title, right-aligned stats.
 *
 * Deliberately no subtitle. What a payload is belongs in the payload's own name;
 * what type it is, the view already is - a gufe class name beside the title
 * reads as "Ligand network LigandNetwork", which says one thing in two fonts.
 */
export function headerStrip(title: string): HeaderStrip {
  const bar = el("div", HEADER) as HeaderStrip;
  bar.className = "gufe-header";
  bar.titleEl = el(
    "span",
    `font-weight:${WEIGHT.bold};font-size:${FONT.title};color:${TEXT.title};letter-spacing:.02em;`,
    title,
  );
  bar.statsEl = el(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${FONT.small};color:${TEXT.muted};`,
  );
  // The text sits in a row of its own so the two alignments do not fight: the
  // stats keep the title's baseline in here, and the strip aligns this whole
  // row's first line with the menu button beside it.
  bar.textEl = el("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;");
  // A slot one line tall, so the button is centred against the title rather
  // than against however many lines the stats have wrapped onto below it.
  bar.toggleEl = el("div", `display:flex;align-items:center;height:${HEADER_LINE};flex-shrink:0;`);
  // First, so the menu button is at the top left wherever a view carries one.
  bar.appendChild(bar.toggleEl);
  bar.textEl.appendChild(bar.titleEl);
  bar.textEl.appendChild(bar.statsEl);
  bar.appendChild(bar.textEl);
  return bar;
}

/**
 * One "label: value" line, which is what the card-shaped views are built from.
 * The label column is fixed so a stack of these lines up without a table, and
 * the value is selectable because half of what such a card is for is copying a
 * SMILES out of it.
 */
export function fieldRow(label: string, value: string, mono = false): HTMLDivElement {
  const row = el("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  row.appendChild(
    el(
      "span",
      `flex:0 0 128px;font-size:${FONT.tiny};font-weight:${WEIGHT.bold};letter-spacing:.08em;` +
        `text-transform:uppercase;color:${TEXT.faint};`,
      label,
    ),
  );
  const shown = el(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${TEXT.primary};` +
      (mono ? `font-family:${FONT.mono};font-size:${FONT.small};` : `font-size:${FONT.body};`),
    value,
  );
  shown.title = value;
  row.appendChild(shown);
  return row;
}

/** A small pill naming a payload's type - used wherever a view lists others. */
export function typeBadge(text: string): HTMLSpanElement {
  return el(
    "span",
    `padding:1px 7px;border-radius:${RADIUS.xl};font-size:${FONT.tiny};font-weight:${WEIGHT.bold};` +
      `letter-spacing:.04em;white-space:nowrap;background:${V.badgeBg};color:${V.badgeFg};`,
    text,
  );
}

/** A bordered card: the standard container for anything that is not a viewer. */
export function card(): HTMLDivElement {
  return el("div", CARD);
}

/** A 3D viewer host: an absolutely-filled container inside a flexible box. */
export function viewerHost(): { wrap: HTMLDivElement; container: HTMLDivElement } {
  const wrap = el("div", "flex:1;position:relative;min-height:0;min-width:0;");
  const container = el("div", "position:absolute;inset:0;");
  // Named so it can be found from outside: it is what the engine renders into
  // and what the wheel guard is attached to, and neither is reachable by
  // dispatching at an ancestor.
  container.dataset.gufeViewer = "";
  wrap.appendChild(container);
  return { wrap, container };
}

// --- names a view draws on its own picture ---------------------------------

/**
 * The attribute that tells a view not to name what it is drawing.
 *
 * A molecule view writes the molecule's name over its picture, which is what
 * you want when the view is the whole of what is on screen. Mounted inside
 * something that has already named it - a chemical system, where the selector
 * above the drawing says both the label and the name - it is the same word
 * twice, and the second one is over the picture.
 *
 * Set on any ancestor rather than passed as a payload field: the payloads are
 * the schema's and have no room for how a view should look, and a pane that
 * names its own contents means every view *inside* it, however deeply the
 * dispatcher nests them. It works on the element itself too, so a page that
 * mounts `<gufe-small-molecule data-gufe-hide-name>` gets the same.
 */
export const HIDE_NAME_ATTRIBUTE = "data-gufe-hide-name";

/** Whether a view should draw the name of what it is showing. */
export function nameWanted(host: Element): boolean {
  return !host.closest(`[${HIDE_NAME_ATTRIBUTE}]`);
}

// --- panes that answer to their own width ----------------------------------
