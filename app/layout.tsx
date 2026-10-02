import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'
import SiteChrome from './site-chrome'

const siteUrl = 'https://chirag-gajjar-software-engineer.vercel.app'
const title = 'Chirag Gajjar | Software Engineer'
const description = 'Software engineer Chirag Gajjar has 7+ years of experience building scalable web applications, high-concurrency Go services, and cloud platforms.'
const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Chirag Gajjar',
      url: siteUrl,
      jobTitle: 'Software Engineer',
      description: 'Software engineer with 7+ years of experience in web applications, enterprise SaaS, high-concurrency Go services, and cloud platforms.',
      email: 'mailto:chiraggajjar421@gmail.com',
      address: { '@type': 'PostalAddress', addressLocality: 'Gandhinagar', addressRegion: 'Gujarat', addressCountry: 'IN' },
      sameAs: ['https://www.linkedin.com/in/chirag-gajjar-0ba075101', 'https://github.com/ChiragGajjar123']
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Chirag Gajjar — Software Engineer',
      url: siteUrl,
      inLanguage: 'en-IN',
      description: 'Software engineering portfolio featuring projects, experience, skills, and contact information.',
      publisher: { '@id': `${siteUrl}/#person` }
    }
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: '%s | Chirag Gajjar' },
  description,
  applicationName: 'Chirag Gajjar Portfolio',
  authors: [{ name: 'Chirag Gajjar', url: siteUrl }],
  creator: 'Chirag Gajjar',
  publisher: 'Chirag Gajjar',
  category: 'Software Engineering',
  keywords: [
    'Chirag Gajjar', 'software engineer', 'software developer', 'Gandhinagar', 'Gujarat', 'India',
    'Angular developer', 'React developer', 'Next.js developer', 'TypeScript', 'Node.js', 'Go', 'AWS',
    'frontend engineer', 'full stack engineer', 'high concurrency systems'
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, noimageindex: false, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 }
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Chirag Gajjar — Software Engineer',
    title,
    description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Chirag Gajjar — Software Engineer' }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [{ url: '/opengraph-image', alt: 'Chirag Gajjar — Software Engineer' }]
  },
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.ico' }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN" className="light" data-bs-theme="light" data-scroll-behavior="smooth"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData).replace(/</g, '\\u003c') }}/><SiteChrome>{children}</SiteChrome></body></html>
}
