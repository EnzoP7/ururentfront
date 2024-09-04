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
      xlg: "1270px",
      xl: "1300px",
      // xxll: "1300",
    },
    // screens: {
    //   sm: "640px", // Breakpoint predeterminado de Tailwind CSS
    //   md: "768px", // Breakpoint predeterminado de Tailwind CSS
    //   lg: "1024px", // Breakpoint predeterminado de Tailwind CSS
    //   xl: "1280px", // Breakpoint predeterminado de Tailwind CSS (renombrado de xlg)
    //   "2xl": "1536px", // Breakpoint predeterminado de Tailwind CSS (renombrado de xl)
    //   "3xl": "1600px", // Breakpoint personalizado para pantallas más grandes
    // },
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
