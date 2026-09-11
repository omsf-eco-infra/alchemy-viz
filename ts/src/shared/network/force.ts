/**
 * Driving a d3 force layout, for the two views that draw a graph.
 *
 * ## What is shared and what is not
 *
 * The two network views used to each carry their own copy of this, with a note
 * on one of them saying sharing was impossible because "the two configure
 * different forces at different scales, and a shared wrapper would have to be
 * parameterized by everything that differs, which is all of it."
 *
 * That is true of the *forces* and false of everything around them. What the two
 * copies had identical, to the line, was: the typings for a module that ships
 * none we can rely on; the guard that turns an unreachable d3 into `false`
 * rather than a throw; the tick count derived from d3's own alpha schedule; and
 * the decision to run the simulation to completion and draw once. So that is
 * what lives here, and the force set stays in the view that knows what its nodes
 * are shaped like - `spec.forces` is where "all of it" still differs.
 *
 * ## Why the typings are generic
 *
 * d3 arrives as a runtime import or pre-seeded, so it is described structurally
 * rather than vendored. Every force setter returns the force, which is what
 * makes one interface enough. The node and link types are parameters because a
 * ligand network's link carries a mapping score that a transformation's does
 * not, and `id`/`distance` are typed against them.
 */

import { loadD3 } from "../engines.js";

/**
 * One force, as a chain of setters. Not every force answers every one of these -
 * `forceCenter` has no `iterations` - but d3 hands back plain objects and the
 * only caller is the view that knows which it is configuring.
 */
export interface D3Force<N, L> {
  id(accessor: (node: N) => string): D3Force<N, L>;
  distance(value: number | ((link: L) => number)): D3Force<N, L>;
  strength(value: number): D3Force<N, L>;
  distanceMin(value: number): D3Force<N, L>;
  distanceMax(value: number): D3Force<N, L>;
  iterations(value: number): D3Force<N, L>;
}

export interface D3Simulation<N, L> {
  force(name: string, force: D3Force<N, L>): D3Simulation<N, L>;
  stop(): D3Simulation<N, L>;
  tick(): D3Simulation<N, L>;
  alphaMin(): number;
  alphaDecay(): number;
}

export interface D3ForceModule<N, L> {
  forceSimulation(nodes: N[]): D3Simulation<N, L>;
  forceLink(links: L[]): D3Force<N, L>;
  forceManyBody(): D3Force<N, L>;
  forceCenter(x: number, y: number): D3Force<N, L>;
  forceCollide(radius: number): D3Force<N, L>;
  forceX(x: number): D3Force<N, L>;
  forceY(y: number): D3Force<N, L>;
}

export interface RelaxSpec<N, L> {
  /** Laid out in place. d3 stamps its own bookkeeping on these; see `layout.ts`. */
  nodes: N[];
  /**
   * d3-force rewrites link endpoints in place, so these must be the view's own
   * objects rather than the payload's edges.
   */
  links: L[];
  /**
   * Every force, named. Called once, with the module so a view can build the
   * forces it wants and no others.
   */
  forces(d3: D3ForceModule<N, L>, links: L[]): Iterable<readonly [string, D3Force<N, L>]>;
  /**
   * How many times d3's own settling schedule is run.
   *
   * Both views use 2: one pass leaves a graph that is still visibly drifting
   * apart at the moment it is drawn.
   */
  tickMultiplier: number;
}

/**
 * Relax `spec.nodes` in place, and answer whether it happened.
 *
 * `false` means d3 could not be reached - the offline case - which each caller
 * turns into a fixed layout plus a banner rather than an error. Nothing is
 * thrown: a page that cannot fetch a CDN should still draw the network.
 *
 * The simulation is run to completion here and the result drawn once by the
 * caller, rather than animated. A DOM write per node per frame is what melts a
 * browser on a network with a few hundred nodes.
 */
export async function relax<N, L>(spec: RelaxSpec<N, L>): Promise<boolean> {
  let d3: D3ForceModule<N, L>;
  try {
    d3 = (await loadD3()) as D3ForceModule<N, L>;
    if (typeof d3?.forceSimulation !== "function") return false;
  } catch {
    return false;
  }

  const simulation = d3.forceSimulation(spec.nodes);
  for (const [name, force] of spec.forces(d3, spec.links)) simulation.force(name, force);
  simulation.stop();

  const ticks = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
  for (let i = 0; i < ticks * spec.tickMultiplier; i++) simulation.tick();
  return true;
}
