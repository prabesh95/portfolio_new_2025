/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // keep static export enabled
 // base URL path
  // prefix for static assets like JS, CSS
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
