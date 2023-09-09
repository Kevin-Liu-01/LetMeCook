import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Archivo", "Inter"],
        secondary: ["Inter"],
      },
      colors: {
        primary: "#FF724C",
        secondary: "#FDBF50",
        light: "#F4F4F8",
        dark: "#2A2C41",
      },
    },
  },
  plugins: [],
} satisfies Config;
