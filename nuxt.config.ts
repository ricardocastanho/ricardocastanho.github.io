import { pwa } from "./config/pwa";
import { appName, appDescription } from "./constants";

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
  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/nuxt.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
      meta: [
        { name: "name", content: appName },
        { name: "description", content: appDescription },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
    },
  },
});
