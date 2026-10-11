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
| `old-domain/` | Not part of this site: the Firebase site behind chronicle.chatixia.net, which sends every path to interlatch.com with a 301 (`firebase.json`); its two pages are only a fallback |

## Publishing

`.github/workflows/deploy.yml` builds on every push and pull request, and publishes from `main` to Firebase Hosting,
project `interlatch` (`.firebaserc`): the site to the Hosting site `interlatch`, and `old-domain/` to the Hosting site
`chronicle-chatixia-net`. It also runs when `agents-chronicle` sends a `docs-updated` event, and once a day. The
upstream repository sends `docs-updated` with a fine-grained token that has Contents: write on this repository.
Publishing uses the repository secret `FIREBASE_SERVICE_ACCOUNT_INTERLATCH`, a service account key that
`firebase init hosting:github` creates and stores.

Canonicals, language alternates, the docs' `site_url` (and so their sitemap) and the old-path redirects all use
`https://interlatch.com`. The domains are set outside the code, in the Firebase console (Hosting › the site ›
Add custom domain), which shows the DNS records each one needs:

- **interlatch.com** and **www.interlatch.com** (redirecting to interlatch.com) on the site `interlatch`; their DNS is
  at Namecheap (Advanced DNS). Leave the mail forwarding records alone.
- **chronicle.chatixia.net** on the site `chronicle-chatixia-net`, which answers every path with a 301 to the same
  path on interlatch.com (query included; browsers keep the `#anchor`), and the old docs paths then follow this
  site's own redirects into `/docs/`. Its DNS is at dnsv.jp.

To try a change on a temporary address first: `firebase hosting:channel:deploy preview --only site` after a full
build (see Work on it).
