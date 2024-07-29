import en_US from "./locale/en_US";
import zh_CN from "./locale/zh_CN";

import type { I18nOptions } from "vue-i18n";

export const i18nOptions: I18nOptions = {
  legacy: false,
  locale: "zh_CN",
  fallbackLocale: "zh_CN",
  messages: {
    en_US,
    zh_CN
  }
};