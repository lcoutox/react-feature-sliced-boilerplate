/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'primary': '#2563eb',
      'white': '#FFFFFF',
      'textColor': '#455A64',
      'grey': {
        'lightest': '#eceff1'
      }
    },
    extend: {
      screens: {
        'xs': '599px',
        'sm': '767px',
        'md': '1023px',
        'lg': '1439px',
        'xl': '1919px'
      }
    },
  },
  plugins: [],
}