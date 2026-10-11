// The landing page and its siblings. The docs come from agents-chronicle and are built into dist/docs/ by
// scripts/build-docs.sh, after this build.
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://interlatch.com",
  vite: { plugins: [tailwindcss()] },
});
