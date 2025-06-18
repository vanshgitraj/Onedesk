import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        dark: "#1E1E2F",
        soft: "#F5F7FA"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      borderRadius: {
        xl: "1.25rem",
        '2xl': "2rem"
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

export default config;