import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ["static"],
    },
  },
  build: {
    rollupOptions: {
      external: ["node-fetch"],
    },
  },
  ssr: {
    noExternal: ["@melt-ui/svelte", "bits-ui"],
  },
});
