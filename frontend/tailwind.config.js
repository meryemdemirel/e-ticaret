/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        'brand-color': '#F5F8FF'
      }),
      colors: {
        primary: {
          '50': '#fff1f3',
          '100': '#ffe1e5',
          '200': '#ffc8cf',
          '300': '#ffa1ad',
          '400': '#fe6b7d',
          '500': '#f73c53',
          '600': '#da1a32',
          '700': '#c0152a',
          '800': '#9f1526',
          '900': '#831926',
          '950': '#48070f',
        },
      }
    },
  },
  fontFamily: {
    'body': [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'system-ui',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji'
    ],
    'sans': [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'system-ui',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji'
    ]
  },
  plugins: [],
}
