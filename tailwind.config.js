/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            colors: {
                'dark': '#141414',
                'primary': '#00a8ff'
            },
        },
    },
    plugins: [],
}

