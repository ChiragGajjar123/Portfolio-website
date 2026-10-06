'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks, resumeUrl, resumeFileName } from './site-config'
import { ResumeIcon, DownloadIcon } from './icons'

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
    window.scrollTo({ top: 0, left: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
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
    // Secure works in production (HTTPS); localhost dev is exempt in modern browsers.
    document.cookie = `portfolio-theme=${value ? 'dark' : 'light'}; max-age=31536000; path=/; samesite=lax${location.protocol === 'https:' ? '; secure' : ''}`
  }

  return <><div className={`cg-route-progress${routeProgress !== 'idle' ? ` is-${routeProgress}` : ''}`} aria-hidden="true"><div className="cg-route-progress-bar"/></div>
    <div className="position-fixed top-0 start-0 w-100 h-100 overflow-hidden bg-fixed" aria-hidden="true"><div className="position-absolute top-0 start-0 w-100 h-100 grid-mesh"/><div className="orb orb-blue"/><div className="orb orb-red"/><div className="orb orb-yellow"/><div className="orb orb-green"/></div>
    <header className="top-0 start-0 w-100 glass navbar-border header-sticky"><div className="container"><nav className="d-flex align-items-center justify-content-between py-2" aria-label="Main Navigation">
      <Link scroll={false} href="/" className="d-flex align-items-center gap-2 text-decoration-none" aria-label="Chirag Gajjar Home"><div className="brand-box"><span className="fw-bold text-white text-brand">CG</span></div><div className="d-flex flex-column"><span className="fw-semibold text-body text-brand">Chirag Gajjar</span><span className="text-body-secondary text-brand-sub">Software Engineer</span></div></Link>
      <ul className="d-none d-lg-flex list-unstyled gap-1 mb-0">{navLinks.map(link => <li key={link.href}><Link scroll={false} href={link.href} className={`nav-link px-2 py-1 rounded-3 cg-link text-decoration-none${pathname === link.href ? ' nav-active' : ''}`}>{link.label}</Link></li>)}</ul>
      <div className="d-flex align-items-center gap-2">
        <button type="button" className="btn btn-icon p-0 rounded-3 border" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={!dark} title={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggleTheme}>{dark ? <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> : <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}</button>
        <a href={resumeUrl} download={resumeFileName} className="btn btn-icon p-0 rounded-3 border text-decoration-none" title="Download Chirag Gajjar's Resume (PDF)" aria-label="Download Resume"><ResumeIcon className="m-0" size={18}/></a>
        <button className="d-lg-none cg-mobile-nav-toggle btn btn-icon p-0 rounded-3 border" aria-label="Toggle navigation menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> : <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>}</button>
      </div>
    </nav>{open && <div className="mobile-menu-panel d-lg-none"><ul className="list-unstyled mb-2 mobile-menu-list">{navLinks.map(link => <li key={link.href}><Link scroll={false} href={link.href} onClick={() => setOpen(false)} className={`d-block px-2 py-2 rounded-3 cg-link text-decoration-none${pathname === link.href ? ' nav-active-mobile' : ''}`}>{link.label}</Link></li>)}</ul><div className="mobile-menu-cta"><a href={resumeUrl} download={resumeFileName} className="btn w-100 fw-semibold rounded-3 btn-gradient"><DownloadIcon/>Resume</a></div></div>}</div></header>
    <main className="main-content">{children}</main></>
}
