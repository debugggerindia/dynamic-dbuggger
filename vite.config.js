import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Optional: Specifies the directory for the production build
  },
  resolve: {
    alias: {
      // Add this alias to shorten imports from the 'src' folder
      '@': '/src', // Now you can use '@' to reference the 'src' folder
    },
  },
})
