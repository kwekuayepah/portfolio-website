/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        skin: {
          fill: 'rgb(var(--color-fill) / <alpha-value>)',
          base: 'rgb(var(--color-text-base) / <alpha-value>)',
          accent: 'rgb(var(--color-accent) / <alpha-value>)',
          card: 'rgb(var(--color-card) / <alpha-value>)',
          'card-muted': 'rgb(var(--color-card-muted) / <alpha-value>)',
          line: 'rgb(var(--color-border) / <alpha-value>)',
        },
      },
      fontFamily: {
        mono: ['var(--font-ibm-plex-mono)', 'ui-monospace', 'SFMono-Regular', 'Roboto Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
