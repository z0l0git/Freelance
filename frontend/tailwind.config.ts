import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          // "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        BigImage: {
          // "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
        BigImage: "BigImage 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
