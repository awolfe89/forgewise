import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Generate bundle analysis
    visualizer({
      template: 'treemap',
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/bundle-analysis.html'
    }),
    // Compress assets with gzip and brotli
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: false
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false
    }),
    // Additional HTML minification
    ViteMinifyPlugin({})
  ],
  build: {
    // Enable minification with advanced options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          // Group utilities together
          'utils': [
            './src/utils/validation.js',
            './src/utils/useKeyboardClick.js'
          ]
        },
        // Use content hash for cache busting
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `assets/${facadeModuleId}-[hash].js`;
        },
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
    // Increase chunk size warning limit slightly for vendor bundles
    chunkSizeWarningLimit: 600,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Generate source maps for production debugging
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'es2015',
    // Asset inlining threshold
    assetsInlineLimit: 4096
  },
  // Optimize CSS
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    postcss: {
      plugins: []
    }
  },
  // Production optimizations
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none'
  },
  // Preview server configuration
  preview: {
    headers: {
      // Enable compression headers
      'Content-Encoding': 'gzip, br',
      // Security headers
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      // Cache headers for static assets
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  }
})
