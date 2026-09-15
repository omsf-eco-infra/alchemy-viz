#!/usr/bin/env python
"""Build ``examples/notebooks/alchemy-viz-gallery.ipynb`` - the views, as pictures.

**Why this exists.** GitHub's notebook renderer strips ``<iframe>`` and
``<script>`` from cell outputs, which is everything ``view()`` emits.
An executed copy of the demo notebook therefore shows nothing at all on GitHub,
however well it works in a browser. ``image/png`` is the one output type that
does survive, so this captures each view as a screenshot and writes a notebook
whose outputs are those screenshots.

The cells hold the real call, so anyone who runs the notebook gets the live view
and the screenshot is replaced. The picture is a stand-in for a reader, not a
substitute for the thing.

Screenshots come from headless Chrome, which is already on the machine of anyone
who can look at these visualizations. Software WebGL is requested explicitly:
without it 3Dmol cannot create a context and every 3D pane is an error message.

Run with ``pixi run gallery``. Set ``CHROME`` to override the browser path.
"""

from __future__ import annotations

import base64
import json
import os
import pathlib
import shutil
import subprocess
import sys
import tempfile
import time

REPO = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO / "python"))

EXAMPLES = REPO / "examples"
OUT = EXAMPLES / "notebooks" / "alchemy-viz-gallery.ipynb"

#: Wide enough for the two-pane views, short enough to scroll past on GitHub.
WINDOW = (1100, 720)

#: Long enough for RDKit's wasm and 3Dmol to arrive from their CDNs and draw.
#: Virtual time, not wall-clock: Chrome fast-forwards its own timers, so this
#: costs about four seconds a page.
TIME_BUDGET_MS = 20000

#: How long to wait for one page's screenshot before giving up on it.
PAGE_TIMEOUT_S = 90

CHROME_CANDIDATES = (
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "google-chrome",
    "chromium",
    "chromium-browser",
)

#: What each view is, for the reader who is looking rather than running.
NOTES = {
    "small_molecule": "2D RDKit depiction beside the 3D conformer, with SMILES, charge and atom counts.",
    "small_molecule_charged": "The same view, with a non-zero formal charge.",
    "protein": "3Dmol with representation and colour-scheme switchers; waters hidden by default.",
    "protein_fragment": "A small protein, so the 3D view loads fast while iterating.",
    "protein_membrane": (
        "The same element, reached the other way. Python's MRO walk gives a membrane system the "
        "protein *builder*, but the payload it emits says `ProteinMembraneComponentViz`, and that "
        "type needs its own entry in the browser's dispatch table - inheritance on one side of the "
        "contract is not inheritance on the other, so both sides say it separately."
    ),
    "solvated_pdb": "`SolvatedPDBComponentViz`, dispatched to the same element for the same reason.",
    "ligand_network": "Radial graph of the ligands, with the selected edge's atom mapping on the right.",
    "ligand_network_named": "The same network with the ligands named, so labels replace gufe keys.",
    "ligand_network_medium": (
        "Ten TYK2 ligands and the nine mappings OpenFE's RBFE tutorial plans between them: a real "
        "network at the size a real network starts at, where the layout and the score colouring "
        "begin to carry information rather than decorate three nodes."
    ),
    "ligand_network_charged": (
        "Ten Eg5 ligands from OpenFE's published campaign, four neutral and six carrying a formal "
        "+1. The charge is badged on the nodes that have one and nowhere else, and the single "
        "mapping that changes it is dashed - which is what a real campaign looks like, since LOMAP "
        "plans around charge changes where it can."
    ),
    "ligand_network_large": (
        "Two hundred ligands and 594 mappings, which is what the level-of-detail rule is for: "
        "depictions give way to dots and labels drop out as the graph gets denser, and zooming in "
        "brings them back. **The mappings are synthetic** - paired by atom index, scored by an "
        "arithmetic ramp - so this is a picture of the view under load, not of any chemistry."
    ),
    "ligand_network_docked": (
        "267 JAK2 inhibitors and 399 mappings: the same size as the load network above, and real. "
        "They were docked into one frame of a molecular dynamics trajectory with their shared "
        "aminopyrimidine core restrained, so unlike every other fixture here the ligands are "
        "superposed on each other - which is what `3D Overlay` in the detail pane is drawing when "
        "an edge is open. The **mappings are geometric**: atoms paired by where they sit in that "
        "frame, not planned by a mapper."
    ),
    "ligand_atom_mapping": (
        "One mapping on its own, in the same element the ligand network's detail pane mounts. "
        "Gufe's own first edge, ethanol to ethane: two atoms paired, which is the shape of a "
        "mapping and little else. All three mapping cards open on plain 3D - the correspondence "
        "itself is drawn by the other modes in the switcher, `3D-Map`, `Pairs` and `2D`."
    ),
    "ligand_atom_mapping_medium": (
        "The same view on a real mapping, cut out of `ligand_network_medium`: the LOMAP-scored TYK2 "
        "edge that grows a methyl into a cyclopentyl. 28 of ligand A's 32 atoms map and 14 of "
        "ligand B's 42 do not, which is the difference `3D-Map` and `2D` colour - unique atoms "
        "against element changes, coloured the way gufe colours them."
    ),
    "ligand_atom_mapping_large": (
        "The largest pair in `ligand_network_large`, 36 atoms against 31 with all 31 paired. The "
        "load network's ligands are built from small scaffolds, so this is barely bigger than the "
        "TYK2 edge above - it is here for what it is rather than for its size. **The "
        "correspondence is synthetic**, paired by atom index like every edge of that network, so "
        "the modes that draw it are drawing nothing a chemist should read."
    ),
    "alchemical_network_charged": (
        "The same Eg5 ligands as solvated transformations: the charge badge moves onto the boxes "
        "that carry a charged ligand, and both legs of the charge-changing mapping are dashed."
    ),
    "alchemical_network_medium": (
        "The same ten TYK2 ligands as a binding campaign: every mapping becomes two transformations, "
        "a solvent leg and a complex leg, so the graph is two components rather than one. The complex "
        "leg's systems each carry the TYK2 protein, which the registry holds once for all ten."
    ),
    "alchemical_network_large": (
        "The two-hundred-ligand graph one layer up from `ligand_network_large`, with the same 594 "
        "edges - the level-of-detail rule seen on the alchemical view at the size it was written for. "
        "**The mappings are synthetic**, as they are in the ligand view of the same graph."
    ),
    "chemical_system": (
        "The system's components down the left, the selected one drawn on the right in whichever "
        "view its own type gets - so a chemical system is a chooser over the views above rather "
        "than a picture of its own."
    ),
    "chemical_system_complex": (
        "The same chooser with one more thing to choose: a ligand and the protein it is bound to "
        "share a coordinate frame, so there is a picture of the two together that neither "
        "component has on its own. That pose is the point of a binding campaign, and drawing the "
        "components one at a time is the only way to lose it - hence `Complex` first in the strip, "
        "opening framed on the site rather than on the whole kinase."
    ),
    "chemical_system_ensemble": (
        "The `Complex` view with more than one ligand in it: six docked poses of the JAK2 series "
        "from `ligand_network_docked`, in the site they were docked into. They are the busiest "
        "ligand of that network and the five partners it overlaps best, so this is what an edge of "
        "that graph looks like in three dimensions. Nothing here arranges them - the poses and the "
        "kinase arrive in one frame and no coordinate is touched."
    ),
    "solvent": (
        "A solvent component is a specification rather than a structure, so its view is a settings "
        "card beside a schematic that shows which ions are present - and says under itself, in "
        "words, that it is not showing how many."
    ),
}


def find_chrome() -> str:
    override = os.environ.get("CHROME")
    if override:
        return override
    for candidate in CHROME_CANDIDATES:
        resolved = candidate if pathlib.Path(candidate).exists() else shutil.which(candidate)
        if resolved:
            return resolved
    raise SystemExit(
        "no Chrome or Chromium found. Set CHROME to the browser binary, e.g.\n"
        "  CHROME='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' pixi run gallery"
    )


def screenshot(chrome: str, page: pathlib.Path, target: pathlib.Path, profile: pathlib.Path) -> bytes:
    """Render ``page`` in headless Chrome and return the PNG bytes.

    Chrome writes the image and then, given a throwaway profile, often does not
    exit. Rather than wait it out per page, this watches for the file, waits for
    its size to settle, and kills the browser: the picture is the whole point of
    running it.
    """
    process = subprocess.Popen(
        [
            chrome,
            "--headless",
            "--hide-scrollbars",
            # 3Dmol needs a WebGL context and a headless browser has no GPU.
            # Without these every 3D pane is "error creating viewer".
            "--enable-unsafe-swiftshader",
            "--use-gl=angle",
            "--use-angle=swiftshader",
            # Never touch the user's own Chrome profile, which may be open.
            f"--user-data-dir={profile}",
            "--no-first-run",
            "--no-default-browser-check",
            f"--window-size={WINDOW[0]},{WINDOW[1]}",
            f"--virtual-time-budget={TIME_BUDGET_MS}",
            f"--screenshot={target}",
            page.as_uri(),
        ],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

    try:
        deadline = time.monotonic() + PAGE_TIMEOUT_S
        size = -1
        while time.monotonic() < deadline:
            if target.exists():
                current = target.stat().st_size
                if current > 0 and current == size:
                    break
                size = current
            elif process.poll() is not None:
                break
            time.sleep(0.3)
    finally:
        if process.poll() is None:
            process.terminate()
            try:
                process.wait(timeout=10)
            except subprocess.TimeoutExpired:  # pragma: no cover - a wedged browser
                process.kill()

    if not target.exists():
        raise SystemExit(f"{page.name}: Chrome wrote no screenshot within {PAGE_TIMEOUT_S}s")
    return target.read_bytes()


def markdown(text: str, index: int) -> dict:
    return {
        "cell_type": "markdown",
        "id": f"gallery-{index:02d}",
        "metadata": {},
        "source": text.strip("\n").splitlines(keepends=True),
    }


def code_with_image(source: str, png: bytes, index: int) -> dict:
    return {
        "cell_type": "code",
        "id": f"gallery-{index:02d}",
        "execution_count": 1,
        "metadata": {},
        "source": source.strip("\n").splitlines(keepends=True),
        "outputs": [
            {
                "output_type": "execute_result",
                "execution_count": 1,
                "metadata": {},
                "data": {
                    "image/png": base64.b64encode(png).decode("ascii"),
                    "text/plain": "<alchemy-view>",
                },
            }
        ],
    }


def main() -> int:
    import alchemy_viz

    chrome = find_chrome()
    print(f"chrome: {chrome}")

    cells: list[dict] = []
    cells.append(
        markdown(
            """
# alchemy-viz gallery

Every view alchemy-viz draws today, as a picture.

> ### This notebook is for viewing on GitHub. It is not the one you run.
>
> **The outputs below are screenshots**, not live views. They exist because
> GitHub's notebook renderer strips `<iframe>` and `<script>` from cell outputs,
> which is everything `view()` emits - so an executed copy of the demo
> notebook shows a blank under every cell there. `image/png` is the one output
> type that survives.
>
> **To run the real thing**, open
> [`alchemy-viz-demo.ipynb`](./alchemy-viz-demo.ipynb) - every payload type, every
> delivery mode, the live gufe objects and the byte costs:
>
> ```
> pixi run notebook     # JupyterLab
> pixi run marimo       # the same notebook, in marimo
> ```
>
> **You can run this one too.** Its cells hold the real `view()` call, so
> running it replaces each screenshot with the live, interactive view - a good
> way to check that a picture is honest. Just do not commit the result: that
> strips out the pictures this file exists to carry. `pixi run gallery`
> regenerates them, and is what to run whenever you change what a view draws.
> [`README.md`](./README.md) is the full note.

Every payload type the schema declares is drawn, so what follows is the whole of
what alchemy-viz can show. Where two types share an element - the three PDB kinds,
the mapping standalone and inside a network - both are here, because sharing a
drawing path is a claim that has to be checked by looking.
""",
            0,
        )
    )
    cells.append(
        code_with_image(
            # `from alchemy_viz import view` on purpose: alchemy-viz is a separate
            # library that is called directly, so the cells below read as a
            # function someone imported rather than as something gufe provides.
            "import json\nfrom pathlib import Path\n\nfrom alchemy_viz import view\n\n"
            'EXAMPLES = Path("../")\n'
            'payloads = {p.stem: json.loads(p.read_text()) for p in sorted(EXAMPLES.glob("*.json"))}',
            b"",
            1,
        )
    )
    # The setup cell has nothing to show; drop the image output.
    cells[-1]["outputs"] = []

    with tempfile.TemporaryDirectory() as tmp:
        work = pathlib.Path(tmp)
        profile = work / "profile"
        total = 0

        for stem, note in NOTES.items():
            source = EXAMPLES / f"{stem}.json"
            if not source.is_file():
                print(f"  skip {stem}: no {source.name}")
                continue

            payload = json.loads(source.read_text(encoding="utf-8"))
            page = work / f"{stem}.html"
            page.write_text(alchemy_viz.to_html(payload), encoding="utf-8")
            png = screenshot(chrome, page, work / f"{stem}.png", profile)
            total += len(png)
            print(f"  {stem:24} {payload['type']:<28} {len(png):>8,} bytes")

            cells.append(markdown(f"### `{stem}.json` - `{payload['type']}`\n\n{note}", len(cells)))
            cells.append(code_with_image(f'view(payloads["{stem}"])', png, len(cells)))

    notebook = {
        "cells": cells,
        "metadata": {
            "kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"},
            "language_info": {"name": "python", "pygments_lexer": "ipython3"},
        },
        "nbformat": 4,
        "nbformat_minor": 5,
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(notebook, indent=1, ensure_ascii=True) + "\n", encoding="utf-8")
    print(f"\nwrote {OUT.relative_to(REPO)}")
    print(f"  {len(cells)} cells, {total:,} bytes of PNG, {OUT.stat().st_size:,} bytes on disk")
    print(f"  alchemy-viz {alchemy_viz.__version__}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
