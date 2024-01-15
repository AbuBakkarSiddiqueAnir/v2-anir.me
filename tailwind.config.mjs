/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        mobileS: "330px",
        mobileM: "400px",
        mobileL: "480px",
        tabletS: "600px",
        tabletL: "768px",
        desktopXS: "900px",
        desktopS: "1080px",
        desktopM: "1200px",
        desktopL: "1400px",
      },
      colors: {
        "dark-navy": "#020c1b",
        navy: "#0a192f",
        "light-navy": "#112240",
        "lightest-navy": "#233554",
        "navy-shadow": "rgba(2, 12, 27, 0.7)",
        "dark-slate": "#495670",
        slate: "#8892b0",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
        "green-tint": "rgba(100, 255, 218, 0.1)",
        pink: "#f57dff",
        blue: "#57cbff",
      },
      fontFamily: {
        sans: [
          "Calibre",
          "Inter",
          "San Francisco",
          "SF Pro Text",
          "system-ui",
          "sans-serif",
        ],
        sfmono: "SFMono",
      },
      fontSize: {
        "h-huge": [
          "clamp(2rem, 3.5vw + 1rem, 4.5rem)",
          {
            lineHeight: "120%",
            fontWeight: "400",
            letterSpacing: "0.01rem",
          },
        ],

        "h-xl": [
          "clamp(1.3rem, 2vw + 1rem, 2.3rem)",
          {
            lineHeight: "4.11rem",
            fontWeight: "400",
            letterSpacing: "0.095rem",
          },
        ],

        "h-lg": [
          "clamp(1rem, 1.5vw + 1rem, 2rem)",
          {
            lineHeight: "4.11rem",
            fontWeight: "500",
            letterSpacing: "0.06rem",
          },
        ],
        "h-md": [
          "clamp(0.8rem, 1.2vw + 0.7rem, 1.7rem)",
          {
            lineHeight: "125%",
            fontWeight: "400",
            letterSpacing: "0.038rem",
          },
        ],
        "h-sm": [
          "clamp(0.7rem, 1vw + 0.5rem, 1rem)",
          {
            lineHeight: "125%",
            fontWeight: "400",
            letterSpacing: "0.038rem",
          },
        ],
        h6: [
          "clamp(0.7rem, 0.2vw + 0.9rem, 1rem)",
          {
            lineHeight: "187%",
            fontWeight: "700",
            letterSpacing: "0.06rem",
          },
        ],

        "b-1": [
          "clamp(1.1rem, 0.5vw + 0.8rem, 1.5rem)",
          { lineHeight: "160%", fontWeight: "500", letterSpacing: "0.04rem" },
        ],
        "b-2": [
          "clamp(0.8rem, 0.75vw + 1rem, 1rem)",
          { lineHeight: "200%", fontWeight: "500", letterSpacing: "0.02rem" },
        ],
      },
      spacing: {
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "3.13rem",
        "2xl": "4rem",
      },
      boxShadow: {
        "cta-primary": "0px -7px 17px -15px #D260BC",
      },
      borderRadius: {
        DEFAULT: "4px",
      },
      height: {
        nav: "100px",
        "nav-scroll": "70px",
        tab: "42px",
      },
      width: {
        tab: "120px",
        hamburger: "30px",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      transitionDuration: {
        DEFAULT: "0.25s",
      },
    },
  },
  plugins: [],
};
