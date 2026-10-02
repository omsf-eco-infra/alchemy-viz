/**
 * The bundle entry point.
 *
 * Importing this registers every `<gufe-*>` custom element. Each gufe/schema
 * type has a corresponding `<gufe-*>` element. Consumed by `to_html`.
 *
 * The whole of the browser-facing part is two lines in the host:
 *
 *     document.querySelector("alchemy-view").payload = payload;
 *
 * `python/alchemy_viz/html.py` and `notebook.py` both call this.
 */

import "./alchemy-view.js";
import "./views/small-molecule.js";
import "./views/protein.js";
import "./views/ligand-network.js";
import "./views/alchemical-network.js";
import "./views/atom-mapping.js";
import "./views/chemical-system.js";
import "./views/complex.js";
import "./views/protocol.js";
import "./views/solvent.js";
import "./views/transformation.js";
import "./views/unknown-component.js";

import { resetSettings, settings } from "./shared/settings.js";
import { installTheme } from "./shared/theme.js";

/**
 * The palette, as soon as the bundle is evaluated.
 *
 * `AlchemyElement.connectedCallback` installs it too, which covers a host that
 * builds an element without going through this file. This call is for everything
 * *around* the elements: the dev pages build their own chrome out of `V` and may
 * draw it before any `<gufe-*>` has connected - a dropzone with nothing dropped
 * on it yet is the whole page - and a `var()` with nothing behind it is not a
 * colour. Guarded for a document that does not exist, and idempotent by id.
 */
installTheme();

/** The dispatch table, for a caller asking the bundle what it can draw. */
export { VIEW_TAGS } from "./alchemy-view.js";

/** Every `type` the schema declares, drawn or not. */
export { PAYLOAD_TYPES } from "./schema/validate.js";

/**
 * The payload shapes, for a TypeScript caller. Not internals: `types.ts` is
 * generated from the schema both languages are downstream of, so a rename
 * here is a breaking change already. On the main entry rather than a subpath
 * so the import a consumer already has is where the types are; `export type`
 * erases at build time, so the bundle is unchanged.
 */
export type * from "./schema/types.js";

/**
 * The settings a view has remembered, on the console.
 *
 * `window.alchemyViz.settings()` answers "what state was this actually in" without
 * a hunt through a storage inspector, and `reset()` puts every view back to how
 * a new reader would find it. Attached the same way the debug switch is: a
 * global, because the thing you need it for is a page you are already looking
 * at and cannot rebuild.
 */
declare global {
  // eslint-disable-next-line no-var
  var alchemyViz: { settings: typeof settings; reset: typeof resetSettings } | undefined;
}

if (typeof globalThis !== "undefined") {
  globalThis.alchemyViz = { settings, reset: resetSettings };
}
