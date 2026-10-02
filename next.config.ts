import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: '/resume.pdf', destination: '/Chirag_Software_Engineer.pdf', permanent: true }]
  },
  async headers() {
    return [{ source: '/Chirag_Software_Engineer.pdf', headers: [{ key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' }, { key: 'Pragma', value: 'no-cache' }, { key: 'Expires', value: '0' }] }]
  }
}

export default nextConfig
