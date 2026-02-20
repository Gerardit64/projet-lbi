/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6F1',
        gold: '#D4A574',
        'soft-black': '#1A1A1A',
        'gold-light': '#E8C9A0',
        'gold-dark': '#B8854A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Jost', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
