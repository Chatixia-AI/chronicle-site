// Links and copy shared across the pages. The docs live at /docs/, built from agents-chronicle; the Japanese docs
// at /docs/ja/, with the same page names.
const repo = "https://github.com/Chatixia-AI/agents-chronicle";

export type Lang = "en" | "ja";

export const productName = "Interlatch";

export const links = {
  docs: "/docs/",
  install: "/docs/install/",
  github: repo,
  issues: `${repo}/issues`,
  contributing: `${repo}/blob/main/CONTRIBUTING.md`,
  discussions: `${repo}/discussions`,
  qa: `${repo}/discussions/categories/q-a`,
  ideas: `${repo}/discussions/categories/ideas`,
  announcements: `${repo}/discussions/categories/announcements`,
  roadmap: `${repo}/blob/main/ROADMAP.md`,
  roadmapJa: `${repo}/blob/main/ROADMAP.ja.md`,
  releases: `${repo}/releases/latest`,
  changelog: `${repo}/blob/main/CHANGELOG.md`,
  pypi: "https://pypi.org/project/interlatch/",
  chatixia: "https://chatixia.net",
};

/** A docs page in the reader's language: docsPage("ja", "mcp/") is /docs/ja/mcp/. */
export const docsPage = (lang: Lang, page = "") => `${links.docs}${lang === "ja" ? "ja/" : ""}${page}`;

/** The docs page for people coming from Chronicle: what changed, and that existing installs move by themselves. */
export const movingPage = (lang: Lang) => docsPage(lang, "moving-from-chronicle/");

/** The home page in each language. */
export const homePath = (lang: Lang) => (lang === "ja" ? "/ja/" : "/");

export const installCommand = "uv tool install --python 3.13 interlatch";
