import type { Config } from "tailwindcss";
import radixThemePlugin from "./appTheme";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content" | "presets"> = {
  theme: {
    extend: {
      transitionProperty: {
        "background-image": "background-image",
        opacity: "opacity",
        "background-color": "background-color",
        all: "all",
      },
      maxWidth: {
        main: "1140px",
      },
      boxShadow: {
        dialog:
          "hsl(206 22% 7% / 35%) 0px 10px 38px -10px,hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
      },
      backgroundImage: {
        checkbox:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        "70": "70%",
      },
    },
  },
  plugins: [
    radixThemePlugin({
      useTailwindColorNames: true,
      useTailwindRadiusNames: true,
      mapMissingTailwindColors: true,
    }),
  ],
};
export default config;
