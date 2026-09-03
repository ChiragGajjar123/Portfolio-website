<template>
  <div class="page-wrapper skills-page">
    <div class="site-container">
      <!-- Header -->
      <div class="section-header">
        <div class="section-tag">Technical Competencies</div>
        <h1 class="section-title">Skills &amp; Architecture Matrix</h1>
        <p class="section-desc">
          Every skill, language, framework, protocol, and cloud tool backed by 7+ years of commercial production experience and verifiable project repositories.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="skills-filter-bar">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="filter-tab-btn"
          :class="{ active: selectedCategory === cat.id }"
          @click="selectedCategory = cat.id"
        >
          <span>{{ cat.label }}</span>
          <span class="tab-count">{{ getCategoryCount(cat.id) }}</span>
        </button>
      </div>

      <!-- Skills Grid -->
      <div class="skills-domain-container">
        <div
          v-for="domain in filteredDomains"
          :key="domain.name"
          class="skill-category-block liquid-glass"
        >
          <div class="category-top">
            <div class="category-icon-title">
              <div class="category-icon" :class="domain.colorClass">
                <span v-html="domain.iconSvg"></span>
              </div>
              <div>
                <h2 class="category-heading">{{ domain.name }}</h2>
                <p class="category-sub">{{ domain.summary }}</p>
              </div>
            </div>
            <span class="glass-pill" :class="domain.pillClass">{{ domain.skills.length }} Technologies</span>
          </div>

          <!-- Skill Items in this Domain -->
          <div class="skills-items-grid">
            <div
              v-for="skill in domain.skills"
              :key="skill.name"
              class="skill-spec-card"
            >
              <div class="skill-header">
                <div class="skill-title-row">
                  <span class="skill-name">{{ skill.name }}</span>
                </div>
                <div
                  class="skill-bar-wrap"
                  role="progressbar"
                  :aria-label="`${skill.name} experience`"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :aria-valuenow="skill.percent"
                >
                  <div
                    class="skill-bar-fill"
                    :style="{ width: skill.percent + '%' }"
                    :class="domain.barClass"
                  ></div>
                </div>
              </div>
              <p class="skill-context">{{ skill.context }}</p>
              <div class="skill-provenance" v-if="skill.projects">
                <span class="provenance-label">Utilized in:</span>
                <span class="provenance-text">{{ skill.projects }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Architecture Highlights Section -->
      <div class="section-block">
        <div class="section-header">
          <div class="section-tag">Deep Engineering Capabilities</div>
          <h2 class="section-title">Architectural Highlights &amp; Benchmarks</h2>
          <p class="section-desc">
            Specific design patterns and high-performance protocols engineered across my production projects.
          </p>
        </div>

        <div class="arch-highlights-grid">
          <div class="arch-card liquid-glass">
            <div class="arch-badge cyan">512K Concurrency</div>
            <h3 class="arch-title">64-Shard In-Memory Rate Limiter (Go)</h3>
            <p class="arch-desc">
              Engineered using Go 1.26 &amp; fasthttp with custom 64-shard distribution, FNV-1a hashing, and atomic counters. Eliminates mutex contention on high-frequency API endpoints while running automated background goroutines for expired entry cleanup.
            </p>
            <div class="arch-meta">Go 1.26 • fasthttp • FNV-1a • Atomic Counters</div>
          </div>

          <div class="arch-card liquid-glass">
            <div class="arch-badge indigo">Zero-Cost Systems</div>
            <h3 class="arch-title">Sub-Millisecond Rust RESTful API</h3>
            <p class="arch-desc">
              Engineered with Rust (Axum 0.7 &amp; Tokio) for zero-cost abstractions, asynchronous request handling, AWS RDS PostgreSQL (via SQLx) with automated runtime schema migrations, and parameterized query binding to prevent SQL injection.
            </p>
            <div class="arch-meta">Rust • Axum 0.7 • Tokio • SQLx • PostgreSQL</div>
          </div>

          <div class="arch-card liquid-glass">
            <div class="arch-badge rose">Enterprise CRM</div>
            <h3 class="arch-title">Salesmate CRM High-Velocity Angular UI</h3>
            <p class="arch-desc">
              4+ years architecting modules for Salesmate CRM. Implemented granular lazy loading, custom change detection optimizations, accessible UI components, and rich data reporting workflows used by global businesses.
            </p>
            <div class="arch-meta">Angular • JavaScript • SCSS • Lazy Loading • Dashboards</div>
          </div>

          <div class="arch-card liquid-glass">
            <div class="arch-badge cyan">Process Scaling</div>
            <h3 class="arch-title">Cluster Mode Multi-Core Express 5 Scaling</h3>
            <p class="arch-desc">
              Multi-core process scaling on Node.js Express 5 with Pino structured logging, Helmet security headers, HTTP-only cookie JWTs, and Redis-backed rate limiting for DDoS/abuse protection.
            </p>
            <div class="arch-meta">Express 5 • Cluster Mode • Redis • Mongoose • Brotli</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'Technical Skills Matrix | Chirag Gajjar (7+ Years Software Engineer)'
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
    id: 'frontend',
    name: 'Frontend & Frameworks',
    summary: 'HTML, CSS, SCSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, Angular, React, Vue, Next.js, Nuxt',
    colorClass: 'cyan',
    pillClass: 'cyan',
    barClass: 'bar-cyan',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    skills: [
      { name: 'Angular (22 / Standalone / Signals)', level: 'Expert', percent: 96, context: 'Core UI framework at 1center (Salesmate CRM 4+ yrs) & CM Notes app with Angular Signals', projects: 'Salesmate CRM, CM Notes (Rust backend)' },
      { name: 'React 19 & Next.js 16 (App Router)', level: 'Expert', percent: 94, context: 'Modern SPAs with Zustand, Recharts, Tiptap Rich-Text, Tailwind CSS v4', projects: 'CM Expense Tracker, CM Notes (Go backend)' },
      { name: 'Vue 3 & Nuxt 4', level: 'Advanced', percent: 90, context: 'Composition API, Nitro server engine, SSR/SSG, Vue Router, Liquid Glass UI', projects: 'Portfolio, Internal Applications' },
      { name: 'TypeScript & JavaScript (ESNext)', level: 'Expert', percent: 96, context: 'Strict typing, modern asynchronous patterns, generics, cross-platform modules', projects: 'All Production Applications' },
      { name: 'Tailwind CSS v4 & SCSS', level: 'Expert', percent: 95, context: 'Design tokens, custom Glassmorphism systems, responsive micro-animations', projects: 'CM Notes, Expense Tracker, Salesmate CRM' },
      { name: 'HTML5, CSS3 & Bootstrap', level: 'Expert', percent: 98, context: 'Semantic markup, accessibility (a11y), responsive layouts, cross-browser compatibility', projects: 'Infibeam, Lucent, Salesmate' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend, Systems & Protocols',
    summary: 'Node.js (Express 5), Go (fasthttp), Rust (Axum, Tokio), WebSockets, RESTful APIs, Docker',
    colorClass: 'indigo',
    pillClass: 'indigo',
    barClass: 'bar-indigo',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    skills: [
      { name: 'Node.js & Express 5 (Cluster Mode)', level: 'Expert', percent: 95, context: 'Multi-core cluster scaling, Pino logging, Helmet security headers, HTTP-only JWTs', projects: 'CM Expense Tracker API' },
      { name: 'Go (Golang 1.26 & fasthttp)', level: 'Advanced', percent: 92, context: 'Tuned for 512K concurrent connections with sub-millisecond response & 64-shard rate limiters', projects: 'CM Notes Go Microservice' },
      { name: 'Rust (Axum 0.7 & Tokio)', level: 'Advanced', percent: 90, context: 'Zero-cost abstractions, asynchronous multithreading, sub-millisecond REST endpoints', projects: 'CM Notes Rust Backend' },
      { name: 'WebSockets & REST APIs', level: 'Expert', percent: 94, context: 'Real-time state synchronization, clean contract schemas, streaming endpoints', projects: 'Notes App, CRM Dashboards' },
      { name: 'Docker & Containerization', level: 'Advanced', percent: 88, context: 'Multi-stage builds, container isolation, local environment reproducibility', projects: 'Backend Microservices' }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud, DevOps & CI/CD',
    summary: 'AWS (EC2, RDS, Lambda, SES, API Gateway, SAM, Amplify), GitHub Actions, Vercel, Netlify, Render',
    colorClass: 'rose',
    pillClass: 'rose',
    barClass: 'bar-rose',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    skills: [
      { name: 'AWS SAM (CloudFormation) & Lambda', level: 'Advanced', percent: 90, context: 'Serverless Infrastructure as Code, automated deployment of Rust & Go microservices', projects: 'CM Notes Rust Backend' },
      { name: 'AWS SES (Simple Email Service)', level: 'Advanced', percent: 92, context: 'Transactional password recovery, 6-digit OTP verification with 60s cooldown limiters', projects: 'CM Notes (Amplify/AWS)' },
      { name: 'AWS RDS & API Gateway', level: 'Advanced', percent: 89, context: 'Managed relational storage, secure API routing, VPC configuration', projects: 'PostgreSQL Cloud Deployment' },
      { name: 'GitHub Actions (CI/CD Pipelines)', level: 'Expert', percent: 94, context: 'Automated test suites, build pipelines, and continuous deployment workflows', projects: 'All GitHub Repositories' },
      { name: 'Vercel, Amplify, Netlify, Render', level: 'Expert', percent: 95, context: 'Production edge deployments, environment variable isolation, health checks', projects: 'React & Next.js Apps' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases & Caching',
    summary: 'MongoDB Atlas, PostgreSQL (SQLx), Redis (Caching & Rate Limiting), Supabase, Neon Postgres',
    colorClass: 'cyan',
    pillClass: 'cyan',
    barClass: 'bar-cyan',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    skills: [
      { name: 'MongoDB Atlas & Go Driver v2', level: 'Expert', percent: 94, context: 'BSON document modeling, parameterized queries, optimized indexing, 30s cross-restart sync', projects: 'CM Notes Go Backend' },
      { name: 'PostgreSQL & SQLx', level: 'Advanced', percent: 92, context: 'Automatic runtime schema migrations, parameterized query binding to prevent SQL injection', projects: 'CM Notes Rust Backend' },
      { name: 'Redis (Caching & Rate Limiting)', level: 'Advanced', percent: 92, context: 'Non-blocking in-memory caching, distributed token bucket rate limiting for DDoS protection', projects: 'CM Expense Tracker' },
      { name: 'Supabase & Neon Postgres', level: 'Advanced', percent: 88, context: 'Serverless PostgreSQL, row-level security policies, real-time database subscriptions', projects: 'Cloud Applications' }
    ]
  },
  {
    id: 'ai',
    name: 'AI Tooling & Accelerated Workflows',
    summary: 'Cursor IDE, Augment AI, ChatGPT CLI & APIs, automated test generation, rapid refactoring',
    colorClass: 'indigo',
    pillClass: 'indigo',
    barClass: 'bar-indigo',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    skills: [
      { name: 'Cursor IDE & AI Coding Assistants', level: 'Expert', percent: 98, context: 'Harnessing AI contexts for accelerated development, boilerplate reduction, and debugging', projects: '1center (Salesmate CRM) & Personal Projects' },
      { name: 'Augment AI & LLM Pair Programming', level: 'Expert', percent: 95, context: 'Cross-file architecture refactoring, complex logic explanation, documentation synthesis', projects: 'All modern development' },
      { name: 'ChatGPT CLI & APIs', level: 'Expert', percent: 95, context: 'Automated test suite generation, rapid code reviews, prompt engineering', projects: 'API Automation & Refactoring' }
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Platforms & Custom Themes',
    summary: 'Shopify (Liquid, custom themes, SEO, asset compression), BigCommerce storefront development',
    colorClass: 'rose',
    pillClass: 'rose',
    barClass: 'bar-rose',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    skills: [
      { name: 'Shopify & Liquid Engine', level: 'Expert', percent: 95, context: 'Custom responsive themes, Liquid template hierarchy, third-party app integrations', projects: 'Lucent Innovation, Subliblanks' },
      { name: 'BigCommerce Storefronts', level: 'Advanced', percent: 90, context: 'Modernized user-centric e-commerce interfaces, streamlined checkout & navigation', projects: 'Cook & Boardman' },
      { name: 'E-Commerce SEO & Web Vitals', level: 'Expert', percent: 94, context: 'Asset compression, Core Web Vitals optimization, mobile conversion enhancements', projects: 'Lucent, Subliblanks, Cook & Boardman' }
    ]
  }
]

const filteredDomains = computed(() => {
  if (selectedCategory.value === 'all') return domains
  return domains.filter(d => d.id === selectedCategory.value)
})

function getCategoryCount(catId) {
  if (catId === 'all') {
    return domains.reduce((acc, d) => acc + d.skills.length, 0)
  }
  const found = domains.find(d => d.id === catId)
  return found ? found.skills.length : 0
}
</script>

<style scoped>
.skills-filter-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: 3.5rem;
}

.filter-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  color: #94a3b8;
  font-size: 0.88rem;
  font-weight: 600;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.filter-tab-btn:hover {
  background: rgba(255, 255, 255, 0.09);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.2);
}

.filter-tab-btn.active {
  background: rgba(0, 245, 212, 0.12);
  border-color: rgba(0, 245, 212, 0.4);
  color: #00f5d4;
  box-shadow: 0 0 15px rgba(0, 245, 212, 0.15);
}

.tab-count {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  padding: 0.1rem 0.45rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
}

.skills-domain-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.skill-category-block {
  padding: 2.75rem;
  border-radius: var(--radius-lg);
}

.category-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  gap: 1.5rem;
  flex-wrap: wrap;
}

.category-icon-title {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.category-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-icon.cyan {
  background: rgba(0, 245, 212, 0.12);
  color: #00f5d4;
  border: 1px solid rgba(0, 245, 212, 0.3);
}

.category-icon.indigo {
  background: rgba(99, 102, 241, 0.12);
  color: #818cf8;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.category-icon.rose {
  background: rgba(244, 63, 94, 0.12);
  color: #f43f5e;
  border: 1px solid rgba(244, 63, 94, 0.3);
}

.category-heading {
  font-size: 1.45rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.category-sub {
  font-size: 0.88rem;
  color: #94a3b8;
}

.skills-items-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.skill-spec-card {
  position: relative;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  overflow: hidden;
}

.skill-spec-card::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 3px;
  background: linear-gradient(180deg, var(--liquid-cyan), var(--liquid-indigo));
  opacity: 0.7;
}

.skill-spec-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.skill-header {
  margin-bottom: 0.75rem;
}

.skill-title-row {
  margin-bottom: 0.7rem;
}

.skill-name {
  display: block;
  font-weight: 700;
  font-size: 1.02rem;
  color: #f8fafc;
  line-height: 1.35;
}

.skill-bar-wrap {
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 9999px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  border-radius: 9999px;
  transition: width 1s ease;
}

.bar-cyan {
  background: linear-gradient(90deg, #00f5d4, #38bdf8);
}

.bar-indigo {
  background: linear-gradient(90deg, #6366f1, #a855f7);
}

.bar-rose {
  background: linear-gradient(90deg, #f43f5e, #fb7185);
}

.skill-context {
  font-size: 0.88rem;
  color: #94a3b8;
  line-height: 1.5;
  margin-bottom: 0.65rem;
}

.skill-provenance {
  font-size: 0.78rem;
  color: #cbd5e1;
  display: flex;
  gap: 0.4rem;
}

.provenance-label {
  color: #64748b;
  font-family: var(--font-mono);
}

.provenance-text {
  color: #a5b4fc;
}

.arch-highlights-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;
}

.arch-card {
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
}

.arch-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  margin-bottom: 1rem;
  width: fit-content;
}

.arch-badge.cyan {
  background: rgba(0, 245, 212, 0.12);
  color: #00f5d4;
  border: 1px solid rgba(0, 245, 212, 0.3);
}

.arch-badge.indigo {
  background: rgba(99, 102, 241, 0.12);
  color: #818cf8;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.arch-badge.rose {
  background: rgba(244, 63, 94, 0.12);
  color: #f43f5e;
  border: 1px solid rgba(244, 63, 94, 0.3);
}

.arch-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.arch-desc {
  font-size: 0.92rem;
  color: #94a3b8;
  line-height: 1.65;
  margin-bottom: 1.5rem;
  flex: 1;
}

.arch-meta {
  font-size: 0.78rem;
  font-family: var(--font-mono);
  color: #cbd5e1;
  padding-top: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

@media (max-width: 900px) {
  .skills-items-grid, .arch-highlights-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .skill-category-block {
    padding: 1.75rem;
  }
}
</style>
