/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                primary: "var(--color-bg-primary)",
                secondary: "var(--color-bg-secondary)",
                primaryAccent: "var(--color-bg-primary-accent)",
                secondaryAccent: "var(--color-bg-secondary-accent)",
                button: "var(--color-bg-button)",
                card: "var(--color-bg-card)",
            },
            textColor: {
                primary: "var(--color-text-primary)",
                secondary: "var(--color-text-secondary)",
                tertiary: "var(--color-text-tertiary)",
                accent: "var(--color-text-accent)",
                btnText: "var(--color-bg-secondary)",
            },
            borderColor: {
                primary: "var(--color-bg-primary)",
                secondary: "var(--color-bg-secondary)",
                input: "var(--color-bg-input)",
                accent: "var(--color-text-accent)",
            },
        },
    },
    plugins: [],
};
