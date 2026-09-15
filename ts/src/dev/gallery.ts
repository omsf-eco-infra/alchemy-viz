/**
 * The gallery: every component, one scrolling page, in two sizes.
 *
 * The point is that a change in one place can be checked everywhere it shows up,
 * in one reload. Each example renders through `<alchemy-view>` the real dispatch
 * path, and once the shared components exist this will also render them in
 * their *embedded* contexts, so the atom-mapping viewer can be checked
 * standalone, inside the ligand network and inside the transformation view at
 * the same time.
 *
 * `/gallery.html` draws the curated list in `curated.ts` - one example per view,
 * the biggest one that says something its smaller siblings do not.
 * `/gallery-all.html` draws the whole of `examples/`, sizes and duplicates
 * included, which is what you want when a payload shape rather than a drawing is
 * in question.
 *
 * Dev-only: nothing here is part of the shipped bundle.
 */

// For its side effects: this is what registers every `<gufe-*>` element.
import "../index.js";
import { CURATED, CURATED_FILES } from "./curated.js";
import { mount } from "./mount.js";
import { withDebugFlag } from "../shared/debug.js";
import { errText } from "../shared/dom.js";
import { V } from "../shared/theme.js";

/**
 * The same `examples/*.json` files pytest and vitest use. Loading them through
 * `import.meta.glob` rather than a hand-kept list means a new example shows up
 * in the gallery the moment it is written.
 */
const EXAMPLES = import.meta.glob<{ default: unknown }>("../../../examples/*.json");

/**
 * The same files again, as URLs. `examples/` lives outside the Vite root, so its
 * dev URL is a `/@fs/...` path rather than anything guessable - the "open alone"
 * links have to come from the bundler, not from string concatenation.
 */
const EXAMPLE_URLS = import.meta.glob<string>("../../../examples/*.json", {
  query: "?url",
  import: "default",
  eager: true,
});

const CARD_HEIGHT = "520px";

/**
 * How far outside the viewport a card mounts, and how far out it is released.
 *
 * Cards mount lazily because several of them create a WebGL context - the two
 * 3D panes, three proteins, the mapping overlay, and whatever a chemical system
 * or a transformation nests - and browsers cap live contexts at somewhere around
 * eight to sixteen. Mounting all fourteen at once silently blanks the ones past
 * the cap, which reads as "my view is broken" rather than "the browser ran out".
 *
 * Releasing again on the way out is what keeps that true after a long scroll.
 * The release margin is wider than the mount margin so a card near the edge does
 * not flicker between the two.
 */
const MOUNT_MARGIN = "600px";
const RELEASE_MARGIN = "1400px";

/** Which set of examples a page draws. */
export type GalleryMode = "curated" | "all";

/** The glob's paths keyed by file name, which is what the curated list holds. */
function byName(): Map<string, string> {
  const map = new Map<string, string>();
  for (const path of Object.keys(EXAMPLES)) map.set(path.split("/").pop()!, path);
  return map;
}

export async function buildGallery(host: HTMLElement, mode: GalleryMode = "curated"): Promise<void> {
  const all = byName();
  const names = mode === "all" ? [...all.keys()].sort() : CURATED_FILES.filter((f) => all.has(f));
  // A curated name with no file means an example was renamed or dropped. The
  // header says so rather than the page quietly drawing one card fewer;
  // `ts/tests/gallery.test.ts` fails on the same thing, but the page is what
  // gets looked at every day.
  const missing = mode === "all" ? [] : CURATED_FILES.filter((f) => !all.has(f));
  const notes = new Map(CURATED.map((c) => [c.file, c.note]));

  host.appendChild(header(mode, names.length, all.size, missing));

  if (!all.size) {
    const empty = document.createElement("div");
    empty.style.cssText = `padding:20px;color:${V.textMuted2};font:13px ui-sans-serif,system-ui,sans-serif;`;
    empty.textContent = "No example payloads yet - run `pixi run examples`.";
    host.appendChild(empty);
    return;
  }

  for (const name of names) {
    const path = all.get(name)!;
    const card = document.createElement("section");
    card.style.cssText =
      `margin:16px 20px;border:1px solid ${V.cardBorder};border-radius:10px;overflow:hidden;` +
      `background:${V.cardBg};`;

    const bar = document.createElement("div");
    bar.style.cssText =
      "display:flex;align-items:baseline;gap:10px;padding:8px 14px;font:12px ui-sans-serif,system-ui,sans-serif;" +
      `background:${V.panelBg};border-bottom:1px solid ${V.cardBorder};color:${V.textMuted};`;
    // Through `withDebugFlag` so that `?debug` on the gallery follows the link:
    // the page being opened reads its own URL, and an example worth opening
    // alone is usually one being debugged.
    const href = withDebugFlag(`./index.html?file=${encodeURIComponent(EXAMPLE_URLS[path] ?? "")}`);
    const note = notes.get(name);
    bar.innerHTML =
      `<b style="color:${V.textPrimary};font-family:ui-monospace,Menlo,monospace;">${name}</b>` +
      (note && mode === "curated" ? `<span>${note}</span>` : "") +
      `<a href="${href}" style="margin-left:auto;color:${V.titleColor};">open alone -></a>`;
    card.appendChild(bar);

    const stage = document.createElement("div");
    stage.style.cssText = `height:${CARD_HEIGHT};`;
    card.appendChild(stage);
    host.appendChild(card);

    placeholder(stage, name);
    observe(stage, path, name);
  }
}

/** The title, what is on the page, and the way to the other two pages. */
function header(mode: GalleryMode, shown: number, total: number, missing: string[]): HTMLElement {
  const el = document.createElement("header");
  el.style.cssText =
    "padding:16px 20px 4px;font:13px/1.5 ui-sans-serif,system-ui,sans-serif;" + `color:${V.textMuted};`;

  const link = (href: string, text: string) =>
    `<a href="${withDebugFlag(href)}" style="color:${V.titleColor};">${text} -&gt;</a>`;

  const title = mode === "all" ? "alchemy-viz gallery - everything" : "alchemy-viz gallery";
  const blurb =
    mode === "all"
      ? `all ${total} example payload${total === 1 ? "" : "s"} in <code>examples/</code>, every size and duplicate`
      : `${shown} of ${total} example payloads: one per view, the one worth looking at`;
  const other =
    mode === "all" ? link("./gallery.html", "curated gallery") : link("./gallery-all.html", "every example");

  el.innerHTML =
    `<h1 style="margin:0 0 4px;font-size:18px;color:${V.titleColor};">${title}</h1>` +
    `<div>${blurb}, each rendered through <code>&lt;alchemy-view&gt;</code>. ` +
    `${other} &middot; ${link("./parity.html", "mapping parity")}</div>` +
    (missing.length
      ? `<div style="color:${V.errorFg};">curated but missing from <code>examples/</code>: ` +
        `<code>${missing.join(", ")}</code> - run <code>pixi run examples</code>, ` +
        "or fix <code>ts/src/dev/curated.ts</code>.</div>"
      : "");
  return el;
}

/** What a card shows before it is scrolled to. */
function placeholder(stage: HTMLElement, name: string): void {
  stage.replaceChildren();
  stage.style.cssText =
    `height:${CARD_HEIGHT};display:flex;align-items:center;justify-content:center;` +
    `color:${V.textMuted2};font:12px ui-sans-serif,system-ui,sans-serif;`;
  stage.textContent = `${name} - scroll to draw`;
}

let mountObserver: IntersectionObserver | null = null;
let releaseObserver: IntersectionObserver | null = null;
const pending = new Map<Element, { path: string; name: string }>();
const mounted = new Set<Element>();

function observe(stage: HTMLElement, path: string, name: string): void {
  if (typeof IntersectionObserver === "undefined") {
    void draw(stage, path, name);
    return;
  }

  mountObserver ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const card = pending.get(entry.target);
        if (card) void draw(entry.target as HTMLElement, card.path, card.name);
      }
    },
    { rootMargin: MOUNT_MARGIN },
  );

  releaseObserver ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting || !mounted.has(entry.target)) continue;
        // Removing the element fires its `disconnectedCallback`, which is where
        // a 3Dmol viewer gives its context back.
        mounted.delete(entry.target);
        const card = pending.get(entry.target);
        if (card) placeholder(entry.target as HTMLElement, card.name);
      }
    },
    { rootMargin: RELEASE_MARGIN },
  );

  pending.set(stage, { path, name });
  mountObserver.observe(stage);
  releaseObserver.observe(stage);
}

async function draw(stage: HTMLElement, path: string, name: string): Promise<void> {
  if (mounted.has(stage)) return;
  mounted.add(stage);
  stage.replaceChildren();
  stage.style.cssText = `height:${CARD_HEIGHT};`;
  try {
    const mod = await EXAMPLES[path]();
    mount(stage, mod.default);
  } catch (e) {
    stage.style.cssText = `padding:20px;color:${V.errorFg};font:12px ui-sans-serif,system-ui,sans-serif;`;
    stage.textContent = `Failed to load ${name}: ${errText(e)}`;
  }
}
