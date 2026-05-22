import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        ash: "var(--ash)",
        aurum: "var(--aurum)",
        electric: "var(--electric)",
        violet: "var(--violet)"
      }
    }
  },
  plugins: []
};

export default config;
