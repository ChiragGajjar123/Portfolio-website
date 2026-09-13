<template>
  <div class="page-wrapper about-page">
    <div class="site-container">
      <!-- Page Header -->
      <div class="section-header">
        <div class="section-tag">Career Evolution &amp; Background</div>
        <h1 class="section-title">About Chirag Gajjar</h1>
        <p class="section-desc">
          7+ years crafting scalable web applications with Angular, React, and CSS, from UI/UX design and high-converting e-commerce to enterprise CRM architectures and high-throughput Node.js/Express, Go, and Rust microservices.
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
                I am a dedicated <strong>Software Engineer with 7+ years of experience</strong> delivering enterprise-grade web applications. My journey spans the full engineering spectrum: starting with UI/UX prototyping and front-end craftsmanship at <strong>Infibeam Avenues</strong>, evolving into high-speed e-commerce architecture at <strong>Lucent Innovation</strong>, and scaling complex SaaS workflows at <strong>Salesmate CRM at 1center</strong> using <strong>Angular</strong>, <strong>React</strong>, and <strong>CSS</strong>, alongside high-concurrency systems in <strong>Node.js (Express)</strong>, <strong>Go (fasthttp)</strong>, and <strong>Rust (Axum &amp; Tokio)</strong>.
              </p>
              <p>
                I actively harness modern <strong>AI tooling (Cursor, Augment, ChatGPT APIs)</strong> to supercharge development workflows, automate unit tests, refactor legacy codebases, and maintain rigorous code quality and delivery speed.
              </p>

              <h3 class="story-heading">Engineering Philosophy</h3>
              <ul class="philosophy-list">
                <li>
                  <strong>Performance as a Feature:</strong> From Node.js (Express) cluster mode process scaling to Go's fasthttp handling 512K concurrent connections with a 64-shard atomic rate limiter, and Rust's zero-cost abstractions, speed is non-negotiable.
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
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
