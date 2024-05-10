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
