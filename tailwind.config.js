/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ECFDF5',
          DEFAULT: '#065F46',
          dark: '#064E3B',
        },
        accent: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        base: {
          DEFAULT: '#FDFBF7',
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
