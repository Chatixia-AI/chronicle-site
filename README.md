# Interlatch website

The website for [Interlatch](https://github.com/Chatixia-AI/interlatch), at **interlatch.com**. Interlatch was
called Chronicle; its old address, chronicle.chatixia.net, sends every page on to the same path here (see
[Publishing](#publishing)).

The story is **"Different agents. Knowledge that stays."** Interlatch records the sessions of the agents you connect
(Claude Code, Codex, Copilot, Bob, Antigravity; Claude Desktop, Cursor, Windsurf and Gemini CLI only use its MCP
server), and each lesson keeps a link to the session, project and agent it came from, so the next agent can use it and check it. It
never claims to coordinate agents. The hero's Claude Code → Codex example and the Copilot → Codex terminal are
illustrative.

The site serves:

- `/`: the landing page, built here with [Astro](https://astro.build) and Tailwind, in the Chatixia blueprint style
  shared with [chatixia.net](https://chatixia.net).
- `/ja/`: the same landing page in Japanese. The words live in `src/i18n/`: change a sentence in `en.ts`, then its
  twin in `ja.ts` (TypeScript checks that both have the same keys). The header links the two; the docs have their own
  Japanese pages at `/docs/ja/`.
- `/docs/`: the product documentation. It is written and reviewed in
  [Chatixia-AI/interlatch](https://github.com/Chatixia-AI/interlatch) (called agents-chronicle until the rename; old
  URLs redirect), next to the code, and built
  here as it is, with a small layer (`docs-theme/`) for the Interlatch name, URL, fonts and colours.
- The docs' old addresses (`/install/`, `/vscode/`, …) redirect to their place under `/docs/` with a 301, keeping
  `#anchors`: one regex in `firebase.json` names every docs page, and `scripts/redirects.mjs` fails the docs build when
  a docs page is missing from it.
- `robots.txt` and `sitemap-index.xml`, which lists the landing pages and the docs' own `sitemap.xml`.

## Work on it

```bash
pnpm install
pnpm run dev                 # http://localhost:4321, the landing page only
```

The default build includes the landing pages and documentation (needs [uv](https://docs.astral.sh/uv/)):

```bash
pnpm run build
pnpm run preview                                        # the complete site at http://localhost:4321
python3 -m http.server 4321 -d dist                       # the pages only
firebase emulators:start --only hosting --project interlatch   # with firebase.json's redirects and headers
```

`scripts/build-docs.sh` clones the Interlatch repository into `.cache/agents-chronicle` the first time and refreshes
that managed cache on later builds. Set `CHRONICLE_SRC` to build a specific checkout without updating it, such as
one with unmerged docs changes. The complete build also checks that documentation links on both landing pages
have corresponding pages in the output.

`pnpm run dev` and `pnpm run build:landing` serve/build only the landing pages. Documentation links need the
complete build above; `pnpm run build:docs` can refresh documentation after a landing-page build.

The home page's resource cards link to GitHub Discussions (Q&A, Ideas and Announcements), the roadmap and guides.
The three latest dated releases come from `CHANGELOG.md` in `CHRONICLE_SRC` when set (CI uses its docs checkout),
or from GitHub during a local build. Unreleased work is omitted. If that read fails, the card keeps a link to the
full changelog. Release headlines stay in their source language; dates and the surrounding UI are localized.

## Layout

| Path | What |
| --- | --- |
| `src/pages/` | The pages: `index.astro` (English), `ja/index.astro` (Japanese), `404.astro` (both, not indexed) |
| `src/components/` | The home page (`Home.astro`) and its sections; `visuals/` holds the drawings beside each entry |
| `public/media/cast/` | The Blueprint Cast loops (Chatixia Studio's characters) and a still of each, rendered in the Interlatch repository under `packaging/icons3d`; `CastLoop.astro` plays one only while it's on screen, and never for reduced motion |
| `src/i18n/` | Every word on the home page: `en.ts` and `ja.ts`, the same shape in each language |
| `src/data/site.ts` | Links and the install commands, shared by every page |
| `src/data/updates.ts` | Build-time changelog loading and release highlights for the home page |
| `src/styles/global.css` | Blueprint tokens (as on chatixia.net) and the logbook styling |
| `docs-theme/` | Layered over the docs' `mkdocs.yml`: served under `/docs/`, Plex fonts, navy header; `overrides/` gives the `/docs/ja/` pages Japanese labels, their own navigation and an English/日本語 link per page |
| `scripts/` | The docs build and the check that `firebase.json` redirects every old docs address |
| `old-domain/` | Not part of this site: the Hosting site `chatixia-chronicle` in the Chatixia Firebase project (`chatixia-ai`), behind chronicle.chatixia.net, which sends every path to interlatch.com with a 301 (`old-domain/firebase.json`); its two pages are only a fallback. It never changes, so it's deployed by hand: `cd old-domain && firebase deploy --only hosting --project chatixia-ai` |

## Publishing

`.github/workflows/deploy.yml` builds on every push and pull request, and publishes from `main` to Firebase Hosting,
project `interlatch` (`.firebaserc`), Hosting site `interlatch`. It also runs when the Interlatch repository sends a `docs-updated` event, and once a day. The
upstream repository sends `docs-updated` with a fine-grained token that has Contents: write on this repository.
Publishing uses the repository secret `FIREBASE_SERVICE_ACCOUNT_INTERLATCH`, a service account key that
`firebase init hosting:github` creates and stores. A pull request's newer push cancels its older build; runs that
publish wait for each other.

`firebase.json` also sets the response headers: short caching for pages (an hour at the CDN), a year for Astro's and
MkDocs' fingerprinted files, a day for images and video, and `nosniff`, a referrer policy, no framing and a
permissions policy everywhere. The Content Security Policy is `Report-Only` for now: browsers log what it would
block in the console, and nothing is blocked. Make it `Content-Security-Policy` once a preview shows no reports.

Canonicals, language alternates, the docs' `site_url` (and so their sitemap) and the old-path redirects all use
`https://interlatch.com`. The domains are set outside the code, in the Firebase console (Hosting › the site ›
Add custom domain), which shows the DNS records each one needs:

- **interlatch.com** and **www.interlatch.com** (redirecting to interlatch.com) on the site `interlatch`; their DNS is
  at Namecheap (Advanced DNS). Leave the mail forwarding records alone.
- **chronicle.chatixia.net** on the site `chatixia-chronicle` in the Chatixia project (`chatixia-ai`), which answers every path with a 301 to the same
  path on interlatch.com (query included; browsers keep the `#anchor`), and the old docs paths then follow this
  site's own redirects into `/docs/`. Its DNS is at dnsv.jp.

To try a change on a temporary address first: `firebase hosting:channel:deploy preview --expires 2d` after a full
build (see Work on it). The docs' logo links to `/` rather than a full URL, so it stays on the preview.
