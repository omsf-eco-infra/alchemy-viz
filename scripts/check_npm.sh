#!/usr/bin/env bash
# Install the packed npm package as an end user would, and compile against it.
#
# Checks that `exports` resolves every published entry from outside the package,
# and that a consumer with `types: []` - no @types/node - can read the `.d.ts`.
# A declaration tree that leans on a devDependency passes in here and fails for
# everyone else.
#
# Run with `pixi run npm-dist-check`, or `bash scripts/check_npm.sh <target>`,
# where <target> is a package directory to pack or an already packed `.tgz`.
# The release workflow passes the tarball it is about to publish, so what this
# checks and what reaches the registry are the same bytes.
set -euo pipefail

cd "$(dirname "$0")/.."
REPO="$PWD"

TARGET="${1:-$REPO/npm}"

if [[ -d "$TARGET" ]]; then
  if [[ ! -f "$TARGET/dist/alchemy-viz.js" ]]; then
    echo "$TARGET/dist is empty - run \`pixi run npm-dist\` first" >&2
    exit 1
  fi
  # Absolute: the throwaway project is elsewhere, so a relative path would be
  # read against that instead.
  package="$(cd "$TARGET" && pwd)"
  version=$(node -p "require('$package/package.json').version")

  echo "==> packing alchemy-viz@$version"
  tarball="$package/$(cd "$package" && npm pack --silent)"
  packed_here=yes # ours to delete; `npm publish` may run here next
elif [[ -f "$TARGET" ]]; then
  tarball="$(cd "$(dirname "$TARGET")" && pwd)/$(basename "$TARGET")"
  version=$(basename "$tarball" .tgz)
  version="${version#alchemy-viz-}"
  echo "==> checking the packed alchemy-viz@$version"
  packed_here=no
else
  echo "no package directory or tarball at $TARGET" >&2
  exit 1
fi

echo "    $(basename "$tarball") ($(du -h "$tarball" | cut -f1))"

consumer="$(mktemp -d)"
trap 'rm -rf "$consumer"; [[ $packed_here == yes ]] && rm -f "$tarball" || true' EXIT

mkdir -p "$consumer/src"

cat >"$consumer/package.json" <<'JSON'
{ "name": "alchemy-viz-consumer", "private": true, "type": "module" }
JSON

# `types: []` is the point: no ambient type packages, so anything the published
# .d.ts need from @types/node fails here rather than in a user's editor.
cat >"$consumer/tsconfig.json" <<'JSON'
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "strict": true,
    "noEmit": true,
    "types": []
  },
  "include": ["src"]
}
JSON

# The README's example, plus the exports a caller reaches for next.
cat >"$consumer/src/app.ts" <<'TS'
import "alchemy-viz";
import { PAYLOAD_TYPES, VIEW_TAGS } from "alchemy-viz";
import type { AlchemyVizPayload, LigandNetworkViz, PayloadType } from "alchemy-viz";

export async function draw(url: string): Promise<void> {
  const payload = (await (await fetch(url)).json()) as AlchemyVizPayload;

  const view = document.createElement("alchemy-view");
  view.style.cssText = "width:100%;height:600px";
  document.body.append(view);
  view.payload = payload;
}

export const drawable: PayloadType[] = [...PAYLOAD_TYPES].filter((t) => VIEW_TAGS[t]);

export function nodeCount(network: LigandNetworkViz): number {
  return network.nodes.length;
}
TS

echo "==> installing it into a throwaway project"
(
  cd "$consumer"
  npm install "$tarball" --no-audit --no-fund --silent
  npm install "typescript@$(node -p "require('$REPO/package.json').devDependencies.typescript")" \
    --no-audit --no-fund --silent
)

echo "==> every exports entry resolves from outside the package"
(
  cd "$consumer"
  node --input-type=module -e '
    const entries = ["alchemy-viz", "alchemy-viz/schema.json", "alchemy-viz/package.json"];
    for (const entry of entries) {
      console.log("    ok:", entry, "->", import.meta.resolve(entry).split("/node_modules/")[1]);
    }
  '
)

echo "==> a consumer compiles against the published types"
(cd "$consumer" && npx tsc --noEmit)

echo
echo "alchemy-viz@$version installs, resolves and typechecks as a dependency"
