<template>
  <div class="pt-4">
    <div class="container">
      <!-- Hero Section -->
      <section class="text-center mx-auto hero-section">
        <!-- Status Pill -->
        <div class="mb-4">
          <span class="badge rounded-pill d-inline-flex align-items-center gap-2 px-3 py-2 fw-medium badge-cyan-lg">
            <span class="pulse-dot"></span>
            Available for Software Engineering Roles
          </span>
        </div>

        <!-- Headline -->
        <h1 class="display-5 fw-bold mb-4">
          Architecting Scalable Web Systems &amp;
          <span class="text-gradient-cyan">Modern Dynamic User Experiences</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-body-secondary mx-auto mb-4 section-header body-text">
          I am <strong>Chirag Gajjar</strong>, a Software Engineer with <strong>7+ years of experience</strong> delivering resilient web applications with <strong>Angular</strong>, <strong>React</strong>, and <strong>CSS</strong> across <strong>Frontend</strong>, <strong>Frameworks</strong>, <strong>Backend &amp; Protocols</strong>, <strong>Databases &amp; Caching</strong>, <strong>Cloud &amp; DevOps</strong>, and <strong>E-commerce</strong>. Harnessing modern AI tools (Cursor, Augment, ChatGPT) to accelerate engineering cycles and ship production-grade software.
        </p>

        <!-- CTA Buttons -->
        <div class="d-flex flex-wrap justify-content-center gap-3 mb-5">
          <NuxtLink to="/projects" class="btn fw-semibold px-4 py-2 text-white rounded-3 btn-primary-gradient">
            Explore Projects
            <svg class="ms-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </NuxtLink>
          <a href="/Chirag_Software_Engineer.pdf" download="Chirag_Software_Engineer.pdf" class="btn fw-semibold px-4 py-2 rounded-3 glass btn-glass">
            <svg class="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Resume
          </a>
          <NuxtLink to="/contact" class="btn fw-semibold px-4 py-2 rounded-3 glass btn-glass">
            Get in Touch
          </NuxtLink>
        </div>

        <!-- Metrics -->
        <div class="row g-3">
          <div v-for="m in metrics" :key="m.label" class="col-12 col-sm-6 col-md-3">
            <div class="glass rounded-4 p-3 text-center h-100">
              <div class="fw-bold mb-1" :class="m.gradient" style="font-size:1.75rem;">{{ m.value }}</div>
              <div class="small fw-medium mb-1">{{ m.label }}</div>
              <div class="text-body-secondary text-xs">{{ m.sub }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects -->
      <section class="mb-5 mt-5">
        <div class="text-center mb-5 mx-auto section-header">
          <span class="badge rounded-pill px-3 py-1 mb-3 fw-medium badge-cyan">Production Implementations</span>
          <h2 class="fw-bold mb-3">Featured Engineering Showcase</h2>
          <p class="text-body-secondary">Direct repositories, deployed single-page applications, and high-throughput microservices built with modern stacks.</p>
        </div>

        <div class="row g-4 mb-4">
          <div v-for="proj in featuredProjects" :key="proj.title" class="col-12 col-lg-6">
            <div class="glass rounded-4 p-4 h-100 position-relative overflow-hidden project-card" @mouseenter="$event.currentTarget.classList.add('project-card-hover')" @mouseleave="$event.currentTarget.classList.remove('project-card-hover')">
              <!-- Glow Orb -->
              <div class="position-absolute rounded-circle" :style="{width:'200px',height:'200px',filter:'blur(80px)',opacity:'0.15',top:'-50px',right:'-50px',background:proj.orbColor,pointerEvents:'none'}"></div>

              <!-- Header -->
              <div class="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
                <div class="d-flex flex-wrap gap-2">
                  <span v-for="badge in proj.badges" :key="badge.text" class="badge rounded-pill fw-medium" :style="{ background: `rgba(${badge.rgb},0.08)`, color: `rgb(${badge.rgb})`, border: `1px solid rgba(${badge.rgb},0.15)`, fontSize: '0.75rem' }">
                    {{ badge.text }}
                  </span>
                </div>
                <a v-if="proj.liveUrl" :href="proj.liveUrl" target="_blank" rel="noopener noreferrer" class="btn p-0 d-flex align-items-center justify-content-center rounded-3 border flex-shrink-0 btn-icon" title="Live Demo">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>

              <h3 class="fs-5 fw-semibold mb-1">{{ proj.title }}</h3>
              <p class="text-body-secondary mb-2 text-xs">{{ proj.stack }}</p>
              <p class="text-body-secondary mb-3 body-text">{{ proj.desc }}</p>

              <!-- Tech Chips -->
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span v-for="t in proj.techs" :key="t" class="badge rounded-3 fw-medium badge-chip">{{ t }}</span>
              </div>

              <!-- Footer -->
              <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 pt-3 border-top border-subtle">
                <a :href="proj.liveUrl" target="_blank" rel="noopener noreferrer" class="fw-semibold small text-decoration-none link-cyan">Live App &rarr;</a>
                <div class="d-flex gap-3">
                  <a v-for="repo in proj.repos" :key="repo.url" :href="repo.url" target="_blank" rel="noopener noreferrer" class="small text-body-secondary text-decoration-none">{{ repo.label }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/projects" class="btn fw-semibold px-4 py-2 rounded-3 glass btn-glass">
            View All 6 Production Projects (Including E-commerce)
            <svg class="ms-2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </NuxtLink>
        </div>
      </section>

      <!-- Core Domains -->
      <section class="mb-5 section-gap">
        <div class="text-center mb-5 mx-auto section-header">
          <span class="badge rounded-pill px-3 py-1 mb-3 fw-medium badge-cyan">Technical Capabilities</span>
          <h2 class="fw-bold mb-3">Core Engineering Domains</h2>
          <p class="text-body-secondary">Complete mastery across the modern software lifecycle from responsive UI systems to high-concurrency protocols and cloud infrastructure.</p>
        </div>

        <div class="row g-4">
          <div v-for="d in domains" :key="d.title" class="col-12 col-sm-6 col-lg-4">
            <div class="glass rounded-4 p-4 h-100">
              <div class="icon-box-lg mb-3" :style="{background:`rgba(${d.rgb},0.1)`,color:`rgb(${d.rgb})`,border:`1px solid rgba(${d.rgb},0.15)`}">
                <span v-html="d.icon"></span>
              </div>
              <h3 class="fs-5 fw-semibold mb-2">{{ d.title }}</h3>
              <p class="text-body-secondary mb-3 body-text-sm">{{ d.desc }}</p>
              <div class="d-flex flex-wrap gap-1">
                <span v-for="p in d.pills" :key="p" class="badge rounded-pill fw-medium badge-chip">{{ p }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Resume CTA -->
      <section class="mb-5 section-gap">
        <div class="glass-elevated rounded-4 p-4 p-md-5">
          <span class="badge rounded-pill px-3 py-1 mb-3 fw-medium badge-cyan">Official Curriculum Vitae</span>
          <h2 class="fs-3 fw-bold mb-2">Ready to Review the Full Resume?</h2>
          <p class="text-body-secondary body-text-sm mb-4">Contains complete documentation of 7+ years of commercial development at 1center (Salesmate CRM), Lucent Innovation, Infibeam, academic background from Ganpat University, and benchmarks.</p>
          <div class="d-flex flex-column flex-sm-row flex-wrap gap-2">
            <a href="/Chirag_Software_Engineer.pdf" download="Chirag_Software_Engineer.pdf" class="btn fw-semibold px-4 py-2 text-white rounded-3 btn-gradient">
              <svg class="me-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Resume
            </a>
            <a href="/Chirag_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer" class="btn fw-semibold px-4 py-2 rounded-3 glass btn-glass">
              Preview
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const siteUrl = 'https://chirag-gajjar-software-engineer.vercel.app'

useSeoMeta({
  title: 'Chirag Gajjar | Software Engineer — Angular, React, Go, Rust',
  ogTitle: 'Chirag Gajjar | Software Engineer',
  description: 'Portfolio of Chirag Gajjar, a Software Engineer with 7+ years of experience delivering high-performance web applications across Angular, React, Vue, Next.js, Node.js, Go, Rust, AWS, and Cloud Architecture.',
  ogDescription: '7+ years delivering scalable web platforms, high-concurrency Rust/Go microservices, and modern interfaces.',
  ogUrl: siteUrl,
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }]
})

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Chirag Gajjar',
  jobTitle: 'Software Engineer',
  url: siteUrl,
  sameAs: [
    'https://www.linkedin.com/in/chirag-gajjar-0ba075101',
    'https://github.com/ChiragGajjar123'
  ],
  knowsAbout: ['Angular', 'React', 'Vue', 'Next.js', 'Nuxt', 'Node.js', 'Go', 'Rust', 'AWS', 'Cloud Architecture'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gandhinagar',
    addressRegion: 'Gujarat',
    addressCountry: 'IN'
  }
})

const metrics = [
  { value: '7+', label: 'Years of Commercial Experience', sub: 'Enterprise & SaaS Products', gradient: 'text-gradient-cyan' },
  { value: 'Node', label: 'Express 5 API', sub: 'Cluster Mode Process Scaling', gradient: 'text-gradient-violet' },
  { value: '512K', label: 'Concurrent Connections', sub: 'Go / fasthttp Microservice', gradient: 'text-gradient-cyan' },
  { value: '< 1ms', label: 'Sub-millisecond Latency', sub: 'Rust Axum & Zero-Cost Tokio', gradient: 'text-gradient-violet' }
]

const featuredProjects = [
  {
    title: 'CM Notes — Notes Application',
    stack: 'Rust (Axum 0.7 & Tokio) • Angular 22 SPA • AWS SES • PostgreSQL SQLx',
    desc: 'Engineered a high-performance notes platform with Angular Signals state management, custom Glassmorphism UI, 4-step Forgot Password with 60s cooldown timer, and sub-millisecond Rust RESTful API backed by AWS RDS PostgreSQL and AWS SAM Lambda deployment.',
    badges: [{ text: 'Rust + Angular 22', rgb: '6,182,212' }, { text: 'AWS SAM Serverless', rgb: '99,102,241' }],
    techs: ['Angular 22', 'Rust Axum', 'Tokio', 'AWS SES', 'PostgreSQL', 'AWS Amplify'],
    liveUrl: 'https://main.d3jqv6bft0m3qf.amplifyapp.com',
    repos: [
      { label: 'FE Repo', url: 'https://github.com/ChiragGajjar123/Angular-Frontend-for-rust-backend-Notes-App' },
      { label: 'BE Repo', url: 'https://github.com/ChiragGajjar123/Rust-Backend-Notes-App' }
    ],
    orbColor: 'var(--color-cyan)'
  },
  {
    title: 'CM Notes — High-Concurrency Microservice',
    stack: 'Next.js 16 (App Router) • Go 1.26 fasthttp • MongoDB Atlas • Resend API',
    desc: 'Tuned to process 512K concurrent connections with sub-millisecond response times. Built with custom 64-shard in-memory rate limiter using FNV-1a hashing & atomic counters to eliminate lock contention, Tiptap Rich-Text Editor, and Resend transactional email.',
    badges: [{ text: 'Go 1.26 fasthttp', rgb: '6,182,212' }, { text: '512K Concurrency', rgb: '244,63,94' }],
    techs: ['Next.js 16', 'React 19', 'Go fasthttp', '64-Shard Limiter', 'Resend API', 'MongoDB Atlas'],
    liveUrl: 'https://notes-next-js-mongo-db.vercel.app',
    repos: [
      { label: 'FE Repo', url: 'https://github.com/ChiragGajjar123/Notes---Next.js-MongoDB' },
      { label: 'BE Repo', url: 'https://github.com/ChiragGajjar123/Notes-App-Go-Backend' }
    ],
    orbColor: 'var(--color-indigo)'
  },
  {
    title: 'CM Expense Tracker — Financial Analytics',
    stack: 'React 19 • TypeScript • Vite 8 • Zustand • Recharts • Node Express 5 Cluster',
    desc: 'Real-time budget tracking with category analytics. RESTful API scaled with Node.js Cluster mode multi-core process scaling, Pino structured logging, Helmet security, HTTP-only cookie JWTs, Redis rate limiting, and Resend email alerts.',
    badges: [{ text: 'React 19 + Express 5', rgb: '99,102,241' }, { text: 'Redis Caching', rgb: '6,182,212' }],
    techs: ['React 19', 'Vite 8', 'Zustand', 'Express 5 Cluster', 'Redis', 'Recharts'],
    liveUrl: 'https://expense-tracker-app-react-node-expr.vercel.app',
    repos: [
      { label: 'FE Repo', url: 'https://github.com/ChiragGajjar123/Expense-Tracker-App---React---Node---Express---mongoDB' },
      { label: 'BE Repo', url: 'https://github.com/ChiragGajjar123/Expense-Tracker-Node-Express-Backend' }
    ],
    orbColor: 'var(--color-cyan)'
  },
  {
    title: 'Salesmate CRM Product',
    stack: 'Angular • JavaScript • SCSS • Enterprise Sales Automation',
    desc: 'SaaS product used by businesses worldwide for sales automation and customer lifecycle management. Built responsive UI modules, complex dashboards, reporting features, lazy loading, and fine-tuned change detection strategies.',
    badges: [{ text: 'Enterprise SaaS', rgb: '6,182,212' }, { text: 'Angular Core', rgb: '99,102,241' }],
    techs: ['Angular', 'Sales Automation', 'Lazy Loading', 'UI/UX Reviews', 'Dashboards'],
    liveUrl: 'https://www.salesmate.io',
    repos: [],
    orbColor: 'var(--color-indigo)'
  }
]

const domains = [
  { title: 'Frontend & Frameworks', desc: 'HTML, CSS, SCSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, Angular, React, Vue, Next.js, Nuxt.', pills: ['Angular', 'React', 'Vue / Nuxt', 'Next.js', 'TypeScript', 'SCSS'], rgb: '6,182,212', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
  { title: 'Backend & Protocols', desc: 'Node.js, Express, Docker, Go (Golang 1.26, fasthttp), Rust (Axum, Tokio), WebSockets, REST APIs, multi-core cluster scaling.', pills: ['Rust (Axum)', 'Go (fasthttp)', 'Node Express', 'WebSockets', 'REST APIs', 'Docker'], rgb: '99,102,241', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
  { title: 'Cloud & DevOps', desc: 'AWS (EC2, RDS, Lambda, SES, API Gateway, CloudFormation SAM, Amplify), GitHub Actions (CI/CD), Vercel, Netlify, Render.', pills: ['AWS SAM', 'AWS Lambda', 'AWS SES', 'GitHub Actions', 'Vercel', 'Render'], rgb: '244,63,94', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>' },
  { title: 'Databases & Caching', desc: 'MongoDB Atlas, PostgreSQL (SQLx), Redis (caching & distributed rate limiting), Supabase, Neon Postgres.', pills: ['PostgreSQL', 'MongoDB Atlas', 'Redis Caching', 'SQLx', 'Supabase', 'Neon'], rgb: '6,182,212', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' },
  { title: 'AI Tooling Acceleration', desc: 'Integrated modern AI tools (Cursor, Augment, ChatGPT, CLI & APIs) across daily engineering workflows to boost velocity.', pills: ['Cursor IDE', 'Augment AI', 'ChatGPT', 'Rapid Refactoring', 'Test Generation'], rgb: '99,102,241', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' },
  { title: 'E-Commerce Platforms', desc: 'Shopify custom theme development with Liquid, HTML5, SCSS, JS, SEO optimization, BigCommerce enterprise storefronts.', pills: ['Shopify Liquid', 'BigCommerce', 'Conversion SEO', 'Theme Dev'], rgb: '244,63,94', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' }
]
</script>
