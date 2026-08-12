/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F1E8',
        brand: '#C7FF3D',
        'brand-dark': '#a8d633',
        dark: '#111111',
        muted: '#6B6B6B',
        border: '#E0DCD3',
        'surface-dark': '#1A1A1A',
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", 'sans-serif'],
        ui: ["'Inter'", 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        button: '999px',
      },
    },
  },
  plugins: [],
}
