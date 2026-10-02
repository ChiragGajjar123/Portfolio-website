import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: '/resume.pdf', destination: '/Chirag_Software_Engineer.pdf', permanent: true }]
  },
  async headers() {
    // Resume PDF changes rarely — allow browser/CDN caching instead of no-store.
    return [{ source: '/Chirag_Software_Engineer.pdf', headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' }] }]
  }
}

export default nextConfig
