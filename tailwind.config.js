/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f6f4ff',
          100: '#edebfe',
          200: '#dcd7fe',
          300: '#cabffd',
          400: '#ac94fa',
          500: '#9061f9',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        peach: {
          50: '#fff5f1',
          100: '#ffe6d9',
          200: '#ffd0b5',
          300: '#ffb088',
          400: '#ff8c5f',
          500: '#ff6937',
          600: '#ff4405',
          700: '#cc3604',
          800: '#a62d03',
          900: '#802303',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};