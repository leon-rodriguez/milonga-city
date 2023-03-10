/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        zoomOut: {
          '0%': { scale: '1.5' },
          '100%': { scale: '1' },
        },
      },
    },
  },
  plugins: [],
};
