import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import FullReload from "vite-plugin-full-reload"


/* vite ui configs, imported from study */
export default defineConfig({
  base: './',
  plugins: [vue({}), FullReload("./src/**/*", { always: false })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/", import.meta.url)),
      "@ts": fileURLToPath(new URL("./src/ts/", import.meta.url)),
      "@data": fileURLToPath(new URL("./src/data/", import.meta.url)),
      "@global": fileURLToPath(new URL("./src/global/", import.meta.url)),
      "@layout": fileURLToPath(new URL("./src/components/layout/", import.meta.url)),
      "@generator": fileURLToPath(new URL("./src/components/generator/", import.meta.url)),
      "@scss": fileURLToPath(new URL("./src/scss/", import.meta.url))
    }
  },
  server: {
    hmr: {
      overlay: false
    },
    open: false
  }
})
