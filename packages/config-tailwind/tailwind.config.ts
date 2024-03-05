import type { Config } from "tailwindcss";
import radixThemePlugin from "./appTheme";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      transitionProperty: {
        "background-image": "background-image",
        opacity: "opacity",
        all: "all",
        // TODO: Dodat zde defaultn9 hodnoty
      },
      maxWidth: {
        main: "1140px",
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
