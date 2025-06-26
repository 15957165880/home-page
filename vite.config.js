// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 这里要是你的仓库名（加 /） 自定义域名用 /
  plugins: [react()],
})
