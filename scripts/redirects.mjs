// The docs used to be the whole site: /install/ is now /docs/install/. firebase.json sends every old address on with
// a 301 (browsers keep the #anchor), from one regex that names each docs page. This checks, after the docs build,
// that the regex covers every page the docs have, so a new docs page can't leave its old address at a 404 unnoticed.
// A page this site serves itself (/ja/) keeps its address, so the regex must not match it.
// Usage: node scripts/redirects.mjs dist
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const dist = process.argv[2] ?? "dist";
const docs = join(dist, "docs");
const config = JSON.parse(readFileSync(new URL("../firebase.json", import.meta.url), "utf8"));
const destination = "/docs/:page/";
const rule = config.hosting.redirects?.find((r) => r.destination === destination && r.regex);
if (!rule) {
  console.error(`redirects: firebase.json has no regex redirect to ${destination}`);
  process.exit(1);
}
// Firebase Hosting's regexes are RE2, which writes a named group (?P<name>…); JavaScript writes it (?<name>…).
const regex = new RegExp(rule.regex.replaceAll("(?P<", "(?<"));
const target = (path) => {
  const page = path.match(regex)?.groups?.page;
  return page === undefined ? null : destination.replace(":page", page);
};

function* pages(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* pages(path);
    else if (name === "index.html") yield dir;
  }
}

const problems = [];
const found = new Set();
let covered = 0;
for (const dir of pages(docs)) {
  const rel = relative(docs, dir).split(sep).join("/");
  if (!rel) continue; // the old home page is the new home page
  found.add(rel);
  const own = existsSync(join(dist, rel, "index.html"));
  for (const path of [`/${rel}/`, `/${rel}`]) {
    const to = target(path);
    if (own && to) problems.push(`${path} is a page of this site, but firebase.json redirects it to ${to}`);
    else if (!own && to !== `/docs/${rel}/`) problems.push(`${path} should redirect to /docs/${rel}/, but ${to ? `goes to ${to}` : "isn't matched"}`);
  }
  if (!own) covered++;
}

// The other way round, a warning only: a page named in the regex that the docs no longer have redirects to a 404.
const names = rule.regex.match(/\(\?:((?:[\w-]+\|)+[\w-]+)\)/)?.[1].split("|") ?? [];
const gone = names.filter((name) => !found.has(name));
if (gone.length) console.warn(`redirects: firebase.json still names ${gone.join(", ")}, which the docs no longer have`);

if (problems.length) {
  console.error(`redirects: the redirect in firebase.json doesn't match the docs:\n  ${problems.join("\n  ")}`);
  console.error("Its regex should name every docs page (English and ja/ share a name) and nothing this site serves itself.");
  process.exit(1);
}
console.log(`redirects: firebase.json sends the ${covered} old docs URLs into /docs/`);
