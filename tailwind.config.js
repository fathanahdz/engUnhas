/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
      colors: {
         "grey" : "#C1C1C1",
         "blue" : "#01013D",
         "yellow" : "#FFC53A",
         "white" : "#FFFFFF",
         "black" : "#000000",
         "blue2" : "#F5FAFF",
       },
       
     },
  },
  variants: {
     extend: {},
  },
  plugins: [
   require('tailwind-scrollbar-hide'),
],
 }
