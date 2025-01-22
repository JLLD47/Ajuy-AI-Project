/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ajuyDark: '#003b46',
        ajuyMid: '#07575b',
        ajuyLight: '#66a5AD',
        ajuyBkn: '#DFDED4',
        ajuyWhite: '#C4DFE6',

      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};


