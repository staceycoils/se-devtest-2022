/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  "./src/components/*.{html,js}",
  "./public/index.html",
],
  theme: {
    extend: {
      colors: {
        'custom-black': '#181818',
        'custom-lilac': '#4452FE',
        'custom-grey': '#1E1E1E',
      },
      fontFamily: {
        'graphik': ['Graphik']
      },
    },
  },
  plugins: [],
}
