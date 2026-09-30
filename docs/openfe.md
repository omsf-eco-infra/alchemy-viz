# Your own openfe and gufe objects

There is nothing to convert first and no alchemy-viz object to build. `view()` and
`to_html()` take what the planner handed you:

```python
from alchemy_viz import view

view(ligand)        # SmallMoleculeComponent, ProteinComponent, SolventComponent
view(mapping)       # LigandAtomMapping
view(network)       # LigandNetwork
view(system)        # ChemicalSystem
view(transformation)
view(campaign)      # AlchemicalNetwork
```

In a notebook that draws in the cell; outside one it returns an object whose
`repr` says what it is. [`notebooks.md`](./notebooks.md) is the cell behaviour and
[`cli.md`](./cli.md) the shell equivalent.

## openfe's classes are gufe's classes

OpenFE defines no classes for any of this; `openfe/__init__.py`
re-exports gufe's:

```python
from gufe import (
    AlchemicalNetwork, ChemicalSystem, Component, LigandAtomMapping,
    NonTransformation, ProteinComponent, ProteinMembraneComponent,
    SmallMoleculeComponent, SolvatedPDBComponent, SolventComponent, Transformation,
)
```

So `openfe.SmallMoleculeComponent` **is** `gufe.SmallMoleculeComponent`.
`view()` takes an openfe object without alchemy-viz importing
openfe or knowing that it exists.

## Reading what a planner wrote

Three files, three readers, all of them gufe's rather than ours.

```python
from pathlib import Path
from gufe import LigandNetwork
from gufe.tokenization import GufeTokenizable
from alchemy_viz import view

setup = Path("network_setup")

view(LigandNetwork.from_graphml((setup / "ligand_network.graphml").read_text()))
view(GufeTokenizable.from_json(setup / "network_setup.json"))
view(GufeTokenizable.from_json(next((setup / "transformations").glob("*.json"))))
```

The campaign's filename is the output directory's name, not
`alchemical_network.json`. [`cli.md`](./cli.md#the-directory-a-planner-writes) has
the layout.

## Planning one in Python instead

The same campaign, built in a session. This is OpenFE's API rather than ours, and
the point of showing it is where `view()` goes: **after the planner and before
the protocol**, which is the moment a bad mapping is still cheap to fix.

```python
import openfe
from openfe.setup.ligand_network_planning import generate_minimal_spanning_network
from rdkit import Chem
from alchemy_viz import view

ligands = [openfe.SmallMoleculeComponent(m) for m in Chem.SDMolSupplier("ligands.sdf", removeHs=False)]
protein = openfe.ProteinComponent.from_pdb_file("protein.pdb")
solvent = openfe.SolventComponent()

planned = generate_minimal_spanning_network(
    ligands=ligands,
    mappers=[openfe.LomapAtomMapper()],
    scorer=openfe.lomap_scorers.default_lomap_score,
)
view(planned)      # look at the mappings before committing to them

campaign = openfe.setup.RBFEAlchemicalNetworkPlanner()(
    ligands=ligands, solvent=solvent, protein=protein,
)
view(campaign)     # and at the campaign the planner builds from them
```

Click an edge of a drawn network and its atom mapping opens beside it. That is
the check this exists for: a mapping that pairs the wrong atoms is visible in a
second and expensive to discover after the simulations have run.

## Installing into an openfe environment

```bash
conda activate my-openfe-env
pip install "alchemy-viz[notebook]"   # the notebook extra is optional
```

gufe is deliberately **not** a declared dependency. The only gufe on PyPI is a
single 0.4 release predating the 1.0 API, so a hard `gufe>=1.12` requirement
would be unsatisfiable at resolution time and would fail the install for exactly
the people who already have a working gufe from conda-forge in the same
environment. The requirement has moved to import time instead:
`alchemy_viz._gufe.require_gufe` raises with the conda-forge instruction.

`pip install "alchemy-viz[gufe]"` is the declarative form, for a resolver that
can actually reach a modern gufe. `import alchemy_viz`, `to_html` on a payload
dict and the whole of the CLI's payload path work with no gufe at all.
