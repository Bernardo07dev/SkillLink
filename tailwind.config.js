/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("light", '.light &')
    }
  ],
}