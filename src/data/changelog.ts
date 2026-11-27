// The changelog page: every dated release in Interlatch's CHANGELOG.md, read once at build time. Each top-level bullet
// is one entry; a bullet that opens with **A headline:** gets that headline as its title.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { links } from "./site";

export interface Entry {
  /** The bold headline without its colon, as plain text; null for a bullet without one (older releases). */
  title: string | null;
  /** The same headline rendered from Markdown, so `code` in it stays code. */
  titleHtml: string | null;
  /** Anchor for the entry, unique on the page. */
  id: string;
  /** The text after the headline, rendered from Markdown to HTML (inline only: bold, code, links). */
  html: string;
  /** Nested bullets, each rendered the same way. */
  items: string[];
}

export interface Release {
  version: string;
  date: string;
  id: string;
  entries: Entry[];
}

const repoBlob = `${links.github}/blob/main/`;

/** The release's anchor on this page: 0.29.13 → v0-29-13. */
export const releaseId = (version: string) => `v${version.replace(/[^\w-]+/g, "-")}`;

const slug = (text: string) =>
  text.toLowerCase().normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 80);

const escape = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** A changelog link points into the Interlatch repository: docs pages go to /docs/ here, anything else to GitHub. */
export function linkTarget(href: string): string {
  if (/^[a-z]+:/i.test(href) || href.startsWith("#")) return href;
  const [path, hash] = href.split("#");
  const docs = path.match(/^docs\/(.+?)\.md$/);
  if (docs) {
    const page = docs[1] === "index" || docs[1] === "README" ? "" : docs[1].replace(/\/(index|README)$/, "") + "/";
    return `${links.docs}${page}${hash ? `#${hash}` : ""}`;
  }
  return `${repoBlob}${path}${hash ? `#${hash}` : ""}`;
}

/** Inline Markdown as the changelog uses it: `code`, **bold**, *italic* and [links](…). Everything else is text. */
export function inline(markdown: string): string {
  const codes: string[] = [];
  let text = markdown.replace(/`([^`]+)`/g, (_, code) => `\u0000${codes.push(code) - 1}\u0000`);
  text = escape(text)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => `<a href="${escape(linkTarget(href.replace(/&amp;/g, "&")))}">${label}</a>`)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^\w*])\*([^*\s][^*]*?)\*(?![\w*])/g, "$1<em>$2</em>");
  return text.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${escape(codes[Number(i)])}</code>`);
}

const plain = (markdown: string) =>
  markdown.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*`]/g, "").replace(/\s+/g, " ").trim();

/** One top-level bullet with its continuation lines and nested bullets, already joined per item. */
function entry(lines: string[], taken: Set<string>): Entry {
  const [head, ...nested] = lines;
  const match = head.match(/^\*\*(.+?):?\*\*:?\s*(.*)$/s);
  const title = match ? plain(match[1]).replace(/:$/, "") : null;
  // The text after "**Headline:**" continues a sentence; on its own it starts one.
  const body = match ? match[2].replace(/^[a-z]/, (c) => c.toUpperCase()) : head;
  let id = slug(title ?? plain(body).split(/[.:]\s/)[0]) || "entry";
  for (let n = 2; taken.has(id); n++) id = `${id.replace(/-\d+$/, "")}-${n}`;
  taken.add(id);
  const titleHtml = match ? inline(match[1].replace(/:$/, "")) : null;
  return { title, titleHtml, id, html: inline(body), items: nested.map(inline) };
}

/** Only dated, released sections: Unreleased and the preamble are skipped. */
export function parseChangelog(markdown: string): Release[] {
  const taken = new Set<string>();
  return markdown.split(/^## /m).flatMap((section) => {
    const release = section.match(/^(\d+\.\d+\.\d+[^\s]*) \((\d{4}-\d{2}-\d{2})\)\r?\n/);
    if (!release) return [];
    const [, version, date] = release;
    // Group lines into top-level bullets; inside each, a "  - " line starts a nested bullet.
    const bullets: string[][] = [];
    for (const line of section.split(/\r?\n/).slice(1)) {
      if (/^- /.test(line)) bullets.push([line.slice(2)]);
      else if (/^\s+- /.test(line) && bullets.length) bullets.at(-1)!.push(line.replace(/^\s+- /, ""));
      else if (/^\s+\S/.test(line) && bullets.length) {
        const item = bullets.at(-1)!;
        item[item.length - 1] += ` ${line.trim()}`;
      }
    }
    if (!bullets.length) return [];
    return [{ version, date, id: releaseId(version), entries: bullets.map((b) => entry(b, taken)) }];
  });
}

async function loadChangelog(): Promise<string | null> {
  try {
    // CI uses the same checkout as the docs. Local builds fetch the published changelog.
    const source = process.env.INTERLATCH_SRC || process.env.CHRONICLE_SRC;
    if (source) return await readFile(join(source, "CHANGELOG.md"), "utf8");
    const response = await fetch("https://raw.githubusercontent.com/Chatixia-AI/interlatch/main/CHANGELOG.md", {
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`Changelog returned HTTP ${response.status}`);
    return await response.text();
  } catch (error) {
    console.warn("Changelog unavailable; pages show a link to it instead.", error);
    return null;
  }
}

// One build-time read for the home page card, the changelog pages and the feed; visitors make no API requests.
export const changelogMarkdown = loadChangelog();
export const releases = changelogMarkdown.then((markdown) => (markdown ? parseChangelog(markdown) : []));
