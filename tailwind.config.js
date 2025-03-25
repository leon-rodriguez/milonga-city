/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1546CF",
        secondary: "#F15A24",
        primary_light: "#3b6fff",
      },
      keyframes: {
        zoomOut: {
          "0%": { scale: "1.5" },
          "100%": { scale: "1" },
        },
        spin: {
          "0%": { transform: "0deg" },
          "100%": { transform: "360deg" },
        },
      },
    },
  },
  plugins: [],
};
