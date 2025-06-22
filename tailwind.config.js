/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(33, 128, 141, 1)',
        'primary-hover': 'rgba(29, 116, 128, 1)',
        'primary-active': 'rgba(26, 104, 115, 1)',
      },
    },
  },
  plugins: [],
}
