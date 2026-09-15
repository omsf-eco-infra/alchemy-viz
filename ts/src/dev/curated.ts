/**
 * The curated gallery: one example per view, the biggest one that still says
 * something the others do not.
 *
 * `examples/` holds several sizes of the same thing on purpose - pytest and
 * vitest want a two-atom payload they can assert against as much as they want a
 * real network. Scrolling all of them is the wrong way to look at a drawing
 * change, so `/gallery.html` shows this list and `/gallery-all.html` shows the
 * directory. Everything left out is still one click away.
 *
 * Adding a view means adding a line here. `ts/tests/gallery.test.ts` fails if a
 * name stops matching a file, or if a view type in `examples/` has no card.
 */
export interface CuratedExample {
  /** File name in `examples/`. */
  file: string;
  /** Why this one and not its smaller siblings. Shown on the card. */
  note: string;
}

export const CURATED: CuratedExample[] = [
  {
    file: "alchemical_network_medium.json",
    note: "tyk2 RBFE - both legs, protocol and all",
  },
  {
    file: "ligand_network_docked.json",
    note: "jak2, docked poses - the heaviest network we draw",
  },
  {
    file: "ligand_network_charged.json",
    note: "eg5 - the network with charge changes in it",
  },
  {
    file: "transformation.json",
    note: "one edge, end to end",
  },
  {
    file: "ligand_atom_mapping_medium.json",
    note: "a real tyk2 pair, not a toy one",
  },
  {
    file: "chemical_system_ensemble.json",
    note: "protein, ligands and solvent together",
  },
  {
    file: "protein.json",
    note: "181l, the whole structure",
  },
  {
    file: "small_molecule_charged.json",
    note: "acetate - formal charges drawn",
  },
  {
    file: "solvent.json",
    note: "the settings panel, nothing to render",
  },
  {
    file: "unknown_component.json",
    note: "the fallback panel, for a component we cannot draw",
  },
];

/** Just the file names, in the order the gallery shows them. */
export const CURATED_FILES: string[] = CURATED.map((c) => c.file);
