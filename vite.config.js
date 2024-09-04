import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'), // Plugin Tailwind CSS
        require('autoprefixer'), // Plugin Autoprefixer
      ],
    },
  },
})
