/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif"
      },

      colors: {
        brands:{
          ochkok: "#34547A",
          oqroq: "#EEEFF1",
          kulrang: "#727272",
          toqkulrang: "#34547A"
        }
      },

      maxWidth: {
        540: "540px"
      }
    },
  },
  plugins: [],
}
