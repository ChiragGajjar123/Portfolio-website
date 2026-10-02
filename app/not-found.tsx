import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you requested could not be found. Return to Chirag Gajjar’s software engineering portfolio.',
  robots: { index: false, follow: true }
}

export default function NotFound() {
  return <div className="container py-5 text-center">
    <p className="badge rounded-pill px-3 py-2 badge-cyan">404 · Page not found</p>
    <h1 className="fw-bold mt-3">This page is unavailable</h1>
    <p className="text-body-secondary">The link may be out of date, or the page may have moved.</p>
    <Link scroll={false} href="/" className="btn fw-semibold px-4 py-2 rounded-3 btn-primary-gradient">Return to homepage</Link>
  </div>
}
