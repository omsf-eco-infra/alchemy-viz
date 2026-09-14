/**
 * The machinery both graph canvases run on.
 *
 * Each of these encodes something the two views had found separately and could
 * have lost separately, and each of them is invisible when it works: a paint
 * that was dropped leaves nothing behind, a structure that was not retried costs
 * nothing, a cull that culled shows the same picture as one that did not. So
 * they are asserted here rather than through a view, where the only symptom
 * would be a slow page or a stack of graphs nobody can see the bottom of.
 */

import { describe, expect, it } from "vitest";

import { Depictions, visibleAt, CULL_MARGIN } from "../src/shared/network/canvas.js";
import { generations } from "../src/shared/element.js";

describe("generations", () => {
  it("keeps only the newest work", () => {
    // The bug this exists for: a force layout is relaxed off the next turn, so a
    // resize can start a second draw while the first is still waiting to paint.
    // Both used to finish and both used to append a graph.
    const eras = generations();
    const first = eras.start();
    expect(first()).toBe(true);
    const second = eras.start();
    expect(first()).toBe(false);
    expect(second()).toBe(true);
  });

  it("abandons everything once stopped", () => {
    // A view being torn down needs no second flag beside the counter, which is
    // what both views used to carry as `alive`.
    const eras = generations();
    const mine = eras.start();
    eras.stop();
    expect(mine()).toBe(false);
    // And work started after a stop is dead on arrival rather than alive again.
    expect(eras.start()()).toBe(false);
  });
});

describe("Depictions", () => {
  it("draws each structure once and never retries a refusal", () => {
    const drawn = new Depictions();
    expect(drawn.wants(0)).toBe(true);

    drawn.drew(0);
    expect(drawn.wants(0)).toBe(false);
    expect(drawn.has(0)).toBe(true);

    // A molecule RDKit cannot read will not read on the next pan either, and a
    // node that keeps asking pays for the attempt every time the view moves.
    drawn.refused(1);
    expect(drawn.wants(1)).toBe(false);
    expect(drawn.has(1)).toBe(false);
  });

  it("drops only the structures whose marking has changed", () => {
    // Typing a SMARTS pattern usually changes a handful of nodes. Redrawing
    // every one of them would make typing cost more than drawing the network.
    const drawn = new Depictions();
    drawn.drew(0, "1,2");
    drawn.drew(1, "");
    drawn.drew(2, "4");

    const dropped: number[] = [];
    const marking: Record<number, string> = { 0: "1,2", 1: "", 2: "9" };
    drawn.forget((i) => marking[i], (i) => dropped.push(i));

    expect(dropped).toEqual([2]);
    expect(drawn.has(0)).toBe(true);
    expect(drawn.has(2)).toBe(false);
    // Dropped, so worth drawing again - unlike a refusal.
    expect(drawn.wants(2)).toBe(true);
  });
});

describe("visibleAt", () => {
  const viewport = { width: 800, height: 600 };
  const identity = { scale: 1, tx: 0, ty: 0 };

  it("takes what is on screen and leaves what is far off it", () => {
    const nodes = [
      { x: 400, y: 300 },
      { x: 5000, y: 300 },
      { x: -5000, y: 300 },
    ];
    expect(visibleAt(nodes, identity, viewport, () => true)).toEqual([0]);
  });

  it("keeps a band outside the viewport ready, so panning does not tear", () => {
    // Built to the viewport exactly, the node entering from the edge would have
    // no depiction until the frame after it is already visible.
    const inside = [{ x: -CULL_MARGIN + 10, y: 300 }];
    const outside = [{ x: -CULL_MARGIN - 10, y: 300 }];
    expect(visibleAt(inside, identity, viewport, () => true)).toEqual([0]);
    expect(visibleAt(outside, identity, viewport, () => true)).toEqual([]);
  });

  it("reads positions through the transform rather than raw", () => {
    // A node well outside the viewport in scene coordinates is on screen once
    // the camera has panned to it, which is the whole reason the cull runs again
    // on every move.
    const nodes = [{ x: 4000, y: 300 }];
    expect(visibleAt(nodes, identity, viewport, () => true)).toEqual([]);
    expect(visibleAt(nodes, { scale: 1, tx: -3700, ty: 0 }, viewport, () => true)).toEqual([0]);
  });

  it("asks before offering, so a drawn or refused node is never rebuilt", () => {
    const nodes = [
      { x: 100, y: 100 },
      { x: 200, y: 200 },
    ];
    expect(visibleAt(nodes, identity, viewport, (i) => i === 1)).toEqual([1]);
  });
});
