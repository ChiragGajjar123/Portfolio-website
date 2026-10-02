// Single source of truth for site-wide constants.
export const siteUrl = 'https://chirag-gajjar-software-engineer.vercel.app'
export const siteTitle = 'Chirag Gajjar | Software Engineer'
export const siteDescription = 'Software engineer Chirag Gajjar has 7+ years of experience building scalable web applications, high-concurrency Go services, and cloud platforms.'

export const email = 'chiraggajjar421@gmail.com'
export const phoneDisplay = '+91 8401091573'
export const phoneHref = 'tel:+918401091573'
export const linkedinUrl = 'https://www.linkedin.com/in/chirag-gajjar-0ba075101'
export const githubUrl = 'https://github.com/ChiragGajjar123'
export const githubReposUrl = 'https://github.com/ChiragGajjar123?tab=repositories'

export const resumeUrl = '/Chirag_Software_Engineer.pdf'
export const resumeFileName = 'Chirag_Software_Engineer.pdf'

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' }
] as const

export const ogImageAlt = 'Chirag Gajjar — Software Engineer'
export const ogImage = [{ url: '/opengraph-image', width: 1200, height: 630, alt: ogImageAlt }]
