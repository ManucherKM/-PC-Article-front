/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      "lg": { max: "992px" },
      "md": { max: "768px" },
      "sm": { max: "480px" }
    },
    container: {
      padding: "20px",
      center: true
    },
    extend: {
      colors: {
        darkgray: "#282c34",
        lightblue: "#61dafb",
        purple: "#764abc",
        lightgreen: "#00ac69"
      }
    },
  },
  plugins: [],
}