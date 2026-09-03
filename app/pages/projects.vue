<template>
  <div class="page-wrapper projects-page">
    <div class="site-container">
      <!-- Header -->
      <div class="section-header">
        <div class="section-tag">Production Portfolios</div>
        <h1 class="section-title">Featured Projects &amp; Architecture</h1>
        <p class="section-desc">
          High-performance distributed web applications built with Angular, React, and CSS, alongside enterprise SaaS platforms and digital storefronts with verifiable source code and live deployments.
        </p>
      </div>

      <!-- Controls: Category Tabs & Search -->
      <div class="project-controls">
        <div class="filter-tabs">
          <button
            v-for="cat in categories"
            :key="cat.id"
            class="filter-tab-btn"
            :class="{ active: selectedCategory === cat.id }"
            @click="selectedCategory = cat.id"
          >
            {{ cat.name }}
          </button>
        </div>

        <div class="search-box liquid-glass">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search tech (e.g., Rust, Go, Angular, Redis, SES)..."
            class="search-input"
          />
          <button v-if="searchQuery" @click="searchQuery = ''" class="clear-search-btn">&times;</button>
        </div>
      </div>

      <!-- Projects List -->
      <div class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card-full liquid-glass liquid-glass-hover"
        >
          <!-- Top Row -->
          <div class="project-top-meta">
            <div class="project-badges">
              <span class="glass-pill" :class="project.badgeColor">{{ project.categoryTag }}</span>
              <span class="glass-pill indigo" v-if="project.type">{{ project.type }}</span>
            </div>

            <!-- External Links (Live + GitHub) -->
            <div class="project-quick-links">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="link-pill live"
                title="Launch Live Application"
              >
                <span>Live App</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <a
                v-if="project.frontendRepo"
                :href="project.frontendRepo"
                target="_blank"
                rel="noopener noreferrer"
                class="link-pill repo"
                title="Frontend GitHub Repository"
              >
                <span>FE Repo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>

              <a
                v-if="project.backendRepo"
                :href="project.backendRepo"
                target="_blank"
                rel="noopener noreferrer"
                class="link-pill repo"
                title="Backend GitHub Repository"
              >
                <span>BE Repo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Title & Subtitle -->
          <h2 class="project-title">{{ project.title }}</h2>
          <p class="project-sub">{{ project.stackSubtitle }}</p>

          <!-- Core Description -->
          <p class="project-desc">{{ project.overview }}</p>

          <!-- Key Architectural Highlights (Bullet Points from Resume) -->
          <div class="project-highlights-box">
            <h4 class="highlights-title">Key Architectural Achievements:</h4>
            <ul class="highlights-list">
              <li v-for="(point, idx) in project.achievements" :key="idx">
                {{ point }}
              </li>
            </ul>
          </div>

          <!-- Technologies Chips -->
          <div class="project-chips-wrap">
            <span v-for="tech in project.tags" :key="tech" class="tech-chip">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'Production Projects Portfolio | Chirag Gajjar'
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
    id: 'cm-notes-rust',
    title: 'CM Notes — Notes Application (Rust & Angular 22)',
    category: 'systems',
    categoryTag: 'Rust + Angular 22',
    badgeColor: 'cyan',
    type: 'Serverless AWS',
    liveUrl: 'https://main.d3jqv6bft0m3qf.amplifyapp.com',
    frontendRepo: 'https://github.com/ChiragGajjar123/Angular-Frontend-for-rust-backend-Notes-App',
    backendRepo: 'https://github.com/ChiragGajjar123/Rust-Backend-Notes-App',
    stackSubtitle: 'Angular 22 SPA • Rust (Axum 0.7 & Tokio) • AWS SES • PostgreSQL SQLx • AWS SAM',
    overview: 'Engineered a high-performance notes platform featuring fine-grained Angular Signals state management, custom Glassmorphism UI, interactive authentication with rate-limited OTP recovery, and sub-millisecond Rust microservice.',
    achievements: [
      'Developed a modern Angular 22 Single Page Application using Standalone Components, Angular Signals for fine-grained state management, and a custom Glassmorphism UI design system.',
      'Built an interactive 4-step Forgot Password workflow featuring real-time input verification, 60-second cooldown timers ("Resend code in XXs"), and inbox/spam folder user alert guidance.',
      'Engineered a high-performance, asynchronous RESTful API using Rust (Axum 0.7 & Tokio) with sub-millisecond response times and zero-cost abstractions.',
      'Implemented a secure password recovery system powered by AWS SES (Simple Email Service) with 6-digit OTP verification, bcrypt token hashing, and 60-second time-interval rate limiting.',
      'Integrated AWS RDS PostgreSQL (via SQLx) with automatic runtime schema migrations, parameterized query binding to prevent SQL injection, and optimized database indexing.',
      'Configured automated Serverless deployment using AWS SAM (CloudFormation), AWS Lambda, API Gateway, and AWS Amplify, powered by GitHub Actions CI/CD pipelines.'
    ],
    tags: ['Angular 22', 'Angular Signals', 'Rust', 'Axum 0.7', 'Tokio', 'AWS SES', 'AWS RDS', 'PostgreSQL', 'SQLx', 'AWS SAM', 'Lambda', 'API Gateway', 'Amplify', 'GitHub Actions']
  },
  {
    id: 'cm-notes-go',
    title: 'CM Notes — High-Concurrency Microservice (Go & Next.js 16)',
    category: 'systems',
    categoryTag: 'Go 1.26 + Next.js 16',
    badgeColor: 'rose',
    type: '512K Concurrency',
    liveUrl: 'https://notes-next-js-mongo-db.vercel.app',
    frontendRepo: 'https://github.com/ChiragGajjar123/Notes---Next.js-MongoDB',
    backendRepo: 'https://github.com/ChiragGajjar123/Notes-App-Go-Backend',
    stackSubtitle: 'Next.js 16 App Router • React 19 • Go 1.26 (fasthttp) • MongoDB Atlas • Resend API',
    overview: 'Engineered a high-concurrency microservice tuned to process 512K concurrent connections with sub-millisecond response times, featuring custom atomic rate limiters, Tiptap rich-text editing, and transactional email verification.',
    achievements: [
      'Developed a modern Next.js 16 (App Router) & React 19 Single Page Application using Tailwind CSS v4, Radix UI, and a custom Glassmorphism UI design system.',
      'Built a dynamic dashboard featuring a Tiptap Rich-Text Editor, real-time search, category filters, note pinning/archiving, custom color tagging, and theme toggling.',
      'Designed an interactive 4-step Forgot Password workflow with real-time input validation, 60-second cooldown timers, and Resend API transactional email integration.',
      'Engineered a high-performance RESTful API microservice using Go (Golang 1.26 & fasthttp) tuned to process 512K concurrent connections with sub-millisecond response times.',
      'Implemented a custom 64-shard in-memory rate limiter utilizing FNV-1a hashing and atomic counters to eliminate lock contention on high-frequency API endpoints.',
      'Configured automated background goroutines for expired entry cleanup and periodic 30-second synchronization with MongoDB for cross-restart state persistence.',
      'Secured authentication APIs with bcrypt password hashing (golang.org/x/crypto), SHA-256 reset token hashing, and internal API key header validation middleware.',
      'Integrated MongoDB Atlas (via MongoDB Go Driver v2) using BSON document schema modeling, parameterized queries, and optimized user/note collection indexing.',
      'Configured cloud deployment on Vercel with environment variable isolation, health check endpoints (/api/health), and GitHub Actions CI/CD pipelines.'
    ],
    tags: ['Go (Golang 1.26)', 'fasthttp', '64-Shard Limiter', 'FNV-1a', 'Next.js 16', 'React 19', 'MongoDB Atlas', 'BSON Go Driver v2', 'Resend API', 'Tiptap Editor', 'Tailwind CSS v4', 'Radix UI', 'Vercel']
  },
  {
    id: 'cm-expense-tracker',
    title: 'CM Expense Tracker — Financial Management Platform',
    category: 'systems',
    categoryTag: 'React 19 + Express 5',
    badgeColor: 'indigo',
    type: 'Multi-Core Cluster',
    liveUrl: 'https://expense-tracker-app-react-node-expr.vercel.app',
    frontendRepo: 'https://github.com/ChiragGajjar123/Expense-Tracker-App---React---Node---Express---mongoDB',
    backendRepo: 'https://github.com/ChiragGajjar123/Expense-Tracker-Node-Express-Backend',
    stackSubtitle: 'React 19 • TypeScript • Vite 8 • Zustand • Recharts • Node.js Express 5 • Redis • MongoDB',
    overview: 'Financial analytics application featuring interactive expenditure breakdown charts, multi-core Express 5 process scaling, Redis rate limiting, and HTTP-only JWT authentication.',
    achievements: [
      'Developed a modern React 19 Single Page Application using TypeScript, Vite 8, Zustand for global state management, Recharts for interactive visual analytics, and Tailwind CSS v4.',
      'Built interactive financial management workflows featuring real-time budget tracking, category-wise expenditure breakdown charts, multi-field transaction search/filtering, and persistent theme settings.',
      'Engineered a high-performance RESTful API using Node.js (Express 5) optimized with Node.js Cluster mode multi-core process scaling, Pino structured logging, and Helmet security headers.',
      'Implemented secure user authentication using JWT (HTTP-only cookies), bcrypt.js password hashing, Redis-backed rate limiting for DDoS/abuse protection, and email notifications via Resend API.',
      'Integrated MongoDB (via Mongoose ORM) featuring optimized database connection pooling, payload compression (gzip/brotli), and non-blocking Redis caching architecture.',
      'Configured automated serverless deployment on Vercel with environment-aware runtime detection, graceful process shutdown handling, and GitHub version control integration.'
    ],
    tags: ['React 19', 'Vite 8', 'TypeScript', 'Zustand', 'Recharts', 'Express 5', 'Cluster Mode', 'Redis', 'MongoDB', 'Mongoose', 'Resend API', 'Pino', 'Helmet', 'Vercel']
  },
  {
    id: 'salesmate-crm',
    title: 'Salesmate CRM — Enterprise Sales Automation SaaS',
    category: 'saas',
    categoryTag: 'Enterprise CRM',
    badgeColor: 'cyan',
    type: 'Global SaaS',
    liveUrl: 'https://www.salesmate.io',
    frontendRepo: '',
    backendRepo: '',
    stackSubtitle: 'Angular • JavaScript • SCSS • Enterprise Workflows • Reporting Dashboards',
    overview: 'SaaS-based sales automation and CRM product used by global businesses. Contributed 4+ years as UI Developer improving core modules, dashboards, change detection, and responsive components.',
    achievements: [
      'Contributed to the development of Salesmate CRM, a SaaS-based product used by global businesses for sales automation and customer management.',
      'Built and optimized Angular-based UI components, improving responsiveness and user experience across web modules.',
      'Worked on CRM workflows, dashboards, and reporting features, ensuring seamless integration with backend APIs.',
      'Improved performance of critical pages by implementing lazy loading, change detection strategies, and reusable components.',
      'Conducted regular UI/UX reviews to enhance usability and accessibility across international client teams.'
    ],
    tags: ['Angular', 'JavaScript', 'SCSS', 'Enterprise SaaS', 'Lazy Loading', 'Change Detection', 'Sales Automation', 'CRM Dashboards', 'UI/UX Optimization']
  },
  {
    id: 'cook-and-boardman',
    title: 'Cook & Boardman — Enterprise E-Commerce Storefront',
    category: 'ecommerce',
    categoryTag: 'BigCommerce',
    badgeColor: 'rose',
    type: 'Commercial Storefront',
    liveUrl: 'https://www.cookandboardman.com',
    frontendRepo: '',
    backendRepo: '',
    stackSubtitle: 'BigCommerce • HTML5 • CSS3 • JavaScript • Responsive Architecture',
    overview: 'Designed and built the Cook & Boardman e-commerce storefront on BigCommerce, delivering a modernized, user-centric interface supporting enterprise digital transformation goals.',
    achievements: [
      'Storefront Development & UI/UX: Designed and built the Cook & Boardman e-commerce storefront on BigCommerce using HTML5, CSS3, and JavaScript, implementing a modernized, user-centric interface to support digital transformation goals.',
      'Responsive Architecture: Created fully responsive layouts to ensure seamless navigation, visual consistency, and optimal interaction across desktop and mobile devices.',
      'Navigation & Customer Experience: Streamlined site structure and user flows to enhance overall customer experience, improve usability, and drive engagement.'
    ],
    tags: ['BigCommerce', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'E-Commerce UX', 'Customer Journey Optimization']
  },
  {
    id: 'subliblanks',
    title: 'Subliblanks — Custom Shopify Storefront & Theme',
    category: 'ecommerce',
    categoryTag: 'Shopify Liquid',
    badgeColor: 'indigo',
    type: 'Custom Theme',
    liveUrl: 'https://subliblanks.com',
    frontendRepo: '',
    backendRepo: '',
    stackSubtitle: 'Shopify • Liquid • JavaScript • HTML5 • SCSS • Conversion SEO',
    overview: 'Custom Shopify storefront development with tailored product catalogs, promotional banner systems, performance tuning, and cross-device responsiveness.',
    achievements: [
      'Custom Theme Development: Built and customized responsive Shopify themes for Subliblanks.com using Liquid, JavaScript, HTML5, and SCSS.',
      'Catalog & Navigation UI: Designed dynamic product catalogs, promotional banners, and intuitive navigation to enhance customer experience.',
      'Performance & Responsiveness: Ensured cross-device compatibility and optimized site speed for faster page load times.',
      'Brand Alignment: Partnered with stakeholders to integrate UI/UX design with business, branding, and marketing strategies.'
    ],
    tags: ['Shopify', 'Liquid', 'HTML5', 'SCSS', 'JavaScript', 'Product Catalogs', 'Conversion Optimization', 'Web Vitals']
  }
]

const filteredProjects = computed(() => {
  return projects.filter(proj => {
    // Category filter
    const matchesCategory = selectedCategory.value === 'all' || proj.category === selectedCategory.value

    // Search query filter
    if (!searchQuery.value.trim()) return matchesCategory
    const q = searchQuery.value.toLowerCase()
    const matchesQuery =
      proj.title.toLowerCase().includes(q) ||
      proj.stackSubtitle.toLowerCase().includes(q) ||
      proj.overview.toLowerCase().includes(q) ||
      proj.tags.some(t => t.toLowerCase().includes(q)) ||
      proj.achievements.some(a => a.toLowerCase().includes(q))

    return matchesCategory && matchesQuery
  })
})
</script>

<style scoped>
.project-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
}

.filter-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-tab-btn {
  padding: 0.6rem 1.25rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  color: #94a3b8;
  font-size: 0.88rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.filter-tab-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.filter-tab-btn.active {
  background: rgba(0, 245, 212, 0.12);
  border-color: rgba(0, 245, 212, 0.4);
  color: #00f5d4;
  box-shadow: 0 0 15px rgba(0, 245, 212, 0.15);
}

.search-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 1.25rem;
  border-radius: var(--radius-full);
  width: 100%;
  max-width: 360px;
  color: #94a3b8;
}

.search-input {
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 0.88rem;
  width: 100%;
}

.search-input::placeholder {
  color: #64748b;
}

.clear-search-btn {
  color: #94a3b8;
  font-size: 1.2rem;
  padding: 0 0.25rem;
}

.clear-search-btn:hover {
  color: #ffffff;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.project-card-full {
  padding: 3rem;
  border-radius: var(--radius-lg);
}

.project-top-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.project-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.project-quick-links {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-wrap: wrap;
}

.link-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.95rem;
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  transition: all 0.2s ease;
}

.link-pill.live {
  background: rgba(0, 245, 212, 0.12);
  border: 1px solid rgba(0, 245, 212, 0.35);
  color: #00f5d4;
}

.link-pill.live:hover {
  background: rgba(0, 245, 212, 0.25);
  color: #ffffff;
  transform: translateY(-2px);
}

.link-pill.repo {
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #a5b4fc;
}

.link-pill.repo:hover {
  background: rgba(99, 102, 241, 0.25);
  color: #ffffff;
  transform: translateY(-2px);
}

.project-title {
  font-size: 1.7rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.35rem;
  letter-spacing: -0.02em;
}

.project-sub {
  font-size: 0.92rem;
  color: #00f5d4;
  font-family: var(--font-mono);
  margin-bottom: 1.25rem;
}

.project-desc {
  font-size: 1.02rem;
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 1.75rem;
}

.project-highlights-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  margin-bottom: 1.75rem;
}

.highlights-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

.highlights-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.highlights-list li {
  position: relative;
  padding-left: 1.4rem;
  font-size: 0.92rem;
  color: #94a3b8;
  line-height: 1.6;
}

.highlights-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #00f5d4;
}

.project-chips-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-chip {
  font-size: 0.78rem;
  font-family: var(--font-mono);
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
}

@media (max-width: 768px) {
  .project-card-full {
    padding: 1.75rem;
  }
  .project-top-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
