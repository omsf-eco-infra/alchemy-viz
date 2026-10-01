/**
 * Resolving a network payload's gufe keys, and counting what did not resolve.
 *
 * Both network views already assert the *reported* end of this in
 * `views.test.ts`: a network draws "not in its registry" and "does not contain"
 * panels. Those tests go through a whole render, so they say the message
 * appeared without pinning the rule that produced it.
 *
 * This is that rule on its own, now that there is one copy of it. What matters
 * about it is not that it resolves keys - that is `lookupOfType` - but what it
 * does with the ones it cannot: a schema-valid payload can name a ligand that is
 * not in its own registry, because JSON Schema cannot say "this key resolves", so
 * dropping-and-counting is the behaviour the views depend on rather than an
 * error path nobody reaches.
 */

import { describe, expect, it } from "vitest";
import { resolveNetwork } from "../src/shared/network/resolve.js";
import type { RegistryEntry, RegistryIndex } from "../src/schema/registry.js";

/** A registry holding the entries given, keyed as the real builder keys them. */
const registryOf = (...entries: RegistryEntry[]): RegistryIndex =>
  new Map(entries.map((entry) => [entry["gufe-key"], entry]));

const ligand = (key: string): RegistryEntry =>
  ({ type: "SmallMoleculeComponentViz", "gufe-key": key, name: key }) as unknown as RegistryEntry;

const protein = (key: string): RegistryEntry =>
  ({ type: "ProteinComponentViz", "gufe-key": key, name: key }) as unknown as RegistryEntry;

interface Edge {
  a: string;
  b: string;
}

const resolve = (registry: RegistryIndex, keys: string[], edges: Edge[]) =>
  resolveNetwork<Edge, never>({
    registry,
    keys,
    nodeType: "SmallMoleculeComponentViz" as never,
    edges,
    ends: (edge) => [edge.a, edge.b],
  });

describe("resolveNetwork", () => {
  it("resolves every key it can, in the payload's own order", () => {
    const out = resolve(registryOf(ligand("a"), ligand("b")), ["b", "a"], []);
    expect(out.nodes.map((n) => n["gufe-key"])).toEqual(["b", "a"]);
    expect(out.unresolved).toBe(0);
  });

  it("gives each node the layout's own fields, on top of the registry object", () => {
    const out = resolve(registryOf(ligand("a")), ["a"], []);
    // The node *is* the payload entry, which is what lets a detail pane hand it
    // straight to the view that draws it - not a copy of some of its fields.
    expect(out.nodes[0]).toMatchObject({ type: "SmallMoleculeComponentViz", name: "a", x: 0, y: 0 });
  });

  it("counts a key the registry does not hold, rather than throwing", () => {
    const out = resolve(registryOf(ligand("a")), ["a", "missing"], []);
    expect(out.nodes).toHaveLength(1);
    expect(out.unresolved).toBe(1);
  });

  it("counts a key that resolves to the wrong type as unresolved", () => {
    // A payload can put anything in its registry under any key. Drawing a
    // protein as a ligand node would be worse than saying one is missing.
    const out = resolve(registryOf(protein("p")), ["p"], []);
    expect(out.nodes).toHaveLength(0);
    expect(out.unresolved).toBe(1);
  });

  it("resolves both ends of an edge to the node objects, not to copies", () => {
    const out = resolve(registryOf(ligand("a"), ligand("b")), ["a", "b"], [{ a: "a", b: "b" }]);
    expect(out.edges).toHaveLength(1);
    // Identity, so a canvas moving a node moves what its edges are drawn from.
    expect(out.edges[0].from).toBe(out.nodes[0]);
    expect(out.edges[0].to).toBe(out.nodes[1]);
  });

  it("drops an edge whose end names a node this network does not contain", () => {
    const out = resolve(registryOf(ligand("a"), ligand("b")), ["a"], [{ a: "a", b: "b" }]);
    // `b` is in the registry but is not one of this network's nodes, which is a
    // different thing from being missing and is still not drawable.
    expect(out.edges).toHaveLength(0);
    expect(out.dangling).toBe(1);
  });

  it("indexes surviving edges by their place among the survivors", () => {
    const out = resolve(
      registryOf(ligand("a"), ligand("b")),
      ["a", "b"],
      [
        { a: "a", b: "gone" },
        { a: "a", b: "b" },
      ],
    );
    // The canvas and the selection address an edge by `index`, and neither knows
    // about the ones that were dropped - so the survivor is 0, not 1.
    expect(out.edges).toHaveLength(1);
    expect(out.edges[0].index).toBe(0);
    expect(out.dangling).toBe(1);
  });

  it("survives a payload naming nothing at all", () => {
    const out = resolve(registryOf(), [], []);
    expect(out).toEqual({ nodes: [], edges: [], unresolved: 0, dangling: 0 });
  });
});
