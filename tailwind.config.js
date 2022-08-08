module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      "poppins" : ['Poppins', 'Tahoma']
    },
    keyframes: {
      type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
        },
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
      'fade-in-up': {
        '0%': {
            opacity: '0',
            transform: 'translateY(800px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)'
      },
    },
    'fade-in-up-nav': {
      '0%': {
          opacity: '0',
          transform: 'translateY(-5px)'
      },
      '100%': {
        opacity: '1',
        transform: 'translateX(0)'
    },
  },
    'fade-in-nav': {
      '0%': {
          opacity: '0',
          transform: 'translateY(-30px)'
      },
      '100%': {
          opacity: '1',
          transform: 'translateY(0)'
      },
  }
  },
  animation: {
    'fade-in-down': 'fade-in-down 0.3s ease-out',
      'fade-in-up' : 'fade-in-up 0.5s ease-out',
      'fade-in-nav' : 'fade-in-nav 0.5s ease-out',
      'fade-in-up-nav' : 'fade-in-up-nav 0.3s ease-out',
      cursor: 'cursor .6s linear infinite alternate',
      type: 'type 1.8s ease-out .8s 1 normal both',
      'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
  },
  },

  plugins: [],
}