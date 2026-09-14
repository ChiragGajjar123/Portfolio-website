<template>
  <div class="pt-5">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5 mx-auto section-header">
        <span class="badge rounded-pill px-3 py-1 mb-3 fw-medium badge-cyan">Direct Communication</span>
        <h1 class="fw-bold mb-3">Get in Touch</h1>
        <p class="text-body-secondary body-text">Interested in connecting with a Software Engineer experienced in Angular, React, and CSS, or exploring engineering opportunities? Send a direct message below.</p>
      </div>

      <div class="row g-4">
        <!-- Info Column -->
        <div class="col-12 col-lg-5">
          <!-- Availability -->
          <div class="glass rounded-4 p-4 mb-4">
            <div class="d-flex align-items-center gap-2 mb-3">
              <span class="pulse-dot"></span>
              <span class="small fw-semibold text-success">Actively Open to Opportunities</span>
            </div>
            <p class="text-body-secondary small mb-0 body-text-sm">Available for Software Engineering positions using Angular, React, CSS, Node.js/Express, high-concurrency Go and Rust systems.</p>
          </div>

          <!-- Contact Details -->
          <div class="glass rounded-4 p-4 mb-4">
            <h3 class="fs-5 fw-semibold mb-3">Contact Details</h3>

            <!-- Email -->
            <div class="d-flex align-items-center gap-3 py-3 border-bottom border-subtle">
              <div class="icon-box" :style="{background:'rgba(var(--color-cyan-rgb),0.1)',color:'var(--color-cyan)'}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div class="flex-grow-1 min-w-0">
                <span class="small text-body-secondary d-block">Direct Email</span>
                <a :href="'mailto:' + email" class="small fw-medium text-decoration-none text-break link-cyan">{{ email }}</a>
              </div>
              <button @click="copyToClipboard(email, 'email')" class="btn p-0 border-0 bg-transparent flex-shrink-0 text-muted" :title="copiedType === 'email' ? 'Copied!' : 'Copy email'">
                <span v-if="copiedType === 'email'" class="small fw-semibold text-success">Copied!</span>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </button>
            </div>

            <!-- Phone -->
            <div class="d-flex align-items-center gap-3 py-3 border-bottom border-subtle">
              <div class="icon-box" :style="{background:'rgba(var(--color-indigo-rgb),0.1)',color:'var(--color-indigo)'}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div class="flex-grow-1 min-w-0">
                <span class="small text-body-secondary d-block">Phone / WhatsApp</span>
                <a :href="'tel:' + phone" class="small fw-medium text-decoration-none link-cyan">{{ phone }}</a>
              </div>
              <button @click="copyToClipboard(phone, 'phone')" class="btn p-0 border-0 bg-transparent flex-shrink-0 text-muted" :title="copiedType === 'phone' ? 'Copied!' : 'Copy phone'">
                <span v-if="copiedType === 'phone'" class="small fw-semibold text-success">Copied!</span>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </button>
            </div>

            <!-- Location -->
            <div class="d-flex align-items-center gap-3 py-3">
              <div class="icon-box" :style="{background:'rgba(var(--color-rose-rgb),0.1)',color:'var(--color-rose)'}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <span class="small text-body-secondary d-block">Location</span>
                <span class="small fw-medium">Gandhinagar, Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            <!-- Social -->
            <div class="row g-2 mt-3 pt-3 border-top border-subtle">
              <div class="col-12 col-sm-6">
                <a :href="linkedin" target="_blank" rel="noopener noreferrer" class="d-flex align-items-center justify-content-center gap-2 p-2 rounded-3 text-body-secondary text-decoration-none small fw-medium badge-chip social-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
              </div>
              <div class="col-12 col-sm-6">
                <a :href="github" target="_blank" rel="noopener noreferrer" class="d-flex align-items-center justify-content-center gap-2 p-2 rounded-3 text-body-secondary text-decoration-none small fw-medium badge-chip social-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <!-- Resume Box -->
          <div class="glass rounded-4 p-4">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="icon-box fw-bold" :style="{background:'rgba(var(--color-rose-rgb),0.1)',color:'var(--color-rose)',fontSize:'0.7rem'}">PDF</div>
              <div>
                <h4 class="fs-6 fw-semibold mb-0 text-break">Chirag_Software_Engineer.pdf</h4>
                <p class="text-body-secondary mb-0 text-xs">153 KB &bull; Complete Resume</p>
              </div>
            </div>
            <div class="d-flex flex-column flex-sm-row align-items-sm-center gap-2 gap-sm-3">
              <a href="/Chirag_Software_Engineer.pdf" download="Chirag_Software_Engineer.pdf" class="btn fw-semibold text-white rounded-3 btn-gradient">
                <svg class="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Resume
              </a>
              <a href="/Chirag_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer" class="small fw-medium text-decoration-none link-cyan">Preview in browser &rarr;</a>
            </div>
          </div>
        </div>

        <!-- Form Column -->
        <div class="col-12 col-lg-7">
          <div class="glass rounded-4 p-4 p-md-5">
            <h2 class="fs-4 fw-bold mb-1">Send a Message</h2>
            <p class="text-body-secondary small mb-4">Your inquiry will be delivered directly to Chirag's inbox via Resend.</p>

            <form @submit.prevent="handleSubmit" novalidate>
              <div class="row g-3 mb-3">
                <div class="col-12 col-sm-6">
                  <label for="name" class="form-label small fw-medium">Your Name <span class="text-rose">*</span></label>
                  <input id="name" v-model="form.name" type="text" required placeholder="e.g. Alex Morgan" class="form-control form-control-glass rounded-3" :class="{'is-invalid': errors.name}" />
                  <span v-if="errors.name" class="invalid-feedback">{{ errors.name }}</span>
                </div>
                <div class="col-12 col-sm-6">
                  <label for="email" class="form-label small fw-medium">Your Email <span class="text-rose">*</span></label>
                  <input id="email" v-model="form.email" type="email" required placeholder="alex@company.com" class="form-control form-control-glass rounded-3" :class="{'is-invalid': errors.email}" />
                  <span v-if="errors.email" class="invalid-feedback">{{ errors.email }}</span>
                </div>
              </div>

              <div class="mb-3">
                <label for="subject" class="form-label small fw-medium">Subject</label>
                <input id="subject" v-model="form.subject" type="text" placeholder="Subject or brief topic of your message..." class="form-control form-control-glass rounded-3" />
              </div>

              <div class="mb-3">
                <label for="message" class="form-label small fw-medium">Your Message <span class="text-rose">*</span></label>
                <textarea id="message" v-model="form.message" rows="5" required placeholder="Share details about the role, project requirements, timeline, or team..." class="form-control form-control-glass rounded-3 textarea-resize" :class="{'is-invalid': errors.message}"></textarea>
                <span v-if="errors.message" class="invalid-feedback">{{ errors.message }}</span>
              </div>

              <!-- Feedback -->
              <div v-if="submitStatus === 'success'" class="alert d-flex align-items-center gap-2 rounded-3 mb-3 alert-success">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>{{ responseMessage }}</span>
              </div>
              <div v-if="submitStatus === 'error'" class="alert d-flex align-items-center gap-2 rounded-3 mb-3 alert-error">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>{{ responseMessage }}</span>
              </div>

              <button type="submit" class="btn w-100 fw-semibold py-2 rounded-3 text-white btn-gradient" :disabled="isSubmitting">
                <span v-if="!isSubmitting" class="d-flex align-items-center justify-content-center gap-2">
                  Dispatch Message to Chirag
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </span>
                <span v-else class="d-flex align-items-center justify-content-center gap-2">
                  <svg class="spinner" viewBox="0 0 24 24" width="18" height="18"><circle class="path" cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="60" stroke-dashoffset="15"/></svg>
                  Sending via Resend API...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

useHead({ title: 'Contact Chirag Gajjar | Software Engineer' })

const email = 'chiraggajjar421@gmail.com'
const phone = '8401091573'
const linkedin = 'https://www.linkedin.com/in/chirag-gajjar-0ba075101'
const github = 'https://github.com/ChiragGajjar123?tab=repositories'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const isSubmitting = ref(false)
const submitStatus = ref(null)
const responseMessage = ref('')
const copiedType = ref(null)

function copyToClipboard(text, type) {
  navigator.clipboard.writeText(text).then(() => {
    copiedType.value = type
    setTimeout(() => { copiedType.value = null }, 2500)
  })
}

function validate() {
  let isValid = true
  errors.name = ''; errors.email = ''; errors.message = ''
  if (!form.name.trim()) { errors.name = 'Please enter your name'; isValid = false }
  if (!form.email.trim() || !form.email.includes('@')) { errors.email = 'Please provide a valid email address'; isValid = false }
  if (!form.message.trim() || form.message.trim().length < 5) { errors.message = 'Please provide at least 5 characters'; isValid = false }
  return isValid
}

async function handleSubmit() {
  if (!validate()) return
  isSubmitting.value = true
  submitStatus.value = null
  responseMessage.value = ''
  try {
    const data = await $fetch('/api/contact', { method: 'POST', body: { ...form } })
    if (data.success) {
      submitStatus.value = 'success'
      responseMessage.value = data.message || 'Thank you! Your message has been delivered.'
      form.name = ''; form.email = ''; form.subject = ''; form.message = ''
    } else {
      submitStatus.value = 'error'
      responseMessage.value = data.message || 'Failed to send message.'
    }
  } catch (err) {
    submitStatus.value = 'error'
    responseMessage.value = err?.data?.statusMessage || 'An unexpected error occurred.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
