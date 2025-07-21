import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/teply_pol/',
  build: { outDir: 'docs' },
  plugins: [vue()]
}); 