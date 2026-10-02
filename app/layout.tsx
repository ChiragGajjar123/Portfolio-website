import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'
import SiteChrome from './site-chrome'

const description = 'Portfolio of Chirag Gajjar, a Software Engineer with 7+ years of experience delivering high-performance web applications across Angular, React, Next.js, Node.js, Go, AWS, and Cloud Architecture.'

export const metadata: Metadata = {
  title: 'Chirag Gajjar | Software Engineer', description, authors: [{ name: 'Chirag Gajjar' }], robots: 'index, follow',
  metadataBase: new URL('https://chirag-gajjar-software-engineer.vercel.app'), alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: 'Chirag Gajjar — Software Engineer', title: 'Chirag Gajjar | Software Engineer', description },
  twitter: { card: 'summary_large_image', title: 'Chirag Gajjar | Software Engineer', description }, icons: { icon: '/favicon.svg' }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="light" data-bs-theme="light"><body><SiteChrome>{children}</SiteChrome></body></html>
}
