/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        solar: {
          primary: '#0F766E',      // Deep Eco Teal
          'primary-light': '#14B8A6', // Bright Teal
          'primary-dark': '#0D5C56',  // Dark Teal
          secondary: '#F59E0B',    // Solar Amber / Gold
          'secondary-light': '#FBBF24',
          dark: '#0F172A',         // Slate 900
          'dark-card': '#1E293B',   // Slate 800
          bg: '#F8FAFC',           // Light Slate Bg
          success: '#22C55E',      // Green 500
          accent: '#0284C7'        // Sky Blue Accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 118, 110, 0.12)',
        'glass-hover': '0 20px 40px 0 rgba(15, 118, 110, 0.22)',
        'solar-glow': '0 0 25px rgba(245, 158, 11, 0.35)',
        'teal-glow': '0 0 25px rgba(20, 184, 166, 0.35)'
      },
      backgroundImage: {
        'gradient-solar': 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)',
        'gradient-gold': 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)'
      }
    },
  },
  plugins: [],
}
