/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Poppins', 'system-ui', 'sans-serif'] },
      colors: { brand: '#0a66d6', navy: '#0b3d86', ink: '#0d1b3d' },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        draw: { to: { strokeDashoffset: '0' } },
      },
      animation: { float: 'float 9s ease-in-out infinite', draw: 'draw .7s forwards' },
    },
  },
  plugins: [],
}
