/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' to enable server-side features
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    domains: ['ui-avatars.com'],
    unoptimized: true 
  },
};

module.exports = nextConfig;