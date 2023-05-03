/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'md': {'min': '640px', 'max': '767px'},
      'lg': {'min': '768px', 'max': '1023px'},
      'xl': {'min': '1024px', 'max': '1279px'},
      '2xl': {'min': '1280px'},
    },
    extend: {
      boxShadow: {
        'green': '0 0 15px 5px #1b8915'
      },
      backgroundImage:{
        'first-image':"url('./assets/poke6.jpg')",
        'grass':"url(./assets/background_grass.jpg)"
      }
    },
  },
  plugins: [],
}