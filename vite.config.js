import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import buildInsrpt from './build-insrpt';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['static']
    }
  },
  build: {
    rollupOptions: {
      external: ['node-fetch']
    }
  }
});