import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './assets/css/bootstrap.scss'
import SiteChrome from './site-chrome'
import Footer from './footer'
import StructuredData from './structured-data'
import { siteUrl, siteTitle, siteDescription, email, linkedinUrl, githubUrl, ogImage, ogImageAlt } from './site-config'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

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
      email: `mailto:${email}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Gandhinagar', addressRegion: 'Gujarat', addressCountry: 'IN' },
      sameAs: [linkedinUrl, githubUrl]
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
  title: { default: siteTitle, template: '%s | Chirag Gajjar' },
  description: siteDescription,
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
    title: siteTitle,
    description: siteDescription,
    images: ogImage
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/opengraph-image', alt: ogImageAlt }]
  },
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.ico' }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className="light" data-bs-theme="light" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=document.cookie.match(/(?:^|; )portfolio-theme=([^;]*)/);var d=m?decodeURIComponent(m[1])==='dark':false;if(d){if(!document.documentElement.classList.contains('dark')){document.documentElement.className='dark';document.documentElement.setAttribute('data-bs-theme','dark');}}else{if(document.documentElement.classList.contains('dark')){document.documentElement.className='light';document.documentElement.setAttribute('data-bs-theme','light');}}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={poppins.variable}>
        <StructuredData data={siteStructuredData} />
        <SiteChrome footer={<Footer />}>{children}</SiteChrome>
        <SpeedInsights />
      </body>
    </html>
  )
}
