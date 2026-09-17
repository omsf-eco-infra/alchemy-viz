/**
 * What the two graph canvases agree about: how much is drawn at a given zoom,
 * and how something out of focus is drawn.
 *
 * Both network views run a ladder of detail levels, closest zoom first, and both
 * looked the level up with the same two lines. The *ladders* are theirs - a
 * ligand network has three levels and cares about discs, captions and initials;
 * an alchemical one has two and cares only whether a structure is drawn - so
 * what is shared is the lookup, not the rungs.
 *
 * Each view keeps exporting its own `ZOOM_LEVELS` and `levelAt`, because those
 * are what its tests reason about and what a reader looking at one view wants to
 * find in it.
 */

/** The one thing every rung of every ladder has: the lowest zoom it covers. */
export interface ZoomLevel {
  id: string;
  from: number;
}

/**
 * The rung a zoom falls on.
 *
 * `levels` must run from the closest zoom down, with the last one at `from: 0`
 * so that every zoom is covered; the fallback is there for a ladder that forgot,
 * which would otherwise draw nothing at all rather than draw coarsely.
 */
export function levelAt<T extends ZoomLevel>(levels: readonly T[], scale: number): T {
  return levels.find((level) => scale >= level.from) ?? levels[levels.length - 1];
}

/**
 * The rung below a given one - what a node falls back to when its own level
 * cannot be drawn. The bottom rung stays put, because there is nothing under it.
 */
export function levelUnder<T extends ZoomLevel>(levels: readonly T[], level: T): T {
  return levels[Math.min(levels.indexOf(level) + 1, levels.length - 1)];
}

/**
 * How far what a filter, a search or a selection left out is faded, rather than
 * removed.
 *
 * Dimmed and not hidden: seeing what is *not* in the answer is half of reading a
 * filter, and removing it destroys the thing a network is for, which is the
 * shape its nodes sit in. Leaving it at half strength answers neither question,
 * because the eye cannot then pick the lit ones out.
 *
 * The two numbers differ because an edge is a thin line and a node is a filled
 * shape - equal opacities do not read as equally faded.
 */
export const DIM = { node: 0.12, edge: 0.06 };
