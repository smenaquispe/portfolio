/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/sections/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Mono', 'monospace'],
      },
      colors: {
        // dark: '#1D2B53',
        dark: '#35374B',
        purple: '#7E2553',
        rose: '#FF004D',
        yellow: '#FAEF5D',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(dark|purple|rose|yellow)/,
    },
  ],
};
