import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      "gradient-96": "linear-gradient(96deg, #1678F2 0%, #6F3AFA 100%)",
      "gradient-145": "linear-gradient(145deg, #1678F2 3.73%, #65A8FB 132.69%)",
      "doctor-image": "url('/doctor-with-patient.png')",
    },
    fontFamily: {
      sora: ["Sora", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      base: "16px",
      sm: "12px",
      lg: "14px",
      xl: "18px",
      "2xl": "20px",
      "3xl": "22px",
      "4xl": "24px",
      "5xl": "32px",
      "6xl": "48px",
    },
    colors: {
      transparent: "transparent",
      primary: "#1678F2",
      secondary: "#6F3AFA",
      white: "#ffffff",
      black: "#000000",
      slate: {
        50: "#F9FBFC",
        500: "#6C87AE",
        900: "#031432",
      },
      blue: {
        400: "#65A8FB",
        500: "#3A8EF6",
        600: "#1678F2",
      },
      violet: {
        600: "#6F3AFA",
      },
      sky: {
        50: "#F2F7FF",
      },
      teal: {
        500: "#00BFA5",
      },
    },
    borderRadius: {
      sm: "2px",
      md: "4px",
      lg: "8px",
      xl: "12px",
      "2xl": "16px",
      "3xl": "24px",
      "4xl": "32px",
      full: "9999px",
    },
    extend: {
      boxShadow: {
        lg: "0px 8px 23px 0px",
      },
    },
  },
  plugins: [],
};
export default config;
