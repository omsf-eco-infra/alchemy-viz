/**
 * The alchemical network's menu: search, a SMARTS filter, and the list.
 *
 * The same menu the ligand network carries, asking the questions an alchemical
 * network raises rather than the ones a ligand network does, and holding the
 * same rule: what a filter leaves out is **dimmed, not removed**, because
 * seeing what is missing is half of what a filter is for.
 *
 * The list is of ligands rather than of systems, because that is what a box on
 * the canvas is - see `alchemical-legs.ts` - and there is nothing here to filter
 * by leg: a ligand belongs to every leg it was run in, and the legs of a mapping
 * are one line. Which leg is chosen in the pane, one thing at a time.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import {
  clearFakeEngines,
  flush,
  readExample,
  seedFakeEngines,
  wait,
  type SeededEnginesResult,
} from "./helpers.js";
import { flag, text as textSetting } from "../src/shared/settings.js";

/** The small fixture: three solvated ligands, one leg, nothing to collapse. */
function network(): unknown {
  return readExample("alchemical_network.json");
}

/**
 * A binding campaign: ten ligands run twice, in solvent and in complex.
 *
 * The shape the collapsing is for, and the real one rather than a fixture edited
 * into two compositions - what tells the legs apart is which components a
 * transformation's states carry, and the campaign is where that is true by
 * construction.
 */
function campaign(): unknown {
  return readExample("alchemical_network_medium.json");
}

function mountNetwork(payload: unknown = network()): HTMLElement {
  const node = document.createElement("gufe-alchemical-network") as HTMLElement & { payload: unknown };
  document.body.appendChild(node);
  node.payload = payload;
  return node;
}

const hamburger = (node: HTMLElement): HTMLButtonElement =>
  node.querySelector<HTMLButtonElement>('button[aria-label="Search, filter and select ligands"]')!;

/** The rows of the ligand list, which is the one scrolling column in the panel. */
const listRows = (node: HTMLElement): HTMLButtonElement[] =>
  Array.from(node.querySelectorAll<HTMLButtonElement>("button")).filter(
    (b) => b.parentElement?.style.overflow === "auto",
  );

const searchBox = (node: HTMLElement): HTMLInputElement =>
  node.querySelector<HTMLInputElement>('input[aria-label="Search ligands by name, component, system or gufe key"]')!;

/** The opacity each ligand's box is drawn at, which is what a filter changes. */
const nodeOpacities = (node: HTMLElement): string[] =>
  [...node.querySelectorAll<SVGRectElement>("svg.gufe-graph rect.gufe-node-box")].map(
    (box) => box.parentElement?.getAttribute("opacity") ?? "1",
  );

/** The leg filter, which is the only dropdown here offering "all" of something. */
const legPicker = (node: HTMLElement): HTMLSelectElement | undefined =>
  Array.from(node.querySelectorAll("select")).find((select) =>
    Array.from(select.options).some((option) => option.textContent === "all"),
  );

const smartsInput = (node: HTMLElement): HTMLInputElement =>
  node.querySelector<HTMLInputElement>(
    'input[aria-label="Show only the ligands whose structures match this SMARTS pattern"]',
  )!;

const type = (input: HTMLInputElement, value: string): void => {
  input.value = value;
  input.dispatchEvent(new Event("input"));
};

/** Type a pattern, then wait out the debounce and the sweep behind it. */
async function typeSmarts(node: HTMLElement, pattern: string): Promise<void> {
  type(smartsInput(node), pattern);
  await wait(400);
  await flush();
}

const button = (node: HTMLElement, text: string): HTMLButtonElement =>
  Array.from(node.querySelectorAll<HTMLButtonElement>("button")).find((b) => b.textContent === text)!;

/** The one copy button, which names the list the tabs have chosen. */
const copyButton = (node: HTMLElement): HTMLButtonElement =>
  Array.from(node.querySelectorAll<HTMLButtonElement>("button")).find((b) =>
    b.textContent?.startsWith("Copy "),
  )!;

describe("the alchemical network menu", () => {
  let engines: SeededEnginesResult;
  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("is collapsed until asked for", async () => {
    const node = mountNetwork();
    await flush();
    expect(hamburger(node)).toBeTruthy();
    expect(listRows(node)).toHaveLength(0);
  });

  it("does not build the ligand list until it is opened", async () => {
    // At two hundred ligands the list is the most expensive thing in the view,
    // and a collapsed menu must not pay for it.
    const node = mountNetwork();
    await flush();
    expect(node.textContent).not.toContain("of 3 ligands");

    hamburger(node).click();
    await flush();
    expect(node.textContent).toContain("3 of 3 ligands");
    expect(listRows(node)).toHaveLength(3);
  });

  it("narrows the list to what a search matches, and dims the rest of the canvas", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    expect(nodeOpacities(node).every((o) => o === "1")).toBe(true);

    type(searchBox(node), "CCO in water");
    await flush();

    expect(listRows(node)).toHaveLength(1);
    expect(node.textContent).toContain("1 of 3 ligands");
    // Dimmed, not removed: every box is still drawn.
    const opacities = nodeOpacities(node);
    expect(opacities).toHaveLength(3);
    expect(opacities.filter((o) => o === "1")).toHaveLength(1);
  });

  it("finds a ligand by a component it carries rather than by its own name", async () => {
    // Someone looking for a ligand is looking for the box that carries it, and
    // the box may be called nothing of the sort.
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    const ligand = (readExample("alchemical_network.json") as { registry: { type: string; name?: string }[] }).registry
      .find((entry) => entry.type === "SmallMoleculeComponentViz")!;
    type(searchBox(node), ligand.name!);
    await flush();
    expect(listRows(node).length).toBeGreaterThan(0);
  });

  it("finds a collapsed leg by the name the payload gives it", async () => {
    // A campaign's boxes are named for their ligands, and the systems inside
    // them keep the names the payload uses. Someone who knows those must not
    // have them taken away by a picture that stopped drawing them.
    const node = mountNetwork(campaign());
    await flush();
    hamburger(node).click();
    await flush();

    type(searchBox(node), "lig_ejm_31_complex");
    await flush();
    const rows = listRows(node);
    expect(rows).toHaveLength(1);
    expect(rows[0].textContent).toBe("lig_ejm_31");
  });

  it("says nothing matches rather than showing an empty list", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    type(searchBox(node), "no ligand is called this");
    await flush();
    expect(listRows(node)).toHaveLength(0);
    expect(node.textContent).toContain("Nothing matches.");
  });

  it("offers no filter by leg, on any network", async () => {
    // A ligand belongs to every leg it was run in, so a leg says nothing about
    // which rows to show; and the legs of a mapping are one line, so it says
    // nothing about which lines to show either. Which leg is a question asked of
    // one thing at a time, in the pane.
    for (const payload of [network(), campaign()]) {
      document.body.replaceChildren();
      const node = mountNetwork(payload);
      await flush();
      hamburger(node).click();
      await flush();
      expect(legPicker(node)).toBeUndefined();
    }
  });

  it("opens a ligand in the detail pane when its row is clicked", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    const rows = listRows(node);
    rows[rows.length - 1].click();
    await flush();
    const embedded = node.querySelector("gufe-chemical-system");
    expect(embedded).toBeTruthy();
    expect(embedded!.textContent).toContain(rows[rows.length - 1].textContent!);
  });

  it("copies the selected ligands, and the transformations between them", async () => {
    const written: string[] = [];
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: (text: string) => (written.push(text), Promise.resolve()) },
    });

    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    // Two ligands, so there is an edge between them to copy as well.
    const rows = listRows(node);
    rows[0].click();
    rows[1].dispatchEvent(new MouseEvent("click", { bubbles: true, metaKey: true }));
    await flush();

    // The ligands tab is the one the menu opens on, so the button is already
    // the ligand one.
    copyButton(node).click();
    expect(written).toHaveLength(1);
    expect(written[0].split("\n")).toHaveLength(2);
    expect(node.textContent).toContain("Copied 2 ligands.");

    // The tabs are what choose between the two, and the selection survives the
    // switch: what was picked out of one list is what the other one copies.
    button(node, "Transformations").click();
    copyButton(node).click();
    expect(written).toHaveLength(2);
    expect(node.textContent).toMatch(/Copied \d+ transformations|No transformations between/);
  });

  // --- the two lists ------------------------------------------------------
  //
  // A network is its ligands and the transformations between them, and both are
  // things a reader asks to be listed. They are one list in two states, chosen
  // by the tabs at the top of the panel, because everything above the list
  // narrows both.

  it("lists the ligands in name order rather than in payload order", async () => {
    // A list in payload order is a list with no order at all to the reader: the
    // only way to tell whether a ligand is in the campaign is to read every row.
    const node = mountNetwork(campaign());
    await flush();
    hamburger(node).click();
    await flush();

    const names = listRows(node).map((row) => row.textContent ?? "");
    expect(names.length).toBeGreaterThan(1);
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b, undefined, { numeric: true })));
  });

  it("lists the transformations on their own tab, in name order", async () => {
    const node = mountNetwork(campaign());
    await flush();
    hamburger(node).click();
    await flush();
    const ligands = listRows(node).length;

    button(node, "Transformations").click();
    await flush();

    const names = listRows(node).map((row) => row.textContent ?? "");
    expect(names.length).toBeGreaterThan(0);
    // A different list, not the same one relabelled: the campaign has more
    // transformations than it has ligands.
    expect(names.length).not.toBe(ligands);
    expect(node.textContent).toContain(`${names.length} of ${names.length} transformations`);
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b, undefined, { numeric: true })));
  });

  it("leaves the transformations of a ligand the search names", async () => {
    // Either end, because "what was run on this ligand" is the question a
    // search asks of this list, and the ligand is at one end only.
    const node = mountNetwork(campaign());
    await flush();
    hamburger(node).click();
    await flush();
    button(node, "Transformations").click();
    await flush();
    const all = listRows(node).length;

    type(searchBox(node), "lig_ejm_31");
    await flush();
    const rows = listRows(node);
    expect(rows.length).toBeGreaterThan(0);
    expect(rows.length).toBeLessThan(all);
    for (const row of rows) expect(row.textContent).toContain("lig_ejm_31");
  });

  it("opens a transformation, and selects both of the ligands it runs between", async () => {
    const node = mountNetwork(campaign());
    await flush();
    hamburger(node).click();
    await flush();
    button(node, "Transformations").click();
    await flush();

    listRows(node)[0].click();
    await flush();
    // The pane draws the transformation itself, which is what a line on the
    // canvas opens too.
    expect(node.querySelector("gufe-transformation")).toBeTruthy();
    expect(listRows(node)[0].getAttribute("aria-pressed")).toBe("true");

    // And the ligand list agrees about it: a transformation is a thing between
    // two ligands, so picking it picks its two ends.
    button(node, "Ligands").click();
    await flush();
    const pressed = listRows(node).filter((row) => row.getAttribute("aria-pressed") === "true");
    expect(pressed).toHaveLength(2);
  });

  it("names on the copy button the list the tabs have chosen", async () => {
    // One button rather than the pair that used to ask, underneath, which of
    // the two lists was meant after the tabs had already said.
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    expect(copyButton(node).textContent).toBe("Copy ligands");

    button(node, "Transformations").click();
    await flush();
    expect(copyButton(node).textContent).toBe("Copy transformations");
    expect(button(node, "Copy ligands")).toBeUndefined();
  });

  it("clears a selection, and puts the whole canvas back", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    listRows(node)[0].click();
    await flush();
    expect(nodeOpacities(node).filter((o) => o === "1")).toHaveLength(1);

    button(node, "Clear selection").click();
    await flush();
    expect(nodeOpacities(node).every((o) => o === "1")).toBe(true);
  });

  it("opens with the search it was left with, and applies it", async () => {
    flag("alchemical-network.menuOpen", false).set(true);
    textSetting("alchemical-network.query").set("CCO in water");

    const node = mountNetwork();
    await flush();
    // No click: the menu was already open, and a remembered search that only
    // narrows the list once someone touches the box is a filter that lies.
    expect(searchBox(node).value).toBe("CCO in water");
    expect(listRows(node)).toHaveLength(1);
    expect(nodeOpacities(node).filter((o) => o === "1")).toHaveLength(1);
  });

  /**
   * The SMARTS half the ligand network has, doing the other thing with it.
   *
   * There a match colours a molecule and hides nothing, because a node *is* a
   * molecule and there is a structure to colour. Here a box holds systems made
   * of several components, so the same question - which ligands contain this
   * scaffold - is answered by narrowing instead.
   */
  it("hides the ligands whose structures do not match a pattern", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    expect(listRows(node)).toHaveLength(3);

    await typeSmarts(node, "CCO");

    expect(listRows(node)).toHaveLength(1);
    expect(node.textContent).toContain("1 of 3 ligands contain it");
    // Dimmed, not removed, as with every other filter here.
    const opacities = nodeOpacities(node);
    expect(opacities).toHaveLength(3);
    expect(opacities.filter((o) => o === "1")).toHaveLength(1);
  });

  it("puts every ligand back when the pattern is emptied", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    await typeSmarts(node, "CCO");
    expect(listRows(node)).toHaveLength(1);

    await typeSmarts(node, "");
    expect(listRows(node)).toHaveLength(3);
    expect(nodeOpacities(node).every((o) => o === "1")).toBe(true);
  });

  it("leaves the network alone when RDKit refuses the pattern", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    // A refused pattern is not "nothing matches": emptying the network would be
    // the wrong answer to a question that was never asked.
    await typeSmarts(node, "C(C");
    expect(node.textContent).toContain("does not accept that as a SMARTS pattern");
    expect(listRows(node)).toHaveLength(3);
    expect(nodeOpacities(node).every((o) => o === "1")).toBe(true);
  });

  it("sweeps each ligand once however many systems carry it", async () => {
    // A campaign runs every ligand twice, in solvent and in complex, so a sweep
    // indexed by system would parse each molecule twice for every pattern - and
    // a box is one ligand, so there is one structure per row to sweep.
    const payload = campaign() as { nodes: string[] };
    const node = mountNetwork(payload);
    await flush();
    hamburger(node).click();
    await flush();

    const rows = listRows(node).length;
    const before = engines.depicted.length;
    await typeSmarts(node, "lig_ejm_31");
    const parsed = engines.depicted.length - before;

    expect(payload.nodes).toHaveLength(20);
    expect(rows).toBe(10);
    expect(parsed).toBe(rows);
  });

  it("opens with the pattern it was left with, and applies it", async () => {
    flag("alchemical-network.menuOpen", false).set(true);
    textSetting("alchemical-network.smarts").set("CCO");

    const node = mountNetwork();
    await flush();
    await wait(50);
    await flush();

    expect(listRows(node)).toHaveLength(1);
    expect(node.textContent).toContain("1 of 3 ligands contain it");
  });

  it("carries the framejs share button", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    expect(node.textContent).toContain("Share to the web");
  });
});
