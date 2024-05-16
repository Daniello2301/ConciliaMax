/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
    colors:{
      blue_dark: "#1F273C",
      green_primary: "#3DAA64",
      gray_light: "#E6E6E7",
    },
    fontFamily:{
      'roundo': "Roundo",
      'rounde': ["Rounde", "sans-serif"],
    }
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
}

