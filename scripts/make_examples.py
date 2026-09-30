#!/usr/bin/env python
"""Build ``examples/*.json`` from real gufe objects.

``examples/`` is the hinge of the test strategy: the same files feed pytest,
vitest, the drag-and-drop dev page and the gallery. If they drift, everything
fails at once, which is the point.

Most of it comes from gufe's own test data, so the fixtures are real
serializations of real objects rather than something hand-typed that happens to
satisfy the schema. The two inputs gufe does not ship live in ``scripts/data/``:
the ten-ligand TYK2 network from OpenFE's RBFE tutorial, and the frozen ligands
of the synthetic two-hundred-ligand network. Both are read, never regenerated
here - see :func:`_tyk2_network` and :func:`_large_network`.

Run with ``pixi run examples``.
"""

from __future__ import annotations

import io
import json
import pathlib
import re
import sys
import warnings

import gufe
from gufe.tokenization import GufeTokenizable

REPO = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO / "python"))
# `make_big_network` is imported for the rule that joins the large network up.
# A script run as `python scripts/make_examples.py` already has this on the path;
# saying so anyway means the import works however this module is reached.
sys.path.insert(0, str(REPO / "scripts"))

OUT = REPO / "examples"

#: Inputs that gufe does not ship, which this script reads rather than builds.
DATA = REPO / "scripts" / "data"


def _gufe_data() -> pathlib.Path:
    import gufe

    return pathlib.Path(gufe.__file__).parent / "tests" / "data"


def _benzene_modifications() -> dict[str, gufe.SmallMoleculeComponent]:
    """The seven substituted benzenes gufe ships, keyed by name."""
    from gufe import SmallMoleculeComponent
    from rdkit import Chem

    supplier = Chem.SDMolSupplier(str(_gufe_data() / "benzene_modifications.sdf"), removeHs=False)
    return {m.GetProp("_Name"): SmallMoleculeComponent.from_rdkit(m) for m in supplier if m is not None}


# Coordinate precision the fixtures are quantized to, matching the four decimal
# places a V2000 mol block stores.
_COORD_DECIMALS = 4

# How far a coordinate must sit from a rounding boundary for _quantize to accept
# it. ETKDG and MMFF are floating point pipelines whose results agree between
# platforms to roughly twelve decimal places, so a gap this size means every
# platform rounds to the same double. A coordinate closer than this to a
# boundary is not safe to round, and a divergence bigger than this is not
# floating point noise, it is a different minimum.
_COORD_TIE_MARGIN = 1e-9


def _quantize(mol):
    """Round ``mol``'s conformer to `_COORD_DECIMALS`, in place.

    A gufe key is a hash of the full precision float64 conformer, but a mol
    block stores four decimals. An embedded conformer therefore serializes to
    the same SDF bytes on every platform while hashing to a different key, which
    showed up as check_generated.sh failing in CI and passing on a developer
    machine. Rounding to the precision the SDF already shows makes the key
    describe exactly the coordinates a reader can see, on every platform.
    """
    from rdkit.Geometry import Point3D

    conf = mol.GetConformer()
    for index in range(mol.GetNumAtoms()):
        pos = conf.GetAtomPosition(index)
        conf.SetAtomPosition(index, Point3D(*(_round_coord(v) for v in (pos.x, pos.y, pos.z))))
    return mol


def _round_coord(value: float) -> float:
    rounded = round(value, _COORD_DECIMALS)
    if abs(value - rounded) > 0.5 * 10**-_COORD_DECIMALS - _COORD_TIE_MARGIN:
        raise AssertionError(
            f"coordinate {value!r} is within {_COORD_TIE_MARGIN} of a rounding boundary, "
            f"so it would not round the same way on every platform. Re-embed with a "
            f"different seed, or freeze this conformer as a mol block literal."
        )
    return rounded


def _acetate() -> gufe.SmallMoleculeComponent:
    """A charged molecule, so `total_charge` is exercised as something but 0."""
    from gufe import SmallMoleculeComponent
    from rdkit import Chem
    from rdkit.Chem import AllChem

    mol = Chem.AddHs(Chem.MolFromSmiles("CC(=O)[O-]"))
    AllChem.EmbedMolecule(mol, randomSeed=0xF00D)
    AllChem.MMFFOptimizeMolecule(mol)
    mol.SetProp("_Name", "acetate")
    return SmallMoleculeComponent.from_rdkit(_quantize(mol))


def _somebodys_own_component() -> gufe.Component:
    """A component gufe has never heard of, which gufe explicitly supports.

    Every other fixture is a gufe class; this one deliberately is not, because
    ``UnknownComponentViz`` exists for exactly the case where a user's own
    ``Component`` subclass turns up inside a system this repo has to draw.
    """

    class NanoparticleComponent(gufe.Component):
        """Stands in for any Component defined outside gufe."""

        @property
        def name(self) -> str:
            return "gold nanoparticle"

        @property
        def total_charge(self) -> int:
            return 0

        def _to_dict(self) -> dict:
            return {}

        @classmethod
        def _from_dict(cls, d: dict):
            return cls()

        @classmethod
        def _defaults(cls) -> dict:
            return {}

    return NanoparticleComponent()


def _renamed(mol: gufe.SmallMoleculeComponent) -> gufe.SmallMoleculeComponent:
    """``mol`` again, named after its SMILES where it has no name of its own.

    gufe's fixture ligands are unnamed, and a campaign built out of them is a
    graph of nameless systems with nothing to tell them apart. A SMILES is a
    poor name and a better one than nothing.

    A molecule that arrived with a name keeps it, untouched: the Eg5 and TYK2
    ligands are named by whoever prepared them, and replacing ``lig_CHEMBL1086410``
    with sixty characters of SMILES would be this function making a real
    campaign harder to read in order to help a synthetic one.

    The round trip through RDKit preserves atom indices, which is what makes it
    safe to keep an existing mapping's ``componentA_to_componentB`` when the
    molecules on either end of it are replaced by their renamed selves.
    """
    from gufe import SmallMoleculeComponent

    if mol.name:
        return mol
    return SmallMoleculeComponent.from_rdkit(mol.to_rdkit(), name=mol.smiles)


def _dummy_protocol() -> gufe.Protocol:
    """gufe's own ``DummyProtocol``, from its test suite.

    A ``Transformation`` cannot be built without a ``Protocol``, and gufe ships
    no concrete one outside its tests - the real ones live in OpenFE, which this
    repo does not depend on. Borrowing the test double keeps the rule that every
    fixture here is a real serialization of a real gufe object, and the payload
    carries the protocol as a class name and nothing else, so a stand-in is
    exactly as informative as the real thing would be.
    """
    from gufe.tests.test_protocol import DummyProtocol

    return DummyProtocol(settings=DummyProtocol.default_settings())


class _NamedProtocol(gufe.Protocol):
    """A Protocol that is a name, for the fixtures whose real one cannot be imported.

    The real protocols live in OpenFE, which this repository does not depend on
    and cannot import - the same reason :func:`_dummy_protocol` borrows gufe's
    test double everywhere else. A stand-in costs a fixture nothing, because a
    payload carries a Protocol as its class name and its key and nothing else:
    settings are deliberately absent, so the name is the whole of what a reader
    gets from it either way. Everything else in these fixtures - the ligands, the
    mappings, the topology, the protein - is a real campaign's own.

    Subclassing gufe's ``Protocol`` rather than its ``DummyProtocol`` keeps this
    module importable without gufe's test suite. The four methods below are the
    whole abstract interface; neither of the two that would run anything is ever
    reached, because a fixture is serialized and never executed.

    Each subclass is a class name and a docstring, because that is all a payload
    can tell apart. Two stand-ins with the same settings and different names are
    two protocols to gufe and to the views, which is exactly what a campaign run
    under more than one looks like.
    """

    _settings_cls = gufe.settings.Settings

    @classmethod
    def _default_settings(cls):
        return gufe.settings.Settings.get_defaults()

    @classmethod
    def _defaults(cls):
        return {}

    def _create(self, stateA, stateB, mapping=None, extends=None):
        raise NotImplementedError("an example's protocol is never run")

    def _gather(self, protocol_dag_results):
        raise NotImplementedError("an example's protocol is never run")


class SepTopProtocol(_NamedProtocol):
    """Stands in for ``openfe.protocols.openmm_septop.SepTopProtocol``."""


class RelativeHybridTopologyProtocol(_NamedProtocol):
    """Stands in for ``openfe.protocols.openmm_rfe.RelativeHybridTopologyProtocol``.

    The workhorse of a relative campaign, and what an OpenFE plan names on every
    edge unless it was told otherwise.
    """


class NonEquilibriumCyclingProtocol(_NamedProtocol):
    """Stands in for ``feflow.protocols.NonEquilibriumCyclingProtocol``.

    The other way of running a relative edge, and the reason a campaign ends up
    naming two: an edge that will not converge under replica exchange is rerun
    by switching it fast and often instead, without the rest of the plan
    changing.
    """


class AbsoluteSolvationProtocol(_NamedProtocol):
    """Stands in for ``openfe.protocols.openmm_afe.AbsoluteSolvationProtocol``.

    What an absolute transformation has to be run under. A protocol that mutates
    one ligand into another cannot decouple one from its solvent, so an anchor in
    a relative network is not a choice of protocol - it is a different one.
    """


def _solvated_transformation(
    edge: gufe.LigandAtomMapping,
    protocol: gufe.Protocol,
    systems: dict[str, gufe.ChemicalSystem] | None = None,
) -> gufe.Transformation:
    """One edge of gufe's ligand network, as a solvated transformation.

    ``systems`` is an optional cache keyed by ligand, so that a network built
    out of several of these shares one ``ChemicalSystem`` per ligand rather than
    creating a fresh, equal-but-distinct one per edge - which is what makes the
    alchemical network a connected graph instead of a row of disjoint pairs.
    """
    from gufe import ChemicalSystem, LigandAtomMapping, SolventComponent, Transformation

    if systems is None:
        systems = {}

    def system(mol: gufe.SmallMoleculeComponent) -> gufe.ChemicalSystem:
        return systems.setdefault(
            str(mol.key),
            ChemicalSystem({"ligand": mol, "solvent": SolventComponent()}, name=mol.name),
        )

    ligand_a, ligand_b = _renamed(edge.componentA), _renamed(edge.componentB)
    mapping = LigandAtomMapping(ligand_a, ligand_b, edge.componentA_to_componentB, edge.annotations)
    return Transformation(
        stateA=system(ligand_a),
        stateB=system(ligand_b),
        mapping=mapping,
        protocol=protocol,
        name=f"{ligand_a.name} to {ligand_b.name}",
    )


def _alchemical_network(network: gufe.LigandNetwork, protocol: gufe.Protocol) -> gufe.AlchemicalNetwork:
    """gufe's ligand network again, one layer up: solvated systems and edges.

    Same three ligands and the same three mappings, promoted to
    ``ChemicalSystem`` nodes and ``Transformation`` edges - so the two network
    views can be compared side by side in the gallery on data that is the same
    underneath.
    """
    from gufe import AlchemicalNetwork

    systems: dict[str, gufe.ChemicalSystem] = {}
    edges = sorted(network.edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))
    return AlchemicalNetwork(
        [_solvated_transformation(edge, protocol, systems) for edge in edges],
        name="solvated ligand transformations",
    )


def _absolute_network(network: gufe.LigandNetwork, protocol: gufe.Protocol) -> gufe.AlchemicalNetwork:
    """The same ligands once more, decoupled rather than mutated into each other.

    The shape a set of absolute free energies makes, and the one no relative
    fixture can show. A relative transformation carries a ligand at both ends and
    a mapping between them; an absolute one carries a ligand at one end only, and
    no mapping at all, because nothing is being turned into anything - the ligand
    is being taken out of the system.

    That makes two things the views have to answer for and had no fixture for:
    a chemical system with no ligand in it, which is where every transformation
    ends, and a transformation with no mapping, which is what the detail pane
    draws when one is clicked. Every edge shares the one reference state, so the
    graph is a star rather than a chain - the other shape an alchemical network
    comes in.
    """
    from gufe import AlchemicalNetwork, ChemicalSystem, SolventComponent, Transformation

    solvent = SolventComponent()
    # One shared reference state, for the reason `_solvated_transformation`
    # caches its systems: a fresh, equal-but-distinct ChemicalSystem per edge
    # would make this a row of disjoint pairs rather than a star.
    reference = ChemicalSystem({"solvent": solvent}, name="water")
    molecules = sorted((_renamed(mol) for mol in network.nodes), key=lambda mol: (mol.name, str(mol.key)))
    return AlchemicalNetwork(
        [
            Transformation(
                stateA=ChemicalSystem({"ligand": mol, "solvent": solvent}, name=mol.name),
                stateB=reference,
                mapping=None,
                protocol=protocol,
                name=f"{mol.name} decoupled from water",
            )
            for mol in molecules
        ],
        name="absolute hydration free energies",
    )


def _multi_protocol_network() -> gufe.AlchemicalNetwork:
    """The TYK2 binding campaign run under three protocols rather than one.

    Nothing in gufe or in the schema says a network runs a single protocol - it
    is named per transformation - and every other fixture here names one, so the
    case a reader most needs to see was the case nothing showed: a header that
    has to say *which* protocols, and a chip per protocol that has to be able to
    open each of them and mark the lines it runs.

    The plan is the ordinary one it takes to get there, at the size a campaign
    actually comes in. Seven of the nine TYK2 mappings run relative under hybrid
    topology, in both legs, exactly as they do in :func:`_tyk2_rbfe_network`; two
    would not converge that way and are rerun by non-equilibrium cycling, which
    changes how those edges are run and nothing else about the campaign; and two
    ligands are anchored by an absolute transformation out of the solvent leg
    into pure water, which neither relative protocol could run at all. So the
    counts differ by an order of magnitude rather than by one - fourteen
    transformations, four, two - which is what the chips' shares are for, and
    what a lens over four lines in twenty has to stay findable against.

    The ten ligands, the nine mappings and the kinase are the RBFE tutorial's own,
    read the way :func:`_tyk2_network` and :func:`_tyk2_rbfe_network` read them.
    That campaign under a single protocol is the fixture to read this one
    against: same nodes, same lines, and the only difference is which protocol
    each line names.
    """
    from gufe import AlchemicalNetwork, ChemicalSystem, ProteinComponent, SolventComponent, Transformation

    hybrid = RelativeHybridTopologyProtocol(settings=RelativeHybridTopologyProtocol.default_settings())
    cycling = NonEquilibriumCyclingProtocol(settings=NonEquilibriumCyclingProtocol.default_settings())
    decoupling = AbsoluteSolvationProtocol(settings=AbsoluteSolvationProtocol.default_settings())

    solvent = SolventComponent()
    protein = ProteinComponent.from_pdb_file(str(DATA / "tyk2_protein.pdb"), name="tyk2")

    # Insertion order is iteration order, so the leg loop below is deterministic.
    legs = {
        "solvent": {"solvent": solvent},
        "complex": {"solvent": solvent, "protein": protein},
    }
    systems: dict[tuple[str, str], gufe.ChemicalSystem] = {}

    def system(mol: gufe.SmallMoleculeComponent, leg: str) -> gufe.ChemicalSystem:
        """One shared system per (ligand, leg), so each leg is a connected graph."""
        return systems.setdefault(
            (str(mol.key), leg),
            ChemicalSystem({"ligand": mol, **legs[leg]}, name=f"{mol.name}_{leg}"),
        )

    # Sorted by gufe key for the same byte-stability reason as everywhere else
    # here, and so that which two mappings are the stubborn ones does not depend
    # on set iteration order.
    edges = sorted(_tyk2_network().edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))
    rerun = set(edges[-2:])
    relative = [
        Transformation(
            stateA=system(edge.componentA, leg),
            stateB=system(edge.componentB, leg),
            mapping=edge,
            protocol=cycling if edge in rerun else hybrid,
            name=f"{edge.componentA.name} to {edge.componentB.name} ({leg})",
        )
        for edge in edges
        for leg in legs
    ]

    # The anchors are ligands the relative edges already reach, and their systems
    # come out of the cache above for that reason: the absolute transformations
    # hang off the solvent leg rather than sitting beside it. Both end at the one
    # reference state - water with nothing in it, the same shape as in
    # :func:`_absolute_network` - which is what joins them to each other too.
    water = ChemicalSystem({"solvent": solvent}, name="water")
    anchors = sorted({edge.componentA for edge in edges}, key=lambda mol: mol.name)[:2]
    absolute = [
        Transformation(
            stateA=system(mol, "solvent"),
            stateB=water,
            mapping=None,
            protocol=decoupling,
            name=f"{mol.name} decoupled from water",
        )
        for mol in anchors
    ]
    return AlchemicalNetwork([*relative, *absolute], name="TYK2 campaign under three protocols")


def _tyk2_rbfe_network() -> gufe.AlchemicalNetwork:
    """The ten TYK2 ligands as the binding campaign OpenFE plans from them.

    :func:`_alchemical_network` promotes a ligand network into solvated
    transformations, which is the shape of a hydration campaign. A *binding*
    campaign is the other shape, and the difference shows up in the view: every
    mapping becomes two transformations - a solvent leg and a complex leg - so
    the graph is two components rather than one, and the complex leg's chemical
    systems carry a protein. It is the only fixture where an alchemical node
    holds anything but a ligand and a solvent, which is what makes the
    node-level component dispatch reachable from the alchemical view at all.

    The protein is the TYK2 kinase domain from the same RBFE tutorial the
    mappings come from, committed as ``scripts/data/tyk2_protein.pdb`` for the
    reason given in :func:`_tyk2_network`: neither it nor the planner is a
    dependency of this repository, so it is read rather than rebuilt.

    Unlike :func:`_solvated_transformation`, the ligands are not renamed here.
    They arrive from the GraphML already named - ``lig_ejm_31`` and friends - and
    a real campaign's labels are the point of the fixture.
    """
    from gufe import AlchemicalNetwork, ChemicalSystem, ProteinComponent, SolventComponent, Transformation

    protocol = _dummy_protocol()
    solvent = SolventComponent()
    protein = ProteinComponent.from_pdb_file(str(DATA / "tyk2_protein.pdb"), name="tyk2")

    # Insertion order is iteration order, so the leg loop below is deterministic.
    legs = {
        "solvent": {"solvent": solvent},
        "complex": {"solvent": solvent, "protein": protein},
    }
    systems: dict[tuple[str, str], gufe.ChemicalSystem] = {}

    def system(mol: gufe.SmallMoleculeComponent, leg: str) -> gufe.ChemicalSystem:
        """One shared system per (ligand, leg), so each leg is a connected graph."""
        return systems.setdefault(
            (str(mol.key), leg),
            ChemicalSystem({"ligand": mol, **legs[leg]}, name=f"{mol.name}_{leg}"),
        )

    # Sorted by gufe key for the same byte-stability reason as everywhere else here.
    edges = sorted(_tyk2_network().edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))
    return AlchemicalNetwork(
        [
            Transformation(
                stateA=system(edge.componentA, leg),
                stateB=system(edge.componentB, leg),
                mapping=edge,
                protocol=protocol,
                name=f"{edge.componentA.name} to {edge.componentB.name} ({leg})",
            )
            for edge in edges
            for leg in legs
        ],
        name="TYK2 RBFE campaign",
    )


def _septop_alchemical_network() -> gufe.AlchemicalNetwork:
    """The SepTop campaign the tutorial builds out of :func:`_septop_network`.

    The third campaign shape, and the only one of the three that is neither a
    hydration run nor a two-legged binding run. Separated topologies decouples
    one ligand while coupling the other in the same simulation, so a
    transformation is a whole thermodynamic cycle rather than one leg of one:
    nine mappings become nine transformations over ten chemical systems, every
    one of them a complex. :func:`_tyk2_rbfe_network` draws as two components, a
    solvent leg and a complex leg; this one is a single connected graph of
    complexes, which is what makes it worth drawing beside that one.

    Its transformations carry no mapping. That is the protocol's own rule rather
    than a gap in the fixture - each ligand keeps its own coordinates and no atom
    of one is paired against an atom of the other - and it is why the network it
    was planned from is committed beside it: the mappings exist, they scored the
    edges, and then the campaign dropped them.
    :func:`_absolute_network` also has mappingless edges, but as ABFE runs out of
    a system; this is the relative case with nothing mapped.

    Rebuilt here rather than read back from the campaign JSON that tutorial run
    wrote, because the protocol in that file is OpenFE's and cannot be
    deserialized without OpenFE. The ligands, the names, the topology and the
    protein are that campaign's; see :class:`SepTopProtocol` for what stands in
    for the protocol and why the payload cannot tell the difference.
    """
    from gufe import AlchemicalNetwork, ChemicalSystem, ProteinComponent, SolventComponent, Transformation

    protocol = SepTopProtocol(settings=SepTopProtocol.default_settings())
    solvent = SolventComponent()
    protein = ProteinComponent.from_pdb_file(str(DATA / "tyk2_protein.pdb"), name="tyk2")

    systems: dict[str, gufe.ChemicalSystem] = {}

    def system(mol: gufe.SmallMoleculeComponent) -> gufe.ChemicalSystem:
        """One shared system per ligand, so the campaign is a connected graph."""
        return systems.setdefault(
            str(mol.key),
            ChemicalSystem({"ligand": mol, "protein": protein, "solvent": solvent}, name=mol.name),
        )

    # Sorted by gufe key for the same byte-stability reason as everywhere else here.
    edges = sorted(_septop_network().edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))
    return AlchemicalNetwork(
        [
            Transformation(
                stateA=system(edge.componentA),
                stateB=system(edge.componentB),
                mapping=None,
                protocol=protocol,
                name=f"rbfe_{edge.componentA.name}_{edge.componentB.name}",
            )
            for edge in edges
        ],
        name="TYK2 SepTop campaign",
    )


def _tyk2_mixed_network() -> gufe.AlchemicalNetwork:
    """The TYK2 campaign run partly relative and partly absolute.

    Four of the mappings run as RBFE, in both legs, exactly as they do in
    :func:`_tyk2_rbfe_network`; two of the ligands are also run as ABFE, one
    transformation each, out of the complex and into the apo protein. Absolute
    anchors in a relative network are a real plan rather than a contrived one:
    the relative edges give differences and the absolute ones give the series
    something to be a difference from.

    It is the fixture for what a mixed network does to the view. The apo system
    is the only node in the graph carrying no ligand, so it is the one box that
    collapses onto nothing and the one with no structure drawn in it; the two
    transformations that end there run in the complex leg and carry no mapping,
    while the eight around them do. Between them that is a box of one system and
    boxes of two, and lines holding one transformation beside lines holding both
    legs of a mapping.
    """
    from gufe import AlchemicalNetwork, ChemicalSystem, ProteinComponent, SolventComponent, Transformation

    protocol = _dummy_protocol()
    solvent = SolventComponent()
    protein = ProteinComponent.from_pdb_file(str(DATA / "tyk2_protein.pdb"), name="tyk2")

    legs = {
        "solvent": {"solvent": solvent},
        "complex": {"solvent": solvent, "protein": protein},
    }
    systems: dict[tuple[str, str], gufe.ChemicalSystem] = {}

    def system(mol: gufe.SmallMoleculeComponent, leg: str) -> gufe.ChemicalSystem:
        return systems.setdefault(
            (str(mol.key), leg),
            ChemicalSystem({"ligand": mol, **legs[leg]}, name=f"{mol.name}_{leg}"),
        )

    # The apo protein, and the same one for both anchors: the absolute
    # transformations meet there, which is what joins them to each other rather
    # than leaving two more disjoint pairs on the canvas.
    apo = ChemicalSystem({"protein": protein, "solvent": solvent}, name="apo_tyk2")

    # Sorted by gufe key, then cut to four, so which mappings are relative here
    # does not depend on set iteration order.
    edges = sorted(_tyk2_network().edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))[:4]
    # The anchors are ligands the relative edges already reach, so the absolute
    # transformations hang off the complex leg rather than beside it.
    anchors = sorted({edge.componentA for edge in edges}, key=lambda mol: mol.name)[:2]

    relative = [
        Transformation(
            stateA=system(edge.componentA, leg),
            stateB=system(edge.componentB, leg),
            mapping=edge,
            protocol=protocol,
            name=f"{edge.componentA.name} to {edge.componentB.name} ({leg})",
        )
        for edge in edges
        for leg in legs
    ]
    absolute = [
        Transformation(
            stateA=system(mol, "complex"),
            stateB=apo,
            mapping=None,
            protocol=protocol,
            name=f"{mol.name} decoupled from tyk2",
        )
        for mol in anchors
    ]
    return AlchemicalNetwork(relative + absolute, name="TYK2 mixed RBFE and ABFE campaign")


def _tyk2_ligand(name: str) -> gufe.SmallMoleculeComponent:
    """The TYK2 ligand called ``name``, out of the tutorial's network.

    Named rather than indexed for the reason :func:`_mapping_between` is: a
    network's nodes are a frozenset, so the n-th of them differs between runs
    and these files are committed.
    """
    for node in _tyk2_network().nodes:
        if node.name == name:
            return node
    raise LookupError(f"the TYK2 network has no ligand called {name!r}")


def _tyk2_complex() -> gufe.ChemicalSystem:
    """One TYK2 ligand in its binding site, as a system on its own.

    The complex legs of :func:`_tyk2_rbfe_network` already hold this - a ligand,
    the kinase and a solvent - but only inside a 200-node campaign. This is one
    of those nodes standing alone, because a view of a bound complex is a view
    of a chemical system, and developing or testing one against the campaign
    means paying for the whole campaign to reach a single node.

    The two structures share a frame, which is the whole point and is not
    something this script arranges: the ligands were docked into this protein
    upstream in OpenFE's RBFE tutorial, and are carried through the GraphML and
    the PDB unmoved. ``lig_ejm_31`` sits 2.5 A off the nearest protein atom with
    22 residues inside 4.5 A of it - the ATP site, hinge and glycine-rich loop -
    so anything that draws both components at once draws a pose, and anything
    that silently recentres one of them is visible immediately.
    """
    from gufe import ChemicalSystem, ProteinComponent, SolventComponent

    return ChemicalSystem(
        {
            "ligand": _tyk2_ligand("lig_ejm_31"),
            "protein": ProteinComponent.from_pdb_file(str(DATA / "tyk2_protein.pdb"), name="tyk2"),
            "solvent": SolventComponent(),
        },
        name="lig_ejm_31 bound to TYK2",
    )


def _large_alchemical_network() -> gufe.AlchemicalNetwork:
    """The two-hundred-ligand load fixture, one layer up.

    The same nodes and the same 594 mappings as ``ligand_network_large.json``,
    promoted to chemical systems and transformations - so the level-of-detail
    rule can be seen on the alchemical view at the size it was written for, and
    against the ligand view of a graph that is the same underneath.

    Solvated rather than a binding campaign: a second leg would double both the
    payload and the transformation count without reaching a drawing case
    :func:`_tyk2_rbfe_network` does not already cover. **The mappings are
    synthetic**, exactly as in the ligand network - see :func:`_large_network`.
    """
    from gufe import AlchemicalNetwork, ChemicalSystem, SolventComponent, Transformation

    protocol = _dummy_protocol()
    solvent = SolventComponent()
    systems: dict[str, gufe.ChemicalSystem] = {}

    def system(mol: gufe.SmallMoleculeComponent) -> gufe.ChemicalSystem:
        return systems.setdefault(
            str(mol.key),
            ChemicalSystem({"ligand": mol, "solvent": solvent}, name=mol.name),
        )

    edges = sorted(_large_network().edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))
    return AlchemicalNetwork(
        [
            Transformation(
                stateA=system(edge.componentA),
                stateB=system(edge.componentB),
                mapping=edge,
                protocol=protocol,
                name=f"{edge.componentA.name} to {edge.componentB.name}",
            )
            for edge in edges
        ],
        name="two hundred solvated ligands",
    )


def _named_network(network: gufe.LigandNetwork) -> gufe.LigandNetwork:
    """``network`` again, with every ligand named after its SMILES.

    gufe's GraphML fixture has three unnamed molecules, which is a realistic and
    awkward case - the network view has to fall back to a short form of the gufe
    key for its node labels. This variant is the other half of that pair: same
    topology, same mappings, same scores, but with names, so the labelled path is
    exercised too and the gallery card is legible.
    """
    from gufe import LigandAtomMapping, LigandNetwork, SmallMoleculeComponent

    renamed = {
        str(mol.key): SmallMoleculeComponent.from_rdkit(mol.to_rdkit(), name=mol.smiles) for mol in network.nodes
    }
    return LigandNetwork(
        nodes=list(renamed.values()),
        edges=[
            LigandAtomMapping(
                renamed[str(edge.componentA.key)],
                renamed[str(edge.componentB.key)],
                edge.componentA_to_componentB,
                edge.annotations,
            )
            for edge in network.edges
        ],
    )


def _mapping_between(network: gufe.LigandNetwork, name_a: str, name_b: str) -> gufe.LigandAtomMapping:
    """The edge of ``network`` running from the ligand ``name_a`` to ``name_b``.

    Named rather than indexed, for the reason the base ``ligand_atom_mapping``
    fixture is sorted by gufe key: a network's edges are a frozenset, so the
    n-th of them is whatever order this process happened to yield, and these
    files are committed and have to be byte-identical across runs. Naming the
    pair also puts the choice in the source, where the reason for it can be
    read - see :func:`build` for why each of these two was picked.
    """
    for edge in network.edges:
        if (edge.componentA.name, edge.componentB.name) == (name_a, name_b):
            return edge
    raise LookupError(f"this network has no mapping from {name_a!r} to {name_b!r}")


def _tyk2_network() -> gufe.LigandNetwork:
    """Ten TYK2 ligands and the nine mappings OpenFE planned between them.

    From the RBFE tutorial in OpenFE's ExampleNotebooks, where
    ``openfe plan-rbfe-network`` writes it out of ``tyk2_ligands.sdf``. Committed
    as ``scripts/data/tyk2_network.graphml`` because neither the ligands nor the
    planner is a dependency of this repository, and read rather than replanned:
    a network whose edges came out of a real mapper is the point of it, and
    re-running one here would need OpenFE and would still not be byte-stable.

    It is the middle of the three sizes: three ligands is the shape of a network,
    ten is what one looks like, and the level-of-detail work is answering for two
    hundred. All three are in ``examples/`` so a change to the view can be seen
    at each.
    """
    from gufe import LigandNetwork

    return LigandNetwork.from_graphml((DATA / "tyk2_network.graphml").read_text(encoding="utf-8"))


def _septop_network() -> gufe.LigandNetwork:
    """The same ten TYK2 ligands, planned the way the SepTop tutorial plans them.

    :func:`_tyk2_network` is this network as ``openfe plan-rbfe-network`` writes
    it, mapped by LOMAP. This one is from the SepTop tutorial in OpenFE's
    ExampleNotebooks, which proposes mappings with Kartograf and scores them with
    LOMAP, over ligands charged with AM1BCC in that run. Both are minimal
    spanning networks over the same scorer, so they pair the same ligands; two of
    the nine mappings pair a different number of atoms, which is the mapper
    showing through, and the partial charges differ in the last few digits, which
    is the charge run showing through.

    It is here because it is what the campaign beside it was planned from, and
    because of the one thing the tutorial says about it: SepTop never uses an
    atom mapping, so these mappings only ever scored the edges. Committed as
    ``scripts/data/tyk2_septop_network.graphml`` and read rather than replanned,
    for the reason given in :func:`_tyk2_network`.
    """
    from gufe import LigandNetwork

    return LigandNetwork.from_graphml((DATA / "tyk2_septop_network.graphml").read_text(encoding="utf-8"))


def _eg5_network() -> gufe.LigandNetwork:
    """Ten Eg5 ligands, four of them neutral and six carrying a formal +1.

    The one network here whose ligands are not all the same charge, which is what
    it is for: a charge is drawn on a node only where there is one, and a mapping
    is marked only where it changes one, so neither can be seen on a network of
    neutral ligands. Every other fixture is exactly that.

    Cut out of the Eg5 campaign OpenFE publishes as
    ``networks/alchemical_networks/large_rbfe_network.json`` in ExampleNotebooks:
    28 ligands, planned with LOMAP into a minimal spanning network. The ligands
    and the mappings are that campaign's, read rather than replanned, for the
    same reason :func:`_tyk2_network` reads a graphml - the planner is not a
    dependency of this repository and would not be byte-stable if it were.

    Ten of the 28, grown outwards from the single mapping in the whole campaign
    that changes the charge. That it is single is the fact worth keeping: LOMAP
    plans around charge changes where it can, so a real campaign has one or two
    among dozens, and a picture that could not pick them out would be a picture
    of the wrong thing.
    """
    from gufe import LigandNetwork

    return LigandNetwork.from_graphml((DATA / "eg5_network.graphml").read_text(encoding="utf-8"))


def _jak2_network() -> gufe.LigandNetwork:
    """267 JAK2 inhibitors in the poses a docking run put them in.

    The one network fixture whose ligands share a coordinate frame. Everywhere
    else - gufe's benzenes, the TYK2 tutorial, the synthetic two hundred - each
    ligand carries a conformer of its own, at whatever origin it was embedded or
    written at, and the only place two components meet is
    :func:`_tyk2_complex`. These 267 were docked into one frame of a JAK2
    molecular dynamics trajectory with their shared aminopyrimidine core
    restrained, so they are superposed on each other and on the kinase, which is
    what a relative binding free energy campaign actually starts from.

    Read rather than rebuilt, from ``scripts/data/jak2_docked_poses.sdf`` and the
    edges beside it. ``make_jak2_network.py`` wrote both from the campaign's own
    output and says what an edge here means - the correspondence is geometric,
    no mapper was run - and why freezing it is what keeps this file byte-stable.
    """
    from make_jak2_network import network_from

    return network_from(DATA / "jak2_docked_poses.sdf", DATA / "jak2_network_edges.json")


def _jak2_hub(network: gufe.LigandNetwork) -> str:
    """The name of the network's busiest node, ties broken by the name itself.

    Two fixtures are built around this ligand, so which one it is has to be
    decided the same way in both, and it has to be decided rather than chosen: a
    tie broken by set iteration order would move between runs, and these files
    are committed.
    """
    degree: dict[str, int] = {node.name: 0 for node in network.nodes}
    for edge in network.edges:
        degree[edge.componentA.name] += 1
        degree[edge.componentB.name] += 1
    return min(degree, key=lambda name: (-degree[name], name))


def _jak2_ligand() -> gufe.SmallMoleculeComponent:
    """One docked JAK2 inhibitor, standing alone.

    The small molecule view's other two fixtures are benzene and a four-atom
    anion. Both are read in a glance, and neither asks much of the drawing: no
    fused rings to lay out, no conformer worth turning, barely any elements to
    colour. This is a real inhibitor in the pose a docking run put it in, which
    is the molecule that view is for.

    The busiest node of :func:`_jak2_network`, which is also what
    :func:`_jak2_ensemble` builds its ensemble around - so the two fixtures are
    the same molecule alone and in company.
    """
    network = _jak2_network()
    return {node.name: node for node in network.nodes}[_jak2_hub(network)]


#: Ligands in the docked ensemble: the busiest node of the JAK2 network and the
#: five partners it overlaps best. Enough to read as an ensemble rather than as
#: a pose, and few enough that 3Dmol's element colouring still separates them -
#: the whole neighbourhood is thirteen, which draws as one object.
_ENSEMBLE_LIGANDS = 6


def _jak2_ensemble() -> gufe.ChemicalSystem:
    """Six docked poses in the JAK2 site at once, as one chemical system.

    :func:`_tyk2_complex` is a ligand in a site; this is an ensemble in one. The
    difference is a code path rather than a nicety: every other fixture puts
    exactly one small molecule in a system, so nothing until now has drawn two
    components of the same kind into a single scene, and the overlap between
    them is the thing this data has that no other fixture does.

    Which six is decided by the network rather than chosen: the ligand with the
    most edges, and the five of its partners whose poses overlap it best. So the
    picture answers a question the network view raises - these ligands are joined
    by an edge, what does that look like in the site - and it answers it on the
    same objects, since both come out of :func:`_jak2_network`.
    """
    from gufe import ChemicalSystem, ProteinComponent, SolventComponent

    network = _jak2_network()
    by_name = {node.name: node for node in network.nodes}
    hub = _jak2_hub(network)

    partners = sorted(
        (
            (edge.annotations["score"], edge.componentB.name if edge.componentA.name == hub else edge.componentA.name)
            for edge in network.edges
            if hub in (edge.componentA.name, edge.componentB.name)
        ),
        key=lambda pair: (-pair[0], pair[1]),
    )
    chosen = [hub] + [name for _, name in partners[: _ENSEMBLE_LIGANDS - 1]]

    return ChemicalSystem(
        {
            **{f"ligand_{name}": by_name[name] for name in chosen},
            "protein": ProteinComponent.from_pdb_file(str(DATA / "jak2_protein.pdb"), name="jak2"),
            "solvent": SolventComponent(),
        },
        name=f"{len(chosen)} docked poses in JAK2",
    )


#: Forward edges per ligand in the large network, matching what
#: ``make_big_network`` was run with. Three is enough to make the graph dense
#: enough to be worth drawing without tripling the payload.
_LARGE_EDGES_PER_NODE = 3


def _large_network() -> gufe.LigandNetwork:
    """Two hundred ligands, joined by mappings that are not chemistry.

    **A load fixture.** The molecules are real, embedded structures - that is what
    makes the payload size and the depiction cost real - but the mappings pair
    atoms by index and score them with an arithmetic ramp. Nothing about an edge
    here means anything, and the gallery note says so beside the picture.

    The ligands are read from ``scripts/data/large_network.sdf`` rather than
    embedded, which is what makes a fixture this size byte-stable: see the note
    at the top of ``make_big_network.py``, whose ``--sdf`` wrote that file, and
    whose :func:`synthetic_mappings` is imported here so the edge rule has one
    home rather than two.
    """
    from gufe import LigandNetwork, SmallMoleculeComponent
    from make_big_network import synthetic_mappings
    from rdkit import Chem

    supplier = Chem.SDMolSupplier(str(DATA / "large_network.sdf"), removeHs=False)
    mols = [SmallMoleculeComponent.from_rdkit(mol) for mol in supplier if mol is not None]
    return LigandNetwork(nodes=mols, edges=synthetic_mappings(mols, _LARGE_EDGES_PER_NODE))


def build() -> dict[str, GufeTokenizable]:
    """Return ``{filename: gufe object}``.

    Every declared type is represented. The two that need a
    :class:`gufe.Protocol` borrow gufe's own ``DummyProtocol`` - see
    :func:`_dummy_protocol` for why a stand-in is exactly as informative as a
    real one here.
    """
    from gufe import ChemicalSystem, LigandNetwork, ProteinComponent, SolventComponent

    data = _gufe_data()
    mols = _benzene_modifications()
    network = LigandNetwork.from_graphml((data / "ligand_network.graphml").read_text())
    # Sorted by gufe key so the chosen edge does not depend on set iteration
    # order - these files are committed and must be byte-stable across runs and
    # platforms. Names would not do it: every molecule in gufe's GraphML fixture
    # is unnamed, so a name-keyed sort is a three-way tie broken by whatever
    # order the frozenset happens to yield in this process.
    mapping = sorted(network.edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))[0]
    benzene = mols["benzene"]
    protocol = _dummy_protocol()

    return {
        # Two variants per kind: with and without a formal charge, and
        # a whole protein against a single-chain fragment of it. The third small
        # molecule is neither variant but the realistic case: a docked inhibitor,
        # which is what the depiction and the 3D styles are actually for.
        "small_molecule.json": benzene,
        "small_molecule_charged.json": _acetate(),
        "small_molecule_ligand.json": _jak2_ligand(),
        "protein.json": ProteinComponent.from_pdb_file(str(data / "181l.pdb"), name="181l"),
        "protein_fragment.json": _protein_fragment(data / "181l.pdb"),
        # The two PDB-carrying subclasses. They exist so the schema's three
        # PDB types are each exercised against a real object, and - more to the
        # point - so the dispatch order is proved on real data: both of these
        # are ProteinComponents, and a builder table in the wrong order would
        # quietly serialize them as one.
        "solvated_pdb.json": _solvated(data / "181l.pdb", "SolvatedPDBComponent"),
        "protein_membrane.json": _solvated(data / "181l.pdb", "ProteinMembraneComponent"),
        # The third V1 kind, at three sizes and in four variants. gufe's own
        # fixture twice over, whose molecules are unnamed and then named; a real
        # ten-ligand network from OpenFE's tutorial; and a synthetic two hundred,
        # which is the size the level-of-detail work is for.
        "ligand_network.json": network,
        "ligand_network_named.json": _named_network(network),
        "ligand_network_medium.json": _tyk2_network(),
        "ligand_network_charged.json": _eg5_network(),
        "ligand_network_septop.json": _septop_network(),
        "ligand_network_large.json": _large_network(),
        # The same size again, and real. The large network above measures what
        # 200 nodes cost; this one is 267 ligands of a docking campaign, so it
        # measures the same thing on molecules a chemist would recognise and is
        # the only network whose ligands share a frame - see `_jak2_network`.
        "ligand_network_docked.json": _jak2_network(),
        # Kinds that have no view yet. Committed now so the schema, both
        # validators and the "no visualization for X yet" panel are all exercised
        # against real data before the views exist.
        "solvent.json": SolventComponent(),
        # A mapping on its own, at three sizes cut from the three networks
        # above, so the standalone mapping view can be seen on the same data as
        # the network view that embeds it.
        #
        # The small one is gufe's own first edge: ethanol to ethane, two atoms
        # paired, which is the shape of a mapping and nothing else. The medium
        # one is the real thing - a LOMAP-scored TYK2 edge that grows a methyl
        # into a cyclopentyl, so 28 of ligand A's 32 atoms map and 14 of ligand
        # B's 42 are left unmapped, which is what the colouring is for. The
        # large one is the biggest pair the load network holds, 36 atoms against
        # 31; its correspondence is synthetic, as every edge of that network is.
        "ligand_atom_mapping.json": mapping,
        "ligand_atom_mapping_medium.json": _mapping_between(_tyk2_network(), "lig_ejm_31", "lig_ejm_48"),
        "ligand_atom_mapping_large.json": _mapping_between(_large_network(), "lig_0195", "lig_0198"),
        # The two kinds that need a Protocol. Both are the same three ligands as
        # the network above, one layer up, so the gallery reads as one story.
        "transformation.json": _solvated_transformation(mapping, protocol),
        # The alchemical network at the same three sizes as the ligand network
        # above, for the same reason: a view that reads on three nodes can be
        # unusable on two hundred. The middle one is a binding campaign rather
        # than a hydration one, which is the only place a protein reaches an
        # alchemical node.
        "alchemical_network.json": _alchemical_network(network, protocol),
        # The charged ligands one layer up, so the campaign view has the same
        # thing to show: a badge on the systems whose ligand carries a charge,
        # and a dashed transformation where a leg changes one.
        "alchemical_network_charged.json": _alchemical_network(_eg5_network(), protocol),
        "alchemical_network_medium.json": _tyk2_rbfe_network(),
        # The same ten ligands as a separated topologies campaign, which is the
        # third shape a campaign comes in: one transformation per mapping rather
        # than two, every system a complex, and no mapping on any edge.
        "alchemical_network_septop.json": _septop_alchemical_network(),
        "alchemical_network_large.json": _large_alchemical_network(),
        # The two shapes an absolute free energy makes, which the four above
        # cannot: a set of ASFE runs on the same three ligands as the first of
        # them, and a binding campaign whose relative edges are anchored by two
        # ABFE transformations. Between them they are the fixtures for a system
        # with no ligand and a transformation with no mapping.
        "alchemical_network_absolute.json": _absolute_network(network, protocol),
        "alchemical_network_mixed.json": _tyk2_mixed_network(),
        # The TYK2 campaign once more, run under three protocols instead of
        # one: the fixture for a header that has to name several, and the only
        # one where a network's protocol is a question rather than a constant.
        # Full size rather than the three ligands, because naming which lines
        # ran how is a question nobody has on a canvas of four.
        "alchemical_network_protocols.json": _multi_protocol_network(),
        # Not a gufe class at all, which is the only way to produce this type.
        "unknown_component.json": _somebodys_own_component(),
        # A chemical system on its own, in the two shapes a campaign is built
        # from: a solvated ligand, and the same idea with a protein around it.
        # The second is the only fixture where two components share a coordinate
        # frame, which is what a view of a bound complex needs.
        "chemical_system.json": ChemicalSystem(
            {"ligand": benzene, "solvent": SolventComponent()},
            name="benzene in water",
        ),
        "chemical_system_complex.json": _tyk2_complex(),
        # And the same idea with more than one ligand in the site, which no
        # other fixture has: six docked poses of a congeneric series, overlaid.
        "chemical_system_ensemble.json": _jak2_ensemble(),
    }


def _solvated(pdb_path: pathlib.Path, class_name: str) -> gufe.ProteinComponent:
    """A small ``SolvatedPDBComponent`` or ``ProteinMembraneComponent``.

    Both need box vectors, which ``infer_box_vectors`` derives from the
    coordinates with a fixed padding - so no magic numbers here, and the result
    is byte-stable. The same trimmed fragment as ``protein_fragment.json`` keeps
    the committed files reviewable.
    """
    import gufe

    klass = getattr(gufe, class_name)
    return klass.from_pdb_file(
        io.StringIO(_fragment_text(pdb_path)),
        name=f"181l_{class_name}",
        infer_box_vectors=True,
    )


def _fragment_text(pdb_path: pathlib.Path) -> str:
    """Chain A, residues 1-40 of ``181l``, plus its hetero atoms, as PDB text."""
    keep = []
    for line in pdb_path.read_text().splitlines():
        record = line[:6]
        if record not in ("ATOM  ", "HETATM") or line[21] != "A":
            continue
        try:
            resi = int(line[22:26])
        except ValueError:
            continue
        if record == "HETATM" or 1 <= resi <= 40:
            keep.append(line)

    header = [
        "HEADER    HYDROLASE(O-GLYCOSYL)",
        "TITLE     T4 LYSOZYME FRAGMENT (chain A residues 1-40 of 181L, plus hetero atoms)",
    ]
    return "\n".join(header + keep + ["END"]) + "\n"


def _protein_fragment(pdb_path: pathlib.Path) -> gufe.ProteinComponent:
    """Chain A, residues 1-40 of ``181l``, plus its hetero atoms.

    A ~50 kB stand-in for the 214 kB original: small enough to read in a diff and
    to render instantly in the gallery, while still being a real PDB that 3Dmol
    draws a real cartoon from.
    """
    from gufe import ProteinComponent

    return ProteinComponent.from_pdb_file(io.StringIO(_fragment_text(pdb_path)), name="181l_fragment")


#: OpenMM stamps its own version and *today's date* into the first REMARK of
#: every PDB it writes, so a protein fixture regenerated tomorrow, or on a
#: machine with a different OpenMM, differs from the committed one for reasons
#: that have nothing to do with this repo. The provenance is worth keeping; the
#: two moving parts are not.
_OPENMM_REMARK = re.compile(r"^REMARK   1 CREATED WITH OPENMM.*$", re.M)


def _stabilise(payload: dict) -> dict:
    """Strip the parts of a payload that change without anything changing.

    Walks the whole payload rather than one known key, because a PDB can now
    appear nested - inside a chemical system's components, or a transformation's
    two states - as well as at the top level.
    """
    if isinstance(payload, dict):
        for key, value in payload.items():
            if key == "pdb" and isinstance(value, str):
                payload[key] = _OPENMM_REMARK.sub("REMARK   1 CREATED WITH OPENMM", value)
            else:
                _stabilise(value)
    elif isinstance(payload, list):
        for item in payload:
            _stabilise(item)
    return payload


def main() -> int:
    from alchemy_viz import payload_for

    OUT.mkdir(parents=True, exist_ok=True)

    # gufe warns about hydrogens when reading some of its own test SDFs. That is
    # about the fixture, not about anything this script does.
    with warnings.catch_warnings():
        warnings.simplefilter("ignore", UserWarning)
        objects = build()

    written = 0
    for filename, obj in objects.items():
        path = OUT / filename
        text = json.dumps(_stabilise(payload_for(obj)), indent=2, sort_keys=False) + "\n"
        previous = path.read_text(encoding="utf-8") if path.exists() else None
        path.write_text(text, encoding="utf-8")
        status = "unchanged" if text == previous else "wrote"
        print(f"{status:>9}  {filename:<28} {len(text):>8} bytes  ({type(obj).__name__})")
        written += 1

    # Anything left over is a file whose builder was removed; say so rather than
    # letting a stale fixture keep passing tests.
    stale = sorted(p.name for p in OUT.glob("*.json") if p.name not in objects)
    if stale:
        print(f"\nWARNING: {len(stale)} file(s) in examples/ have no builder: {', '.join(stale)}", file=sys.stderr)

    print(f"\n{written} example payload(s) in {OUT.relative_to(REPO)}/")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
