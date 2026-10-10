// The docs used to be the whole site: /install/ is now /docs/install/. For every docs page, leave a small page at
// its old address that sends the browser on, keeping any #anchor. A page this site serves itself wins.
// Usage: node scripts/redirects.mjs dist
import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const dist = process.argv[2] ?? "dist";
const docs = join(dist, "docs");

function* pages(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* pages(path);
    else if (name === "index.html") yield dir;
  }
}

const stub = (to) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved to ${to}</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="https://interlatch.com${to}">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)} + location.search + location.hash)</script>
</head>
<body><p>This page moved to <a href="${to}">${to}</a>.</p></body>
</html>
`;

let made = 0;
let kept = 0;
for (const dir of pages(docs)) {
  const rel = relative(docs, dir).split(sep).join("/");
  if (!rel) continue; // the old home page is the new home page
  const old = join(dist, rel, "index.html");
  if (existsSync(old)) {
    kept++;
    continue;
  }
  mkdirSync(join(dist, rel), { recursive: true });
  writeFileSync(old, stub(`/docs/${rel}/`));
  made++;
}
console.log(`redirects: ${made} old docs URLs now point into /docs/${kept ? `; ${kept} left to this site's own pages` : ""}`);
