/**
 * How a view is arranged: watching its width, dividing it, and the menu.
 *
 * These are the three things that answer "a view is as
 * wide as whoever mounted it made it, and it does not know who that was": a
 * width watcher, because there is no window to ask; a splitter, because two
 * panes side by side in a phone-shaped box are two panes too narrow to read; and
 * a collapsible menu, because the controls a network needs do not fit on a
 * toolbar.
 */

import { button } from "./controls.js";
import { el } from "./dom.js";
import type { HeaderStrip } from "./panels.js";
import type { Setting } from "./settings.js";
import { MENU_PANEL_STACKED_SHARE, MENU_PANEL_WIDTH, MENU_VAR, SPACE } from "./style.js";
import { V } from "./theme.js";

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
    `flex:0 0 ${SPLITTER_WIDTH}px;align-self:stretch;touch-action:none;background:${V.splitBorder};`,
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
  /**
   * Appended below whatever `build` returned, on the same first open.
   *
   * This is how the share button gets into every menu without this file knowing
   * that framejs exists. Calling `framejsMenuItem` directly would make the
   * generic DOM vocabulary depend on a feature that uploads to a third party,
   * and - because `framejs.ts` needs `el` from here - would close an import
   * cycle: two modules each holding a value the other evaluates, which is a
   * load-time crash the moment either touches an import at module scope.
   *
   * Every view that carries a menu passes `extras: framejsMenuItem`. Three call
   * sites rather than one, which is the price of the arrow pointing the right
   * way; `grep framejsMenuItem` is still the whole of removing it.
   */
  extras?(panel: HTMLElement): void;
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
    icon.appendChild(el("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${V.btnFg};`));
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
  const toggle = button(`display:inline-flex;align-items:center;gap:${SPACE.md};padding:${SPACE.sm} ${SPACE.lg};`);
  toggle.appendChild(MENU_ICON());
  toggle.setAttribute("aria-label", options.label || "Toggle menu");

  const apply = (): void => {
    // Build once, on the first open, and never again. `replaceChildren` is
    // deliberately not used afterwards: the contents are live DOM the view may
    // be holding references into.
    if (open && !built) {
      built = true;
      panel.appendChild(build());
      // Last in every menu, after whatever the view put there. What this is in
      // practice is the share button; see `ChromeMenuOptions.extras` for why it
      // arrives as a callback rather than as an import.
      options.extras?.(panel);
    }
    panel.style.display = open ? "flex" : "none";
    // The stylesheet paints the open state from this, so saying it is the whole
    // of saying it. See `BUTTON`.
    toggle.setAttribute("aria-expanded", String(open));
  };

  const setOpen = (next: boolean): void => {
    if (next === open) return;
    open = next;
    apply();
    options.remember?.set(open);
    options.onToggle?.(open);
  };

  toggle.onclick = () => setOpen(!open);

  const strip = "toggleEl" in into ? into : null;
  // Only now does the slot take any room: an empty one must not indent the title.
  if (strip) strip.toggleEl.style.marginRight = "2px";
  (strip ? strip.toggleEl : into).appendChild(toggle);
  apply();

  return {
    panel,
    isOpen: () => open,
    setOpen,
  };
}
