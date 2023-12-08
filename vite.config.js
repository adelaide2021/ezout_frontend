import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    entries: '/src/main.jsx',
    include: [
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'moment',
      'antd'
    ]
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  rollupOptions: {
    input: '/src/main.jsx'
  }
})
