/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: "#f5c3bc",
        blue: "#1bbbaf",
        l_gray: "#c5cbcb",
        l_indigo: "#e2def5",
        text_color: "#b1b3b5",
      },
      height: {
        55: "55px",
      },
    },
  },
  plugins: [],
};
