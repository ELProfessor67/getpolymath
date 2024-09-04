/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#0F0F0F",
        "blue-1": "#5350EF",
        "blue-2": "#174CF3",
        "blue-light": "#E4EAFD",
        "foreground-white-1": "#C7C7C7",
        "foreground-white-2": "#AAAAAA",
        "foreground-white-3": "#DDDDDD",
        "secondary": "#F5F8FE"
      }
    },
  },
  plugins: [],
}