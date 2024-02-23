import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/tailwind.config.ts";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./styledComponents/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
};

export default config;
