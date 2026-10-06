import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: "#D9F944",
          limeDark: "#b5d318",
          black: "#0a0a0a",
          muted: "#666666",
          lightMuted: "#8e8e93",
          border: "#eaeaea",
          cardBg: "#fbfbfb",
          pillBg: "#f5f5f5",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
