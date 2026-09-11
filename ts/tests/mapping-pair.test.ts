/**
 * Reading a mapping payload into the pair the six modes draw from.
 *
 * `preparePair` is the first fifty lines of what used to be a 663-line
 * `renderView`: resolve two gufe keys, parse two SDFs, put the second molecule
 * into the first's frame, and work out which atoms are unique to each. None of
 * it touches the DOM, so it is worth asserting directly rather than only through
 * a render.
 *
 * The two failure paths matter most. Both are things a *schema-valid* payload can
 * say - JSON Schema cannot express "this key resolves", and it cannot check that
 * an SDF parses - so they are ordinary outcomes with a sentence attached, not
 * exceptions.
 */

import { describe, expect, it } from "vitest";
import { preparePair } from "../src/views/atom-mapping.js";
import { buildRegistry } from "../src/schema/registry.js";
import { parseSDF } from "../src/shared/sdf.js";
import type { LigandAtomMappingViz } from "../src/schema/types.js";
import { readExample } from "./helpers.js";

const mapping = (): LigandAtomMappingViz => readExample("ligand_atom_mapping.json") as unknown as LigandAtomMappingViz;

const prepare = (payload: LigandAtomMappingViz) => preparePair(payload, buildRegistry(payload));

describe("preparePair", () => {
  it("reads the two molecules a real mapping names", () => {
    const out = prepare(mapping());
    expect("pair" in out).toBe(true);
    if (!("pair" in out)) return;
    expect(out.pair.molA.symbols.length).toBeGreaterThan(0);
    expect(out.pair.molB.symbols.length).toBeGreaterThan(0);
    expect(out.pair.nameA).toBeTruthy();
    expect(out.pair.nameB).toBeTruthy();
  });

  it("carries the correspondence both ways round", () => {
    const out = prepare(mapping());
    if (!("pair" in out)) throw new Error("expected a pair");
    const { pairs, flipped } = out.pair;
    expect(pairs.size).toBeGreaterThan(0);
    expect(flipped.size).toBe(pairs.size);
    // `flipped` is what reading B against A needs; the modes use both.
    for (const [a, b] of pairs) expect(flipped.get(b)).toBe(a);
  });

  it("puts B in A's frame without touching anything the mapping is read by", () => {
    const payload = mapping();
    const out = prepare(payload);
    if (!("pair" in out)) throw new Error("expected a pair");

    // The same SDF read without going through `inFrameOf`, which is what the
    // prepared `molB` has to be compared against for this to say anything.
    const raw = parseSDF(out.pair.to.sdf, out.pair.nameB);

    // Coordinates are all `inFrameOf` changes. Symbols, bonds and atom indices
    // are untouched, which is what lets the marking and the counts downstream
    // read exactly what they read before - and it is the reason `preparePair`
    // can reframe before any mode draws without the modes knowing.
    expect(out.pair.molB.symbols).toEqual(raw.symbols);
    expect(out.pair.molB.bonds).toEqual(raw.bonds);
    expect(out.pair.molB.coords).toHaveLength(raw.coords.length);
    // This fixture's two molecules are already in one frame, so the coordinates
    // happen to come through unchanged and nothing here would notice if the
    // reframing were dropped. That `inFrameOf` moves what it should is asserted
    // directly, on constructed pairs, in `views.test.ts`.
  });

  it("classifies the unique atoms from each side's own point of view", () => {
    const out = prepare(mapping());
    if (!("pair" in out)) throw new Error("expected a pair");
    const { pairs, flipped, molA, molB, uniquesA, uniquesB } = out.pair;

    // Every atom lands in exactly one of the three buckets, per side.
    const partition = (u: typeof uniquesA) => [...u.atoms, ...u.elements, ...u.mapped];
    expect(partition(uniquesA).sort((x, y) => x - y)).toEqual(molA.symbols.map((_, i) => i));
    expect(partition(uniquesB).sort((x, y) => x - y)).toEqual(molB.symbols.map((_, i) => i));

    // `atoms` is exactly what the mapping does not mention, from each side's own
    // point of view - which is why B is classified against `flipped`.
    for (const index of uniquesA.atoms) expect(pairs.has(index)).toBe(false);
    for (const index of uniquesB.atoms) expect(flipped.has(index)).toBe(false);
    expect(uniquesA.elements.length + uniquesA.mapped.length).toBe(pairs.size);
    expect(uniquesB.elements.length + uniquesB.mapped.length).toBe(flipped.size);
  });

  it("says so, rather than throwing, when the registry does not hold the molecules", () => {
    const payload = { ...mapping(), registry: [] } as unknown as LigandAtomMappingViz;
    const out = prepare(payload);
    if (!("problem" in out)) throw new Error("expected a problem");
    expect(out.problem).toContain("registry does not hold them");
    // Not an error state: a payload can legitimately be handed on without the
    // entries it refers to, and the panel says which case this is.
    expect(out.isError).toBe(false);
  });

  it("says so, rather than throwing, when a molecule cannot be read", () => {
    const payload = mapping() as unknown as { registry: { sdf: string }[] };
    const broken = {
      ...mapping(),
      registry: payload.registry.map((entry) => ({ ...entry, sdf: "not an SDF at all" })),
    } as unknown as LigandAtomMappingViz;
    const out = prepare(broken);
    if (!("problem" in out)) throw new Error("expected a problem");
    expect(out.problem).toContain("Could not read a molecule");
    expect(out.isError).toBe(true);
  });
});
