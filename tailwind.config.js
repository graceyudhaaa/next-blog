/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        inter: ['var(--font-inter)']
      },
      colors: {
        'chambray': {
          '50': '#f4f6fb',
          '100': '#e8ebf6',
          '200': '#ccd6eb',
          '300': '#a0b4d9',
          '400': '#6d8cc3',
          '500': '#4a6dad',
          '600': '#3b5998',
          '700': '#2e4476',
          '800': '#2a3c62',
          '900': '#273453',
          '950': '#1a2137',
      },      
      },
    },
  },
  plugins: [],
}
