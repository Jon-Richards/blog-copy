import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: './static/client',
    sourcemap: true,
    lib: {
      entry: './src/lib/client/index',
      fileName: 'client',
      formats: ['es']
    }
  }
});
