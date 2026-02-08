import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#e0f2fe',
          100: '#bae6fd',
          200: '#7dd3fc',
          300: '#38bdf8',
          400: '#0ea5e9',
          500: '#0284c7', // Main primary blue
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#0f3a53',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: '#8b5cf6', // A vibrant purple for highlights
        background: '#0d1117', // Dark background for a modern look
        foreground: '#ffffff', // White foreground for text
        card: '#161b22', // Slightly lighter dark for cards
        'card-foreground': '#e6edf3', // Light text for cards
        border: '#30363d',
        input: '#21262d',
        ring: '#38bdf8',
      },
    },
  },
  plugins: [],
};

export default config;
