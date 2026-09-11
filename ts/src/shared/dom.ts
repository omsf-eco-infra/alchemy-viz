/**
 * The DOM vocabulary: make an element, escape a string, describe a failure.
 *
 * No framework, no virtual DOM: elements are created once and mutated in place,
 * which is what keeps the create/update/destroy lifecycle honest.
 *
 * `controls.ts`, `panels.ts` and `chrome.ts` are built out of this, and nothing
 * here knows what a view looks like: this is the vocabulary, they are the
 * sentences.
 */

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

/**
 * `s` as HTML text, safe in an attribute as well as in a body.
 *
 * The quotes are escaped, which they were not. Every call site today
 * interpolates into a body, where they do not matter - but the call sites are
 * lines of `innerHTML` with a `style="..."` in them a few characters away, so
 * the distance between "correct" and "a payload name closes an attribute" is one
 * edit nobody would think twice about. Escaping four characters instead of three
 * costs nothing and removes the question.
 */
export function esc(s: unknown): string {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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

/**
 * What a field shows when it has no value: an unnamed molecule, a mapping with
 * no score, an atom that maps to nothing.
 *
 * Named for the job rather than for the character, so that changing the
 * character is one edit and reading a call site tells you what it means. A bare
 * `"-"` in `name || "-"` reads like a separator or a typo.
 */
export const NO_VALUE = "-";

/**
 * `text` cut to `max` characters, with the last one spent on an ellipsis.
 *
 * Both network views had this, identically, for the captions they draw into a
 * node: a caption is drawn to a fixed box and a ligand called
 * "lig_ejm_31_to_lig_ejm_42" has to become something rather than overflow it.
 * The full text belongs in a `title` or in the menu row, which is what both
 * callers do.
 */
export const truncate = (text: string, max: number): string =>
  text.length > max ? `${text.slice(0, max - 1)}...` : text;

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

/**
 * How narrow a pane has to be before a column beside a picture becomes a band
 * above it.
 *
 * One number for the three places that ask - the chemical system's component
 * strip, the transformation's diff, and the controls panel of a 3D scene -
 * because they are all answering the same question about the same kind of pane,
 * and three copies of it would drift into three different ideas of "narrow" in
 * views a reader clicks between.
 *
 * What it is measured against is `MENU_PANEL_WIDTH`: below the panel's own floor
 * plus a picture, a column opened beside the picture leaves nothing to open it
 * against. Stacked, the two share the height instead.
 */
export const STACK_BELOW = 460;

/**
 * Call `arrange` when `host` becomes narrow, and again when it stops being.
 *
 * The latch is the point. All three callers watch a width, compare it against
 * one threshold, and then rewrite half a dozen styles - and all three have to
 * not do that on every observed pixel, because on the far side of two of them is
 * a 3D viewer that resizes its canvas. Each had its own `let stacked` and its
 * own early return.
 *
 * A host that lays nothing out measures 0 and counts as wide, which is the
 * arrangement every desktop reader sees. The first call is synchronous, so a
 * caller needs no separate set-up pass.
 */
export function onNarrow(
  host: HTMLElement,
  arrange: (narrow: boolean) => void,
  below: number = STACK_BELOW,
): () => void {
  let narrow: boolean | null = null;
  return onWidth(host, (width) => {
    const next = width > 0 && width < below;
    if (next === narrow) return;
    narrow = next;
    arrange(next);
  });
}
