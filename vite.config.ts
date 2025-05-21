import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Mono UI',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'react',
          'react/jsx-runtime': 'jsxRuntime',
        },
        preserveModules: true,
        dir: 'dist',
        entryFileNames: (chunkInfo) => {
          // Remove 'src/' from output path
          const path = chunkInfo.name.replace('src/', '');
          return `${path}.js`;
        },
        assetFileNames: (assetInfo) => {
          const path = assetInfo.name?.replace('src/', '') || '';
          return path;
        },
      },
    },
    cssCodeSplit: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    pool: 'forks',
  },
});
