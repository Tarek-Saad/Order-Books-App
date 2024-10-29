/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-cream': '#FEFCF8',
                'sage-gray': '#A8BEBF',
                'dark-charcoal': '#202021',
                'golden-orange': '#E6A250',
                'yellow-orange': '#F7C340',
                'soft-cream': '#FCF3E3',
                'second': '#7ab9b8'
            },
        },
    },
    plugins: [],
}