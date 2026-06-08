/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        charcoal: '#1e1e2e',
        'energy-yellow': '#E8B10A',
        'renewable-green': '#4CAF50',
        'electric-blue': '#2196F3',
        'energy-red': '#E53935',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        gradient: 'gradientShift 8s ease infinite',
      },
      keyframes: {
        floatSlow: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.8' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(-4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
