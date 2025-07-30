/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // keep static export enabled
  basePath: '/portfolio_new_2025', // base URL path
  assetPrefix: '/portfolio_new_2025/', // prefix for static assets like JS, CSS
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
