/** @type {import(''tailwindcss'').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        night: {
          base: "#080C1A",
          deep: "#060914",
          glow: "#0F162E",
        },
        dusk: {
          gold: "#F0B866",
          rose: "#E8A0A0",
          lavender: "#C0B8D8",
          moon: "#A8C8E0",
          silver: "#D0D8E8",
        },
        cream: "#F5F0EB",
      },
    },
  },
  plugins: [],
}
