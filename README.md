# Interlatch website

The website for [Interlatch](https://github.com/Chatixia-AI/agents-chronicle), at **interlatch.com**. Interlatch was
called Chronicle; its old address, chronicle.chatixia.net, sends every page on to the same path here (see
[Publishing](#publishing)).

The story is **"Different agents. Knowledge that stays."** Interlatch records every session from every agent, and each
lesson keeps a link to the session, project and agent it came from, so the next agent can use it and check it. It
never claims to coordinate agents. The hero's Claude Code → Codex example and the Copilot → Codex terminal are
illustrative.

The site serves:

- `/`: the landing page, built here with [Astro](https://astro.build) and Tailwind, in the Chatixia blueprint style
  shared with [chatixia.net](https://chatixia.net).
- `/ja/`: the same landing page in Japanese. The words live in `src/i18n/`: change a sentence in `en.ts`, then its
  twin in `ja.ts` (TypeScript checks that both have the same keys). The header links the two; the docs have their own
  Japanese pages at `/docs/ja/`.
- `/docs/`: the product documentation. It is written and reviewed in `agents-chronicle`, next to the code, and built
  here as it is, with a small layer (`docs-theme/`) for the Interlatch name, URL, fonts and colours.
- The docs' old addresses (`/install/`, `/vscode/`, …) redirect to their place under `/docs/`, keeping `#anchors`.

## Work on it

```bash
pnpm install
pnpm run dev                 # http://localhost:4321, the landing page only
```

To see the whole site, docs and redirects included (needs [uv](https://docs.astral.sh/uv/)):

```bash
pnpm run build && scripts/build-docs.sh
python3 -m http.server 4321 -d dist
```

`scripts/build-docs.sh` clones `agents-chronicle` into `.cache/` the first time; set `CHRONICLE_SRC` to use another
checkout, such as one with unmerged docs changes.

The home page's resource cards link to GitHub Discussions (Q&A, Ideas and Announcements), the roadmap and guides.
The three latest dated releases come from `CHANGELOG.md` in `CHRONICLE_SRC` when set (CI uses its docs checkout),
or from GitHub during a local build. Unreleased work is omitted. If that read fails, the card keeps a link to the
full changelog. Release headlines stay in their source language; dates and the surrounding UI are localized.

## Layout

| Path | What |
| --- | --- |
| `src/pages/` | The pages: `index.astro` (English), `ja/index.astro` (Japanese), `404.astro` (both) |
| `src/components/` | The home page (`Home.astro`) and its sections; `visuals/` holds the drawings beside each entry |
| `public/media/cast/` | The Blueprint Cast loops (Chatixia Studio's characters) and a still of each, rendered in `agents-chronicle` under `packaging/icons3d`; `CastLoop.astro` plays one only while it's on screen, and never for reduced motion |
| `src/i18n/` | Every word on the home page: `en.ts` and `ja.ts`, the same shape in each language |
| `src/data/site.ts` | Links and the install command, shared by every page |
| `src/data/updates.ts` | Build-time changelog loading and release highlights for the home page |
| `src/styles/global.css` | Blueprint tokens (as on chatixia.net) and the logbook styling |
| `docs-theme/` | Layered over the docs' `mkdocs.yml`: served under `/docs/`, Plex fonts, navy header; `overrides/` gives the `/docs/ja/` pages Japanese labels, their own navigation and an English/日本語 link per page |
| `scripts/` | The docs build and the redirect pages |
| `old-domain/` | Not part of this site: the page chronicle.chatixia.net serves at every path, from a repository of its own (see Publishing) |

## Publishing

`.github/workflows/deploy.yml` builds on every push and pull request, and publishes to GitHub Pages from `main` once
the repository variable `PAGES_LIVE` is `true`. It also runs when `agents-chronicle` sends a `docs-updated` event,
and once a day. The upstream repository sends `docs-updated` with a fine-grained token that has Contents: write on
this repository.

Canonicals, language alternates, the docs' `site_url` (and so their sitemap) and the old-path redirects all use
`https://interlatch.com`. The domain itself is set outside the code:

1. **DNS for interlatch.com** (Namecheap › Advanced DNS): `A` records for `@` to `185.199.108.153`,
   `185.199.109.153`, `185.199.110.153` and `185.199.111.153`; `AAAA` records for `@` to `2606:50c0:8000::153`,
   `2606:50c0:8001::153`, `2606:50c0:8002::153` and `2606:50c0:8003::153`; `CNAME` `www` to
   `chatixia-ai.github.io.` (GitHub then sends www to the bare domain). Remove any parking or URL redirect records
   on `@` and `www`; leave the mail forwarding records alone. Safe to do any time before the switch.
2. **Verify the domain** for the organization (Chatixia-AI › Settings › Pages › Add a domain), with the
   `_github-pages-challenge-chatixia-ai` TXT record it asks for, so no other account can claim it.
3. **The custom domain**: here, Settings › Pages › Custom domain `interlatch.com`, then Enforce HTTPS once the
   certificate is issued (`gh api -X PUT repos/Chatixia-AI/chronicle-site/pages -f cname=interlatch.com`, then
   again with `-F https_enforced=true`). A `CNAME` file isn't needed: GitHub ignores it for workflow deployments.
4. **The old address.** GitHub serves a custom domain from one repository only, so once this repository takes
   interlatch.com, chronicle.chatixia.net needs a repository of its own: a public `Chatixia-AI/chronicle-redirect`
   with the two pages in `old-domain/` at its root, Pages from its `main` branch, custom domain
   `chronicle.chatixia.net`, Enforce HTTPS. Its DNS (a `CNAME` to `chatixia-ai.github.io` at dnsv.jp) stays as it
   is. Every old URL lands on the same path at interlatch.com, query and `#anchor` included, and the old docs paths
   then follow this site's own redirects into `/docs/`. The old address is down for the few minutes between steps
   3 and 4.

GitHub Pages can't send a real HTTP 301, so the old address redirects in the page. If search ranking needs a 301,
host chronicle.chatixia.net on Firebase Hosting instead, where chatixia.net already lives, with one redirect rule
from `/:path*` to `https://interlatch.com/:path`.
