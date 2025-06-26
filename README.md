

# https://15957165880.github.io/home-page/


# 

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/home-page/', // 仓库域名用 /home-page/  自定义域名用 /
  plugins: [react()],
})



```