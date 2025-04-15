import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  envDir: '..',
  build: {
    outDir: '../dist',
  },
  plugins: [
    tsconfigPaths(),
    react({
      include: '**/*.{jsx,tsx}',
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
  ],
})
