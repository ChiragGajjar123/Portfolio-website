'use server'

import { headers } from 'next/headers'
import { email as recipientEmail, siteUrl } from '../site-config'

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!)

const LIMITS = { name: 100, email: 150, subject: 150, message: 5000 }
const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX_REQUESTS = 8
const attempts = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  if (attempts.size > 1000) {
    for (const [key, entry] of attempts) if (entry.resetAt <= now) attempts.delete(key)
  }
  const entry = attempts.get(ip)
  if (!entry || entry.resetAt <= now) {
    attempts.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > RATE_MAX_REQUESTS
}

function buildContactEmail({ name, email, subject, message }: { name: string; email: string; subject: string; message: string }) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>')
  const html = `<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="margin:0;padding:0;background-color:#f1f3f4;color:#202124;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">New portfolio message from ${safeName}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f1f3f4;width:100%;">
      <tr><td align="center" style="padding:36px 16px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;background-color:#ffffff;border:1px solid #dadce0;border-radius:16px;overflow:hidden;">
          <tr><td style="height:5px;background-color:#4285f4;font-size:0;line-height:0;">&nbsp;</td></tr>
          <tr><td style="padding:28px 32px 20px;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr>
              <td align="center" valign="middle" width="42" height="42" style="width:42px;height:42px;border-radius:12px;background-color:#4285f4;color:#ffffff;font-size:15px;font-weight:700;">CG</td>
              <td style="padding-left:12px;color:#202124;font-size:15px;font-weight:700;">Chirag Gajjar<br><span style="color:#5f6368;font-size:12px;font-weight:400;">Software Engineer</span></td>
            </tr></table>
          </td></tr>
          <tr><td style="padding:8px 32px 28px;">
            <p style="margin:0 0 8px;color:#1a73e8;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Portfolio contact</p>
            <h1 style="margin:0 0 12px;color:#202124;font-size:24px;line-height:1.3;">New message from ${safeName}</h1>
            <p style="margin:0;color:#5f6368;font-size:14px;line-height:1.6;">Someone reached out through your portfolio contact form.</p>
          </td></tr>
          <tr><td style="padding:0 32px 24px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background-color:#f8f9fa;border:1px solid #e8eaed;border-radius:12px;">
              <tr><td style="padding:16px 18px;border-bottom:1px solid #e8eaed;">
                <p style="margin:0 0 5px;color:#5f6368;font-size:11px;font-weight:700;letter-spacing:.7px;text-transform:uppercase;">From</p>
                <p style="margin:0;color:#202124;font-size:14px;line-height:1.5;">${safeName} &lt;<a href="mailto:${safeEmail}" style="color:#1a73e8;text-decoration:none;">${safeEmail}</a>&gt;</p>
              </td></tr>
              <tr><td style="padding:16px 18px;">
                <p style="margin:0 0 5px;color:#5f6368;font-size:11px;font-weight:700;letter-spacing:.7px;text-transform:uppercase;">Subject</p>
                <p style="margin:0;color:#202124;font-size:14px;line-height:1.5;">${safeSubject}</p>
              </td></tr>
            </table>
          </td></tr>
          <tr><td style="padding:0 32px 30px;">
            <p style="margin:0 0 10px;color:#5f6368;font-size:11px;font-weight:700;letter-spacing:.7px;text-transform:uppercase;">Message</p>
            <div style="padding:18px;background-color:#ffffff;border:1px solid #dadce0;border-radius:12px;color:#3c4043;font-size:14px;line-height:1.7;white-space:normal;">${safeMessage}</div>
            <p style="margin:18px 0 0;color:#5f6368;font-size:13px;line-height:1.5;">Reply directly to this email to respond to ${safeName}.</p>
          </td></tr>
          <tr><td style="padding:18px 32px;background-color:#f8f9fa;border-top:1px solid #e8eaed;color:#80868b;font-size:12px;line-height:1.5;">Sent from the contact form on ${new URL(siteUrl).host}</td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`
  const text = `New portfolio message from ${name}\n\nFrom: ${name} <${email}>\nSubject: ${subject}\n\n${message}\n\nReply directly to this email to respond.`
  return { html, text }
}

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitContactAction(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const headerList = await headers()
  const ip = headerList.get('x-forwarded-for')?.split(',')[0]?.trim() || headerList.get('x-real-ip') || 'unknown'

  if (isRateLimited(ip)) {
    return {
      status: 'error',
      message: 'Too many messages from this address. Please try again later.'
    }
  }

  const website = (formData.get('website') as string | null) || ''
  if (website.trim() !== '') {
    return {
      status: 'success',
      message: 'Thank you! Your message has been received.'
    }
  }

  const str = (value: FormDataEntryValue | null, max: number) =>
    typeof value === 'string' ? value.trim().slice(0, max) : ''

  const name = str(formData.get('name'), LIMITS.name)
  const email = str(formData.get('email'), LIMITS.email)
  const subject = str(formData.get('subject'), LIMITS.subject) || `Portfolio Message from ${name}`
  const message = str(formData.get('message'), LIMITS.message)

  if (!name) return { status: 'error', message: 'Name is required' }
  if (!email || !EMAIL_PATTERN.test(email)) return { status: 'error', message: 'A valid email address is required' }
  if (message.length < 5) return { status: 'error', message: 'Message must be at least 5 characters long' }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[CONTACT FORM SERVER ACTION SUBMISSION]', { name, email, subject, message, destination: recipientEmail })
    return {
      status: 'success',
      message: 'Thank you! Your message has been received. Add RESEND_API_KEY to enable email delivery.'
    }
  }

  const emailContent = buildContactEmail({ name, email, subject, message })
  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Chirag Portfolio <onboarding@resend.dev>',
        to: [recipientEmail],
        reply_to: email,
        subject: `[Portfolio Inquiry] ${subject}`,
        html: emailContent.html,
        text: emailContent.text
      }),
      signal: AbortSignal.timeout(10_000)
    })
    const response = await result.json().catch(() => ({}))
    if (!result.ok) {
      return {
        status: 'error',
        message: response.message || 'Failed to dispatch email via Resend. Please try direct email.'
      }
    }
    return {
      status: 'success',
      message: 'Your message has been sent successfully to Chirag! Thank you for reaching out.'
    }
  } catch {
    return {
      status: 'error',
      message: 'Email service timed out. Please try again or reach out directly by email.'
    }
  }
}
