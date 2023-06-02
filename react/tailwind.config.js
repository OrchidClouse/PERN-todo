/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // corePlugins: {
  //   preflight: false,
  // },

  theme: {

    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': '54rem 7rem',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 1rem',
    },
    height: {
      'customVh': '90vh',
    },
    extend: {},
  },
  plugins: [],
}