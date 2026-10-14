// A full build must include the documentation pages linked by both landing pages.
// Usage: node scripts/check-links.mjs dist
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dist = process.argv[2] ?? "dist";
const pages = ["index.html", "ja/index.html"];
const targets = new Set();
for (const page of pages) {
  const html = readFileSync(join(dist, page), "utf8");
  for (const match of html.matchAll(/\bhref=(['"])(\/docs\/[^'"]*)\1/g)) {
    targets.add(new URL(match[2], "https://interlatch.com").pathname);
  }
}

const missing = [...targets].filter((url) => {
  const path = join(dist, decodeURIComponent(url).slice(1));
  return !existsSync(url.endsWith("/") ? join(path, "index.html") : path);
});
if (missing.length) {
  console.error(`links: missing documentation pages:\n  ${missing.join("\n  ")}`);
  process.exit(1);
}
console.log(`links: all ${targets.size} documentation destinations from the landing pages exist`);
