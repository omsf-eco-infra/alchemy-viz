"""One place to say "gufe is not here, and here is how to get it".

gufe cannot be a hard requirement in ``pyproject.toml``. The only release on
PyPI is 0.4, which predates the 1.0 API this package is written against, so
declaring ``gufe>=1.12`` there would make ``pip install alchemy-viz`` fail its
resolution step for everyone, including the people who already have a working
gufe from conda-forge. Leaving it out is what lets the wheel install into an
existing openfe environment and find the gufe that is already there.

The cost of leaving it out is that the failure moves from install time to
import time, where pip's own message would be a bare ``ModuleNotFoundError``
naming a package the reader cannot pip-install. :func:`require_gufe` is what
replaces that with the conda-forge instruction.

Nothing in this module runs unless a caller actually needs gufe. Importing
:mod:`alchemy_viz` and rendering a payload dict that some other process built
stays free of it.
"""

from __future__ import annotations

from types import ModuleType

#: The floor the payload builders are written against. `SolvatedPDBComponent`
#: and `ProteinMembraneComponent` appear here, and the 1.0 API split that makes
#: anything below this unusable is well below it.
MINIMUM = "1.12"

INSTALL_HINT = f"""alchemy-viz needs gufe >= {MINIMUM}, and it is not installed.

gufe is not installable from PyPI - the only release there is 0.4, which
predates the 1.0 API. Get it from conda-forge:

    conda install -c conda-forge gufe

If you already have an openfe environment, install alchemy-viz into it rather
than alongside it: openfe brings gufe with it.

Rendering an alchemy-viz payload that was built elsewhere needs no gufe at all -
alchemy_viz.to_html(payload_dict) works without it."""


def require_gufe() -> ModuleType:
    """Import and return :mod:`gufe`, or explain how to install it.

    Raises ``ImportError`` rather than a custom exception type so that callers
    who already handle a missing optional dependency keep working; the message
    is the part that matters.
    """
    try:
        import gufe
    except ImportError as e:  # pragma: no cover - exercised by test_requires_gufe
        raise ImportError(INSTALL_HINT) from e

    return gufe
