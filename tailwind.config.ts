import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kala: {
          bg: "#f6f8fb",
          ink: "#0f172a",
          deep: "#1e293b",
          accent: "#0d9488",
          accentSoft: "#99f6e4",
          warm: "#f59e0b"
        }
      },
      boxShadow: {
        soft: "0 12px 35px -14px rgba(15, 23, 42, 0.25)",
      },
      animation: {
        rise: "rise 0.55s ease-out both",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
