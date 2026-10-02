// Static footer — server component so it stays out of the client JS bundle.
import Link from 'next/link'
import { email, phoneDisplay, phoneHref, linkedinUrl, githubReposUrl, navLinks, resumeUrl, resumeFileName } from './site-config'
import { LocationIcon, EmailIcon, PhoneIcon, LinkedinIcon, GithubIcon, ResumeIcon } from './icons'

const footerIcon = { className: 'link-cyan flex-shrink-0', size: 14 } as const

const footerLabels: Record<string, string> = {
  '/about': 'About Journey',
  '/skills': 'Technical Skills',
  '/projects': 'Featured Projects',
  '/experience': 'Career Experience',
  '/contact': 'Get in Touch'
}

export default function Footer() {
  return <footer className="mt-5 pt-5 pb-3 position-relative footer-layer"><div className="container"><div className="glass rounded-4 p-4"><div className="row g-4">
    <div className="col-12 col-md-6 col-lg-3"><div className="d-flex align-items-center gap-2 mb-3"><div className="brand-box"><span className="fw-bold text-white text-brand">CG</span></div><div><h3 className="fs-6 fw-semibold mb-0">Chirag Gajjar</h3><p className="mb-0 small text-body-secondary">Software Engineer</p></div></div><p className="small text-body-secondary lh-sm">Software Engineer with 7+ years of experience delivering web applications across Frontend, Frameworks, Backend &amp; Protocols, Databases &amp; Caching, Cloud &amp; DevOps, and E-commerce.</p><div className="d-flex align-items-center gap-2 small text-body-secondary"><LocationIcon className="link-cyan flex-shrink-0" size={14}/><span>Gandhinagar, Gujarat, India</span></div></div>
    <div className="col-12 col-md-6 col-lg-3"><h4 className="small fw-semibold text-uppercase text-body-secondary mb-3 footer-heading">Navigation</h4><ul className="list-unstyled">{navLinks.map(link => <li className="mb-2" key={link.href}><Link scroll={false} href={link.href} className="small cg-link text-decoration-none">{footerLabels[link.href] ?? link.label}</Link></li>)}</ul></div>
    <div className="col-12 col-md-6 col-lg-3"><h4 className="small fw-semibold text-uppercase text-body-secondary mb-3 footer-heading">Direct Connect</h4><ul className="list-unstyled"><li className="mb-2"><a href={`mailto:${email}`} className="small cg-link text-decoration-none d-inline-flex align-items-center gap-2"><EmailIcon {...footerIcon}/><span>{email}</span></a></li><li className="mb-2"><a href={phoneHref} className="small cg-link text-decoration-none d-inline-flex align-items-center gap-2"><PhoneIcon {...footerIcon}/><span>{phoneDisplay}</span></a></li><li className="mb-2"><a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="small cg-link text-decoration-none d-inline-flex align-items-center gap-2"><LinkedinIcon {...footerIcon}/><span>LinkedIn Profile</span></a></li><li className="mb-2"><a href={githubReposUrl} target="_blank" rel="noopener noreferrer" className="small cg-link text-decoration-none d-inline-flex align-items-center gap-2"><GithubIcon {...footerIcon}/><span>GitHub Repositories</span></a></li></ul></div>
    <div className="col-12 col-md-6 col-lg-3"><h4 className="small fw-semibold text-uppercase text-body-secondary mb-3 footer-heading">Resume</h4><p className="small text-body-secondary mb-3">Download the complete PDF version of Chirag Gajjar's resume.</p><div className="d-flex flex-row align-items-center gap-3"><a href={resumeUrl} download={resumeFileName} className="btn btn-icon p-0 rounded-3 border text-decoration-none" title="Download Resume" aria-label="Download Resume"><ResumeIcon className="m-0" size={16}/></a><a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="small fw-medium link-cyan">Preview in Browser →</a></div></div>
  </div></div><div className="text-center pt-4 mt-4 border-top border-subtle"><p className="small text-body-secondary mb-0">© {new Date().getFullYear()} Chirag Gajjar</p></div></div></footer>
}
