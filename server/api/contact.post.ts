export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, subject, message } = body || {}

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Name is required'
      })
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      throw createError({
        statusCode: 400,
        statusMessage: 'A valid email address is required'
      })
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Message must be at least 5 characters long'
      })
    }

    const config = useRuntimeConfig()
    const apiKey = config.resendApiKey || process.env.RESEND_API_KEY
    const destinationEmail = config.public?.contactEmail || 'chiraggajjar421@gmail.com'

    // Cleaned fields
    const cleanName = name.trim()
    const cleanEmail = email.trim()
    const cleanSubject = (subject || `Portfolio Message from ${cleanName}`).trim()
    const cleanMessage = message.trim()

    // If Resend API Key is configured, send actual email
    if (apiKey) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Chirag Portfolio <onboarding@resend.dev>',
          to: [destinationEmail],
          reply_to: cleanEmail,
          subject: `[Portfolio Inquiry] ${cleanSubject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #0f172a; color: #f8fafc;">
              <h2 style="color: #00f5d4; margin-bottom: 20px;">New Portfolio Contact Message</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; color: #e2e8f0;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #94a3b8;">Sender Name:</td>
                  <td style="padding: 8px 0;">${cleanName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #94a3b8;">Sender Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${cleanEmail}" style="color: #38bdf8;">${cleanEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #94a3b8;">Subject:</td>
                  <td style="padding: 8px 0;">${cleanSubject}</td>
                </tr>
              </table>
              <div style="background-color: rgba(255, 255, 255, 0.05); padding: 16px; border-radius: 8px; border-left: 4px solid #00f5d4;">
                <h4 style="margin: 0 0 8px 0; color: #ffffff;">Message:</h4>
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #cbd5e1;">${cleanMessage}</p>
              </div>
              <p style="margin-top: 24px; font-size: 12px; color: #64748b;">
                Delivered via Resend from your Nuxt Portfolio Website.
              </p>
            </div>
          `
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error('Resend API Error:', errorData)
        return {
          success: false,
          message: errorData.message || 'Failed to dispatch email via Resend. Please try direct email.'
        }
      }

      const data = await response.json()
      return {
        success: true,
        message: 'Your message has been sent successfully to Chirag! Thank you for reaching out.',
        emailId: data.id
      }
    } else {
      // Local development or unconfigured API key simulation
      console.log('----------------------------------------------------')
      console.log('📧 [CONTACT FORM SUBMISSION SIMULATION]')
      console.log(`From: ${cleanName} <${cleanEmail}>`)
      console.log(`Subject: ${cleanSubject}`)
      console.log(`Message: ${cleanMessage}`)
      console.log(`Destination: ${destinationEmail}`)
      console.log('💡 To enable live email dispatch, add RESEND_API_KEY="re_..." to your .env file')
      console.log('----------------------------------------------------')

      return {
        success: true,
        message: 'Thank you! Your message has been received. (Note: RESEND_API_KEY is not set yet in .env, so the message was logged to server output).',
        isMock: true
      }
    }
  } catch (err: any) {
    if (err.statusCode) {
      throw err
    }
    console.error('Contact handler error:', err)
    throw createError({
      statusCode: 500,
      statusMessage: err.message || 'Internal Server Error'
    })
  }
})
