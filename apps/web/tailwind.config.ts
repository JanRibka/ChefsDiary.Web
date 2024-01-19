import type { Config } from "tailwindcss";
import radixThemePlugin from "@chefs-diary/radix-theme/appTheme";

export default {
  darkMode: "class",
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    radixThemePlugin({
      useTailwindColorNames: true,
      useTailwindRadiusNames: true,
      mapMissingTailwindColors: true,
    }),
  ],
} satisfies Config;
