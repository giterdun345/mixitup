
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {


  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      mobile: {'max': '415px'},
      ...defaultTheme.screens,


    },
    extend: {
      fontFamily:{
        logo: ['Freckle Face']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}