module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'sans-sherif'],
        Phudu: ['Phudu', 'cursive'],
        Roboto: ['Roboto', 'sans-sherif'],
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
      }
    },
  },
  plugins: [],
}