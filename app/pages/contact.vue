<template>
  <div class="page-wrapper contact-page">
    <div class="site-container">
      <!-- Header -->
      <div class="section-header">
        <div class="section-tag">Direct Communication</div>
        <h1 class="section-title">Get in Touch</h1>
        <p class="section-desc">
          Interested in connecting with a Software Engineer experienced in Angular, React, and CSS, discussing high-concurrency systems, or exploring engineering opportunities? Send a direct message below.
        </p>
      </div>

      <div class="contact-grid">
        <!-- Contact Information & Quick Cards -->
        <div class="contact-info-col">
          <!-- Availability Card -->
          <div class="liquid-glass info-card-status">
            <div class="status-indicator">
              <span class="pulse-dot"></span>
              <span class="status-text">Actively Open to Opportunities</span>
            </div>
            <p class="status-sub">
              Available for Software Engineering positions using Angular, React, CSS, Node.js/Express, high-concurrency Go and Rust systems, and modern web application development.
            </p>
          </div>

          <!-- Direct Info Items -->
          <div class="liquid-glass contact-details-card">
            <h3 class="details-heading">Contact Details</h3>

            <!-- Email Item with Copy -->
            <div class="contact-detail-row">
              <div class="detail-icon cyan">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div class="detail-texts">
                <span class="detail-label">Direct Email</span>
                <a :href="'mailto:' + email" class="detail-val-link">{{ email }}</a>
              </div>
              <button @click="copyToClipboard(email, 'email')" class="btn-copy" :title="copiedType === 'email' ? 'Copied!' : 'Copy email'">
                <span v-if="copiedType === 'email'" class="copied-indicator">Copied!</span>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>

            <!-- Phone Item with Copy -->
            <div class="contact-detail-row">
              <div class="detail-icon indigo">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div class="detail-texts">
                <span class="detail-label">Phone / WhatsApp</span>
                <a :href="'tel:' + phone" class="detail-val-link">{{ phone }}</a>
              </div>
              <button @click="copyToClipboard(phone, 'phone')" class="btn-copy" :title="copiedType === 'phone' ? 'Copied!' : 'Copy phone'">
                <span v-if="copiedType === 'phone'" class="copied-indicator">Copied!</span>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>

            <!-- Location -->
            <div class="contact-detail-row">
              <div class="detail-icon rose">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div class="detail-texts">
                <span class="detail-label">Location</span>
                <span class="detail-val">Gandhinagar, Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            <!-- Professional Profiles -->
            <div class="social-buttons-grid">
              <a :href="linkedin" target="_blank" rel="noopener noreferrer" class="social-pill-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn Profile</span>
              </a>

              <a :href="github" target="_blank" rel="noopener noreferrer" class="social-pill-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub Repos</span>
              </a>
            </div>
          </div>

          <!-- Resume Download Glass Box -->
          <div class="liquid-glass resume-box-sidebar">
            <div class="resume-box-top">
              <div class="pdf-tag">PDF</div>
              <div>
                <h4 class="resume-box-title">Chirag_Software_Engineer.pdf</h4>
                <p class="resume-box-size">153 KB • Complete Resume</p>
              </div>
            </div>
            <div class="resume-box-actions">
              <a
                href="/Chirag_Software_Engineer.pdf"
                download="Chirag_Software_Engineer.pdf"
                class="btn-liquid-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>
              <a
                href="/Chirag_Software_Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="view-online-link"
              >
                Preview in browser &rarr;
              </a>
            </div>
          </div>
        </div>

        <!-- Liquid Glass Interactive Form Column -->
        <div class="contact-form-col">
          <div class="liquid-glass contact-form-card">
            <h2 class="form-title">Send a Message</h2>
            <p class="form-desc">
              Your inquiry will be delivered directly to Chirag's inbox via Resend.
            </p>

            <form @submit.prevent="handleSubmit" class="liquid-form" novalidate>
              <!-- Name & Email Row -->
              <div class="form-row-2">
                <div class="form-group">
                  <label for="name" class="form-label">
                    Your Name <span class="required">*</span>
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    class="glass-input"
                    :class="{ error: errors.name }"
                  />
                  <span v-if="errors.name" class="error-hint">{{ errors.name }}</span>
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">
                    Your Email <span class="required">*</span>
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    class="glass-input"
                    :class="{ error: errors.email }"
                  />
                  <span v-if="errors.email" class="error-hint">{{ errors.email }}</span>
                </div>
              </div>

              <!-- Subject Row -->
              <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  placeholder="Subject or brief topic of your message..."
                  class="glass-input"
                />
              </div>

              <!-- Message -->
              <div class="form-group">
                <label for="message" class="form-label">
                  Your Message <span class="required">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  placeholder="Share details about the role, project requirements, timeline, or team..."
                  class="glass-input glass-textarea"
                  :class="{ error: errors.message }"
                ></textarea>
                <span v-if="errors.message" class="error-hint">{{ errors.message }}</span>
              </div>

              <!-- Status Feedback Alerts -->
              <div v-if="submitStatus === 'success'" class="feedback-box success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>{{ responseMessage }}</span>
              </div>

              <div v-if="submitStatus === 'error'" class="feedback-box error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{{ responseMessage }}</span>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="btn-liquid-primary btn-submit-form"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Dispatch Message to Chirag</span>
                <span v-else class="sending-state">
                  <svg class="spinner" viewBox="0 0 24 24">
                    <circle class="path" cx="12" cy="12" r="10" fill="none" stroke-width="3"></circle>
                  </svg>
                  <span>Sending via Resend API...</span>
                </span>
                <svg v-if="!isSubmitting" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
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

useHead({
  title: 'Contact Chirag Gajjar | Software Engineer'
})

const email = 'chiraggajjar421@gmail.com'
const phone = '8401091573'
const linkedin = 'https://www.linkedin.com/in/chirag-gajjar-0ba075101'
const github = 'https://github.com/ChiragGajjar123?tab=repositories'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null) // 'success' | 'error' | null
const responseMessage = ref('')
const copiedType = ref(null)

function copyToClipboard(text, type) {
  navigator.clipboard.writeText(text).then(() => {
    copiedType.value = type
    setTimeout(() => {
      copiedType.value = null
    }, 2500)
  })
}

function validate() {
  let isValid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Please enter your name'
    isValid = false
  }

  if (!form.email.trim() || !form.email.includes('@')) {
    errors.email = 'Please provide a valid email address'
    isValid = false
  }

  if (!form.message.trim() || form.message.trim().length < 5) {
    errors.message = 'Please provide at least 5 characters in your message'
    isValid = false
  }

  return isValid
}

async function handleSubmit() {
  if (!validate()) return

  isSubmitting.value = true
  submitStatus.value = null
  responseMessage.value = ''

  try {
    const data = await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form }
    })

    if (data.success) {
      submitStatus.value = 'success'
      responseMessage.value = data.message || 'Thank you! Your message has been delivered to Chirag.'
      // Reset form
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } else {
      submitStatus.value = 'error'
      responseMessage.value = data.message || 'Failed to send message. Please reach out directly via email.'
    }
  } catch (err) {
    submitStatus.value = 'error'
    responseMessage.value = err?.data?.statusMessage || 'An unexpected error occurred. Please reach out directly at chiraggajjar421@gmail.com'
  } finally {
    isSubmitting.value = false
  }
}
</script>