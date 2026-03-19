import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        accent: "hsl(var(--accent))",
        card: "hsl(var(--card))",
      },
      borderRadius: {
        soft: "12px",
        strong: "20px",
      },
      boxShadow: {
        frosted: "0 12px 32px rgba(15, 23, 42, 0.12)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
