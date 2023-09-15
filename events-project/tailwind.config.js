/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-gradient": "linear-gradient(to right,#21124C,#130A2D)",
      },
    },
  },
  plugins: [],
};
