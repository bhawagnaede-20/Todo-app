import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite base path matching repository name 'todo-app' for GitHub Pages
  base: '/todo-app/',
})
