/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  mode:'jit', //justInTime compiles on the fly so build is faster
  content: [
     "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

