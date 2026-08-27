// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // extra small devices
        sm: "375px", // small phones
        md: "425px", // medium phones
        lg: "768px", // tablets
        xl: "1024px", // small laptops
        "2xl": "1280px",
        "3xl": "1440px", // desktops
      },
    },
  },
  plugins: [],
};
