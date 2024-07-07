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
        },
        brown:{
          custom:'#AD8C5C'
        },
        yellow:{
          custom:'#E5DAB1'
        }
      },
      fontFamily: {
        italiana: ['Italiana', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'], 
      },
    },
    

  },
  plugins: [],
}