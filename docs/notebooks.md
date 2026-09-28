# In a notebook

```python
from alchemy_viz import view

view(obj, *, height="600px", title=None, static=True, live=True)
```

`obj` is a gufe object or an alchemy-viz payload dict. `height` is the iframe's
CSS height and `title` the static layer's page title. `static` and `live` are the
two output layers, below.

[`../examples/notebooks/alchemy-viz-demo.ipynb`](../examples/notebooks/alchemy-viz-demo.ipynb)
is this page as a notebook, and is deliberately short.
[`../examples/notebooks/alchemy-viz-gallery.ipynb`](../examples/notebooks/alchemy-viz-gallery.ipynb)
is every view as a screenshot, which is the one to open on GitHub.

```bash
pip install "alchemy-viz[notebook]"   # the extra is anywidget, for the live layer
```

## What a cell gets

Two layers come out of one `view()` call, and your frontend picks between them.

| layer | mimetype | needs | gives |
|---|---|---|---|
| static | `text/html` - the page in an `<iframe srcdoc>` | nothing | a saved notebook that still draws with no kernel |
| live | a widget view - shell page plus payload as widget state | `anywidget` | `w.payload = other` redraws in place |

With a live kernel you get the widget. `nbconvert`, nbviewer and a mailed
`.ipynb` fall back to the page. With no anywidget installed you get the static
layer alone, and everything works except updating in place, which is the one
thing the widget is for.

## Updating in place

```python
w = view(ligand_A)
w
```

```python
w.payload = ligand_B    # the cell above redraws; it is not re-run
```

`w.payload` takes a gufe object or a payload dict, the same as `view()` itself.
This is the whole reason the live layer exists: a loop, a slider or a selection
widget can drive one view instead of stacking twenty outputs down the notebook.

## The two knobs

```python
view(obj, live=False)      # static page only, even with anywidget installed
view(obj, static=False)    # live only; halves the cost, leaves an export blank
```

`live=False` is the honest preview of an export: it is exactly what a reader with
no kernel sees.

`static=False` drops the `text/html` layer. The cell costs half as much and an
exported notebook has a hole where the view was.

## What a view costs

Every displayed view sends the bundle to the browser: once in the page when
`static`, once in the widget's shell when live, and both when both. The bundle is
around 400 kB.

```python
from alchemy_viz import bundle_source, shell_html, to_html
len(bundle_source()), len(shell_html()), len(to_html(payload))
```

On JupyterLab those messages share the kernel's iopub channel, which the server
rate-limits by default. A notebook that creates many views in one burst can have
messages **dropped** rather than delivered slowly, and the cells come up blank.
`static=False` and `live=False` are the two knobs for that, and a blank cell after
a burst is [this, not a bug in the
view](./troubleshooting.md#a-burst-of-views-came-up-blank).

## Committing a notebook

Commit with outputs stripped. Each output is an `<iframe srcdoc="...">` carrying a
whole page - a quarter of a megabyte per view in a file that is otherwise 20 kB -
and GitHub's renderer strips `<iframe>` and `<script>` from outputs, so none of it
renders there anyway. This repository's pre-commit hook runs `nbstripout` on every
notebook except the gallery, whose screenshots are the point of the file.

## Why an iframe, and not the cell's own DOM

Two properties of the bundle, not caution.

The `<gufe-*>` elements build light DOM, so a notebook's output-area CSS would
reach inside every view. And the engine loaders append a `<script>` to
`document.head` and read `window.$3Dmol` and `window.RDKit`, which on a notebook
page are the globals py3Dmol and nglview are already using, possibly at another
version. An iframe settles both for nothing.

## marimo

`marimo` reads the same `.ipynb`, converted:

```bash
marimo convert alchemy-viz-demo.ipynb -o demo.py && marimo edit demo.py
```

The static layer is plain HTML and needs nothing. The live layer goes through
marimo's own anywidget support. In this repository both are one task:

```bash
pixi run notebook     # JupyterLab, on the demo notebook
pixi run marimo       # the same file, converted, in marimo
```

## Checking the environment

```python
from alchemy_viz import __version__
print(__version__)

try:
    import anywidget
    print("live widgets: anywidget", anywidget.__version__)
except ImportError:
    print("live widgets: no - static pages only. pip install alchemy-viz[notebook]")
```
