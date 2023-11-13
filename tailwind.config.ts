import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: ["10px", "20px"],
      midium: ["13px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["40px", "40px"],
      xxl: ["50px", "50px"],
    },

    extend: {},
  },
  plugins: [],
};
export default config;
