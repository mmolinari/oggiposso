const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // false, 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.trueGray,
      yellow: colors.amber,
      orange: colors.orange,
      red: colors.red,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
