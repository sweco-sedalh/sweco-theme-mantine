import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const isPagesBuild = process.env.VITE_DEPLOY_TARGET === "pages";

// https://vitejs.dev/config/
export default defineConfig(
  isPagesBuild
    ? {
        base: "/sweco-theme-mantine/",
        plugins: [react()],
        build: {
          outDir: "dist-pages",
          emptyOutDir: true,
        },
      }
    : {
        plugins: [react(), dts({ include: ["lib"] })],
        build: {
          copyPublicDir: false,
          lib: {
            fileName: "index",
            entry: resolve(__dirname, "lib/index.ts"),
            formats: ["es", "cjs"],
          },
          rollupOptions: {
            external: [
              "react",
              "react-dom",
              "react/jsx-runtime",
              "@mantine/core",
            ],
          },
        },
      },
);
