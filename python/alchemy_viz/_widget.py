"""The anywidget layer.

Everything here needs ``anywidget`` and ``traitlets``, which are optional
(``pip install alchemy-viz[notebook]``). Importing this module without them
raises ``ImportError``; :func:`alchemy_viz.notebook.view` is the only caller and
it catches that and falls back to the static layer.
"""

from __future__ import annotations

import anywidget
import traitlets

from .html import _as_payload_dict, to_html
from .notebook import DEFAULT_HEIGHT, _iframe, _summary

# The widget's JavaScript. It creates the iframe, waits for the shell to
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


class AlchemyVizWidget(anywidget.AnyWidget):
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
