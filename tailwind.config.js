/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f8f5',
          100: '#e1efe8',
          200: '#c5dfd4',
          300: '#9bc6b7',
          400: '#6ba895',
          500: '#468b77',
          600: '#347060',
          700: '#2b5a4e',
          800: '#1b3f36',
          900: '#0e2b24',
          950: '#071814',
        },
        gold: {
          100: '#fcf6e5',
          200: '#f7e8ba',
          300: '#f0d688',
          400: '#e5bf56',
          500: '#d4a833',
          600: '#b78726',
          700: '#916321',
          800: '#764f20',
          900: '#63421f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
