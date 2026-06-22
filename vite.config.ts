import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base is '/' because this deploys to the user site repo jessicaj06.github.io
// (served from the domain root). For a *project* repo you'd set base: '/repo-name/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
