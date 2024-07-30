import { createI18n } from 'vue-i18n'
import type { I18nOptions } from 'vue-i18n'

import en_US from './locale/en_US'
import zh_CN from './locale/zh_CN'

const i18nOptions: I18nOptions = {
  locale: 'en-US', // 默认语言
  fallbackLocale: 'en-US', // 不存在默认则为英文
  legacy: false, // 组合式api
  globalInjection: true, // 全局注入
  messages: {
    'en-US': en_US,
    'zh-CN': zh_CN
  }
}

const i18n = createI18n(i18nOptions)
export default i18n
