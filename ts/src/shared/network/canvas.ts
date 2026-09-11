/**
 * What the two graph canvases do identically, rather than what they draw.
 *
 * `ligand-network.ts` and `alchemical-network.ts` draw different pictures - a
 * disc with a structure in it against a labelled box, a score ramp against a
 * composition palette - and trying to make one function draw both would be
 * parameterising by everything that differs. What is *not* different is the
 * machinery around the drawing, and that is what is here:
 *
 *   `generations`    which redraw is the current one
 *   `draggableNodes` dragging a node, and telling a drag from a click
 *   `Depictions`     which structures are drawn, which failed, which are stale
 *   `visibleAt`      the nodes on screen, plus a margin so panning does not tear
 *   `detailPane`     one `<gufe-view>`, re-pointed rather than rebuilt
 *
 * Each of those carries a rule that is invisible when it holds and expensive
 * when it does not: a paint whose era has passed must be dropped, a pinch must
 * abandon a drag in progress, a molecule RDKit cannot draw must not be retried
 * on every pan, a re-pointed detail view must not be re-parented. One copy of
 * each, so there is one place for each rule to be true.
 *
 * This is the same line `protein-scene.ts` draws for the two 3D views: the
 * chrome and the lifecycle are shared, and what goes in the scene stays with the
 * view that knows what its nodes look like.
 */

import { el } from "../dom.js";
import { centredMessage } from "../panels.js";
import { CLICK_SLOP, type Camera } from "../camera.js";

// --- which redraw is the current one ---------------------------------------

/**
 * A generation counter, for work that finishes after it may have been
 * superseded.
 *
 * Both graph views relax a force layout off the main thread's next turn, so a
 * second redraw - a resize, the menu opening - can start while the first is
 * still waiting to paint. Both would then append a scene, and the canvas would
 * end up holding a stack of them: the reader sees the oldest, while the halos
 * and the selection are wired to the newest, which is off the bottom of a pane
 * that does not scroll. That is not a hypothetical; it is what a network drawn
 * three times looked like.
 *
 * `start()` hands back the question "is this still the current one", which is
 * also false once `stop()` has been called - so a view being torn down needs no
 * second flag beside the counter.
 */
export function generations(): { start(): () => boolean; stop(): void } {
  let era = 0;
  let running = true;
  return {
    start() {
      const mine = ++era;
      return () => running && mine === era;
    },
    stop() {
      running = false;
      era++;
    },
  };
}

// --- dragging a node -------------------------------------------------------

/** The least a node has to be to be dragged: a position, and a pin to hold it. */
export interface DraggableNode {
  x: number;
  y: number;
  fx?: number;
  fy?: number;
}

export interface DragSpec {
  /**
   * The node moved. Redraw it and whatever hangs off it.
   *
   * Given the index because the alchemical network rewrites only the edges
   * incident on that one node - a two-hundred-system campaign has 594 of them,
   * and touching every line on every pointer move is the difference between a
   * drag that follows the hand and one that does not.
   */
  moved(index: number): void;
  /** The node was clicked rather than dragged. */
  clicked(index: number): void;
}

/**
 * Make every node draggable, and tell a drag from a click.
 *
 * A node is both a thing to drag and a thing to click, and the pointer does not
 * say which was meant. Anything that moved further than a hand wobble was a
 * drag, and the click that follows it is not a selection - otherwise every
 * reposition would also change what the detail pane is showing.
 *
 * The click is decided here rather than by the camera's `wasPan`. A node
 * swallows its own `pointerdown` so the background does not pan under it, and a
 * camera that never saw the press cannot answer for it.
 *
 * A force layout packs nodes as tightly as the forces allow, so edges end up
 * crossing and running alongside each other and the one a reader wants is under
 * two others. Pulling a node aside is how you get at it, which is why the same
 * press has to be able to mean both things.
 */
export function draggableNodes<N extends DraggableNode>(
  groups: readonly SVGGElement[],
  nodes: readonly N[],
  camera: Pick<Camera, "transform" | "gesturing">,
  spec: DragSpec,
): void {
  groups.forEach((group, index) => {
    let from: { x: number; y: number } | null = null;
    let moved = false;

    group.addEventListener("pointerdown", (event: PointerEvent) => {
      event.stopPropagation();
      const { scale } = camera.transform();
      from = { x: event.clientX - nodes[index].x * scale, y: event.clientY - nodes[index].y * scale };
      moved = false;
      group.setPointerCapture(event.pointerId);
    });

    group.addEventListener("pointermove", (event: PointerEvent) => {
      if (!from) return;
      // A second finger turns the press into a pinch, and a node that follows
      // one of the two fingers through a zoom is not what either hand meant. The
      // drag is abandoned rather than paused: the gesture owns the canvas from
      // here, and the node keeps where it had got to.
      if (camera.gesturing()) {
        from = null;
        moved = true;
        return;
      }
      const { scale } = camera.transform();
      const x = (event.clientX - from.x) / scale;
      const y = (event.clientY - from.y) / scale;
      if (Math.hypot(x - nodes[index].x, y - nodes[index].y) * scale > CLICK_SLOP) moved = true;
      // Pinned as well as placed: `fx`/`fy` is what holds a node where the
      // reader put it through the next layout.
      nodes[index].x = nodes[index].fx = x;
      nodes[index].y = nodes[index].fy = y;
      spec.moved(index);
    });

    const release = (): void => {
      from = null;
    };
    group.addEventListener("pointerup", release);
    group.addEventListener("pointercancel", release);

    group.addEventListener("click", (event: MouseEvent) => {
      event.stopPropagation();
      if (!moved) spec.clicked(index);
    });
  });
}

// --- which structures are drawn --------------------------------------------

/**
 * The bookkeeping behind drawing a structure inside a node.
 *
 * Three facts, and each of the three is load-bearing:
 *
 *   drawn   so a structure costs one RDKit call ever, not one per pan
 *   failed  so a molecule RDKit cannot read is not retried on every frame - it
 *           will not draw on the next pan either, and a node that keeps asking
 *           pays for the attempt every time the view moves
 *   against what the structure was drawn *for*, so that a new SMARTS pattern
 *           redraws the handful of nodes whose highlighting it changed rather
 *           than every node on the canvas
 *
 * Only the ligand network uses the third today; the alchemical one passes the
 * empty string and so never invalidates. It is here rather than there because
 * the first two are meaningless without it: "is this drawn" and "is this drawn
 * against the right thing" are the same question asked once.
 */
export class Depictions {
  #drawn = new Set<number>();
  #failed = new Set<number>();
  #against: string[] = [];

  /** Whether a structure is on screen for this node. */
  has(index: number): boolean {
    return this.#drawn.has(index);
  }

  /** Whether it is worth trying: not drawn, and not already refused. */
  wants(index: number): boolean {
    return !this.#drawn.has(index) && !this.#failed.has(index);
  }

  drew(index: number, against = ""): void {
    this.#drawn.add(index);
    this.#against[index] = against;
  }

  refused(index: number): void {
    this.#failed.add(index);
  }

  /** How many are drawn - what a test asks to know a cull actually culled. */
  count(): number {
    return this.#drawn.size;
  }

  /**
   * Drop the structures `keyOf` no longer agrees with, and only those.
   *
   * A structure is expensive and a new pattern usually changes a handful of
   * nodes, so redrawing every one of them would make typing a pattern cost more
   * than drawing the network did. A dropped structure is rebuilt by the next
   * pass, and only if it is on screen.
   */
  forget(keyOf: (index: number) => string, drop: (index: number) => void): void {
    for (const index of [...this.#drawn]) {
      if (this.#against[index] === keyOf(index)) continue;
      drop(index);
      this.#drawn.delete(index);
    }
  }
}

/**
 * How far outside the viewport a structure is still built, in screen pixels.
 *
 * Structures are the expensive part of either canvas - an RDKit call and an SVG
 * subtree each - so they are built only for what is on screen. Built to the
 * viewport exactly, a pan would tear: the node entering from the edge has no
 * depiction until the frame after it is already visible. This is the band that
 * is kept ready.
 */
export const CULL_MARGIN = 200;

/**
 * The nodes on screen at this transform that `wants` still says yes to.
 *
 * This and the once-each rule above are what a two-hundred-node campaign costs
 * instead of two hundred RDKit calls before the first frame.
 */
export function visibleAt<N extends { x: number; y: number }>(
  nodes: readonly N[],
  transform: { scale: number; tx: number; ty: number },
  viewport: { width: number; height: number },
  wants: (index: number) => boolean,
): number[] {
  const { scale, tx, ty } = transform;
  const found: number[] = [];
  nodes.forEach((node, index) => {
    if (!wants(index)) return;
    const x = node.x * scale + tx;
    const y = node.y * scale + ty;
    if (x < -CULL_MARGIN || y < -CULL_MARGIN || x > viewport.width + CULL_MARGIN || y > viewport.height + CULL_MARGIN) {
      return;
    }
    found.push(index);
  });
  return found;
}

// --- the pane beside the canvas --------------------------------------------

export interface DetailPane {
  /** Point the pane at a payload. */
  show(payload: unknown): void;
  /** Put a sentence there instead of a view. */
  message(text: string): void;
  cleanup(): void;
}

/**
 * The pane beside a graph: whatever is selected, drawn by the view that draws
 * that kind of thing.
 *
 * One `<gufe-view>`, created once and re-pointed. Two reasons the nested
 * dispatcher is better than naming the elements here: clicking along a row of
 * edges is then an update rather than a rebuild, so a mapping's own 3D viewers
 * are not torn down and rebuilt on every click; and which element draws a
 * payload is a question `VIEW_TAGS` already answers, so naming
 * `gufe-atom-mapping` and `gufe-small-molecule` at a call site would be a second
 * copy of the dispatch table that could fall out of step with it.
 *
 * What each view keeps for itself is cutting its own selection loose into a
 * payload that stands on its own - `mappingPayloadFor`, `systemPayloadFor`,
 * `transformationPayloadFor` - because only the view knows what it is holding.
 */
export function detailPane(host: HTMLElement): DetailPane {
  const body = el("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
  host.appendChild(body);

  const child = document.createElement("gufe-view") as HTMLElement & { payload: unknown };
  child.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;";

  return {
    show(payload: unknown): void {
      child.payload = payload;
      // Only when it is not already there: `replaceChildren` with what is
      // already mounted would disconnect and reconnect it, which for these
      // elements means tearing down a viewer and building it again.
      if (child.parentNode !== body) body.replaceChildren(child);
    },
    message(text: string): void {
      body.replaceChildren(centredMessage(text));
    },
    // Removing the nested view fires its own `disconnectedCallback`, which is
    // where whatever it mounted releases its viewers.
    cleanup(): void {
      child.remove();
    },
  };
}
