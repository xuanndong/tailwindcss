/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee': '#C89F94',
        'coffee': {
          50: '#E8E6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',

        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0%)'},
        }
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-in-out'
      },
      backgroundImage: {
        'background.jpg': 'url("./image/background.jpg")'
      }
    },
  },
  plugins: [],
}


