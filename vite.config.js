import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: ["three"]
  },
  build: {
    assetsInlineLimit: 0, // Evita que los assets grandes sean transformados
  }
});