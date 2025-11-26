/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nature-green': '#2d5016',
        'earth-brown': '#8b4513',
        'leaf-green': '#4a7c59',
      },
    },
  },
  plugins: [],
}

