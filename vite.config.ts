import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // server: {
  //   cors: true,
  //   proxy: {
  //     '/iqdb': {
  //       target: 'http://iqdb.org/',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/iqdb/, '')
  //     },
  //     '/trace': {
  //       target: 'https://api.trace.moe/',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/trace/, ''),
  //     },
  //   }
  // }
})