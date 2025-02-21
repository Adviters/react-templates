import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "index.ts", // El archivo principal de tu librería
      name: "react-templates-dnd", // El nombre de la librería
      fileName: (format) => `react-templates-dnd.${format}.js`,
    },
    rollupOptions: {
      // Asegúrate de que no haya conflicto con dependencias externas
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
