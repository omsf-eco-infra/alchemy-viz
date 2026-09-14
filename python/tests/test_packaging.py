"""What a `pip install alchemy-viz` gets, and what it gets without gufe.

gufe is not a hard dependency. It cannot be: the only release on PyPI is 0.4,
predating the 1.0 API, so declaring `gufe>=1.12` would make the install fail its
resolution step for everyone, including the people who already have a working
gufe from conda-forge sitting in the same environment. It is an extra instead,
which makes "installed, importable, no gufe" an ordinary state rather than a
broken one, and these are the tests that keep it ordinary.

Hiding gufe is done by putting `None` in `sys.modules`, which is the documented
way to make an import fail without touching the filesystem. `payload_for` and
the CLI both import gufe inside the function body, so the block takes effect on
the call rather than at collection time.
"""

from __future__ import annotations

import builtins
import importlib
import sys

import alchemy_viz
import pytest
from alchemy_viz._gufe import INSTALL_HINT, MINIMUM, require_gufe

# Safe at module scope only because cli.py keeps its gufe import inside a function.
from alchemy_viz.cli import main as cli_main


@pytest.fixture
def no_gufe(monkeypatch):
    """Make every `import gufe` inside the call under test raise ImportError."""
    for name in [m for m in sys.modules if m == "gufe" or m.startswith("gufe.")]:
        monkeypatch.setitem(sys.modules, name, None)

    real_import = builtins.__import__

    def blocked(name, *args, **kwargs):
        if name == "gufe" or name.startswith("gufe."):
            raise ImportError(f"No module named {name!r}")
        return real_import(name, *args, **kwargs)

    monkeypatch.setattr(builtins, "__import__", blocked)


class TestWithoutGufe:
    def test_the_package_imports(self):
        """`import alchemy_viz` must not reach for gufe at module scope."""
        assert importlib.import_module("alchemy_viz") is alchemy_viz

    def test_rendering_a_payload_needs_no_gufe(self, no_gufe):
        """The renderer half of the package works on its own.

        This is the whole reason the dependency can be optional: a payload built
        somewhere else is just a dict, and drawing it is pure string assembly.
        """
        html = alchemy_viz.to_html({"type": "SmallMoleculeComponentViz", "name": "x"})

        assert "<alchemy-view" in html
        assert alchemy_viz.bundle_source()[:200] in html.replace("<\\/script", "</script")

    def test_payload_for_explains_how_to_install_gufe(self, no_gufe):
        """Not a bare ModuleNotFoundError naming something pip cannot install."""
        with pytest.raises(ImportError) as excinfo:
            alchemy_viz.payload_for(object())

        message = str(excinfo.value)
        assert "conda-forge" in message
        assert MINIMUM in message
        assert "pypi" in message.lower()

    def test_the_cli_explains_it_too(self, no_gufe, tmp_path):
        """The same advice from the other entry point, not a traceback."""
        source = tmp_path / "thing.json"
        source.write_text('{"__qualname__": "SmallMoleculeComponent"}', encoding="utf-8")

        with pytest.raises(SystemExit) as excinfo:
            cli_main([str(source)])

        assert "conda-forge" in str(excinfo.value)

    def test_the_cli_still_renders_a_payload(self, no_gufe, tmp_path):
        """The path that needs no gufe keeps working from the command line."""
        source = tmp_path / "mol.json"
        source.write_text('{"type": "SmallMoleculeComponentViz", "name": "x"}', encoding="utf-8")

        assert cli_main([str(source)]) == 0
        assert "<alchemy-view" in (tmp_path / "mol.json.html").read_text(encoding="utf-8")


class TestWithGufe:
    def test_require_gufe_returns_the_module(self):
        """In a development environment gufe is present and comes back."""
        import gufe

        assert require_gufe() is gufe


def test_the_hint_names_the_one_command_that_works():
    """conda-forge is the only place a usable gufe comes from today."""
    assert "conda install -c conda-forge gufe" in INSTALL_HINT
