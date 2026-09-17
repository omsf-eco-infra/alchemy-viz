"""alchemy-viz - interactive browser visualizations for gufe objects.

    >>> from alchemy_viz import to_html, view, payload_for
    >>> html = to_html(small_molecule_component)  # the page, as a string
    >>> view(small_molecule_component)  # the same page, in a cell
    >>> payload = payload_for(small_molecule_component)  # the dict behind both

Three entry points, one per context: :func:`to_html`, :func:`view` (see
:mod:`alchemy_viz.notebook`) and ``alchemy-viz <input>`` (see
:mod:`alchemy_viz.cli`). Nothing in gufe or openfe calls back into this package;
installing it patches nothing and overrides no method on any gufe class.

``schema/alchemy-viz.schema.json`` is the contract a payload satisfies, and the
compiled TypeScript in ``alchemy_viz/_assets/`` is what draws it.

gufe is imported lazily inside :func:`payload_for`, so ``import alchemy_viz`` and
:func:`to_html` on an existing payload dict work without it. See
:mod:`alchemy_viz._gufe`.
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

    Dispatch is ``isinstance``, most-derived first, so a membrane system is not
    serialized as a plain protein.

    Raises ``TypeError`` for anything this cannot visualize. That is not in tension
    with graceful degradation: an unrecognized component found *inside* a chemical
    system returns an ``UnknownComponentViz`` rather than failing the whole system,
    but a top-level call on an unsupported type is a mistake at the call site.
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
