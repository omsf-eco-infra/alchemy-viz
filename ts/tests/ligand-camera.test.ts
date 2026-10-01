/**
 * The pose carried from one ligand to the next.
 *
 * The structure cameras in `protein-scene.ts` are keyed per structure, because
 * a campaign is one protein drawn over and over. Ligands are never the same
 * molecule twice, so what is worth asserting here is the opposite: that the
 * memory is *not* keyed, that it crosses between the single-molecule view and
 * the pair the mapping view draws, and that what it restores is the pose alone
 * - each molecule still framed on its own scene, only turned to where the
 * reader had the last one.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines, type SeededEnginesResult } from "./helpers.js";

function mount<T extends HTMLElement>(tag: string, payload: unknown): T {
  const node = document.createElement(tag) as T & { payload: unknown };
  document.body.appendChild(node);
  node.payload = payload;
  return node;
}

/** Whatever the switcher offers, by the text on it. */
function mode(node: HTMLElement, label: string): HTMLButtonElement {
  const found = Array.from(node.querySelectorAll("button")).find((b) => b.textContent === label);
  if (!found) throw new Error(`no mode button labelled ${label}`);
  return found;
}

/** A quaternion nothing would arrive at by itself, so a match is the stored one. */
const TURNED: [number, number, number, number] = [0.1, 0.2, 0.3, 0.9];

describe("keeping the pose between ligands", () => {
  let engines: SeededEnginesResult;
  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  /** What a viewer did about its camera, in order. */
  const framings = (index: number): string[] =>
    engines.viewers[index].calls.filter((c) => c === "setView" || c === "zoomTo" || c.startsWith("zoom("));

  it("opens the next ligand turned the way the last one was left", async () => {
    const first = mount("gufe-small-molecule", readExample("small_molecule.json"));
    await flush();
    // Framed fresh, with nothing to restore. The pose starts empty.
    expect(framings(0)).toEqual(["zoomTo"]);

    // A drag and a wheel, both of which 3Dmol handles inside the canvas.
    engines.viewers[0].dragRotate(TURNED);
    engines.viewers[0].dragZoom(2);
    first.remove();

    // A different molecule, so a different scene with a framing of its own.
    mount("gufe-small-molecule", readExample("small_molecule_charged.json"));
    await flush();
    // Framed first and posed after: the molecule is centred on its own scene
    // and then turned, rather than dropped into the last one's camera.
    expect(framings(1)).toEqual(["zoomTo", "setView", "zoom(2)"]);
    expect(engines.viewers[1].rotation()).toEqual(TURNED);
  });

  it("carries the pose between a single ligand and a pair", async () => {
    const single = mount("gufe-small-molecule", readExample("small_molecule.json"));
    await flush();
    engines.viewers[0].dragRotate(TURNED);
    single.remove();

    // The mapping view opens on the plain 3D pair.
    mount("gufe-atom-mapping", readExample("ligand_atom_mapping.json"));
    await flush();

    // Both halves of the pair, because the two are kept pointing the same way
    // and a pose applied to one of them only would be a pair that disagrees.
    const [left, right] = engines.viewers.slice(1);
    expect(left.rotation()).toEqual(TURNED);
    expect(right.rotation()).toEqual(TURNED);
  });

  it("takes the pose back out of the pair, for whatever is opened next", async () => {
    const pair = mount("gufe-atom-mapping", readExample("ligand_atom_mapping.json"));
    await flush();
    engines.viewers[0].dragRotate(TURNED);
    pair.remove();

    mount("gufe-small-molecule", readExample("small_molecule.json"));
    await flush();
    expect(engines.viewers[engines.viewers.length - 1].rotation()).toEqual(TURNED);
  });

  it("leaves the modes that arrange the scene themselves alone", async () => {
    const single = mount("gufe-small-molecule", readExample("small_molecule.json"));
    await flush();
    engines.viewers[0].dragRotate(TURNED);
    single.remove();

    // `Lines` lifts one molecule clear of the other and turns the camera so the
    // lift runs across the screen. A pose laid over that would undo the one
    // thing the mode is for.
    const pair = mount("gufe-atom-mapping", readExample("ligand_atom_mapping.json"));
    await flush();
    mode(pair, "Pairs").click();
    await flush();
    const lines = engines.viewers[engines.viewers.length - 1];
    expect(lines.calls).not.toContain("setView");
    expect(lines.rotation()).not.toEqual(TURNED);

    // ... and it does not write its own arrangement out to the next ligand.
    pair.remove();
    mount("gufe-small-molecule", readExample("small_molecule.json"));
    await flush();
    expect(engines.viewers[engines.viewers.length - 1].rotation()).toEqual(TURNED);
  });

  it("still frames fresh when the reader has moved nothing", async () => {
    const first = mount("gufe-small-molecule", readExample("small_molecule.json"));
    await flush();
    first.remove();

    // A pose recorded at the opening framing is what the next scene already
    // has, so there is no zoom to reapply on top of its own `zoomTo`.
    mount("gufe-small-molecule", readExample("small_molecule_charged.json"));
    await flush();
    expect(framings(1)).toEqual(["zoomTo", "setView"]);
  });
});
