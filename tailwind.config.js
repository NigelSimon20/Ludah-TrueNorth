/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#002920',
        'primary-light': '#014D3B',
        'primary-surface': '#EAF5F0',
        'app-bg': '#F7F9F8',
        text1: '#111827',
        text2: '#6B7280',
        'app-border': '#E5E7EB',
        accent: '#22C55E',
        'accent-bg': '#DCFCE7',
        'app-error': '#EF4444',
        'amber-text': '#92400E',
        'amber-bg': '#FEF3C7',
        'amber-border': '#FDE68A',
        'blue-text': '#1D4ED8',
        'blue-bg': '#EFF6FF',
        'purple-bg': '#F5F3FF',
        'green-badge': '#15803D',
        'green-dark': '#16A34A',
      },
      fontFamily: {
        sans: ['DMSans_400Regular'],
        'sans-medium': ['DMSans_500Medium'],
        'sans-semibold': ['DMSans_600SemiBold'],
        'sans-bold': ['DMSans_700Bold'],
        'sans-italic': ['DMSans_400Regular_Italic'],
        serif: ['DMSerifDisplay_400Regular'],
        'serif-italic': ['DMSerifDisplay_400Regular_Italic'],
      },
      borderRadius: {
        '10': 10,
        '14': 14,
        '20': 20,
        '24': 24,
        '32': 32,
      },
    },
  },
  plugins: [],
};
