/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      letterSpacing: {
        custom: '0.4rem',
      },
    },
  },
  plugins: [],
}
