/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        surface: '#07080C',
        panel: '#0D1119',
        glow: '#2C6AA0',
        accent: '#6EE7B7',
        accentSoft: '#14B8A6',
        tone: '#E2E8F0',
      },
      boxShadow: {
        soft: '0 20px 80px rgba(15, 23, 42, 0.35)',
        glow: '0 0 90px rgba(56, 189, 248, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top left, rgba(59,130,246,0.12), transparent 18%), radial-gradient(circle at 20% 30%, rgba(16,185,129,0.12), transparent 25%), linear-gradient(180deg, rgba(15,23,42,0.92), rgba(7,9,12,0.92))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.85s ease forwards',
      },
    },
  },
  plugins: [],
};

