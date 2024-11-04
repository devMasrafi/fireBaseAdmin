/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      interFont: ['"Inter", sans-serif']
    },
    extend: {
      colors: {
        'colorBG': '#242424',
      },
    },
  },
  plugins: [],
}