import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    outDir: ".",
    emptyOutDir: false,
    lib: {
      entry: fileURLToPath(new URL("./src/main.jsx", import.meta.url)),
      name: "Gradient",
      formats: ["iife"],
      fileName: () => "1gradient.js",
      cssFileName: "1gradient",
    },
  },
});