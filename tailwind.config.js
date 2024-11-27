/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e14b2f",
        secondary: "blue",
        info: "#f07151",
        dark: "gray",
        disabled: "#e5e7eb",
        light:'#f2f2f2'
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      }
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