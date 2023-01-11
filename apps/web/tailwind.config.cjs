/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          dark: "#131519",
          medium: "#212327",
          light: "#D1D3D7",
          border: "#292B2C",
        },
        accent: {
          light: "#E1C564",
        },
        info: {
          dark: "#1A1F35",
          light: "#5ABDDE",
        },
        warning: {
          dark: "#261F2A",
          light: "#C4852A",
        },
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
