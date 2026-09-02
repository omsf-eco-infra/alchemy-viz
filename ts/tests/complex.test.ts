/**
 * `<gufe-complex>` - the one view that draws two components at once.
 *
 * What is worth testing here is not that a picture appeared. It is that the two
 * models went into the *same* viewer with their coordinates untouched, and that
 * the protein's styling stopped at the protein: an SDF model carries no
 * `hetflag`, so an unscoped `{hetflag:false}` would hand the ligand a cartoon,
 * and a cartoon of a 30-atom molecule is an empty pane rather than an error.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { complexPartsFor, hasComplex } from "../src/views/complex.js";
import { buildRegistry, lookup } from "../src/schema/registry.js";
import { systemPayloadFor } from "../src/views/chemical-system.js";
import { ensureSDFTerminator } from "../src/shared/sdf.js";
import { PROTEIN_CONFIG } from "../src/shared/pdb.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines, type SeededEnginesResult } from "./helpers.js";
import type { ChemicalSystemViz } from "../src/schema/types.js";

function mount<T extends HTMLElement>(tag: string, payload: unknown): T {
  const node = document.createElement(tag) as T & { payload: unknown };
  document.body.appendChild(node);
  node.payload = payload;
  return node;
}

/** The buttons of a toolbar, by the text on them. */
function button(node: HTMLElement, label: string): HTMLButtonElement {
  const found = Array.from(node.querySelectorAll("button")).find((b) => b.textContent === label);
  if (!found) throw new Error(`no button labelled ${label}`);
  return found;
}

const complexPayload = (): ChemicalSystemViz =>
  readExample("chemical_system_complex.json") as unknown as ChemicalSystemViz;

describe("complexPartsFor", () => {
  it("splits a bound system into its structure and its ligand", () => {
    const payload = complexPayload();
    const parts = complexPartsFor(payload, buildRegistry(payload));
    expect(parts.structures.map((s) => s.name)).toEqual(["tyk2"]);
    expect(parts.ligands.map((l) => l.name)).toEqual(["lig_ejm_31"]);
    expect(hasComplex(parts)).toBe(true);
  });

  it("finds the complex leg of a real campaign, and only that leg", () => {
    // The reason any of this exists: an RBFE campaign is solvent legs and
    // complex legs, and it is the complex legs that carry a pose. The nodes of
    // a network are keys, so this is the same cut-loose payload the alchemical
    // view mounts when someone clicks one.
    const network = readExample("alchemical_network_medium.json") as unknown as ChemicalSystemViz;
    const registry = buildRegistry(network);
    const nodes = ((network as unknown as { nodes: string[] }).nodes ?? []).map(
      (key) => lookup(registry, key) as ChemicalSystemViz,
    );
    const bound = nodes.filter((node) => {
      const cut = systemPayloadFor(node, registry);
      return hasComplex(complexPartsFor(cut, buildRegistry(cut)));
    });
    expect(bound.length).toBeGreaterThan(0);
    expect(bound.length).toBeLessThan(nodes.length);
  });

  it("calls a solvated ligand no complex, having nothing to put it in", () => {
    // Half a complex is not a complex: a solvent leg is a ligand in a box, and
    // the offer has to be false for it or the pane appears over an empty scene.
    const payload = readExample("chemical_system.json") as unknown as ChemicalSystemViz;
    const parts = complexPartsFor(payload, buildRegistry(payload));
    expect(parts.ligands.length).toBeGreaterThan(0);
    expect(parts.structures).toHaveLength(0);
    expect(hasComplex(parts)).toBe(false);
  });
});

describe("<gufe-complex>", () => {
  let engines: SeededEnginesResult;
  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("loads the protein and the ligand into one viewer", async () => {
    mount("gufe-complex", complexPayload());
    await flush();

    expect(engines.viewers, "a complex is one scene, not two panes side by side").toHaveLength(1);
    const loaded = engines.viewers[0].calls.filter((c) => c.startsWith("addModel("));
    expect(loaded).toHaveLength(2);
    expect(loaded[0]).toContain("ATOM");
    expect(loaded[1]).toContain("V2000");
  });

  it("hands the ligand over exactly as the payload carries it", async () => {
    // The pose is the payload. Anything that re-centred, re-generated or
    // otherwise rebuilt the conformer on the way in would move the ligand out
    // of the site, so what goes to 3Dmol is the fixture's own SDF, terminated.
    const payload = complexPayload();
    const parts = complexPartsFor(payload, buildRegistry(payload));
    mount("gufe-complex", payload);
    await flush();

    const loaded = engines.viewers[0].calls.filter((c) => c.startsWith("addModel("));
    expect(loaded[1]).toBe(`addModel(${JSON.stringify(ensureSDFTerminator(parts.ligands[0].sdf))})`);
    expect(loaded[0]).toBe(`addModel(${JSON.stringify(parts.structures[0].pdb)})`);
  });

  it("keeps the protein's styling off the ligand's model", async () => {
    const node = mount("gufe-complex", complexPayload());
    await flush();

    const viewer = engines.viewers[0];
    const model = (selection: unknown): number[] => (selection as { model?: number[] }).model ?? [];
    // Every selection says which model it is about. Unscoped, `{hetflag:false}`
    // matches an SDF model too, and the ligand is drawn as a ribbon.
    for (const { selection } of viewer.styles) expect(model(selection).length).toBeGreaterThan(0);

    const ligandStyles = viewer.styles.filter(({ selection }) => model(selection).includes(1));
    expect(ligandStyles).toHaveLength(1);
    expect(ligandStyles[0].selection).toEqual({ model: [1] });
    expect(ligandStyles[0].style).toMatchObject({
      stick: { radius: PROTEIN_CONFIG.ligand.stickRadius },
    });
    // ... and nothing aimed at the protein reaches it.
    for (const { selection } of viewer.styles) {
      if (model(selection).includes(1)) continue;
      expect(model(selection)).toEqual([0]);
    }
    expect(node.textContent).toContain("lig_ejm_31");
  });

  it("opens on the site and can pull back to the whole complex", async () => {
    const node = mount("gufe-complex", complexPayload());
    await flush();

    const viewer = engines.viewers[0];
    const framings = () => viewer.calls.filter((c) => c.startsWith("zoomTo") || c.startsWith("zoom("));
    // Framed on the ligand, then pulled back far enough to see what surrounds
    // it: the site is the picture, and the ligand alone is the wrong question.
    expect(framings()).toEqual(['zoomTo({"model":[1]})', "zoom(0.4)"]);

    button(node, "Whole").click();
    await flush();
    expect(framings().slice(2)).toEqual(["zoomTo"]);

    button(node, "Site").click();
    await flush();
    expect(framings().slice(3)).toEqual(['zoomTo({"model":[1]})', "zoom(0.4)"]);
  });

  it("says how big both halves of the scene are", async () => {
    const node = mount("gufe-complex", complexPayload());
    await flush();
    const text = node.textContent ?? "";
    expect(text).toContain("ligand");
    expect(text).toContain("atoms");
    // The protein readout is the one `<gufe-protein>` shows, so the two panes
    // of one system agree about the structure.
    expect(text).toMatch(/residues/);
  });

  it("says so, rather than drawing half a scene, when a component goes missing", async () => {
    const payload = complexPayload();
    delete payload.components.protein;
    const node = mount("gufe-complex", payload);
    await flush();

    expect(engines.viewers).toHaveLength(0);
    expect(node.textContent).toContain("no ligand and structure");
  });
});

describe("<gufe-chemical-system> with a bound complex", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("offers the complex first, and opens on it", async () => {
    const node = mount("gufe-chemical-system", complexPayload());
    await flush();

    const titles = Array.from(node.querySelectorAll("button"), (b) => b.querySelector("span")?.textContent);
    expect(titles[0]).toBe("Complex");
    // The whole scene is what a reader who has never opened one of these
    // should land on, so the per-component dispatcher is not even mounted yet.
    expect(node.querySelector("gufe-complex")).toBeTruthy();
    expect(node.querySelector("gufe-view")).toBeNull();
  });

  it("gives the structure it draws no pane of its own, and leaves the rest theirs", async () => {
    // The protein pane would be a second build of the same 5000 atoms showing
    // strictly less than the complex already does. The ligand keeps its pane:
    // its view is a different picture - a 2D depiction, a SMILES, a charge -
    // rather than a smaller one.
    const node = mount("gufe-chemical-system", complexPayload());
    await flush();

    // The strip's own buttons: two lines in a span each, unlike the flat
    // toolbar buttons of whatever it has mounted below them.
    const strip = Array.from(node.querySelectorAll("button"), (b) => b.querySelector("span")?.textContent).filter(
      (title) => title !== undefined,
    );
    expect(strip).toEqual(["Complex", "ligand", "solvent"]);
    // The count is about the system, not about the strip: it still has three.
    expect(node.textContent).toContain("components");

    const ligand = Array.from(node.querySelectorAll("button")).find(
      (b) => b.querySelector("span")?.textContent === "ligand",
    )!;
    ligand.click();
    await flush();
    expect(node.querySelector("gufe-view gufe-small-molecule")).toBeTruthy();
    expect(node.querySelector("gufe-complex")).toBeNull();
  });

  it("keeps the protein's own pane where there is no complex to absorb it", async () => {
    // The same protein, in a system with nothing bound to it, is still reached
    // the ordinary way. Absorbing a pane is a property of the complex, not of
    // the component.
    const payload = complexPayload();
    delete payload.components.ligand;
    const node = mount("gufe-chemical-system", payload);
    await flush();

    const titles = Array.from(node.querySelectorAll("button"), (b) => b.querySelector("span")?.textContent);
    expect(titles).toContain("protein");
    expect(titles).not.toContain("Complex");
    expect(node.querySelector("gufe-view gufe-protein")).toBeTruthy();
  });

  it("offers no complex pane for a system that is not one", async () => {
    const node = mount("gufe-chemical-system", readExample("chemical_system.json"));
    await flush();
    const titles = Array.from(node.querySelectorAll("button"), (b) => b.querySelector("span")?.textContent);
    expect(titles).not.toContain("Complex");
    expect(node.querySelector("gufe-complex")).toBeNull();
  });
});
