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
        // shop: resolve(__dirname, "shop.html"),
        //  findos: resolve(__dirname, "findos.html"),
        // produkt: resolve(__dirname, "produkt.html"),
        // sitemap: resolve(__dirname, "sitemap.html"),
      },
    },
  },
});
