module.exports = {
  module: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
