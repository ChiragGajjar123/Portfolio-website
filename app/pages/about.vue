<template>
  <div class="pt-5">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5 mx-auto section-header">
        <span class="badge rounded-pill px-3 py-1 mb-3 fw-medium badge-cyan">Career Evolution &amp; Background</span>
        <h1 class="fw-bold mb-3">About Chirag Gajjar</h1>
        <p class="text-body-secondary body-text">7+ years crafting scalable web applications with Angular, React, and CSS, from UI/UX design and high-converting e-commerce to enterprise CRM architectures and high-throughput microservices.</p>
      </div>

      <div class="row g-4">
        <!-- Main Column -->
        <div class="col-12 col-lg-8">
          <!-- Profile Story Card -->
          <div class="glass rounded-4 p-4 p-md-5 mb-4">
            <div class="d-flex align-items-center gap-3 mb-4 flex-wrap">
              <div class="brand-box-lg">
                <span class="fw-bold text-white text-brand">CG</span>
              </div>
              <div>
                <h2 class="fs-4 fw-bold mb-0">Chirag Gajjar</h2>
                <p class="text-body-secondary mb-2 body-text-sm">Software Engineer</p>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge rounded-pill fw-medium badge-chip">Gandhinagar, Gujarat, India</span>
                  <span class="badge rounded-pill fw-medium badge-chip">7+ Years Exp</span>
                </div>
              </div>
            </div>

            <h5 class="fw-semibold mt-4 mb-3">Executive Summary</h5>
            <p class="text-body-secondary body-text">
              I am a dedicated <strong>Software Engineer with 7+ years of experience</strong> delivering enterprise-grade web applications. My journey spans the full engineering spectrum: starting with UI/UX prototyping at <strong>Infibeam Avenues</strong>, evolving into high-speed e-commerce at <strong>Lucent Innovation</strong>, and scaling complex SaaS workflows at <strong>Salesmate CRM at 1center</strong> using <strong>Angular</strong>, <strong>React</strong>, and <strong>CSS</strong>, alongside high-concurrency systems in <strong>Node.js</strong>, <strong>Go</strong>, and <strong>Rust</strong>.
            </p>
            <p class="text-body-secondary body-text">
              I actively harness modern <strong>AI tooling (Cursor, Augment, ChatGPT APIs)</strong> to supercharge development workflows, automate unit tests, refactor legacy codebases, and maintain rigorous code quality and delivery speed.
            </p>

            <h5 class="fw-semibold mt-4 mb-3">Engineering Philosophy</h5>
            <ul class="list-unstyled">
              <li class="list-accent">
                <strong>Performance as a Feature:</strong> From Node.js cluster mode scaling to Go's 512K concurrent connections and Rust's zero-cost abstractions, speed is non-negotiable.
              </li>
              <li class="list-accent">
                <strong>Fluid User Experience:</strong> Clean, accessible, intuitive interfaces with responsive layouts and rich micro-interactions.
              </li>
              <li class="list-accent">
                <strong>Cloud-Native Resilience:</strong> Serverless architectures utilizing AWS SAM, Lambda, RDS PostgreSQL, SES, Docker, and GitHub Actions CI/CD.
              </li>
            </ul>
          </div>

          <!-- Education Card -->
          <div class="glass rounded-4 p-4 mt-5">
            <h3 class="fs-5 fw-semibold mb-4 d-flex align-items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="link-cyan"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Academic Education
            </h3>
            <div class="ps-4 position-relative">
              <div class="position-absolute top-0 bottom-0 border-start border-subtle" :style="{ width: '2px', left: '0.45rem' }"></div>
              <div v-for="edu in education" :key="edu.degree" class="position-relative mb-4">
                <div class="position-absolute rounded-circle border border-2 border-canvas timeline-dot" :style="{ width: '0.65rem', height: '0.65rem', background: 'var(--cg-google-blue)', left: '-1.5rem', top: '0.4rem', zIndex: 1 }"></div>
                <div class="small fw-semibold mb-1 link-cyan">{{ edu.year }}</div>
                <h6 class="fw-semibold mb-1">{{ edu.degree }}</h6>
                <p class="text-body-secondary mb-1 body-text-sm">{{ edu.inst }}</p>
                <span class="badge rounded-3 fw-medium badge-chip">Score: {{ edu.score }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col-12 col-lg-4">
          <!-- Resume Widget -->
          <div class="glass rounded-4 p-4 mb-4">
            <div class="d-flex align-items-center gap-3 mb-4">
              <div class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-3" :style="{width:'2.75rem',height:'2.75rem',background:'var(--cg-google-blue-container)',color:'var(--cg-google-blue)'}">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <div class="d-grid min-w-0">
                <h4 class="fs-6 fw-semibold mb-0 text-truncate">Chirag_Software_Engineer.pdf</h4>
                <p class="text-body-secondary mb-0 text-xs">Official Curriculum Vitae &bull; 4-Page PDF</p>
              </div>
            </div>
            <div class="d-flex gap-2">
              <a href="/Chirag_Software_Engineer.pdf" download="Chirag_Software_Engineer.pdf" class="btn flex-grow-1 fw-semibold rounded-3 btn-gradient">
                <svg class="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Resume
              </a>
              <a href="/Chirag_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer" class="btn flex-grow-1 fw-semibold rounded-3 glass btn-glass">
                Preview
              </a>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="glass rounded-4 p-4 mb-4">
            <h4 class="fs-6 fw-semibold mb-3">Additional Information</h4>
            <div class="mb-3">
              <label class="small fw-semibold text-body-secondary text-uppercase d-block mb-2 footer-heading">Spoken Languages</label>
              <div class="d-flex flex-wrap gap-2">
                <span class="badge rounded-pill fw-medium badge-chip">Gujarati (Native)</span>
                <span class="badge rounded-pill fw-medium badge-chip">Hindi (Fluent)</span>
                <span class="badge rounded-pill fw-medium badge-chip">English (Professional)</span>
              </div>
            </div>
            <div class="mb-3">
              <label class="small fw-semibold text-body-secondary text-uppercase d-block mb-2 footer-heading">Interests</label>
              <div class="d-flex flex-wrap gap-2">
                <span class="badge rounded-pill fw-medium badge-chip">Music</span>
                <span class="badge rounded-pill fw-medium badge-chip">Cricket</span>
                <span class="badge rounded-pill fw-medium badge-chip">High-Concurrency Systems</span>
                <span class="badge rounded-pill fw-medium badge-chip">AI Architecture</span>
              </div>
            </div>
            <div class="mb-3">
              <label class="small fw-semibold text-body-secondary text-uppercase d-block mb-2 footer-heading">Direct Contact</label>
              <p class="small mb-1"><a href="mailto:chiraggajjar421@gmail.com" class="text-decoration-none link-cyan">chiraggajjar421@gmail.com</a></p>
              <p class="small mb-0"><a href="tel:8401091573" class="text-decoration-none link-cyan">+91 8401091573</a></p>
            </div>
          </div>

          <!-- Quick Nav -->
          <div class="glass rounded-4 p-4">
            <h4 class="fs-6 fw-semibold mb-3">Explore More</h4>
            <div class="d-flex flex-column gap-2">
              <NuxtLink to="/skills" class="d-flex justify-content-between align-items-center p-2 rounded-3 cg-link text-decoration-none small block-code quick-nav-link">View Technical Skills Matrix <span>&rarr;</span></NuxtLink>
              <NuxtLink to="/experience" class="d-flex justify-content-between align-items-center p-2 rounded-3 cg-link text-decoration-none small block-code quick-nav-link">View Work Experience Timeline <span>&rarr;</span></NuxtLink>
              <NuxtLink to="/projects" class="d-flex justify-content-between align-items-center p-2 rounded-3 cg-link text-decoration-none small block-code quick-nav-link">View Projects <span>&rarr;</span></NuxtLink>
              <NuxtLink to="/contact" class="d-flex justify-content-between align-items-center p-2 rounded-3 cg-link text-decoration-none small block-code quick-nav-link">Send a Message <span>&rarr;</span></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const siteUrl = 'https://chirag-gajjar-software-engineer.vercel.app'

useSeoMeta({
  title: 'About Chirag Gajjar | Software Engineer (7+ Years)',
  ogTitle: 'About Chirag Gajjar — Software Engineer',
  description: 'Learn about Chirag Gajjar: 7+ years of commercial software engineering with Angular, React, CSS, Node.js, Go, and Rust. Education at Ganpat University, career at 1center, Lucent Innovation, Infibeam.',
  ogDescription: '7+ years of software engineering experience across enterprise SaaS, e-commerce, and high-concurrency systems.',
  ogUrl: `${siteUrl}/about`,
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/about` }]
})

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Chirag Gajjar',
  url: `${siteUrl}/about`,
  mainEntity: {
    '@type': 'Person',
    name: 'Chirag Gajjar',
    jobTitle: 'Software Engineer',
    description: 'Software Engineer with 7+ years of experience delivering enterprise-grade web applications.',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Ganpat University'
    },
    worksFor: [
      { '@type': 'Organization', name: '1center (Salesmate CRM)' },
      { '@type': 'Organization', name: 'Lucent Innovation' },
      { '@type': 'Organization', name: 'Infibeam Avenues' }
    ]
  }
})

const education = [
  { year: '2014 – 2018', degree: 'Bachelor of Technology (B.Tech) in Information Technology', inst: 'U.V. Patel College of Engineering, Ganpat University', score: '6.47 CGPA' },
  { year: '2014', degree: 'Higher Secondary Certificate (HSC) — Science', inst: 'Vibrant School of Science, Deesa', score: '53.69%' },
  { year: '2009', degree: 'Secondary School Certificate (SSC)', inst: 'Vinay Vidhya Mandir, Khoda', score: '73.54%' }
]
</script>
