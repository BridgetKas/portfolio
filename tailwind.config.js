/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      animation: {
        slowspin: "spin 10s linear infinite", // Define a custom animation
        slowPulse: 'slow-pulse 5s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 1.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 1.5s ease-out forwards',
        'fade-in': 'fade-in 3s ease-out forwards',
      },
  
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateX(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
       
      },
      colors:{
        primary: "#ede8e3",
        secondary: "#344c36",
        yellow: "#faac1d",
        black: "#2f2f2f",
        white: "#fff",
        whiteGradient: "rgba(255, 255, 255, 0.4)",
        darkGray: "#6a6a6a",
        paleBlue:"#adb5bd",
        // transparent:"#d8e8d9"
      },
      
      
    },
  },
  plugins: [],
  darkMode: 'selector'
}


