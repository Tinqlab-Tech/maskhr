/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}", // ⚠️ Required this line to compile RizzUI style.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Gilroy: ["var(--font-lato)"],
    },
    extend: {
      colors: {
        primary: "#0E69EF",
        secondary: "#999999",
        mainBlack: "#000000",
        lightGray: "#FAFAFA",
        darkGray: "#1B1B1B",
      },
      backgroundImage: {
        herobg: "url('/images/herobg.png')",
        IntersectUp: "url('/images/IntersectUp.png')",
        IntersectDown: "url('/images/IntersectDown.png')",
        features1: "url('/images/featuresbg/features1.png')",
        features2: "url('/images/featuresbg/features2.png')",
        features4: "url('/images/featuresbg/features4.png')",
        features5: "url('/images/featuresbg/features5.png')",
      },
      boxShadow: {
        "custom-primary": "4px 4px 25px 0 rgba(27, 27, 27, 1)",
        "custom-secondary": "4px 4px 25px 0 rgba(107, 114, 128, 0.2)",
      },
    },
  },
  plugins: [],
};
