
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'brand-purple': '#7C3AED',
        'brand-purple-light': '#A855F7',
        'brand-purple-dark': '#5B21B6',
        'brand-accent': '#06B6D4',
        'brand-success': '#10B981',
        'brand-warning': '#F59E0B',
        
        // Neutral Colors
        'neutral-50': '#FAFAF9',
        'neutral-100': '#F5F5F4',
        'neutral-200': '#E7E5E4',
        'neutral-300': '#D6D3D1',
        'neutral-400': '#A8A29E',
        'neutral-500': '#78716C',
        'neutral-600': '#57534E',
        'neutral-700': '#44403C',
        'neutral-800': '#292524',
        'neutral-900': '#1C1917',
        
        // Semantic Colors
        'text-primary': '#1C1917',
        'text-secondary': '#57534E',
        'text-muted': '#78716C',
        'text-inverse': '#FFFFFF',
        
        // Background Colors
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#FAFAF9',
        'bg-tertiary': '#F5F5F4',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'serif': ['Lora', 'serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 2s infinite',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      transitionTimingFunction: {
        'ease-out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
        'ease-in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
      }
    },
  },
  plugins: [],
}
