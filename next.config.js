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
  // Enable React strict mode
  reactStrictMode: true,
  // Disable x-powered-by header
  poweredByHeader: false,
  // Enable SWC minification
  swcMinify: true,
}

module.exports = nextConfig