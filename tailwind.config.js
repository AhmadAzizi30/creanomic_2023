/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "0px",
    },
    extend: {
      backgroundImage:{
<<<<<<< HEAD
        'exhibition_bg':"url('/public/img/Coba Background.png')",
       
=======
        'Home_bg':"url('/public/img/Home.png')",
>>>>>>> c864fd071f4a617fd27d76e6cc7ac94e3aafb2bd
      },
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
