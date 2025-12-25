import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-afacad)", "sans-serif"],
        secondary: ["var(--font-abeezee)", "sans-serif"],
        abril: ["var(--font-abril-fatface)", "cursive"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "rgb(var(--black) / <alpha-value>)",
        black2: "rgb(var(--black-2) / <alpha-value>)",
        black3: "rgb(var(--black-3) / <alpha-value>)",
        black4: "rgb(var(--black-4) / <alpha-value>)",
        grey2: "rgb(var(--grey-2) / <alpha-value>)",
        grey3: "rgb(var(--grey-3) / <alpha-value>)",
        bluePrimary: "rgb(var(--blue-primary) / <alpha-value>)",
        orange: "rgb(var(--orange) / <alpha-value>)",
        cream: "rgb(var(--cream) / <alpha-value>)",
        cream2: "rgb(var(--cream-2) / <alpha-value>)",
        white2: "rgb(var(--white-2) / <alpha-value>)",
        redError: "rgb(var(--red-error) / <alpha-value>)",
      },
      animation: {
        toastIn: "toastIn .8s both",
        toastOut: "toastOut .8s both",
      },
      keyframes: {
        toastIn: {
          "0%": {
            transform: "var(--elm-translate) scale(0.7)",
            opacity: "0.7",
          },
          "80%": { transform: "translate(0px) scale(0.7)", opacity: "0.7" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        toastOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "20%": { transform: "translate(0px) scale(0.7)", opacity: "0.7" },
          "100%": {
            transform: "var(--elm-translate) scale(0.7)",
            opacity: "0.7",
          },
        },
        rerender: {
          "0%": {
            ["border-color"]: "rgb(var(--button-primary) / <alpha-value>)",
          },
          "40%": {
            ["border-color"]: "rgb(var(--button-primary) / <alpha-value>)",
          },
        },
        highlight: {
          "0%": {
            background: "rgb(var(--button-primary) / <alpha-value>)",
            color: "rgb(var(--text-primary) / <alpha-value>)",
          },
          "40%": {
            background: "rgb(var(--button-primary) / <alpha-value>)",
            color: "rgb(var(--text-primary) / <alpha-value>)",
          },
        },
        loading: {
          "0%": {
            opacity: ".2",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          to: {
            opacity: ".2",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: "1",
          },
          "40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
