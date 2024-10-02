import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import path from 'path';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      compression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ],
    build: {
      minify: mode === 'production' ? 'terser' : false,
      outDir: 'dist',
      sourcemap: mode === 'production' ? false : true,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'style.css';
            }
            return assetInfo.name;
          },
          entryFileNames: 'bundle.js',
        },
      },
    },
    server: {
      hmr: {
        port: 5273, // Hot Module Replacement port
      },
    },
    publicDir: 'public', // Specify the public directory
  };
});
