/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      baggrundsfarve: "#F9D7DE",
      tekstfarve: "#471C24",
      hover: "#594ABF",
      checkbox: "#A2D2FF",
      hover2: "#FFB6E1",
      knapfarve: "#FFFAF1",
      tekstfelt: "#FEF1F1",
      tekstfelt_skrift: "#AAAAAB",
      afvis_cookies: "#F23333",
      tillad_cookies: "#4FC55B",
      headerhover: "#382d80",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
