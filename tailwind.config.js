import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
      },

      fontFamily: {
        sans: ["Tajawal", ...defaultTheme.fontFamily.sans],
        serif: ["Amiri", ...defaultTheme.fontFamily.serif],
      },
    },
  },

  plugins: [],
};

