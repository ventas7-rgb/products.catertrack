import { defineConfig } from 'astro/config';

export default defineConfig(({ command }) => ({
  site: 'https://catertracksas.co',
  base: command === 'dev' ? '/' : '/products.catertrack',
  server: {
    host: true,
  },
}));
