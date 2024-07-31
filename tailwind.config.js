/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#34495e',
        'bg-secondary': '#2c3e50',
        'bg-third-color': '#4fe98c'
      },
      width: {
        'max-width': '200px'
      }
    },
  },
  plugins: [],
}

