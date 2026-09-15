<template>
  <div class="pt-5">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5 mx-auto section-header">
        <span class="badge rounded-pill px-3 py-1 mb-3 fw-medium badge-cyan">Technical Competencies</span>
        <h1 class="fw-bold mb-3">Skills &amp; Architecture Matrix</h1>
        <p class="text-body-secondary">Angular, React, and CSS lead a complete matrix of skills, languages, frameworks, protocols, and cloud tools backed by 7+ years of commercial production experience.</p>
      </div>

      <!-- Filter Tabs -->
      <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
        <button v-for="cat in categories" :key="cat.id" class="btn btn-sm rounded-pill fw-medium px-3 btn-filter" :style="selectedCategory === cat.id ? { background: 'var(--cg-google-blue-container)', color: 'var(--cg-google-blue)', border: '1px solid rgba(var(--cg-google-blue-rgb),0.3)' } : { background: 'var(--bg-card)', color: 'var(--bs-body-color)', border: '1px solid var(--border-subtle)' }" @click="selectedCategory = cat.id">
          {{ cat.label }}
          <span class="badge rounded-pill ms-1 text-xs" :style="selectedCategory === cat.id ? { background: 'rgba(var(--cg-google-blue-rgb),0.18)', color: 'var(--cg-google-blue)' } : { background: 'var(--bg-code)', color: 'var(--bs-body-secondary)' }">{{ getCategoryCount(cat.id) }}</span>
        </button>
      </div>

      <!-- Skills Grid -->
      <div class="d-flex flex-column gap-4 mb-5">
        <div v-for="domain in filteredDomains" :key="domain.name" class="glass rounded-4 p-4">
          <div class="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
            <div class="d-flex align-items-start gap-3">
              <div class="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0" :style="{width:'3rem',height:'3rem',background:`rgba(${domain.rgb},0.12)`,color:`rgb(${domain.rgb})`}">
                <span v-html="domain.iconSvg"></span>
              </div>
              <div>
                <h2 class="fs-5 fw-semibold mb-1">{{ domain.name }}</h2>
                <p class="text-body-secondary mb-0 text-xs">{{ domain.summary }}</p>
              </div>
            </div>
            <span class="badge rounded-pill fw-medium" :style="{background:`rgba(${domain.rgb},0.12)`,color:`rgb(${domain.rgb})`,border:`1px solid rgba(${domain.rgb},0.25)`,fontSize:'0.75rem'}">{{ domain.skills.length }} Technologies</span>
          </div>

          <div class="row g-3">
            <div v-for="skill in domain.skills" :key="skill.name" class="col-12 col-md-6 col-xl-4">
              <div class="p-3 rounded-3 h-100" :style="{background:'var(--bg-code)',border:`1px solid rgba(${domain.rgb},0.25)`}">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span class="small fw-semibold">{{ skill.name }}</span>
                </div>
                <div class="progress mb-2 progress-track">
                  <div class="progress-bar" :style="{width:'100%',background:skill.color}"></div>
                </div>
                <p class="text-body-secondary mb-1 body-text-sm">{{ skill.context }}</p>
                <div v-if="skill.projects" class="text-xs">
                  <span class="text-body-secondary fw-semibold">Utilized in:</span>
                  <span class="text-body-secondary"> {{ skill.projects }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Architecture Highlights -->
      <section class="mb-5 section-gap">
        <div class="text-center mb-5 mx-auto section-header">
          <span class="badge rounded-pill px-3 py-1 mb-3 fw-medium badge-cyan">Deep Engineering Capabilities</span>
          <h2 class="fw-bold mb-3">Architectural Highlights &amp; Benchmarks</h2>
          <p class="text-body-secondary">Specific design patterns and high-performance protocols engineered across production projects.</p>
        </div>

        <div class="row g-4">
          <div v-for="arch in archHighlights" :key="arch.title" class="col-12 col-md-6">
            <div class="glass rounded-4 p-4 h-100">
              <span class="badge rounded-pill fw-medium mb-3" :style="{background:`rgba(${arch.rgb},0.12)`,color:`rgb(${arch.rgb})`,border:`1px solid rgba(${arch.rgb},0.25)`,fontSize:'0.75rem'}">{{ arch.badge }}</span>
              <h3 class="fs-6 fw-semibold mb-2">{{ arch.title }}</h3>
              <p class="text-body-secondary mb-3 body-text-sm">{{ arch.desc }}</p>
              <p class="text-body-secondary mb-0 text-xs">{{ arch.meta }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const siteUrl = 'https://chirag-gajjar-software-engineer.vercel.app'

useSeoMeta({
  title: 'Technical Skills Matrix | Chirag Gajjar (7+ Years Software Engineer)',
  ogTitle: 'Skills — Chirag Gajjar | Software Engineer',
  description: 'Complete skills matrix of Chirag Gajjar: Angular, React, Vue, Next.js, Nuxt, TypeScript, Node.js, Express, Go, Rust, AWS, Docker, PostgreSQL, MongoDB, Redis, and AI tooling.',
  ogDescription: 'Full-stack engineering skills: Angular, React, Go, Rust, Node.js, AWS, databases, and AI acceleration.',
  ogUrl: `${siteUrl}/skills`,
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/skills` }]
})

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'Skills — Chirag Gajjar',
  url: `${siteUrl}/skills`,
  mainEntity: {
    '@type': 'Person',
    name: 'Chirag Gajjar',
    jobTitle: 'Software Engineer',
    knowsAbout: [
      'Angular', 'React', 'Vue', 'Next.js', 'Nuxt', 'TypeScript', 'JavaScript',
      'Node.js', 'Express', 'Go', 'Rust', 'AWS', 'Docker', 'PostgreSQL',
      'MongoDB', 'Redis', 'Shopify', 'BigCommerce', 'Cursor IDE', 'Augment AI'
    ]
  }
})

const selectedCategory = ref('all')

const categories = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'frontend', label: 'Frontend & Frameworks' },
  { id: 'backend', label: 'Backend & Systems' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'databases', label: 'Databases & Caching' },
  { id: 'ai', label: 'AI Acceleration' },
  { id: 'ecommerce', label: 'E-Commerce' }
]

const domains = [
  {
    id: 'frontend', name: 'Frontend & Frameworks', summary: 'HTML, CSS, SCSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, Angular, React, Vue, Next.js, Nuxt',
    rgb: 'var(--cg-google-blue-rgb)',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    skills: [
      { name: 'Angular (22 / Standalone / Signals)', color: 'var(--cg-google-blue)', context: 'Core UI framework at 1center (Salesmate CRM 4+ yrs) & CM Notes', projects: 'Salesmate CRM, CM Notes' },
      { name: 'React 19 & Next.js 16 (App Router)', color: 'var(--cg-google-blue)', context: 'Modern SPAs with Zustand, Recharts, Tiptap, Tailwind CSS v4', projects: 'CM Expense Tracker, CM Notes' },
      { name: 'Vue 3 & Nuxt 4', color: 'var(--cg-google-green)', context: 'Composition API, Nitro server engine, SSR/SSG, Vue Router', projects: 'Portfolio, Internal Applications' },
      { name: 'TypeScript & JavaScript (ESNext)', color: 'var(--cg-google-yellow)', context: 'Strict typing, modern asynchronous patterns, generics', projects: 'All Production Applications' },
      { name: 'Tailwind CSS v4 & SCSS', color: 'var(--cg-google-blue)', context: 'Design tokens, custom Glassmorphism systems, responsive animations', projects: 'CM Notes, Expense Tracker, Salesmate' },
      { name: 'HTML5, CSS3 & Bootstrap', color: 'var(--cg-google-red)', context: 'Semantic markup, accessibility, responsive layouts, cross-browser', projects: 'Infibeam, Lucent, Salesmate' }
    ]
  },
  {
    id: 'backend', name: 'Backend, Systems & Protocols', summary: 'Node.js, Go, Rust, WebSockets, RESTful APIs, Docker',
    rgb: 'var(--cg-google-green-rgb)',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    skills: [
      { name: 'Node.js & Express 5 (Cluster Mode)', color: 'var(--cg-google-green)', context: 'Multi-core cluster scaling, Pino logging, Helmet security, HTTP-only JWTs', projects: 'CM Expense Tracker API' },
      { name: 'Go (Golang 1.26 & fasthttp)', color: 'var(--cg-google-blue)', context: '512K concurrent connections with sub-millisecond response & 64-shard rate limiters', projects: 'CM Notes Go Microservice' },
      { name: 'Rust (Axum 0.7 & Tokio)', color: 'var(--cg-google-red)', context: 'Zero-cost abstractions, asynchronous multithreading, sub-millisecond endpoints', projects: 'CM Notes Rust Backend' },
      { name: 'WebSockets & REST APIs', color: 'var(--cg-google-yellow)', context: 'Real-time state synchronization, clean contract schemas, streaming endpoints', projects: 'Notes App, CRM Dashboards' },
      { name: 'Docker & Containerization', color: 'var(--cg-google-blue)', context: 'Multi-stage builds, container isolation, local environment reproducibility', projects: 'Backend Microservices' }
    ]
  },
  {
    id: 'cloud', name: 'Cloud, DevOps & CI/CD', summary: 'AWS, GitHub Actions, Vercel, Netlify, Render',
    rgb: 'var(--cg-google-red-rgb)',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    skills: [
      { name: 'AWS SAM & Lambda', color: 'var(--cg-google-red)', context: 'Serverless Infrastructure as Code, automated deployment of Rust & Go microservices', projects: 'CM Notes Rust Backend' },
      { name: 'AWS SES', color: 'var(--cg-google-yellow)', context: 'Transactional password recovery, 6-digit OTP with 60s cooldown limiters', projects: 'CM Notes (Amplify/AWS)' },
      { name: 'AWS RDS & API Gateway', color: 'var(--cg-google-blue)', context: 'Managed relational storage, secure API routing, VPC configuration', projects: 'PostgreSQL Cloud Deployment' },
      { name: 'GitHub Actions (CI/CD)', color: 'var(--cg-google-green)', context: 'Automated test suites, build pipelines, and continuous deployment', projects: 'All GitHub Repositories' },
      { name: 'Vercel, Amplify, Netlify, Render', color: 'var(--cg-google-blue)', context: 'Production edge deployments, environment variable isolation', projects: 'React & Next.js Apps' }
    ]
  },
  {
    id: 'databases', name: 'Databases & Caching', summary: 'MongoDB Atlas, PostgreSQL, Redis, Supabase, Neon',
    rgb: 'var(--cg-google-yellow-rgb)',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    skills: [
      { name: 'MongoDB Atlas & Go Driver v2', color: 'var(--cg-google-green)', context: 'BSON document modeling, parameterized queries, optimized indexing', projects: 'CM Notes Go Backend' },
      { name: 'PostgreSQL & SQLx', color: 'var(--cg-google-blue)', context: 'Automatic runtime schema migrations, parameterized query binding', projects: 'CM Notes Rust Backend' },
      { name: 'Redis (Caching & Rate Limiting)', color: 'var(--cg-google-red)', context: 'Non-blocking in-memory caching, distributed token bucket rate limiting', projects: 'CM Expense Tracker' },
      { name: 'Supabase & Neon Postgres', color: 'var(--cg-google-yellow)', context: 'Serverless PostgreSQL, row-level security, real-time subscriptions', projects: 'Cloud Applications' }
    ]
  },
  {
    id: 'ai', name: 'AI Tooling & Accelerated Workflows', summary: 'Cursor IDE, Augment AI, ChatGPT, automated test generation',
    rgb: 'var(--cg-google-blue-rgb)',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    skills: [
      { name: 'Cursor IDE & AI Coding Assistants', color: 'var(--cg-google-blue)', context: 'Harnessing AI contexts for accelerated development and debugging', projects: '1center & Personal Projects' },
      { name: 'Augment AI & LLM Pair Programming', color: 'var(--cg-google-green)', context: 'Cross-file architecture refactoring, complex logic explanation', projects: 'All modern development' },
      { name: 'ChatGPT CLI & APIs', color: 'var(--cg-google-yellow)', context: 'Automated test suite generation, rapid code reviews, prompt engineering', projects: 'API Automation & Refactoring' }
    ]
  },
  {
    id: 'ecommerce', name: 'E-Commerce Platforms & Custom Themes', summary: 'Shopify, Liquid, BigCommerce',
    rgb: 'var(--cg-google-red-rgb)',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    skills: [
      { name: 'Shopify & Liquid Engine', color: 'var(--cg-google-green)', context: 'Custom responsive themes, Liquid template hierarchy, third-party integrations', projects: 'Lucent Innovation, Subliblanks' },
      { name: 'BigCommerce Storefronts', color: 'var(--cg-google-blue)', context: 'Modernized user-centric e-commerce interfaces, streamlined checkout', projects: 'Cook & Boardman' },
      { name: 'E-Commerce SEO & Web Vitals', color: 'var(--cg-google-yellow)', context: 'Asset compression, Core Web Vitals optimization, mobile conversion', projects: 'Lucent, Subliblanks, Cook & Boardman' }
    ]
  }
]

const archHighlights = [
  { badge: '512K Concurrency', rgb: 'var(--cg-google-green-rgb)', title: '64-Shard In-Memory Rate Limiter (Go)', desc: 'Engineered using Go 1.26 & fasthttp with custom 64-shard distribution, FNV-1a hashing, and atomic counters. Eliminates mutex contention on high-frequency API endpoints.', meta: 'Go 1.26 • fasthttp • FNV-1a • Atomic Counters' },
  { badge: 'Zero-Cost Systems', rgb: 'var(--cg-google-blue-rgb)', title: 'Sub-Millisecond Rust RESTful API', desc: 'Engineered with Rust (Axum 0.7 & Tokio) for zero-cost abstractions, asynchronous request handling, AWS RDS PostgreSQL with automated schema migrations.', meta: 'Rust • Axum 0.7 • Tokio • SQLx • PostgreSQL' },
  { badge: 'Enterprise CRM', rgb: 'var(--cg-google-red-rgb)', title: 'Salesmate CRM High-Velocity Angular UI', desc: '4+ years architecting modules for Salesmate CRM. Granular lazy loading, custom change detection, accessible UI components, and rich data reporting.', meta: 'Angular • JavaScript • SCSS • Lazy Loading' },
  { badge: 'Process Scaling', rgb: 'var(--cg-google-yellow-rgb)', title: 'Cluster Mode Multi-Core Express 5 Scaling', desc: 'Multi-core process scaling on Node.js Express 5 with Pino logging, Helmet security, HTTP-only cookie JWTs, and Redis-backed rate limiting.', meta: 'Express 5 • Cluster Mode • Redis • Mongoose' }
]

const filteredDomains = computed(() => {
  if (selectedCategory.value === 'all') return domains
  return domains.filter(d => d.id === selectedCategory.value)
})

function getCategoryCount(catId) {
  if (catId === 'all') return domains.reduce((acc, d) => acc + d.skills.length, 0)
  const found = domains.find(d => d.id === catId)
  return found ? found.skills.length : 0
}
</script>
