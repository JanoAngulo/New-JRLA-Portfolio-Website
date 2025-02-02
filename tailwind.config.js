/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#27272A',
        'dark-card': '#18181B',
        'dark-primary': '#FFCA26',

        light: '#ECEFF4',
        'light-card': '#F5F7FA',
        'light-primary': '#FF3656'
      },
      fontFamily: {
        ProductSans: ['ProductSans'],
        Gilroy: ['Gilroy']
      }
    }
  },
  plugins: []
}
