/**
 * The small DOM vocabulary every view is built from. No framework, no virtual
 * DOM: these elements are created once and mutated in place, which is what
 * keeps the create/update/destroy lifecycle honest.
 */

import {
  BUTTON,
  CARD,
  FONT,
  HEADER,
  MENU_PANEL_STACKED_SHARE,
  MENU_PANEL_WIDTH,
  MENU_VAR,
  RADIUS,
  SELECT,
  SPACE,
  TEXT,
  WEIGHT,
} from "./style.js";
import type { Setting } from "./settings.js";
import { framejsMenuItem } from "./framejs.js";
import { T } from "./theme.js";

export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  css?: string,
  text?: string | null,
): HTMLElementTagNameMap[K] {
  const n = document.createElement(tag);
  if (css) n.style.cssText = css;
  if (text != null) n.textContent = text;
  return n;
}

export function esc(s: unknown): string {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Describe a thrown value.
 *
 * The engines do not always reject with an `Error` - 3Dmol hands back a bare
 * object when WebGL is unavailable, which otherwise turns every such failure
 * into the message "undefined".
 */
export function errText(e: unknown): string {
  if (e == null) return "unknown error";
  const message = (e as { message?: unknown }).message;
  if (typeof message === "string" && message) return message;
  const text = String(e);
  return text === "[object Object]" ? (e as { name?: string }).name || "unknown error" : text;
}

export const fmt = (n: number): string => n.toLocaleString("en-US");
export const EM_DASH = "-";

/**
 * Kept as the names the views already use, defined once in `style.ts`.
 * Restyle a button or a dropdown there, not here and not in a view.
 */
export const BTN_CSS = BUTTON.base;
export const SELECT_CSS = SELECT;

export interface ButtonGroupItem {
  id: string;
  label: string;
  title?: string;
}

export interface ButtonGroup extends HTMLDivElement {
  setActive(id: string): void;
}

/**
 * A row of mutually-exclusive buttons. `onPick(id)` fires on click; the active
 * button is highlighted. The returned element carries `.setActive(id)` so a
 * caller can drive it from elsewhere.
 *
 * Hand it a `Setting` and the choice both starts from what was stored and is
 * written back on every click, so a view gets remembering for free rather than
 * doing it by hand and doing it slightly differently each time.
 */
export function buttonGroup(
  items: readonly ButtonGroupItem[],
  active: string,
  onPick: (id: string) => void,
  remember?: Setting<string>,
): ButtonGroup {
  if (remember) {
    const stored = remember.get();
    // A stored value naming a button that no longer exists is a stale
    // preference, not a reason to render a group with nothing selected.
    if (items.some((item) => item.id === stored)) active = stored;
  }
  // Wrapping, because the width a group is given is not its to choose: the same
  // four representations sit in a wide toolbar in one view and in a menu column
  // in another, and a row that cannot wrap puts its last button off the edge.
  const group = el("div", "display:flex;flex-wrap:wrap;gap:4px;min-width:0;") as ButtonGroup;
  const buttons = items.map((item) => {
    const btn = el("button", BTN_CSS, item.label);
    btn.title = item.title || item.label;
    btn.onmouseover = () => {
      btn.style.background = BUTTON.bgHover;
    };
    btn.onmouseout = () => {
      btn.style.background = active === item.id ? BUTTON.bgActive : BUTTON.bg;
    };
    btn.onclick = () => {
      group.setActive(item.id);
      remember?.set(item.id);
      onPick(item.id);
    };
    group.appendChild(btn);
    return { id: item.id, btn };
  });
  group.setActive = (id: string) => {
    active = id;
    buttons.forEach((b) => {
      b.btn.style.background = b.id === active ? BUTTON.bgActive : BUTTON.bg;
    });
  };
  group.setActive(active);
  return group;
}

export interface Switcher extends HTMLDivElement {
  /** The row of buttons, for a view with a control of its own to put among them. */
  buttons: ButtonGroup;
  setActive(id: string): void;
  /**
   * Choose the form: the buttons when `compact` is false, the dropdown when it
   * is. Idempotent, so a caller can hand it the same answer twice.
   */
  setCompact(compact: boolean): void;
  /** Stop watching the pane. Nothing to do unless `fit` was asked for. */
  cleanup(): void;
}

/** What a floating bar leaves clear at each side of its pane. See `OVERLAY_CONTROLS`. */
const BAR_MARGIN = parseFloat(SPACE.xl) * 2;

export interface SwitcherOptions {
  remember?: Setting<string>;
  /** Fired when the form changes, for a view that has to move a control of its own. */
  onLayout?(compact: boolean): void;
  /**
   * Collapse on a pane too narrow for the buttons, and grow back when it is not:
   * `pane` is what the bar floats over and `bar` the strip the switcher sits in,
   * which is measured whole because a view may put other controls on it.
   */
  fit?: { pane: HTMLElement; bar: HTMLElement };
}

/**
 * The same choice, drawn as a row of buttons or as a dropdown.
 *
 * A row of buttons is the better control - every option is visible and one
 * click away - right up to the point where the row is wider than what holds it,
 * and then it is the worse one, because the options past the edge cannot be
 * reached at all. Over a picture, where the bar floats rather than pushing the
 * layout around, nothing stops that: the pane clips it, and a narrow pane is an
 * ordinary thing - a card in a column, a stacked layout, a small window.
 *
 * So the row collapses. Below the width it needs, the buttons give way to a
 * dropdown of the same options, which asks for one line whatever the labels
 * say. What the bar wants is measured while it is a row, because a floating bar
 * is never squeezed and so its width is the width it is asking for; that
 * measurement is kept, so the buttons come back at exactly the width that lost
 * them.
 *
 * Both forms share one selection and one `Setting`, so which of them is on
 * screen never changes what is chosen or what a reload restores.
 */
export function switcher(
  items: readonly ButtonGroupItem[],
  active: string,
  onPick: (id: string) => void,
  options: SwitcherOptions = {},
): Switcher {
  const { remember } = options;
  if (remember) {
    // Resolved here rather than in each half, so the buttons and the dropdown
    // cannot start on different options. A stored value naming an option that
    // no longer exists is a stale preference, not a reason to open on nothing.
    const stored = remember.get();
    if (items.some((item) => item.id === stored)) active = stored;
  }

  const wrap = el("div", "display:flex;min-width:0;") as Switcher;
  const pick = (id: string) => {
    wrap.setActive(id);
    remember?.set(id);
    onPick(id);
  };
  const group = buttonGroup(items, active, pick);
  const select = dropdown(items, active, pick);
  select.style.display = "none";
  wrap.appendChild(group);
  wrap.appendChild(select);
  wrap.buttons = group;

  wrap.setActive = (id: string) => {
    active = id;
    group.setActive(id);
    select.value = id;
  };

  let compact = false;
  wrap.setCompact = (next: boolean) => {
    if (next === compact) return;
    compact = next;
    group.style.display = compact ? "none" : "flex";
    select.style.display = compact ? "" : "none";
    options.onLayout?.(compact);
  };

  let stopWatching = () => {};
  if (options.fit) {
    const { pane, bar } = options.fit;
    let wanted = 0;
    stopWatching = onWidth(pane, (width) => {
      if (!compact) wanted = bar.offsetWidth || wanted;
      // An element not yet laid out measures zero, and a zero threshold would
      // collapse a bar that fits perfectly well. Wait for a real measurement.
      if (!wanted) return;
      wrap.setCompact(wanted > width - BAR_MARGIN);
    });
  }
  wrap.cleanup = () => stopWatching();
  return wrap;
}

export interface DropdownItem {
  id: string;
  label: string;
}

/**
 * A dropdown, with the same remembering as `buttonGroup`.
 *
 * Views built these by hand, four times, each slightly different. One helper
 * means one place to restyle them and one place that knows how a choice is
 * stored.
 */
export function dropdown(
  items: readonly DropdownItem[],
  active: string,
  onPick: (id: string) => void,
  remember?: Setting<string>,
): HTMLSelectElement {
  const select = el("select", SELECT_CSS);
  for (const item of items) {
    const option = el("option", "", item.label);
    option.value = item.id;
    select.appendChild(option);
  }

  let initial = active;
  if (remember) {
    const stored = remember.get();
    if (items.some((item) => item.id === stored)) initial = stored;
  }
  select.value = initial;

  select.onchange = () => {
    remember?.set(select.value);
    onPick(select.value);
  };
  return select;
}

/**
 * An on/off button that shows its state, and remembers it if asked.
 *
 * The views had four of these written out longhand - spin, waters, hetero,
 * lines - each repeating the same three lines of background juggling.
 */
export function toggleButton(
  label: string,
  initial: boolean,
  onChange: (on: boolean) => void,
  options: { title?: string; remember?: Setting<boolean> } = {},
): HTMLButtonElement {
  let on = options.remember ? options.remember.get() : initial;
  const button = el("button", BTN_CSS, label);
  button.title = options.title || label;
  button.setAttribute("aria-pressed", String(on));

  const paint = () => {
    button.style.background = on ? BUTTON.bgActive : BUTTON.bg;
    button.setAttribute("aria-pressed", String(on));
  };
  button.onclick = () => {
    on = !on;
    paint();
    options.remember?.set(on);
    onChange(on);
  };
  paint();
  return button;
}

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

export function warnBanner(message: string): HTMLDivElement {
  return el(
    "div",
    `margin:12px 16px;padding:${SPACE.lg} 12px;border-radius:${RADIUS.md};font-size:${FONT.body};` +
      `white-space:pre-wrap;background:${T.warnBg};color:${T.warnFg};border:1px solid ${T.warnBorder};`,
    `⚠ ${message}`,
  );
}

/** A floating banner pinned to the top of a positioned host. */
export function floatingWarning(host: HTMLElement, message: string): HTMLDivElement {
  const warn = el("div", "", `⚠ ${message}`);
  warn.style.cssText =
    `position:absolute;top:${SPACE.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;` +
    `padding:${SPACE.md} ${SPACE.xxl};border-radius:${RADIUS.md};font-size:${FONT.body};` +
    `background:${T.warnBg};color:${T.warnFg};border:1px solid ${T.warnBorder};`;
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
 * Deliberately no subtitle. It used to carry the gufe class name beside the
 * title, which said the same thing twice in two fonts - "Ligand network
 * LigandNetwork" - and told a reader nothing the title had not. What a payload
 * is belongs in the payload's own name; what type it is, the view already is.
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
  // stats keep the title's baseline in here, and the strip centres this whole
  // row against the menu button, which is taller than a line of title text.
  bar.textEl = el("div", "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;flex:1;min-width:0;");
  bar.toggleEl = el("div", "display:flex;align-items:center;flex-shrink:0;");
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
      `letter-spacing:.04em;white-space:nowrap;background:${T.badgeBg};color:${T.badgeFg};`,
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

/**
 * Call `apply` with `host`'s width now, and again whenever it changes.
 *
 * A view has no window to ask about: it is as wide as whoever mounted it made
 * it, and the same view is a full page in one place and a 300px detail pane in
 * another. So a layout that depends on width has to watch the element, and this
 * is the one place that plumbing lives.
 *
 * The first call is synchronous and reports `clientWidth`, which is 0 in a host
 * that does no layout at all - jsdom, or an element not yet in the document.
 * Callers treat 0 as "no measurement", not as "narrow".
 *
 * `ResizeObserver` is optional the same way it is in `element.ts`: where it is
 * missing the layout is whatever the first call chose, which is a fixed layout
 * rather than a broken one. The returned function stops watching.
 */
export function onWidth(host: HTMLElement, apply: (width: number) => void): () => void {
  apply(host.clientWidth);
  if (typeof ResizeObserver === "undefined") return () => {};
  const observer = new ResizeObserver(() => apply(host.clientWidth));
  observer.observe(host);
  return () => observer.disconnect();
}

/** How a `splitter` may be dragged, as fractions of the row it divides. */
export interface SplitterOptions {
  /** The narrowest the first pane may become. */
  min?: number;
  /** The widest. The second pane gets the rest, and has the same floor. */
  max?: number;
  /**
   * Remember where the divider was left. A reader who widened the detail pane
   * to read a diff should not have to widen it again on the next payload.
   */
  remember?: Setting<number>;
  /**
   * Fired when a drag finishes, so a view that drew itself to a size can draw
   * itself again. Deliberately not fired per pointer move: on the far side of
   * this is a force layout, and re-running one per pixel is what melts a tab.
   *
   * Also fired when the row flips between side by side and stacked, which is
   * the same event as far as a pane that drew itself to a size is concerned.
   */
  onResize?(fraction: number): void;
  /**
   * Fired with how the row is now divided, including once as it is set up.
   *
   * Only for panes that have to look different in the two arrangements - the
   * chrome menu, which is a column beside the panes and a band above them. The
   * two panes themselves need nothing: one fraction along whichever axis flex
   * is running divides a row and a column equally well.
   */
  onOrient?(stacked: boolean): void;
}

const SPLITTER_LIMITS = { min: 0.2, max: 0.8 };
/** Wide enough to grab, narrow enough to read as a rule rather than a gutter. */
const SPLITTER_WIDTH = 5;

/**
 * Turn the rule between two panes of a row into something draggable.
 *
 * Replaces the 1px divider the split views drew for themselves. Both panes are
 * driven from one fraction rather than one being sized and the other left to
 * fill, so what the divider is showing is always what the panes are doing, and
 * a remembered position restores as the same picture at any window size.
 *
 * Which way it divides is the row's own shape rather than a choice a view
 * makes. A phone held upright is twice as tall as it is wide, and two panes
 * side by side in it are two columns too narrow to hold anything: a graph in
 * one and a molecule in the other, neither readable. So a box taller than it is
 * wide stacks instead, and the divider becomes a rule between a picture and
 * what is open below it. It flips back the moment there is width for it.
 *
 * Returns the handle to place between the two panes.
 */
export function splitter(
  row: HTMLElement,
  before: HTMLElement,
  after: HTMLElement,
  options: SplitterOptions = {},
): HTMLDivElement {
  const min = options.min ?? SPLITTER_LIMITS.min;
  const max = options.max ?? SPLITTER_LIMITS.max;

  // The one style serves both arrangements: `flex-basis` is along whichever
  // axis the row is running, and `align-self:stretch` is across it.
  const handle = el(
    "div",
    `flex:0 0 ${SPLITTER_WIDTH}px;align-self:stretch;touch-action:none;background:${T.splitBorder};`,
  );
  handle.setAttribute("role", "separator");
  handle.setAttribute("aria-label", "Resize the panes");

  /** Whether the panes are one above the other rather than side by side. */
  let stacked = false;
  const orient = (next: boolean): void => {
    stacked = next;
    row.style.flexDirection = stacked ? "column" : "row";
    handle.style.cursor = stacked ? "row-resize" : "col-resize";
    // A separator's orientation is the bar's own, which is across the axis it
    // is dragged along.
    handle.setAttribute("aria-orientation", stacked ? "horizontal" : "vertical");
    options.onOrient?.(stacked);
  };

  /**
   * Which arrangement the row's current shape calls for.
   *
   * Portrait stacks, landscape divides. A host that lays nothing out - jsdom,
   * an element not yet in the document - measures 0 by 0 and gets the
   * side-by-side default, which is the arrangement every desktop reader sees.
   */
  const wanted = (): boolean => {
    const box = row.getBoundingClientRect();
    return box.height > box.width;
  };

  let fraction = Math.min(max, Math.max(min, options.remember?.get() ?? 0.5));
  const place = (): void => {
    before.style.flex = `1 1 ${(fraction * 100).toFixed(2)}%`;
    after.style.flex = `1 1 ${((1 - fraction) * 100).toFixed(2)}%`;
  };
  place();
  orient(wanted());

  // A flip is a resize of both panes, so whoever drew one to a size is told,
  // exactly as it is told about a drag. `ResizeObserver` is optional the same
  // way it is in `onWidth`: without it the row keeps the arrangement it opened
  // in, which is a fixed layout rather than a broken one.
  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver(() => {
      const next = wanted();
      if (next === stacked) return;
      orient(next);
      options.onResize?.(fraction);
    });
    observer.observe(row);
  }

  let dragging = false;
  handle.addEventListener("pointerdown", (event: PointerEvent) => {
    dragging = true;
    handle.setPointerCapture(event.pointerId);
    event.preventDefault();
  });
  handle.addEventListener("pointermove", (event: PointerEvent) => {
    if (!dragging) return;
    const box = row.getBoundingClientRect();
    const along = stacked ? box.height : box.width;
    if (along <= 0) return;
    const at = stacked ? event.clientY - box.top : event.clientX - box.left;
    fraction = Math.min(max, Math.max(min, at / along));
    place();
  });
  const finish = (event: PointerEvent): void => {
    if (!dragging) return;
    dragging = false;
    handle.releasePointerCapture(event.pointerId);
    options.remember?.set(fraction);
    options.onResize?.(fraction);
  };
  handle.addEventListener("pointerup", finish);
  handle.addEventListener("pointercancel", finish);

  return handle;
}

/**
 * Put a chrome menu the way its row is now divided.
 *
 * What the menu holds is `MENU_PANEL`, which is written for the arrangement it
 * is in most of the time: a column of its own width, ruled off from the panes
 * beside it. Stacked, all of that is wrong - the width bounds are across the
 * row rather than along it, and the rule is on the wrong edge.
 *
 * Set through the custom properties `MENU_PANEL` reads rather than on the panel
 * itself, because the panel does not exist yet: a menu builds its contents on
 * the first open, and which way the row divides is settled before that. What
 * this takes is the wrapper `chromeMenu` hands back, which is there from the
 * start and which the panel inherits from whenever it arrives. The height cap
 * is the wrapper's own: it is the element in the row, so it is the one that
 * must not take half a phone screen for a search box.
 */
export function orientMenuPanel(wrap: HTMLElement, stacked: boolean): void {
  wrap.style.setProperty(MENU_VAR.min, stacked ? "0" : MENU_PANEL_WIDTH.min);
  wrap.style.setProperty(MENU_VAR.max, stacked ? "none" : MENU_PANEL_WIDTH.max);
  wrap.style.setProperty(MENU_VAR.ruleX, stacked ? "0" : "1px");
  wrap.style.setProperty(MENU_VAR.ruleY, stacked ? "1px" : "0");
  wrap.style.maxHeight = stacked ? MENU_PANEL_STACKED_SHARE : "";
}

// --- the chrome menu -------------------------------------------------------
//
// One hamburger per view: same style, same place, same behaviour, different
// contents. It exists as a helper rather than as a convention because a
// convention across nine view files drifts and a helper cannot.
//
// Two rules are enforced here rather than left to callers:
//
//   1. Toggling changes visibility, never structure. Rebuilding the view would
//      tear down its handle - which is a 3Dmol viewer and its camera, a force
//      layout's node positions, and the current selection - so opening a menu
//      would silently throw all three away.
//   2. Contents are built on first open, from a factory. A view whose menu
//      holds a list of several hundred ligands must not pay for it in a
//      collapsed cell nobody expands.

/**
 * The state every view's menu starts in.
 *
 * Named rather than written as a literal at each call site: this is the single
 * place a host-derived default would land if the toggle ever stops being purely
 * local, and today it is the whole cost of having deferred that.
 */
export const CHROME_OPEN_BY_DEFAULT = false;

/**
 * What a menu's remembered open state is keyed by, after the view's own name.
 *
 * Named so the convention can be checked rather than assumed. Whether a menu
 * was left open is not a preference about the view - it is where one reader had
 * got to - so anything copying a view somewhere else wants to leave it behind,
 * and needs a way to know which key that is.
 */
export const MENU_OPEN_SUFFIX = ".menuOpen";

export interface ChromeMenu {
  /** Put this where the menu's contents belong in the view's own layout. */
  panel: HTMLDivElement;
  isOpen(): boolean;
  setOpen(open: boolean): void;
}

export interface ChromeMenuOptions {
  /** Overrides `CHROME_OPEN_BY_DEFAULT`. */
  open?: boolean;
  /**
   * Remember whether it was open. Someone who opened the ligand list to work
   * through a network should not have to open it again on the next payload.
   *
   * The key must end in `MENU_OPEN_SUFFIX`. That is what lets somewhere else
   * tell this apart from a real preference: this one is about the chrome the
   * reader was working through, and it is personal to the sitting rather than
   * to the view.
   */
  remember?: Setting<boolean>;
  /** Fired after the panel's visibility changes. Views re-lay-out here. */
  onToggle?(open: boolean): void;
  /** Accessible name for the button. */
  label?: string;
}

/**
 * The OpenFE mark, from `docs.openfree.energy`'s own `OFE-color-icon.svg`.
 *
 * Inlined rather than fetched: it is under a kilobyte, and a page that has to
 * reach a documentation site to draw its own menu button is a page that shows a
 * broken image offline. The two brand colours are deliberately fixed and are not
 * theme values - a logo is the one thing on the page that should look the same
 * in both themes, and recolouring somebody's mark is not ours to do.
 */
function openFreeEnergyIcon(): HTMLSpanElement {
  const icon = el("span", "display:inline-flex;width:14px;height:14px;");
  icon.innerHTML =
    '<svg viewBox="0 0 748 743" width="14" height="14" aria-hidden="true" focusable="false">' +
    '<path fill="#8A2283" d="M267.99 102.211C119.99 102.211 0 222.191 0 370.211C0 452.061 36.71 525.321 ' +
    '94.54 574.491L327.37 108.831C308.27 104.501 288.4 102.211 267.99 102.211Z"/>' +
    '<path fill="#00BDAA" d="M515.66 267.67C528.75 299.25 535.99 333.89 535.99 370.21C535.99 512.26 ' +
    '425.47 628.47 285.73 637.6H702.44L380.64 0L63.6396 637.6H267.99V267.67H515.66Z"/>' +
    '<path fill="#8A2283" d="M516.81 267.67L702.08 638.2H267.99V742.06H747.62V267.66H516.81V267.67Z"/>' +
    "</svg>";
  return icon;
}

/**
 * Three bars, drawn rather than typed, so the glyph is not a Unicode dependency.
 *
 * Superseded by the mark above, kept for switching back - see `MENU_ICON`.
 */
function hamburgerIcon(): HTMLSpanElement {
  const icon = el("span", `display:inline-flex;flex-direction:column;gap:${SPACE.xs};justify-content:center;`);
  for (let i = 0; i < 3; i++) {
    icon.appendChild(el("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${T.btnFg};`));
  }
  return icon;
}

/**
 * The glyphs the menu button can show.
 *
 * Both are listed rather than one being commented out, so whichever is not in
 * use still typechecks - a commented-out alternative rots silently and is
 * discovered broken at the moment someone wants it.
 */
const MENU_ICONS = {
  /** The OpenFE mark, as `docs.openfree.energy` uses it. */
  openFreeEnergy: openFreeEnergyIcon,
  /** Three bars. What this was before. */
  hamburger: hamburgerIcon,
} as const;

/** Which one the button shows. Change this word to switch. */
const MENU_ICON: () => HTMLSpanElement = MENU_ICONS.openFreeEnergy;

/**
 * Attach a collapsible menu to `into`, and hand back the panel to place.
 *
 * Given a header strip the button goes into its own toggle slot, which is what
 * makes the control appear in the same position in every view carrying a header
 * without each view having to agree about it. Given any other element the
 * button goes straight into it, which is what a view with no header does: the
 * 3D panes float their chrome over the picture rather than spending a row of
 * height on a bar above it, and the button is part of what floats.
 */
export function chromeMenu(
  into: HeaderStrip | HTMLElement,
  build: () => Node,
  options: ChromeMenuOptions = {},
): ChromeMenu {
  let open = options.remember ? options.remember.get() : (options.open ?? CHROME_OPEN_BY_DEFAULT);
  let built = false;

  /**
   * The wrapper the caller places, and a flex column whether it is open or not.
   *
   * A column because what goes in it is one panel that has to be given the
   * wrapper's height rather than take its own: a menu holding a list of two
   * hundred systems is taller than any view, and a wrapper that let it be that
   * tall would put the buttons under the list past the bottom of the page with
   * no way to reach them. With the height handed down, `MENU_PANEL` scrolls and
   * `MENU_LIST` inside it is the part that gives.
   *
   * It matters that this is here rather than added by each caller: `apply`
   * writes `display` on open, so a `display:flex` set from outside is erased by
   * the first toggle and the panel silently goes back to running off the bottom.
   */
  const panel = el("div", "flex-shrink:0;display:flex;flex-direction:column;min-height:0;");
  const button = el("button", `${BUTTON.base}display:inline-flex;align-items:center;gap:${SPACE.md};padding:${SPACE.sm} ${SPACE.lg};`);
  button.appendChild(MENU_ICON());
  button.setAttribute("aria-label", options.label || "Toggle menu");

  const apply = (): void => {
    // Build once, on the first open, and never again. `replaceChildren` is
    // deliberately not used afterwards: the contents are live DOM the view may
    // be holding references into.
    if (open && !built) {
      built = true;
      panel.appendChild(build());
      // Developer-only, and a no-op unless the debug switch is on. Placed here
      // rather than in each menu's own factory so there is one call site to
      // delete when it goes. See `framejs.ts`.
      framejsMenuItem(panel);
    }
    panel.style.display = open ? "flex" : "none";
    button.style.background = open ? BUTTON.bgActive : BUTTON.bg;
    button.setAttribute("aria-expanded", String(open));
  };

  const setOpen = (next: boolean): void => {
    if (next === open) return;
    open = next;
    apply();
    options.remember?.set(open);
    options.onToggle?.(open);
  };

  button.onclick = () => setOpen(!open);
  button.onmouseover = () => {
    button.style.background = open ? BUTTON.bgActive : BUTTON.bgHover;
  };
  button.onmouseout = () => {
    button.style.background = open ? BUTTON.bgActive : BUTTON.bg;
  };

  const strip = "toggleEl" in into ? into : null;
  // Only now does the slot take any room: an empty one must not indent the title.
  if (strip) strip.toggleEl.style.marginRight = "2px";
  (strip ? strip.toggleEl : into).appendChild(button);
  apply();

  return {
    panel,
    isOpen: () => open,
    setOpen,
  };
}
