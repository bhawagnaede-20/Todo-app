import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base to './' makes asset URLs relative so the app works on GitHub Pages
  base: './',
})
