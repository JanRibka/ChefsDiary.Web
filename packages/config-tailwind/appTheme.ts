import plugin from "tailwindcss/plugin";

import { mauve } from "@radix-ui/colors";

const colorPrimary = "rgb(44, 59, 75)";
const colorPrimaryDark = "rgb(17, 29, 40)";

const radixThemePlugin = plugin.withOptions(
  () => {
    return ({ addBase }) => {
      addBase({
        "*": {
          outlineColor: "currentColor",
        },
        "html, body": {
          height: "100%",
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
        },
        // em: {
        //   fontFamily: "var(--em-font-family)",
        //   fontWeight: "var(--em-font-weight)",
        //   fontSize: "calc(var(--em-font-size-adjust) * 1em)",
        //   fontStyle: "var(--em-font-style)",
        //   lineHeight: "1.25",
        //   letterSpacing:
        //     "calc(var(--em-letter-spacing) + var(--letter-spacing, var(--default-letter-spacing)))",
        // },
        // h6: {
        //   fontFamily: "var(--heading-font-family)",
        //   fontWeight: "var(--font-weight-bold)",
        //   fontSize:
        //     "calc(var(--font-size-4) * var(--heading-font-size-adjust))",
        //   letterSpacing:
        //     "calc(var(--letter-spacing-4) + var(--heading-letter-spacing))",
        //   lineHeight: "var(--heading-line-height-4)",
        // },
        // h5: {
        //   fontFamily: "var(--heading-font-family)",
        //   fontWeight: "var(--font-weight-bold)",
        //   fontSize:
        //     "calc(var(--font-size-5) * var(--heading-font-size-adjust))",
        //   letterSpacing:
        //     "calc(var(--letter-spacing-5) + var(--heading-letter-spacing))",
        //   lineHeight: "var(--heading-line-height-5)",
        // },
        // h4: {
        //   fontFamily: "var(--heading-font-family)",
        //   fontWeight: "var(--font-weight-bold)",
        //   fontSize:
        //     "calc(var(--font-size-6) * var(--heading-font-size-adjust))",
        //   letterSpacing:
        //     "calc(var(--letter-spacing-6) + var(--heading-letter-spacing))",
        //   lineHeight: "var(--heading-line-height-6)",
        // },
        // h3: {
        //   fontFamily: "var(--heading-font-family)",
        //   fontWeight: "var(--font-weight-bold)",
        //   fontSize:
        //     "calc(var(--font-size-7) * var(--heading-font-size-adjust))",
        //   letterSpacing:
        //     "calc(var(--letter-spacing-7) + var(--heading-letter-spacing))",
        //   lineHeight: "var(--heading-line-height-7)",
        // },
        // h2: {
        //   fontFamily: "var(--heading-font-family)",
        //   fontWeight: "var(--font-weight-bold)",
        //   fontSize:
        //     "calc(var(--font-size-8) * var(--heading-font-size-adjust))",
        //   letterSpacing:
        //     "calc(var(--letter-spacing-8) + var(--heading-letter-spacing))",
        //   lineHeight: "var(--heading-line-height-8)",
        // },
        // h1: {
        //   fontFamily: "var(--heading-font-family)",
        //   fontWeight: "var(--font-weight-bold)",
        //   fontSize:
        //     "calc(var(--font-size-9) * var(--heading-font-size-adjust))",
        //   letterSpacing:
        //     "calc(var(--letter-spacing-9) + var(--heading-letter-spacing))",
        //   lineHeight: "var(--heading-line-height-9)",
        // },
      });
    };
  },
  () => {
    return {
      darkMode: "class",
      theme: {
        // fontFamily: {
        //   sans: "var(--default-font-family)",
        //   strong: "var(--strong-font-family)",
        //   heading: "var(--heading-font-family)",
        //   code: "var(--code-font-family)",
        //   em: "var(--em-font-family)",
        //   quote: "var(--quote-font-family)",
        // },
        maxWidth: {
          main: "1140px",
        },
        backgroundColor: {
          page: {
            primary: "rgb(238, 238, 238)",
          },
        },
        colors: {
          error: "rgb(204, 0, 0)",
          primary: {
            light: "rgb(81, 100, 120)",
            DEFAULT: colorPrimary,
            dark: colorPrimaryDark,
          },
          secondary: {
            light: "rgb(252, 252, 252)",
            DEFAULT: "rgb(238, 238, 238)",
            dark: "rgb(214, 214, 214)",
          },
          ...mauve,
          dark: {},
        },
        extend: {
          keyframes: {
            hoverCardSlideUpAndFade: {
              "0%": { opacity: "0", transform: "translateY(2px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
            },
            hoverCardSlideDownFade: {
              "0%": { opacity: "0", transform: "translateY(-2px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
            },
            hoverCardSlideRightFade: {
              "0%": { opacity: "0", transform: "translateX(-2px)" },
              "100%": { opacity: "1", transform: "translateX(0)" },
            },
            hoverCardSlideLeftFade: {
              "0%": { opacity: "0", transform: "translateX(2px)" },
              "100%": { opacity: "1", transform: "translateX(0)" },
            },
          },
          animation: {
            hoverCardSlideUpFade:
              "hoverCardSlideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
            hoverCardSlideDownFade:
              "hoverCardSlideDownFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
            hoverCardSlideRightFade:
              "hoverCardSlideRightFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
            hoverCardSlideLeftFade:
              "hoverCardSlideLeftFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
          },
        },
      },
    };
  }
);

export default radixThemePlugin;
