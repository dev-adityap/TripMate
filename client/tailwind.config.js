/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F9FA', 
        surface: '#FFFFFF',    
        sidebar: '#1E1E24',    
        textPrimary: '#2D3748',
        textSecondary: '#718096',
        primary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          500: '#8B5CF6', 
          600: '#7C3AED',
        },
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          400: '#4ADE80', 
          500: '#22C55E',
        },
        warning: '#FBBF24',
        danger: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 2px 10px -1px rgba(0, 0, 0, 0.03)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}