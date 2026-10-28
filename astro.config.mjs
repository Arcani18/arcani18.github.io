// @ts-check
import { defineConfig } from 'astro/config';

// The deploy workflow injects SITE and BASE_PATH from actions/configure-pages, so the same
// config works for a user site (user.github.io) and a project site (user.github.io/repo).
const basePath = process.env.BASE_PATH ?? '';

export default defineConfig({
  site: process.env.SITE ?? 'http://localhost:4321',
  base: `${basePath}/`,
});
