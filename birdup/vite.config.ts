import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // these need to stay in sync with compose.yaml
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  base: "/",
})
