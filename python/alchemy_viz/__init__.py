"""alchemy-viz - interactive browser visualizations for gufe objects.

    >>> from alchemy_viz import to_html, view
    >>> html = to_html(small_molecule_component)  # returns a string
    >>> view(small_molecule_component)  # the same page, in a notebook

A separate library from gufe, and one that depends on gufe. Both halves of that
are load-bearing. alchemy-viz imports gufe itself, to read the objects it draws;
it is never handed one by gufe. And it is not integrated into gufe's code -
nothing in gufe or openfe imports this package, calls it, or knows it exists. It
patches nothing, registers nothing, and overrides no method on any gufe class,
so installing it changes the behaviour of nothing already installed and
uninstalling it breaks nothing.

That makes it a library you call independently: you import one of the entry
points below and call it yourself, on an object you already have.

There are three, one per context:

* :func:`to_html` returns the page as a string and writes nothing - where it
  goes is the caller's decision;
* :func:`view` is the notebook's answer to the same question, see
  :mod:`alchemy_viz.notebook` for what a cell gets and why it is in an iframe;
* ``alchemy-viz <input> -o out.html`` renders an object already on disk, see
  :mod:`alchemy_viz.cli`.

The intermediate value is a plain, schema-valid dict:

    >>> from alchemy_viz import payload_for
    >>> payload = payload_for(small_molecule_component)

``schema/alchemy-viz.schema.json`` in this repository is the contract it satisfies,
and the compiled TypeScript in ``alchemy_viz/_assets/`` is what draws it.

gufe is imported lazily, inside :func:`payload_for`, rather than at module
scope. That is what lets ``import alchemy_viz`` and :func:`to_html` on an
existing payload dict work in an environment that has the wheel but not gufe -
which is the normal state after ``pip install alchemy-viz``, since gufe is not
installable from PyPI. :mod:`alchemy_viz._gufe` explains that, and is what turns
the missing import into an instruction rather than a ``ModuleNotFoundError``.
"""

from __future__ import annotations

from typing import TYPE_CHECKING, Any

from .html import BundleMissing, bundle_source, shell_html, to_html
from .notebook import StaticView, view

if TYPE_CHECKING:  # gufe is imported inside payload_for, never at module scope
    from gufe.tokenization import GufeTokenizable

try:  # pragma: no cover - the real version comes from setuptools-scm at build time
    from importlib.metadata import PackageNotFoundError, version

    __version__ = version("alchemy-viz")
except PackageNotFoundError:  # pragma: no cover
    __version__ = "0.0.0"


def payload_for(obj: GufeTokenizable) -> dict[str, Any]:
    """Serialize a gufe object into a schema-valid payload dict.

    Dispatch is ``isinstance``, most-derived first. Ordering matters in one
    place: every component goes through :func:`components.component_payload`,
    which has its own most-derived-first table so that a membrane system is not
    serialized as a plain protein.

    Raises ``TypeError`` for anything this cannot visualize, including a gufe
    object of a kind with no builder. That is deliberate and
    is *not* in tension with the graceful-degradation rule: degrading matters
    for an unrecognized component found *inside* a chemical system, where the
    user did nothing wrong and the alternative is that the whole system fails to
    draw. Those return an ``UnknownComponentViz`` and never raise. A top-level
    call on an unsupported type is a mistake at the call site, and saying so
    immediately is more useful than a panel.
    """
    from ._gufe import require_gufe

    gufe = require_gufe()

    from gufe.transformations.transformation import TransformationBase

    from .alchemical import alchemical_network_payload, transformation_payload
    from .components import chemical_system_payload, component_payload, protocol_payload
    from .networks import ligand_atom_mapping_payload, ligand_network_payload

    if isinstance(obj, gufe.Component):
        return component_payload(obj)
    if isinstance(obj, gufe.ChemicalSystem):
        return chemical_system_payload(obj)
    if isinstance(obj, gufe.LigandAtomMapping):
        return ligand_atom_mapping_payload(obj)
    if isinstance(obj, gufe.LigandNetwork):
        return ligand_network_payload(obj)
    if isinstance(obj, gufe.AlchemicalNetwork):
        return alchemical_network_payload(obj)
    if isinstance(obj, TransformationBase):
        return transformation_payload(obj)
    if isinstance(obj, gufe.Protocol):
        return protocol_payload(obj)

    raise TypeError(
        f"alchemy-viz has no visualization for {type(obj).__name__}. "
        "It can visualize components, chemical systems, atom mappings, ligand "
        "networks, protocols, transformations and alchemical networks."
    )


__all__ = [
    "BundleMissing",
    "StaticView",
    "__version__",
    "bundle_source",
    "payload_for",
    "shell_html",
    "to_html",
    "view",
]
