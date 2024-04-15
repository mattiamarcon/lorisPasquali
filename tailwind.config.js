/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'homeImage': "url('homeImage.png')",
      },
      fontFamily:{
        'sans' : ['Noto Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

