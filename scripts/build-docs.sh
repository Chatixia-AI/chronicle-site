#!/usr/bin/env bash
# Builds Interlatch's documentation into dist/docs/, then checks that firebase.json redirects each of its old URLs.
#
# The docs are written and reviewed in Chatixia-AI/interlatch, next to the code
# they describe. This builds them as they are, with a small config on top (docs-theme/mkdocs.site.yml) that serves
# them under /docs/, matches this site's look, points the docs logo back at the home page, and gives the Japanese
# pages (/docs/ja/) Japanese labels, a navigation of their own and a link to each page in the other language.
#
# INTERLATCH_SRC: a checkout of that repository (CI checks it out there); cloned from GitHub when missing.
# CHRONICLE_SRC is still accepted for existing local build scripts.
# Needs uv. The default `pnpm run build` runs this after Astro; for a manual build, run `pnpm run build:landing` first.
set -euo pipefail

here="$(cd "$(dirname "$0")/.." && pwd)"
src="${INTERLATCH_SRC:-${CHRONICLE_SRC:-$here/.cache/interlatch}}"
case "$src" in /*) ;; *) src="$PWD/$src" ;; esac
out="$here/dist/docs"

if [ ! -e "$src/.git" ]; then
  git clone --depth 1 https://github.com/Chatixia-AI/interlatch "$src"
elif [ -z "${INTERLATCH_SRC:-${CHRONICLE_SRC:-}}" ]; then
  # Refresh the managed cache; an explicitly selected checkout keeps the user's chosen revision.
  if [ "$(git -C "$src" rev-parse --is-shallow-repository)" = "true" ]; then
    git -C "$src" fetch --unshallow origin main
  else
    git -C "$src" fetch origin main
  fi
  git -C "$src" merge --ff-only origin/main
fi
[ -d "$here/dist" ] || { echo "dist/ is missing: run pnpm run build first" >&2; exit 1; }

cp "$here/docs-theme/mkdocs.site.yml" "$src/mkdocs.site.yml"
mkdir -p "$src/docs/assets"
cp "$here/docs-theme/interlatch-site.css" "$src/docs/assets/interlatch-site.css"
cp "$here/public/favicon-32.png" "$src/docs/assets/favicon.png"
rm -rf "$src/site-overrides" && cp -R "$here/docs-theme/overrides" "$src/site-overrides"

rm -rf "$out"
(cd "$src" && NO_MKDOCS_2_WARNING=1 uv run --locked --only-group docs mkdocs build --strict -f mkdocs.site.yml -d "$out")
node "$here/scripts/redirects.mjs" "$here/dist"
node "$here/scripts/check-links.mjs" "$here/dist"
