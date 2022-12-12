/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-primary": `linear-gradient(180deg, #880964 -17.92%, #B92382 -3.8%, #99198E 11.56%, #7B0F9A 42.88%, #5F06A5 72.98%)`,
      "gradient-secondary":`linear-gradient(113.48deg, #FF566B -3.77%, rgba(112, 44, 213, 0.9) 55.95%, rgba(33, 229, 240, 0.62) 113.29%)`,
    "gradient-gray":` linear-gradient(153.27deg, #202633 3.54%, rgba(32, 38, 51, 0.69) 111.82%)`,
  "gradient-multiple":`linear-gradient(#22FCAD 100%,#6E7CFB 100%,#FB5893 100%,#F7155D 100%,#54FCA1 100%, #633CFD 100%)`  
  }),
      boxShadow: {
        "5xl": "0px 4px 14px #000000",
        "4xl": "0px 4px 14px rgba(0, 0, 0, 0.55)",
        "6xl": `inset 32.3926px -32.3926px 32.3926px rgba(167, 167, 167, 0.063), inset -32.3926px 32.3926px 32.3926px rgba(255, 255, 255, 0.063)`,
      },
      backgroundColor: {
        borderGreen: "#2fcd940d",
      },
      
      
    
      colors: {
        gray: "#474747",
        thinGray: "#5F5F5F",
        lightGray: "#545454",
        mediumGray: "#323232",
        darkGray: "#252525",
        darkBlack: "#151515",
        blue: "#73B3FF",
        purple: "#5E5AFF",
        green: "#11957D",
        midGrey: "#5F5F5F",
        lightBlue: "#3F90DB",
        darkPurple: "#6B49CC",
        lineGray: "#515151",
        red: "#FF8585",
        opacity: "#00000099",
        Royalblue: "#1EAEFF",
        borderGreen: "#2fcd940d",
        gradientmultiple:`linear-gradient(#22FCAD 100%,#6E7CFB 100%,#FB5893 100%,#F7155D 100%,#54FCA1 100%, #633CFD 100%)`  

      },
    },
  },
  plugins: [],
};
