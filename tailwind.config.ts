import type { Config } from 'tailwindcss';

export default <Config>{
  content: [
    "./src/**/*.{html,ts,scss}",
    "./node_modules/primeng/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        }
      },
      colors: {
        primary: '#2C3E50',
        creative: '#E67E22',
        barberia: '#1A1A1A',
        accent: '#F1C40F',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Esto es importante para PrimeNG
  },
}