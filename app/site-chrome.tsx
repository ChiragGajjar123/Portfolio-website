'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ResumeIcon, { DownloadIcon } from './resume-icon'

const links = [['/', 'Home'], ['/about', 'About'], ['/skills', 'Skills'], ['/projects', 'Projects'], ['/experience', 'Experience'], ['/contact', 'Contact']] as const

const iconProps = { className: 'link-cyan flex-shrink-0', width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, 'aria-hidden': true as const }
function LocationIcon(){return <svg {...iconProps}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
function EmailIcon(){return <svg {...iconProps}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
function PhoneIcon(){return <svg {...iconProps}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>}
function LinkedinIcon(){return <svg {...iconProps}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>}
function GithubIcon(){return <svg {...iconProps}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)
  const [routeProgress, setRouteProgress] = useState<'idle' | 'loading' | 'complete'>('idle')
  const pathname = usePathname()
  const previousPathname = useRef(pathname)
  const routeProgressRef = useRef<'idle' | 'loading' | 'complete'>('idle')
  const progressStartedAt = useRef(0)
  const progressTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const finishRouteProgress = useCallback(() => {
    if (routeProgressRef.current !== 'loading') return
    if (fallbackTimer.current) clearTimeout(fallbackTimer.current)
    const visibleFor = Date.now() - progressStartedAt.current
    const finish = () => {
      routeProgressRef.current = 'complete'
      setRouteProgress('complete')
      progressTimer.current = setTimeout(() => {
        routeProgressRef.current = 'idle'
        setRouteProgress('idle')
        progressTimer.current = null
      }, 220)
    }
    progressTimer.current = setTimeout(finish, Math.max(0, 180 - visibleFor))
  }, [])

  const startRouteProgress = useCallback(() => {
    if (progressTimer.current) clearTimeout(progressTimer.current)
    routeProgressRef.current = 'loading'
    progressStartedAt.current = Date.now()
    setRouteProgress('loading')
    fallbackTimer.current = setTimeout(finishRouteProgress, 8000)
  }, [finishRouteProgress])

  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a[href]')
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === '_blank' || anchor.hasAttribute('download')) return
      const destination = new URL(anchor.href, window.location.href)
      if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return
      startRouteProgress()
    }
    const handleHistoryNavigation = () => startRouteProgress()
    document.addEventListener('click', handleLinkClick, true)
    window.addEventListener('popstate', handleHistoryNavigation)
    return () => {
      document.removeEventListener('click', handleLinkClick, true)
      window.removeEventListener('popstate', handleHistoryNavigation)
      if (progressTimer.current) clearTimeout(progressTimer.current)
      if (fallbackTimer.current) clearTimeout(fallbackTimer.current)
    }
  }, [startRouteProgress])

  useEffect(() => {
    if (previousPathname.current === pathname) return
    previousPathname.current = pathname
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    if (routeProgressRef.current === 'idle') startRouteProgress()
    finishRouteProgress()
  }, [pathname, finishRouteProgress, startRouteProgress])

  useEffect(() => {
    const match = document.cookie.match(/(?:^|; )portfolio-theme=([^;]*)/)
    const value = match ? decodeURIComponent(match[1]) === 'dark' : false
    setDark(value)
    document.documentElement.className = value ? 'dark' : 'light'
    document.documentElement.setAttribute('data-bs-theme', value ? 'dark' : 'light')
  }, [])
  function toggleTheme() {
    const value = !dark
    setDark(value)
    document.documentElement.className = value ? 'dark' : 'light'
    document.documentElement.setAttribute('data-bs-theme', value ? 'dark' : 'light')
    document.cookie = `portfolio-theme=${value ? 'dark' : 'light'}; max-age=31536000; path=/; samesite=lax`
  }
  return <div className="app-layout">
    <div className={`cg-route-progress${routeProgress !== 'idle' ? ` is-${routeProgress}` : ''}`} aria-hidden="true"><div className="cg-route-progress-bar"/></div>
    <div className="position-fixed top-0 start-0 w-100 h-100 overflow-hidden bg-fixed" aria-hidden="true"><div className="position-absolute top-0 start-0 w-100 h-100 grid-mesh"/><div className="orb orb-blue"/><div className="orb orb-red"/><div className="orb orb-yellow"/><div className="orb orb-green"/></div>
    <header className="top-0 start-0 w-100 glass navbar-border header-sticky"><div className="container"><nav className="d-flex align-items-center justify-content-between py-2" aria-label="Main Navigation">
      <Link scroll={false} href="/" className="d-flex align-items-center gap-2 text-decoration-none" aria-label="Chirag Gajjar Home"><div className="brand-box"><span className="fw-bold text-white text-brand">CG</span></div><div className="d-flex flex-column"><span className="fw-semibold text-body text-brand">Chirag Gajjar</span><span className="text-body-secondary text-brand-sub">Software Engineer</span></div></Link>
      <ul className="d-none d-lg-flex list-unstyled gap-1 mb-0">{links.map(([href, label]) => <li key={href}><Link scroll={false} href={href} className={`nav-link px-2 py-1 rounded-3 cg-link text-decoration-none${pathname === href ? ' nav-active' : ''}`}>{label}</Link></li>)}</ul>
      <div className="d-flex align-items-center gap-2">
        <button type="button" className="btn btn-icon p-0 rounded-3 border" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={!dark} title={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggleTheme}>{dark ? <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> : <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}</button>
        <a href="/Chirag_Software_Engineer.pdf" download="Chirag_Software_Engineer.pdf" className="btn btn-icon p-0 rounded-3 border text-decoration-none" title="Download Chirag Gajjar's Resume (PDF)" aria-label="Download Resume"><ResumeIcon className="m-0" size={18}/></a>
        <button className="d-lg-none btn btn-icon p-0 rounded-3 border" aria-label="Toggle navigation menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> : <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>}</button>
      </div>
    </nav>{open && <div className="mobile-menu-panel d-lg-none"><ul className="list-unstyled mb-2 mobile-menu-list">{links.map(([href, label]) => <li key={href}><Link scroll={false} href={href} onClick={() => setOpen(false)} className={`d-block px-2 py-2 rounded-3 cg-link text-decoration-none${pathname === href ? ' nav-active-mobile' : ''}`}>{label}</Link></li>)}</ul><div className="mobile-menu-cta"><a href="/Chirag_Software_Engineer.pdf" download="Chirag_Software_Engineer.pdf" className="btn w-100 fw-semibold rounded-3 btn-gradient"><DownloadIcon/>Resume</a></div></div>}</div></header>
    <main className="main-content">{children}</main>
    <footer className="mt-5 pt-5 pb-3 position-relative footer-layer"><div className="container"><div className="glass rounded-4 p-4"><div className="row g-4">
      <div className="col-12 col-md-6 col-lg-3"><div className="d-flex align-items-center gap-2 mb-3"><div className="brand-box"><span className="fw-bold text-white text-brand">CG</span></div><div><h3 className="fs-6 fw-semibold mb-0">Chirag Gajjar</h3><p className="mb-0 small text-body-secondary">Software Engineer</p></div></div><p className="small text-body-secondary lh-sm">Software Engineer with 7+ years of experience delivering web applications across Frontend, Frameworks, Backend &amp; Protocols, Databases &amp; Caching, Cloud &amp; DevOps, and E-commerce.</p><div className="d-flex align-items-center gap-2 small text-body-secondary"><LocationIcon/><span>Gandhinagar, Gujarat, India</span></div></div>
      <div className="col-12 col-md-6 col-lg-3"><h4 className="small fw-semibold text-uppercase text-body-secondary mb-3 footer-heading">Navigation</h4><ul className="list-unstyled">{links.map(([href, label]) => <li className="mb-2" key={href}><Link scroll={false} href={href} className="small cg-link text-decoration-none">{href === '/about' ? 'About Journey' : href === '/skills' ? 'Technical Skills' : href === '/projects' ? 'Featured Projects' : href === '/experience' ? 'Career Experience' : href === '/contact' ? 'Get in Touch' : label}</Link></li>)}</ul></div>
      <div className="col-12 col-md-6 col-lg-3"><h4 className="small fw-semibold text-uppercase text-body-secondary mb-3 footer-heading">Direct Connect</h4><ul className="list-unstyled"><li className="mb-2"><a href="mailto:chiraggajjar421@gmail.com" className="small cg-link text-decoration-none d-inline-flex align-items-center gap-2"><EmailIcon/><span>chiraggajjar421@gmail.com</span></a></li><li className="mb-2"><a href="tel:8401091573" className="small cg-link text-decoration-none d-inline-flex align-items-center gap-2"><PhoneIcon/><span>+91 8401091573</span></a></li><li className="mb-2"><a href="https://www.linkedin.com/in/chirag-gajjar-0ba075101" target="_blank" rel="noopener noreferrer" className="small cg-link text-decoration-none d-inline-flex align-items-center gap-2"><LinkedinIcon/><span>LinkedIn Profile</span></a></li><li className="mb-2"><a href="https://github.com/ChiragGajjar123?tab=repositories" target="_blank" rel="noopener noreferrer" className="small cg-link text-decoration-none d-inline-flex align-items-center gap-2"><GithubIcon/><span>GitHub Repositories</span></a></li></ul></div>
      <div className="col-12 col-md-6 col-lg-3"><h4 className="small fw-semibold text-uppercase text-body-secondary mb-3 footer-heading">Resume</h4><p className="small text-body-secondary mb-3">Download the complete PDF version of Chirag Gajjar's resume.</p><div className="d-flex flex-row align-items-center gap-3"><a href="/Chirag_Software_Engineer.pdf" download="Chirag_Software_Engineer.pdf" className="btn btn-icon p-0 rounded-3 border text-decoration-none" title="Download Resume" aria-label="Download Resume"><ResumeIcon className="m-0" size={16}/></a><a href="/Chirag_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer" className="small fw-medium link-cyan">Preview in Browser →</a></div></div>
    </div></div><div className="text-center pt-4 mt-4 border-top border-subtle"><p className="small text-body-secondary mb-0">© {new Date().getFullYear()} Chirag Gajjar</p></div></div></footer>
  </div>
}
