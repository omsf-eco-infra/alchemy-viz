/**
 * The source name: which file the payload on screen was generated from.
 *
 * Two ways in - an attribute a generated page carries, a global a host sets -
 * for the reason `debug.test.ts` pins down three of them: each reaches a host
 * the other cannot. And one rule that matters more than either: a page with no
 * source says nothing at all rather than drawing an empty chip, because a
 * header is the one place in a view where blank space is a claim.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { SOURCE_GLOBAL, sourceName } from "../src/shared/source.js";
import { headerStrip } from "../src/shared/panels.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines } from "./helpers.js";

type SourceGlobal = { ALCHEMY_VIZ_SOURCE?: unknown };

function mountView(payload: unknown, source?: string): HTMLElement & { payload: unknown } {
  const view = document.createElement("alchemy-view") as HTMLElement & { payload: unknown };
  if (source !== undefined) view.setAttribute("source", source);
  document.body.appendChild(view);
  view.payload = payload;
  return view;
}

/** What the header says the file is called, or null when it names none. */
const shownSource = (node: HTMLElement): string | null =>
  node.querySelector(".gufe-header-source")?.textContent ?? null;

describe("sourceName", () => {
  beforeEach(() => {
    delete (globalThis as SourceGlobal).ALCHEMY_VIZ_SOURCE;
  });
  afterEach(() => {
    delete (globalThis as SourceGlobal).ALCHEMY_VIZ_SOURCE;
    document.body.replaceChildren();
  });

  it("is empty when nothing said", () => {
    expect(sourceName()).toBe("");
    expect(sourceName(document.createElement("alchemy-view"))).toBe("");
  });

  it("reads the attribute a generated page carries", () => {
    const view = document.createElement("alchemy-view");
    view.setAttribute("source", "tyk2.json");
    expect(sourceName(view)).toBe("tyk2.json");
  });

  it("reads the global a host that mounts the element itself can set", () => {
    (globalThis as Record<string, unknown>)[SOURCE_GLOBAL] = "dropped.json";
    expect(sourceName()).toBe("dropped.json");
    expect(sourceName(document.createElement("alchemy-view"))).toBe("dropped.json");
  });

  it("lets the attribute win, as the more specific of the two", () => {
    (globalThis as SourceGlobal).ALCHEMY_VIZ_SOURCE = "whatever-the-host-thinks.json";
    const view = document.createElement("alchemy-view");
    view.setAttribute("source", "this-page.json");
    expect(sourceName(view)).toBe("this-page.json");
  });

  it("treats whitespace as nothing said", () => {
    const view = document.createElement("alchemy-view");
    view.setAttribute("source", "   ");
    expect(sourceName(view)).toBe("");
  });
});

describe("the header strip", () => {
  it("names no file unless it is given one", () => {
    const bar = headerStrip("A view");
    expect(bar.sourceEl).toBeUndefined();
    expect(bar.querySelector(".gufe-header-source")).toBeNull();
  });

  it("keeps the payload's own name as the title and adds the file beside it", () => {
    const bar = headerStrip("solvated ligand transformations", "tyk2.json");
    expect(bar.titleEl.textContent).toBe("solvated ligand transformations");
    expect(bar.sourceEl?.textContent).toBe("tyk2.json");
    // The stats stay last, so a file name never comes between the title and
    // what the view counted.
    expect(bar.textEl.lastElementChild).toBe(bar.statsEl);
  });
});

describe("a view generated from a file", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    delete (globalThis as SourceGlobal).ALCHEMY_VIZ_SOURCE;
    document.body.replaceChildren();
  });

  it("names the file in its header", async () => {
    const node = mountView(readExample("unknown_component.json"), "somebodys_component.json");
    await flush();
    expect(shownSource(node)).toBe("somebodys_component.json");
    // Beside the payload's own name rather than instead of it.
    expect(node.querySelector(".gufe-header")?.textContent).toContain("gold nanoparticle");
  });

  it("names nothing when the page was not generated from a file", async () => {
    const node = mountView(readExample("unknown_component.json"));
    await flush();
    expect(shownSource(node)).toBeNull();
  });

  it("reaches a network view, which has stats in the same strip", async () => {
    const node = mountView(readExample("ligand_network.json"), "ligand_network.json");
    await flush();
    expect(shownSource(node)).toBe("ligand_network.json");
  });

  it("follows the host's global, for a widget that mounts the element itself", async () => {
    (globalThis as SourceGlobal).ALCHEMY_VIZ_SOURCE = "from_a_notebook.json";
    const node = mountView(readExample("unknown_component.json"));
    await flush();
    expect(shownSource(node)).toBe("from_a_notebook.json");
  });

  it("hands the name to the view it mounts, so the view reads its own element", async () => {
    const node = mountView(readExample("unknown_component.json"), "tyk2.json");
    await flush();
    expect(node.querySelector("gufe-unknown-component")?.getAttribute("source")).toBe("tyk2.json");
  });
});
