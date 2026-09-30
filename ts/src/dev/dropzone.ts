/**
 * A page you drag a payload JSON onto.
 *
 * No Python, no wiring, no build step in the loop: a file lands on the page and
 * a molecule appears. `?file=<url>` loads one on startup instead, so the
 * edit-a-payload-and-reload loop needs no dragging at all.
 *
 * Dev-only: nothing here is part of the shipped bundle.
 */

// For its side effects: this is what registers every `<gufe-*>` element.
import "../index.js";
import { mount } from "./mount.js";
import { errText } from "../shared/dom.js";
import { SOURCE_ATTRIBUTE } from "../shared/source.js";
import { V } from "../shared/theme.js";

const DROP_HINT = "Drop a payload JSON anywhere on this page";

/** The page's own title, to put whatever is loaded in front of. */
const BASE_TITLE = "alchemy-viz";

/**
 * The readable name of a dropped file or a `?file=` URL.
 *
 * The basename, because the dev URL for `examples/` is a `/@fs/...` path nobody
 * can read, and the query string is dropped with it because `?t=` cache
 * busters are not part of what a file is called.
 */
function basename(source: string): string {
  return decodeURIComponent(source.split("?")[0]).split("/").pop() || "";
}

/**
 * Say which file is on screen in the browser's own title bar.
 *
 * Asked for in review: several examples draw a similar picture, and the tab was
 * the only place left that could say which one this is. The view's own header
 * says it too, from the attribute `showing` sets.
 */
function titleFor(name: string): void {
  document.title = name ? `${name} - ${BASE_TITLE}` : BASE_TITLE;
}

/** How long a message about something that worked stays up. */
export const BANNER_MS = 3000;

export function installDropzone(host: HTMLElement): void {
  const view = mount(host);
  const banner = document.createElement("div");
  banner.style.cssText =
    "position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:1000;cursor:pointer;" +
    "padding:6px 14px;border-radius:999px;font:12px/1.4 ui-sans-serif,system-ui,sans-serif;" +
    "transition:opacity .25s ease;" +
    `background:${V.toolbarBg};color:${V.textMuted};border:1px solid ${V.toolbarBorder};`;
  banner.textContent = DROP_HINT;
  banner.title = "Click to dismiss";
  document.body.appendChild(banner);

  let hideTimer: ReturnType<typeof setTimeout> | null = null;

  const hide = (): void => {
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = null;
    banner.style.opacity = "0";
    // Nothing under a hidden banner should be unclickable.
    banner.style.pointerEvents = "none";
  };

  banner.addEventListener("click", hide);

  /**
   * Show a message.
   *
   * A message about something that worked goes away on its own, because it sits
   * over the visualization it is describing and has nothing left to say once it
   * has been read. An error stays, because an error that vanishes before it is
   * read is worse than one that lingers - and both can be clicked away.
   */
  const say = (text: string, isError = false): void => {
    if (hideTimer) clearTimeout(hideTimer);
    banner.textContent = text;
    banner.style.color = isError ? V.warnFg : V.textMuted;
    banner.style.background = isError ? V.warnBg : V.toolbarBg;
    banner.style.opacity = "1";
    banner.style.pointerEvents = "auto";
    hideTimer = isError ? null : setTimeout(hide, BANNER_MS);
  };

  /**
   * Draw `payload`, and say everywhere which file it came from.
   *
   * The attribute is set before the payload, not after: assigning `.payload` is
   * what renders, so a name that arrived afterwards would be a header built
   * without it.
   */
  const showing = (payload: unknown, name: string): void => {
    if (name) view.setAttribute(SOURCE_ATTRIBUTE, name);
    else view.removeAttribute(SOURCE_ATTRIBUTE);
    view.payload = payload;
    titleFor(name);
  };

  const overlay = document.createElement("div");
  overlay.style.cssText =
    "position:fixed;inset:0;z-index:999;display:none;pointer-events:none;" +
    `background:${V.cardBgActive};opacity:.25;`;
  document.body.appendChild(overlay);

  // `dragenter`/`dragleave` fire per child element, so count depth rather than
  // toggling - otherwise moving over any child hides the overlay.
  let depth = 0;
  const showOverlay = (on: boolean) => {
    overlay.style.display = on ? "block" : "none";
  };

  window.addEventListener("dragenter", (e) => {
    e.preventDefault();
    depth++;
    showOverlay(true);
  });
  window.addEventListener("dragover", (e) => e.preventDefault());
  window.addEventListener("dragleave", (e) => {
    e.preventDefault();
    depth = Math.max(0, depth - 1);
    if (depth === 0) showOverlay(false);
  });

  window.addEventListener("drop", (e) => {
    e.preventDefault();
    depth = 0;
    showOverlay(false);
    const file = e.dataTransfer?.files?.[0];
    if (!file) {
      say("Nothing droppable in there", true);
      return;
    }
    void readPayload(file)
      .then((payload) => {
        showing(payload, file.name);
        say(`${file.name} - drop another to replace it`);
      })
      .catch((err: unknown) => say(`${file.name}: ${errText(err)}`, true));
  });

  // `?file=` - reload-friendly iteration, and how the gallery links here.
  //
  // Note the opening hint above is left up rather than timed out: with nothing
  // loaded the page is blank, and a blank page with no instruction on it is not
  // a page anyone can use.
  const wanted = new URLSearchParams(location.search).get("file");
  if (wanted) {
    say(`Loading ${wanted}...`);
    void fetch(wanted)
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
        return r.json();
      })
      .then((payload) => {
        showing(payload, basename(wanted));
        say(`${wanted} - drop a file to replace it`);
      })
      .catch((err: unknown) => say(`${wanted}: ${errText(err)}`, true));
  }
}

async function readPayload(file: File): Promise<unknown> {
  const text = await file.text();
  try {
    return JSON.parse(text);
  } catch (e) {
    // A JSON syntax error is the single most likely thing to go wrong here, so
    // say where it went wrong rather than "unexpected token".
    throw new Error(`not valid JSON - ${errText(e)}`);
  }
}
