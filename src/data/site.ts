// Links and copy shared across the pages. The docs live at /docs/, built from agents-chronicle; the Japanese docs
// at /docs/ja/, with the same page names.
const repo = "https://github.com/Chatixia-AI/agents-chronicle";

export type Lang = "en" | "ja";

export const links = {
  docs: "/docs/",
  install: "/docs/install/",
  github: repo,
  releases: `${repo}/releases/latest`,
  changelog: `${repo}/blob/main/CHANGELOG.md`,
  pypi: "https://pypi.org/project/agents-chronicle/",
  chatixia: "https://chatixia.net",
};

/** A docs page in the reader's language: docsPage("ja", "mcp/") is /docs/ja/mcp/. */
export const docsPage = (lang: Lang, page = "") => `${links.docs}${lang === "ja" ? "ja/" : ""}${page}`;

/** The home page in each language. */
export const homePath = (lang: Lang) => (lang === "ja" ? "/ja/" : "/");

export const installCommand = "uv tool install --python 3.13 agents-chronicle";
