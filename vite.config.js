import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use a relative base so the built assets load both locally and on GitHub Pages
  base: './',
  server: {
    port: 3000,
    open: true,
  },
});
