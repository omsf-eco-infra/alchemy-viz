/**
 * Turning a network payload's gufe keys into the objects a layout can hold, and
 * counting what did not resolve.
 *
 * ## Why this is not the view's job
 *
 * A network payload names its nodes by gufe key and carries the objects those
 * keys refer to once, in the registry. Both network views therefore open with
 * the same thirty lines: resolve every node key, resolve both ends of every
 * edge, and count what was missing at each step.
 *
 * The counting is the part worth sharing carefully. JSON Schema cannot express
 * "this key names an entry that exists", so a *schema-valid* payload can name a
 * ligand that is not in its own registry, and a view has to survive that rather
 * than crash on it. Both views also agreed on how: drop it, count it, and say so
 * on the canvas - because a network that silently drew fewer nodes than it was
 * given is a network nobody can debug. Two copies of that rule is two places for
 * it to stop being true.
 *
 * ## What the layout adds
 *
 * The resolved node *is* the payload object, with `x` and `y` stapled on. Not a
 * copy of some of it: that is what lets a detail pane hand the selected node
 * straight to the view that draws it. `shared/layout.ts` is what takes the
 * layout's fields back off before a node is handed on.
 */

import { lookupOfType, type RegistryEntry, type RegistryIndex } from "../../schema/registry.js";
import type { GufeKey } from "../../schema/types.js";

/** A resolved node: the registry's own object, plus where the layout put it. */
export type Positioned<T> = T & { x: number; y: number };

/** A resolved edge: the payload's own edge, plus its ends and its place in the list. */
export type Linked<E, N> = E & { index: number; from: N; to: N };

export interface ResolvedNetwork<N, E> {
  nodes: N[];
  edges: E[];
  /** Node keys the registry does not hold. */
  unresolved: number;
  /** Edges dropped because an end named a node this network does not contain. */
  dangling: number;
}

export interface ResolveSpec<P, T extends RegistryEntry> {
  registry: RegistryIndex;
  /** The node keys, in the order the payload lists them. */
  keys: readonly GufeKey[];
  /** The `type` a node key must resolve to; anything else counts as unresolved. */
  nodeType: T["type"];
  /** The payload's own edges, before their ends are looked up. */
  edges: readonly P[];
  /** The two keys an edge names. The two payloads spell these differently. */
  ends(edge: P): readonly [GufeKey | undefined, GufeKey | undefined];
}

/**
 * Resolve a network's nodes and edges, keeping the two counts.
 *
 * Node order follows the payload. Edge `index` is the position in the *surviving*
 * list rather than in the payload's, because it is what the canvas and the
 * selection address an edge by and neither knows about the ones that were
 * dropped.
 */
export function resolveNetwork<P, T extends RegistryEntry>(
  spec: ResolveSpec<P, T>,
): ResolvedNetwork<Positioned<T>, Linked<P, Positioned<T>>> {
  const nodes: Positioned<T>[] = [];
  let unresolved = 0;
  for (const key of spec.keys) {
    const entry = lookupOfType<T>(spec.registry, key, spec.nodeType);
    if (!entry) {
      unresolved++;
      continue;
    }
    nodes.push({ ...entry, x: 0, y: 0 });
  }

  const byKey = new Map(nodes.map((node) => [node["gufe-key"], node]));

  const edges: Linked<P, Positioned<T>>[] = [];
  let dangling = 0;
  for (const edge of spec.edges) {
    const [a, b] = spec.ends(edge);
    const from = a === undefined ? undefined : byKey.get(a);
    const to = b === undefined ? undefined : byKey.get(b);
    if (!from || !to) {
      dangling++;
      continue;
    }
    edges.push({ ...edge, index: edges.length, from, to });
  }

  return { nodes, edges, unresolved, dangling };
}
