import { defineConfig, loadEnv } from 'vite'

import uni from '@dcloudio/vite-plugin-uni'
import uniTailwind from '@uni-helper/vite-plugin-uni-tailwind'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig(mode => {
  const env = loadEnv(mode.mode, process.cwd())
  return {
    build: {
      sourcemap: env.VITE_ENV === 'production' ? false : true,
    },
    plugins: [uni(), uniTailwind()],
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
    resolve: {
      alias: {
        "@": "/src",
      },
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    }
  };
})
