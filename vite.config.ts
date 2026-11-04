import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,
    port: 5174,
    strictPort: true,
    allowedHosts: [
      'gta-trilogy-universe.local',
      'localhost',
      '127.0.0.1',
    ],
  },
})
