# alchemy-viz

`alchemy-viz` is set of browser-based visualization tools for [OpenFE](https://docs.openfree.energy/en/latest/index.html). It is supported by the [NSF](#support) via the [Open Molecular Science Foundation](https://omsf.io/)


<figure>
 <a href="https://framejs.app/j/e59fd6f18b2248adbd7e1fcb59aaeec2">
    <img src="./examples/media/screenshot-01.png" alt="Curated gallery">
  </a>
  <figcaption><i>Click the image to see interactive examples</i></figcaption>
</figure>

See more examples in the [notebook gallery](./examples/notebooks/alchemy-viz-gallery.ipynb).

This work was supported by the [Open Molecular Science Foundation vis the NSF](##support)

## Quickstart

With a single command you can view OpenFE objects in notebooks and the CLI:

```bash
conda activate my-openfe-env          # the environment that already has openfe
pip install "alchemy-viz[notebook]"
```

**There is no conversion step and no alchemy-viz object model.** OpenFE does not
define its own classes for components, networks or campaigns - `openfe/__init__.py`
re-exports gufe's - so `openfe.SmallMoleculeComponent` *is*
`gufe.SmallMoleculeComponent`, and `view()` takes whatever openfe handed you:

```python
from alchemy_viz import view

view(network)        # a LigandNetwork, straight out of a planner
view(campaign)       # an AlchemicalNetwork
view(ligand)         # a SmallMoleculeComponent, a ProteinComponent, a ChemicalSystem...
```

Already planned a campaign on the command line? `alchemy-viz` reads the files
`openfe plan-rbfe-network` wrote, and turns each into one self-contained HTML page:

```bash
openfe plan-rbfe-network -M ligands.sdf -p protein.pdb -o network_setup

alchemy-viz network_setup/network_setup.json -o campaign.html      # the whole campaign
alchemy-viz network_setup/ligand_network.graphml -o network.html   # the ligands and mappings
alchemy-viz "network_setup/transformations/<edge>.json"            # one edge
```

[**Start here: your own OpenFE objects**](./examples/notebooks/alchemy-viz-demo.ipynb)
is the notebook section that runs all of the above, and
[the gallery](./examples/notebooks/alchemy-viz-gallery.ipynb) is what the views
look like without installing anything.


Visualization tools for [gufe](https://github.com/OpenFreeEnergy/gufe).

Turns a gufe object into an interactive browser visualization you open locally

> **Under construction.** The pipeline runs end to end, and three of the twelve
> payload types have a view. The rest are declared in the schema, built by
> Python, and render as "sorry, there is no visualization for X yet" until their
> views land. Nothing is published, so nothing here is stable yet.

---

## Development

### 1. Install pixi

**[pixi](https://pixi.sh) and git. That is the whole list.** pixi provides
everything else - Python 3.12+, Node 20+, gufe, RDKit, pytest, jsonschema and
ruff all come from `pixi.toml`, pinned in `pixi.lock`.

```bash
curl -fsSL https://pixi.sh/install.sh | bash    # macOS / Linux
brew install pixi                               # or Homebrew
```

The installer appends `~/.pixi/bin` to your shell profile. If you install with
`PIXI_NO_PATH_UPDATE=1` instead, nothing on `PATH` changes and every command
below needs the full `~/.pixi/bin/pixi` in place of `pixi`.

### 2. Get the environment

```bash
git clone https://github.com/omsf-eco-infra/alchemy-viz.git
cd alchemy-viz
pixi install
```

That solves and downloads a conda environment containing RDKit and gufe.

### 3. Look at the visualizations

The fastest loop is the dev server. It rebuilds on save, so a change to a view
is visible without running anything else:

```bash
pixi run dev
# http://localhost:5173/gallery.html       one example per view, the one worth looking at
# http://localhost:5173/gallery-all.html   every payload in examples/, sizes and duplicates
# http://localhost:5173/parity.html        our atom mapping beside gufe's own
# http://localhost:5173/                   drop any payload JSON on the page
```

The server prints those four URLs when it starts.

`examples/` holds several sizes of the same thing, because pytest and vitest want
a two-atom payload as much as they want a real network. `/gallery.html` shows the
curated list in `ts/src/dev/curated.ts` - one example per view, the biggest one
that says something its smaller siblings do not - and `/gallery-all.html` shows
the directory, so a new fixture appears there without touching anything. Cards
draw as you scroll to them and are released again when you scroll well past:
several of them hold a WebGL context, and a browser only allows so many at once.


Three ways:

**The gallery:** example payloads on one page, for quick debugging and checks

```bash
pixi run dev
# http://localhost:5173/gallery.html       the curated set, one example per view
# http://localhost:5173/gallery-all.html   every payload in examples/
```

Every declared type has a view, so between them the two pages draw all of them -
`ts/tests/gallery.test.ts` fails if a view lands with no curated card. The
"sorry, there is no visualization for X yet" panel is still what a payload naming
an undeclared type gets, which is what `ts/tests/dispatch.test.ts` exercises.

**Drag and drop:** the same dev server, one payload at a time. Drop any file
from `examples/` anywhere on the page:

```bash
pixi run dev
# http://localhost:5173/
```

**A standalone HTML file:** what is actually used by this library. One file, opened from disk, no server:

```bash
pixi run alchemy-viz examples/ligand_network_named.json -o /tmp/network.html
open /tmp/network.html          # macOS;  xdg-open on Linux
```

With no `-o`, the page lands beside the input as `<input>.html`, so
`ligand.json` becomes `ligand.json.html`, keeping the original suffix so two
inputs that differ only by extension cannot collide. `-o -` writes to stdout.

The input may be one of our payload JSONs *or* a serialized gufe object; a gufe
object is deserialized into live Python objects first and turned into a payload
from there.

To see the payload the page was built from, render it with the debug switch
baked in:

```bash
pixi run alchemy-viz-debug examples/ligand_network_named.json -o /tmp/network.html
```

### 4. From Python, or from the command line

Two ways in, one renderer behind both.

From Python, on a live object:

```python
from alchemy_viz import to_html

html = to_html(small_molecule_component)   # returns a string
open("mol.html", "w").write(html)          # writing it is your call
```

`to_html` accepts a gufe object or a plain payload dict. It returns a string and
writes nothing.

From the shell, on an object already saved to disk:

```bash
alchemy-viz ligand.json                 # writes ligand.json.html beside it
alchemy-viz network.json -o out.html    # or wherever you say
alchemy-viz ligand.json -o - > out.html # or stdout
```

The input may be a serialized gufe object or an alchemy-viz payload JSON. Both
produce the same single self-contained HTML file. `alchemy-viz --help` lists the
rest.

### 5. Notebook rendering of visualizations

```python
from alchemy_viz import view

view(small_molecule_component)   # the same page, in a cell
```

You import `view` from alchemy-viz and call it on a gufe object. gufe is not
involved in the call: it never learns this package exists.

**NB:** `view()` is always an explicit call. alchemy-viz does not patch gufe,
does not register renderers on gufe classes, and does not override
`_repr_html_` or any other method. Installing it changes the behaviour of
nothing already in the environment, and uninstalling it breaks nothing.


There are [two notebooks](examples/notebooks/), one is for running locally and the other is so you can see the visualization in e.g. github (which restricts javascript and iframes).

```bash
pixi run notebook    # JupyterLab on examples/notebooks/alchemy-viz-demo.ipynb
pixi run marimo      # the same notebook, converted, in marimo
```

`alchemy-viz-demo.ipynb` is the local **development** version, with every payload type. Make a change and refresh to iterate.

[`alchemy-viz-gallery.ipynb`](examples/notebooks/alchemy-viz-gallery.ipynb) is the
**GitHub** version, since GitHub's
notebook renderer strips the `<iframe>` and `<script>` that `view()` emits,
so you would see just blank cells instead of rendered visualizations.
`pixi run gallery` rebuilds the gallery images.

You can run the gallery: its cells hold the real `view()` call, and running
it replaces each screenshot with the live view. Just do not commit that: it
strips out the pictures GitHub needs. `pixi run gallery` puts them back.
[`examples/notebooks/README.md`](examples/notebooks/README.md) is the full note
for developers, including when to regenerate.

`view()` returns two layers from one call, and your frontend picks:

| layer | mimetype | needs | gives |
| --- | --- | --- | --- |
| static | `text/html` - the page in an `<iframe srcdoc>` | nothing | a saved notebook that still draws with no kernel |
| live | a widget view - shell page plus the payload as widget state | `anywidget` | `w.payload = other` redraws in place |

```python
w = view(ligand_A)       # display it
w.payload = ligand_B     # the cell above redraws, in place

view(obj, live=False)     # static only - what a kernel-less reader sees
view(obj, static=False)   # live only - half the bytes, blank on export
```

The live layer is optional: `pip install alchemy-viz[notebook]`. Without it `view()`
returns the static layer alone and everything still draws, minus the updating.

**Both layers put the view in an iframe**. We don't want any notebook css
interference, and the visualization must be a standalone page for the CLI
use case, so it's an iframe/page everywhere.

### What a *user* of the library needs

None of the above. Installing the package is plain pip, with no Node anywhere:

```bash
pip install alchemy-viz
```

Install it **into the environment that already has openfe or gufe**, not beside
it. alchemy-viz is an optional companion to that environment: it reads gufe
objects, and the gufe it reads is the one already installed there.

```bash
conda activate my-openfe-env
pip install alchemy-viz
```

The compiled JavaScript bundle is committed to this repository and ships inside
the wheel, so none of this needs a Node toolchain.

Optional extras:

```bash
pip install "alchemy-viz[notebook]"   # anywidget, for update-in-place in a cell
```

> **gufe is not a dependency of the wheel, and that is deliberate.** The `gufe`
> on PyPI is stuck at 0.4, a single release predating the 1.0 API. conda-forge
> has 1.12, which is what this package is written against and what `pixi
> install` gives you.
>
> A hard `gufe>=1.12` in `pyproject.toml` would therefore be unsatisfiable from
> PyPI, and `pip install alchemy-viz` would fail its resolution step for
> *everyone* - including the people who already have a perfectly good conda gufe
> sitting in the environment they are installing into. So the requirement is not
> declared as a hard dependency. It moved to import time instead:
>
> ```
> >>> alchemy_viz.payload_for(ligand)
> ImportError: alchemy-viz needs gufe >= 1.12, and it is not installed.
> gufe is not installable from PyPI - the only release there is 0.4, which
> predates the 1.0 API. Get it from conda-forge:
>     conda install -c conda-forge gufe
> ```
>
> `python/alchemy_viz/_gufe.py` is the whole of that mechanism.
>
> `import alchemy_viz` and `to_html(payload_dict)` need no gufe at all - the
> import is lazy - so a gufe-less install is a valid way to get just the
> renderer, and `alchemy-viz some_payload.json` works there too.
>
> `pixi.toml` is what pulls the real gufe in for development, from conda-forge.
> `pip install "alchemy-viz[gufe]"` declares the requirement for any resolver
> that can actually reach a gufe >= 1.12.

---

## How the data flows

Python serializes a gufe object into a **schema-valid payload**; compiled
TypeScript custom elements ingest that payload and draw a picture. The JSON
Schema is the contract between the two, and it lives here, not in gufe.

```mermaid
flowchart LR
  subgraph PY["Python · python/alchemy_viz"]
    direction TB
    obj["<b>gufe object</b><br/>SmallMoleculeComponent<br/>ProteinComponent<br/>LigandNetwork ..."]
    build["<b>payload_for()</b><br/>asks the object to serialize<br/><i>itself</i>: to_sdf(), to_pdb_file()"]
    plain["<b>a plain dict</b><br/>validated against the schema<br/>in the test suite"]
    obj --> build --> plain
  end

  plain --> payload[["<b>payload JSON</b><br/>flat, tagged with <code>type</code>"]]
  payload --> tohtml["<b>to_html()</b><br/>one self-contained page:<br/>bundle + payload + &lt;alchemy-view&gt;"]

  subgraph BR["Browser · ts/src"]
    direction TB
    gview["<b>&lt;alchemy-view&gt;</b><br/>validate, then dispatch on <code>type</code>"]
    view["<b>&lt;gufe-small-molecule&gt;</b><br/><b>&lt;gufe-protein&gt;</b><br/><b>&lt;gufe-ligand-network&gt;</b><br/>... one per declared type"]
    gview --> view
  end

  tohtml --> gview
  view --> pic(["RDKit · 3Dmol · d3<br/>draw it"])
```

Two rules hold that picture together.

**gufe's own `to_json` never crosses into TypeScript.** TypeScript only ever
sees SDF, PDB and flat, schema-valid JSON, not even GraphML, whose nodes *are*
gufe JSON. Deduplicated key-chains, `:custom:` codecs and the `to_dict`/`to_json`
divergence all stay Python problems, because the alternative is a large amount
of TypeScript that has to track gufe's serialization forever.

**This package depends on gufe; gufe does not depend on this package.**

### The generated HTML file: what is in it, and how it loads

`to_html(obj)` returns a complete page as a **string** and writes nothing
anywhere. The CLI is what chooses where to put it.
The page has four parts and no others:

```html
<alchemy-view></alchemy-view>                                <!-- 1. where it draws -->

<script id="gufe-payload" type="application/json">     <!-- 2. the data -->
{"type":"SmallMoleculeComponentViz","name":"benzene","sdf":"...", ... }
</script>

<script type="module">
  ... 239 kB of compiled bundle ...                        <!-- 3. the code -->

  document.querySelector("alchemy-view").payload =        <!-- 4. the bootstrap -->
    JSON.parse(document.getElementById("gufe-payload").textContent);
</script>
```

**Where the input data lives:** inside the file, in `#gufe-payload`, as *inert
text*. `type="application/json"` is not a script type the browser executes, the
element is a container the DOM hands back as a string. Nothing fetches it,
nothing sits beside it on disk, and moving or emailing the `.html` moves the
data with it.

**How it is loaded:** by that last statement, run once at parse time.
`textContent` gets the raw JSON, `JSON.parse` turns it into an object, and
assigning it to `.payload` starts the render. That is the entire handshake: the
same custom-element API an external page or a notebook widget would use, and it
depends on no name the bundler chose. If anything throws, the message lands in a
visible `#gufe-error` strip at the top of the page rather than in a console
nobody has open.

**Why a JSON block rather than a JavaScript literal:** because the data is then
never parsed as code. The only byte sequence that could break out of the block
is `</script`, so every `</` in the payload is rewritten to `<\/` on the way in -
a legal JSON string escape, which means `JSON.parse` hands back exactly the
original characters. The bundle gets the same treatment on `</script` alone,
which in minified JavaScript only ever occurs inside a string or regex literal
where `<\/script` means the same thing. A molecule named
`</script><script>alert(1)</script>` is a test case here, not a hypothetical.

**Reading it by eye:** you cannot - it is one line, and a protein page's is
54 kB of it. Open the page as `<url>?debug` and the bundle prints it to the
console instead, indented. See [Debugging: seeing the
payload](#debugging-seeing-the-payload).

**Where the code comes from:** `python/alchemy_viz/_assets/alchemy-viz.js`, the
committed Vite build, read by `alchemy_viz.bundle_source()` and inlined verbatim.
That file being in the repository and in the wheel is what lets `pip install`
work with no Node toolchain.

Typical sizes, dominated by the 239 kB bundle:

| Page | Payload | Whole file |
|---|---|---|
| benzene | 1.3 kB | 242 kB |
| a three-ligand network | 2.4 kB | 243 kB |
| a 40-residue protein fragment | 54 kB | 295 kB |
| whole 181L lysozyme | 217 kB | 458 kB |

**What is *not* in the file yet:** RDKit, 3Dmol and d3. A view fetches the one it
needs from a CDN on first use, so a page with no small molecule in it never
downloads RDKit's ~7 MB of WebAssembly. A planned `engines="bundled"` mode
inlines them through the same `globalThis.__gufeEngines` pre-seed hook the tests
use, for environments with no network access at all.

### What the browser does when a payload arrives

Setting `.payload` on a `<alchemy-view>` is the whole API. Every failure below is a
panel that names the problem - never a thrown exception, and never a blank box.

```mermaid
flowchart TD
  arrive(["view.payload = ..."]) --> dbg{"debug<br/>switch on?"}
  dbg -->|yes| console["console: the payload,<br/>as JSON and as an object"]
  dbg -->|no| isobj{"a JSON object?"}
  console --> isobj
  isobj -->|no| p1["panel: this does not look<br/>like an alchemy-viz payload"]
  isobj -->|yes| hastype{"has a <code>type</code>?"}
  hastype -->|no| p3["panel: nothing says<br/>what this is"]
  hastype -->|yes| hasview{"a view claims<br/>that type?"}
  hasview -->|no| p4["panel: no visualization<br/>for X yet"]
  hasview -->|yes| valid{"valid against<br/>the JSON Schema?"}
  valid -->|no| p5["panel: names the failing<br/>field and its JSON pointer"]
  valid -->|yes| mount["mount &lt;gufe-*&gt;, set its payload"]
  mount --> draw(["a picture"])
```

The order matters. A `type` nobody ever declared is answered as "no
visualization for X" rather than as "does not match the schema" - the second is
true but useless. And validation runs against the *single* schema branch the
payload's `type` names, not the whole union, because the union only ever reports
"is not valid under any of the given schemas" at the root, while the branch
reports `/total_charge: must be number`.

There is no version check, because a payload carries no version field. Every
consumer ships the reader and the writer in one artifact - the generated page
inlines the exact bundle that reads it - so the two cannot be at different
versions. The version lives in the schema's `$id`.

Engines are loaded lazily and only when a view needs them: a protein page never
pays for RDKit's ~7 MB of WebAssembly, and a small-molecule page never pays for
d3.

### Debugging: seeing the payload

The payload is the contract between the two halves of this project, so the first
question about a page that draws the wrong thing - or nothing - is always *what
JSON did the browser actually get?* That is hard to answer by hand: in a
generated page it is one unbroken line inside `#gufe-payload`, and in a notebook
it never touches the DOM at all.

So the bundle will print it. Three switches turn that on, and any one of them is
enough:

| Switch | How | The case it exists for |
|---|---|---|
| URL | open the page as `<url>?debug` | a page **already written** - nothing is rebuilt, and `file:///tmp/network.html?debug` works |
| attribute | `to_html(obj, debug=True)`, `pixi run alchemy-viz-debug <input>` | handing someone a file that does it on its own |
| global | `window.ALCHEMY_VIZ_DEBUG = true`, set before `.payload` | a host that mounts the element itself: a notebook widget, or a console session |

`?gufe-debug` is accepted as well as `?debug`, for a host page that already uses
`?debug` for something of its own.

What lands in the console is one collapsed group per render:

```
> [alchemy-viz] payload LigandNetworkViz (3542 chars)
    {
      "type": "LigandNetworkViz",
      "gufe-key": "LigandNetwork-fd4275a34f7e2c5b5021b5d9eb51d62d",
      "name": "",
      ...
    }
    > Object { type: "LigandNetworkViz", ... }
```

Both forms, because they answer different questions. The **text** is what to
copy into a file or a bug report, and it is exactly what the schema validator
saw. The **object** is the one the console lets you expand and click through.
The group is collapsed because a lysozyme page would otherwise put 217 kB of PDB
between you and the next message.

Two properties are worth relying on:

* **It logs before validation and before dispatch.** A payload that fails the
  schema, or names a type this build cannot draw, is still printed in full -
  which is the case the switch is for. The panel on the page tells you *which
  field*; the console tells you *what was actually there*.
* **It logs from `<alchemy-view>`**, which every host goes through - the generated
  page, the dropzone, the gallery, and any embedding of the bundle. There is
  nothing to wire up per view.

Off, it costs one attribute read per render; `JSON.stringify` only ever runs when
it is on. So a page built without `debug=True` carries the capability at no cost
and answers to `?debug` for the rest of its life - which is why the URL switch,
not the build flag, is the one to reach for first.

The pieces are exported from the bundle for a host that wants to do its own
reporting, or to decide whether to:

```js
import { debugEnabled, logPayload, payloadJson } from "./alchemy-viz.js";
```

---

## The contract: schema, sources and generated artifacts

### One file, two languages downstream

`schema/alchemy-viz.schema.json` is **the source of truth.**
Both languages are downstream: TypeScript types are
generated from it, and Python validates against it in the test suite.

```mermaid
flowchart TD
  src["<b>schema/alchemy-viz.schema.json</b>"]

  src -->|"pixi run types"| types["<b>ts/src/schema/types.ts</b><br/><i>generated · committed</i>"]
  src -.->|"loaded at runtime"| ajv["Ajv, in the browser"]
  src -.->|"jsonschema, in tests"| py["the Python payload builders"]

  types --> views["ts/src/** - the views"]
  ajv --> views
  views -->|"pixi run build"| bundle["<b>python/alchemy_viz/_assets/alchemy-viz.js</b><br/><i>generated · committed</i>"]
  bundle --> wheel(["the wheel: <code>pip install</code><br/>needs no Node toolchain"])

  src --> fixtures["examples/*.json + python/tests/mutations.json<br/>checked by <i>both</i> test suites"]
```

The schema is the source of truth and testing its correctness is what `mutations.json` is for.

Three artifacts are **generated and committed**: the TypeScript types, the
JavaScript bundle, and the example payloads. Committing the bundle is what lets
`pip install` work with no Node toolchain. `pixi run check-generated` rebuilds
all three and fails on any difference, so they cannot drift:

```bash
pixi run examples && pixi run types && pixi run build   # the fix, always
```

### The payload shape

There is no envelope. A payload is its `type`, its `gufe-key` and its own
fields, flat:

```json
{
  "type": "SmallMoleculeComponentViz",
  "gufe-key": "SmallMoleculeComponent-ec3c7a92...",
  "name": "benzene",
  "sdf": "...",
  "smiles": "c1ccccc1",
  "total_charge": 0
}
```

Anything that refers to another gufe object refers to it **by gufe key**, and
the objects themselves are carried once, in the `registry` on the root payload:

```json
{
  "type": "ChemicalSystemViz",
  "gufe-key": "ChemicalSystem-b51f409f...",
  "name": "benzene in water",
  "components": {
    "ligand":  "SmallMoleculeComponent-ec3c7a92...",
    "solvent": "SolventComponent-26b4034a..."
  },
  "registry": [
    { "type": "SmallMoleculeComponentViz", "gufe-key": "SmallMoleculeComponent-ec3c7a92...", "sdf": "..." },
    { "type": "SolventComponentViz",       "gufe-key": "SolventComponent-26b4034a...",       "smiles": "O" }
  ]
}
```

- **One schema object per gufe class.** Every `*Viz` is the visualization form
  of exactly one `GufeTokenizable`, and there is no second summary-only or
  reference-only variant of it anywhere. A ligand network's node, a mapping's
  endpoint and a standalone molecule are all the same
  `SmallMoleculeComponentViz`.
- **`gufe-key` on every object.** It is what the registry addresses an object
  by, and - being deterministic and repeatable within a software environment -
  it is also the identifier worth having in front of you when a payload does not
  draw.
- **A key always resolves to a whole object.** That is what makes drilling in
  possible: opening a network node gives you the ligand's SDF, opening an
  alchemical node gives you the protein's PDB.
- **The registry is the only deduplication mechanism.** An alchemical network
  whose forty systems share a protein carries that PDB once and points at it
  forty times. A payload is a single-shot dump with no server to ask, so the
  registry travels with it.
- **`type` is a closed discriminator.** A chemical-system view handed something
  else refuses it by name rather than guessing from which keys happen to be
  present.
- **`additionalProperties: false` everywhere**, so a typo in a payload builder
  is a validation error rather than a blank picture.
- The `Viz` suffix marks these as lossy visualization projections rather than
  gufe classes, so nobody expects a round trip.

All twelve types are declared even though three have views; declaring them up
front costs nothing and means adding a view is an additive change.

See [`schema/README.md`](./schema/README.md) for the full contract.

### What may cross the boundary

SDF, PDB, and flat plain JSON. That is the whole list.

GraphML is not on it. `LigandNetwork.to_graphml()` is a graph whose *node
payloads are gufe `to_json` moldicts*, so forwarding it does not avoid the
problem - it relocates it, and the browser still ends up decoding atomic
numbers, bond tuples and a base-1-per-char `.npy` conformer blob. A
`LigandNetworkViz` payload is a registry of ligands-as-SDF plus keyed topology
instead.

### How the two sides are kept honest

`examples/*.json` is the hinge. The same golden payloads - built from real
gufe objects by `scripts/make_examples.py` - feed pytest, vitest, the
drag-and-drop page and the gallery. `python/tests/mutations.json` declares a mutation
matrix **once, as data**, and both suites apply it against the same schema file:
each row alters a payload in one specific way and pins what must happen.

Most rows must be rejected by both validators, at the same JSON pointer - a
rejection for the wrong reason does not count as a pass. A few must still be
*accepted*, and those matter just as much: garbage chemistry inside a valid
payload, a network edge naming a ligand that is not there, an unknown annotation
key. Schema validity is not chemical validity, and the views are what handle the
difference.

If the two validators ever disagree about what a valid payload is, one of the
two suites goes red.

---

## Developing and integrating

### Adding a view

The loop is short, and every step has a task:

1. **Model the data** in `schema/alchemy-viz.schema.json`. Add a `$def`
   named exactly for the `type` const it declares - both validators find a
   payload's branch by that name.
2. **Build the payload** in `python/alchemy_viz/components.py`, `networks.py` or
   `alchemical.py`, returning a plain dict, and add it to the `isinstance`
   dispatch. Ask the gufe object to serialize itself; never reach into its JSON.
3. `pixi run types` - the TypeScript types follow from the schema.
4. **Write the view**: `ts/src/views/<type>.ts`, a class extending
   `AlchemyElement<YourPayload>` with one `renderView(host, payload)` method.
   Return `{ onResize, cleanup }` if it owns anything that must be released.
5. **Register it**: add the tag to `VIEW_TAGS` in `ts/src/alchemy-view.ts` and an
   `import` in `ts/src/index.ts`.
6. `pixi run examples` for a fixture, add the mutation rows that prove your new
   constraints hold, then `pixi run build` and `pixi run test`.

A parity test asserts that every type in `VIEW_TAGS` is one the schema declares.
The reverse is deliberately not required - a declared type with no view is the
"no visualization for X yet" panel, which is correct behaviour.

### The component model

Every view is a custom element with the same three-beat lifecycle, which is what
makes components reusable inside one another, and what will make the notebook
widget straightforward:

| Beat | Hook |
|---|---|
| create | `connectedCallback` - build the DOM, start engines |
| update | the `payload` setter - tear the old view down, build the new one |
| destroy | `disconnectedCallback` - kill viewers, observers and timers |

Embedding one view inside another is therefore
`host.appendChild(document.createElement("gufe-..."))`, and the embedded element
cleans itself up when its parent removes it. `<alchemy-view>` itself is just a
dispatcher that does exactly this.

### Embedding the bundle in your own page

The bundle is one ES module. Importing it registers every element as a side
effect; there is no init call:

```html
<script type="module" src="alchemy-viz.js"></script>
<alchemy-view id="v" style="width:100%;height:600px"></alchemy-view>
<script type="module">
  document.getElementById("v").payload = await (await fetch("payload.json")).json();
</script>
```

That handshake - put the element on the page, set `.payload` - is the entire
API. It is the same one
[the generated HTML file](#the-generated-html-file-what-is-in-it-and-how-it-loads)
uses, and the same one a notebook widget will use; only where the payload comes
from differs.

From Python, `alchemy_viz.bundle_source()` returns the bundle as a string if you
want to inline it yourself rather than use `to_html`.

A host that mounts the element itself is the case `window.ALCHEMY_VIZ_DEBUG = true`
exists for: set it before assigning `.payload` and the element prints what it was
handed. See [Debugging: seeing the
payload](#debugging-seeing-the-payload).

### Relationship to OpenFE and gufe

alchemy-viz belongs to the gufe/OpenFE family, and is a **separate library**
from gufe rather than a piece of it. Those are two different statements and both
matter:

- **It depends on gufe.** alchemy-viz imports the gufe library itself, to read
  the objects it draws. It pulls gufe in; nobody hands it one.
- **It is not integrated into gufe's code.** Nothing in gufe or openfe imports
  alchemy-viz, calls it, or knows it exists. The dependency arrow points one way
  and never back.

So it is called independently: you import a function from alchemy-viz and call
it yourself.

```python
from alchemy_viz import view

view(ligand)
```

Concretely, installing it:

- patches nothing and monkeypatches nothing;
- registers no renderer and overrides no method on any gufe class, including
  `_repr_html_`;
- adds no import hook and no entry point that gufe or openfe reads.

Every visualization is an explicit call to one of the three entry points -
`to_html`, `view`, or the `alchemy-viz` command. Uninstalling the package
returns the environment to exactly what it was.

That is also why it installs *into* an openfe environment rather than bringing
its own gufe: the objects you want to draw are the ones already in that
environment. The library writes nothing to disk on its own; `to_html` returns a
string and the caller decides where it goes.

Which of gufe's serialization forms round-trips reliably is still an open
question: `QuickRun` writes `to_dict` while other paths write `to_json`, and the
keyed-chain form is different again. Rather than guess, the CLI tries the
documented entry point and, on failure, says so and names the two routes that
always work - a payload JSON, or building the object in Python and calling
`to_html` directly.

---

## Testing

```bash
pixi run test          # both suites - this is the one to run
```

That is `test-py` and `test-ts` together. Run them separately when iterating:

| Command | Suite | Covers |
|---|---|---|
| `pixi run test-py` | pytest | Payload builders per type; every fixture against the schema; the `isinstance` dispatch order against gufe's real class hierarchy; schema and TypeScript dispatch parity; the mutation matrix; `to_html` and the CLI. |
| `pixi run test-ts` | vitest | The same fixtures and the same mutation matrix through Ajv; `<alchemy-view>` dispatch and graceful degradation; the create/update/destroy lifecycle; what each view puts on the page; the three debug switches and what they print; a smoke test that loads the **built bundle** and drives it through the generated page's bootstrap. |

Two more checks, both of which CI runs and both of which are easy to forget
locally:

```bash
pixi run lint              # ruff check + ruff format --check + tsc --noEmit
pixi run check-generated   # rebuilds examples, TS types and bundle; fails on any diff
```

All four at once, in CI's order:

```bash
pixi run ci
```

`check-generated` catches the most annoying class of mistake: change the schema
without regenerating the TypeScript types or the bundle, and everything passes
locally while CI goes red.

### Running a subset

```bash
pixi run pytest python/tests/test_mutations.py -q
pixi run pytest -k "mutation and protein" -v
pixi run npm run test -- validate           # vitest, by filename
pixi run npm run test:watch                 # vitest, watching
```

### No test reaches the network

RDKit, 3Dmol and d3 are faked through `globalThis.__gufeEngines` - the same
pre-seed hook a bundled-engines mode would use - so the tests exercise the real
loader path rather than a mock of it. Seeding d3 as something unusable is also
how the ligand network's offline fallback is tested, without a fetch that fails.

The suites stop at the engine boundary, though. They do not prove that RDKit
draws a molecule, that 3Dmol draws a protein, or that a force layout lands
somewhere sensible - for that, see
[Look at the visualizations](#3-look-at-the-visualizations).

---

## All tasks

| Task | What it does |
|---|---|
| `pixi run dev` | Vite dev server - both galleries, the dropzone and the parity page |
| `pixi run parity-reference` | Render gufe's own mapping drawings, to compare ours against |
| `pixi run big-network` | Generate a large synthetic ligand network, to measure against |
| `pixi run atom-colors` | Regenerate the mirrored atom colours from gufe and matplotlib |
| `pixi run alchemy-viz <input> [-o out.html]` | Render one payload or gufe object as a standalone page |
| `pixi run alchemy-viz-debug <input> [-o out.html]` | The same, with the payload printed to the browser console |
| `pixi run build` | Bundle TypeScript into `python/alchemy_viz/_assets/alchemy-viz.js` |
| `pixi run types` | Regenerate `ts/src/schema/types.ts` from the JSON Schema |
| `pixi run examples` | Rebuild `examples/*.json` from real gufe objects |
| `pixi run gallery` | Rebuild the gallery notebook - every view, screenshotted |
| `pixi run notebook` | JupyterLab on the demo notebook (its own environment) |
| `pixi run marimo` | The same notebook, converted, in marimo |
| `pixi run test-notebook` | The notebook layer's tests, with anywidget installed |
| `pixi run test` | Both test suites |
| `pixi run test-py` / `test-ts` | One suite each |
| `pixi run lint` | ruff, and `tsc --noEmit` |
| `pixi run format` | Apply ruff's fixes and formatting |
| `pixi run check-generated` | Fail if any committed generated artifact is stale |
| `pixi run ci` | Lint, both suites and `check-generated`, as CI runs them |
| `pixi run dist` | Build `dist/*.whl` and `dist/*.tar.gz`, and `twine check` them |
| `pixi run dist-check` | Install that wheel into a clean venv with no gufe, and use it |

## Layout

```
schema/     the Python<->TypeScript contract, and the mutation matrix
python/     alchemy_viz - payload builders, HTML writer, notebook view, CLI
ts/         the custom elements; src/views one per payload type, src/shared
            the machinery they are built from
examples/   golden payloads, shared by pytest, vitest, the dropzone and the gallery
            notebooks/ - one demo covering every type and every delivery mode
scripts/    the generators, and CI runs
            data/ - the fixture inputs gufe does not ship, read never rebuilt
```

## Releasing

The version is not a string anyone edits. setuptools-scm derives it from the
git tag, so tagging *is* the release:

```bash
git tag -a v0.1.0 -m "v0.1.0"
git push origin v0.1.0
```

That fires `.github/workflows/release.yml`, which builds the sdist and wheel,
checks that the compiled bundle is inside the wheel, installs that wheel into a
clean environment with no Node and no gufe and renders a payload with it, and
only then uploads to PyPI.

Upload is [PyPI Trusted
Publishing](https://docs.pypi.org/trusted-publishers/): no API token is stored
in the repository. PyPI has to be configured once, on the project's *Publishing*
page, to trust this repository with workflow `release.yml` and environment
`pypi`. Renaming the workflow file breaks that trust until the publisher is
re-pointed.

Rehearse first. PyPI refuses to re-upload a filename it already has, so a real
release is one-shot. Running the workflow manually
(*Actions -> Release -> Run workflow*) builds and verifies exactly the same way
but uploads to TestPyPI instead, which costs nothing but a dev version number.

To build locally without publishing:

```bash
pixi run dist         # rebuilds the bundle, then sdist + wheel, then twine check
pixi run dist-check   # installs that wheel into a clean venv with no gufe, and uses it
```

`dist-check` is the same three assertions the release workflow makes before it
uploads: the bundle is inside the wheel, a payload renders with no gufe present,
and asking for something that does need gufe names conda-forge.

The sdist is deliberately small (~180 KB). `MANIFEST.in` prunes the 27 MB of
development material the repository tracks - the example payloads, the
structure fixtures, the TypeScript sources - none of which the wheel is built
from. The test suite reads `examples/` and `schema/` from a checkout, so it is
pruned too and is not runnable from an unpacked sdist; `git clone` then `pixi
run test` is how it runs.

## Status

The pipeline works end to end. Not published to PyPI yet - the machinery above
is in place and rehearsable against TestPyPI, and the name `alchemy-viz` is
unclaimed.

Every type the schema declares has a view. `ts/tests/dispatch.test.ts` asserts
that, so this table cannot go stale without the suite saying so:

| Type | View |
|---|---|
| `SmallMoleculeComponentViz` | 2D depiction, 3D conformer in three styles, and an info pane |
| `ProteinComponentViz` | 3Dmol with representation, colour scheme, waters and hetero atoms |
| `SolvatedPDBComponentViz`, `ProteinMembraneComponentViz` | the same view, opened showing what surrounds the protein |
| `SolventComponentViz` | the conditions card - what the solvent is, and how it is ionized |
| `LigandAtomMappingViz` | six ways to read one mapping, including gufe's own `view_3d` |
| `LigandNetworkViz` | force / circular / radial graph, ligand depictions in the nodes, a detail pane per mapping or ligand |
| `ChemicalSystemViz` | the labelled components, the selected one drawn beside them, and the whole complex in one scene where there is one |
| `TransformationViz` | the state diff beside the atom mapping it carries |
| `AlchemicalNetworkViz` | systems joined by transformations, coloured by composition, with a detail pane per system or transformation |
| `ProtocolViz`, `UnknownComponentViz` | a card naming what the payload says, for the things there is nothing to draw |

**Not there yet:** zero-network pages with RDKit, 3Dmol and d3 inlined - the
`__gufeEngines` hook they would use is in place and the tests drive it, but
`to_html` has no `engines="bundled"` mode, so today's pages still fetch those
three from their CDNs on demand. Also an optional localhost server; the first
PyPI upload, a conda-forge feedstock, and the transfer to the OpenFE org.

## Support

This work was supported by the [National Science Foundation under Grant No. 2303740](https://nsf.elsevierpure.com/en/projects/pose-phase-ii-building-open-source-ecosystems-in-molecular-scienc-2/).

![NSF funding header]([image-url](https://nsf.elsevierpure.com/skin/headerImage/))



## Licence

MIT.
