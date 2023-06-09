/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'playfair': ['"Playfair Display"', 'serif'],
      'josefin': ['Josefin Sans', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
