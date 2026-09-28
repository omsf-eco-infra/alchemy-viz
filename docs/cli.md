# The command line

```bash
alchemy-viz <input> [-o output.html] [--title TITLE] [--debug]
```

One object in, one self-contained HTML file out. No notebook, no kernel, and no
Python of your own: this is the path for looking at what a planner produced and
for mailing the result to someone who will not install anything.

```bash
alchemy-viz network_setup/network_setup.json -o campaign.html
alchemy-viz network_setup/ligand_network.graphml     # writes <input>.html beside it
alchemy-viz ligand.json -o -                         # or stdout
```

`alchemy-viz --help` is the same list, shorter.

## What it accepts

Three input formats, told apart by suffix and then by shape.

| input | what it is | needs gufe |
|---|---|---|
| a serialized gufe object | anything `to_json` wrote, which is everything `openfe plan-rbfe-network` leaves behind | yes |
| `*.graphml` | a `LigandNetwork`, read by `LigandNetwork.from_graphml` | yes |
| an alchemy-viz payload JSON | the files in [`../examples/`](../examples), and whatever `payload_for` returns | no |

The payload form is the one that needs nothing installed, because it is already
the thing the browser draws. Reading a *gufe* object means deserializing it into
live gufe objects first, and only then turning it into a payload - TypeScript
never sees gufe's own JSON.

gufe comes from conda-forge, never PyPI, so it can be missing even in a working
alchemy-viz install. When it is, the two gufe-reading formats say so and name the
conda install rather than failing with a `ModuleNotFoundError` about a package
pip cannot get.

### The directory a planner writes

```
$ openfe plan-rbfe-network -M ligands.sdf -p protein.pdb -o network_setup

network_setup/
  network_setup.json           the AlchemicalNetwork - the whole campaign
  ligand_network.graphml       the LigandNetwork - the ligands and the mappings
  transformations/
    easy_rbfe_lig_ejm_31_solvent_lig_ejm_42_solvent.json     one edge, one file
    ...
```

Every file there is an input to this command:

```bash
alchemy-viz network_setup/network_setup.json           # the campaign
alchemy-viz network_setup/ligand_network.graphml       # the ligands and the mappings
alchemy-viz network_setup/transformations/easy_rbfe_lig_ejm_31_solvent_lig_ejm_42_solvent.json
```

Note the campaign's filename: the planner names it after the output directory,
not `alchemical_network.json`. `openfe plan-rhfe-network` writes the same layout.

The argument is a file, not a directory: `alchemy-viz network_setup/` is an
error. Which of the three you want to look at is a real choice - the campaign is
every leg of every edge, the ligand network is the map it was planned from - so
the command does not pick for you.

## Where the page goes

- `-o path.html` writes there.
- `-o -` writes to stdout, and behaves like a Unix filter: `alchemy-viz x.json -o - | head` closes the pipe partway through a 400 kB write and exits rather than printing a traceback.
- with no `-o`, the page lands beside the input as `<input>.html`, and the command prints where it went and how big it was.

## Options

`--title` sets the page's `<title>`, which otherwise comes from the payload's
name.

`--debug` makes the page print its payload to the browser console, before
validation and before dispatch. You do not need to rebuild a page to get this:
opening any generated page as `<url>?debug` does the same thing.

## What is in the page

One file, and everything is inlined: the compiled bundle, the payload, the
styles. Nothing is fetched from this project at view time, so the file works from
a download folder, an email attachment or a network share.

Two things are *not* inlined. RDKit and 3Dmol load from a CDN on demand, from a
view that needs them, so a page opened with no network shows the layout, the
metadata and the tables but no 2D depiction and no 3D viewer. See
[troubleshooting](./troubleshooting.md#no-depiction-or-no-3d-viewer).

If the page has a menu button in its top left corner, one of its entries turns
what you are looking at into a link, by uploading the page as a
[framejs](https://framejs.app) app and opening it. That is for the case where an
attachment is the wrong shape - an issue comment, a chat thread, a review - and
nothing is uploaded until it is pressed.

## When it will not read the file

Every failure is a message rather than a traceback, and each one names what to
try instead. The one worth knowing in advance: a file that is neither an
alchemy-viz payload nor something `GufeTokenizable.from_json` can read gets the
three things that do work, because "not valid JSON" is rarely the actual problem.

```
$ alchemy-viz results.json
results.json: could not read this as an alchemy-viz payload or as a serialized
gufe object (KeyError: '__qualname__').

Three things that do work:
  - a file written by openfe, such as network_setup/network_setup.json or any
    edge under network_setup/transformations/;
  - an alchemy-viz payload, such as the files in examples/;
  - building the object in Python and calling alchemy_viz.to_html(obj) yourself.
```

## The same page, from Python

The CLI is a thin wrapper. `to_html` returns the string and writes nothing, so
where the page goes is yours to decide:

```python
from pathlib import Path
from alchemy_viz import to_html

Path("campaign.html").write_text(to_html(campaign), encoding="utf-8")
```
