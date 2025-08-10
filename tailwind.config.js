/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Brand colors
        'brand-purple': '#7C3AED',
        'brand-purple-dark': '#6D28D9',
        'brand-accent': '#06B6D4',
        'brand-success': '#10B981',

        // Text colors
        'text-primary': '#1C1917',
        'text-secondary': '#57534E',
        'text-muted': '#A8A29E',
        'text-inverse': '#FAFAF9',

        // Background colors
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F8FAFC',

        // Neutral colors
        'neutral-50': '#FAFAF9',
        'neutral-100': '#F5F5F4',
        'neutral-200': '#E7E5E4',
        'neutral-800': '#292524',
        'neutral-900': '#1C1917',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionTimingFunction: {
        'ease-out-cubic': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      scale: {
        '98': '0.98',
        '102': '1.02',
      },
    },
  },
  plugins: [],
}