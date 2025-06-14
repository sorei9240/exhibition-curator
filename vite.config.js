import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: false,
  },
  build: {
    outDir: 'build',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  }
})