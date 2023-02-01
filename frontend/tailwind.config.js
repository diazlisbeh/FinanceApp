module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./src/Pages/*.{.js}', './public/index.html' ],
  content: ["./src/**/*.{html,js}", "./src/Pages/*\.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
