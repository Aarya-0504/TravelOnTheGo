/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'primary': "#4f000b",
          'secondary': "#d8f3dc",
          'light': "#FFFFFF",
      },
    },
  },
  plugins: [],
}