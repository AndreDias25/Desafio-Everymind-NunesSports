/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'standard-yellow': '#DAEC48',
        'yellow-info': '#E4C312',
        'green-success': '#15A59C',
        'red-danger': '#E51314',
        'standard-blue': '#1499E4',
        'gray-image': '#F1F1F1',
        'standard-white':'#FFFDFE',
        'standard-black':'#17181D'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

