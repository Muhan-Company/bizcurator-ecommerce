/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16133A',
        secondary: '#F0F3Fc',
        main: '#1C1C1C',
        gray_01: '#999999',
        gray_02: '#D9D9D9',
        gray_03: '#FAFAFA',
        gray_04: '#F9F9F9',
        white: '#FFFFFF',
        star: '#FFB628',
        red: '#D30B0B',
      },
      fontSize: {
        'head-xl': '32px',
        'head-lg': '30px',
        'head-md': '28px',
        'head-xs': '24px',
        'title-lg': '22px',
        'title-md': '18px',
        'title-xs': '14px',
        'body-md': '16px',
        'body-sm': '14px',
        'body-xs': '12px',
        'label-md': '16px',
        'label-sm': '12px',
        'label-xs': '11px',
        'button-md': '18px',
        'button-sm': '16px',
        'button-xs': '14px',
      },
    },
  },
  plugins: [],
};
