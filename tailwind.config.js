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
        info: "#FFA500",
        dark: "gray",
        light:'#f2f2f2'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-scrollbar': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f0f0f0',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        },
      });
    }
  ],
}