// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        shop: resolve(__dirname, "src/shop.html"),
        findos: resolve(__dirname, "src/findos.html"),
        produkt: resolve(__dirname, "src/produkt.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
