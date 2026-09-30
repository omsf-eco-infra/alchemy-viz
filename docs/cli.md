# Run it

```bash
alchemy-viz <input> [-o output.html] [--title TITLE] [--debug]
```

Pass an input file, get a self-contained HTML file out.


```bash
alchemy-viz network_setup/network_setup.json -o campaign.html
alchemy-viz network_setup/ligand_network.graphml     # writes <input>.html beside it
alchemy-viz ligand.json -o -                         # or stdout
```

`alchemy-viz --help` is the same list, shorter.

## Input formats

Three input formats:

| input | what it is | needs gufe |
|---|---|---|
| a serialized gufe object | anything `to_json` wrote, which is everything `openfe plan-rbfe-network` leaves behind | yes |
| `*.graphml` | a `LigandNetwork`, read by `LigandNetwork.from_graphml` | yes |
| an alchemy-viz payload JSON | the files in [`../examples/`](../examples), and whatever `payload_for` returns | no |


gufe comes from conda-forge. If missing, the two gufe-reading formats log and warn with an actionanble error.

### OpenFE output as visualization inputs

```
$ openfe plan-rbfe-network -M ligands.sdf -p protein.pdb -o network_setup

network_setup/
  network_setup.json           the AlchemicalNetwork - the whole campaign
  ligand_network.graphml       the LigandNetwork - the ligands and the mappings
  transformations/
    easy_rbfe_lig_ejm_31_solvent_lig_ejm_42_solvent.json     one edge, one file
    ...
```

Every file there is an input:

```bash
alchemy-viz network_setup/network_setup.json           # the campaign
alchemy-viz network_setup/ligand_network.graphml       # the ligands and the mappings
alchemy-viz network_setup/transformations/easy_rbfe_lig_ejm_31_solvent_lig_ejm_42_solvent.json
```

Note the campaign's filename: the planner names it after the output directory,
not `alchemical_network.json`. `openfe plan-rhfe-network` writes the same layout.

The argument is always a single file.

## HTML outputs

- `-o path.html` writes the argument as the HTML file
- `-o -` writes to stdout, and behaves like a Unix filter: `alchemy-viz x.json -o - | head` closes the pipe partway through a 400 kB write and exits rather than printing a traceback.
- with no `-o`, the page   the input as `<input>.html`, and the command prints where it went and how big it was.

## Options

`--title` sets the page's `<title>`, which otherwise comes from the payload's
name.

`--debug` makes the page print its payload to the browser console. Alternatively, add the url param `<url>?debug`.


## HTML from Python

The CLI is a thin wrapper: `to_html` returns the string and writes nothing, so if needed you can generate the page elsewhere:

```python
from pathlib import Path
from alchemy_viz import to_html

Path("campaign.html").write_text(to_html(campaign), encoding="utf-8")
```
