/**
 * The curated gallery list, checked against `examples/`.
 *
 * `/gallery.html` is a hand-written list rather than the directory listing
 * `/gallery-all.html` draws, so it can go stale in two directions: a name in it
 * can stop matching a file, and a new view can land with no card. Both are
 * quiet failures - the page just draws one card fewer - so they are asserted
 * here instead.
 */

import { describe, expect, it } from "vitest";

import { VIEW_TAGS } from "../src/alchemy-view.js";
import { CURATED, CURATED_FILES } from "../src/dev/curated.js";
import { exampleNames, readExample } from "./helpers.js";

/** The element each example's type is drawn by, or nothing if no view claims it. */
const tagOf = (name: string): string | undefined =>
  (VIEW_TAGS as Record<string, string>)[readExample(name).type as string];

describe("the curated gallery", () => {
  it("names only files that exist", () => {
    const present = new Set(exampleNames());
    expect(CURATED_FILES.filter((f) => !present.has(f))).toEqual([]);
  });

  it("names each file once", () => {
    expect([...new Set(CURATED_FILES)]).toEqual(CURATED_FILES);
  });

  it("says why each one is in the list", () => {
    for (const { file, note } of CURATED) expect(note, file).not.toBe("");
  });

  it("covers every view something in examples/ is drawn by", () => {
    const drawn = new Set(exampleNames().map(tagOf).filter(Boolean));
    const curated = new Set(CURATED_FILES.map(tagOf).filter(Boolean));
    expect([...drawn].filter((tag) => !curated.has(tag!)).sort()).toEqual([]);
  });

  it("leaves the smaller duplicates to the everything page", () => {
    expect(CURATED_FILES.length).toBeLessThan(exampleNames().length);
  });
});
