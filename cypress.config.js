import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    viewportHeight: 1080,
    viewportWidth: 1920,
    projectId: "haic9s",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    projectId: "haic9s",
  },
});
