/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        teal:{
          custom: '#008080'
        }
      },
      fontFamily:{
        italiana: ['Italiana', 'sans-serif']
      }
    },
  },
  plugins: [],
}