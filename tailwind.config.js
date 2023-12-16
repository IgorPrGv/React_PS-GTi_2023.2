/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/Components/images/wind-energy-vector.jpg')",
        'hero2': "url('/src/Components/images/atendente.jpg')"
      },
      colors:{
        'primary': '#f0f3bd',
        'secondary':'#6fffe9',
        'third':'#88d498',
        'fourth':'#1a936f',
        'fifth':'#114b5f',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

