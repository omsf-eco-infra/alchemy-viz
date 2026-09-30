"""``alchemy_viz.view(obj)`` - the visualization page in a notebook cell.

One call produces two layers, and the frontend picks:

* **static** - the :func:`alchemy_viz.to_html` page in an ``<iframe srcdoc>``,
  offered as ``text/html``. Needs no dependency and no kernel, so a saved
  notebook still draws when exported or mailed.
* **live** - an anywidget carrying a shell page and the payload as widget state.
  Setting ``.payload`` again redraws in place.

Both end at the same two lines: create a ``<alchemy-view>``, set its
``.payload``. Both use an iframe rather than the cell's own DOM, so notebook CSS
and third-party visualization libraries cannot collide.

anywidget is optional (``pip install alchemy-viz[notebook]``); without it
:func:`view` returns the static layer alone, which still draws the picture -
what is lost is redrawing in place. The widget itself lives in
:mod:`alchemy_viz._widget`, the one module that imports anywidget.
"""

from __future__ import annotations

from html import escape as escape_html
from typing import Any

from .html import _as_payload_dict, shell_html, to_html

#: Tall enough for a 3D viewer to be usable, short enough to scroll past.
DEFAULT_HEIGHT = "600px"

#: Said in the plain-text line when the live layer was asked for and could not be
#: had, so "why did this not update when I reassigned it" has an answer in the
#: output itself rather than only in the docs.
NO_ANYWIDGET_NOTE = (
    "anywidget is not installed, so this view is a static page: it draws the same "
    "picture, but reassigning `.payload` will not redraw it. "
    "`pip install alchemy-viz[notebook]` for the live one."
)


def _iframe(page: str, height: str) -> str:
    """The page, as one element that can go in a cell's output.

    ``srcdoc`` is what makes this possible at all: a cell holds a DOM fragment,
    and the thing being shown is a whole document.
    """
    return (
        f'<iframe srcdoc="{escape_html(page, quote=True)}" '
        f'style="border:0;display:block;width:100%;height:{escape_html(height, quote=True)};"'
        f"></iframe>"
    )


def _summary(payload: dict[str, Any]) -> str:
    """One line for a frontend that renders no HTML at all."""
    name = payload.get("name")
    kind = payload.get("type", "alchemy-viz")
    return f"<{kind}{': ' + name if name else ''}>"


class StaticView:
    """The page in a cell, with no widget and no dependency underneath it.

    Holds the finished HTML, so it costs nothing to display twice, and exposes
    it as :attr:`page` for anyone who wants to write it somewhere.
    """

    def __init__(
        self,
        page: str,
        *,
        height: str = DEFAULT_HEIGHT,
        summary: str = "alchemy-viz",
        note: str = "",
    ) -> None:
        self.page = page
        self.height = height
        self.note = note
        self._summary = f"{summary} ({note})" if note else summary

    # Both hooks, deliberately. IPython prefers `_repr_mimebundle_`; marimo and
    # several others look for `_repr_html_` and nothing else.
    def _repr_html_(self) -> str:
        return _iframe(self.page, self.height)

    def _repr_mimebundle_(self, include=None, exclude=None) -> dict[str, str]:
        return {"text/plain": self._summary, "text/html": self._repr_html_()}

    def __repr__(self) -> str:
        return self._summary


def view(
    obj: Any,
    *,
    height: str = DEFAULT_HEIGHT,
    title: str | None = None,
    static: bool = True,
    live: bool = True,
):
    """Display ``obj`` - a gufe object or a payload dict - in a notebook cell.

    ``height`` is the iframe's CSS height and ``title`` the static layer's page
    title. ``static=False`` halves what a live view costs and leaves an exported
    notebook blank; ``live=False`` forces the static layer.

    Returns a widget when anywidget is installed and ``live``, otherwise a
    :class:`StaticView`. Both draw the same picture; only the widget redraws when
    its ``.payload`` is reassigned, and a static view returned where a widget was
    asked for says so in its plain-text line.

    Each displayed view sends the bundle to the browser - once per layer - and on
    JupyterLab those messages share the kernel's rate-limited iopub channel, so many
    views in one burst can have messages dropped. ``static`` and ``live`` are the
    two knobs for that.

    Raises ``TypeError`` for an object alchemy-viz cannot visualize.
    """
    payload = _as_payload_dict(obj)
    summary = _summary(payload)

    note = ""
    if live:
        try:
            from ._widget import AlchemyVizWidget
        except ImportError:
            # Optional by design - see the module docstring. The static layer
            # below is the answer, and `note` is how the reader learns why.
            note = NO_ANYWIDGET_NOTE
        else:
            return AlchemyVizWidget(
                _shell=shell_html(title=title or "alchemy-viz"),
                payload=payload,
                height=height,
                static_page=to_html(payload, title=title) if static else "",
                summary=summary,
            )

    return StaticView(to_html(payload, title=title), height=height, summary=summary, note=note)
