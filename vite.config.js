import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // "/" locally; the GitHub Pages workflow sets BASE_PATH=/T2/ because the
  // site is served from https://tharusha88.github.io/T2/.
  base: process.env.BASE_PATH || "/",
});
