# chronicle-site

The website for [Chronicle](https://github.com/Chatixia-AI/agents-chronicle), at **chronicle.chatixia.net**:

- `/`: the landing page, built here with [Astro](https://astro.build) and Tailwind, in the Chatixia blueprint style
  shared with [chatixia.net](https://chatixia.net).
- `/ja/`: the same landing page in Japanese. The words live in `src/i18n/`: change a sentence in `en.ts`, then its
  twin in `ja.ts` (TypeScript checks that both have the same keys). The header links the two; the docs have their own
  Japanese pages at `/docs/ja/`.
- `/docs/`: Chronicle's documentation. It is written and reviewed in `agents-chronicle`, next to the code, and built
  here as it is, with a small layer (`docs-theme/`) for the URL, fonts and colours.
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

## Layout

| Path | What |
| --- | --- |
| `src/pages/` | The pages: `index.astro` (English), `ja/index.astro` (Japanese), `404.astro` (both) |
| `src/components/` | The home page (`Home.astro`) and its sections; `visuals/` holds the drawings beside each entry |
| `src/i18n/` | Every word on the home page: `en.ts` and `ja.ts`, the same shape in each language |
| `src/data/site.ts` | Links and the install command, shared by every page |
| `src/styles/global.css` | Blueprint tokens (as on chatixia.net) and Chronicle's own logbook touches |
| `docs-theme/` | Layered over the docs' `mkdocs.yml`: served under `/docs/`, Plex fonts, navy header; `overrides/` gives the `/docs/ja/` pages Japanese labels, their own navigation and an English/日本語 link per page |
| `scripts/` | The docs build and the redirect pages |

## Publishing

`.github/workflows/deploy.yml` builds on every push and pull request, and publishes to GitHub Pages from `main` once
the repository variable `PAGES_LIVE` is `true`. It also runs when `agents-chronicle` sends a `docs-updated` event,
and once a day.

Moving chronicle.chatixia.net here from `agents-chronicle` (a few minutes of downtime):

1. In `agents-chronicle`, Settings › Pages: remove the custom domain. GitHub serves a domain from one repository only.
2. Here, Settings › Pages: source **GitHub Actions**, custom domain `chronicle.chatixia.net`, enforce HTTPS. DNS
   already points at `chatixia-ai.github.io`, so nothing changes at the registrar.
3. Here, Settings › Variables: add `PAGES_LIVE` = `true`, then run the Deploy workflow.
4. In `agents-chronicle`, stop its docs workflow from deploying (it keeps building pull requests) and have it send
   `docs-updated` here. That needs a fine-grained token with Contents: write on this repository, stored there as a
   secret.
