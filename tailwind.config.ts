import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        nusantara: {
          navy: "#0f2942",
          blue: "#1f6feb",
          sky: "#dff7ff",
          green: "#2fbf71",
          sand: "#f7f0d7"
        }
      },
      boxShadow: {
        soft: "0 16px 40px rgba(15, 41, 66, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
