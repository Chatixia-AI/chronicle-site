import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { links } from "./site";

export interface Update {
  version: string;
  date: string;
  title: string;
  href: string;
}

/** Only dated, released sections belong on the home page; skip Unreleased. */
export function parseUpdates(markdown: string): Update[] {
  return markdown.split(/^## /m).flatMap((section) => {
    const release = section.match(/^(\d+\.\d+\.\d+[^\s]*) \((\d{4}-\d{2}-\d{2})\)\r?\n/);
    if (!release) return [];
    const [, version, date] = release;
    const headline = section.match(/^- \*\*(.+?)\*\*/ms)?.[1]
      ?? section.match(/^- (.+)/m)?.[1]?.split(/:\s|\.\s/)[0]
      ?? `Interlatch ${version}`;
    const title = headline.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*`]/g, "").replace(/\s+/g, " ").replace(/:$/, "").trim();
    const anchor = `${version} (${date})`.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    return [{ version, date, title, href: `${links.changelog}#${anchor}` }];
  }).slice(0, 3);
}

async function loadUpdates(): Promise<Update[]> {
  try {
    // CI uses the same checkout as the docs. Local builds fetch the published changelog.
    const source = process.env.CHRONICLE_SRC;
    if (source) return parseUpdates(await readFile(join(source, "CHANGELOG.md"), "utf8"));
    const response = await fetch("https://raw.githubusercontent.com/Chatixia-AI/agents-chronicle/main/CHANGELOG.md", {
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`Changelog returned HTTP ${response.status}`);
    return parseUpdates(await response.text());
  } catch (error) {
    console.warn("Home page changelog unavailable; showing the changelog link instead.", error);
    return [];
  }
}

// Both languages share one build-time read; visitors make no API requests.
export const updates = loadUpdates();
