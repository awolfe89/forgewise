/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Enable React strict mode in development only
  reactStrictMode: process.env.NODE_ENV === 'development',
  // Disable x-powered-by header
  poweredByHeader: false,
  // Enable SWC minification
  swcMinify: true,
  // Set base path for static assets
  assetPrefix: '',
  basePath: '',
  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error'],
    } : false,
  },
}

module.exports = nextConfig