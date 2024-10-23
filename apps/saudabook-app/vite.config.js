import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@trade': path.resolve(__dirname, '../../packages/trade-app/index.tsx'), // Correct the path here
    },
  },
});
