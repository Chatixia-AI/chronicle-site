#!/usr/bin/env bash
# Builds Chronicle's documentation into dist/docs/ and leaves a redirect at each of its old URLs.
#
# The docs are written and reviewed in Chatixia-AI/agents-chronicle, next to the code they describe. This
# builds them as they are, with a small config on top (docs-theme/mkdocs.site.yml) that serves them under
# /docs/, matches this site's look, points the docs logo back at the home page, and gives the Japanese pages
# (/docs/ja/) Japanese labels, a navigation of their own and a link to each page in the other language.
#
# CHRONICLE_SRC: a checkout of agents-chronicle (CI checks it out there); cloned from GitHub when missing.
# Needs uv. Run after `pnpm run build`, which writes the rest of dist/.
set -euo pipefail

here="$(cd "$(dirname "$0")/.." && pwd)"
src="${CHRONICLE_SRC:-$here/.cache/agents-chronicle}"
case "$src" in /*) ;; *) src="$PWD/$src" ;; esac
out="$here/dist/docs"

if [ ! -d "$src/.git" ]; then
  git clone --depth 1 https://github.com/Chatixia-AI/agents-chronicle "$src"
fi
[ -d "$here/dist" ] || { echo "dist/ is missing: run pnpm run build first" >&2; exit 1; }

cp "$here/docs-theme/mkdocs.site.yml" "$src/mkdocs.site.yml"
mkdir -p "$src/docs/assets"
cp "$here/docs-theme/chronicle-site.css" "$src/docs/assets/chronicle-site.css"
cp "$here/public/favicon-32.png" "$src/docs/assets/favicon.png"
rm -rf "$src/site-overrides" && cp -R "$here/docs-theme/overrides" "$src/site-overrides"

rm -rf "$out"
(cd "$src" && NO_MKDOCS_2_WARNING=1 uv run --locked --only-group docs mkdocs build --strict -f mkdocs.site.yml -d "$out")
node "$here/scripts/redirects.mjs" "$here/dist"
