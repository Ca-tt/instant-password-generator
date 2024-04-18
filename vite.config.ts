import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import FullReload from "vite-plugin-full-reload"

import { viteConfigs } from "./src/developer-ui/ui-config/UIConfigs"

const fullReloadPlugin = viteConfigs.isFullReloadEnabled
  ? FullReload("./src/**/*", { always: false })
  : undefined

/* vite ui configs, imported from study */
export default defineConfig({
  base: './',
  plugins: [vue({}), fullReloadPlugin],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components/", import.meta.url)),
      "@scss": fileURLToPath(new URL("./src/scss/", import.meta.url))
    }
  },
  server: {
    hmr: {
      overlay: viteConfigs.isErrorOverlayEnebled
    },
    open: viteConfigs.isAutoOpenEnebled
  }
})
