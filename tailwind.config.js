/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#17365D',
          dark: '#0f243e',
          light: '#204675',
        },
        teal: {
          DEFAULT: '#267C78',
          hover: '#1e6662',
          light: '#31928e',
        },
        charcoal: {
          DEFAULT: '#263442',
          muted: '#4a5b6d',
          light: '#6c7d8f',
        },
        surface: {
          DEFAULT: '#F2F5F7',
          alt: '#e7ecf0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(23, 54, 93, 0.05)',
        'card': '0 4px 20px rgba(23, 54, 93, 0.07)',
        'card-hover': '0 10px 30px rgba(23, 54, 93, 0.12)',
      },
    },
  },
  plugins: [],
}

