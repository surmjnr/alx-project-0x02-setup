/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['jsonplaceholder.typicode.com'],
  },
};

module.exports = nextConfig; 