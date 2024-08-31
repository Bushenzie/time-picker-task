/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
          theme: {
            primaryDark: "#1e2944",
            primaryLight: "#234761",
            secondary: "#eaeff1"
          },
          utility: {
            selectDate: "#d4ad45",
            selectTime: "#91c52f"
          }
        },
        extend: {},
    },
    plugins: [],
};
