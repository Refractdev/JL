import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://xn--jlextenses-9bb.com",
  output: "static",
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
      filter: (page) => !page.includes("/404"),
    }),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: "esbuild",
    },
  },
});