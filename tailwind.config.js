/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff3656',
        secondary: '#ffca26',
        background: '#eceff4',
        softWhite: '#f5f7fa'
      },
      fontFamily: {
        ProductSans: ['ProductSans'],
        Gilroy: ['Gilroy']
      }
    }
  },
  plugins: []
}
