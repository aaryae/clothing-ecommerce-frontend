/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      letterSpacing: {
        custom: '0.3rem',
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
      fontSize:{
        custom: '0.775rem' 

      }
    },
  },
  plugins: [],
}
