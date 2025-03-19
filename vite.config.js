import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";

export default defineConfig({
  optimizeDeps: {
    include: ["three"], // Asegura que Three.js se optimice correctamente
  },
  build: {
    assetsInlineLimit: 0, // Evita que los archivos grandes se transformen en base64
    rollupOptions: {
      input: {
        main: "index.html",
      },
      output: {
        assetFileNames: "assets/[name][extname]", // Mantiene los nombres originales de los archivos
      },
    },
  },
  plugins: [
    copy({
      targets: [{ src: "public/models/*", dest: "dist/models" }], // Copia archivos manualmente
      hook: "writeBundle",
    }),
  ],
});
