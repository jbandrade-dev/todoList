/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      screens: {
        mob: "100px",
        pc: "1024px",
      },
      colors: {
        purple: {
          300: '#8284FA',
          700: '#5E60CE',
        },
        blue: {
          300: '#4EA8DE',
          700: '#1E6F9F',
        },
        red: {
          500: '#E25858',
        },
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        }
      },
    },
  },
  plugins: [],
}
