/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d1b3e',
          light: '#162552',
          muted: '#1e3369',
        },
        orange: {
          DEFAULT: '#f97316',
          dark: '#ea6c0a',
        },
        surface: '#f8f9fc',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
