import type { Config } from "tailwindcss";
import radixThemePlugin from "./appTheme";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {},
  },
  plugins: [radixThemePlugin({})],
};
export default config;
