import type { Config } from 'tailwindcss';

export default <Config>{
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/primeng/**/*.{html,ts}"
  ],
  theme: {
    extend: {
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