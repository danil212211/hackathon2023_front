import ru from "./locales/ru.json";
import ykt from "./locales/ykt.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  pageTransition: { name: "page", mode: "out-in" },
  css: ["~/assets/css/main.css", "vue-final-modal/style.css"],
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:3001",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "ru", name: "Русский" },
      { code: "ykt", name: "Саха" },
    ],
    defaultLocale: "ru",
    strategy: "no_prefix",
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: "ru",
      messages: {
        ru,
        ykt,
      },
    },
  },
});
