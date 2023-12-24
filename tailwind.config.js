/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      width: {
        'hero-width': '25rem',
        'icon-width': '25rem'
      },
      height: {
        'icon-height': '25rem'
      },
      colors: {
        background: '#DFDFDF',
        'background-hero': '#F0EDED',
        silver: '#C0C0C0',
        'dark-grey': '#404040',
        grey: '#808080',
        white: '#FFFFFF'
      },

      boxShadow: {
        'hero-shadow': '0px 40px 40px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
