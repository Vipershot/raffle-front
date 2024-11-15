/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007A71",
        secondary: "#008000",
        info: "#FFA500"
      },
    },
  },
  plugins: [],
}