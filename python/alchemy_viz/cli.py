"""``alchemy-viz <input> [-o out.html]`` - render an object on disk.

Input may be an alchemy-viz payload JSON - the files in ``examples/`` - or a
serialized gufe object, which is deserialized into live gufe objects first and
only then turned into a payload. TypeScript never sees gufe's JSON.

The second form covers everything ``openfe plan-rbfe-network`` writes: the
campaign at ``<output_dir>/<output_dir>.json``, each edge under
``transformations/``, and ``ligand_network.graphml``.

The payload path needs no gufe installed; reading a serialized gufe object does,
from conda-forge. See :mod:`alchemy_viz._gufe`.
"""

from __future__ import annotations

import argparse
import json
import os
import sys
import warnings
from pathlib import Path
from typing import TYPE_CHECKING, Any

from .html import default_output_path, to_html

if TYPE_CHECKING:  # gufe is imported inside _load_gufe_object, never at module scope
    from gufe.tokenization import GufeTokenizable


def _looks_like_payload(value: object) -> bool:
    """True if this JSON is already one of ours rather than a gufe object.

    Every payload type is named ``<something>Viz``, which tells the two input formats
    apart. Deliberately not checked against a list of known types: a payload naming
    a type this build cannot draw is still one of ours, and the browser's "no
    visualization for X" panel says so better than the CLI could.
    """
    return isinstance(value, dict) and isinstance(value.get("type"), str) and value["type"].endswith("Viz")


def load(path: Path) -> GufeTokenizable | dict[str, Any]:
    """Return something :func:`alchemy_viz.to_html` can render.

    Three input formats, told apart by suffix and then by shape: a GraphML ligand
    network, an alchemy-viz payload, and a serialized gufe object. GraphML is here
    because ``openfe plan-rbfe-network`` leaves one in its output directory, and
    "not valid JSON" would be a poor answer to pointing this command at it.
    """
    text = path.read_text(encoding="utf-8")

    if path.suffix.lower() == ".graphml":
        return _load_ligand_network(text, path)

    try:
        parsed = json.loads(text)
    except json.JSONDecodeError as e:
        raise SystemExit(f"{path}: not valid JSON - {e}") from e

    if _looks_like_payload(parsed):
        return parsed

    return _load_gufe_object(text, path)


def _load_ligand_network(text: str, path: Path) -> GufeTokenizable:
    """Read a ``LigandNetwork`` out of the GraphML that gufe writes."""
    try:
        from gufe import LigandNetwork
    except ImportError as e:
        from ._gufe import INSTALL_HINT

        raise SystemExit(f"{path} is a GraphML ligand network, and reading one needs gufe.\n\n{INSTALL_HINT}") from e

    try:
        return LigandNetwork.from_graphml(text)
    except Exception as e:  # noqa: BLE001 - the file is named .graphml; there is no second guess to make
        raise SystemExit(f"{path}: could not read this as a gufe LigandNetwork ({type(e).__name__}: {e}).") from e


def _load_gufe_object(text: str, path: Path) -> GufeTokenizable:
    """Deserialize a saved gufe object, or explain why we could not.

    ``GufeTokenizable.from_json`` reads every form gufe writes: it tries the keyed
    chain first and falls back to the dict representation, so this module does not
    have to tell them apart. Both reach here in practice - ``to_json`` writes a
    keyed chain and ``to_dict`` a mapping - and everything
    ``openfe plan-rbfe-network`` leaves behind is a keyed chain, which read as a
    dict fails with a ``TypeError`` that says nothing about what went wrong.
    """
    try:
        from gufe.tokenization import GufeTokenizable
    except ImportError as e:
        from ._gufe import INSTALL_HINT

        raise SystemExit(
            f"{path} is not an alchemy-viz payload, and reading it as a gufe object needs gufe.\n\n{INSTALL_HINT}"
        ) from e

    try:
        with warnings.catch_warnings():
            # from_json warns when it falls back from the keyed chain to the
            # dict form. That fallback is a success, not something to report.
            warnings.simplefilter("ignore")
            return GufeTokenizable.from_json(content=text)
    except Exception as e:  # noqa: BLE001 - every failure mode gets the same advice
        raise SystemExit(
            f"{path}: could not read this as an alchemy-viz payload or as a serialized gufe object "
            f"({type(e).__name__}: {e}).\n"
            f"\n"
            f"Three things that do work:\n"
            f"  - a file written by openfe, such as network_setup/network_setup.json or any edge "
            f"under network_setup/transformations/;\n"
            f"  - an alchemy-viz payload, such as the files in examples/;\n"
            f"  - building the object in Python and calling alchemy_viz.to_html(obj) yourself."
        ) from e


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        prog="alchemy-viz",
        description="Render a gufe object or an alchemy-viz payload as one self-contained HTML file.",
        epilog="Reading a serialized gufe object needs gufe from conda-forge; payload JSON does not.",
    )
    parser.add_argument(
        "input",
        type=Path,
        help="a serialized gufe object (including anything openfe plan-rbfe-network wrote), "
        "a .graphml ligand network, or an alchemy-viz payload JSON",
    )
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=None,
        help="where to write the page (default: <input>.html, beside the input). Use - for stdout.",
    )
    parser.add_argument("--title", default=None, help="page title (default: the payload's name)")
    parser.add_argument(
        "--debug",
        action="store_true",
        help="make the page print its payload to the browser console. Any page can also be opened "
        "as <url>?debug to do the same without rebuilding it.",
    )
    args = parser.parse_args(argv)

    if not args.input.is_file():
        raise SystemExit(f"{args.input}: no such file")

    try:
        html = to_html(load(args.input), title=args.title, debug=args.debug)
    except TypeError as e:
        raise SystemExit(str(e)) from e

    if args.output is not None and str(args.output) == "-":
        # `alchemy-viz x.json -o - | head` closes the pipe partway through a
        # 400 KB write, which is ordinary shell usage and not an error worth a
        # traceback. Exit the way a Unix filter does instead.
        try:
            sys.stdout.write(html)
            sys.stdout.flush()
        except BrokenPipeError:
            devnull = os.open(os.devnull, os.O_WRONLY)
            os.dup2(devnull, sys.stdout.fileno())
            return 1
        return 0

    destination = args.output or default_output_path(args.input)
    destination.write_text(html, encoding="utf-8")
    print(f"wrote {destination} ({len(html):,} bytes)")
    return 0


if __name__ == "__main__":  # pragma: no cover
    raise SystemExit(main())
