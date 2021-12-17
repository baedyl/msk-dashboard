module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  darkMode: false,

  theme: {
    screens: {
      sm: '0px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue-dark': '#1a233f',
      'purple': '#6e1c80',
      'pink': '#de3182',
      'orange': '#f38b01',
      'green': '#13ce66',
      'yellow': '#ffec03',
      'gray-dark': '#273444',
      'gray': '#8C95A7',
      'gray-light': '#F2F3F5',
      'red': '#ff0000',
      'white': '#ffffff',
      'blue': '#58B8EB',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      width: {
        '521': '521px',
      },
      height: {
        '212': '212px',
        '251': '251px',
        '293': '293px',
        '39': '39px',
      }
    }
  },
  variants: {
    extend: {},
  },

  plugins: [],
};
