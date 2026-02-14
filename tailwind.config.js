/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-bg': '#05080B',
        'cyber-bg-dark': '#020305',
        'cyber-bg-light': '#0B1116',
        'cyber-panel': 'rgba(16, 24, 32, 0.8)',
        'cyber-primary': '#4AF626',
        'cyber-secondary': '#00E5FF',
        'cyber-alert': '#FFB020',
        'cyber-error': '#FF3B3B',
        'cyber-text-primary': '#C7FFE8',
        'cyber-text-dim': '#5F8F86',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

