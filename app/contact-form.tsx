'use client'

import { useActionState, useState, useEffect, useRef } from 'react'
import { submitContactAction, type ContactFormState } from './actions/contact'
import { ResumeIcon, DownloadIcon, EmailIcon, PhoneIcon, LocationIcon, LinkedinIcon, GithubIcon, CopyIcon, CheckIcon } from './icons'
import { email, phoneDisplay, phoneHref, linkedinUrl, githubReposUrl, resumeUrl, resumeFileName } from './site-config'
import styles from './contact-form.module.scss'

const initialState: ContactFormState = { status: 'idle', message: '' }

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactAction, initialState)
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | ''>('')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
    }
  }, [state])

  async function handleCopy(value: string, type: 'email' | 'phone') {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value)
      } else if (typeof document !== 'undefined') {
        const textarea = document.createElement('textarea')
        textarea.value = value
        textarea.setAttribute('readonly', '')
        textarea.className = 'visually-hidden'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      setCopiedType(type)
      setTimeout(() => setCopiedType(''), 2200)
    } catch {
      // Graceful fallback
    }
  }

  return (
    <div className="row g-4">
      <div className="col-12 col-lg-5">
        <div className="bg-body-tertiary border shadow-sm rounded-4 p-4 mb-4">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="spinner-grow spinner-grow-sm text-success"/>
            <span className="small fw-semibold text-success">Actively Open to Opportunities</span>
          </div>
          <p className="text-body-secondary small mb-0 lh-base">Available for Software Engineering positions using Angular, React, CSS, Node.js/Express, and high-concurrency Go systems.</p>
        </div>
        <section className="bg-body-tertiary border shadow-sm rounded-4 p-3 p-sm-4 mb-4">
          <h2 className="fs-5 fw-semibold mb-3">Contact Details</h2>
          <div className="d-flex align-items-center justify-content-between gap-2 gap-sm-3 py-3 border-bottom border-secondary-subtle">
            <div className="d-flex align-items-center justify-content-center rounded-3 p-2 bg-primary-subtle text-primary"><EmailIcon/></div>
            <div className="flex-grow-1 min-w-0 me-1 me-sm-2">
              <span className="small text-body-secondary d-block">Direct Email</span>
              <a href={`mailto:${email}`} className="small fw-medium text-decoration-none text-break link-primary">{email}</a>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(email, 'email')}
              className={`btn ${styles['cg-copy-button']} ${copiedType === 'email' ? styles['cg-copy-button-copied'] : ''}`}
              title={copiedType === 'email' ? 'Copied email to clipboard!' : 'Copy email'}
              aria-label={copiedType === 'email' ? 'Email copied to clipboard' : 'Copy email to clipboard'}
            >
              {copiedType === 'email' ? <CheckIcon size={16}/> : <CopyIcon size={16}/>}
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 gap-sm-3 py-3 border-bottom border-secondary-subtle">
            <div className="d-flex align-items-center justify-content-center rounded-3 p-2 bg-success-subtle text-success"><PhoneIcon/></div>
            <div className="flex-grow-1 min-w-0 me-1 me-sm-2">
              <span className="small text-body-secondary d-block">Phone / WhatsApp</span>
              <a href={phoneHref} className="small fw-medium text-decoration-none link-primary">{phoneDisplay}</a>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(phoneDisplay, 'phone')}
              className={`btn ${styles['cg-copy-button']} ${copiedType === 'phone' ? styles['cg-copy-button-copied'] : ''}`}
              title={copiedType === 'phone' ? 'Copied phone number to clipboard!' : 'Copy phone number'}
              aria-label={copiedType === 'phone' ? 'Phone number copied to clipboard' : 'Copy phone number to clipboard'}
            >
              {copiedType === 'phone' ? <CheckIcon size={16}/> : <CopyIcon size={16}/>}
            </button>
          </div>
          <div className="d-flex align-items-center gap-2 gap-sm-3 py-3">
            <div className="d-flex align-items-center justify-content-center rounded-3 p-2 bg-danger-subtle text-danger"><LocationIcon/></div>
            <div className="min-w-0 flex-grow-1">
              <span className="small text-body-secondary d-block">Location</span>
              <span className="small fw-medium">Gandhinagar, Ahmedabad, Gujarat, India</span>
            </div>
          </div>
          <div className="row g-2 mt-3 pt-3 border-top border-secondary-subtle">
            <div className="col-12 col-sm-6">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center gap-2 p-2 rounded-3 link-primary text-decoration-none small fw-medium bg-body-tertiary border "><LinkedinIcon/>LinkedIn</a>
            </div>
            <div className="col-12 col-sm-6">
              <a href={githubReposUrl} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center gap-2 p-2 rounded-3 link-primary text-decoration-none small fw-medium bg-body-tertiary border "><GithubIcon/>GitHub</a>
            </div>
          </div>
        </section>
        <div className="bg-body-tertiary border shadow-sm rounded-4 p-4">
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-3 p-2 bg-primary-subtle text-primary">
              <ResumeIcon className="m-0" size={22}/>
            </div>
            <div className="d-grid min-w-0">
              <h3 className="fs-6 fw-semibold mb-0 text-truncate">{resumeFileName}</h3>
              <p className="text-body-secondary mb-0 small">Official Curriculum Vitae • 4-Page PDF</p>
            </div>
          </div>
          <div className="d-flex gap-2">
            <a href={resumeUrl} download={resumeFileName} className="btn flex-grow-1 fw-semibold rounded-3 btn-primary cg-button-primary"><DownloadIcon/>Resume</a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn flex-grow-1 fw-semibold rounded-3 btn-outline-secondary cg-button-glass">Preview</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-7">
        <section className="bg-body-tertiary border shadow-sm rounded-4 p-4 p-md-5">
          <h2 className="fs-4 fw-bold mb-1">Send a Message</h2>
          <p className="text-body-secondary small mb-4">Your inquiry will be delivered directly to Chirag&apos;s inbox via Resend.</p>
          <form ref={formRef} action={formAction} noValidate>
            <div className="visually-hidden" aria-hidden="true">
              <label>Leave this field empty<input tabIndex={-1} autoComplete="off" name="website"/></label>
            </div>
            <div className="row g-3 mb-3">
              <div className="col-12 col-sm-6">
                <label htmlFor="name" className="form-label small fw-medium">Your Name <span className="text-danger">*</span></label>
                <input id="name" name="name" required maxLength={100} placeholder="e.g. Alex Morgan" className="form-control rounded-3"/>
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="email" className="form-label small fw-medium">Your Email <span className="text-danger">*</span></label>
                <input id="email" name="email" type="email" required maxLength={150} placeholder="alex@company.com" className="form-control rounded-3"/>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label small fw-medium">Subject</label>
              <input id="subject" name="subject" maxLength={150} placeholder="Subject or brief topic of your message..." className="form-control rounded-3"/>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label small fw-medium">Your Message <span className="text-danger">*</span></label>
              <textarea id="message" name="message" required minLength={5} maxLength={5000} rows={5} placeholder="Share details about the role, project requirements, timeline, or team..." className={`form-control rounded-3 ${styles['cg-message-field']}`}/>
            </div>
            {state.status === 'success' && <div className="alert d-flex align-items-center gap-2 rounded-3 mb-3 alert-success">✓ <span>{state.message}</span></div>}
            {state.status === 'error' && <div className="alert d-flex align-items-center gap-2 rounded-3 mb-3 alert-danger">ⓘ <span>{state.message}</span></div>}
            <button type="submit" className="btn w-100 fw-semibold py-2 rounded-3 btn-primary cg-button-primary" disabled={isPending}>
              {isPending ? 'Sending via Server Action…' : 'Dispatch Message to Chirag →'}
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
