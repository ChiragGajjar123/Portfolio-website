'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks, resumeUrl, resumeFileName } from './site-config'
import { ResumeIcon, DownloadIcon } from './icons'
import styles from './site-chrome.module.scss'

type RouteProgressControls = {
  start: () => void
  finish: () => void
}

const RouteProgressContext = createContext<RouteProgressControls | null>(null)

export function useRouteProgress() {
  const controls = useContext(RouteProgressContext)
  if (!controls) throw new Error('useRouteProgress must be used inside SiteChrome')
  return controls
}

export default function SiteChrome({ children, footer }: { children: React.ReactNode; footer: React.ReactNode }) {
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
  const routeProgressControls = useMemo(
    () => ({ start: startRouteProgress, finish: finishRouteProgress }),
    [startRouteProgress, finishRouteProgress]
  )

  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a[href]')
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === '_blank' || anchor.hasAttribute('download')) return
      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return
      const destination = new URL(anchor.href, window.location.href)
      const currentHref = window.location.href
      if (destination.origin !== window.location.origin || destination.href === currentHref) return
      startRouteProgress()
      const finishWhenUrlChanges = () => {
        if (window.location.href !== currentHref) {
          finishRouteProgress()
          return
        }
        if (routeProgressRef.current === 'loading') window.requestAnimationFrame(finishWhenUrlChanges)
      }
      window.requestAnimationFrame(finishWhenUrlChanges)
    }
    const handleHistoryNavigation = () => {
      startRouteProgress()
      finishRouteProgress()
    }
    document.addEventListener('click', handleLinkClick, true)
    window.addEventListener('popstate', handleHistoryNavigation)
    return () => {
      document.removeEventListener('click', handleLinkClick, true)
      window.removeEventListener('popstate', handleHistoryNavigation)
      if (progressTimer.current) clearTimeout(progressTimer.current)
      if (fallbackTimer.current) clearTimeout(fallbackTimer.current)
    }
  }, [finishRouteProgress, startRouteProgress])

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
    const isDark = document.documentElement.classList.contains('dark')
    setDark(isDark)
  }, [])

  function toggleTheme() {
    const value = !dark
    setDark(value)
    document.documentElement.className = value ? 'dark' : 'light'
    document.documentElement.setAttribute('data-bs-theme', value ? 'dark' : 'light')
    // Secure works in production (HTTPS); localhost dev is exempt in modern browsers.
    document.cookie = `portfolio-theme=${value ? 'dark' : 'light'}; max-age=31536000; path=/; samesite=lax${location.protocol === 'https:' ? '; secure' : ''}`
  }

  return <RouteProgressContext.Provider value={routeProgressControls}><div className={styles['cg-site-chrome']}><div className={`${styles['cg-route-progress']}${routeProgress === 'loading' ? ` ${styles['cg-is-loading']}` : routeProgress === 'complete' ? ` ${styles['cg-is-complete']}` : ''}`} aria-hidden="true"><div className={styles['cg-route-progress-bar']}/></div>
    <div className={`position-fixed top-0 start-0 w-100 h-100 overflow-hidden ${styles['cg-background']}`} aria-hidden="true"><div className={`position-absolute top-0 start-0 w-100 h-100 ${styles['cg-grid-mesh']}`}/><div className={`${styles['cg-orb']} ${styles['cg-orb-blue']}`}/><div className={`${styles['cg-orb']} ${styles['cg-orb-red']}`}/><div className={`${styles['cg-orb']} ${styles['cg-orb-yellow']}`}/><div className={`${styles['cg-orb']} ${styles['cg-orb-green']}`}/></div>
    <header className="sticky-top top-0 start-0 w-100 cg-glass-header"><div className="container"><nav className="d-flex align-items-center justify-content-between py-2" aria-label="Main Navigation">
      <Link scroll={false} href="/" className="d-flex align-items-center gap-2 text-decoration-none" aria-label="Chirag Gajjar Home"><span className={`d-flex align-items-center justify-content-center rounded-3 text-white fw-bold small ${styles['cg-brand-mark']}`}>CG</span><span className="d-flex flex-column"><span className={`fw-semibold text-body ${styles['cg-brand-name']}`}>Chirag Gajjar</span><span className={`text-body-secondary ${styles['cg-brand-subtitle']}`}>Software Engineer</span></span></Link>
      <ul className="d-none d-lg-flex list-unstyled gap-1 mb-0">{navLinks.map(link => <li key={link.href}><Link scroll={false} href={link.href} className={`nav-link px-2 py-1 rounded-3 ${styles['cg-nav-link']}`} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link></li>)}</ul>
      <div className="d-flex align-items-center gap-2">
        <button type="button" className="btn btn-icon cg-button-icon p-0" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={!dark} title={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggleTheme}>{dark ? <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> : <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}</button>
        <a href={resumeUrl} download={resumeFileName} className="btn btn-icon cg-button-icon p-0 text-decoration-none" title="Download Chirag Gajjar's Resume (PDF)" aria-label="Download Resume"><ResumeIcon className="m-0" size={18}/></a>
        <button className={`d-lg-none btn btn-icon cg-button-icon p-0 ${styles['cg-mobile-menu-toggle']}`} aria-label="Toggle navigation menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> : <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>}</button>
      </div>
    </nav>{open && <div className="d-lg-none border-top pt-3"><ul className={`list-unstyled ${styles['cg-mobile-menu-list']}`}>{navLinks.map(link => <li key={link.href}><Link scroll={false} href={link.href} onClick={() => setOpen(false)} className={`d-block px-2 py-2 rounded-3 nav-link ${styles['cg-nav-link']}`} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link></li>)}</ul><div className="border-top border-secondary-subtle pt-3 pb-3"><a href={resumeUrl} download={resumeFileName} className="btn btn-primary cg-button-primary w-100 fw-semibold rounded-3"><DownloadIcon/>Resume</a></div></div>}</div></header>
    <main className="main-content">{children}</main>{footer}</div></RouteProgressContext.Provider>
}
