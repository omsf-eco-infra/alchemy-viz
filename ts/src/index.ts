/**
 * The bundle entry point.
 *
 * Importing this registers every `<gufe-*>` custom element. Each gufe/schema
 * type has a corresponding `<gufe-*>` element. This is what `to_html` inlines
 * and what the notebook widget loads.
 *
 * ## Why there is almost nothing exported here
 *
 * The whole of the browser-facing contract is two lines a host writes:
 *
 *     document.querySelector("gufe-view").payload = payload;
 *
 * That is what `python/gufe_viz/html.py` does, what `notebook.py` does, and what
 * `ts/tests/bundle.test.ts` drives the built artifact through. Every test in the
 * suite imports this file for its side effects alone and then reaches into
 * `src/**` directly for anything it needs to inspect.
 *
 * What is exported is what something outside actually reads, and nothing else.
 * A file that re-exports the internals reads as a public API, which makes every
 * rename inside `shared/` look like a breaking change and pulls `export` onto
 * things that have one caller.
 *
 * `VIEW_TAGS` and `PAYLOAD_TYPES` stay because `bundle.test.ts` asks the built
 * bundle which types it draws, rather than being told in a fixture that goes
 * stale the day a view lands. Anything else a host turns out to need is one line
 * to add back, with a caller to justify it.
 */

import "./gufe-view.js";
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
 * `GufeElement.connectedCallback` installs it too, which covers a host that
 * builds an element without going through this file. This call is for everything
 * *around* the elements: the dev pages build their own chrome out of `V` and may
 * draw it before any `<gufe-*>` has connected - a dropzone with nothing dropped
 * on it yet is the whole page - and a `var()` with nothing behind it is not a
 * colour. Guarded for a document that does not exist, and idempotent by id.
 */
installTheme();

/** The dispatch table, for a caller asking the bundle what it can draw. */
export { VIEW_TAGS } from "./gufe-view.js";

/** Every `type` the schema declares, drawn or not. */
export { PAYLOAD_TYPES } from "./schema/validate.js";

/**
 * The settings a view has remembered, on the console.
 *
 * `window.gufeViz.settings()` answers "what state was this actually in" without
 * a hunt through a storage inspector, and `reset()` puts every view back to how
 * a new reader would find it. Attached the same way the debug switch is: a
 * global, because the thing you need it for is a page you are already looking
 * at and cannot rebuild.
 */
declare global {
  // eslint-disable-next-line no-var
  var gufeViz: { settings: typeof settings; reset: typeof resetSettings } | undefined;
}

if (typeof globalThis !== "undefined") {
  globalThis.gufeViz = { settings, reset: resetSettings };
}
