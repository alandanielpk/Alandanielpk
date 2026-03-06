/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      colors: {
        canvas: "#020617",
        surface: "#0f172a",
        accent: "#fbbf24",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(2, 6, 23, 0.45)",
      },
    },
  },
  plugins: [],
};
