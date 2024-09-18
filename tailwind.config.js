/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#26436c",
        secondary: "#e9b26e",
        forBg: "#0e1a27",
      },
    },
  },
  plugins: [],
};
