/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vortex-blue': {
          DEFAULT: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        'vortex-maroon': {
          DEFAULT: '#B91C3C',
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
          800: '#9F1239',
          900: '#881337',
        },
        'vortex-navy': {
          DEFAULT: '#0B1B3A',
          deep: '#060E1E',
          surface: '#112247',
          card: '#0e1f42',
        },
        'vortex-light-blue': '#E6EEFF',
        'vortex-soft': '#F8FAFC',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 40px -10px rgba(37, 99, 235, 0.35)',
        'glow-maroon': '0 0 40px -10px rgba(185, 28, 60, 0.35)',
        'glow-dual': '0 0 50px -10px rgba(37, 99, 235, 0.25), 0 0 40px -10px rgba(185, 28, 60, 0.2)',
        'premium': '0 20px 40px -15px rgba(11, 27, 58, 0.08), 0 0 1px 1px rgba(11, 27, 58, 0.04)',
        'premium-hover': '0 30px 60px -20px rgba(11, 27, 58, 0.16), 0 0 1px 1px rgba(37, 99, 235, 0.15)',
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
      },
    },
  },
  plugins: [],
}
