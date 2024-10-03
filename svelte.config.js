import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    version: {
      name: Date.now().toString()
    }
  },
  preprocess: vitePreprocess(),
  vite: {
    server: {
      fs: {
        allow: ['../fonts', '../*.ttf', '../*.woff', '../*.woff2']
      },
    },
  },
};

export default config;