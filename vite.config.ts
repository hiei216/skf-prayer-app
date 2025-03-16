import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), sentryVitePlugin({
    org: "jirko",
    project: "skf-prayer-app"
  })],

  server: {
    open: true, // Open the browser on server start
  },

  build: {
    sourcemap: true
  }
});