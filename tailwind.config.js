/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Inter-Regular", "sans-serif"],
      heading: ["Euclid-Circular", "sans-serif"],
    },
    extend: {
      colors: {
        secondary: "#A1A5AD",
        dark: "#0E0E0F",
      },
    },
  },
  plugins: [],
};
