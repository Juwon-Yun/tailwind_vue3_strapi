module.exports = {
  // purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      width :{
        'side' : '100vw - 120px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};