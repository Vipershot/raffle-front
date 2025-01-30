/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f07151",
        secondary: "#7f51ff",
        info: "#713fff",
        dark: "#444444",
        disabled: "#e5e7eb",
        online: "#34D399",
        light:'#f9f9f9',
        red: '#ff0000'
      },
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
        '25': 'repeat(25, minmax(0, 1fr))',
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