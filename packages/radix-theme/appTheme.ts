import plugin from "tailwindcss/plugin";

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
        colors: {
          error: "rgb(204, 0, 0)",
          primary: {
            light: "rgb(254, 205, 210)",
            DEFAULT: "rgb(253, 126, 143)",
            dark: "rgb(227, 113, 128)",
          },
          secondary: {
            light: "rgb(252, 252, 252)",
            DEFAULT: "rgb(238, 238, 238)",
            dark: "rgb(214, 214, 214)",
          },
        },
        extend: {
          keyframes: {
            "fade-in": {
              "0%": { opacity: "0" },
              "100%": { opacity: "1" },
            },
            "fade-out": {
              "0%": { opacity: "1" },
              "100%": { opacity: "0" },
            },
          },
          animation: {
            test: "fade-in 1s ease-in-out",
          },
        },
      },
    };
  }
);

export default radixThemePlugin;
