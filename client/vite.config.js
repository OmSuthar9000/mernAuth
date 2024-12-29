import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: '/public/dist'  // Ensure the output goes to the correct folder
  },
  plugins: [react()],
})
