import { pwa } from "./config/pwa";

export default defineNuxtConfig({
  modules: ["nuxt-icon", "@vite-pwa/nuxt"],
  pwa,
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
