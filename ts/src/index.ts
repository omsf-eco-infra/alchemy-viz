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
 * This file used to re-export 125 named symbols on top of that - `kabsch`,
 * `wheelFactor`, `parseAtomSpec`, `openfeShift`, `boundedZoom` and the rest -
 * none of which had a caller anywhere. The cost was not the bytes; it was that
 * the file read as a public API, so every rename inside `shared/` looked like a
 * breaking change and a good deal of the internals were `export`ed only to feed
 * it. What is left is what something outside actually reads.
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
