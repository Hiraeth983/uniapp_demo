import { createSSRApp } from "vue";
import App from "./App.vue";

import "./styles/index.scss";

// i18n 国际化
import { createI18n } from "vue-i18n";
import { i18nOptions } from "./i18n";

export function createApp() {
  const app = createSSRApp(App);
  app.use(createI18n(i18nOptions));
  return {
    app,
  };
}
