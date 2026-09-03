<template>
  <div class="page-wrapper about-page">
    <div class="site-container">
      <!-- Page Header -->
      <div class="section-header">
        <div class="section-tag">Career Evolution &amp; Background</div>
        <h1 class="section-title">About Chirag Gajjar</h1>
        <p class="section-desc">
          7+ years crafting scalable web applications, from UI/UX design and high-converting e-commerce to enterprise Angular CRM architectures and high-throughput Rust/Go microservices.
        </p>
      </div>

      <!-- Main Profile Glass Layout -->
      <div class="about-grid">
        <!-- Bio & Story Column -->
        <div class="about-main-col">
          <div class="liquid-glass profile-story-card">
            <div class="story-header">
              <div class="avatar-glass-badge">
                <span>CG</span>
              </div>
              <div>
                <h2 class="profile-name">Chirag Gajjar</h2>
                <p class="profile-tagline">Software Engineer</p>
                <div class="profile-badges">
                  <span class="glass-pill cyan">Gandhinagar, Gujarat, India</span>
                  <span class="glass-pill indigo">7+ Years Exp</span>
                </div>
              </div>
            </div>

            <div class="story-body">
              <h3 class="story-heading">Executive Summary</h3>
              <p>
                I am a dedicated <strong>Software Engineer with 7+ years of experience</strong> delivering enterprise-grade web applications. My journey spans the full engineering spectrum: starting with UI/UX prototyping and front-end craftsmanship at <strong>Infibeam Avenues</strong>, evolving into high-speed e-commerce architecture at <strong>Lucent Innovation</strong>, scaling complex SaaS workflows for <strong>Salesmate CRM at 1center</strong>, and engineering high-concurrency systems in <strong>Go (fasthttp)</strong> and <strong>Rust (Axum &amp; Tokio)</strong>.
              </p>
              <p>
                I actively harness modern <strong>AI tooling (Cursor, Augment, ChatGPT APIs)</strong> to supercharge development workflows, automate unit tests, refactor legacy codebases, and maintain rigorous code quality and delivery speed.
              </p>

              <h3 class="story-heading">Engineering Philosophy</h3>
              <ul class="philosophy-list">
                <li>
                  <strong>Performance as a Feature:</strong> Whether optimizing Angular change detection with signals and lazy loading or handling 512K concurrent connections with Go's fasthttp and a 64-shard atomic rate limiter, speed and zero-cost abstractions are non-negotiable.
                </li>
                <li>
                  <strong>Fluid User Experience:</strong> Clean, accessible, intuitive interfaces designed with Liquid Glass aesthetics, responsive layouts, and rich micro-interactions that captivate users.
                </li>
                <li>
                  <strong>Cloud-Native Resilience:</strong> Serverless architectures utilizing AWS SAM, Lambda, RDS PostgreSQL, SES, API Gateway, Docker, and GitHub Actions CI/CD for automated zero-downtime releases.
                </li>
              </ul>
            </div>
          </div>

          <!-- Education Section (from Resume) -->
          <div class="liquid-glass education-card">
            <h3 class="card-section-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <span>Academic Education</span>
            </h3>

            <div class="education-timeline">
              <!-- B.Tech -->
              <div class="edu-item">
                <div class="edu-dot"></div>
                <div class="edu-content">
                  <div class="edu-year">2014 – 2018</div>
                  <h4 class="edu-degree">Bachelor of Technology (B.Tech) in Information Technology</h4>
                  <div class="edu-inst">U.V. Patel College of Engineering, Ganpat University</div>
                  <div class="edu-grade"><span class="badge-grade">Score: 6.47 CGPA</span></div>
                </div>
              </div>

              <!-- HSC -->
              <div class="edu-item">
                <div class="edu-dot"></div>
                <div class="edu-content">
                  <div class="edu-year">2014</div>
                  <h4 class="edu-degree">Higher Secondary Certificate (HSC) — Science</h4>
                  <div class="edu-inst">Vibrant School of Science, Deesa</div>
                  <div class="edu-grade"><span class="badge-grade">Score: 53.69%</span></div>
                </div>
              </div>

              <!-- SSC -->
              <div class="edu-item">
                <div class="edu-dot"></div>
                <div class="edu-content">
                  <div class="edu-year">2009</div>
                  <h4 class="edu-degree">Secondary School Certificate (SSC)</h4>
                  <div class="edu-inst">Vinay Vidhya Mandir, Khoda</div>
                  <div class="edu-grade"><span class="badge-grade">Score: 73.54%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar / Details Column -->
        <div class="about-sidebar-col">
          <!-- Resume Download Widget -->
          <div class="liquid-glass resume-widget">
            <div class="widget-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3 class="widget-title">Chirag_Software_Engineer.pdf</h3>
            <p class="widget-meta">Official Curriculum Vitae • Verified 4-Page PDF</p>
            
            <a
              href="/Chirag_Software_Engineer.pdf"
              download="Chirag_Software_Engineer.pdf"
              class="btn-liquid-primary"
              style="width: 100%; margin-bottom: 0.75rem;"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Resume</span>
            </a>

            <a
              href="/Chirag_Software_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-liquid-secondary"
              style="width: 100%;"
            >
              <span>Open in Browser</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
              </svg>
            </a>
          </div>

          <!-- Personal Information & Languages (from Resume) -->
          <div class="liquid-glass sidebar-info-card">
            <h4 class="sidebar-section-title">Additional Information</h4>
            
            <div class="info-group">
              <label class="info-label">Spoken Languages</label>
              <div class="tag-row">
                <span class="chip-lang">Gujarati (Native)</span>
                <span class="chip-lang">Hindi (Fluent)</span>
                <span class="chip-lang">English (Professional)</span>
              </div>
            </div>

            <div class="info-group">
              <label class="info-label">Interests &amp; Passions</label>
              <div class="tag-row">
                <span class="chip-interest">Music</span>
                <span class="chip-interest">Cricket</span>
                <span class="chip-interest">High-Concurrency Systems</span>
                <span class="chip-interest">AI Architecture</span>
              </div>
            </div>

            <div class="info-group">
              <label class="info-label">Location</label>
              <p class="info-value">Gandhinagar, Ahmedabad, Gujarat, India</p>
            </div>

            <div class="info-group">
              <label class="info-label">Direct Contact</label>
              <p class="info-value">
                <a href="mailto:chiraggajjar421@gmail.com" class="link-cyan">chiraggajjar421@gmail.com</a>
              </p>
              <p class="info-value">
                <a href="tel:8401091573" class="link-cyan">+91 8401091573</a>
              </p>
            </div>
          </div>

          <!-- Quick Navigation Card -->
          <div class="liquid-glass sidebar-info-card">
            <h4 class="sidebar-section-title">Explore More</h4>
            <div class="sidebar-nav-links">
              <NuxtLink to="/skills" class="sidebar-route-link">
                <span>View Technical Skills Matrix</span>
                &rarr;
              </NuxtLink>
              <NuxtLink to="/experience" class="sidebar-route-link">
                <span>View Work Experience Timeline</span>
                &rarr;
              </NuxtLink>
              <NuxtLink to="/projects" class="sidebar-route-link">
                <span>View Projects</span>
                &rarr;
              </NuxtLink>
              <NuxtLink to="/contact" class="sidebar-route-link">
                <span>Send a Message</span>
                &rarr;
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About Chirag Gajjar | Software Engineer (7+ Years)'
})
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 2fr 1.15fr;
  gap: 2rem;
}

.profile-story-card {
  padding: 3rem;
  margin-bottom: 2rem;
}

.story-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 2rem;
}

.avatar-glass-badge {
  width: 76px;
  height: 76px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(0, 245, 212, 0.25) 0%, rgba(99, 102, 241, 0.3) 100%);
  border: 1px solid rgba(0, 245, 212, 0.4);
  box-shadow: 0 0 25px rgba(0, 245, 212, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 800;
  color: #00f5d4;
}

.profile-name {
  font-size: 1.85rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.profile-tagline {
  font-size: 0.95rem;
  color: #a5b4fc;
  font-family: var(--font-mono);
  margin: 0.2rem 0 0.75rem 0;
}

.profile-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.story-body {
  color: #94a3b8;
  line-height: 1.8;
  font-size: 1.02rem;
}

.story-body p {
  margin-bottom: 1.4rem;
}

.story-body strong {
  color: #f1f5f9;
}

.story-heading {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 2rem 0 1rem 0;
  letter-spacing: -0.01em;
}

.philosophy-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.philosophy-list li {
  position: relative;
  padding-left: 1.5rem;
}

.philosophy-list li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #00f5d4;
  font-size: 1.1rem;
}

.education-card {
  padding: 2.75rem;
}

.card-section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.education-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  padding-left: 1.5rem;
}

.education-timeline::before {
  content: '';
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 4px;
  width: 2px;
  background: linear-gradient(180deg, #00f5d4, #6366f1, rgba(255, 255, 255, 0.1));
}

.edu-item {
  position: relative;
}

.edu-dot {
  position: absolute;
  top: 6px;
  left: -1.78rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #00f5d4;
  box-shadow: 0 0 10px #00f5d4;
  border: 2px solid #050711;
}

.edu-year {
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: #00f5d4;
  margin-bottom: 0.25rem;
}

.edu-degree {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.edu-inst {
  font-size: 0.95rem;
  color: #94a3b8;
  margin-bottom: 0.5rem;
}

.badge-grade {
  display: inline-block;
  font-size: 0.78rem;
  font-family: var(--font-mono);
  padding: 0.2rem 0.65rem;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #c7d2fe;
  border-radius: 9999px;
}

.resume-widget {
  padding: 2.25rem;
  text-align: center;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 245, 212, 0.3);
  box-shadow: 0 10px 30px rgba(0, 245, 212, 0.1);
}

.widget-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(0, 245, 212, 0.1);
  color: #00f5d4;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem auto;
}

.widget-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  font-family: var(--font-mono);
  margin-bottom: 0.35rem;
  word-break: break-all;
}

.widget-meta {
  font-size: 0.82rem;
  color: #94a3b8;
  margin-bottom: 1.5rem;
}

.sidebar-info-card {
  padding: 2rem;
  margin-bottom: 2rem;
}

.sidebar-section-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.info-group {
  margin-bottom: 1.25rem;
}

.info-label {
  display: block;
  font-size: 0.76rem;
  font-family: var(--font-mono);
  text-transform: uppercase;
  color: #64748b;
  letter-spacing: 0.05em;
  margin-bottom: 0.45rem;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.chip-lang, .chip-interest {
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
}

.chip-lang {
  border-color: rgba(0, 245, 212, 0.25);
  color: #a7f3d0;
}

.info-value {
  font-size: 0.92rem;
  color: #e2e8f0;
  margin-bottom: 0.25rem;
}

.link-cyan {
  color: #00f5d4;
  transition: all 0.2s;
}

.link-cyan:hover {
  text-decoration: underline;
}

.sidebar-nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.sidebar-route-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  font-size: 0.88rem;
  color: #94a3b8;
  transition: all 0.2s;
}

.sidebar-route-link:hover {
  background: rgba(0, 245, 212, 0.08);
  border-color: rgba(0, 245, 212, 0.3);
  color: #00f5d4;
  transform: translateX(4px);
}

@media (max-width: 960px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .profile-story-card, .education-card {
    padding: 1.75rem;
  }
  .story-header {
    flex-direction: column;
    text-align: center;
  }
  .profile-badges {
    justify-content: center;
  }
}
</style>
