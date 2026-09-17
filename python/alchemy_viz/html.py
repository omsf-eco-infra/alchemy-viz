"""payload -> one self-contained HTML file.

:func:`to_html` **returns a string and writes nothing**; where it goes is the
caller's decision. The page is four things and no others: the compiled bundle in
a ``<script type="module">``, the payload in a ``<script type="application/json">``,
one ``<alchemy-view>``, and the bootstrap handing the second to the third. No
fetches, no iframe, no server - except that a view needing RDKit or 3Dmol still
pulls it from a CDN.

The bootstrap uses only the custom-element API, so it depends on no name the
bundler chose. :func:`shell_html` is the same document without the payload block
and bootstrap, for a host that delivers the payload itself - the notebook widget.

``to_html(obj, debug=True)`` bakes in the debug switch, which makes the bundle
print the payload to the console; a page written without it still answers to
``?debug`` in its URL.
"""

from __future__ import annotations

import json
import re
from importlib import resources
from pathlib import Path
from string import Template
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:  # importing gufe at runtime would make `import alchemy_viz` need it
    from gufe.tokenization import GufeTokenizable

#: Name of the committed Vite build inside the package.
BUNDLE = "alchemy-viz.js"


class BundleMissing(RuntimeError):
    """The compiled TypeScript is not in the installed package.

    Only reachable in a source checkout that has never run ``pixi run build`` - the
    bundle is committed and ships in the wheel.
    """


def bundle_source() -> str:
    """Return the compiled TypeScript bundle as text."""
    try:
        return resources.files("alchemy_viz").joinpath("_assets", BUNDLE).read_text(encoding="utf-8")
    except (FileNotFoundError, ModuleNotFoundError, OSError) as e:
        raise BundleMissing(
            f"alchemy_viz/_assets/{BUNDLE} is missing or unreadable ({e}). In a source checkout, run `pixi run build`."
        ) from e


_TEMPLATE = Template("""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>$title</title>
<style>
  html, body { height: 100%; margin: 0; }
  body { display: flex; flex-direction: column;
         font: 13px/1.4 ui-sans-serif, system-ui, sans-serif; }
  alchemy-view { flex: 1 1 auto; min-height: 0; }
  #gufe-error { display: none; flex: 0 0 auto; padding: 12px 16px; white-space: pre-wrap;
                font-family: ui-monospace, monospace; color: #991b1b; background: #fee2e2; }
</style>
</head>
<body>
<div id="gufe-error"></div>
<alchemy-view$view_attributes></alchemy-view>
$payload
$engines
<script type="module">
$code
$bootstrap
</script>
</body>
</html>
""")

#: The payload, baked into the page. Absent from the shell, which is handed its
#: payload at runtime instead.
_PAYLOAD_BLOCK = Template('<script id="gufe-payload" type="application/json">$payload</script>')

_BOOTSTRAP = """
// ---- bootstrap: hand the element the payload baked into this file ----
// Only the custom-element API is used here, so nothing depends on a name the
// bundler happened to choose.
try {
  document.querySelector("alchemy-view").payload =
    JSON.parse(document.getElementById("gufe-payload").textContent);
} catch (e) {
  const err = document.getElementById("gufe-error");
  err.textContent = String((e && e.stack) || e);
  err.style.display = "block";
}
"""

_CDN_ENGINES_NOTE = (
    "<!-- RDKit / 3Dmol / d3 are fetched from their CDNs on demand, and only by a\n"
    '     view that needs them. A future engines="bundled" mode will inline\n'
    "     them and drops the network requirement entirely. -->"
)


def _script_safe(text: str) -> str:
    r"""Neutralize the one sequence that can close a ``<script>`` block early.

    ``</script`` inside minified JavaScript only ever occurs within a string or
    regex literal, where ``<\/script`` is an identity escape meaning the same thing.
    """
    return re.sub(r"</(script)", r"<\\/\1", text, flags=re.IGNORECASE)


def _escape_html(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def _as_payload_dict(obj: GufeTokenizable | dict[str, Any]) -> dict[str, Any]:
    """Accept either a gufe object or an already-built payload dict."""
    if isinstance(obj, dict):
        return obj

    from . import payload_for

    return payload_for(obj)


def to_html(obj: GufeTokenizable | dict[str, Any], *, title: str | None = None, debug: bool = False) -> str:
    """Return a standalone HTML page that renders ``obj``, as a string.

    ``obj`` is a GufeTokenizable or an already-built payload dict. ``title`` defaults
    to the payload's name, then its type. ``debug`` bakes in the switch that prints
    the payload to the browser console, for handing someone a file that does it on
    its own; the same page also answers to ``<url>?debug``.

    Nothing is written to disk. Raises ``TypeError`` for an object this cannot
    visualize, and :exc:`BundleMissing` if the compiled bundle is not installed.
    """
    payload = _as_payload_dict(obj)

    # `Template.substitute` scans the template once, so a placeholder appearing
    # inside a substituted value (e.g. the payload or bundle) is left alone.
    return _TEMPLATE.substitute(
        title=_escape_html(title or payload.get("name") or payload.get("type") or "alchemy-viz"),
        payload=_PAYLOAD_BLOCK.substitute(
            # `</` cannot appear inside a <script> block, whatever the payload
            # holds; `\/` is a legal JSON escape, so this survives JSON.parse
            # unchanged.
            payload=json.dumps(payload).replace("</", "<\\/")
        ),
        engines=_CDN_ENGINES_NOTE,
        code=_script_safe(bundle_source()),
        bootstrap=_BOOTSTRAP,
        # A bare boolean attribute, because that is what the element tests for -
        # no value to keep in step between the two languages.
        view_attributes=" debug" if debug else "",
    )


def shell_html(*, title: str = "alchemy-viz") -> str:
    """Return the same page as :func:`to_html`, minus the payload.

    The notebook widget writes this into an iframe and then sets ``.payload`` on the
    ``<alchemy-view>`` inside it, so the payload arrives over the widget comm. One
    template, two fillings.

    The elements are defined by the time the iframe's ``load`` event fires, because
    a module script delays it. A host that set ``.payload`` before then would be
    assigning to an un-upgraded element, shadowing the class's accessor.
    """
    return _TEMPLATE.substitute(
        title=_escape_html(title),
        payload="",
        engines=_CDN_ENGINES_NOTE,
        code=_script_safe(bundle_source()),
        bootstrap="",
        view_attributes="",
    )


def default_output_path(input_path: Path | str) -> Path:
    """``<input>.html`` beside the input.

    ``ligand.json`` becomes ``ligand.json.html``, keeping the original suffix so
    two inputs that differ only by extension do not collide.
    """
    path = Path(input_path)
    return path.with_name(path.name + ".html")
