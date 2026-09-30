/**
 * The rules behind a collapsed alchemical network, on their own.
 *
 * `views.test.ts` asserts what a campaign *looks* like once these have run - ten
 * boxes for twenty systems, nine lines for eighteen transformations, one merged
 * component list per box. Those tests go through a whole render, so they say the
 * picture came out right without pinning the rules that decide it: what makes
 * two systems the same ligand, what a leg is called, and what a name falls back
 * to where the short words cannot tell two things apart.
 */

import { describe, expect, it } from "vitest";

import {
  compositionOf,
  groupSystems,
  legIndex,
  legLabel,
  legLabelsFor,
  legNames,
  legOf,
  mergedSystem,
  sharedName,
  tabLabels,
} from "../src/views/alchemical-legs.js";
import type { RegistryEntry, RegistryIndex } from "../src/schema/registry.js";
import type { ChemicalSystemViz, TransformationViz } from "../src/schema/types.js";

const entry = (type: string, key: string, extra: Record<string, unknown> = {}): RegistryEntry =>
  ({ type, "gufe-key": key, name: key, ...extra }) as unknown as RegistryEntry;

/** A registry holding the entries given, keyed as the real builder keys them. */
const registryOf = (...entries: RegistryEntry[]): RegistryIndex =>
  new Map(entries.map((held) => [held["gufe-key"], held]));

const system = (key: string, components: Record<string, string>, name?: string): ChemicalSystemViz =>
  ({ type: "ChemicalSystemViz", "gufe-key": key, name: name ?? key, components }) as unknown as ChemicalSystemViz;

const transformation = (stateA: string, stateB: string, name = ""): TransformationViz =>
  ({ type: "TransformationViz", "gufe-key": `T-${stateA}-${stateB}`, name, stateA, stateB }) as TransformationViz;

/**
 * A two-leg campaign of two ligands, as small as the shape goes.
 *
 * Both legs of a ligand hold the very same `SmallMoleculeComponent`, which is
 * the fact the collapsing rests on, and the complex leg carries a protein the
 * solvent leg does not.
 */
function campaign(): { registry: RegistryIndex; systems: ChemicalSystemViz[]; edges: TransformationViz[] } {
  const systems = [
    system("S1", { ligand: "L1", solvent: "W" }, "lig_1_solvent"),
    system("S2", { ligand: "L1", solvent: "W", protein: "P" }, "lig_1_complex"),
    system("S3", { ligand: "L2", solvent: "W" }, "lig_2_solvent"),
    system("S4", { ligand: "L2", solvent: "W", protein: "P" }, "lig_2_complex"),
  ];
  // The systems are registry entries too, the way a payload carries them: a
  // transformation names its two states by key and nothing else.
  const registry = registryOf(
    entry("SmallMoleculeComponentViz", "L1"),
    entry("SmallMoleculeComponentViz", "L2"),
    entry("SolventComponentViz", "W"),
    entry("ProteinComponentViz", "P"),
    ...(systems as unknown as RegistryEntry[]),
  );
  const edges = [
    transformation("S2", "S4", "lig_1 to lig_2 (complex)"),
    transformation("S1", "S3", "lig_1 to lig_2 (solvent)"),
  ];
  return { registry, systems, edges };
}

/** The legs of that campaign, and a way to rank a system by them. */
function legsOf(fixture: ReturnType<typeof campaign>) {
  const legs = legIndex(fixture.edges, fixture.registry);
  const rankOf = (held: ChemicalSystemViz): number => {
    const at = legs.signatures.indexOf(compositionOf(held, fixture.registry));
    return at < 0 ? legs.signatures.length : at;
  };
  return { legs, rankOf };
}

describe("what a leg is called", () => {
  it("names the three legs a campaign is described in", () => {
    expect(legLabel("SmallMolecule + Solvent")).toBe("solvent");
    expect(legLabel("Protein + SmallMolecule + Solvent")).toBe("complex");
    expect(legLabel("SmallMolecule")).toBe("vacuum");
    // A receptor of any of the shapes this repo draws is a complex leg.
    expect(legLabel("ProteinMembrane + SmallMolecule + Solvent")).toBe("complex");
    expect(legLabel("SmallMolecule + SolvatedPDB")).toBe("complex");
  });

  it("writes out a composition the short words have no word for", () => {
    // The words are a shorthand for the composition, so anything outside the
    // shorthand is said in full rather than guessed at.
    expect(legLabel("Cofactor + SmallMolecule + Solvent")).toBe("Cofactor + SmallMolecule + Solvent");
  });

  it("falls back to the compositions where two legs share a word", () => {
    // A complex leg with a solvent and one without are both complex legs, and a
    // legend with the same entry twice is worse than a long one.
    const both = ["Protein + SmallMolecule", "Protein + SmallMolecule + Solvent"];
    expect(legNames(both)).toEqual(both);
    expect(legNames(["SmallMolecule + Solvent", "Protein + SmallMolecule + Solvent"])).toEqual(["solvent", "complex"]);
  });
});

describe("which leg a transformation runs in", () => {
  it("takes both of its states, so the leg does not depend on their order", () => {
    const { registry, edges } = campaign();
    expect(legOf(edges[0], registry)).toBe("Protein + SmallMolecule + Solvent");
    expect(legOf(transformation("S4", "S2"), registry)).toBe("Protein + SmallMolecule + Solvent");
  });

  it("keeps a step that ends somewhere smaller in the leg it was run in", () => {
    // A ligand decoupled from a protein leaves the apo receptor behind, and that
    // is a complex-leg calculation however little is left at the far end.
    const { registry } = campaign();
    const apo = transformation("S2", "S5");
    const withApo = new Map(registry);
    withApo.set("S5", system("S5", { solvent: "W", protein: "P" }, "apo") as unknown as RegistryEntry);
    expect(legOf(apo, withApo)).toBe("Protein + SmallMolecule + Solvent");
  });

  it("orders the legs simplest first, not in the order the payload listed them", () => {
    // The payload's edges are sorted by gufe key, so which leg came first there
    // is an accident - and it would decide the legend, the filter, and which leg
    // a box opens on.
    const fixture = campaign();
    const legs = legIndex(fixture.edges, fixture.registry);
    expect(legs.names).toEqual(["solvent", "complex"]);
    // The complex edge was listed first and still belongs to the second leg.
    expect(legs.ofEdge).toEqual([1, 0]);
  });
});

describe("collapsing the systems of a ligand", () => {
  it("cuts a name back to the last thing that is not punctuation", () => {
    // A campaign that writes its legs in brackets shares everything up to the
    // bracket, and a row reading "lig_ejm_31 to lig_ejm_46 (" looks like a name
    // a bug cut in half.
    expect(sharedName(["lig_ejm_31 to lig_ejm_46 (solvent)", "lig_ejm_31 to lig_ejm_46 (complex)"])).toBe(
      "lig_ejm_31 to lig_ejm_46",
    );
    expect(sharedName(["lig_ejm_31_solvent", "lig_ejm_31_complex"])).toBe("lig_ejm_31");
    // Nothing in common is nothing, rather than a first letter.
    expect(sharedName(["abc", "xyz"])).toBe("");
  });

  it("puts every leg of a ligand in one box, and keeps the payload's order", () => {
    const fixture = campaign();
    const { legs, rankOf } = legsOf(fixture);
    const boxes = groupSystems(fixture.systems, fixture.registry, rankOf);

    expect(boxes).toHaveLength(2);
    expect(boxes.map((box) => box.systems.length)).toEqual([2, 2]);
    expect(legs.names).toEqual(["solvent", "complex"]);
    // In leg order, whatever order the payload listed them in.
    expect(boxes[0].legs).toEqual(["solvent", "complex"]);
    expect(boxes[0].systems.map((held) => held.name)).toEqual(["lig_1_solvent", "lig_1_complex"]);
  });

  it("addresses a box by one of its own systems' keys", () => {
    // Every key on the canvas is then one the payload listed, so a copied
    // selection names things that resolve and nothing made up reaches a pane.
    const fixture = campaign();
    const { rankOf } = legsOf(fixture);
    const boxes = groupSystems(fixture.systems, fixture.registry, rankOf);
    for (const box of boxes) {
      expect(box.systems.map((held) => held["gufe-key"])).toContain(box["gufe-key"]);
    }
  });

  it("names a collapsed box for the ligand rather than for either leg", () => {
    const fixture = campaign();
    const { rankOf } = legsOf(fixture);
    const boxes = groupSystems(fixture.systems, fixture.registry, rankOf);
    expect(boxes.map((box) => box.name)).toEqual(["L1", "L2"]);
  });

  it("leaves a system with no ligand a box of its own", () => {
    // An apo receptor, a solvent-only reference state: there is no ligand to
    // collapse it onto, which is what keeps an absolute network the star it is.
    const fixture = campaign();
    const registry = new Map(fixture.registry);
    const water = system("S9", { solvent: "W" }, "water");
    const { rankOf } = legsOf(fixture);
    const boxes = groupSystems([...fixture.systems, water], registry, rankOf);
    expect(boxes).toHaveLength(3);
    expect(boxes[2].systems).toEqual([water]);
    // Its own name, because a box that is one system is that system.
    expect(boxes[2].name).toBe("water");
  });

  it("does not collapse two ligands that merely share a solvent", () => {
    const fixture = campaign();
    const { rankOf } = legsOf(fixture);
    const boxes = groupSystems(fixture.systems, fixture.registry, rankOf);
    expect(new Set(boxes.map((box) => box["gufe-key"])).size).toBe(2);
  });

  it("names the systems of a box for themselves where the leg cannot tell them apart", () => {
    // The same ligand solvated twice under different settings: both are solvent
    // legs, so the leg is no answer and their own names are what is left.
    const registry = registryOf(entry("SmallMoleculeComponentViz", "L1"), entry("SolventComponentViz", "W"));
    const twice = [
      system("S1", { ligand: "L1", solvent: "W" }, "lig_1 at 0.15 molar"),
      system("S2", { ligand: "L1", solvent: "W" }, "lig_1 at 0.30 molar"),
    ];
    expect(legLabelsFor(twice, registry)).toEqual(["lig_1 at 0.15 molar", "lig_1 at 0.30 molar"]);
  });
});

describe("a box as one chemical system", () => {
  it("lists every component of every leg once", () => {
    // The tabs this replaces were a control over a list that was mostly itself
    // repeated: both legs carry the ligand and the solvent, and one carries the
    // protein. Merged, that is three rows and nothing to click first.
    const fixture = campaign();
    const { rankOf } = legsOf(fixture);
    const [box] = groupSystems(fixture.systems, fixture.registry, rankOf);
    const merged = mergedSystem(box);

    expect(merged.components).toEqual({ ligand: "L1", solvent: "W", protein: "P" });
    // The box rather than either of its legs: named for the ligand, and keyed
    // as the box is, so it still names something the payload holds.
    expect(merged.name).toBe("L1");
    expect(merged["gufe-key"]).toBe(box["gufe-key"]);
  });

  it("hands back a box of one system as that system, untouched", () => {
    const fixture = campaign();
    const { rankOf } = legsOf(fixture);
    const water = system("S9", { solvent: "W" }, "water");
    const boxes = groupSystems([...fixture.systems, water], fixture.registry, rankOf);
    expect(mergedSystem(boxes[2])).toBe(water);
  });

  it("splits a label that names different components in different legs", () => {
    // One name against two different molecules is the one thing worse than a
    // tab, so both are said with their leg - the first one included.
    const registry = registryOf(
      entry("SmallMoleculeComponentViz", "L1"),
      entry("SolventComponentViz", "W1"),
      entry("SolventComponentViz", "W2"),
      entry("ProteinComponentViz", "P"),
    );
    const systems = [
      system("S1", { ligand: "L1", solvent: "W1" }, "lig_1_solvent"),
      system("S2", { ligand: "L1", solvent: "W2", protein: "P" }, "lig_1_complex"),
    ];
    const boxes = groupSystems(systems, registry, () => 0);
    expect(boxes[0].legs).toEqual(["solvent", "complex"]);
    expect(mergedSystem(boxes[0]).components).toEqual({
      ligand: "L1",
      "solvent (solvent)": "W1",
      "solvent (complex)": "W2",
      protein: "P",
    });
  });
});

describe("what a line's tabs are called", () => {
  it("names them by leg, and by themselves where the leg cannot tell them apart", () => {
    const legs = ["SmallMolecule + Solvent", "Protein + SmallMolecule + Solvent"];
    expect(tabLabels(legs, ["a to b (solvent)", "a to b (complex)"])).toEqual(["solvent", "complex"]);
    // Two mappings run in the same leg between the same ligands: the leg is no
    // answer, so each tab carries the transformation's own name.
    expect(tabLabels([legs[0], legs[0]], ["first mapping", "second mapping"])).toEqual([
      "first mapping",
      "second mapping",
    ]);
  });
});
