/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/sections/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik Mono One', 'monospace'],
      },
      colors: {
        dark: '#1D2B53',
        purple: '#7E2553',
        rose: '#FF004D',
        yellow: '#FAEF5D',
      },
    },
  },
  plugins: [],
};
