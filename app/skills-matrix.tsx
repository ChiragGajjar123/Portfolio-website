import styles from './skills-matrix.module.scss'
import SkillFilters from './skill-filters'

const categories = [
  ['all', 'All Disciplines'],
  ['frontend', 'Frontend & Frameworks'],
  ['backend', 'Backend & Systems'],
  ['cloud', 'Cloud & DevOps'],
  ['databases', 'Databases & Caching'],
  ['ai', 'AI Acceleration'],
  ['ecommerce', 'E-Commerce']
]

const skillProgressTones: Record<string, string[]> = {
  frontend: ['blue', 'blue', 'green', 'yellow', 'blue', 'red'],
  backend: ['green', 'blue', 'red', 'yellow', 'blue'],
  cloud: ['red', 'yellow', 'blue', 'green', 'blue'],
  databases: ['green', 'blue', 'red', 'yellow'],
  ai: ['blue', 'green', 'yellow'],
  ecommerce: ['green', 'blue', 'yellow'],
}

const skillDomains = [
  { id:'frontend', name:'Frontend & Frameworks', summary:'HTML, CSS, SCSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, Angular, React, Vue, Next.js', skills:[['Angular (Standalone / Signals / SPAs)','Core UI framework at 1center (Salesmate CRM 4+ yrs), Signals, reactive architectures','Salesmate CRM'],['React 19 & Next.js 16 (App Router)','Modern SPAs with Zustand, Recharts, Tiptap, Tailwind CSS v4','CM Expense Tracker, CM Notes'],['Vue 3','Composition API, reactive components, Vue Router','Portfolio, Internal Applications'],['TypeScript & JavaScript (ESNext)','Strict typing, modern asynchronous patterns, generics','All Production Applications'],['Tailwind CSS v4 & SCSS','Design tokens, custom glassmorphism systems, responsive animations','CM Notes, Expense Tracker, Salesmate'],['HTML5, CSS3 & Bootstrap','Semantic markup, accessibility, responsive layouts, cross-browser','Infibeam, Lucent, Salesmate']] },
  { id:'backend', name:'Backend, Systems & Protocols', summary:'Node.js, Go, WebSockets, RESTful APIs, Docker', skills:[['Node.js & Express 5 (Cluster Mode)','Multi-core cluster scaling, Pino logging, Helmet security, HTTP-only JWTs','CM Expense Tracker API'],['Go (Golang 1.26 & fasthttp)','512K concurrent connections with sub-millisecond response & 64-shard rate limiters','CM Notes Go Microservice'],['Microservices & High Concurrency','Non-blocking I/O, goroutines, atomic primitives, sub-millisecond throughput','CM Notes Go Microservice'],['WebSockets & REST APIs','Real-time state synchronization, clean contract schemas, streaming endpoints','Notes App, CRM Dashboards'],['Docker & Containerization','Multi-stage builds, container isolation, local environment reproducibility','Backend Microservices']] },
  { id:'cloud', name:'Cloud, DevOps & CI/CD', summary:'AWS, GitHub Actions, Vercel, Netlify, Render', skills:[['AWS SAM & Lambda','Serverless Infrastructure as Code, automated deployment of cloud microservices','Serverless Microservices'],['AWS SES','Transactional password recovery, 6-digit OTP with 60s cooldown limiters','AWS Cloud Applications'],['AWS RDS & API Gateway','Managed relational storage, secure API routing, VPC configuration','PostgreSQL Cloud Deployment'],['GitHub Actions (CI/CD)','Automated test suites, build pipelines, and continuous deployment','All GitHub Repositories'],['Vercel, Amplify, Netlify, Render','Production edge deployments, environment variable isolation','React & Next.js Apps']] },
  { id:'databases', name:'Databases & Caching', summary:'MongoDB Atlas, PostgreSQL, Redis, Supabase, Neon', skills:[['MongoDB Atlas & Go Driver v2','BSON document modeling, parameterized queries, optimized indexing','CM Notes Go Backend'],['PostgreSQL (AWS RDS & SQL)','Relational data modeling, indexing, parameterized queries, schema management','AWS RDS, Cloud Applications'],['Redis (Caching & Rate Limiting)','Non-blocking in-memory caching, distributed token bucket rate limiting','CM Expense Tracker'],['Supabase & Neon Postgres','Serverless PostgreSQL, row-level security, real-time subscriptions','Cloud Applications']] },
  { id:'ai', name:'AI Tooling & Accelerated Workflows', summary:'Cursor IDE, Augment AI, ChatGPT, automated test generation', skills:[['Cursor IDE & AI Coding Assistants','Harnessing AI contexts for accelerated development and debugging','1center & Personal Projects'],['Augment AI & LLM Pair Programming','Cross-file architecture refactoring, complex logic explanation','All modern development'],['ChatGPT CLI & APIs','Automated test suite generation, rapid code reviews, prompt engineering','API Automation & Refactoring']] },
  { id:'ecommerce', name:'E-Commerce Platforms & Custom Themes', summary:'Shopify, Liquid, BigCommerce', skills:[['Shopify & Liquid Engine','Custom responsive themes, Liquid template hierarchy, third-party integrations','Lucent Innovation, Subliblanks'],['BigCommerce Storefronts','Modernized user-centric e-commerce interfaces, streamlined checkout','Cook & Boardman'],['E-Commerce SEO & Web Vitals','Asset compression, Core Web Vitals optimization, mobile conversion','Lucent, Subliblanks, Cook & Boardman']] }
]

const architecture = [
  ['512K Concurrency','64-Shard In-Memory Rate Limiter (Go)','Engineered using Go 1.26 & fasthttp with custom 64-shard distribution, FNV-1a hashing, and atomic counters. Eliminates mutex contention on high-frequency API endpoints.','Go 1.26 • fasthttp • FNV-1a • Atomic Counters','success'],
  ['Cloud Architecture','Serverless & Cloud-Native Microservices','Architected scalable cloud deployments utilizing AWS Lambda, API Gateway, Docker multi-stage builds, and automated GitHub Actions CI/CD with environment-aware runtimes.','AWS Lambda • API Gateway • Docker • GitHub Actions • CI/CD','primary'],
  ['Enterprise CRM','Salesmate CRM High-Velocity Angular UI','4+ years architecting modules for Salesmate CRM. Granular lazy loading, custom change detection, accessible UI components, and rich data reporting.','Angular • JavaScript • SCSS • Lazy Loading','danger'],
  ['Process Scaling','Cluster Mode Multi-Core Express 5 Scaling','Multi-core process scaling on Node.js Express 5 with Pino logging, Helmet security, HTTP-only cookie JWTs, and Redis-backed rate limiting.','Express 5 • Cluster Mode • Redis • Mongoose','warning']
]

export function SkillsMatrix({
  searchParams,
}: {
  searchParams?: { category?: string }
}) {
  const category = (typeof searchParams?.category === 'string' && searchParams.category) || 'all'
  const visible = skillDomains.filter(domain => category === 'all' || domain.id === category)
  const filterOptions = categories.map(([id, label]) => ({
    id,
    label,
    count: id === 'all'
      ? skillDomains.reduce((sum, domain) => sum + domain.skills.length, 0)
      : (skillDomains.find(domain => domain.id === id)?.skills.length ?? 0),
  }))

  return (
    <div>
      <SkillFilters category={category} options={filterOptions} />
      <div className="d-flex flex-column gap-4 mb-5">
        {visible.map(domain => (
          <section key={domain.id} className={`cg-glass-surface rounded-4 p-4 ${styles['cg-skill-domain']} ${styles[`cg-skill-domain-${domain.id}`]}`}>
            <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
              <div className="d-flex align-items-start gap-3">
                <div className={`d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 ${styles['cg-skill-category-icon']}`}>
                  <SkillIcon id={domain.id} />
                </div>
                <div>
                  <h2 className="fs-5 fw-semibold mb-1">{domain.name}</h2>
                  <p className={`text-body-secondary mb-0 ${styles['cg-skill-summary']}`}>{domain.summary}</p>
                </div>
              </div>
              <span className={`badge rounded-pill fw-medium ${styles['cg-skill-category-badge']}`}>
                {domain.skills.length} Technologies
              </span>
            </div>
            <div className="row g-3">
              {domain.skills.map(([name, context, projects], index) => (
                <div key={name} className={`col-12 col-md-6 col-xl-4 ${styles['cg-skill-column']}`} data-skill-index={index}>
                  <div className={`p-3 rounded-3 h-100 ${styles['cg-skill-tile']}`}>
                    <span className="small fw-semibold d-block mb-2">{name}</span>
                    <div className={`mb-2 ${styles['cg-skill-progress']} ${styles[`cg-skill-progress-${skillProgressTones[domain.id][index]}`]}`}>
                      <div className={styles['cg-skill-progress-bar']} />
                    </div>
                    <p className="text-body-secondary mb-1 small lh-base">{context}</p>
                    <div className={styles['cg-skill-utilization']}>
                      <span className="text-body-secondary fw-semibold">Utilized in:</span>
                      <span className="text-body-secondary"> {projects}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="mb-5 mt-5">
        <div className="text-center mb-5 mx-auto col-lg-8">
          <span className="badge rounded-pill px-3 py-1 mb-3 fw-medium bg-primary-subtle text-primary-emphasis border border-primary-subtle">Deep Engineering Capabilities</span>
          <h2 className="fw-bold mb-3">Architectural Highlights &amp; Benchmarks</h2>
          <p className="text-body-secondary">Specific design patterns and high-performance protocols engineered across production projects.</p>
        </div>
        <div className="row g-4">
          {architecture.map(([badge, title, desc, meta, tone]) => (
            <div key={title} className="col-12 col-md-6">
              <article className="cg-glass-surface rounded-4 p-4 h-100">
                <span className={`badge rounded-pill fw-medium mb-3 bg-${tone}-subtle text-${tone}-emphasis border border-${tone}-subtle`}>
                  {badge}
                </span>
                <h3 className="fs-6 fw-semibold mb-2">{title}</h3>
                <p className="text-body-secondary mb-3 small lh-base">{desc}</p>
                <p className="text-body-secondary mb-0 small">{meta}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function SkillIcon({ id }: { id: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {id === 'frontend' ? (
        <>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </>
      ) : id === 'backend' ? (
        <>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </>
      ) : id === 'cloud' ? (
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      ) : id === 'databases' ? (
        <>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </>
      ) : id === 'ai' ? (
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      ) : (
        <>
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </>
      )}
    </svg>
  )
}
