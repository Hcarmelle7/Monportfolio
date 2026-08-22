// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a", // Noir profond
        primary: {
          DEFAULT: "#8b5cf6", // Violet 500
          foreground: "#ffffff",
        },
        secondary: "#ec4899", // Pink 500 
        accent: "#7c3aed", // Violet 600
        card: "rgba(255, 255, 255, 0.05)", // Glassmorphism
      },
      animation: {
        'blob': 'blob 7s infinite', // Animation d'arrière-plan
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;