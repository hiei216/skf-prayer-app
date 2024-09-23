/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '1000': '1000',
      },
      screens: {
        lg: '1024px',
        md: '612px',
      },
      colors: {
        'light-blue': '#eaf4fc',
        'dark-blue': '#0174bf',
        'royal-blue': '#1966b0',
        turquoise: '#73d9f0',
        amber: '#f7b301',
        red: {
          200: '#FFCC8D',
          500: '#EB773E',
          600: '#B64B13',
        },
        'navy-blue': '#26577C',
        orange: '#E55604',
        beige: '#EBE4D1',
        grey: '#B4B4B3',
      },
      fontFamily: {
        roboto: ['roboto', 'sans-serif'],
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      backgroundImage: {
        'bible-horizontal': "url('./components/assets/bible-horizontal.jpg')",
        'bible-vertical': "url('./components/assets/bible-vertical.jpg')",
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

