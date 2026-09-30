import { afterEach, beforeEach, describe, it } from "vitest";
import "../src/index.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines } from "./helpers.js";

describe("probe", () => {
  beforeEach(() => seedFakeEngines());
  afterEach(() => { clearFakeEngines(); document.body.innerHTML = ""; });

  const files = [
    "protein.json", "protein_membrane.json", "solvated_pdb.json", "protein_fragment.json",
    "chemical_system.json", "chemical_system_ensemble.json",
  ];
  for (const f of files) {
    it(`dumps ${f}`, async () => {
      let payload: Record<string, unknown>;
      try { payload = readExample(f); } catch { console.log(`### ${f}: MISSING`); return; }
      const view = document.createElement("alchemy-view") as HTMLElement & { payload: unknown };
      document.body.appendChild(view);
      view.payload = payload;
      await flush();
      const text = (view.textContent ?? "").replace(/\s+/g, " ").trim();
      console.log(`### ${f} [type=${payload.type}] -> ${text.slice(0, 700)}`);
    });
  }
});
