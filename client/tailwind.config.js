/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'primary': "#ef233c",
          'secondary': "#d8f3dc",
          'light': "#FFFFFF",
      },
    },
  },
  plugins: [],
}