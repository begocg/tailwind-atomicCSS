/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        text: '#000000',
      },
      fontFamily: {
        sans: ["Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      colors: {
        primary: "#1C941A",
        bsDropdownHeaderColor: "#1C941A",
      },
      screens: {
        sm: "420px",
      }
    },
  },
  plugins: [],
}

