/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ec2: {
          orange: '#FF9900',
          darkOrange: '#EC7211',
          navy: '#232F3E',
          lightGray: '#F2F3F3',
          darkGray: '#161E2D',
        }
      }
    },
  },
  plugins: [],
}
