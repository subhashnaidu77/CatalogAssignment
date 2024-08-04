
module.exports = {

  mode: "jit",

  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],

  darkMode: "class",

  theme: {

    screens: { sm: { max: "550px" } },

    extend: {

      colors: {

        blue_gray: { 50: "#eff1f3", 900: "#1a243a" },

        gray: { 200: "#e6e8eb", 400: "#bdbebf", 600: "#6f7177" },

        green: { 400: "#67bf6b" },

        indigo: { a400: "#4b40ee" },

        white: { a700: "#ffffff" },


      },

      boxShadow: {},

      fontFamily: { circularstd: "Circular Std" },
    },
  },

  plugins: [require("@tailwindcss/forms")],

};
