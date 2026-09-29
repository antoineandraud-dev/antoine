import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#070708",
        surface: "#0d0d0f",
        "surface-container-lowest": "#050506",
        "surface-container-low": "#111113",
        "surface-container": "#171619",
        "surface-container-high": "#1f1d22",
        "surface-container-highest": "#2c282e",
        primary: "#ff5722",
        "primary-focus": "#ff6d00",
        "primary-container": "#ff5722",
        "on-primary": "#ffffff",
        "on-primary-container": "#ffffff",
        secondary: "#ff9400",
        "amber-glow": "#ff7a00",
        "on-surface": "#f5f3f2",
        "on-surface-variant": "#9d9894",
        outline: "#4a423e",
        "outline-variant": "#2b2623",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
        "serif-display": ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
