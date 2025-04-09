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
      Gilroy: ["var(--font-Gilroy)"],
    },
    extend: {
      colors: {
        primary: "#0E69EF",
        mainBlack: "#131313",
      },
      backgroundImage: {
        herobg: "url('/images/header.jpg')",
      },
    },
  },
  plugins: [],
};
