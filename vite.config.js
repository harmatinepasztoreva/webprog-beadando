import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  // Relatív elérési utak beállítása
  base: './', 
  
  build: {
    rollupOptions: {
      // React oldalak megadása.
      input: {
     
        reactoldal: resolve(__dirname, 'react.html'),
        spa: resolve(__dirname, 'spa.html'),
        axios: resolve(__dirname, 'axios.html'),
  
      }
    }
  }
})