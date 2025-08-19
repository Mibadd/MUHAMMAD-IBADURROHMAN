/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'serif': ['Playfair Display', 'serif'],
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 },
                },

                'pulse-deep': {
                    '0%, 100%': {
                        transform: 'scale(1)',
                        opacity: 0.5,
                    },
                    '50%': {
                        transform: 'scale(1.1)',
                        opacity: 0.1,
                    },
                },
            },
            animation: {
                blink: 'blink 1s infinite',

                'pulse-deep': 'pulse-deep 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}