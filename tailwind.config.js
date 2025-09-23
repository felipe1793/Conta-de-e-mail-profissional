/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E3A8A', // Azul escuro para fundos principais
        'secondary': '#34D399', // Verde para destaque
        'text-base': '#D1D5DB', // Cinza para o texto
      },
    },
  },
  plugins: [],
}
