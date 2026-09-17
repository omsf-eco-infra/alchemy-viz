# The contract

Two schemas live here.

| file | says | written by |
|---|---|---|
| `alchemy-viz.schema.json` | what a gufe object **is** | a Python payload builder |
| `depict-style.schema.json` | how a ligand pair is **drawn** in 2D | a person, in the editor linked below |

## alchemy-viz.schema.json

The gate between Python and TypeScript: nothing reaches the browser except data
that validates against it. Python builds a payload and validates it here;
TypeScript validates the same payload against the same file before it draws.

It is hand-written. Edit it, run `pixi run types` to regenerate
`ts/src/schema/types.ts`, and commit both - CI's `check-generated` job fails if
they differ.

### What crosses

SDF, PDB, and flat plain JSON. gufe's own `to_json` never does: deduplicated
key-chains, `:custom:` codecs and the `to_dict`/`to_json` divergence all stay in
Python. A saved gufe `.json` is deserialized into live objects first, and the
payload is built from those.

### The shape

**1. One schema object per gufe class.** Every `$def` named `*Viz` is the
visualization form of exactly one `GufeTokenizable`, carries that object's
`gufe-key`, and has no summary-only or reference-only variant. A payload is its
`type`, its `gufe-key` and its own fields, flat:

```jsonc
{
  "type": "SmallMoleculeComponentViz",              // the closed discriminator
  "gufe-key": "SmallMoleculeComponent-ec3c7a92...", // the identity
  "name": "ligand_23",
  "sdf": "...",
  "smiles": "CCO",
  "total_charge": 0
}
```

**2. References are gufe keys, and the objects live in a registry** on the root
payload:

```jsonc
{
  "type": "ChemicalSystemViz",
  "gufe-key": "ChemicalSystem-b51f409f...",
  "components": {                         // keyed by the ChemicalSystem label
    "ligand":  "SmallMoleculeComponent-ec3c7a92...",
    "solvent": "SolventComponent-26b4034a..."
  },
  "registry": [
    { "type": "SmallMoleculeComponentViz", "gufe-key": "SmallMoleculeComponent-ec3c7a92...", "sdf": "...", ... },
    { "type": "SolventComponentViz",       "gufe-key": "SolventComponent-26b4034a...",       "smiles": "O", ... }
  ]
}
```

A ligand network is the same idea with the redundancy that motivates it: the
ligands are in the registry, `nodes` are keys into it, and each edge is a whole
`LigandAtomMappingViz` naming two of those keys - so a forty-ligand network
carries each SDF once instead of once per mapping. An alchemical network is that
shape one level up, sharing the protein and the protocol.

The payload is a single-shot dump with no server to ask, so the alternative to
the registry is carrying a shared protein forty times. It costs one map lookup
on the TypeScript side (`ts/src/schema/registry.ts`).

The rest of the rules:

- **A key always resolves to a whole object.** No name-only stubs, which is what
  makes drilling in possible: opening a network node gives you the SDF, opening
  an alchemical node gives you the protein's PDB.
- **`registry` is carried by the root payload.** `ChemicalSystemViz`,
  `LigandAtomMappingViz` and `TransformationViz` declare it optional - present
  when they are the payload, absent when the enclosing payload holds what they
  refer to. The two network types always carry one.
- **`type` is closed and explicit.** A view refuses anything else by name rather
  than guessing from which keys happen to be present.
- **One `$def` per component type**, combined into `ComponentViz` with `oneOf`,
  which makes "a registry entry is a payload" true by construction: a view hands
  the resolved entry straight to the element that claims its `type`.
- **`additionalProperties: false` everywhere**, so a typo in a builder is a
  validation error rather than a blank picture.
- The `Viz` suffix marks these as lossy projections, so nobody expects a round
  trip.

All twelve types are declared and all twelve have a view; `VIEW_TAGS` and
`ts/tests/dispatch.test.ts` are what say where the two stand. A declared type
with no view renders the "no visualization for X yet" panel, which is what a
build should do when handed something it cannot draw. `UnknownComponentViz` is
that idea one level down, for a custom gufe `Component` subclass this build has
never heard of - unrecognized types only, since a recognized component whose
serializer fails is a bug and raises in Python.

### Versioning

The version is in `$id`, not in the payload. Every consumer ships the reader and
the writer in one artifact - the generated HTML inlines the exact bundle that
reads it - so the two cannot be at different versions. Adding an optional
`schema_version` later is additive, so this is revisitable.

### What it deliberately does not check

JSON Schema cannot express these, so they are tested elsewhere and pinned as
`expect: "valid"` rows in `mutations.json`:

- **Chemical validity.** A truncated SDF is schema-valid; the view degrades to
  an error panel.
- **Referential integrity.** A key naming no registry entry is schema-valid.
  Python tests hold the builders to never emitting one, and the views drop what
  they cannot resolve, with a banner.
- **Registry uniqueness.** The Python `Registry` makes it true by construction
  and a test asserts it on the committed fixtures.
- **The type of what a key resolves to.** `componentA` is a
  `SmallMoleculeComponentKey` and `stateA` a `ChemicalSystemKey`, but both
  validate as non-empty strings: the check is a join across two parts of the
  document. The named key types keep the referent in the contract and in the
  generated TypeScript; `lookupOfType` in the browser returns undefined and lets
  the view degrade. A pattern on the key's class-name prefix would not close
  this - dispatch is `isinstance`-based, so a subclass yields a
  `SmallMoleculeComponentViz` whose key reads `MySmallMolecule-...`.

### mutations.json

The mutation matrix, declared once as data and applied by both suites - pytest
with `jsonschema`, vitest with Ajv, against this same file. Each row takes a
valid payload from `examples/`, applies one JSON-Pointer operation, and states
whether the result must be rejected or accepted. Change the schema, add the row
that proves it.

## depict-style.schema.json

How `<gufe-atom-mapping>` draws a ligand pair in 2D: marking style, ring shape,
hydrogen treatment, letter and bond sizes, every colour.

It is deliberately separate. The other schema describes what a gufe object is
and every field in it is written from a real object; nothing here is. A
transformation drawn twice with two different styles is the same
transformation, and Python never sees this file.

It is authored in a live editor -
<https://framejs.app/j/5df86d91e8824b20a02908b52a6f07c3> - which draws real
pairs with these exact values, documents every key beside its control, and
exports the document:

```
open the editor  ->  move the controls  ->  Copy or Download
                 ->  drop the file over ts/src/shared/depict-style.json
                 ->  pixi run build
```

Paste the committed document back in and press Apply to see what a given build
draws.

```
schema/depict-style.schema.json   <- the contract, hand-written
        v
ts/src/shared/depict-style.json   <- ONE exported document. The file you replace.
        |  import ... with { type: "json" }
        v
ts/src/shared/depict-style.ts     <- the types, the defaults, and the pipeline
```

The JSON is imported by the TypeScript, so it compiles into the bundle: nothing
to fetch, no runtime setter, no way for two pictures in one page to disagree.

Every key is optional except `version`, and the built-in defaults are values
gufe or RDKit already use - so with the document untouched the picture is
byte-identical to one plain `get_svg_with_highlights` call, and an edited style
is a readable diff. Three tests hold that: the committed document validates, the
schema and the TypeScript defaults agree key by key and range by range, and the
options handed to RDKit still match `MAPPING_DRAW_OPTIONS`, generated from gufe.
