# Notebooks

| file | outputs in git | what it is |
|---|---|---|
| [`alchemy-viz-demo.ipynb`](./alchemy-viz-demo.ipynb) | **none** | the one to run locally |
| [`alchemy-viz-gallery.ipynb`](./alchemy-viz-gallery.ipynb) | screenshots, ~660 kB | the one that renders on GitHub |

## alchemy-viz-demo.ipynb

Opens on a drawn network in the second cell, then **Your own objects** - the
`network_setup/` directory `openfe plan-rbfe-network` writes, the same campaign
planned in Python, and the shell equivalent. It runs without openfe installed:
the openfe-only cells report and skip, and the rest falls back to
`scripts/data/tyk2_network.graphml`, a real `ligand_network.graphml` from
OpenFE's RBFE tutorial.

After that is the repository's own test bench - every payload type, and every
way of delivering a view. Run this when you have changed something.

**Reference** is the last section, and holds everything that is only worth
reading once: the two output layers, the environment check, the byte
costs, and the four ways a payload fails to draw.

```bash
pixi run notebook    # JupyterLab, on this file
pixi run marimo      # the same file, converted, in marimo
```

Committed **with no outputs**, and should stay that way: each output is an
`<iframe srcdoc="...">` carrying a whole page, a quarter of a megabyte per view
in a file that is otherwise 20 kB, and none of it renders on GitHub anyway.

## alchemy-viz-gallery.ipynb

The same views as pictures, so they are visible on GitHub to someone who is not
going to install anything. GitHub's notebook renderer strips the `<iframe>` and
`<script>` that `view()` emits, and `image/png` is the one output type that
survives.

The cells hold the real `alchemy_viz.view(...)` call, so running the notebook
replaces every screenshot with the live view - a fine way to check that a
picture is honest, and a bad way to leave the file. **Do not commit the result.**
`pixi run gallery` restores it.

Regenerate **whenever you change what a view draws**: the screenshots do not
know the drawing code moved on, and a stale gallery looks authoritative. A new
payload type needs a row in `NOTES` in
[`scripts/make_gallery.py`](../../scripts/make_gallery.py), which is both the
caption and the list of what gets captured.

That script writes each payload through `to_html`, screenshots the page in
headless Chrome, and embeds the PNG. Two details in it are not optional:

- **`--enable-unsafe-swiftshader --use-gl=angle --use-angle=swiftshader`** -
  without software WebGL, 3Dmol cannot create a context and every 3D pane comes
  out as "error creating viewer".
- **Watch for the file, then kill the browser** - given a throwaway profile,
  Chrome writes the PNG and does not exit.

It uses whatever Chrome or Chromium is on the machine; set `CHROME` to point
elsewhere. This is the only task here that needs a browser.
