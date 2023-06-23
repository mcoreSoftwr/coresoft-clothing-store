module.exports = {
  darkMode: "class",
  content: [
    "./public/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        beach: "url('background.jpg')",
      }),
      backgroundPosition: {
        left: "28% center",
        "slightly-right": "30% center",
      },
      fontFamily: {
        ava: ['"Kumar One Outline"', "cursive"],
      },
    },
  },
  plugins: [],
};
