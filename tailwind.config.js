/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-serif': ['"Noto Serif"', 'serif'],
        'saira-condensed': ['"Saira condensed"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
