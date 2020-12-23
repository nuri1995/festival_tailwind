const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ff009d",
        "primary-2": "#ff80ce",
        secondary: "#bda1f6",
        tertiary: "#a47ef3",
      },
      width: {
        "98c": "98%",
        "95c": "95%",
        "90c": "90%",
        "85c": "85%",
        "70c": "70%",
        "60c": "60%",
      },
      listStyleType: {
        circle: "circle",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
