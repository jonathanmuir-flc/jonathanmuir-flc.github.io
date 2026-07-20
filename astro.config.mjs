// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages user site: production serves from the domain root
// (https://jonathanmuir-flc.github.io/), staging (develop branch) from
// /staging/. The deploy workflow overrides BASE_PATH per environment.
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: 'https://jonathanmuir-flc.github.io',
  base,
  trailingSlash: 'ignore',
});
