import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    vueDevTools(),
  ],
  // 因为要托管到github pages，所以这里设置了 base 路径
  base: '/Boke/',
  build: {
    // 输出路径，相对于 vite.config.ts 所在目录
    outDir: '../docs',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
