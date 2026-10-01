"""Emit the mirrored atom-colour block for ``ts/src/shared/atom-colors.ts``.

Atom colours are never authored in this repository. Every one of them is read
from the library that already draws it and written out verbatim, so that a
picture drawn here and a picture drawn by gufe or openfe cannot disagree about
what a colour means.

Three sources, all read rather than transcribed:

* the two mapping highlight colours, imported from ``gufe`` itself;
* the 3D mapping ramp, sampled from the matplotlib colormap openfe asks for;
* the black-and-white element palette gufe draws mappings with, checked against
  RDKit's own ``useBWAtomPalette()`` rather than typed out;
* the dark-ground element palette, read out of RDKit's own ``SetDarkMode``.

Element colouring anywhere else belongs to 3Dmol's ``Jmol`` scheme and RDKit's
defaults, and is left to them.

Run ``pixi run atom-colors``. CI re-runs it and fails on any difference, the
same way the schema and the bundle are checked.
"""

from __future__ import annotations

import subprocess
from pathlib import Path

# openfe's view_mapping_3d asks matplotlib for this colormap by name and indexes
# it by the position of each mapped pair. Changing it changes what OpenFE draws,
# so it is a decision for the team rather than an edit here.
RAMP_NAME = "hsv"

#: Highest atomic number to give a palette entry. Covers the periodic table with
#: room to spare; RDKit falls back to its default for anything unlisted, which is
#: why the equivalence below is checked rather than assumed.
MAX_ATOMIC_NUMBER = 118

#: How many stops to bake. The browser interpolates linearly between them while
#: hsv does not, so this has to be dense enough that the difference is invisible.
#: A rainbow turns hue fast, which is why it is this many rather than a handful.
RAMP_STOPS = 128

OUTPUT = Path(__file__).resolve().parent.parent / "ts" / "src" / "shared" / "atom-colors.ts"

HEADER = """/**
 * GENERATED - do not edit by hand.
 *
 * Source:  scripts/gen_atom_colors.py
 * Command: pixi run atom-colors
 *
 * Atom colours are mirrored from the libraries that already draw them, never
 * authored here, so that a picture drawn by this project and a picture drawn by
 * gufe or openfe cannot disagree about what a colour means. CI regenerates this
 * file and fails if it differs from what is committed.
 *
 * Element colouring in 3D belongs to 3Dmol's `Jmol` scheme and is left to it. In
 * 2D it belongs to RDKit's defaults, which are drawn for paper, so the only
 * element colours here are the two RDKit itself switches to when the paper
 * assumption fails: gufe's black-and-white palette, and RDKit's dark-mode one.
 */
"""


def _hex(rgb: tuple[float, float, float]) -> str:
    return "#" + "".join(f"{round(channel * 255):02X}" for channel in rgb[:3])


def _gufe_mapping_colors() -> dict[str, str]:
    """The 2D mapping colours, imported from gufe rather than copied out of it."""
    from gufe.visualization.mapping_visualization import BLUE, RED

    return {"elementChange": _hex(BLUE), "uniqueAtom": _hex(RED)}


def _ramp() -> list[str]:
    """The 3D mapping ramp, sampled from the colormap openfe names."""
    from matplotlib import colormaps

    cmap = colormaps[RAMP_NAME]
    return [_hex(cmap(i / (RAMP_STOPS - 1))) for i in range(RAMP_STOPS)]


def _bw_palette() -> dict[int, tuple[float, float, float]]:
    """Every element drawn black, verified to equal RDKit's own BW palette.

    gufe calls ``d2d.drawOptions().useBWAtomPalette()``. RDKit-JS offers no such
    method: a view can only pass JSON draw options, and **the JSON parser accepts
    ``useBWAtomPalette`` and silently ignores it** - drawing an oxygen red
    regardless. An explicit ``atomColourPalette`` does work, so that is the route
    the browser has to take.

    The equivalence is proved here rather than trusted, so that a change in
    RDKit's palette handling fails this generator instead of quietly making our
    2D mappings disagree with gufe's.
    """
    import json

    from rdkit import Chem
    from rdkit.Chem.Draw import rdMolDraw2D

    palette = {z: (0.0, 0.0, 0.0) for z in range(MAX_ATOMIC_NUMBER + 1)}

    # An oxygen and a nitrogen, so a colour palette has something to get wrong.
    probe = Chem.MolFromSmiles("c1ccccc1ON")

    def drawn(use_method: bool) -> str:
        drawer = rdMolDraw2D.MolDraw2DSVG(300, 300)
        if use_method:
            drawer.drawOptions().useBWAtomPalette()
        else:
            rdMolDraw2D.UpdateDrawerParamsFromJSON(
                drawer, json.dumps({"atomColourPalette": {str(z): list(c) for z, c in palette.items()}})
            )
        rdMolDraw2D.PrepareAndDrawMolecule(drawer, probe)
        drawer.FinishDrawing()
        return drawer.GetDrawingText()

    if drawn(False) != drawn(True):
        raise SystemExit(
            "the generated all-black palette no longer reproduces RDKit's "
            "useBWAtomPalette(). gufe draws mappings with the latter, so the 2D "
            "mapping view would stop matching it. Investigate before regenerating."
        )
    return palette


def _dark_mode() -> dict:
    """RDKit's dark mode, read out of ``SetDarkMode`` rather than invented.

    RDKit already has an answer for drawing on a dark ground: a palette whose
    carbon is near-white and whose heteroatoms are lifted to read against black,
    plus the inks the drawing uses outside the palette. Reading it means our dark
    depictions and a dark depiction drawn anywhere else in the RDKit ecosystem
    agree, the same way the rest of this file works.

    The inks are found by diffing a dark drawer against a fresh one rather than
    by naming the ones we happen to know about. There are more of them than there
    look to be, they are easy to miss one at a time, and missing one is invisible
    until someone looks at a picture: atom indices are drawn as *notes*, not as
    annotations, so they keep ``atomNoteColour`` and stay black through an
    ``annotationColour`` that is perfectly correct.

    Each key is then pushed back through the JSON parser and read out again,
    because that is the only route RDKit-JS has and a key it silently ignores
    would leave that ink black in the browser while looking right here.
    """
    from rdkit.Chem.Draw import rdMolDraw2D

    def options(dark: bool):
        drawer = rdMolDraw2D.MolDraw2DSVG(1, 1)
        if dark:
            rdMolDraw2D.SetDarkMode(drawer)
        return drawer.drawOptions()

    plain, dark = options(False), options(True)

    def is_colour(value) -> bool:
        return isinstance(value, tuple) and len(value) == 4 and all(isinstance(c, float) for c in value)

    def rgb(colour) -> tuple[float, ...]:
        return tuple(round(channel, 6) for channel in colour[:3])

    # Every ink dark mode moves, whatever it is called. `backgroundColour` is
    # deliberately not one of ours: see DARK_DRAW_OPTIONS in the emitted file.
    inks = {}
    for name in sorted(dir(dark)):
        if name.startswith("_") or name == "backgroundColour":
            continue
        value = getattr(dark, name, None)
        if is_colour(value) and value != getattr(plain, name, None):
            inks[name] = tuple(round(channel, 6) for channel in value)

    palette = {z: rgb(colour) for z, colour in dark.getAtomPalette().items()}
    if 6 not in palette:
        raise SystemExit("RDKit's dark palette no longer colours carbon; investigate before regenerating.")
    if "atomNoteColour" not in inks:
        raise SystemExit(
            "RDKit's dark mode no longer recolours atom notes. Atom indices are notes, so this is "
            "either a rename to follow or a picture to go and look at. Investigate before regenerating."
        )

    # The JSON parser is the only route a browser has, and it ignores what it
    # does not know silently. Prove every key survives the round trip.
    import json

    probe = rdMolDraw2D.MolDraw2DSVG(1, 1)
    rdMolDraw2D.UpdateDrawerParamsFromJSON(probe, json.dumps({k: list(v) for k, v in inks.items()}))
    read_back = probe.drawOptions()

    # RDKit keeps colours as single-precision floats, so the comparison is a
    # tolerance rather than an equality: 0.9 comes back as 0.89999997.
    def same(a, b) -> bool:
        return len(a) == len(b) and all(abs(x - y) < 1e-6 for x, y in zip(a, b))

    ignored = [name for name, value in inks.items() if not same(getattr(read_back, name), value)]
    if ignored:
        raise SystemExit(
            "RDKit's JSON draw options ignore " + ", ".join(sorted(ignored)) + ". A view can only pass "
            "JSON, so these would stay at their paper values in the browser. Investigate before regenerating."
        )

    return {
        "palette": palette,
        # Carbon, which is what a bond line and an unlabelled atom are drawn in,
        # and so the one colour a mono palette can be built out of.
        "ink": palette[6],
        "inks": inks,
    }


def _versions() -> str:
    import gufe
    import matplotlib

    return f"gufe {gufe.__version__}, matplotlib {matplotlib.__version__}"


def _key(z: int) -> str:
    """A palette key as an object key. RDKit's default entry is -1, which has to be quoted."""
    return str(z) if z >= 0 else f'"{z}"'


def render() -> str:
    colors = _gufe_mapping_colors()
    ramp = _ramp()
    stops = "\n".join(f'  "{value}",' for value in ramp)
    palette = ", ".join(f"{z}: BLACK" for z in sorted(_bw_palette()))

    dark = _dark_mode()
    dark_entries = ", ".join(
        f"{_key(z)}: [{', '.join(str(c) for c in rgb)}]" for z, rgb in sorted(dark["palette"].items())
    )
    mono_keys = sorted(set(dark["palette"]) | set(range(MAX_ATOMIC_NUMBER + 1)))
    dark_mono = ", ".join(f"{_key(z)}: DARK_INK" for z in mono_keys)

    dark_inks = "\n".join(
        f"  {name}: [{', '.join(str(c) for c in value)}]," for name, value in sorted(dark["inks"].items())
    )

    return f'''{HEADER}
/**
 * The two mapping highlight colours, from
 * `gufe.visualization.mapping_visualization`.
 *
 * gufe colours by *meaning* and makes no distinction between the two molecules:
 * an atom is either an element change, or unique to its side, or unremarkable.
 * There is deliberately no colour here for the third case, because gufe does not
 * highlight those atoms at all, and adding one would be inventing a colour.
 *
 * Both are also given in 3Dmol's `0x` form, because that is what its style
 * specifications take and converting at every call site is worse.
 *
 * This pair is colourblind-safe as it stands. Keep it that way by not editing it.
 */
export const MAPPING_COLORS = {{
  elementChange: "{colors["elementChange"]}",
  uniqueAtom: "{colors["uniqueAtom"]}",
  elementChange3D: "0x{colors["elementChange"][1:]}",
  uniqueAtom3D: "0x{colors["uniqueAtom"][1:]}",
}} as const;

/**
 * The 3D mapping ramp: matplotlib's `{RAMP_NAME}`, sampled at {RAMP_STOPS} stops.
 *
 * openfe indexes this by the position of each mapped *pair* and paints the same
 * colour on both of that pair's atoms, so a shared colour is what says "these
 * two are mapped to each other". It has nothing to do with the element.
 *
 * `{RAMP_NAME}` is a rainbow, which puts red next to purple; that has already cost
 * real debugging time. Moving to a perceptually uniform colormap is worth
 * proposing, but it changes what OpenFE draws, so it is a decision for the team
 * and a one-line change to `RAMP_NAME` in the generator, never an edit here.
 */
export const MAPPING_RAMP_3D: readonly string[] = [
{stops}
];

/** Which colormap `MAPPING_RAMP_3D` was sampled from. */
export const MAPPING_RAMP_NAME = "{RAMP_NAME}";

const BLACK: readonly [number, number, number] = [0, 0, 0];

/**
 * Every element drawn black, which is how gufe draws a mapping.
 *
 * gufe calls `drawOptions().useBWAtomPalette()` so that the two highlight
 * colours are the only colour on the page. RDKit-JS has no such method: a view
 * can only pass JSON draw options, and **the JSON parser accepts
 * `useBWAtomPalette` and silently ignores it**, drawing an oxygen red anyway.
 * An explicit palette does work, so this is that palette.
 *
 * The generator checks this reproduces `useBWAtomPalette()` byte for byte
 * before emitting it, so a change in RDKit fails the build rather than quietly
 * making our mappings disagree with gufe's.
 */
export const MAPPING_BW_PALETTE: Readonly<Record<number, readonly [number, number, number]>> = {{
  {palette},
}};

/**
 * The draw options a mapping depiction must pass to match gufe.
 *
 * All three are things gufe sets and RDKit does not default to. Getting the
 * highlight colours right while missing these still produces a picture that
 * does not match.
 */
export const MAPPING_DRAW_OPTIONS = {{
  atomColourPalette: MAPPING_BW_PALETTE,
  addAtomIndices: true,
  continuousHighlight: false,
}} as const;

const DARK_INK: readonly [number, number, number] = [{dark["ink"][0]}, {dark["ink"][1]}, {dark["ink"][2]}];

/**
 * RDKit's own element palette for a dark ground, from `SetDarkMode`.
 *
 * The default palette is drawn for paper: carbon is black, and so is every bond
 * line and every unlabelled atom, which on a dark ground is a molecule nobody
 * can see. This is what RDKit itself switches to instead, so a dark depiction
 * here and a dark depiction drawn by any other RDKit caller agree.
 *
 * RDKit-JS has no `setDarkMode`, only JSON draw options, which is why this is a
 * palette rather than a flag - the same reason `MAPPING_BW_PALETTE` is one.
 */
export const DARK_ATOM_PALETTE: Readonly<Record<number, readonly [number, number, number]>> = {{
  {dark_entries},
}};

/**
 * Every element in one ink, which is `MAPPING_BW_PALETTE` for a dark ground.
 *
 * gufe draws a mapping with no element colour at all so that its two highlight
 * colours are the only colour on the page. Keeping that on a dark ground means
 * keeping the single ink and lifting it off the background, so this is RDKit's
 * own dark carbon everywhere rather than a colour chosen here. It covers the
 * whole periodic table, plus the two keys RDKit's palette carries outside it,
 * so nothing is left drawn in the paper palette's black.
 */
export const DARK_MONO_PALETTE: Readonly<Record<number, readonly [number, number, number]>> = {{
  {dark_mono},
}};

/**
 * What else a depiction has to pass to be drawn for a dark ground.
 *
 * The inks are RDKit's, every one its own `SetDarkMode` moves off the paper
 * value, found by diffing rather than by listing the ones anybody remembered.
 * `atomNoteColour` is why: an atom index is a note rather than an annotation, so
 * a depiction with a correct `annotationColour` still numbers its atoms in
 * black. The generator checks each key survives RDKit's JSON parser, which is
 * the only route a browser has and which ignores what it does not know.
 *
 * The background is the one deliberate departure. RDKit's dark mode paints the
 * SVG black; this asks for no paint at all, so the view's own surface is the
 * ground and one depiction can sit on two different panels without carrying a
 * colour that disagrees with either.
 */
export const DARK_DRAW_OPTIONS = {{
  backgroundColour: [0, 0, 0, 0],
{dark_inks}
}} as const;
'''


def main() -> int:
    text = render()
    OUTPUT.write_text(text, encoding="utf-8")
    print(f"wrote {OUTPUT.relative_to(Path.cwd())} ({_versions()})")

    prettier = Path("node_modules/.bin/prettier")
    if prettier.is_file():
        subprocess.run([str(prettier), "--write", str(OUTPUT)], check=False, capture_output=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
