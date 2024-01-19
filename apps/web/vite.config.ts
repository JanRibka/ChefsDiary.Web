import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    https: {
      key: "devcert.key",
      cert: "devcert.crt",
    },
  },
  preview: {
    port: 4000,
  },
  plugins: [react()],
});
