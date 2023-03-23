/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      lg: "900px",
    },
    borderRadius: {
      sm: "8px",
      md: "16px",
      lg: "48px",
    },
    fontSize: {

    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      gray: {
        DEFAULT: "#EFF0F6",
      },
      primary: {
        DEFAULT: "#009688",
        dark: "#34776B",
        light: "#BBDEDB",
      },
      secondary: {
        DEFAULT: "#754FF6",
        dark: "#472E9A",
      },
      error: {
        DEFAULT : "#CA024F",
        bg: "#FFABE8",

      },
      success: {
        DEFAULT: "#008A00",
        bg: "#CBFFAE",
      },
      warning: {


      },
      grey: {

        "off-white": "#FCFCFC",
        "bg": "#F7F7FC",
        "input": "#EFF0F6",
        "line":"#D9DBE9",
        "placehold": "#A0A3BD",
        "label": "#6E7191",
        "body": "#4E4B66",
        "ash": "#262338",
        "off-black": "#14142B",
      },
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "2px",
      1: "4px",
      1.5: "6px",
      2: "8px",
      2.5: "10px",
      3: "12px",
      3.5: "14px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      14: "56px",
      16: "64px",
      18: "72px",
      20: "80px",
      24: "96px",
      28: "112px",
      32: "128px",
      36: "144px",
      40: "160px",
      44: "176px",
      48: "192px",
      52: "208px",
      56: "224px",
      60: "240px",
      64: "256px",
      72: "288px",
      80: "320px",
      96: "384px",
      130: "520px",
      145: "580px",
      185: "740px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require("@tailwindcss/typography"),
    require('@tailwindcss/line-clamp'),
  ],
};
