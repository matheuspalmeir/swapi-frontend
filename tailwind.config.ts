import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        disabled: "var(--color-disabled)",
        default: "var(--background-default)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
