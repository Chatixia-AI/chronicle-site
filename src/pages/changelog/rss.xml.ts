// The changelog as an RSS feed: one item per change, newest release first, linking to its place on the page.
import type { APIRoute } from "astro";
import { releases } from "../../data/changelog";
import { changelogPage, productName } from "../../data/site";

const escape = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET: APIRoute = async ({ site }) => {
  const page = new URL(changelogPage("en"), site);
  const items = (await releases).flatMap((release) =>
    release.entries.map((entry) => {
      const link = `${page}#${entry.id}`;
      const title = `${release.version}: ${entry.title ?? entry.html.replace(/<[^>]+>/g, "").split(/[.:] /)[0]}`;
      const body = entry.html + (entry.items.length ? `<ul>${entry.items.map((i) => `<li>${i}</li>`).join("")}</ul>` : "");
      // Links in the entries are site-relative (/docs/…); a feed reader needs them absolute.
      const absolute = body.replace(/href="\//g, `href="${site?.origin ?? ""}/`);
      return `    <item>
      <title>${escape(title)}</title>
      <link>${escape(link)}</link>
      <guid isPermaLink="true">${escape(link)}</guid>
      <pubDate>${new Date(`${release.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escape(absolute)}</description>
    </item>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${productName} changelog</title>
    <link>${page}</link>
    <atom:link href="${new URL("/changelog/rss.xml", site)}" rel="self" type="application/rss+xml" />
    <description>What's new in ${productName}, release by release.</description>
    <language>en</language>
${items.join("\n")}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
