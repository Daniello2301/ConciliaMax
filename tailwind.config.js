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
      blue_light: "#82ADD8",
      blue_dark: "#1F273C",
      gren_light: "#97DEB0",
      green_primary: "#3DAA64",
      green_dark: "#297645",
      gray_light: "#E6E6E7",
      gray_dark: "#878789",
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

