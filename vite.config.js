import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set to your repo name if hosting at https://c-perezi.github.io/<repo>/
  // Change to '/' if using a custom domain or a user/org site (c-perezi.github.io)
  base: '/personal_website/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
  },
})
