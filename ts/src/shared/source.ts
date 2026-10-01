/**
 * Where the payload on screen came from: the name of the file it was generated
 * from.
 *
 * A page written by `alchemy-viz <input>` draws a payload that also exists as a
 * file on somebody's disk, and "which file is this?" is a question the payload
 * cannot answer on its own - two exports of the same network are the same
 * payload under two names, and a network whose own name is
 * "solvated ligand transformations" says nothing about which of six such
 * campaigns it is. The browser tab has carried the file name for a while; a
 * header that carries it too survives the two things that lose a tab title,
 * which are screenshotting the visualization and opening enough of them that
 * the strip is too narrow to read.
 *
 * It is provenance rather than a second name for the payload, which is why it
 * sits beside the title instead of replacing it - see `headerStrip`.
 *
 * Two forms, for the reason `debug.ts` has three:
 *
 *   `<alchemy-view source="tyk2.json">`  baked in: `to_html(obj, source=...)`
 *   `window.ALCHEMY_VIZ_SOURCE`          a host that mounts the element itself,
 *                                        such as a notebook widget or the dev
 *                                        dropzone: set it before `.payload`
 *
 * Deliberately not a payload field. The payload is the serialization of a gufe
 * object, and what a file on disk is called is not part of any gufe object.
 */

/**
 * The attribute `to_html` bakes in.
 *
 * `<alchemy-view>` hands it on to the view it mounts, so a view reads it from
 * its own element and nothing has to walk up the tree.
 */
export const SOURCE_ATTRIBUTE = "source";

/** The global a host that mounts the element itself can set instead. */
export const SOURCE_GLOBAL = "ALCHEMY_VIZ_SOURCE";

/**
 * The file `element`'s payload came from, or "" when nothing said.
 *
 * The attribute wins over the global: a page carrying one was written for a
 * particular file, and a host global is the weaker claim of the two.
 */
export function sourceName(element?: Element | null): string {
  const attribute = element?.getAttribute?.(SOURCE_ATTRIBUTE);
  if (attribute && attribute.trim()) return attribute.trim();
  const host = (globalThis as Record<string, unknown>)[SOURCE_GLOBAL];
  return typeof host === "string" ? host.trim() : "";
}
