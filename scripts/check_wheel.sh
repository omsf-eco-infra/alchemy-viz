#!/usr/bin/env bash
# Install the built wheel the way a user gets it, and use it.
#
# The environment this creates is the one `pip install alchemy-viz` actually
# lands in: no repository checkout, no Node toolchain, and no gufe. gufe is not
# installable from PyPI at a usable version, so a gufe-less environment is the
# ordinary case rather than an edge case, and three things have to hold there:
# the package imports, it renders a payload, and asking it for something that
# does need gufe produces the conda-forge instruction rather than a bare
# ModuleNotFoundError.
#
# Run from the repository root, after `pixi run dist`. The same checks run in
# CI, in the `smoke` job of .github/workflows/release.yml.
set -euo pipefail

wheel=$(ls dist/*.whl)
venv=$(mktemp -d)/venv
trap 'rm -rf "$(dirname "$venv")"' EXIT

echo "==> installing $(basename "$wheel") into a clean venv"
python -m venv "$venv"
"$venv/bin/pip" install --quiet --upgrade pip
"$venv/bin/pip" install --quiet "$wheel"

echo "==> checking it landed without gufe"
"$venv/bin/python" - <<'PY'
import importlib.util
import sys

if importlib.util.find_spec("gufe") is not None:
    sys.exit("gufe got installed; the extra is leaking into the hard dependencies")
print("ok:          no gufe, as expected")
PY

echo "==> checking it imports and renders"
"$venv/bin/python" - <<'PY'
import alchemy_viz

bundle = alchemy_viz.bundle_source()
if len(bundle) < 100_000:
    raise SystemExit(f"the bundle is {len(bundle)} bytes, too small to be a real build")
print(f"ok:          the bundle shipped inside the wheel ({len(bundle):,} bytes)")

html = alchemy_viz.to_html({"type": "SmallMoleculeComponentViz", "name": "x"})
if "<alchemy-view" not in html:
    raise SystemExit(f"rendered page has no <alchemy-view>: {html[:200]}")
print(f"ok:          rendered a payload with no gufe ({len(html):,} bytes)")

try:
    alchemy_viz.payload_for(object())
except ImportError as e:
    if "conda-forge" not in str(e):
        raise SystemExit(f"a missing gufe was reported without an install instruction: {e}") from e
    print("ok:          a missing gufe is reported in words")
else:
    raise SystemExit("expected ImportError when gufe is not installed")
PY

echo "==> checking the command line entry point"
"$venv/bin/alchemy-viz" --help > /dev/null
payload=$(mktemp -d)/mol.json
echo '{"type": "SmallMoleculeComponentViz", "name": "x"}' > "$payload"
"$venv/bin/alchemy-viz" "$payload" -o - > "$payload.html"
grep -q "<alchemy-view" "$payload.html"
echo "ok:          alchemy-viz rendered a payload from the command line"

echo
echo "the wheel is installable and usable with no Node and no gufe"
