/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "0px",
    },
    extend: {
      colors: {
        purple: "#6C3077",
        pink: "#A73284",
        orange: "#EC5A2C",
      },
      fontFamily: {
        dsd: ["DM Serif Display"],
        manrope: ["manrope"],
      },
      screens: {
        "2xl": "1350px",
      },
    },
  },
  plugins: [],
};
