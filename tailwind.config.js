/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#42b982",
      secondary: "#f1f0f0",
      accent: "#35495e",
      background: "#fefffe",
    },
    fontFamily: {
      lb: ["Libre Baskerville"],
    },
  },
  plugins: [],
};
