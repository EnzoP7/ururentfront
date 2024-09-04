/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1270px",
    },
    extend: {
      colors: {
        azul: "#34338B",
        azulfuerte: "#14146c ",
        naranja: "#F8B449",
        amarillo: "#edd025",
        primary: "#101828",
        secondary: "#667085",
        accent: {
          // DEFAULT: "#ed1d24",
          DEFAULT: "#14146c",
          // hover: "#dd242a",
          hover: "#F8B449",
        },
        body: "#dedede",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
