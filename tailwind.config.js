/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "maincolor":"#fab41b",
        "text-black":"#000",
        "text-white":"#fff",
        "gray":"#a9a9a9",
        "color-gray":"#9d8c61",
        "dark-green":"#134e4a",
      }
    },
    container:{
      center: true
    }
  },
  plugins: [],
}

