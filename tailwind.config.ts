import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        marble: {
          DEFAULT: "#F5F1E8",
          50: "#FAF7EF",
          100: "#F5F1E8",
          200: "#EAE1CC",
        },
        aegean: {
          DEFAULT: "#1B3A4A",
          900: "#0F2532",
          800: "#1B3A4A",
          700: "#2A4858",
          500: "#365B6E",
        },
        bronze: {
          DEFAULT: "#9A7B4F",
          800: "#7A5F38",
          700: "#9A7B4F",
          500: "#B8895C",
          300: "#D4B289",
        },
        slate: {
          DEFAULT: "#2A2A2A",
          900: "#1A1A1A",
          700: "#2A2A2A",
          500: "#52525B",
        },
      },
      fontFamily: {
        display: ['"Cinzel"', "Georgia", "serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Work Sans"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
