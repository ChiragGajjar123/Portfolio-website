'use client'

import { FormEvent, useState } from 'react'
import ResumeIcon, { DownloadIcon } from './resume-icon'

const contactIconProps = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, 'aria-hidden': true as const }
function EmailIcon() { return <svg {...contactIconProps}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> }
function PhoneIcon() { return <svg {...contactIconProps}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> }
function LocationIcon() { return <svg {...contactIconProps}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> }
function CopyIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> }
function LinkedinIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> }
function GithubIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> }

const email = 'chiraggajjar421@gmail.com'
const phone = '+91 8401091573'
const linkedin = 'https://www.linkedin.com/in/chirag-gajjar-0ba075101'
const github = 'https://github.com/ChiragGajjar123?tab=repositories'

export default function ContactForm() {
  const [status, setStatus] = useState<'success' | 'error' | ''>('')
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState(false)
  const [copied, setCopied] = useState('')

  async function copy(value: string, type: string) {
    await navigator.clipboard.writeText(value)
    setCopied(type)
    window.setTimeout(() => setCopied(''), 2500)
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formElement = event.currentTarget
    const body = Object.fromEntries(new FormData(formElement))
    setBusy(true); setStatus(''); setMessage('')
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const data = await response.json()
      setStatus(data.success ? 'success' : 'error')
      setMessage(data.message || (data.success ? 'Thank you! Your message has been delivered.' : 'Failed to send message.'))
      if (data.success) formElement.reset()
    } catch {
      setStatus('error'); setMessage('An unexpected error occurred.')
    } finally { setBusy(false) }
  }

  return <div className="row g-4">
    <div className="col-12 col-lg-5">
      <div className="glass rounded-4 p-4 mb-4"><div className="d-flex align-items-center gap-2 mb-3"><span className="pulse-dot"/><span className="small fw-semibold text-success">Actively Open to Opportunities</span></div><p className="text-body-secondary small mb-0 body-text-sm">Available for Software Engineering positions using Angular, React, CSS, Node.js/Express, and high-concurrency Go systems.</p></div>
      <section className="glass rounded-4 p-4 mb-4"><h2 className="fs-5 fw-semibold mb-3">Contact Details</h2>
        <div className="d-flex align-items-center gap-3 py-3 border-bottom border-subtle"><div className="icon-box" style={{background:'var(--cg-google-blue-container)',color:'var(--cg-google-blue)'}}><EmailIcon/></div><div className="flex-grow-1 min-w-0"><span className="small text-body-secondary d-block">Direct Email</span><a href={`mailto:${email}`} className="small fw-medium text-decoration-none text-break link-cyan">{email}</a></div><button onClick={() => copy(email, 'email')} className="btn p-0 border-0 bg-transparent flex-shrink-0 text-muted" title={copied === 'email' ? 'Copied!' : 'Copy email'} aria-label="Copy email">{copied === 'email' ? <span className="small fw-semibold text-success">Copied!</span> : <CopyIcon/>}</button></div>
        <div className="d-flex align-items-center gap-3 py-3 border-bottom border-subtle"><div className="icon-box" style={{background:'var(--cg-google-green-container)',color:'var(--cg-google-green)'}}><PhoneIcon/></div><div className="flex-grow-1 min-w-0"><span className="small text-body-secondary d-block">Phone / WhatsApp</span><a href="tel:+918401091573" className="small fw-medium text-decoration-none link-cyan">{phone}</a></div><button onClick={() => copy(phone, 'phone')} className="btn p-0 border-0 bg-transparent flex-shrink-0 text-muted" title={copied === 'phone' ? 'Copied!' : 'Copy phone'} aria-label="Copy phone">{copied === 'phone' ? <span className="small fw-semibold text-success">Copied!</span> : <CopyIcon/>}</button></div>
        <div className="d-flex align-items-center gap-3 py-3"><div className="icon-box" style={{background:'var(--cg-google-red-container)',color:'var(--cg-google-red)'}}><LocationIcon/></div><div><span className="small text-body-secondary d-block">Location</span><span className="small fw-medium">Gandhinagar, Ahmedabad, Gujarat, India</span></div></div>
        <div className="row g-2 mt-3 pt-3 border-top border-subtle"><div className="col-12 col-sm-6"><a href={linkedin} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center gap-2 p-2 rounded-3 cg-link text-decoration-none small fw-medium badge-chip social-link"><LinkedinIcon/>LinkedIn</a></div><div className="col-12 col-sm-6"><a href={github} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center gap-2 p-2 rounded-3 cg-link text-decoration-none small fw-medium badge-chip social-link"><GithubIcon/>GitHub</a></div></div>
      </section>
      <div className="glass rounded-4 p-4"><div className="d-flex align-items-center gap-3 mb-4"><div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-3" style={{width:'2.75rem',height:'2.75rem',background:'var(--cg-google-blue-container)',color:'var(--cg-google-blue)'}}><ResumeIcon className="m-0" size={22}/></div><div className="d-grid min-w-0"><h3 className="fs-6 fw-semibold mb-0 text-truncate">Chirag_Software_Engineer.pdf</h3><p className="text-body-secondary mb-0 text-xs">Official Curriculum Vitae • 4-Page PDF</p></div></div><div className="d-flex gap-2"><a href="/Chirag_Software_Engineer.pdf" download="Chirag_Software_Engineer.pdf" className="btn flex-grow-1 fw-semibold rounded-3 btn-gradient"><DownloadIcon/>Resume</a><a href="/Chirag_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer" className="btn flex-grow-1 fw-semibold rounded-3 glass btn-glass">Preview</a></div></div>
    </div>
    <div className="col-12 col-lg-7"><section className="glass rounded-4 p-4 p-md-5"><h2 className="fs-4 fw-bold mb-1">Send a Message</h2><p className="text-body-secondary small mb-4">Your inquiry will be delivered directly to Chirag's inbox via Resend.</p><form onSubmit={submit} noValidate><div className="row g-3 mb-3"><div className="col-12 col-sm-6"><label htmlFor="name" className="form-label small fw-medium">Your Name <span className="text-danger">*</span></label><input id="name" name="name" required placeholder="e.g. Alex Morgan" className="form-control form-control-glass rounded-3"/></div><div className="col-12 col-sm-6"><label htmlFor="email" className="form-label small fw-medium">Your Email <span className="text-danger">*</span></label><input id="email" name="email" type="email" required placeholder="alex@company.com" className="form-control form-control-glass rounded-3"/></div></div><div className="mb-3"><label htmlFor="subject" className="form-label small fw-medium">Subject</label><input id="subject" name="subject" placeholder="Subject or brief topic of your message..." className="form-control form-control-glass rounded-3"/></div><div className="mb-3"><label htmlFor="message" className="form-label small fw-medium">Your Message <span className="text-danger">*</span></label><textarea id="message" name="message" required minLength={5} rows={5} placeholder="Share details about the role, project requirements, timeline, or team..." className="form-control form-control-glass rounded-3 textarea-resize"/></div>{status === 'success' && <div className="alert d-flex align-items-center gap-2 rounded-3 mb-3 alert-success">✓ <span>{message}</span></div>}{status === 'error' && <div className="alert d-flex align-items-center gap-2 rounded-3 mb-3 alert-error">ⓘ <span>{message}</span></div>}<button type="submit" className="btn w-100 fw-semibold py-2 rounded-3 btn-gradient" disabled={busy}>{busy ? 'Sending via Resend API…' : 'Dispatch Message to Chirag →'}</button></form></section></div>
  </div>
}
