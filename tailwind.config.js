/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      animation: {
        slowspin: "spin 10s linear infinite", // Define a custom animation
      },
      colors:{
        primary: "#344c36",
        secondary: "#eff2f1",
        yellow: "#f9bf29",
        black: "#2f2f2f",
        white: "#fff",
        whiteGradient: "rgba(255, 255, 255, 0.5)",
        darkGray: "#6a6a6a",
        paleBlue:"#adb5bd",
      }
    },
  },
  plugins: [],
}

