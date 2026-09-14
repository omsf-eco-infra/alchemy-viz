"""``alchemy-viz <input> [-o out.html]`` - render an object on disk.

This is one of the two supported ways in, and the one that does not need a
Python session. The other is :func:`alchemy_viz.view` in a notebook. Neither is
invoked by gufe or by openfe: alchemy-viz is a standalone package that uses the
gufe library to read objects, and nothing in gufe or openfe calls back into it.

Input may be either an alchemy-viz payload JSON - the files in ``examples/`` - or
a serialized gufe object, which is deserialized into live gufe objects first and
only then turned into a payload. TypeScript never sees gufe's JSON.

The payload path needs no gufe installed at all. Reading a serialized gufe
object does, and gufe has to come from conda-forge; see :mod:`alchemy_viz._gufe`.
"""

from __future__ import annotations

import argparse
import json
import os
import sys
from pathlib import Path
from typing import TYPE_CHECKING, Any

from .html import default_output_path, to_html

if TYPE_CHECKING:  # gufe is imported inside _load_gufe_object, never at module scope
    from gufe.tokenization import GufeTokenizable


def _looks_like_payload(value: object) -> bool:
    """True if this JSON is already one of ours rather than a gufe object.

    Every payload type is named ``<something>Viz``, which is enough to tell the
    two input formats apart. This deliberately does not check the name against a
    list of known types: a payload naming a type this build does not draw is
    still one of ours, and the browser's "no visualization for X" panel says so
    far better than the CLI could.
    """
    return isinstance(value, dict) and isinstance(value.get("type"), str) and value["type"].endswith("Viz")


def load(path: Path) -> GufeTokenizable | dict[str, Any]:
    """Return something :func:`alchemy_viz.to_html` can render.

    Tries, in order: an alchemy-viz payload, then a serialized gufe object.
    """
    text = path.read_text(encoding="utf-8")

    try:
        parsed = json.loads(text)
    except json.JSONDecodeError as e:
        raise SystemExit(f"{path}: not valid JSON - {e}") from e

    if _looks_like_payload(parsed):
        return parsed

    return _load_gufe_object(text, path)


def _load_gufe_object(text: str, path: Path) -> GufeTokenizable:
    """Deserialize a saved gufe object, or explain why we could not.

    Which of gufe's serialization forms round-trips reliably today is still an
    open question - ``QuickRun`` writes ``to_dict`` while
    other paths write ``to_json``, and the keyed-chain form is different again.
    Rather than guess, this tries the documented entry point and, on failure,
    says exactly that: the payload path above always works, and building the
    object in Python and calling ``alchemy_viz.to_html`` directly always works.
    """
    try:
        from gufe.tokenization import JSON_HANDLER, GufeTokenizable
    except ImportError as e:
        from ._gufe import INSTALL_HINT

        raise SystemExit(
            f"{path} is not an alchemy-viz payload, and reading it as a gufe object needs gufe.\n\n{INSTALL_HINT}"
        ) from e

    try:
        return GufeTokenizable.from_dict(json.loads(text, cls=JSON_HANDLER.decoder))
    except Exception as e:  # noqa: BLE001 - every failure mode gets the same advice
        raise SystemExit(
            f"{path}: could not read this as an alchemy-viz payload or as a serialized gufe object "
            f"({type(e).__name__}: {e}).\n"
            f"\n"
            f"gufe has more than one serialization form and which of them round-trips is still an "
            f"open question. Two things that always work:\n"
            f"  - point this at an alchemy-viz payload, such as the files in examples/;\n"
            f"  - build the object in Python and call alchemy_viz.to_html(obj) yourself."
        ) from e


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        prog="alchemy-viz",
        description="Render a gufe object or an alchemy-viz payload as one self-contained HTML file.",
        epilog="Reading a serialized gufe object needs gufe from conda-forge; payload JSON does not.",
    )
    parser.add_argument("input", type=Path, help="an alchemy-viz payload JSON, or a serialized gufe object")
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
