# gufe-viz

Python turns a gufe object into a JSON payload, `schema/gufe-viz.schema.json`
gates it, TypeScript custom elements draw it. Both sides validate against that
one schema file.

## Commands

There is no justfile. Every command is a pixi task; `pixi run --list` shows all
of them with descriptions.

| | |
|---|---|
| `pixi run test` | both suites (`test-py`, `test-ts` run them separately) |
| `pixi run lint` | ruff check + format check + `tsc --noEmit` |
| `pixi run ci` | what CI runs, including generated-artifact freshness |
| `pixi run build` | bundle `ts/src/**` into `python/gufe_viz/_assets/gufe-viz.js` |
| `pixi run dev` | vite server; `/gallery.html` renders every example |

Run one vitest file with `npx vitest run ts/tests/<name>.test.ts`.

## Do not read these

They are large enough to cost more context than they can repay. Use `head`,
`jq`, or `grep` if you need a fact from one.

- `examples/ligand_network_docked.json` (2.4M),
  `alchemical_network_large.json` (1.9M), `ligand_network_large.json` (1.4M),
  `alchemical_network_medium.json` (511K), `chemical_system_ensemble.json`
  (433K), `chemical_system_complex.json` (398K), `protein.json` (217K)
- `scripts/data/jak2_docked_poses.sdf` (1.4M), `jak2_protein.pdb` (389K),
  `jak2_network_edges.json` (133K), `tyk2_protein.pdb`, `large_network.sdf`
  (~400K each)
- `python/gufe_viz/_assets/gufe-viz.js` (~400K, generated)
- `do-not-commit/` is scratch, not part of the project

`examples/small_molecule.json`, `ligand_network.json`, `transformation.json` and
`solvent.json` are small and are the ones to read when you need payload shape.

## Do not edit these

Generated and committed; CI's `check-generated` job rebuilds and diffs them.
Edit the source, then run the command.

- `ts/src/schema/types.ts` <- `schema/gufe-viz.schema.json`, `pixi run types`
- `ts/src/shared/atom-colors.ts` <- `scripts/gen_atom_colors.py`, `pixi run atom-colors`
- `python/gufe_viz/_assets/gufe-viz.js` <- `ts/src/**`, `pixi run build`
- `examples/*.json` <- `scripts/make_examples.py`, `pixi run examples`

`schema/gufe-viz.schema.json` is hand-written and is the source of truth.

## Where work lands

- a new payload field: schema, then `pixi run types`, then the Python builder in
  `python/gufe_viz/` (`components.py`, `networks.py`, `alchemical.py`), then the view
- a new payload type: also add it to `VIEW_TAGS` in `ts/src/gufe-view.ts`;
  `ts/tests/dispatch.test.ts` asserts the schema's types and that table agree
- drawing behaviour: `ts/src/views/<type>.ts`; shared machinery in
  `ts/src/shared/`, and `ts/src/shared/network/` for what the two graph views
  share (the menu, the force driver, key resolution, the canvas machinery)
- the atom mapping is three files, not one: `atom-mapping.ts` is the element and
  the facts `preparePair` works out, `mapping-modes.ts` the six ways of drawing
  them, `mapping-stage.ts` the boxes and the viewer lifecycle
- Python page/notebook plumbing: `html.py`, `notebook.py`, `cli.py`

The two network views and `ts/tests/views.test.ts` run to a few thousand lines
each. Read the region you need rather than the file - `grep -n` for the symbol,
then read around it.

## Conventions

- Schema is hand-written JSON Schema. No pydantic; it is not in OpenFE's stack.
- No Unicode punctuation in committed source, and no references to planning
  documents in comments. Both read as machine-generated to reviewers.
- Fixtures go through `_quantize` in `make_examples.py`. gufe keys hash
  full-precision floats, so unquantized coordinates make examples non-deterministic.
- Deeper background lives in `README.md` and `schema/README.md`. Modules carry
  long docstrings explaining why, not just what. Read those before asking.
