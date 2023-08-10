import { defineConfig } from "vite";
import postcss from 'postcss-preset-env'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.js',
      name: 'Counter',
      fileName: 'counter'
    }
  },
  css: {
    postcss: {
      plugins: [
        // https://juejin.cn/post/7178454300572516409
        postcss()
      ]
    }
  }
})