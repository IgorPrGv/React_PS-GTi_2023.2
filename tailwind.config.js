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
        'primary': '#FBE4D8',
        'secondary':'#DFB6B2',
        'third':'#854F6C',
        'fourth':'#522B5B',
        'fifth':'#190019',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

