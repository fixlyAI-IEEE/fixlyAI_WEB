/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A9D8F",
        accent: "#F4A261",
        bg: "#FAFAF9",
        surface: "#E8E8E8",
        text: "#1D3557",
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}

