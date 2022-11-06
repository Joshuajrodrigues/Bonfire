/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.animixplay.to',
        port: '',
        pathname: '/**'
      
      },
      {
        protocol: 'https',
        hostname: 'gogocdn.net',
        port: '',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig
