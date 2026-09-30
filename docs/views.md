# `view()` payload types


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
| `AlchemicalNetworkViz` | `AlchemicalNetwork` | `gufe-alchemical-network` | a box per ligand and a line per pair, with the legs behind them; where a campaign ran several protocols, a chip each on the header colours the lines that ran under it |
| `ProtocolViz` | `Protocol` | `gufe-protocol` | the settings tree |
