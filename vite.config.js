import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    proxy: {
      "/nlp-search": {
        target: "https://d69a-83-48-47-161.ngrok-free.app", // URL del backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nlp-search/, ""),
      },
    },
  },
})


