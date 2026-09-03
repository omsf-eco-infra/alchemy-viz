/**
 * Test setup, run before every file.
 *
 * Views remember their controls in `localStorage`, which is exactly what makes
 * them worth having and exactly what makes tests bleed into each other: a search
 * box left with a query in one test filters every ligand out of the next, and
 * the failure surfaces somewhere unrelated. Clearing between tests is not
 * optional once anything persists.
 *
 * The remembered cameras are the same problem in a different store: a structure
 * left rotated in one test would open rotated in the next, and a view that
 * restores a camera does not frame the scene, so the framing a test asserts
 * would simply not happen.
 */

import { beforeEach } from "vitest";
import { forgetCameras } from "../src/shared/protein-scene.js";
import { resetSettings } from "../src/shared/settings.js";

beforeEach(() => {
  resetSettings();
  forgetCameras();
});
