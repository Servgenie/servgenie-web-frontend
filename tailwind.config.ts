import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transform: {
        'rotateY-180': 'rotateY(180deg)', // This could be included here, but we will handle it via the plugin
      },
      boxShadow: {
        'custom-shadow': '0px 11px 100px 0px #8F52FF40',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.rotateY-180': {
          transform: 'rotateY(180deg)',
        },
        '.rotateY-0': {
          transform: 'rotateY(0deg)',
        },
      });
    },
  ],
};

export default config;
