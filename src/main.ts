import { createSSRApp } from 'vue'
import App from './App.vue'

import '@/styles/index.scss'

// 国际化
import i18n from '@/i18n/index'

import pinia from '@/stores/pinia'

export function createApp() {
  const app = createSSRApp(App)
  app.use(i18n).use(pinia)
  return {
    app
  }
}
