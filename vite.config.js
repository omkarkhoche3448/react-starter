import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Load environment variables based on mode
  const env = loadEnv(mode, process.cwd(), '')
  const isProduction = mode === 'production'
  
  return {
    // Essential plugins
    plugins: [react(), tailwindcss()],
    
    // Clean import paths
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    
    // Development server
    server: {
      port: 5173,
      host: true,
      open: false,
    },
    
    // Preview server (for testing production builds)
    preview: {
      port: 5000,
      strictPort: true,
    },
    
    // Production build optimization
    build: {
      target: 'esnext',
      sourcemap: !isProduction, // only dev maps
      
      // Use terser for advanced cleanup (removes console.log)
      minify: isProduction ? 'terser' : false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      
      // Warn for large chunks
      chunkSizeWarningLimit: 1000,
      
      // Better caching and asset organization
      rollupOptions: {
        output: {
          // Vendor chunk splitting
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
          
          // Organized asset naming with hashes for caching
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        },
      },
    },
    
    // Global constants and environment variables
    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION || '1.0.0'),
    },
    
    // Environment variables configuration
    envPrefix: 'VITE_',
  }
})