import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgrPlugin from "vite-plugin-svgr";
import path from "path";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: {
      //@ts-ignore
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Tarmoq orqali kirishga ruxsat
    port: 5173, // Portni belgilash (kerak bo'lsa)
  },
  plugins: [
    react(),
    svgrPlugin(),
    tsconfigPaths(),
    checker({
      overlay: true,
      typescript: true,
    }),
  ],
});
