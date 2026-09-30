# Viewing openfe objects

```python
from alchemy_viz import view

view(ligand)        # SmallMoleculeComponent, ProteinComponent, SolventComponent
view(mapping)       # LigandAtomMapping
view(network)       # LigandNetwork
view(system)        # ChemicalSystem
view(transformation)
view(campaign)      # AlchemicalNetwork
```

[`notebooks.md`](./notebooks.md) is the cell behaviour and
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

## Viewing examples

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

## Viewing openfe objects in Python

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
view(planned)

campaign = openfe.setup.RBFEAlchemicalNetworkPlanner()(
    ligands=ligands, solvent=solvent, protein=protein,
)
view(campaign)
```


## Installing into an openfe environment

```bash
conda activate my-openfe-env
pip install "alchemy-viz[notebook]"   # the notebook extra is optional
```

`gufe` must be installed from conda-forge due to unresolved PyPI dependencies

If `gufe` is missing `alchemy_viz._gufe.require_gufe` raises with the conda-forge instruction.
