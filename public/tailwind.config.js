/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        'float-tablet': 'floatTablet 6s ease-in-out infinite',
        'float-mobile': 'floatMobile 5s ease-in-out infinite',
        'float-desktop': 'floatDesktop 7s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-in',
        'slide-in-up': 'slideInUp 0.6s ease forwards',
        'fade-in-bottom': 'fadeInBottom 1s ease 0.5s both',
        'arrow-bounce': 'arrowBounce 2s ease-in-out infinite',
        'logo-rotate': 'logoRotate 10s linear infinite',
      },
      keyframes: {
        floatTablet: {
          '0%, 100%': { transform: 'translateY(0) scale(1.1)' },
          '50%': { transform: 'translateY(-15px) scale(1.1)' },
        },
        floatMobile: {
          '0%, 100%': { transform: 'translateY(0) rotate(-6deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-6deg)' },
        },
        floatDesktop: {
          '0%, 100%': { transform: 'translateY(0) rotate(3deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInBottom: {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        arrowBounce: {
          '0%, 100%': { transform: 'translateX(0) rotate(12deg)' },
          '50%': { transform: 'translateX(10px) rotate(12deg)' },
        },
        logoRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
