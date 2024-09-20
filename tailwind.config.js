/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "rajdhani":["Rajdhani", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "headingcolor":"#DCCAFF",
      },
      backgroundSize:{
        "landscape": "100% auto",
        "portrait":"auto 100lvh"
      }
      // backgroundImage: {
      //   'hero-pattern': "url('assets/herobg.png')",
      // }
    },
  },
  plugins: [],
};
