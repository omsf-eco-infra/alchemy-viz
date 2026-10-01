"""Atom mappings and ligand networks.

Grouped together because they are the same object twice: a ligand network's edge
*is* a ``LigandAtomMappingViz``, with no separate edge type and no separate code
path. Both endpoints are gufe keys either way - resolved in the mapping's own
registry when it stands alone, and in the network's registry when it is an edge,
where they are the entries the network's ``nodes`` name.
"""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

import gufe

from .components import gufe_key, json_safe, small_molecule_payload
from .registry import Registry

# --------------------------------------------------------------------------- #
# Atom mappings                                                                 #
# --------------------------------------------------------------------------- #


def _atom_map(mapping: gufe.LigandAtomMapping) -> list[dict[str, int]]:
    """The A-to-B index correspondence, as a list of index pairs.

    gufe holds this as ``{int: int}``, which JSON cannot carry - object keys are
    always strings, so the dict shape would put ``{"12": 7}`` in the payload and
    leave both languages casting back. A list of ``{"index_A": 12, "index_B": 7}``
    keeps both sides integers and lets the schema require a B index for every A
    index. Sorted by ``index_A`` for byte-stability.
    """
    return [
        {"index_A": index_a, "index_B": index_b}
        for index_a, index_b in sorted(mapping.componentA_to_componentB.items())
    ]


def mapping_score(annotations: Mapping[str, Any]) -> float | None:
    """The mapping's ``score`` annotation, if it is a plain number.

    gufe puts nothing in ``annotations`` by design, but ``score`` is the key gufe's
    own fixtures and OpenFE's networks use, and it is what the edge colouring and
    the force layout read. ``bool`` is excluded because ``isinstance(True, int)``
    is true and a colour ramp over ``True`` means nothing.
    """
    score = annotations.get("score") if hasattr(annotations, "get") else None
    if isinstance(score, bool) or not isinstance(score, (int, float)):
        return None
    return float(score)


def _mapping_name(name_a: str, name_b: str) -> str:
    """A title for a mapping, which has no name of its own.

    Unnamed molecules are common, and "A to B" with both sides blank reads as broken
    rather than as unnamed, so fall back to no title at all.
    """
    return f"{name_a} -> {name_b}" if (name_a or name_b) else ""


def ligand_atom_mapping_payload(mapping: gufe.LigandAtomMapping, registry: Registry | None = None) -> dict[str, Any]:
    """One atom mapping, with its two molecules named by gufe key.

    The molecules go into ``registry``: two entries carried here when standalone, or
    the network's registry when this is an edge, where the nodes named them first.
    """
    if not isinstance(mapping, gufe.LigandAtomMapping):
        raise TypeError(f"expected a gufe.LigandAtomMapping, got {type(mapping).__name__}")

    is_root = registry is None
    pool = Registry() if registry is None else registry

    annotations = json_safe(mapping.annotations)
    payload = {
        "type": "LigandAtomMappingViz",
        "gufe-key": gufe_key(mapping),
        "name": _mapping_name(mapping.componentA.name or "", mapping.componentB.name or ""),
        "componentA": pool.add(small_molecule_payload(mapping.componentA)),
        "componentB": pool.add(small_molecule_payload(mapping.componentB)),
        "componentA_to_componentB": _atom_map(mapping),
        "score": mapping_score(annotations),
        "annotations": annotations,
    }
    if is_root:
        payload["registry"] = pool.entries()
    return payload


# --------------------------------------------------------------------------- #
# Ligand networks                                                               #
# --------------------------------------------------------------------------- #


def ligand_network_payload(network: gufe.LigandNetwork) -> dict[str, Any]:
    """Walk the live network: every ligand once, in the registry; mappings as edges.

    Deliberately *not* ``to_graphml()``, whose output embeds a gufe ``to_json``
    moldict per node - forwarding it would make the browser decode atomic numbers,
    bond tuples and a ``.npy`` conformer blob, relocating the problem rather than
    avoiding it.

    The nodes are what repeats, so they live in the registry and everything points
    at them; a forty-ligand network carries each SDF once and clicking an edge still
    yields whole molecules. Nodes and edges are sorted by key for byte-stability -
    gufe holds both in a ``frozenset``, and sorting by name is not enough when
    several molecules are unnamed.
    """
    if not isinstance(network, gufe.LigandNetwork):
        raise TypeError(f"expected a gufe.LigandNetwork, got {type(network).__name__}")

    molecules = sorted(network.nodes, key=lambda mol: (mol.name or "", str(mol.key)))
    mappings = sorted(network.edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))

    registry = Registry()
    # Nodes first, so the registry entry for a ligand is the one the node named
    # and the edges below merely find it again.
    nodes = [registry.add(small_molecule_payload(mol)) for mol in molecules]
    edges = [ligand_atom_mapping_payload(mapping, registry) for mapping in mappings]

    return {
        "type": "LigandNetworkViz",
        "gufe-key": gufe_key(network),
        "name": getattr(network, "name", ""),
        "registry": registry.entries(),
        "nodes": nodes,
        "edges": edges,
    }
