import { NextResponse } from 'next/server'

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!)

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const subject = typeof body.subject === 'string' && body.subject.trim() ? body.subject.trim() : `Portfolio Message from ${name}`
  const message = typeof body.message === 'string' ? body.message.trim() : ''
  if (!name) return NextResponse.json({ success: false, message: 'Name is required' }, { status: 400 })
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ success: false, message: 'A valid email address is required' }, { status: 400 })
  if (message.length < 5) return NextResponse.json({ success: false, message: 'Message must be at least 5 characters long' }, { status: 400 })
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[CONTACT FORM SUBMISSION SIMULATION]', { name, email, subject, message, destination: 'chiraggajjar421@gmail.com' })
    return NextResponse.json({ success: true, isMock: true, message: 'Thank you! Your message has been received. Add RESEND_API_KEY to enable email delivery.' })
  }
  const result = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ from: 'Chirag Portfolio <onboarding@resend.dev>', to: ['chiraggajjar421@gmail.com'], reply_to: email, subject: `[Portfolio Inquiry] ${subject}`, html: `<h2>New Portfolio Contact Message</h2><p><b>Sender:</b> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p><b>Subject:</b> ${escapeHtml(subject)}</p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>` }) })
  const response = await result.json().catch(() => ({}))
  if (!result.ok) return NextResponse.json({ success: false, message: response.message || 'Failed to dispatch email via Resend. Please try direct email.' }, { status: 502 })
  return NextResponse.json({ success: true, message: 'Your message has been sent successfully to Chirag! Thank you for reaching out.', emailId: response.id })
}
