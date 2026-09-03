<template>
  <div class="page-wrapper home-page">
    <div class="site-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <!-- Status Pill -->
        <div class="hero-badge-wrap">
          <div class="glass-pill cyan hero-status-badge">
            <span class="pulse-dot"></span>
            <span>Available for Software Engineering Roles</span>
          </div>
        </div>

        <!-- Headline -->
        <h1 class="hero-title">
          Architecting High-Performance Systems &amp;
          <span class="text-gradient-cyan">Liquid Glass UI</span>
        </h1>

        <!-- Subtitle with Resume Summary -->
        <p class="hero-summary">
          I am <strong>Chirag Gajjar</strong>, a Software Engineer with <strong>7+ years of experience</strong> delivering resilient web applications with <strong>Angular</strong>, <strong>React</strong>, and <strong>CSS</strong> across <strong>Frontend</strong>, <strong>Frameworks</strong>, <strong>Backend &amp; Protocols</strong>, <strong>Databases &amp; Caching</strong>, <strong>Cloud &amp; DevOps</strong>, and <strong>E-commerce</strong>. Harnessing modern AI tools (Cursor, Augment, ChatGPT) to accelerate engineering cycles and ship production-grade software.
        </p>

        <!-- CTA Action Buttons -->
        <div class="hero-actions">
          <NuxtLink to="/projects" class="btn-liquid-primary">
            <span>Explore Projects</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </NuxtLink>

          <a
            href="/Chirag_Software_Engineer.pdf"
            download="Chirag_Software_Engineer.pdf"
            class="btn-liquid-secondary btn-resume-hero"
            title="Download Chirag Gajjar Resume"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Resume</span>
          </a>

          <NuxtLink to="/contact" class="btn-liquid-secondary">
            <span>Get in Touch</span>
          </NuxtLink>
        </div>

        <!-- Metrics Bar -->
        <div class="metrics-grid">
          <div class="metric-card liquid-glass">
            <div class="metric-number text-gradient-cyan">7+</div>
            <div class="metric-label">Years of Commercial Experience</div>
            <div class="metric-sub">Enterprise &amp; SaaS Products</div>
          </div>
          <div class="metric-card liquid-glass">
            <div class="metric-number text-gradient-violet">Node</div>
            <div class="metric-label">Express 5 API</div>
            <div class="metric-sub">Cluster Mode Process Scaling</div>
          </div>
          <div class="metric-card liquid-glass">
            <div class="metric-number text-gradient-cyan">512K</div>
            <div class="metric-label">Concurrent Connections</div>
            <div class="metric-sub">Go / fasthttp Microservice</div>
          </div>
          <div class="metric-card liquid-glass">
            <div class="metric-number text-gradient-violet">&lt; 1ms</div>
            <div class="metric-label">Sub-millisecond Latency</div>
            <div class="metric-sub">Rust Axum &amp; Zero-Cost Tokio</div>
          </div>
        </div>
      </section>

      <!-- Featured Projects Spotlight -->
      <section class="section-block">
        <div class="section-header">
          <div class="section-tag">Production Implementations</div>
          <h2 class="section-title">Featured Engineering Showcase</h2>
          <p class="section-desc">
            Direct repositories, deployed single-page applications, and high-throughput microservices built with modern stacks.
          </p>
        </div>

        <div class="featured-projects-grid">
          <!-- Project 1: CM Notes Rust + Angular -->
          <div class="project-spotlight-card liquid-glass liquid-glass-hover">
            <div class="card-glow-orb orb-1"></div>
            <div class="card-header">
              <div class="card-badges">
                <span class="glass-pill cyan">Rust + Angular 22</span>
                <span class="glass-pill indigo">AWS SAM Serverless</span>
              </div>
              <div class="card-external-links">
                <a href="https://main.d3jqv6bft0m3qf.amplifyapp.com" target="_blank" rel="noopener noreferrer" class="icon-link-btn" title="Live Demo">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            <h3 class="card-title">CM Notes — Notes Application</h3>
            <p class="card-subtitle">Rust (Axum 0.7 &amp; Tokio) • Angular 22 SPA • AWS SES • PostgreSQL SQLx</p>
            <p class="card-description">
              Engineered a high-performance notes platform with Angular Signals state management, custom Glassmorphism UI, 4-step Forgot Password with 60s cooldown timer, and sub-millisecond Rust RESTful API backed by AWS RDS PostgreSQL and AWS SAM Lambda deployment.
            </p>

            <div class="card-tech-chips">
              <span class="chip">Angular 22</span>
              <span class="chip">Rust Axum</span>
              <span class="chip">Tokio</span>
              <span class="chip">AWS SES</span>
              <span class="chip">PostgreSQL</span>
              <span class="chip">AWS Amplify</span>
            </div>

            <div class="card-footer-actions">
              <a href="https://main.d3jqv6bft0m3qf.amplifyapp.com" target="_blank" rel="noopener noreferrer" class="btn-card-live">
                Live App &rarr;
              </a>
              <div class="repo-links">
                <a href="https://github.com/ChiragGajjar123/Angular-Frontend-for-rust-backend-Notes-App" target="_blank" rel="noopener noreferrer" class="repo-tag">
                  FE Repo
                </a>
                <a href="https://github.com/ChiragGajjar123/Rust-Backend-Notes-App" target="_blank" rel="noopener noreferrer" class="repo-tag">
                  BE Repo
                </a>
              </div>
            </div>
          </div>

          <!-- Project 2: CM Notes Go + Next.js -->
          <div class="project-spotlight-card liquid-glass liquid-glass-hover">
            <div class="card-glow-orb orb-2"></div>
            <div class="card-header">
              <div class="card-badges">
                <span class="glass-pill cyan">Go 1.26 fasthttp</span>
                <span class="glass-pill rose">512K Concurrency</span>
              </div>
              <div class="card-external-links">
                <a href="https://notes-next-js-mongo-db.vercel.app" target="_blank" rel="noopener noreferrer" class="icon-link-btn" title="Live Demo">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            <h3 class="card-title">CM Notes — High-Concurrency Microservice</h3>
            <p class="card-subtitle">Next.js 16 (App Router) • Go 1.26 fasthttp • MongoDB Atlas • Resend API</p>
            <p class="card-description">
              Tuned to process 512K concurrent connections with sub-millisecond response times. Built with custom 64-shard in-memory rate limiter using FNV-1a hashing &amp; atomic counters to eliminate lock contention, Tiptap Rich-Text Editor, and Resend transactional email.
            </p>

            <div class="card-tech-chips">
              <span class="chip">Next.js 16</span>
              <span class="chip">React 19</span>
              <span class="chip">Go fasthttp</span>
              <span class="chip">64-Shard Limiter</span>
              <span class="chip">Resend API</span>
              <span class="chip">MongoDB Atlas</span>
            </div>

            <div class="card-footer-actions">
              <a href="https://notes-next-js-mongo-db.vercel.app" target="_blank" rel="noopener noreferrer" class="btn-card-live">
                Live App &rarr;
              </a>
              <div class="repo-links">
                <a href="https://github.com/ChiragGajjar123/Notes---Next.js-MongoDB" target="_blank" rel="noopener noreferrer" class="repo-tag">
                  FE Repo
                </a>
                <a href="https://github.com/ChiragGajjar123/Notes-App-Go-Backend" target="_blank" rel="noopener noreferrer" class="repo-tag">
                  BE Repo
                </a>
              </div>
            </div>
          </div>

          <!-- Project 3: CM Expense Tracker -->
          <div class="project-spotlight-card liquid-glass liquid-glass-hover">
            <div class="card-glow-orb orb-1"></div>
            <div class="card-header">
              <div class="card-badges">
                <span class="glass-pill indigo">React 19 + Express 5</span>
                <span class="glass-pill cyan">Redis Caching</span>
              </div>
              <div class="card-external-links">
                <a href="https://expense-tracker-app-react-node-expr.vercel.app" target="_blank" rel="noopener noreferrer" class="icon-link-btn" title="Live Demo">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            <h3 class="card-title">CM Expense Tracker — Financial Analytics</h3>
            <p class="card-subtitle">React 19 • TypeScript • Vite 8 • Zustand • Recharts • Node Express 5 Cluster</p>
            <p class="card-description">
              Real-time budget tracking with category analytics. RESTful API scaled with Node.js Cluster mode multi-core process scaling, Pino structured logging, Helmet security, HTTP-only cookie JWTs, Redis rate limiting, and Resend email alerts.
            </p>

            <div class="card-tech-chips">
              <span class="chip">React 19</span>
              <span class="chip">Vite 8</span>
              <span class="chip">Zustand</span>
              <span class="chip">Express 5 Cluster</span>
              <span class="chip">Redis</span>
              <span class="chip">Recharts</span>
            </div>

            <div class="card-footer-actions">
              <a href="https://expense-tracker-app-react-node-expr.vercel.app" target="_blank" rel="noopener noreferrer" class="btn-card-live">
                Live App &rarr;
              </a>
              <div class="repo-links">
                <a href="https://github.com/ChiragGajjar123/Expense-Tracker-App---React---Node---Express---mongoDB" target="_blank" rel="noopener noreferrer" class="repo-tag">
                  FE Repo
                </a>
                <a href="https://github.com/ChiragGajjar123/Expense-Tracker-Node-Express-Backend" target="_blank" rel="noopener noreferrer" class="repo-tag">
                  BE Repo
                </a>
              </div>
            </div>
          </div>

          <!-- Project 4: Salesmate CRM -->
          <div class="project-spotlight-card liquid-glass liquid-glass-hover">
            <div class="card-glow-orb orb-2"></div>
            <div class="card-header">
              <div class="card-badges">
                <span class="glass-pill cyan">Enterprise SaaS</span>
                <span class="glass-pill indigo">Angular Core</span>
              </div>
              <div class="card-external-links">
                <a href="https://www.salesmate.io" target="_blank" rel="noopener noreferrer" class="icon-link-btn" title="Live Product">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            <h3 class="card-title">Salesmate CRM Product</h3>
            <p class="card-subtitle">Angular • JavaScript • SCSS • Enterprise Sales Automation</p>
            <p class="card-description">
              SaaS product used by businesses worldwide for sales automation and customer lifecycle management. Built responsive UI modules, complex dashboards, reporting features, lazy loading, and fine-tuned change detection strategies.
            </p>

            <div class="card-tech-chips">
              <span class="chip">Angular</span>
              <span class="chip">Sales Automation</span>
              <span class="chip">Lazy Loading</span>
              <span class="chip">UI/UX Reviews</span>
              <span class="chip">Dashboards</span>
            </div>

            <div class="card-footer-actions">
              <a href="https://www.salesmate.io" target="_blank" rel="noopener noreferrer" class="btn-card-live">
                salesmate.io &rarr;
              </a>
              <NuxtLink to="/experience" class="repo-tag">
                Role Details
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="view-all-projects-cta">
          <NuxtLink to="/projects" class="btn-liquid-secondary">
            <span>View All 6 Production Projects (Including E-commerce)</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </NuxtLink>
        </div>
      </section>

      <!-- Technical Domains Matrix (from Technical Skills section of Resume) -->
      <section class="section-block">
        <div class="section-header">
          <div class="section-tag">Technical Capabilities</div>
          <h2 class="section-title">Core Engineering Domains</h2>
          <p class="section-desc">
            Complete mastery across the modern software lifecycle from responsive UI systems to high-concurrency protocols and cloud infrastructure.
          </p>
        </div>

        <div class="domain-grid">
          <!-- Domain 1: Frontend & Frameworks -->
          <div class="domain-card liquid-glass">
            <div class="domain-icon-box cyan">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 class="domain-title">Frontend &amp; Frameworks</h3>
            <p class="domain-desc">
              HTML, CSS, SCSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, Angular (Signals &amp; Standalone), React 19, Vue 3, Next.js (App Router), Nuxt.
            </p>
            <div class="domain-pills">
              <span class="mini-pill">Angular</span>
              <span class="mini-pill">React</span>
              <span class="mini-pill">Vue / Nuxt</span>
              <span class="mini-pill">Next.js</span>
              <span class="mini-pill">TypeScript</span>
              <span class="mini-pill">SCSS</span>
            </div>
          </div>

          <!-- Domain 2: Backend & Protocols -->
          <div class="domain-card liquid-glass">
            <div class="domain-icon-box indigo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 class="domain-title">Backend &amp; Protocols</h3>
            <p class="domain-desc">
              Node.js, Express, Docker, Go (Golang 1.26, fasthttp), Rust (Axum, Tokio), WebSockets, REST APIs, multi-core cluster scaling, atomic rate limiters.
            </p>
            <div class="domain-pills">
              <span class="mini-pill">Rust (Axum)</span>
              <span class="mini-pill">Go (fasthttp)</span>
              <span class="mini-pill">Node Express</span>
              <span class="mini-pill">WebSockets</span>
              <span class="mini-pill">REST APIs</span>
              <span class="mini-pill">Docker</span>
            </div>
          </div>

          <!-- Domain 3: Cloud & DevOps -->
          <div class="domain-card liquid-glass">
            <div class="domain-icon-box rose">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
            </div>
            <h3 class="domain-title">Cloud &amp; DevOps</h3>
            <p class="domain-desc">
              AWS (EC2, RDS, Lambda, SES, API Gateway, CloudFormation SAM, Amplify), GitHub Actions (CI/CD), Vercel, Netlify, Render.
            </p>
            <div class="domain-pills">
              <span class="mini-pill">AWS SAM</span>
              <span class="mini-pill">AWS Lambda</span>
              <span class="mini-pill">AWS SES</span>
              <span class="mini-pill">GitHub Actions</span>
              <span class="mini-pill">Vercel</span>
              <span class="mini-pill">Render</span>
            </div>
          </div>

          <!-- Domain 4: Databases & Caching -->
          <div class="domain-card liquid-glass">
            <div class="domain-icon-box cyan">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <h3 class="domain-title">Databases &amp; Caching</h3>
            <p class="domain-desc">
              MongoDB Atlas (Mongoose &amp; Go Driver v2), PostgreSQL (SQLx migrations), Supabase, Neon Postgres, Redis (caching &amp; distributed rate limiting).
            </p>
            <div class="domain-pills">
              <span class="mini-pill">PostgreSQL</span>
              <span class="mini-pill">MongoDB Atlas</span>
              <span class="mini-pill">Redis Caching</span>
              <span class="mini-pill">SQLx</span>
              <span class="mini-pill">Supabase</span>
              <span class="mini-pill">Neon</span>
            </div>
          </div>

          <!-- Domain 5: AI Tooling & Acceleration -->
          <div class="domain-card liquid-glass">
            <div class="domain-icon-box indigo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3 class="domain-title">AI Tooling Acceleration</h3>
            <p class="domain-desc">
              Integrated modern AI tools (Cursor, Augment, ChatGPT, CLI &amp; APIs) across daily engineering workflows to boost velocity, write tests, and optimize code.
            </p>
            <div class="domain-pills">
              <span class="mini-pill">Cursor IDE</span>
              <span class="mini-pill">Augment AI</span>
              <span class="mini-pill">ChatGPT</span>
              <span class="mini-pill">Rapid Refactoring</span>
              <span class="mini-pill">Test Generation</span>
            </div>
          </div>

          <!-- Domain 6: E-Commerce & CMS -->
          <div class="domain-card liquid-glass">
            <div class="domain-icon-box rose">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <h3 class="domain-title">E-Commerce Platforms</h3>
            <p class="domain-desc">
              Shopify custom theme development with Liquid, HTML5, SCSS, JS, SEO optimization, BigCommerce enterprise storefronts (Cook &amp; Boardman, Subliblanks).
            </p>
            <div class="domain-pills">
              <span class="mini-pill">Shopify Liquid</span>
              <span class="mini-pill">BigCommerce</span>
              <span class="mini-pill">Conversion SEO</span>
              <span class="mini-pill">Theme Dev</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Resume Download Banner -->
      <section class="section-block">
        <div class="resume-cta-card liquid-glass liquid-glass-elevated">
          <div class="resume-cta-inner">
            <div class="resume-cta-text">
              <span class="glass-pill cyan">Official Curriculum Vitae</span>
              <h2 class="resume-cta-heading">Ready to Review the Full Resume?</h2>
              <p class="resume-cta-desc">
                Contains complete documentation of 7+ years of commercial development at 1center (Salesmate CRM), Lucent Innovation, Infibeam, academic background from Ganpat University, and benchmarks.
              </p>
            </div>
            <div class="resume-cta-btns">
              <a
                href="/Chirag_Software_Engineer.pdf"
                download="Chirag_Software_Engineer.pdf"
                class="btn-liquid-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Resume</span>
              </a>
              <a
                href="/Chirag_Software_Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-liquid-secondary"
              >
                <span>Preview PDF Online</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Chirag Gajjar | Software Engineer'
})
</script>

<style scoped>
.hero-section {
  padding: 3.5rem 0 4.5rem 0;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
}

.hero-badge-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 1.75rem;
}

.hero-status-badge {
  padding: 0.5rem 1.35rem;
}

.hero-title {
  font-size: clamp(2.5rem, 5.5vw, 4.4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.12;
  margin-bottom: 1.75rem;
  color: #ffffff;
}

.hero-summary {
  font-size: clamp(1.05rem, 2vw, 1.22rem);
  color: #94a3b8;
  line-height: 1.75;
  max-width: 820px;
  margin: 0 auto 2.5rem auto;
}

.hero-summary strong {
  color: #f1f5f9;
}

.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  text-align: left;
}

.metric-card {
  padding: 1.6rem 1.4rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.metric-number {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
}

.metric-label {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 0.25rem;
}

.metric-sub {
  font-size: 0.78rem;
  color: #64748b;
  font-family: var(--font-mono);
}

.section-block {
  margin-top: 5rem;
}

.featured-projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;
}

.project-spotlight-card {
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  position: relative;
}

.card-glow-orb {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.15;
}

.orb-1 {
  top: -50px;
  right: -50px;
  background: #00f5d4;
}

.orb-2 {
  bottom: -50px;
  left: -50px;
  background: #8b5cf6;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  gap: 1rem;
}

.card-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.icon-link-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8fafc;
  transition: all 0.2s;
}

.icon-link-btn:hover {
  background: rgba(0, 245, 212, 0.2);
  border-color: #00f5d4;
  color: #00f5d4;
  transform: scale(1.08);
}

.card-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.35rem;
  letter-spacing: -0.02em;
}

.card-subtitle {
  font-size: 0.85rem;
  color: #00f5d4;
  font-family: var(--font-mono);
  margin-bottom: 1rem;
}

.card-description {
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.65;
  margin-bottom: 1.5rem;
  flex: 1;
}

.card-tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.75rem;
}

.chip {
  font-size: 0.76rem;
  font-family: var(--font-mono);
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
}

.card-footer-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.btn-card-live {
  font-size: 0.9rem;
  font-weight: 700;
  color: #00f5d4;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s;
}

.btn-card-live:hover {
  color: #ffffff;
  transform: translateX(3px);
}

.repo-links {
  display: flex;
  gap: 0.5rem;
}

.repo-tag {
  font-size: 0.78rem;
  font-family: var(--font-mono);
  color: #a5b4fc;
  padding: 0.3rem 0.7rem;
  border-radius: 9999px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.25);
  transition: all 0.2s;
}

.repo-tag:hover {
  background: rgba(99, 102, 241, 0.25);
  color: #ffffff;
}

.view-all-projects-cta {
  text-align: center;
  margin-top: 2.5rem;
}

.domain-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.domain-card {
  padding: 2rem;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
}

.domain-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.domain-icon-box.cyan {
  background: rgba(0, 245, 212, 0.12);
  color: #00f5d4;
  border: 1px solid rgba(0, 245, 212, 0.3);
}

.domain-icon-box.indigo {
  background: rgba(99, 102, 241, 0.12);
  color: #818cf8;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.domain-icon-box.rose {
  background: rgba(244, 63, 94, 0.12);
  color: #f43f5e;
  border: 1px solid rgba(244, 63, 94, 0.3);
}

.domain-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.65rem;
}

.domain-desc {
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex: 1;
}

.domain-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.mini-pill {
  font-size: 0.72rem;
  font-family: var(--font-mono);
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: #cbd5e1;
}

.resume-cta-card {
  padding: 3.5rem;
  border-radius: 28px;
}

.resume-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
}

.resume-cta-heading {
  font-size: 2.1rem;
  font-weight: 800;
  color: #ffffff;
  margin: 1rem 0 0.75rem 0;
  letter-spacing: -0.03em;
}

.resume-cta-desc {
  font-size: 1.02rem;
  color: #94a3b8;
  line-height: 1.65;
  max-width: 600px;
}

.resume-cta-btns {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  min-width: 260px;
}

@media (max-width: 1024px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .featured-projects-grid {
    grid-template-columns: 1fr;
  }
  .domain-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .resume-cta-inner {
    flex-direction: column;
    text-align: center;
  }
  .resume-cta-desc {
    margin: 0 auto;
  }
  .resume-cta-btns {
    width: 100%;
    max-width: 380px;
  }
}

@media (max-width: 640px) {
  .metrics-grid {
    grid-template-columns: 1fr;
  }
  .domain-grid {
    grid-template-columns: 1fr;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  .hero-actions a {
    width: 100%;
  }
  .resume-cta-card {
    padding: 2rem;
  }
}
</style>
