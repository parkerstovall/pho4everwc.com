/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    extend: {
      dropShadow: {
        dark: "0 10px 10px rgb(255, 255, 255, 1)",
      },
    },
  },
  plugins: [],
};
