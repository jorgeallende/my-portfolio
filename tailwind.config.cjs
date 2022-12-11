/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-black': '#001219',
        'base-cream-300': '#E9D8A6',
        'base-cream-400': '#D3C087',
        'base-cream-500': '#E9D8A6',
        'base-cream-600': '#A89B75',
        'base-cream-700': '#BAA771',
        'mint-500': '#0A966C',
        'red-500': '#AE2012',
        'orange-500': '#CA6702',
        'orange-600': '#BB3E03',
        'orange-400': '#CCAC01',
        'blue-500': '#0A9396',
        'blue-600': '#005F73'
      }
    },
  },
  plugins: [],
}
