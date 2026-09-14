<template>
  <div class="pt-5">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5 mx-auto section-header">
        <span class="badge rounded-pill px-3 py-1 mb-3 fw-medium badge-cyan">Production Portfolios</span>
        <h1 class="fw-bold mb-3">Featured Projects &amp; Architecture</h1>
        <p class="text-body-secondary body-text">High-performance distributed web applications built with Angular, React, and CSS, alongside enterprise SaaS platforms and digital storefronts.</p>
      </div>

      <!-- Controls -->
      <div class="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center gap-3 mb-5">
        <div class="d-flex flex-wrap gap-2">
          <button v-for="cat in categories" :key="cat.id" class="btn btn-sm rounded-pill fw-medium px-3 btn-filter" :style="selectedCategory === cat.id ? { background: 'rgba(var(--color-cyan-rgb),0.1)', color: 'var(--color-cyan)', border: '1px solid rgba(var(--color-cyan-rgb),0.25)' } : { background: 'var(--bg-card)', color: 'var(--bs-body-color)', border: '1px solid var(--border-subtle)' }" @click="selectedCategory = cat.id">
            {{ cat.name }}
          </button>
        </div>
        <div class="glass rounded-pill d-flex align-items-center gap-2 px-3 py-2 search-container">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-secondary"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input v-model="searchQuery" type="text" placeholder="Search tech..." class="form-control form-control-sm border-0 bg-transparent p-0 form-search" />
          <button v-if="searchQuery" @click="searchQuery = ''" class="btn btn-sm p-0 border-0 bg-transparent flex-shrink-0 btn-clear">&times;</button>
        </div>
      </div>

      <!-- Projects List -->
      <div class="d-flex flex-column gap-4">
        <div v-for="project in filteredProjects" :key="project.id" class="glass rounded-4 p-4">
          <!-- Top Row -->
          <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
            <div class="d-flex flex-wrap gap-2">
              <span class="badge rounded-pill fw-medium" :style="{background:`rgba(${project.badgeRgb},0.08)`,color:`rgb(${project.badgeRgb})`,border:`1px solid rgba(${project.badgeRgb},0.15)`,fontSize:'0.75rem'}">{{ project.categoryTag }}</span>
              <span v-if="project.type" class="badge rounded-pill fw-medium text-xs badge-indigo">{{ project.type }}</span>
            </div>
            <div class="d-flex flex-wrap gap-2">
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="badge rounded-pill text-decoration-none d-inline-flex align-items-center gap-1 fw-medium badge-success">
                Live App
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <a v-for="repo in project.repos" :key="repo.url" :href="repo.url" target="_blank" rel="noopener noreferrer" class="badge rounded-pill text-decoration-none fw-medium badge-chip">
                {{ repo.label }}
              </a>
            </div>
          </div>

          <h2 class="fs-5 fw-semibold mb-1">{{ project.title }}</h2>
          <p class="text-body-secondary mb-2 text-xs">{{ project.stack }}</p>
          <p class="text-body-secondary mb-3 body-text">{{ project.overview }}</p>

          <!-- Achievements -->
          <div class="p-3 rounded-3 mb-3 block-code">
            <h4 class="fs-6 fw-semibold mb-2">Key Architectural Achievements:</h4>
            <ul class="list-unstyled mb-0">
              <li v-for="(point, idx) in project.achievements" :key="idx" class="mb-2 ps-3 position-relative small text-body-secondary list-line-height">
                <span class="position-absolute rounded-circle bullet-dot"></span>
                {{ point }}
              </li>
            </ul>
          </div>

          <!-- Tech Chips -->
          <div class="d-flex flex-wrap gap-2">
            <span v-for="tech in project.tags" :key="tech" class="badge rounded-3 fw-medium badge-chip">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const siteUrl = 'https://chirag-gajjar-software-engineer.vercel.app'

useSeoMeta({
  title: 'Production Projects Portfolio | Chirag Gajjar',
  ogTitle: 'Projects — Chirag Gajjar | Software Engineer',
  description: 'Production projects by Chirag Gajjar: CM Notes (Rust & Angular), CM Notes (Go & Next.js), CM Expense Tracker (React & Express), Salesmate CRM, Cook & Boardman, Subliblanks.',
  ogDescription: 'Production-grade projects: Rust/Angular notes app, Go microservice with 512K concurrency, React expense tracker, enterprise CRM.',
  ogUrl: `${siteUrl}/projects`,
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/projects` }]
})

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Projects — Chirag Gajjar',
  url: `${siteUrl}/projects`,
  description: 'Production projects and engineering portfolio of Chirag Gajjar.',
  hasPart: [
    {
      '@type': 'SoftwareSourceCode',
      name: 'CM Notes — Rust & Angular 22',
      codeRepository: 'https://github.com/ChiragGajjar123/Rust-Backend-Notes-App',
      programmingLanguage: ['Rust', 'TypeScript'],
      runtimePlatform: ['AWS Lambda', 'Amplify']
    },
    {
      '@type': 'SoftwareSourceCode',
      name: 'CM Notes — Go & Next.js',
      codeRepository: 'https://github.com/ChiragGajjar123/Notes-App-Go-Backend',
      programmingLanguage: ['Go', 'TypeScript'],
      runtimePlatform: ['Vercel']
    },
    {
      '@type': 'SoftwareSourceCode',
      name: 'CM Expense Tracker — React & Express',
      codeRepository: 'https://github.com/ChiragGajjar123/Expense-Tracker-Node-Express-Backend',
      programmingLanguage: ['TypeScript', 'JavaScript'],
      runtimePlatform: ['Vercel']
    }
  ]
})

const selectedCategory = ref('all')
const searchQuery = ref('')

const categories = [
  { id: 'all', name: 'All Projects (6)' },
  { id: 'systems', name: 'Systems & Microservices' },
  { id: 'saas', name: 'Enterprise SaaS' },
  { id: 'ecommerce', name: 'E-Commerce' }
]

const projects = [
  {
    id: 'cm-notes-rust', title: 'CM Notes — Notes Application (Rust & Angular 22)', category: 'systems', categoryTag: 'Rust + Angular 22', badgeRgb: '6,182,212', type: 'Serverless AWS',
    liveUrl: 'https://main.d3jqv6bft0m3qf.amplifyapp.com',
    repos: [{ label: 'FE Repo', url: 'https://github.com/ChiragGajjar123/Angular-Frontend-for-rust-backend-Notes-App' }, { label: 'BE Repo', url: 'https://github.com/ChiragGajjar123/Rust-Backend-Notes-App' }],
    stack: 'Angular 22 SPA • Rust (Axum 0.7 & Tokio) • AWS SES • PostgreSQL SQLx • AWS SAM',
    overview: 'Engineered a high-performance notes platform featuring Angular Signals state management, custom Glassmorphism UI, interactive authentication with rate-limited OTP recovery, and sub-millisecond Rust microservice.',
    achievements: ['Developed a modern Angular 22 SPA using Standalone Components, Angular Signals for fine-grained state management, and custom Glassmorphism UI.', 'Built a 4-step Forgot Password workflow with real-time input verification, 60-second cooldown timers, and inbox/spam folder guidance.', 'Engineered a high-performance, asynchronous RESTful API using Rust (Axum 0.7 & Tokio) with sub-millisecond response times.', 'Implemented a secure password recovery system powered by AWS SES with 6-digit OTP verification, bcrypt token hashing, and 60-second rate limiting.', 'Integrated AWS RDS PostgreSQL (via SQLx) with automatic runtime schema migrations and parameterized query binding.', 'Configured automated Serverless deployment using AWS SAM, Lambda, API Gateway, and AWS Amplify.'],
    tags: ['Angular 22', 'Angular Signals', 'Rust', 'Axum 0.7', 'Tokio', 'AWS SES', 'AWS RDS', 'PostgreSQL', 'SQLx', 'AWS SAM', 'Lambda', 'Amplify']
  },
  {
    id: 'cm-notes-go', title: 'CM Notes — High-Concurrency Microservice (Go & Next.js 16)', category: 'systems', categoryTag: 'Go 1.26 + Next.js 16', badgeRgb: '244,63,94', type: '512K Concurrency',
    liveUrl: 'https://notes-next-js-mongo-db.vercel.app',
    repos: [{ label: 'FE Repo', url: 'https://github.com/ChiragGajjar123/Notes---Next.js-MongoDB' }, { label: 'BE Repo', url: 'https://github.com/ChiragGajjar123/Notes-App-Go-Backend' }],
    stack: 'Next.js 16 App Router • React 19 • Go 1.26 (fasthttp) • MongoDB Atlas • Resend API',
    overview: 'Engineered a high-concurrency microservice tuned to process 512K concurrent connections with sub-millisecond response times, featuring custom atomic rate limiters and Tiptap rich-text editing.',
    achievements: ['Developed a modern Next.js 16 (App Router) & React 19 SPA using Tailwind CSS v4, Radix UI, and custom Glassmorphism UI.', 'Built a dynamic dashboard featuring a Tiptap Rich-Text Editor, real-time search, category filters, note pinning/archiving, and theme toggling.', 'Engineered a high-performance RESTful API using Go (Golang 1.26 & fasthttp) tuned for 512K concurrent connections.', 'Implemented a custom 64-shard in-memory rate limiter utilizing FNV-1a hashing and atomic counters.', 'Configured automated background goroutines for expired entry cleanup and 30-second MongoDB synchronization.', 'Secured authentication APIs with bcrypt password hashing, SHA-256 reset token hashing, and internal API key middleware.'],
    tags: ['Go (Golang 1.26)', 'fasthttp', '64-Shard Limiter', 'FNV-1a', 'Next.js 16', 'React 19', 'MongoDB Atlas', 'Resend API', 'Tiptap Editor', 'Tailwind CSS v4', 'Vercel']
  },
  {
    id: 'cm-expense-tracker', title: 'CM Expense Tracker — Financial Management Platform', category: 'systems', categoryTag: 'React 19 + Express 5', badgeRgb: '99,102,241', type: 'Multi-Core Cluster',
    liveUrl: 'https://expense-tracker-app-react-node-expr.vercel.app',
    repos: [{ label: 'FE Repo', url: 'https://github.com/ChiragGajjar123/Expense-Tracker-App---React---Node---Express---mongoDB' }, { label: 'BE Repo', url: 'https://github.com/ChiragGajjar123/Expense-Tracker-Node-Express-Backend' }],
    stack: 'React 19 • TypeScript • Vite 8 • Zustand • Recharts • Node.js Express 5 • Redis • MongoDB',
    overview: 'Financial analytics application featuring interactive expenditure breakdown charts, multi-core Express 5 process scaling, Redis rate limiting, and HTTP-only JWT authentication.',
    achievements: ['Developed a modern React 19 SPA using TypeScript, Vite 8, Zustand, Recharts, and Tailwind CSS v4.', 'Built interactive financial management workflows with real-time budget tracking and category-wise expenditure charts.', 'Engineered a high-performance RESTful API using Node.js (Express 5) with Cluster mode multi-core process scaling.', 'Implemented secure authentication using JWT (HTTP-only cookies), bcrypt.js, Redis-backed rate limiting, and Resend API.', 'Integrated MongoDB (via Mongoose) with optimized connection pooling, payload compression, and Redis caching.', 'Configured automated serverless deployment on Vercel with environment-aware runtime detection.'],
    tags: ['React 19', 'Vite 8', 'TypeScript', 'Zustand', 'Recharts', 'Express 5', 'Cluster Mode', 'Redis', 'MongoDB', 'Mongoose', 'Resend API', 'Vercel']
  },
  {
    id: 'salesmate-crm', title: 'Salesmate CRM — Enterprise Sales Automation SaaS', category: 'saas', categoryTag: 'Enterprise CRM', badgeRgb: '6,182,212', type: 'Global SaaS',
    liveUrl: 'https://www.salesmate.io', repos: [],
    stack: 'Angular • JavaScript • SCSS • Enterprise Workflows • Reporting Dashboards',
    overview: 'SaaS-based sales automation and CRM product used by global businesses. Contributed 4+ years as UI Developer improving core modules, dashboards, change detection, and responsive components.',
    achievements: ['Contributed to the development of Salesmate CRM, a SaaS-based product used by global businesses for sales automation.', 'Built and optimized Angular-based UI components, improving responsiveness and user experience across web modules.', 'Worked on CRM workflows, dashboards, and reporting features, ensuring seamless integration with backend APIs.', 'Improved performance by implementing lazy loading, change detection strategies, and reusable components.', 'Conducted regular UI/UX reviews to enhance usability and accessibility across international client teams.'],
    tags: ['Angular', 'JavaScript', 'SCSS', 'Enterprise SaaS', 'Lazy Loading', 'Change Detection', 'CRM Dashboards', 'UI/UX Optimization']
  },
  {
    id: 'cook-and-boardman', title: 'Cook & Boardman — Enterprise E-Commerce Storefront', category: 'ecommerce', categoryTag: 'BigCommerce', badgeRgb: '244,63,94', type: 'Commercial Storefront',
    liveUrl: 'https://www.cookandboardman.com', repos: [],
    stack: 'BigCommerce • HTML5 • CSS3 • JavaScript • Responsive Architecture',
    overview: 'Designed and built the Cook & Boardman e-commerce storefront on BigCommerce, delivering a modernized, user-centric interface supporting enterprise digital transformation goals.',
    achievements: ['Storefront Development & UI/UX: Designed and built the e-commerce storefront using HTML5, CSS3, and JavaScript.', 'Responsive Architecture: Created fully responsive layouts for seamless navigation across desktop and mobile devices.', 'Navigation & Customer Experience: Streamlined site structure and user flows to enhance usability and drive engagement.'],
    tags: ['BigCommerce', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'E-Commerce UX']
  },
  {
    id: 'subliblanks', title: 'Subliblanks — Custom Shopify Storefront & Theme', category: 'ecommerce', categoryTag: 'Shopify Liquid', badgeRgb: '99,102,241', type: 'Custom Theme',
    liveUrl: 'https://subliblanks.com', repos: [],
    stack: 'Shopify • Liquid • JavaScript • HTML5 • SCSS • Conversion SEO',
    overview: 'Custom Shopify storefront development with tailored product catalogs, promotional banner systems, performance tuning, and cross-device responsiveness.',
    achievements: ['Custom Theme Development: Built and customized responsive Shopify themes using Liquid, JavaScript, HTML5, and SCSS.', 'Catalog & Navigation UI: Designed dynamic product catalogs, promotional banners, and intuitive navigation.', 'Performance & Responsiveness: Ensured cross-device compatibility and optimized site speed for faster page loads.', 'Brand Alignment: Partnered with stakeholders to integrate UI/UX design with business and marketing strategies.'],
    tags: ['Shopify', 'Liquid', 'HTML5', 'SCSS', 'JavaScript', 'Product Catalogs', 'Conversion Optimization']
  }
]

const filteredProjects = computed(() => {
  return projects.filter(proj => {
    const matchesCategory = selectedCategory.value === 'all' || proj.category === selectedCategory.value
    if (!searchQuery.value.trim()) return matchesCategory
    const q = searchQuery.value.toLowerCase()
    const matchesQuery = proj.title.toLowerCase().includes(q) || proj.stack.toLowerCase().includes(q) || proj.overview.toLowerCase().includes(q) || proj.tags.some(t => t.toLowerCase().includes(q)) || proj.achievements.some(a => a.toLowerCase().includes(q))
    return matchesCategory && matchesQuery
  })
})
</script>
