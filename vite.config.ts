import * as path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@widgets': path.resolve(__dirname, './src/widgets/'),
      '@features': path.resolve(__dirname, './src/features/'),
      '@entities': path.resolve(__dirname, './src/entities/'),
      '@shared': path.resolve(__dirname, './src/shared/'),
    },
  },
})
