const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      tide: ["var(--font-tide)", ...fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      primary: "#393e46",
      blue: "#14259b",
      gray: {
        100: "#f6f6f6",
        200: "#e8e8e8",
        300: "#c7c7c7",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
