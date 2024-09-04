import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules:{
      localsConvention:"camelCase"
    }
  },
  optimizeDeps: {
    include: ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons', '@fortawesome/react-fontawesome']
  },
  resolve: {
    alias: {
      '@fortawesome/fontawesome-svg-core': '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons': '@fortawesome/free-brands-svg-icons',
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome'
    }
  }
})
