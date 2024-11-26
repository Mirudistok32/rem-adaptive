import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dtsPlugin from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dtsPlugin()],
  base: "/rem-adaptive/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
    port: 7000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/shared/ui/styles/size" as *;
          @use "@/shared/ui/styles/media_breackpoints" as *;
        `,
      },
    },
  },
});
