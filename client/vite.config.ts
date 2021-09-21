import { defineConfig, UserConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

const _config = <UserConfig>defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
  ],
  server: {
    host: 'localhost',
    port: 5000,
  },
});

export default _config;
