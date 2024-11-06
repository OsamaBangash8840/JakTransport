import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'Open Sans'],
      },
       boxShadow: {
        'extra-sm': '4px 0 6px -1px rgba(0, 0, 0, 0.1)', // very minor shadow
      },
      colors: {
        DriverBorder:'#A5A5A5',
        ActiveBlue:'#1C6CE5',
        tabsBlue:'#718EBF',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
