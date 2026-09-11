/**
 * The controls a reader operates: buttons, a switcher, a dropdown, a toggle.
 *
 * Split out of `dom.ts`. What they have in common, and the reason they are
 * together rather than one per view, is `Setting`: every one of them can be
 * handed a place to keep its choice, and then it both starts from what was
 * stored and writes back on every change. A view gets remembering for free
 * instead of doing it by hand and doing it slightly differently each time -
 * which is what four hand-written toggles in four views had already become.
 */

import { el, onWidth } from "./dom.js";
import type { Setting } from "./settings.js";
import { BUTTON, SELECT, SPACE } from "./style.js";

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
    const btn = el("button", BUTTON.base, item.label);
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
  const select = el("select", SELECT);
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
  const button = el("button", BUTTON.base, label);
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
