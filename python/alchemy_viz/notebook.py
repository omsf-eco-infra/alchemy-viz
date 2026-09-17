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
:func:`view` returns the static layer alone.
"""

from __future__ import annotations

import html as _stdlib_html
from typing import Any

from .html import _as_payload_dict, shell_html, to_html

#: Tall enough for a 3D viewer to be usable, short enough to scroll past.
DEFAULT_HEIGHT = "600px"

# The widget's JavaScript, whole. It creates the iframe, waits for the shell to
# load, and sets `.payload` - there is no protocol beyond that, because a
# `srcdoc` iframe is same-origin and the parent can simply reach in.
#
# `load` is the handshake: a module script delays it, so by the time it fires
# the custom elements are defined and `<alchemy-view>` has been upgraded. Setting
# `.payload` earlier would create an own property shadowing the class accessor,
# and the view would never draw.
_ESM = """
function render({ model, el }) {
  const iframe = document.createElement("iframe");
  iframe.style.cssText = "border:0;display:block;width:100%;";
  iframe.style.height = model.get("height");

  let view = null;
  const draw = () => {
    if (view) view.payload = model.get("payload");
  };

  iframe.addEventListener("load", () => {
    view = iframe.contentDocument.querySelector("alchemy-view");
    draw();
  });

  model.on("change:payload", draw);
  model.on("change:height", () => {
    iframe.style.height = model.get("height");
  });

  el.appendChild(iframe);
  iframe.srcdoc = model.get("_shell");

  return () => iframe.remove();
}

export default { render };
"""


def _iframe(page: str, height: str) -> str:
    """The page, as one element that can go in a cell's output.

    ``srcdoc`` is what makes this possible at all: a cell holds a DOM fragment,
    and the thing being shown is a whole document.
    """
    return (
        f'<iframe srcdoc="{_stdlib_html.escape(page, quote=True)}" '
        f'style="border:0;display:block;width:100%;height:{_stdlib_html.escape(height, quote=True)};"'
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

    def __init__(self, page: str, *, height: str = DEFAULT_HEIGHT, summary: str = "alchemy-viz") -> None:
        self.page = page
        self.height = height
        self._summary = summary

    # Both hooks, deliberately. IPython prefers `_repr_mimebundle_`; marimo and
    # several others look for `_repr_html_` and nothing else.
    def _repr_html_(self) -> str:
        return _iframe(self.page, self.height)

    def _repr_mimebundle_(self, include=None, exclude=None) -> dict[str, str]:
        return {"text/plain": self._summary, "text/html": self._repr_html_()}

    def __repr__(self) -> str:
        return self._summary


_widget_class = None


def _widget_type():
    """The anywidget subclass, built on first use.

    Defined inside a function because ``anywidget`` is optional: importing it at
    module scope would make ``import alchemy_viz`` fail without it.
    """
    global _widget_class
    if _widget_class is not None:
        return _widget_class

    import anywidget
    import traitlets

    class GufeWidget(anywidget.AnyWidget):
        """One ``<alchemy-view>``, live.

        Assign a new payload - or a new gufe object, which is coerced - and the view
        redraws in place::

            w = alchemy_viz.view(ligand)
            w.payload = other_ligand
        """

        _esm = _ESM

        #: The page the iframe shows, minus its payload. Synced because it is
        #: what the browser needs; see the note in `view` about what it costs.
        _shell = traitlets.Unicode("").tag(sync=True)

        payload = traitlets.Any(None).tag(sync=True)
        height = traitlets.Unicode(DEFAULT_HEIGHT).tag(sync=True)

        #: The static page, for frontends that will not run the widget. Not
        #: synced: it never needs to cross the comm, it goes out with the
        #: display message instead.
        static_page = traitlets.Unicode("")

        #: What a frontend shows when it renders neither.
        summary = traitlets.Unicode("alchemy-viz")

        @traitlets.validate("payload")
        def _coerce_payload(self, proposal):
            value = proposal["value"]
            return None if value is None else _as_payload_dict(value)

        @traitlets.observe("payload")
        def _refresh_static(self, change):
            # Keep the exported picture honest: whatever the widget is showing
            # now is what a kernel-less reader should see.
            if self.static_page and change["new"] is not None:
                self.static_page = to_html(change["new"])
                self.summary = _summary(change["new"])

        def _repr_mimebundle_(self, **kwargs):
            """The widget view, plus the page for anyone who cannot run it.

            anywidget answers with ``(data, metadata)`` and ipywidgets with
            ``data`` alone; both are shapes IPython accepts, so pass whichever
            came back through rather than settling on one.
            """
            bundle = super()._repr_mimebundle_(**kwargs)
            if not bundle or not self.static_page:
                return bundle

            data, metadata = bundle if isinstance(bundle, tuple) else (bundle, None)
            data = dict(data)
            data["text/html"] = _iframe(self.static_page, self.height)
            return data if metadata is None else (data, metadata)

    _widget_class = GufeWidget
    return _widget_class


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
    :class:`StaticView`. Both display; only the widget updates.

    Each displayed view sends the bundle to the browser - once per layer - and on
    JupyterLab those messages share the kernel's rate-limited iopub channel, so many
    views in one burst can have messages dropped. ``static`` and ``live`` are the
    two knobs for that.

    Raises ``TypeError`` for an object alchemy-viz cannot visualize.
    """
    payload = _as_payload_dict(obj)
    summary = _summary(payload)

    if live:
        try:
            widget_type = _widget_type()
        except ImportError:
            widget_type = None

        if widget_type is not None:
            return widget_type(
                _shell=shell_html(title=title or "alchemy-viz"),
                payload=payload,
                height=height,
                static_page=to_html(payload, title=title) if static else "",
                summary=summary,
            )

    return StaticView(to_html(payload, title=title), height=height, summary=summary)
