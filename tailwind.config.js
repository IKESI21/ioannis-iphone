module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'phone-img': "url('https://media4.giphy.com/media/9DpPlfDF1Xt4kH4y5C/source.gif')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
