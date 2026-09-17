"""Components and chemical systems: live gufe objects to visualization payloads.

Builders read **live gufe objects** and ask them to serialize themselves the way
they already know how - ``to_sdf()``, ``to_pdb_file()`` - rather than touching
gufe's own JSON. A saved gufe ``.json`` is deserialized into live objects first.

They return **plain dicts**. ``schema/alchemy-viz.schema.json`` is the source of
truth for their shape, and is hand-written rather than derived from anything
here: a derived schema carries across only what the derivation step translates,
so a rule could hold in the code and be missing from the schema the browser
reads. Tests close that instead - every builder's output is validated against
the schema, and ``python/tests/mutations.json`` proves the schema rejects what it
claims to.
"""

from __future__ import annotations

import io
import json
from typing import Any

import gufe
from gufe.tokenization import GufeTokenizable

from .registry import Registry


def gufe_key(obj: Any) -> str:
    """The object's gufe key, as a string.

    Two spellings, both gufe's: ``gufe-key`` in JSON, the way gufe writes it and
    what ``gufe.tokenization.is_gufe_key_dict`` looks for, and ``gufe_key`` in
    Python, because a hyphen is not an identifier.
    """
    return str(obj.key)


def display_name(obj: GufeTokenizable) -> str:
    """The object's name, as a string that is never ``None``.

    Every ``name`` in the schema is a required, non-nullable string. Unnamed
    molecules are the normal case rather than an error, so "" is what a view falls
    back from - it never has to distinguish "" from ``None``.
    """
    return getattr(obj, "name", "")


def pdb_string(component: gufe.ProteinComponent) -> str:
    """Render a PDB-capable component to a string, without a sidecar file."""
    buffer = io.StringIO()
    component.to_pdb_file(buffer)
    return buffer.getvalue()


def json_safe(value: Any) -> Any:
    """Coerce ``value`` into something ``json.dumps`` can handle.

    Free-form gufe metadata - ``LigandAtomMapping.annotations`` most of all - can
    hold ``openff.units.Quantity`` and friends. A visualization only ever displays
    these, so ``str()`` ("1.2 nanometer") is lossless enough and far more readable
    than gufe's ``:custom:`` codec.
    """
    return json.loads(json.dumps(value, default=str))


# --------------------------------------------------------------------------- #
# One builder per component type                                                #
# --------------------------------------------------------------------------- #


def small_molecule_payload(component: gufe.SmallMoleculeComponent) -> dict[str, Any]:
    return {
        "type": "SmallMoleculeComponentViz",
        "gufe-key": gufe_key(component),
        "name": display_name(component),
        "sdf": component.to_sdf(),
        "smiles": component.smiles,
        "total_charge": component.total_charge,
    }


def protein_payload(component: gufe.ProteinComponent) -> dict[str, Any]:
    return {
        "type": "ProteinComponentViz",
        "gufe-key": gufe_key(component),
        "name": display_name(component),
        "pdb": pdb_string(component),
    }


def solvated_pdb_payload(component: gufe.SolvatedPDBComponent) -> dict[str, Any]:
    return {
        "type": "SolvatedPDBComponentViz",
        "gufe-key": gufe_key(component),
        "name": display_name(component),
        "pdb": pdb_string(component),
    }


def protein_membrane_payload(component: gufe.ProteinMembraneComponent) -> dict[str, Any]:
    return {
        "type": "ProteinMembraneComponentViz",
        "gufe-key": gufe_key(component),
        "name": display_name(component),
        "pdb": pdb_string(component),
    }


def solvent_payload(component: gufe.SolventComponent) -> dict[str, Any]:
    return {
        "type": "SolventComponentViz",
        "gufe-key": gufe_key(component),
        "name": display_name(component),
        "smiles": component.smiles,
        "positive_ion": component.positive_ion,
        "negative_ion": component.negative_ion,
        "neutralize": component.neutralize,
        # An openff Quantity carries its unit, and the view only ever prints it.
        "ion_concentration": str(component.ion_concentration),
    }


def unknown_component_payload(component: gufe.Component) -> dict[str, Any]:
    """The graceful fallback: enough to name the thing, nothing to draw it."""
    return {
        "type": "UnknownComponentViz",
        "gufe-key": gufe_key(component),
        "name": display_name(component),
        "gufe_type": type(component).__name__,
    }


def protocol_payload(protocol: Any) -> dict[str, Any]:
    """A gufe Protocol, named by its class.

    A Protocol has no ``name`` of its own. Settings are left out: they are large,
    deeply nested and nothing draws them, and adding them later is additive.
    """
    return {
        "type": "ProtocolViz",
        "gufe-key": gufe_key(protocol),
        "name": display_name(protocol),
        "gufe_type": type(protocol).__name__,
    }


# --------------------------------------------------------------------------- #
# Dispatch                                                                      #
# --------------------------------------------------------------------------- #
#
# Ordered most-derived first, because a subclass must be recognized before its
# parent. The PDB-carrying types form a three-deep chain in gufe:
#
#     ProteinMembraneComponent -> SolvatedPDBComponent -> ProteinComponent
#
# so listing them in any other order would serialize a membrane system as a
# plain protein and throw away the distinction the discriminator exists to
# carry. `test_dispatch_order_matches_the_gufe_class_hierarchy` derives that
# chain from gufe itself and fails if this list stops agreeing with it, so the
# ordering is checked rather than merely commented.
#
# `SolventComponent` is last but not subordinate: it descends from
# `BaseSolventComponent` alongside the solvated types rather than from
# `ProteinComponent`, so it can never be shadowed by them.

COMPONENT_BUILDERS: tuple[tuple[type[gufe.Component], Any], ...] = (
    (gufe.ProteinMembraneComponent, protein_membrane_payload),
    (gufe.SolvatedPDBComponent, solvated_pdb_payload),
    (gufe.ProteinComponent, protein_payload),
    (gufe.SmallMoleculeComponent, small_molecule_payload),
    (gufe.SolventComponent, solvent_payload),
)


def component_payload(component: gufe.Component) -> dict[str, Any]:
    """Build the visualization payload for one gufe component.

    Three-way failure rule. Something that is not a gufe Component raises
    ``TypeError``. An **unrecognized** Component subclass returns an
    ``UnknownComponentViz`` without raising, because gufe plans for custom
    components. But a **recognized** component whose serializer fails is left to
    raise: a ``SmallMoleculeComponent`` whose ``to_sdf()`` blows up is a real bug,
    and filing it under "sorry, I cannot draw this" would bury it.
    """
    if not isinstance(component, gufe.Component):
        raise TypeError(f"expected a gufe.Component, got {type(component).__name__}")

    for klass, builder in COMPONENT_BUILDERS:
        if isinstance(component, klass):
            return builder(component)

    return unknown_component_payload(component)


def chemical_system_payload(system: gufe.ChemicalSystem, registry: Registry | None = None) -> dict[str, Any]:
    """A chemical system, as its labels mapped to the gufe keys of its components.

    The components go into ``registry``; the system carries only their keys, which
    is what lets forty systems share one protein. The shape is the same whether this
    system is the whole payload or one node of a network.

    With no ``registry`` passed this system is the root payload and builds one;
    otherwise the caller is the root and carries the pool. Components are sorted by
    label so a committed fixture is byte-stable.
    """
    if not isinstance(system, gufe.ChemicalSystem):
        raise TypeError(f"expected a gufe.ChemicalSystem, got {type(system).__name__}")

    is_root = registry is None
    pool = Registry() if registry is None else registry

    payload = {
        "type": "ChemicalSystemViz",
        "gufe-key": gufe_key(system),
        "name": display_name(system),
        "components": {
            label: pool.add(component_payload(component)) for label, component in sorted(system.components.items())
        },
    }
    if is_root:
        payload["registry"] = pool.entries()
    return payload
