/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          'neon': '#90ff17',
          'mint': '#00c16c',
          'dark': '#00755c'
        },
        dark: {
          'green': '#004443',
          'lead': '#002e34',
          'gray': '#182224'
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
