/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Vazirmatn", "sans-serif"],
      serif: ["Bhoma", "serif"],
    },

    extend: {
      colors: {
        shadow: "rgba(0, 0, 0, 0.7)",
      },
      boxShadow: {
        sm: "-2px 4px 28px rgba(163, 163, 163, 0.11)",
        md: "0px 0px 4px rgba(0, 0, 0, 0.08)",
        lg: "0px 3px 26px rgba(0, 0, 0, 0.06)",
        "filter-button": " 4px 8px 24px rgba(255, 143, 123, 0.25)",
      },
    },
  },
  plugins: [],
};
