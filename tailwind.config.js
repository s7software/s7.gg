/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue,json}",
    ],
    theme: {
        extend: {
            colors: {
                'dark': '#141414',
                'primary': '#C2420D'
            },
        },
    },
    plugins: [],
}

