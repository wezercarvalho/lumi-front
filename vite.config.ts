import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsConfigPaths()],
    root: 'src',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    server: {
        port: 3001,
    },
})
