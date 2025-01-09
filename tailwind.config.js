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
    },
  },
  plugins: [],
}

