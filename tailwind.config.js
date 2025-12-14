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
          primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
          accent: 'rgb(var(--color-accent) / <alpha-value>)',
          card: 'rgb(var(--color-card) / <alpha-value>)',
          'card-muted': 'rgb(var(--color-card-muted) / <alpha-value>)',
          line: 'rgb(var(--color-border) / <alpha-value>)',
        },
      },
      fontFamily: {
        mono: ['var(--font-dm-mono)', 'ui-monospace', 'SFMono-Regular', 'Roboto Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'],
        sans: ['var(--font-dm-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      },
    },
  },
  plugins: [],
}
