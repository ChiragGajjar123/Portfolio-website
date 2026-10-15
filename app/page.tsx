import type { Metadata } from 'next'
import Link from 'next/link'
import { DownloadIcon, ArrowRightIcon } from './icons'
import StructuredData from './structured-data'
import { siteUrl, resumeUrl, resumeFileName, ogImage, ogImageAlt } from './site-config'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Software Engineer Portfolio — Angular, React & Go',
  description: 'Explore Chirag Gajjar’s software engineering portfolio: 7+ years building web applications, enterprise SaaS interfaces, Go services, and cloud platforms.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Software Engineer Portfolio — Angular, React & Go',
    description: '7+ years delivering scalable web platforms, high-concurrency Go microservices, and modern interfaces.',
    url: siteUrl,
    type: 'website',
    siteName: 'Chirag Gajjar — Software Engineer',
    locale: 'en_IN',
    images: ogImage
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Engineer Portfolio — Angular, React & Go',
    description: '7+ years building scalable web applications, high-concurrency Go services, and cloud platforms.',
    images: [{ url: '/opengraph-image', alt: ogImageAlt }]
  }
}

const profileStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/#profile`,
  url: siteUrl,
  name: 'Chirag Gajjar | Software Engineer',
  mainEntity: { '@id': `${siteUrl}/#person` }
}

const metrics = [
  { value: '7+', label: 'Years of Commercial Experience', sub: 'Enterprise & SaaS Products', color: 'text-primary' },
  { value: 'Node', label: 'Express 5 API', sub: 'Cluster Mode Process Scaling', color: 'text-success' },
  { value: '512K', label: 'Concurrent Connections', sub: 'Go / fasthttp Microservice', color: 'text-primary' },
  { value: '< 1ms', label: 'Sub-millisecond Latency', sub: 'Go 1.26 fasthttp Engine', color: 'text-warning' }
]

const projects = [
  { title: 'CM Notes — High-Concurrency Microservice', stack: 'Next.js 16 (App Router) • Go 1.26 fasthttp • MongoDB Atlas • Resend API', desc: 'Tuned to process 512K concurrent connections with sub-millisecond response times. Built with custom 64-shard in-memory rate limiter using FNV-1a hashing & atomic counters to eliminate lock contention, Tiptap Rich-Text Editor, and Resend transactional email.', accent: 'green', badges: [{ text: 'Go 1.26 fasthttp', tone: 'blue' }, { text: '512K Concurrency', tone: 'green' }], techs: ['Next.js 16', 'React 19', 'Go fasthttp', '64-Shard Limiter', 'Resend API', 'MongoDB Atlas'], url: 'https://notes-next-js-mongo-db.vercel.app', repos: [{ label: 'FE Repo', url: 'https://github.com/ChiragGajjar123/Notes---Next.js-MongoDB' }, { label: 'BE Repo', url: 'https://github.com/ChiragGajjar123/Notes-App-Go-Backend' }], },
  { title: 'CM Expense Tracker — Financial Analytics', stack: 'React 19 • TypeScript • Vite 8 • Zustand • Recharts • Node Express 5 Cluster', desc: 'Real-time budget tracking with category analytics. RESTful API scaled with Node.js Cluster mode multi-core process scaling, Pino structured logging, Helmet security, HTTP-only cookie JWTs, Redis rate limiting, and Resend email alerts.', accent: 'yellow', badges: [{ text: 'React 19 + Express 5', tone: 'yellow' }, { text: 'Redis Caching', tone: 'blue' }], techs: ['React 19', 'Vite 8', 'Zustand', 'Express 5 Cluster', 'Redis', 'Recharts'], url: 'https://expense-tracker-app-react-node-expr.vercel.app', repos: [{ label: 'FE Repo', url: 'https://github.com/ChiragGajjar123/Expense-Tracker-App---React---Node---Express---mongoDB' }, { label: 'BE Repo', url: 'https://github.com/ChiragGajjar123/Expense-Tracker-Node-Express-Backend' }], },
  { title: 'Salesmate CRM Product', stack: 'Angular • JavaScript • SCSS • Enterprise Sales Automation', desc: 'SaaS product used by businesses worldwide for sales automation and customer lifecycle management. Built responsive UI modules, complex dashboards, reporting features, lazy loading, and fine-tuned change detection strategies.', accent: 'red', badges: [{ text: 'Enterprise SaaS', tone: 'blue' }, { text: 'Angular Core', tone: 'red' }], techs: ['Angular', 'Sales Automation', 'Lazy Loading', 'UI/UX Reviews', 'Dashboards'], url: 'https://www.salesmate.io', repos: [], },
  { title: 'Cook & Boardman E-Commerce Storefront', stack: 'BigCommerce • HTML5 • CSS3 • JavaScript • Responsive Architecture', desc: 'Enterprise e-commerce storefront supporting digital transformation with intuitive navigation, custom product catalog views, and responsive mobile architecture.', accent: 'blue', badges: [{ text: 'BigCommerce', tone: 'blue' }, { text: 'Enterprise E-Commerce', tone: 'green' }], techs: ['BigCommerce', 'HTML5', 'CSS3', 'JavaScript', 'Responsive UX'], url: 'https://www.cookandboardman.com', repos: [], }
]

const domains = [
  { title: 'Frontend & Frameworks', tone: 'primary', desc: 'HTML, CSS, SCSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, Angular, React, Next.js.', pills: ['Angular', 'React', 'Next.js', 'TypeScript', 'SCSS'], icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></> },
  { title: 'Backend & Protocols', tone: 'success', desc: 'Node.js, Express, Docker, Go (Golang 1.26, fasthttp), WebSockets, REST APIs, multi-core cluster scaling.', pills: ['Go (fasthttp)', 'Node Express', 'Microservices', 'WebSockets', 'REST APIs', 'Docker'], icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></> },
  { title: 'Cloud & DevOps', tone: 'danger', desc: 'AWS (EC2, RDS, Lambda, SES, API Gateway, CloudFormation SAM, Amplify), GitHub Actions (CI/CD), Vercel, Netlify, Render.', pills: ['AWS SAM', 'AWS Lambda', 'AWS SES', 'GitHub Actions', 'Vercel', 'Render'], icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/> },
  { title: 'Databases & Caching', tone: 'warning', desc: 'MongoDB Atlas, PostgreSQL (AWS RDS), Redis (caching & distributed rate limiting), Supabase, Neon Postgres.', pills: ['PostgreSQL', 'MongoDB Atlas', 'Redis Caching', 'AWS RDS', 'Supabase', 'Neon'], icon: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></> },
  { title: 'AI Tooling Acceleration', tone: 'primary', desc: 'Integrated modern AI tools (Cursor, Augment, ChatGPT, CLI & APIs) across daily engineering workflows to boost velocity.', pills: ['Cursor IDE', 'Augment AI', 'ChatGPT', 'Rapid Refactoring', 'Test Generation'], icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/> },
  { title: 'E-Commerce Platforms', tone: 'danger', desc: 'Shopify custom theme development with Liquid, HTML5, SCSS, JS, SEO optimization, BigCommerce enterprise storefronts.', pills: ['Shopify Liquid', 'BigCommerce', 'Conversion SEO', 'Theme Dev'], icon: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></> }
]

function ExternalIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> }

export default function Home() {
  return <><StructuredData data={profileStructuredData}/><div className="pt-4"><div className="container">
    <section className={`text-center mx-auto col-lg-10 ${styles['cg-home-hero']}`}>
      <div className="mb-4"><span className="badge rounded-pill d-inline-flex align-items-center gap-2 px-3 py-2 fw-medium bg-primary-subtle text-primary-emphasis border border-primary-subtle"><span className="cg-pulse-dot"/>Available for Software Engineering Roles</span></div>
      <h1 className="display-5 fw-bold mb-4">Architecting Scalable Web Systems &amp; <span className="text-primary">Modern Dynamic User Experiences</span></h1>
      <p className={`text-body-secondary mx-auto mb-4 col-lg-10 small ${styles['cg-home-summary']}`}>I am <strong>Chirag Gajjar</strong>, a Software Engineer with <strong>7+ years of experience</strong> delivering resilient web applications with <strong>Angular</strong>, <strong>React</strong>, and <strong>CSS</strong> across <strong>Frontend</strong>, <strong>Frameworks</strong>, <strong>Backend &amp; Protocols</strong>, <strong>Databases &amp; Caching</strong>, <strong>Cloud &amp; DevOps</strong>, and <strong>E-commerce</strong>. Harnessing modern AI tools (Cursor, Augment, ChatGPT) to accelerate engineering cycles and ship production-grade software.</p>
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-5"><Link scroll={false} href="/projects" className="btn fw-semibold px-4 py-2 rounded-3 btn-primary cg-button-primary">Explore Projects <ArrowRightIcon className="ms-2"/></Link><a href={resumeUrl} download={resumeFileName} className="btn fw-semibold px-4 py-2 rounded-3 btn-outline-secondary cg-button-glass"><DownloadIcon/>Resume</a><Link scroll={false} href="/contact" className="btn fw-semibold px-4 py-2 rounded-3 btn-outline-secondary cg-button-glass">Get in Touch</Link></div>
      <div className="row g-3">{metrics.map(metric => <div key={metric.label} className="col-12 col-sm-6 col-md-3"><div className="cg-glass-surface rounded-4 p-3 text-center h-100"><div className={`fs-3 fw-bold mb-1 ${metric.color}`}>{metric.value}</div><div className="small fw-medium mb-1">{metric.label}</div><div className={`text-body-secondary ${styles['cg-home-metric-sub']}`}>{metric.sub}</div></div></div>)}</div>
    </section>
    <section className="mb-5 mt-5"><div className="text-center mb-5 mx-auto col-lg-8"><span className="badge rounded-pill px-3 py-1 mb-3 fw-medium bg-primary-subtle text-primary-emphasis border border-primary-subtle text-uppercase">Production Implementations</span><h2 className="fw-bold mb-3">Featured Engineering Showcase</h2><p className="text-body-secondary">Direct repositories, deployed single-page applications, and high-throughput microservices built with modern stacks.</p></div><div className="row g-4 mb-4">{projects.map(project => <div key={project.title} className="col-12 col-lg-6"><article className={`cg-glass-surface rounded-4 p-4 h-100 ${styles['cg-home-project-card']} ${styles[`cg-home-project-accent-${project.accent}`]}`}><div className="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2"><div className="d-flex flex-wrap gap-2">{project.badges.map(badge => <span key={badge.text} className={`badge rounded-pill fw-medium ${styles[`cg-home-project-badge-${badge.tone}`]}`}>{badge.text}</span>)}</div><a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-icon cg-button-icon p-0 flex-shrink-0" title="Live Demo"><ExternalIcon/></a></div><h3 className="fs-5 fw-semibold mb-1">{project.title}</h3><p className="text-body-secondary mb-2 small">{project.stack}</p><p className="text-body-secondary mb-3 small lh-base">{project.desc}</p><div className="d-flex flex-wrap gap-2 mb-3">{project.techs.map(tech => <span key={tech} className={`badge rounded-3 border bg-body-tertiary ${styles['cg-home-tech-badge']}`}>{tech}</span>)}</div><div className="d-flex justify-content-between align-items-center flex-wrap gap-2 pt-3 border-top border-secondary-subtle"><a href={project.url} target="_blank" rel="noopener noreferrer" className="fw-semibold small text-decoration-none link-primary">Live App →</a><div className="d-flex gap-2">{project.repos.map(repo => <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer" className={`badge rounded-pill fw-medium text-decoration-none bg-body-tertiary border cg-badge-neutral ${styles['cg-home-project-repo']}`}>{repo.label}</a>)}</div></div></article></div>)}</div><div className="text-center"><Link scroll={false} href="/projects" className="btn fw-semibold px-4 py-2 rounded-3 btn-outline-secondary cg-button-glass">View All 5 Production Projects (Including E-commerce) <ArrowRightIcon className="ms-2" size={14}/></Link></div></section>
    <section className="mb-5 mt-5"><div className="text-center mb-5 mx-auto col-lg-8"><span className="badge rounded-pill px-3 py-1 mb-3 fw-medium bg-primary-subtle text-primary-emphasis border border-primary-subtle text-uppercase">Technical Capabilities</span><h2 className="fw-bold mb-3">Core Engineering Domains</h2><p className="text-body-secondary">Complete mastery across the modern software lifecycle from responsive UI systems to high-concurrency protocols and cloud infrastructure.</p></div><div className="row g-4">{domains.map(domain => <div key={domain.title} className="col-12 col-sm-6 col-lg-4"><article className="cg-glass-surface rounded-4 p-4 h-100"><div className={`d-flex align-items-center justify-content-center rounded-3 mb-3 ${styles['cg-home-domain-icon']} bg-${domain.tone}-subtle text-${domain.tone} border border-${domain.tone}-subtle`}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{domain.icon}</svg></div><h3 className="fs-5 fw-semibold mb-2">{domain.title}</h3><p className="text-body-secondary mb-3 small lh-base">{domain.desc}</p><div className="d-flex flex-wrap gap-1">{domain.pills.map(pill => <span key={pill} className="badge rounded-pill fw-medium bg-body-tertiary border cg-badge-neutral">{pill}</span>)}</div></article></div>)}</div></section>
    <section className="mb-5 mt-5"><div className="cg-glass-surface rounded-4 p-4 p-md-5"><span className="badge rounded-pill px-3 py-1 mb-3 fw-medium bg-primary-subtle text-primary-emphasis border border-primary-subtle text-uppercase">Official Curriculum Vitae</span><h2 className="fs-3 fw-bold mb-2">Ready to Review the Full Resume?</h2><p className="text-body-secondary small lh-base mb-4">Contains complete documentation of 7+ years of commercial development at 1center (Salesmate CRM), Lucent Innovation, Infibeam, academic background from Ganpat University, and benchmarks.</p><div className="d-flex flex-column flex-sm-row flex-wrap gap-2"><a href={resumeUrl} download={resumeFileName} className="btn fw-semibold px-4 py-2 rounded-3 btn-primary cg-button-primary"><DownloadIcon/>Resume</a><a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn fw-semibold px-4 py-2 rounded-3 btn-outline-secondary cg-button-glass">Preview</a></div></div></section>
  </div></div></>
}
