/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { sm: "480px", md: "768px", lg: "976px", xl: "1440pd" },
      animation: {
        fadeIn: "fadeIn 1.5s",
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUp: "slideUp 0.5s",
        slideUpEaseInOut: "slideUp 0.5s ease-in-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
      },
      backgroundColor: {
        gray: "#F7F7F7",
        darkGray: "#E4E4E7",
        lightGray: "#F9FAFB",
        green: "#BBF7D0",
        yellow: "#FFEF8A",
        secondaryGray: "#A2A2A2",
        blue: "#BFDBFE",
        darkBlue: "#1F2937",
      },
      colors: {
        green: "#17803D",
        yellow: "#A16207",
        gray: "#44444B",
        blue: "#1A4ED8",
        darkBlue: "#1F2937",
      },
      borderColor: {
        gray: "#F7F7F7",
        darkGray: "#E4E4E7",
        lightGray: "#F9FAFB",
        green: "#BBF7D0",
        yellow: "#FFEF8A",
        darkBlue: "#1F2937",
      },
    },
  },
  plugins: [],
};
