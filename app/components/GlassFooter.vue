<template>
  <footer class="mt-5 pt-5 pb-3 position-relative footer-layer">
    <div class="container">
      <div class="glass rounded-4 p-4">
        <div class="row g-4">
          <!-- Brand & Summary -->
          <div class="col-12 col-md-6 col-lg-3">
            <div class="d-flex align-items-center gap-2 mb-3">
              <div class="brand-box">
                <span class="fw-bold text-white text-brand">CG</span>
              </div>
              <div>
                <h3 class="fs-6 fw-semibold mb-0">Chirag Gajjar</h3>
                <p class="mb-0 small text-body-secondary">Software Engineer</p>
              </div>
            </div>
            <p class="small text-body-secondary lh-sm">
              Software Engineer with 7+ years of experience delivering web applications across Frontend, Frameworks, Backend &amp; Protocols, Databases &amp; Caching, Cloud &amp; DevOps, and E-commerce.
            </p>
            <div class="d-flex align-items-center gap-2 small text-body-secondary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Gandhinagar, Gujarat, India</span>
            </div>
          </div>

          <!-- Navigation -->
          <div class="col-12 col-md-6 col-lg-3">
            <h4 class="small fw-semibold text-uppercase text-body-secondary mb-3 footer-heading">Navigation</h4>
            <ul class="list-unstyled">
              <li class="mb-2" v-for="link in navLinks" :key="link.path">
                <NuxtLink :to="link.path" class="small cg-link text-decoration-none">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Direct Connect -->
          <div class="col-12 col-md-6 col-lg-3">
            <h4 class="small fw-semibold text-uppercase text-body-secondary mb-3 footer-heading">Direct Connect</h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="mailto:chiraggajjar421@gmail.com" class="small cg-link text-decoration-none d-inline-flex align-items-center gap-2">
                  <svg class="link-cyan flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>chiraggajjar421@gmail.com</span>
                </a>
              </li>
              <li class="mb-2">
                <a href="tel:8401091573" class="small cg-link text-decoration-none d-inline-flex align-items-center gap-2">
                  <svg class="link-cyan flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91 8401091573
                </a>
              </li>
              <li class="mb-2">
                <a href="https://www.linkedin.com/in/chirag-gajjar-0ba075101" target="_blank" rel="noopener noreferrer" class="small cg-link text-decoration-none d-inline-flex align-items-center gap-2">
                  <svg class="link-cyan flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn Profile
                </a>
              </li>
              <li class="mb-2">
                <a href="https://github.com/ChiragGajjar123?tab=repositories" target="_blank" rel="noopener noreferrer" class="small cg-link text-decoration-none d-inline-flex align-items-center gap-2">
                  <svg class="link-cyan flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub Repositories
                </a>
              </li>
            </ul>
          </div>

          <!-- Resume -->
          <div class="col-12 col-md-6 col-lg-3">
            <h4 class="small fw-semibold text-uppercase text-body-secondary mb-3 footer-heading">Resume</h4>
            <p class="small text-body-secondary mb-3">
              Download the complete PDF version of Chirag Gajjar's resume.
            </p>
            <div class="d-flex flex-row align-items-center gap-3">
              <AsyncResumeDownloadButton />
              <a href="/Chirag_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer" class="small fw-medium link-cyan">
                Preview in Browser &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Credits -->
      <div class="text-center pt-4 mt-4 border-top border-subtle">
        <p class="small text-body-secondary mb-0">&copy; {{ currentYear }} Chirag Gajjar</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import AppLoader from '~/components/AppLoader.vue'

const currentYear = new Date().getFullYear()
const AsyncResumeDownloadButton = defineAsyncComponent({
  loader: () => import('~/components/ResumeDownloadButton.vue'),
  loadingComponent: AppLoader,
  delay: 0
})

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Journey' },
  { path: '/skills', label: 'Technical Skills' },
  { path: '/projects', label: 'Featured Projects' },
  { path: '/experience', label: 'Career Experience' },
  { path: '/contact', label: 'Get in Touch' }
]
</script>
