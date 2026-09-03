<template>
  <footer class="footer-wrapper">
    <div class="site-container">
      <div class="liquid-glass footer-content">
        <!-- Brand & Summary Col -->
        <div class="footer-col footer-brand-col">
          <div class="brand-row">
            <div class="brand-badge">
              <span class="brand-initials">CG</span>
            </div>
            <div>
              <h3 class="footer-brand-title">Chirag Gajjar</h3>
              <p class="footer-brand-role">Software Engineer</p>
            </div>
          </div>
          <p class="footer-bio">
            Software Engineer with 7+ years of experience delivering web applications across Frontend, Frameworks, Backend &amp; Protocols, Databases &amp; Caching, Cloud &amp; DevOps, and E-commerce.
          </p>
          <div class="footer-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Gandhinagar, Ahmedabad, Gujarat, India</span>
          </div>
        </div>

        <!-- Navigation Routes -->
        <div class="footer-col">
          <h4 class="footer-col-title">Navigation</h4>
          <ul class="footer-list">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About Journey</NuxtLink></li>
            <li><NuxtLink to="/skills">Technical Skills</NuxtLink></li>
            <li><NuxtLink to="/projects">Featured Projects</NuxtLink></li>
            <li><NuxtLink to="/experience">Career Experience</NuxtLink></li>
            <li><NuxtLink to="/contact">Get in Touch</NuxtLink></li>
          </ul>
        </div>

        <!-- Direct Connect -->
        <div class="footer-col">
          <h4 class="footer-col-title">Direct Connect</h4>
          <ul class="footer-list">
            <li>
              <a href="mailto:chiraggajjar421@gmail.com" class="footer-contact-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>chiraggajjar421@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:8401091573" class="footer-contact-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 8401091573</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chirag-gajjar-0ba075101" target="_blank" rel="noopener noreferrer" class="footer-contact-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn Profile</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/ChiragGajjar123?tab=repositories" target="_blank" rel="noopener noreferrer" class="footer-contact-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub Repositories</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Download Resume Col -->
        <div class="footer-col footer-cta-col">
          <h4 class="footer-col-title">Resume</h4>
          <p class="footer-resume-desc">
            Download the complete PDF version of Chirag Gajjar's resume.
          </p>
          <AsyncResumeDownloadButton />
          <a
            href="/Chirag_Software_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="view-pdf-link"
          >
            Preview in Browser &rarr;
          </a>
        </div>
      </div>

      <!-- Bottom Credits -->
      <div class="footer-bottom">
        <p>© {{ currentYear }} Chirag Gajjar</p>
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
</script>

<style scoped>
.footer-wrapper {
  margin-top: auto;
  padding-bottom: 2.5rem;
}

.footer-content {
  padding: 3rem;
  display: grid;
  grid-template-columns: 1.8fr 1fr 1.3fr 1.3fr;
  gap: 2.5rem;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.25rem;
}

.brand-badge {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(0, 245, 212, 0.2) 0%, rgba(99, 102, 241, 0.25) 100%);
  border: 1px solid rgba(0, 245, 212, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-initials {
  font-weight: 800;
  font-size: 1.15rem;
  color: var(--liquid-cyan);
}

.footer-brand-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
}

.footer-brand-role {
  font-size: 0.82rem;
  color: var(--liquid-cyan);
  font-family: var(--font-mono);
}

.footer-bio {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.footer-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-highlight);
}

.footer-col-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
  letter-spacing: -0.01em;
}

.footer-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer-list a {
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: all 0.2s ease;
}

.footer-list a:hover {
  color: var(--liquid-cyan);
  transform: translateX(3px);
  display: inline-block;
}

.footer-contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  word-break: break-all;
}

.footer-resume-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

.view-pdf-link {
  display: block;
  text-align: center;
  margin-top: 0.85rem;
  font-size: 0.82rem;
  color: var(--liquid-sky);
  transition: all 0.2s;
}

.view-pdf-link:hover {
  color: #00f5d4;
  text-decoration: underline;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0.5rem 0 0.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-tech-tag {
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2.25rem;
  }
}

@media (max-width: 640px) {
  .footer-content {
    grid-template-columns: 1fr;
    padding: 1.75rem;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
}
</style>
