/**
 * The DOM vocabulary: make an element, escape a string, describe a failure.
 *
 * No framework, no virtual DOM: elements are created once and mutated in place,
 * which is what keeps the create/update/destroy lifecycle honest.
 *
 * This file used to be all of `dom.ts`, 880 lines of it, holding four unrelated
 * things at once: this vocabulary, the controls a reader operates, the pieces a
 * view is assembled from, and the machinery that arranges them. They are now
 * `controls.ts`, `panels.ts` and `chrome.ts`, and this is what all three are
 * built out of. Nothing here knows what a view looks like.
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
