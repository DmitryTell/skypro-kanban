import * as path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@api': path.resolve(__dirname, './src/api/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@context': path.resolve(__dirname, './src/context/'),
      '@helpers': path.resolve(__dirname, './src/helpers/'),
      '@hocs': path.resolve(__dirname, './src/hocs/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@interfaces': path.resolve(__dirname, './src/interfaces/'),
      '@layouts': path.resolve(__dirname, './src/layouts/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@services': path.resolve(__dirname, './src/services/'),
      '@shared': path.resolve(__dirname, './src/shared/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
    }
  }
});
