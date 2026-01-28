/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize images from external sources if needed in the future
  images: {
    remotePatterns: [],
  },
}

module.exports = nextConfig
