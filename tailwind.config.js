/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stylish: "Stylish",
        raleway: "Raleway",
        pacifico: "Pacifico",
        ebGaramond: "EB Garamond",
        lato: "Lato",
        inter: "Inter", //Formulário
      },

      fontSize: {
        16: "1rem", // Tamanho 16
        24: "1.5rem", // Tamanho 24
        64: "4rem", // Tamanho 64
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
      },
      screens: {
        "xl": "1535px",
      },
    },
  },
  plugins: [],
}