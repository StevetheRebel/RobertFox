/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-serif": ['"Noto Serif"', "serif"],
        "saira-condensed": ['"Saira condensed"', "sans-serif"],
      },
      backgroundImage: {
        robertimg: "url('./src/assets/Robert Head Photo.webp')",
      },
      backgroundColor: {
        darkPurple: "#E2398A",
        midPurple: "#FE4C80",
        lightPurple: "#FE7FAC",
        darkOrangeYellow: "#FF745B",
        midOrangeYellow: "#FF9E51",
        lightOrangeYellow: "#FFBA55",
      },
      colors: {
        darkPurple: "#E2398A",
        midPurple: "#FE4C80",
        lightPurple: "#FE7FAC",
        darkOrangeYellow: "#FF745B",
        midOrangeYellow: "#FF9E51",
        lightOrangeYellow: "#FFBA55",
      }
    },
  },
  plugins: [],
};
