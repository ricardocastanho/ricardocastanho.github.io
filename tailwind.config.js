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
    keyframes: {
      wave: {
        "0%": { transform: "rotate(0.0deg)" },
        "15%": { transform: "rotate(14.0deg)" },
        "30%": { transform: "rotate(-8.0deg)" },
        "40%": { transform: "rotate(14.0deg)" },
        "50%": { transform: "rotate(-4.0deg)" },
        "60%": { transform: "rotate(10.0deg)" },
        "70%": { transform: "rotate(0.0deg)" },
        "100%": { transform: "rotate(0.0deg)" },
      },
    },
    animation: {
      wave: "wave 1.5s infinite",
    },
  },
  plugins: [],
};
