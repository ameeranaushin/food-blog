/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#800000',      // deep red for primary accents/buttons
        cream: '#FFF5E1',       // soft cream background
        darkText: '#2C1A1A',    // dark text for contrast
        lightText: '#4D3C3C',   // lighter secondary text
        accent: '#B22222',      // slightly brighter red for hover states
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
