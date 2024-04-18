import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import FullReload from 'vite-plugin-full-reload';

import { viteConfigs } from './src/developer-ui/ui-config/UIConfigs';

/* vite ui configs, imported from study */
export default defineConfig({
  plugins: [
    vue({}),
    viteConfigs.isFullReloadEnabled ? FullReload('./src/**/*', { always: false }) : ''
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components/', import.meta.url)),
      '@scss': fileURLToPath(new URL('./src/scss/', import.meta.url)),
    }
  },
  server: {
    hmr: {
      overlay: viteConfigs.isErrorOverlayEnebled,
    },
    open: viteConfigs.isAutoOpenEnebled,
  }
})





