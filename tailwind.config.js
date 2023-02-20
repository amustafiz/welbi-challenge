/** @type {import('tailwindcss').Config} */

const { colors, fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        metropolis: ["Metropolis Light", "serif"],
        metropolisBold: ["Metropolis Bold", "serif"],
        montserrat: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
