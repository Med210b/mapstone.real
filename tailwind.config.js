/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flow: {
          '0%': { strokeDashoffset: '1000', strokeDasharray: '500 500' },
          '100%': { strokeDashoffset: '0', strokeDasharray: '500 500' },
        }
      },
      animation: {
        'flow-1': 'flow 20s linear infinite',
        'flow-2': 'flow 25s linear infinite reverse',
        'flow-3': 'flow 30s linear infinite',
        'flow-4': 'flow 22s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}