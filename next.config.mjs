/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.80.20'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
