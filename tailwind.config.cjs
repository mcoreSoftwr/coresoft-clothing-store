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
        "ava-title": ['"Kumar One Outline"', "cursive"],
        "menu-navbar": ['"Trirong"'],
        slogan1: ['"Lancelot"'],
        slogan2: ['"Qwigley"'],
        "collection-button": ['"Qwigley"'],
      },
      colors: {
        "ava-navbar": "rgb(158, 210, 198)",
        "ava-background": "rgb(84, 186, 185)",
      },
    },
  },
  plugins: [],
};
