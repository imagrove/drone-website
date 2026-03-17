import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://drone.imagrove.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
