// Links and copy shared across the pages. The docs live at /docs/, built from the Interlatch repository; the Japanese
// docs at /docs/ja/, with the same page names.
import setupCommandsJson from "./setup-commands.json";
const repo = "https://github.com/Chatixia-AI/interlatch";

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
  uv: "https://docs.astral.sh/uv/getting-started/installation/",
};

/** A docs page in the reader's language: docsPage("ja", "mcp/") is /docs/ja/mcp/. */
export const docsPage = (lang: Lang, page = "") => `${links.docs}${lang === "ja" ? "ja/" : ""}${page}`;

/** The home page in each language. */
export const homePath = (lang: Lang) => (lang === "ja" ? "/ja/" : "/");

export const installCommand = "uv tool install --python 3.13 interlatch";

/** Install, then set up: find the agents, import their sessions, start the dashboard. One line to paste, for a macOS
 * or Linux shell (posix) and for Windows PowerShell 5.1 or 7 (windows). Each runs interlatch from uv's tool folder, so
 * it works before that folder is on PATH (uv from Homebrew doesn't add it). They live in a JSON file so the Setup
 * commands workflow can run exactly these lines on each platform. */
export const setupCommands: { posix: string; windows: string } = setupCommandsJson;
