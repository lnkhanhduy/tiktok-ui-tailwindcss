/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'header-search': 'rgba(22, 24, 35, 0.06)',
        'header-search-hover': 'rgba(22, 24, 35, 0.03)',
        'header-search-line': 'rgba(22, 24, 35, 0.12)',
        'header-border-within': 'rgba(22, 24, 35, 0.2)',
        'header-text-color': 'rgba(22, 24, 35, 0.34)',
        'header-account-hover': 'rgba(22, 24, 35, 0.03)',
        'sidebar-menu_item-bg-hover': 'rgba(22,24,35,0.03)',
      },
      maxHeight: {
        'header-popper-max-height': 'min((100vh - 96px) - 60px, 734px)',
      },
    },
    keyframes: {
      spinner: {
        from: { transform: 'translateY(-50%) rotate(0)' },
        to: { transform: 'translateY(-50%) rotate(360deg)' },
      },
    },
    animation: {
      'spin-search': 'spinner 0.8s linear infinite',
    },
  },
  plugins: [],
};
