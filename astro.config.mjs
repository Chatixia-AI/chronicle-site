// The landing page and its siblings. The docs come from Chatixia-AI/interlatch and are built into dist/docs/ by
// scripts/build-docs.sh, after this build.
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://interlatch.com",
  // sitemap-index.xml lists this site's pages and the docs' own sitemap (MkDocs writes it, with site_url).
  integrations: [sitemap({ customSitemaps: ["https://interlatch.com/docs/sitemap.xml"] })],
  vite: { plugins: [tailwindcss()] },
});
