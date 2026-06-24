import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        tiefgrau: "#0D0D0D",
        stahl: "#1A1A1A",
        chrom: "#C0C0C0",
        signal: "#FF6600",
        reinweiss: "#FFFFFF",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;