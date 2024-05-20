/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        stylish: "Stylish",
        raleway: "Raleway",
        pacifico: "Pacifico",
        ebGaramond: "EB Garamond",
        lato: "Lato",
        inter: "Inter",
      },

      fontSize: {
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        20: "1.25rem",
        24: "1.5rem",
        35: "2.1875rem",
        50: "3.125rem",
        64: "4rem",
      },

      colors: {
        primaryLunarGreen: "#354733",
        primaryAvacado: "#8A9B6E",
        PrimaryAccent: "#DDDEA0",
        darkIBBNB: "#1E1E24",
        darkGray: "#AFB2AA",
        secondaryTeak: "#B99274",
        secondarySecondary: "#808276",
        white: "#FCFCFC",
        black: "#000000",
        athenaGrey: "#F8F9FB",
        wisper: "#F0F1EE", //background
        bgFooter: "#354733",
        cardAbout: "#D6EBDE",
        bgAbout: "#567361",
        greenHover: "#31C26D",
        greenError: "#DCF0BB",
      },
      screens: {
        xl: "1535px",
      },

      animation: {
        pop: "pop 0.6s ease-out",
      },

      pop: {
        "0%": {
          transform: "scale(1)",
        },
        "50%": {
          transform: "scale(1.1)",
        },
        "100%": {
          transform: "scale(1)",
        },
      },

      backgroundImage: {
        "error-page": "url('/src/assets/error/Rectangle 3.png')",
      },

      width: {
        191: "11.9375rem",
      },

      height: {
        52: "3.25rem",
        62: "3.875rem",
      },
    },
  },
  plugins: [],
};
