import { changelogMarkdown, releaseId } from "./changelog";
import { changelogPage, type Lang } from "./site";

export interface Update {
  version: string;
  date: string;
  title: string;
  /** The release's place on the changelog page, without the language prefix. */
  anchor: string;
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
    return [{ version, date, title, anchor: releaseId(version) }];
  }).slice(0, 3);
}

/** A release's link on the changelog page in the reader's language. */
export const updateHref = (lang: Lang, update: Update) => `${changelogPage(lang)}#${update.anchor}`;

// Both languages share the changelog's one build-time read; visitors make no API requests.
export const updates = changelogMarkdown.then((markdown) => (markdown ? parseUpdates(markdown) : []));
