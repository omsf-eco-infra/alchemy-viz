# Every view

Twelve payload types, nine elements. The table is the whole of what alchemy-viz
can draw; the schema declares these types and nothing else, and
`ts/tests/dispatch.test.ts` fails if this list and the browser's dispatch table
disagree.

| payload type | gufe class | element | what it draws |
|---|---|---|---|
| `SmallMoleculeComponentViz` | `SmallMoleculeComponent` | `gufe-small-molecule` | 2D RDKit depiction beside the 3D conformer, with SMILES, charge and atom counts |
| `ProteinComponentViz` | `ProteinComponent` | `gufe-protein` | 3Dmol with representation and colour-scheme switchers; waters hidden by default |
| `SolvatedPDBComponentViz` | `SolvatedPDBComponent` | `gufe-protein` | the same element |
| `ProteinMembraneComponentViz` | `ProteinMembraneComponent` | `gufe-protein` | the same element |
| `SolventComponentViz` | `SolventComponent` | `gufe-solvent` | a settings card beside a schematic of which ions are present |
| `UnknownComponentViz` | anything else, inside a system | `gufe-unknown-component` | what it is and why there is no picture |
| `LigandAtomMappingViz` | `LigandAtomMapping` | `gufe-atom-mapping` | the two ligands and their correspondence, in six modes |
| `LigandNetworkViz` | `LigandNetwork` | `gufe-ligand-network` | the ligand graph; click an edge for its mapping |
| `ChemicalSystemViz` | `ChemicalSystem` | `gufe-chemical-system` | the components down the left, the selected one drawn on the right |
| `TransformationViz` | `Transformation`, `NonTransformation` | `gufe-transformation` | the two end states, the mapping between them, and the protocol |
| `AlchemicalNetworkViz` | `AlchemicalNetwork` | `gufe-alchemical-network` | a box per ligand and a line per pair, with the legs behind them |
| `ProtocolViz` | `Protocol` | `gufe-protocol` | the settings tree |

## Pictures

[`../examples/notebooks/alchemy-viz-gallery.ipynb`](../examples/notebooks/alchemy-viz-gallery.ipynb)
is every one of them as a screenshot, with a paragraph per fixture on what that
particular payload is and what to look at. It renders on GitHub, which the live
views do not: GitHub's notebook renderer strips `<iframe>` and `<script>` from
outputs, and that is everything `view()` emits.

The interactive versions are the curated gallery, linked from the top of
[`../README.md`](../README.md), and `pixi run dev` for anyone working in this
repository.

## Three types, one element

The three PDB-backed components share `gufe-protein`, and that sharing is stated
twice on purpose. Python's MRO walk gives a membrane system the protein
*builder*, but the payload it emits says `ProteinMembraneComponentViz`, and that
type needs its own entry in the browser's dispatch table. Inheritance on one side
of the contract is not inheritance on the other.

## What a system draws

A `ChemicalSystem` has no picture of its own: it is a chooser over the views
above, its components down the left and the selected one drawn on the right in
whichever view that component's own type gets.

The exception is where the components share a coordinate frame. A ligand and the
protein it is docked into have a picture together that neither has alone, so a
`Complex` entry comes first in the strip and opens framed on the site rather than
the whole protein. That pose is the point of a binding campaign, and drawing the
components one at a time is the only way to lose it.

## The two graph views

A `LigandNetwork` and the `AlchemicalNetwork` planned from it are the same graph
one layer apart, and they are drawn to look like it.

The ligand view is a node per ligand and an edge per mapping, coloured by score.
The alchemical view is a **box per ligand**, not a node per chemical system: a
relative campaign turns each mapping into two transformations - a solvent leg and
a complex leg - and each ligand into two or more chemical systems, and drawing
those directly produces a picture nobody planned. So the boxes are the ligands, a
box lists the components of all its legs at once, and a line opens on one of its
transformations with the others a tab away.

Both views drop detail as the graph gets denser: depictions give way to dots and
labels drop out, and zooming in brings them back.

## The atom mapping

Six modes, in a switcher: `2D`, `3D`, `3D-Map`, `3D Overlay`, `Pairs` and
`Info`. All three cards open on plain `3D`, which shows the two ligands and
nothing about how they correspond. The correspondence is what the other modes
draw - `3D Overlay` reproduces what `LigandAtomMapping.view_3d()` gives you,
`3D-Map` puts the 2D mapping colours on the structures, `Pairs` runs a dashed
line between each mapped pair, and `Info` is the mapping in numbers. Unique atoms
and element changes are coloured the way gufe colours them.

It is the same element whether a mapping is the whole payload or the detail pane
of a network, which is why a mapping is worth opening on its own when an edge
looks wrong.
