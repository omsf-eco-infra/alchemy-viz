# Troubleshooting

## Nothing renders on GitHub

Expected, and not fixable from this end. GitHub's notebook renderer strips
`<iframe>` and `<script>` from cell outputs, which is everything `view()` emits,
so an executed notebook shows a blank under every cell there.

`image/png` is the one output type that survives, which is what
[`../examples/notebooks/alchemy-viz-gallery.ipynb`](../examples/notebooks/alchemy-viz-gallery.ipynb)
is: the same views, captured as screenshots. Send that link to anyone who is
looking rather than running.

## No depiction, or no 3D viewer

RDKit and 3Dmol load from a CDN, on demand, from a view that needs them. With no
network you get the page, the layout, the metadata and the tables, and an empty
box where the structure goes.

There is no bundled-engine option yet. If the machine that will open the page has
no network, generate the page somewhere that does and check it there first, so you
know which half you are missing.

## A burst of views came up blank

Every displayed view sends the ~400 kB bundle to the browser, once per output
layer. On JupyterLab those messages share the kernel's iopub channel, which the
server rate-limits by default - and the limit **drops** messages rather than
delaying them, so a cell that created a view can come up permanently empty.

A loop over twenty payloads is the shape that hits this. Two answers:

```python
view(obj, static=False)   # live only: half the bytes
view(obj, live=False)     # static only: half the bytes, and no comm traffic
```

Or raise the server's limit:

```bash
jupyter lab --ServerApp.iopub_msg_rate_limit=10000
```

## A payload that will not draw

Four situations, four answers. Only the first is an exception, because only the
first is a mistake at the call site.

**(a) Not a gufe object and not a dict.** There is nothing to serialize, so
`view()` and `payload_for()` raise:

```python
>>> view(object())
TypeError: alchemy-viz has no visualization for object. It can visualize
components, chemical systems, atom mappings, ligand networks, protocols,
transformations and alchemical networks.
```

The other three are dicts, which Python passes through untouched - `to_html` does
not validate - so they reach the browser and fail there, each with a panel that
says what is wrong rather than leaving the box empty.

**(b) A declared type whose body does not match the schema.** This is what a
half-built payload looks like: the type is real and has a view, but the required
fields are missing, so validation stops it before the view runs. The panel names
the type and lists the fields.

```python
view({"type": "SolventComponentViz", "name": "water"})
```

**(c) A type nobody ever declared** - a typo, or a payload from a build newer than
the bundle drawing it. A different panel: there is nothing to validate against, so
it says so and lists every type this build can draw.

```python
view({"type": "NotAThing"})
```

**(d) A dict that is not a payload at all.** It never gets as far as a type, so
the panel cannot name one.

```python
view({"name": "nameless"})
```

Case (c) is only reachable from outside the schema now that every declared type
has a view. While some declared types had no view, a payload could be perfectly
well-formed and still undrawable; today a declared type that will not draw is a
malformed payload, which is case (b).

## gufe is not installed

```
ModuleNotFoundError ... no module named 'gufe'
```

should not be what you see. Both the CLI and `payload_for` go through
`alchemy_viz._gufe.require_gufe`, which raises with the conda-forge instruction
instead, because the gufe on PyPI is a single 0.4 release predating the 1.0 API
and `pip install gufe` would be the wrong advice.

```bash
conda install -c conda-forge gufe
```

`import alchemy_viz`, `to_html` on a payload dict, and the CLI's payload path all
work with no gufe at all. See
[`openfe.md`](./openfe.md#installing-into-an-openfe-environment) for why it is not
a declared dependency.

## alchemy-viz cannot read a file

The CLI accepts a serialized gufe object, a `.graphml` ligand network, or an
alchemy-viz payload JSON - and a **file**, not a directory. Its error messages name
what to try instead; [`cli.md`](./cli.md#when-it-will-not-read-the-file) has them.

A results file from a completed campaign is not one of the three. There is no view
for results yet; what this draws is setup.

## What the payload actually says

Open any generated page as `<url>?debug` and the payload is printed to the console,
before validation and before dispatch. `to_html(obj, debug=True)` bakes the switch
in, and `window.ALCHEMY_VIZ_DEBUG = true` works for a host that mounts the element
itself.

For the Python side, `payload_for(obj)` is the dict both `view()` and `to_html()`
build, and is a normal dict to print, diff or `json.dump`.
