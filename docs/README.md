# alchemy-viz documentation

Six pages. The first two are the two ways you will actually call this; the rest
are the details behind them.

| page | what it answers |
|---|---|
| [`cli.md`](./cli.md) | `alchemy-viz object.json` - one file in, one HTML page out, no Python written |
| [`openfe.md`](./openfe.md) | `view(obj)` on an openfe or gufe object, and on the directory `openfe plan-rbfe-network` writes |
| [`notebooks.md`](./notebooks.md) | what a `view()` call puts in a cell, the two output layers, and the knobs |
| [`views.md`](./views.md) | every type that has a view, and what each one draws |
| [`embedding.md`](./embedding.md) | mounting the bundle in a page of your own |
| [`troubleshooting.md`](./troubleshooting.md) | blank cells, missing depictions, payloads that will not draw |

Start here if you have just installed it:

```bash
conda activate my-openfe-env
pip install alchemy-viz

alchemy-viz network_setup/network_setup.json    # writes network_setup.json.html
```

That is the whole of the shell path. The Python path is one function:

```python
from alchemy_viz import view
view(network)
```

[`../README.md`](../README.md) is the project overview and the development
setup. [`../schema/README.md`](../schema/README.md) is the payload contract,
which you need only if you are changing what a view draws.
