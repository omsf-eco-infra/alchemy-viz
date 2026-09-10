#!/usr/bin/env python
"""Freeze a JAK2 docking campaign as the inputs ``make_examples.py`` reads.

Every other network fixture in this repository is either gufe's own test data or
a planned network lifted out of an OpenFE tutorial. This one is a docking run:
269 ChEMBL JAK2 inhibitors docked by Glide SP into one frame of a JAK2 molecular
dynamics trajectory, with the aminopyrimidine core restrained to the reference
ligand's. Two things about it are not true of any other fixture here, and both
are why it is worth committing:

* the poses share a frame with the protein, so the ligands sit in the site
  rather than at an arbitrary origin, and
* they share it with *each other*. A core-restrained congeneric series is
  superposed by construction, which is what a relative binding free energy
  campaign starts from and what none of the synthetic fixtures can imitate.

Run once, by hand, against the two files the campaign produced::

    python scripts/make_jak2_network.py \\
        --sdf docked_poses_frame_04138.sdf \\
        --pdb jak2_MD_V1_TRAJ_Frames_04138.pdb

It writes three files into ``scripts/data/``, which are committed and read from
there: the poses, the edges planned between them, and the kinase. The raw
campaign files are not committed - they are 2.4 MB of Schrodinger and ChEMBL
property blocks around 1.5 MB of coordinates, and only the coordinates are
drawn.

The edges are frozen rather than replanned on every ``pixi run examples`` for a
reason the coordinates in ``make_examples._round_coord`` have already made
concrete here: :func:`geometric_mapping` sorts candidate pairs by interatomic
distance, and on this series the two closest competing distances differ by 9e-19
angstroms - a hundredth of the last bit of a float64. Which of them sorts first
is not something a platform has to agree about, and ``examples/*.json`` is
compared byte for byte in CI. Freezing the result takes the question away, and
takes two seconds of pairwise geometry out of every examples build with it.

**What the mappings are.** No atom mapper was run; neither LOMAP nor Kartograf
is a dependency here. Atoms are paired *by position in the shared docking
frame*: same element, within `CUTOFF` angstroms, nearest pair first, then pruned
to the largest bond-connected correspondence. That is the principle Kartograf
applies to pre-aligned poses, and on this series it agrees with RDKit's MCS -
where MCS finishes at all, which on the least similar pairs it does not. So an
edge here does mean something, and the thing it means is geometric: these atoms
occupy the same place in the site. It is not a planner's opinion about which
transformation is cheap, and the network is not a plan.
"""

from __future__ import annotations

import argparse
import pathlib
import sys

import numpy as np

REPO = pathlib.Path(__file__).resolve().parent.parent
DATA = REPO / "scripts" / "data"

#: How close two atoms of the same element must sit, in angstroms, to be read as
#: the same atom of the series. The core restraint superposes the shared
#: scaffold to within a few hundredths of an angstrom and the substituents that
#: genuinely overlap follow it to about 0.2, so this is loose enough to carry a
#: rotated ring and far tighter than the ~1.4 A bond it would take to reach the
#: neighbouring position.
CUTOFF = 0.7

#: Edges per ligand to its best-overlapping partners, before the union. Two
#: gives every ligand a second route into the network - the shape OpenFE plans
#: as a minimally redundant network - and lands at a little over two edges per
#: node once the pairs are shared.
PARTNERS = 2

#: Residues whose bonds the PDB does not describe. JAK2's activation loop is
#: phosphorylated at Tyr1007 and Tyr1008, and a phosphotyrosine is not a residue
#: OpenMM has a template for, so its four phosphate atoms arrive unbonded and
#: gufe reads a bare P as an ion it does not recognise. The bonds are not in
#: doubt - OH-P, and P to each of its three oxygens - so this states them as
#: CONECT records, which is the part of the format that exists to say exactly
#: this about a residue no template covers.
PHOSPHOTYROSINES = (1007, 1008)
_PHOSPHATE_BONDS = ("OH", "O1P", "O2P", "O3P")


def load_poses(path: pathlib.Path) -> list:
    """The docked poses as RDKit molecules, deduplicated and stripped.

    Two of the 269 records are byte-identical repeats of another pose, which is
    an artefact of how the poses were exported rather than anything about the
    chemistry; gufe would drop them anyway, since a ``LigandNetwork``'s nodes are
    a frozenset keyed on a hash of the structure. Dropping them here means the
    count in the docstrings is the count in the file.

    Every property is cleared but the name. The Glide and ChEMBL blocks are the
    larger half of the input and none of it is drawn: what survives is the
    ChEMBL id, which is the node label, and the coordinates.
    """
    from rdkit import Chem

    supplier = Chem.SDMolSupplier(str(path), removeHs=False)
    out: list = []
    seen: set[str] = set()
    for mol in supplier:
        if mol is None:
            continue
        for prop in list(mol.GetPropNames()):
            mol.ClearProp(prop)
        block = Chem.MolToMolBlock(mol)
        if block in seen:
            continue
        seen.add(block)
        out.append(mol)
    return out


class Pose:
    """One pose's heavy atoms: where they are, what they are, what they bond to.

    Heavy atoms only, because a hydrogen is where the force field put it rather
    than where the density is, and two poses that agree about a ring can disagree
    about which way a methyl points.

    Prepared once per ligand rather than once per pair. Everything below indexes
    atoms by their position in `index`, and `index` holds the molecule's own atom
    indices, so a mapping converts back to what gufe expects at the end and
    nowhere in between.
    """

    def __init__(self, mol):
        conformer = mol.GetConformer()
        self.name: str = mol.GetProp("_Name")
        self.index: list[int] = [atom.GetIdx() for atom in mol.GetAtoms() if atom.GetAtomicNum() > 1]
        self.coords = np.array([list(conformer.GetAtomPosition(i)) for i in self.index])
        self.elements = np.array([mol.GetAtomWithIdx(i).GetAtomicNum() for i in self.index])

        position = {atom: i for i, atom in enumerate(self.index)}
        self.bonds: dict[int, set[int]] = {i: set() for i in range(len(self.index))}
        for bond in mol.GetBonds():
            a, b = bond.GetBeginAtomIdx(), bond.GetEndAtomIdx()
            if a in position and b in position:
                self.bonds[position[a]].add(position[b])
                self.bonds[position[b]].add(position[a])

    def __len__(self) -> int:
        return len(self.index)


def geometric_mapping(poseA: Pose, poseB: Pose, cutoff: float = CUTOFF) -> dict[int, int]:
    """Atoms of ``poseA`` paired with the atoms of ``poseB`` they sit on.

    Three steps, and the second two are what keep it from being a proximity
    table. Pair greedily, nearest first, one atom to one atom and only between
    atoms of the same element. Then drop every pair standing on its own - a pair
    survives only if one of its atom's bonded neighbours is paired with one of
    the other's, repeated until nothing more falls out, which removes the
    coincidence of an oxygen of one ligand sitting where an unrelated oxygen of
    the other happens to be. Then keep the largest connected piece of what is
    left, so the correspondence is one substructure rather than several.

    Returns the molecules' own atom indices, which is what a
    ``LigandAtomMapping`` is written in.
    """
    difference = poseA.coords[:, None, :] - poseB.coords[None, :, :]
    distance = np.sqrt((difference**2).sum(-1))
    close = (poseA.elements[:, None] == poseB.elements[None, :]) & (distance <= cutoff)
    # Sorted on the distance first and the two indices after it, so a tie - two
    # candidates exactly as far apart, which a symmetric ring can produce - is
    # broken by the molecule's own atom order rather than by nonzero's.
    candidates = sorted((float(distance[i, j]), int(i), int(j)) for i, j in zip(*np.nonzero(close)))

    takenA: set[int] = set()
    takenB: set[int] = set()
    paired: dict[int, int] = {}
    for _, i, j in candidates:
        if i in takenA or j in takenB:
            continue
        takenA.add(i)
        takenB.add(j)
        paired[i] = j

    paired = _bonded_support(paired, poseA.bonds, poseB.bonds)
    paired = _largest_connected(paired, poseA.bonds)
    return {poseA.index[i]: poseB.index[j] for i, j in paired.items()}


def _bonded_support(paired: dict[int, int], graphA: dict[int, set[int]], graphB: dict[int, set[int]]) -> dict[int, int]:
    """Drop pairs with no bonded pair beside them, until none are left."""
    paired = dict(paired)
    while True:
        loose = [i for i, j in paired.items() if not any(paired.get(n) in graphB[j] for n in graphA[i] if n in paired)]
        if not loose:
            return paired
        for i in loose:
            del paired[i]


def _largest_connected(paired: dict[int, int], graphA: dict[int, set[int]]) -> dict[int, int]:
    """The biggest piece of ``paired`` that is connected in ``graphA``'s bonds."""
    if not paired:
        return paired
    seen: set[int] = set()
    pieces: list[list[int]] = []
    for start in sorted(paired):
        if start in seen:
            continue
        seen.add(start)
        stack, piece = [start], []
        while stack:
            atom = stack.pop()
            piece.append(atom)
            for neighbour in sorted(graphA[atom]):
                if neighbour in paired and neighbour not in seen:
                    seen.add(neighbour)
                    stack.append(neighbour)
        pieces.append(sorted(piece))
    # Ties on size are broken by the lowest atom index, so the piece chosen does
    # not depend on the order the components were found in.
    biggest = max(pieces, key=lambda piece: (len(piece), -piece[0]))
    return {i: paired[i] for i in biggest}


def overlap_score(mapping: dict[int, int], poseA: Pose, poseB: Pose) -> float:
    """Mapped atoms as a fraction of the larger ligand's heavy atoms.

    The larger rather than the smaller, so growing a ligand and mapping all of
    the original does not score as a perfect match. It is in [0, 1] and it is an
    overlap, not a LOMAP score: nothing here estimates the cost of a
    transformation.
    """
    return len(mapping) / max(len(poseA), len(poseB))


def plan(mols: list, partners: int = PARTNERS) -> list[dict]:
    """Join each ligand to the ligands its pose overlaps best.

    Every pair is scored, which is 35 thousand comparisons and about two seconds,
    and then each ligand keeps its `partners` best. The union of those is the
    network: undirected, so a ligand that several others choose ends up with more
    than `partners` edges, which is what makes it look like a planned network
    rather than a ring.

    Edges come back named rather than indexed, and as plain data rather than as
    ``LigandAtomMapping`` objects, because this is what gets written to
    ``jak2_network_edges.json`` and read back by ``make_examples``. A name
    survives a reordering of the SDF; a position in it does not.
    """
    poses = [Pose(mol) for mol in mols]
    count = len(mols)

    mappings: dict[tuple[int, int], dict[int, int]] = {}
    scores = np.zeros((count, count))
    for i in range(count):
        for j in range(i + 1, count):
            mapping = geometric_mapping(poses[i], poses[j])
            mappings[(i, j)] = mapping
            scores[i, j] = scores[j, i] = overlap_score(mapping, poses[i], poses[j])

    chosen: set[tuple[int, int]] = set()
    for i in range(count):
        # Sorted on the score and then the ligand's name, so two partners that
        # overlap `i` equally well are chosen in the same order everywhere.
        order = sorted((j for j in range(count) if j != i), key=lambda j: (-scores[i, j], poses[j].name))
        for j in order[:partners]:
            chosen.add((min(i, j), max(i, j)))

    return [
        {
            "ligandA": poses[i].name,
            "ligandB": poses[j].name,
            "score": round(float(scores[i, j]), 4),
            "atoms": [[a, b] for a, b in sorted(mappings[(i, j)].items())],
        }
        for i, j in sorted(chosen)
    ]


def network_from(sdf_path: pathlib.Path, edges_path: pathlib.Path):
    """The committed poses and edges, as a :class:`gufe.LigandNetwork`.

    Public because ``make_examples.py`` calls it: reading these two files is the
    whole of what turns them back into a network, and a second copy of it there
    could drift from the one that wrote them.
    """
    import json

    from gufe import LigandAtomMapping, LigandNetwork, SmallMoleculeComponent

    ligands = {}
    for mol in load_poses(sdf_path):
        name = mol.GetProp("_Name")
        if name in ligands:
            raise AssertionError(f"two poses are both called {name!r}, so an edge naming it is ambiguous")
        ligands[name] = SmallMoleculeComponent.from_rdkit(mol)

    edges = [
        LigandAtomMapping(
            componentA=ligands[edge["ligandA"]],
            componentB=ligands[edge["ligandB"]],
            componentA_to_componentB={a: b for a, b in edge["atoms"]},
            annotations={"score": edge["score"]},
        )
        for edge in json.loads(edges_path.read_text(encoding="utf-8"))
    ]
    return LigandNetwork(nodes=list(ligands.values()), edges=edges)


def clean_protein(path: pathlib.Path) -> str:
    """The kinase, as a PDB gufe will read.

    Two things come off and one goes on. Chain B is the ligand the trajectory
    was run with, as a single ``UNK`` residue of 59 unbonded atoms; it is dropped
    because the docked poses stand where it stands, and drawing both would draw
    two ligands in one site. The atom records of chain A are kept exactly as the
    trajectory wrote them - every coordinate, every hydrogen - and the CONECT
    records `PHOSPHOTYROSINES` needs are appended.
    """
    lines = [line.rstrip("\n") for line in path.read_text(encoding="utf-8").splitlines()]
    chainA = [line for line in lines if line.startswith(("ATOM", "TER")) and (len(line) < 22 or line[21] == "A")]

    def serial(name: str, residue: int) -> int:
        for line in chainA:
            if line.startswith("ATOM") and line[12:16].strip() == name and line[22:26].strip() == str(residue):
                return int(line[6:11])
        raise LookupError(f"chain A has no atom {name!r} in residue {residue}")

    connects = []
    for residue in PHOSPHOTYROSINES:
        phosphorus = serial("P", residue)
        for partner in _PHOSPHATE_BONDS:
            connects.append(f"CONECT{phosphorus:5d}{serial(partner, residue):5d}")

    header = [
        "HEADER    TRANSFERASE",
        "TITLE     JAK2 KINASE DOMAIN, ONE FRAME OF A MOLECULAR DYNAMICS TRAJECTORY",
        "REMARK   1 CHAIN A ONLY. TYR 1007 AND TYR 1008 ARE PHOSPHORYLATED.",
    ]
    return "\n".join(header + chainA + connects + ["END"]) + "\n"


def write_poses(mols: list, path: pathlib.Path) -> None:
    """The stripped poses, as the SDF ``make_examples`` reads.

    Written through RDKit rather than by slicing the input, so what is committed
    is what a reader gets back: the same four-decimal coordinates, no property
    blocks, and the name every edge refers to.
    """
    from rdkit import Chem

    with Chem.SDWriter(str(path)) as writer:
        for mol in mols:
            writer.write(mol)


def main(argv: list[str] | None = None) -> int:
    import json
    import warnings

    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--sdf", type=pathlib.Path, required=True, help="the docked poses")
    parser.add_argument("--pdb", type=pathlib.Path, required=True, help="the trajectory frame they were docked into")
    parser.add_argument("--out-sdf", type=pathlib.Path, default=DATA / "jak2_docked_poses.sdf")
    parser.add_argument("--out-edges", type=pathlib.Path, default=DATA / "jak2_network_edges.json")
    parser.add_argument("--out-pdb", type=pathlib.Path, default=DATA / "jak2_protein.pdb")
    args = parser.parse_args(argv)

    with warnings.catch_warnings():
        warnings.simplefilter("ignore", UserWarning)
        mols = load_poses(args.sdf)
        edges = plan(mols)

    joined = {name for edge in edges for name in (edge["ligandA"], edge["ligandB"])}
    if len(joined) != len(mols):
        raise AssertionError(f"{len(mols) - len(joined)} ligand(s) got no edge and would be lost from the network")

    write_poses(mols, args.out_sdf)
    # One edge per line: indenting the atom pairs the way `json.dumps(indent=)`
    # would puts every pair on three lines and doubles the file, for a diff
    # nobody reads. A line each is still greppable by ligand name.
    args.out_edges.write_text(
        "[\n" + ",\n".join(json.dumps(edge) for edge in edges) + "\n]\n",
        encoding="utf-8",
    )
    args.out_pdb.write_text(clean_protein(args.pdb), encoding="utf-8")

    scores = sorted(edge["score"] for edge in edges)
    print(f"{len(mols)} ligands, {len(edges)} edges")
    print(f"overlap score: {scores[0]:.2f} low, {scores[len(scores) // 2]:.2f} median, {scores[-1]:.2f} high")
    for path in (args.out_sdf, args.out_edges, args.out_pdb):
        print(f"{path.relative_to(REPO)}  {path.stat().st_size:,} bytes")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
