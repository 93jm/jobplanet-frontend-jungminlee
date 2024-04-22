import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray001: "#323438",
        gray002: "#85878C",
        gray003: "#E5E6E9",
        white: "#FFFFFF",
        green: "#00C362",
        blue: "#2196F3",
        shadow01: "0px 1px 4px 0px rgba(30, 40, 58, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
