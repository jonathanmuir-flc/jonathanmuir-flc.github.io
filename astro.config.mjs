// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: production serves from /FLC-Portfolio/,
// staging (develop branch) from /FLC-Portfolio/staging/. The deploy
// workflow overrides BASE_PATH per environment.
const base = process.env.BASE_PATH ?? '/FLC-Portfolio';

export default defineConfig({
  site: 'https://jonathanmuir-flc.github.io',
  base,
  trailingSlash: 'ignore',
});
