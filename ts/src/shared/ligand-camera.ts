/**
 * How the reader is holding a ligand, carried from one ligand to the next.
 *
 * `protein-scene.ts` keeps a camera per structure, because a campaign is one
 * protein drawn over and over and the reader wants the same protein back the
 * way they left it. Ligands are the opposite case: clicking along a network is
 * a *different* molecule every time, and there is no per-molecule camera to
 * come back to. What carries over is not the camera but the pose - which way up
 * the reader has turned things, and how close in they are - and applying that
 * pose to a freshly framed molecule is what makes a run of ligands comparable
 * instead of a run of unrelated first impressions.
 *
 * So this stores two things and deliberately not a third:
 *
 *   rotation   the camera's quaternion, which says nothing about the molecule
 *              and so means the same thing on any of them
 *   zoom       as a multiple of the framing the view opened on, never as a
 *              camera distance: a distance that fits a 20-atom fragment buries
 *              a 60-atom ligand, whereas "a third closer than the fit" is the
 *              same instruction to both
 *
 *   centring   is *not* kept. Where a molecule sits in its own coordinates is
 *              its own business - two ligands from different files can be a
 *              hundred angstroms apart - so every scene centres itself and only
 *              the pose is restored on top.
 *
 * One memory for every ligand view rather than one each, because the whole
 * point is that it crosses between them: a pair opened from an edge of a
 * network and a single ligand opened from a node are the same reader turning
 * the same kind of object.
 *
 * Like the structure cameras, this lasts the page rather than the installation
 * and is not in `settings.ts`. It is where a reader has got to, not a
 * preference about how they read, and `Reset` is still the way back to the
 * framing the view would have opened on.
 */

import type { ThreeDmolViewer } from "./engines.js";
import type { BoundedZoom } from "./interact.js";

/** The camera's quaternion, in the order `getView` reports it. */
type Rotation = [number, number, number, number];

interface LigandPose {
  rotation: Rotation;
  /** Zoom as a multiple of the opening framing - `BoundedZoom.level()`. */
  zoom: number;
}

let pose: LigandPose | null = null;

/** Forget the pose. For tests, which must not bleed into each other. */
export function forgetLigandPose(): void {
  pose = null;
}

/**
 * The rotation out of a `getView` reading, or null if there is not one in it.
 *
 * Defensive for the same reason `protein-scene.ts` is: a viewer torn down under
 * us, or a build of 3Dmol answering something else, is a reason to keep no pose
 * rather than to store a broken one and apply it to every ligand after.
 */
function rotationOf(viewer: ThreeDmolViewer): Rotation | null {
  const view = viewer.getView?.();
  if (!Array.isArray(view) || view.length < 8) return null;
  const rotation = view.slice(4, 8);
  return rotation.every((n) => typeof n === "number" && Number.isFinite(n)) ? (rotation as Rotation) : null;
}

/**
 * Keep how this viewer is being held, for the next ligand drawn anywhere.
 *
 * `zoom` is the view's own bounded zoom, which already measures its level
 * against the framing the scene opened on; without one, the pose keeps whatever
 * zoom it had and records the rotation alone.
 */
export function rememberLigandPose(viewer: ThreeDmolViewer | null, zoom: BoundedZoom | null): void {
  if (!viewer) return;
  const rotation = rotationOf(viewer);
  if (!rotation) return;
  const level = zoom?.level();
  pose = {
    rotation,
    zoom: typeof level === "number" && Number.isFinite(level) && level > 0 ? level : (pose?.zoom ?? 1),
  };
}

/**
 * Put a freshly framed viewer into the pose the last ligand was left in.
 *
 * Call it after the scene is framed and after its `BoundedZoom` exists: the
 * zoom is applied through that rather than through the camera, so it lands
 * inside the same bounds a wheel would and the view's `level()` afterwards
 * reports where the reader actually is. The centring `zoomTo` chose is kept -
 * only the rotation is overwritten.
 *
 * Returns whether anything was restored, so a caller can tell "opened as the
 * reader left it" from "framed fresh".
 */
export function restoreLigandPose(viewer: ThreeDmolViewer | null, zoom: BoundedZoom | null): boolean {
  if (!pose || !viewer) return false;
  const view = viewer.getView?.();
  if (!Array.isArray(view) || view.length < 8) return false;
  viewer.setView([view[0], view[1], view[2], view[3], ...pose.rotation]);
  // A pose recorded at the opening framing is already what this scene has.
  if (zoom && Math.abs(pose.zoom - 1) > 1e-9) zoom.zoomBy(pose.zoom);
  viewer.render();
  return true;
}
