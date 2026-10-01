/**
 * Which systems of an alchemical network are the same ligand, and which leg a
 * transformation runs in.
 *
 * ## Why a box is not a chemical system
 *
 * A binding campaign runs one ligand series twice - once in solvent, once in
 * complex - so the gufe object holds two `ChemicalSystem`s per ligand and two
 * `Transformation`s per mapping. Drawn literally, that is two disconnected
 * copies of the same ligand map whose only difference is that one carries a
 * protein: a reader has to work out that `lig_ejm_31_solvent` and
 * `lig_ejm_31_complex` are one ligand before the picture says anything, and
 * nobody thinks of a campaign that way. What is being planned is one ligand map
 * with two legs run on it.
 *
 * So the canvas collapses: one box per ligand, holding every system that carries
 * it. The payload is untouched - it stays a faithful `AlchemicalNetwork`, which
 * is what lets the detail pane hand a selected system straight to the view that
 * draws it - and the collapsing is a drawing decision, made here.
 *
 * ## What the leg is, and what it is called
 *
 * The leg is the composition: what tells a solvent leg from a complex leg is
 * that one has a protein in it at all, and never the names, which a campaign
 * chooses by convention. `legLabel` is the short word for one, and it is a
 * display shorthand for the composition rather than a fact the payload carries -
 * a composition the rule has no word for keeps its composition string, so
 * nothing is ever labelled by guesswork.
 *
 * The transformations collapse with them. Two boxes joined by a solvent leg and
 * a complex leg are joined by one line: the legs run between the same ligands,
 * over the same mapping, and drawing them twice makes the reader pick between
 * two lines that say the same thing about which ligands are being compared.
 * Which leg is a choice made once the line is open, in the pane, the way it is
 * for a box - see `tabLabels` for what the choices are called.
 */

import { entryLabel, lookup, lookupOfType, type RegistryIndex } from "../schema/registry.js";
import type { ChemicalSystemViz, GufeKey, SmallMoleculeComponentViz, TransformationViz } from "../schema/types.js";

/**
 * What a chemical system is made of, as the set of its component types, sorted.
 *
 * The labels are deliberately not part of it. A campaign calls the same protein
 * "protein" in one system and something else in the next, and what tells a
 * solvent leg from a complex leg is that one has a protein in it at all - so
 * this is the set of component *types*, sorted, which is stable against both
 * the labels and the order the components were written in.
 */
export function componentTypes(system: ChemicalSystemViz, registry: RegistryIndex): string[] {
  const types = new Set<string>();
  for (const key of Object.values(system.components ?? {})) {
    const component = lookup(registry, key);
    if (!component) {
      types.add("missing");
      continue;
    }
    types.add(
      component.type === "UnknownComponentViz"
        ? component.gufe_type
        : component.type.replace(/(?:Component)?Viz$/, ""),
    );
  }
  return [...types].sort();
}

/** The same thing as one string, which is what two systems are compared by. */
export const compositionOf = (system: ChemicalSystemViz, registry: RegistryIndex): string =>
  componentTypes(system, registry).join(" + ");

/** The component types that make a system a receptor rather than a solvated ligand. */
const RECEPTOR = ["Protein", "ProteinMembrane", "SolvatedPDB"];

/**
 * The short word for a leg of that composition: what phase it runs in.
 *
 * Three words, and a rule over component types rather than over names: a
 * composition carrying a receptor is a complex leg, one with a solvent and no
 * receptor is a solvent leg, and one with neither is in vacuum. That is the
 * vocabulary a campaign is described in, and it is much shorter than the
 * composition it stands for, which is what makes it fit on a box.
 *
 * A composition holding anything else - a cofactor type this repo does not
 * know, an unknown component - keeps its composition string instead. The short
 * words are a shorthand, so anything the shorthand has no word for is written
 * out in full rather than guessed at.
 */
export function legLabel(signature: string): string {
  const types = signature.split(" + ").filter(Boolean);
  const unnamed = types.filter((type) => type !== "SmallMolecule" && type !== "Solvent" && !RECEPTOR.includes(type));
  if (unnamed.length) return signature;
  if (types.some((type) => RECEPTOR.includes(type))) return "complex";
  if (types.some((type) => type === "Solvent")) return "solvent";
  return "vacuum";
}

/**
 * The short words for a set of legs, where they tell the legs apart.
 *
 * Two compositions can share a word - a complex leg with a solvent and one
 * without are both complex legs - and a legend with the same entry twice is
 * worse than a long one. Where that happens both fall back to their
 * compositions, which are distinct by construction.
 */
export function legNames(signatures: readonly string[]): string[] {
  const names = signatures.map(legLabel);
  const seen = new Map<string, number>();
  for (const name of names) seen.set(name, (seen.get(name) ?? 0) + 1);
  return names.map((name, index) => (seen.get(name)! > 1 ? signatures[index] : name));
}

/** The legs a network's transformations run in, and which one each of them runs in. */
export interface LegIndex {
  /** The distinct legs, simplest first. See `legIndex`. */
  signatures: string[];
  /** What each of those is called. See `legNames`. */
  names: string[];
  /** Which leg each transformation runs in, indexed as the edges are. */
  ofEdge: number[];
}

/**
 * The composition a transformation runs in: both of its states at once.
 *
 * The union rather than one end, so a leg is the same leg whichever way round
 * the transformation was written, and so a step that ends somewhere smaller than
 * it started - a ligand decoupled from a protein, leaving the apo receptor -
 * still counts as the leg it was run in.
 */
export function legOf(edge: TransformationViz, registry: RegistryIndex): string {
  const types = new Set<string>();
  for (const key of [edge.stateA, edge.stateB]) {
    const system = key === undefined ? null : lookupOfType<ChemicalSystemViz>(registry, key, "ChemicalSystemViz");
    if (!system) continue;
    for (const type of componentTypes(system, registry)) types.add(type);
  }
  return [...types].sort().join(" + ");
}

/**
 * Index a network's legs once.
 *
 * Simplest first, by how many kinds of component a leg is made of and then
 * alphabetically: a vacuum leg before a solvent leg before a complex one, which
 * is the order people name them in. Not the order the payload lists them in -
 * a network's transformations are sorted by gufe key, so which leg came first
 * there is an accident, and it would decide the legend, the filter and which leg
 * a box opens on.
 */
export function legIndex(edges: readonly TransformationViz[], registry: RegistryIndex): LegIndex {
  const found = edges.map((edge) => legOf(edge, registry));
  const signatures = [...new Set(found)].sort(
    (a, b) => a.split(" + ").length - b.split(" + ").length || a.localeCompare(b),
  );
  const at = new Map(signatures.map((signature, index) => [signature, index]));
  return { signatures, names: legNames(signatures), ofEdge: found.map((signature) => at.get(signature)!) };
}

/** One box on the canvas: a ligand, and every system of the network that carries it. */
export interface SystemGroup {
  /**
   * What the canvas, the menu and the selection address this box by.
   *
   * Its first system's key rather than a key made up for the group: every key
   * on the canvas is then one the payload listed, so a copied selection names
   * things that resolve and nothing synthetic can reach a detail pane.
   */
  "gufe-key": GufeKey;
  /** What the box is called: the ligand, where it stands for more than one system. */
  name?: string;
  /** The systems it stands for, in leg order. Never empty. */
  systems: ChemicalSystemViz[];
  /** What to call each of those, one per system. See `legLabelsFor`. */
  legs: string[];
}

/** The small molecules a system carries, by key, sorted and without repeats. */
function ligandKeys(system: ChemicalSystemViz, registry: RegistryIndex): GufeKey[] {
  const keys = Object.values(system.components ?? {}).filter((key) =>
    lookupOfType<SmallMoleculeComponentViz>(registry, key, "SmallMoleculeComponentViz"),
  );
  return [...new Set(keys)].sort();
}

/**
 * What to call each of a set of things that differ only by leg.
 *
 * The systems of one box and the transformations on one line are both that: a
 * handful of objects whose whole difference is which leg they belong to, and the
 * leg is the short word for each. Where two of them share a word - the same
 * ligand solvated twice under different settings, two mappings run in the same
 * leg between the same ligands - the leg cannot tell them apart, and their own
 * names are what is left.
 */
export function tabLabels(signatures: readonly string[], fallbacks: readonly string[]): string[] {
  const names = legNames(signatures);
  const seen = new Map<string, number>();
  for (const name of names) seen.set(name, (seen.get(name) ?? 0) + 1);
  return names.map((name, index) => (seen.get(name)! > 1 ? fallbacks[index] : name));
}

/** What one box calls each of the systems in it. */
export function legLabelsFor(systems: readonly ChemicalSystemViz[], registry: RegistryIndex): string[] {
  return tabLabels(
    systems.map((system) => compositionOf(system, registry)),
    systems.map((system) => entryLabel(system)),
  );
}

/**
 * The name shared by a set of names, or nothing where they share none.
 *
 * A campaign names the two systems of a ligand, and the two transformations of a
 * mapping, for the thing itself and then for the leg - `lig_ejm_31_solvent`
 * beside `lig_ejm_31_complex` - so what they have in common is usually the name
 * wanted, with the leg cut off. Trimmed of the punctuation the leg was joined
 * on, and only where enough is left to be a name: a pair with nothing in common
 * must not be labelled by their first letter.
 *
 * The opening bracket is in that punctuation because a campaign that writes its
 * legs as `lig_ejm_31 to lig_ejm_46 (solvent)` shares everything up to the
 * bracket, and a row that read `lig_ejm_31 to lig_ejm_46 (` is a name that looks
 * truncated by a bug.
 */
export function sharedName(names: readonly string[]): string {
  let shared = names[0] ?? "";
  for (const name of names.slice(1)) {
    let i = 0;
    while (i < shared.length && i < name.length && shared[i] === name[i]) i++;
    shared = shared.slice(0, i);
  }
  shared = shared.replace(/[\s_\-.:,;([{]+$/, "");
  return shared.length >= 3 ? shared : "";
}

/** What a box is called: the ligand it carries, or what its systems' names share. */
function groupName(systems: readonly ChemicalSystemViz[], registry: RegistryIndex): string | undefined {
  if (systems.length === 1) return systems[0].name;
  const ligands = ligandKeys(systems[0], registry);
  if (ligands.length === 1) {
    const ligand = lookup(registry, ligands[0]);
    if (ligand) return entryLabel(ligand);
  }
  return sharedName(systems.map((system) => entryLabel(system))) || systems[0].name;
}

/**
 * Collapse a network's systems into one box per ligand.
 *
 * The key is the set of small-molecule keys, and nothing else: a campaign's two
 * systems for one ligand hold the very same `SmallMoleculeComponent`, so they
 * key alike however they are named and whatever else is in them. A system with
 * no small molecule in it - an apo receptor, a solvent-only reference state -
 * keys on itself and so stays a box of its own, which is what keeps an absolute
 * network the star it is.
 *
 * `rankOf` puts the systems of a box in leg order, so that every box lists its
 * legs the way the legend does rather than the way the payload happened to.
 * Boxes themselves keep the payload's order.
 */
export function groupSystems(
  systems: readonly ChemicalSystemViz[],
  registry: RegistryIndex,
  rankOf: (system: ChemicalSystemViz) => number,
): SystemGroup[] {
  const held = new Map<string, ChemicalSystemViz[]>();
  const order: string[] = [];
  for (const system of systems) {
    const ligands = ligandKeys(system, registry);
    const key = ligands.length ? ligands.join("+") : system["gufe-key"];
    const mine = held.get(key);
    if (mine) {
      mine.push(system);
      continue;
    }
    held.set(key, [system]);
    order.push(key);
  }

  return order.map((key) => {
    const mine = held.get(key)!;
    const sorted = mine
      .map((system, index) => ({ system, index, rank: rankOf(system) }))
      .sort((a, b) => a.rank - b.rank || a.index - b.index)
      .map(({ system }) => system);
    return {
      "gufe-key": sorted[0]["gufe-key"],
      name: groupName(sorted, registry),
      systems: sorted,
      legs: legLabelsFor(sorted, registry),
    };
  });
}

/**
 * A box as one chemical system: every component of every leg, once.
 *
 * The pane draws a `ChemicalSystemViz`, and a box is several of them. Choosing
 * between them was a row of tabs over a list that was mostly the same list
 * twice - a campaign's two legs share their ligand and their solvent and differ
 * by the protein - so what the tabs cost was a click for one component the
 * reader could have been shown outright.
 *
 * So the components are merged, by the label the payload gives them. A label
 * naming the same component in every leg is one entry, which is the ligand and
 * the solvent of an ordinary campaign. A label naming *different* components in
 * different legs is not one thing, and each of them gets a row of its own with
 * its leg after the label: a list with one name against two different molecules
 * is the only thing worse than a tab.
 *
 * A box standing for a single system is that system, untouched. What comes back
 * for a box standing for several is the box rather than any one of its systems -
 * keyed as the box is, so it still names something the payload holds, and named
 * for the ligand rather than for whichever leg that key came from.
 */
export function mergedSystem(node: SystemGroup): ChemicalSystemViz {
  if (node.systems.length === 1) return node.systems[0];

  const components: Record<string, GufeKey> = {};
  /** Which component each label has been written out for, and under what name. */
  const taken = new Map<string, { key: GufeKey; at: number }>();
  node.systems.forEach((system, at) => {
    for (const [label, key] of Object.entries(system.components ?? {})) {
      const held = taken.get(label);
      if (held === undefined) {
        taken.set(label, { key, at });
        components[label] = key;
        continue;
      }
      if (held.key === key) continue;
      // The same label over two different components. Neither of them is "the"
      // one, so both are said with their leg - including the one already
      // written out under the bare label, which is moved rather than left to
      // stand for both.
      if (label in components) {
        components[`${label} (${node.legs[held.at]})`] = held.key;
        delete components[label];
      }
      components[`${label} (${node.legs[at]})`] = key;
    }
  });

  return {
    type: "ChemicalSystemViz",
    "gufe-key": node["gufe-key"],
    name: entryLabel(node),
    components,
  };
}
