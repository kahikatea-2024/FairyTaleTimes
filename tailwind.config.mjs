/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'md-lg': { min: '1020px', max: '1250px' },
      },
      fontFamily: {
        newsreader: ['Newsreader', 'sans-serif'], // Title
        space: ['Space Grotesk', 'sans-serif'], // Subtitle
        lora: ['Lora', 'serif'], // Main
        buttons: ['Poppins', 'sans-serif'],
      },
      colors: {
        DarkBlue: '#2e3d50',
        MidBlue: '#adb8c4',
        LightBlue: '#f1f7fd',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeScaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeUp: 'fadeUp 1s ease-out forwards',
        fadeScaleIn: 'fadeScaleIn 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
