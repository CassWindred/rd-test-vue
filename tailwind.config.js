/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-purple": "#be3249",
        "theme-pastelblue": "#497c8f",
        "theme-pastelgreen": "#478175",
      }
    },
  },
  plugins: [],
}
