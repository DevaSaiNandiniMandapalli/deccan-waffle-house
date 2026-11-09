import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const base = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.VITE_BASE || '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
