/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      animation: {
        slowspin: "spin 10s linear infinite", // Define a custom animation
        slowPulse: 'slow-pulse 5s ease-in-out infinite'
      },
      colors:{
        primary: "#ede8e3",
        secondary: "#344c36",
        yellow: "#faac1d",
        black: "#2f2f2f",
        white: "#fff",
        whiteGradient: "rgba(255, 255, 255, 0.5)",
        darkGray: "#6a6a6a",
        paleBlue:"#adb5bd",
        // transparent:"#d8e8d9"
      },
      
      
    },
  },
  plugins: [],
}

