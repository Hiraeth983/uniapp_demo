import { defineConfig, loadEnv } from 'vite'

import path from 'node:path'

import uni from '@dcloudio/vite-plugin-uni'
import uniTailwind from '@uni-helper/vite-plugin-uni-tailwind'
import eslintPlugin from 'vite-plugin-eslint'

import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd())
  return {
    build: {
      sourcemap: env.VITE_ENV === 'production' ? false : true
    },
    css: {
      postcss: {
        plugins: [tailwindcss()]
      }
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, './src')
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    plugins: [
      uni(),
      uniTailwind(),
      // vite运行时自动检测eslint规范
      eslintPlugin({
        include: [
          'src/**/*.ts',
          'src/**/*.vue',
          'src/**/*.js',
          'src/*.ts',
          'src/*.vue',
          'src/*.js'
        ]
      })
    ]
  }
})
