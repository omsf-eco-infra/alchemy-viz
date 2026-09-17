/**
 * The boxes a mapping is drawn in, and the life of the viewers inside them.
 *
 * `<gufe-atom-mapping>` has six ways of looking at one pair of ligands, and the
 * modes differ only in what they put on the stage: how many boxes, what goes in
 * each, and where the camera ends up. Everything around that is the same for all
 * six - build a box, open a viewer in it, frame it, hand it a bounded wheel,
 * remember the pose, release every WebGL context before the next mode asks for
 * one - and that is what lives here.
 *
 * Keeping it out of the modes is what lets each of them be a function of
 * `(stage, pair)`: a mode can then be read without reading the lifecycle, and
 * the lifecycle without scrolling past six modes.
 *
 * This is `protein-scene.ts` for the mapping view: the same trade, and the same
 * line drawn in the same place. What is shared is the chrome and the teardown;
 * what stays with the caller is the models and the camera.
 */

import { el } from "../shared/dom.js";
import { releaseViewer, ThreeDmol, type ThreeDmolViewer } from "../shared/engines.js";
import { viewerInteraction, type BoundedZoom, type Interaction } from "../shared/interact.js";
import { rememberLigandPose, restoreLigandPose } from "../shared/ligand-camera.js";
import { buildSDF, type Molecule } from "../shared/sdf.js";
import { PANE_LABEL_OVERLAY, SURFACE } from "../shared/style.js";

/** One pane of the stage: where a viewer draws, and what is bounding its wheel. */
export interface Box {
  container: HTMLDivElement;
  viewer: ThreeDmolViewer | null;
  interaction: (BoundedZoom & Interaction) | null;
}

export interface MappingStage {
  /** Where a mode that draws its own DOM rather than a viewer appends it. */
  readonly element: HTMLDivElement;
  /** Whether a box carries the name of what is in it. See `HIDE_NAME_ATTRIBUTE`. */
  readonly named: boolean;
  /**
   * Release every viewer and empty the stage.
   *
   * Called before each mode builds, which is what keeps the number of live WebGL
   * contexts bounded as someone clicks along the switcher.
   */
  clear(): void;
  /** A new pane, appended, named where names are wanted. */
  box(label: string): Box;
  /** Open a viewer on `box` holding `models`, in file order. */
  open(box: Box, models: readonly Molecule[]): ThreeDmolViewer;
  /**
   * Hand a box its wheel and its zoom, once the mode has finished framing it.
   *
   * Deliberately not part of `open`: a bounded zoom measures its limits from the
   * framing a view opens with, and that framing is not settled until the mode
   * has called `zoomTo` and whatever follows it. Attached any earlier and every
   * bound would be a multiple of an arbitrary camera.
   *
   * The rule it brings is the one the other 3D views already follow: a plain
   * scroll moves the page, zooming asks for a click on the canvas first or a
   * modifier, and how far out it can go is bounded in the engine as well as here
   * so a drag or a pinch cannot lose the molecule either.
   */
  settle(box: Box): void;
  /**
   * Hand a box the pose the last ligand was left in, once it is settled, and
   * record this one's when the stage is next cleared.
   *
   * After `settle` rather than before it, so the zoom is applied through the
   * bounds a wheel goes through and measured against this scene's own framing -
   * see `shared/ligand-camera.ts`.
   *
   * Only the modes that draw a ligand in its own frame ask for this. `openfe`
   * lays three copies out across the screen and `lines` turns the camera on
   * purpose so the lift runs across it: restoring a pose over either would undo
   * the arrangement that is the whole point of the mode, and recording one from
   * them would carry that arrangement out to every ligand after.
   */
  pose(box: Box): void;
  /**
   * Keep the boxes now on the stage pointing the same way.
   *
   * Turning one molecule and having the other stay put makes the pair impossible
   * to compare, which is the whole reason both are on screen. The loop stops
   * when the view is torn down; the framejs prototype's runs forever, which is
   * fine in a page that is one app and not in an element that gets removed.
   */
  sync(): void;
  /** Every live viewer redrawn at the element's current size. */
  resize(): void;
  /** Release everything, for good. */
  cleanup(): void;
}

export function mappingStage(host: HTMLElement, named: boolean): MappingStage {
  const element = el("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
  host.appendChild(element);

  let boxes: Box[] = [];
  let syncHandle = 0;
  let alive = true;
  /** Whether what is on screen is a ligand held the way `ligand-camera.ts` means it. */
  let posed = false;

  const clear = (): void => {
    if (syncHandle) cancelAnimationFrame(syncHandle);
    syncHandle = 0;
    // Before anything is torn down. The boxes are kept pointing the same way, so
    // either of them answers for both.
    if (posed) rememberLigandPose(boxes[0]?.viewer ?? null, boxes[0]?.interaction ?? null);
    posed = false;
    for (const box of boxes) {
      box.interaction?.cleanup();
      releaseViewer(box.viewer);
    }
    boxes = [];
    element.replaceChildren();
  };

  return {
    element,
    named,
    clear,

    box(label: string): Box {
      const wrap = el("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;");
      const container = el("div", "flex:1;position:relative;min-height:0;");
      container.dataset.gufeViewer = "";
      wrap.appendChild(container);
      // Over the picture rather than above it: see `PANE_LABEL_OVERLAY`. After
      // the container so it draws on top of the canvas 3Dmol puts there, and
      // only where nothing above has already named these two molecules.
      if (named) wrap.appendChild(el("div", PANE_LABEL_OVERLAY, label));
      element.appendChild(wrap);
      const box: Box = { container, viewer: null, interaction: null };
      boxes.push(box);
      return box;
    },

    open(box: Box, models: readonly Molecule[]): ThreeDmolViewer {
      const viewer = ThreeDmol!.createViewer(box.container, { backgroundColor: SURFACE.viewer() });
      for (const mol of models) viewer.addModel(buildSDF(mol), "sdf");
      box.viewer = viewer;
      return viewer;
    },

    settle(box: Box): void {
      if (box.viewer) box.interaction = viewerInteraction(box.container, box.viewer);
    },

    pose(box: Box): void {
      restoreLigandPose(box.viewer, box.interaction);
      posed = true;
    },

    sync(): void {
      if (boxes.length < 2) return;
      const last = boxes.map(() => "");
      let syncing = false;
      const loop = (): void => {
        if (!alive) return;
        if (!syncing) {
          for (let i = 0; i < boxes.length; i++) {
            const viewer = boxes[i].viewer;
            if (!viewer) continue;
            const current = JSON.stringify(viewer.getView());
            if (current === last[i]) continue;
            syncing = true;
            for (let j = 0; j < boxes.length; j++) {
              if (j !== i && boxes[j].viewer) {
                boxes[j].viewer!.setView(viewer.getView());
                boxes[j].viewer!.render();
              }
              last[j] = current;
            }
            syncing = false;
            break;
          }
        }
        syncHandle = requestAnimationFrame(loop);
      };
      syncHandle = requestAnimationFrame(loop);
    },

    resize(): void {
      for (const box of boxes) {
        if (!box.viewer) continue;
        box.viewer.resize();
        box.viewer.render();
      }
    },

    cleanup(): void {
      alive = false;
      clear();
    },
  };
}
