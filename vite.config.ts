import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), cloudflare()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        error: resolve(__dirname, "404.html"),
      },
    },
  },
});
