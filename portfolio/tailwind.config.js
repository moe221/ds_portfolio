/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#E8E8FF',
          100: '#D1D1FF',
          600: '#3D3DFF',
          700: '#2323FF',
          800: '#1A1ACC',
        },
      },
    },
  },
  plugins: [],
};
