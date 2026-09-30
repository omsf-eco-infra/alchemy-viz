# The command line

```bash
alchemy-viz <input> [-o output.html] [--title TITLE] [--debug]
```

Pass an input file, get a self-contained HTML file out.


```bash
alchemy-viz network_setup/network_setup.json -o campaign.html
alchemy-viz network_setup/ligand_network.graphml     # writes <input>.html beside it
alchemy-viz ligand.json -o -                         # or stdout
```

## What it accepts

Three input formats:

| input | what it is | needs gufe |
|---|---|---|
| a serialized gufe object | anything `to_json` wrote, which is everything `openfe plan-rbfe-network` creates | yes |
| `*.graphml` | a `LigandNetwork`, read by `LigandNetwork.from_graphml` | yes |
| an alchemy-viz payload JSON | the files in [`../examples/`](../examples), and whatever `payload_for` returns | no |

gufe comes from conda-forge, not PyPI, so it can be missing even in a working
alchemy-viz install. When it is, the two gufe-reading formats say so and name the
conda install rather than failing with a `ModuleNotFoundError` about a package
pip cannot get.

### Example openfe CLI and visualization

```
$ openfe plan-rbfe-network -M ligands.sdf -p protein.pdb -o network_setup

network_setup/
  network_setup.json           the AlchemicalNetwork - the whole campaign
  ligand_network.graphml       the LigandNetwork - the ligands and the mappings
  transformations/
    easy_rbfe_lig_ejm_31_solvent_lig_ejm_42_solvent.json     one edge, one file
    ...
```

Every file is a visualization input:

```bash
alchemy-viz network_setup/network_setup.json           # the campaign
alchemy-viz network_setup/ligand_network.graphml       # the ligands and the mappings
alchemy-viz network_setup/transformations/easy_rbfe_lig_ejm_31_solvent_lig_ejm_42_solvent.json
```

The argument is a single file.

## Where the page goes

- `-o path.html` writes there.
- `-o -` writes to stdout, and behaves like a Unix filter: `alchemy-viz x.json -o - | head` closes the pipe partway through a 400 kB write and exits rather than printing a traceback.
- with no `-o`, the page lands beside the input as `<input>.html`, and the command prints where it went and how big it was.

## Which file am I looking at

A generated page names its input file twice: in the browser tab, and in the
visualization's own header beside whatever the payload calls itself. Both,
because the tab title is the first thing lost to a screenshot or to a window
with twelve tabs open, and several campaigns draw a similar picture under the
same name.

`--title` renames the tab. The header still names the file that was rendered.

## Options

`--title` sets the page's `<title>`, which otherwise comes from the payload's
name.

`--debug` makes the page print its payload to the browser console, before
validation and before dispatch. You do not need to rebuild a page to get this:
opening any generated page as `<url>?debug` does the same thing.

## The HTML page

One file, and everything is inlined: the compiled bundle, the payload, the
styles. Nothing is fetched from this project at view time, so the file works from
a download folder, an email attachment or a network share, with the exception of RDKit and 3Dmol which come from a CDN.

If the page has a menu button in its top left corner, one of its entries turns
what you are looking at into a link, by uploading the page as a
[framejs](https://framejs.app) app and opening it. That is for the case where an
attachment is the wrong shape - an issue comment, a chat thread, a review - and
nothing is uploaded until it is pressed.


## The same page, from Python

The CLI is a thin wrapper. `to_html` returns the string if you want to redirect:

```python
from pathlib import Path
from alchemy_viz import to_html

Path("campaign.html").write_text(to_html(campaign), encoding="utf-8")
```

`to_html` takes the file name as `source=` rather than working it out, because a
payload does not carry one - what a file on disk is called is not part of a gufe
object. Pass it and the header names it, exactly as the CLI's pages do:

```python
to_html(campaign, source="network_setup.json")
```
