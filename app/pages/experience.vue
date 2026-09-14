<template>
  <div class="pt-5">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5 mx-auto section-header">
        <span class="badge rounded-pill px-3 py-1 mb-3 fw-medium badge-cyan">Career Milestones</span>
        <h1 class="fw-bold mb-3">Professional Experience</h1>
        <p class="text-body-secondary body-text">7+ years of continuous commercial engineering delivery with Angular, React, and CSS across enterprise SaaS products, e-commerce storefronts, and cross-functional teams.</p>
      </div>

      <!-- Timeline -->
      <div class="mb-5">
        <div v-for="(role, idx) in roles" :key="role.company" class="d-flex gap-3 gap-sm-4 mb-4">
          <!-- Marker -->
          <div class="d-none d-sm-flex flex-column align-items-center pt-4 flex-shrink-0">
            <div class="timeline-marker-dot" :style="{background:`var(--color-${role.color})`}"></div>
            <div v-if="idx < roles.length - 1" class="timeline-marker-line mt-2"></div>
          </div>

          <!-- Content -->
          <div class="flex-grow-1 timeline-content">
            <div class="glass rounded-4 p-4">
              <div class="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-3">
                <div>
                  <span class="badge rounded-pill fw-medium mb-2" :style="{background:`rgba(${role.badgeRgb},0.08)`,color:`rgb(${role.badgeRgb})`,border:`1px solid rgba(${role.badgeRgb},0.15)`,fontSize:'0.75rem'}">{{ role.badge }}</span>
                  <h2 class="fs-4 fw-bold mb-0">{{ role.title }}</h2>
                  <h3 class="fs-5 fw-medium text-body-secondary mb-0">{{ role.company }}</h3>
                </div>
                <span class="badge rounded-pill fw-medium d-inline-flex align-items-center gap-1 flex-shrink-0 badge-chip">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {{ role.dates }}
                </span>
              </div>

              <p class="text-body-secondary mb-3 body-text" v-html="role.summary"></p>

              <div class="d-flex flex-column gap-3 mb-4">
                <div v-for="(ach, i) in role.achievements" :key="i" class="d-flex gap-3 small text-body-secondary body-text-sm">
                  <span class="fw-bold flex-shrink-0" :style="{color:`rgb(${role.badgeRgb})`}">▹</span>
                  <div v-html="ach"></div>
                </div>
              </div>

              <div class="d-flex flex-wrap gap-2 pt-3 border-top border-subtle">
                <span v-for="tag in role.tags" :key="tag" class="badge rounded-3 fw-medium badge-chip">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="glass rounded-4 p-4 p-md-5 mt-5">
        <h3 class="fs-5 fw-semibold mb-2">Download Complete Chronological Resume</h3>
        <p class="text-body-secondary body-text mb-4">All dates, milestones, technical stacks, and references are detailed in the official PDF document.</p>
        <div class="d-flex flex-wrap gap-2">
          <a href="/Chirag_Software_Engineer.pdf" download="Chirag_Software_Engineer.pdf" class="btn fw-semibold px-4 py-2 text-white rounded-3 btn-gradient">
            <svg class="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Resume
          </a>
          <NuxtLink to="/contact" class="btn fw-semibold px-4 py-2 rounded-3 glass btn-glass">Contact Chirag</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const siteUrl = 'https://chirag-gajjar-software-engineer.vercel.app'

useSeoMeta({
  title: 'Professional Experience & Career Timeline | Chirag Gajjar',
  ogTitle: 'Experience — Chirag Gajjar | Software Engineer',
  description: 'Professional career timeline of Chirag Gajjar: 7+ years as Software Engineer at 1center (Salesmate CRM), Lucent Innovation, and Infibeam Avenues. Angular, React, Shopify, BigCommerce.',
  ogDescription: '7+ years career at 1center, Lucent Innovation, Infibeam. Angular, React, Shopify, e-commerce, enterprise SaaS.',
  ogUrl: `${siteUrl}/experience`,
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/experience` }]
})

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'Experience — Chirag Gajjar',
  url: `${siteUrl}/experience`,
  mainEntity: {
    '@type': 'Person',
    name: 'Chirag Gajjar',
    jobTitle: 'Software Engineer',
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'UI Developer',
        occupationalCategory: 'Software Engineer',
        employer: { '@type': 'Organization', name: '1center (Salesmate CRM)' },
        startDate: '2021-04-21',
        endDate: '2025-08-29'
      },
      {
        '@type': 'Occupation',
        name: 'Front End Developer',
        occupationalCategory: 'Software Engineer',
        employer: { '@type': 'Organization', name: 'Lucent Innovation' },
        startDate: '2020-07-06',
        endDate: '2021-04-20'
      },
      {
        '@type': 'Occupation',
        name: 'Web Designer',
        occupationalCategory: 'UI/UX Designer',
        employer: { '@type': 'Organization', name: 'Infibeam Avenues' },
        startDate: '2018-02-05',
        endDate: '2020-07-03'
      }
    ]
  }
})

const roles = [
  {
    company: '1center', title: 'UI Developer', badge: 'Enterprise SaaS (Salesmate CRM)', badgeRgb: '6,182,212', color: 'cyan', dates: '21 April 2021 – 29 August 2025',
    summary: 'Primary UI engineer contributing to <strong>Salesmate CRM</strong>, a global SaaS-based sales automation and customer lifecycle management platform.',
    achievements: [
      '<strong>Front-End Development:</strong> Built responsive, accessible UI components for Salesmate CRM using Angular, JavaScript, and SCSS.',
      '<strong>AI Tooling Integration:</strong> Accelerated coding, debugging, and documentation using modern AI assistants (Cursor, Augment, ChatGPT), drastically reducing feature turnaround time.',
      '<strong>Cross-Functional Collaboration:</strong> Partnered with backend engineers and product managers to integrate UI seamlessly with complex CRM workflows, analytics reporting, and real-time dashboards.',
      '<strong>Optimization & UX Refactoring:</strong> Refactored legacy code to boost performance, engineered reusable components, and implemented lazy loading and custom change detection strategies.'
    ],
    tags: ['Angular', 'JavaScript', 'SCSS', 'Cursor IDE', 'Augment AI', 'ChatGPT', 'Lazy Loading', 'CRM Workflows', 'UI/UX Reviews']
  },
  {
    company: 'Lucent Innovation', title: 'Front End Developer', badge: 'E-Commerce & High Conversion', badgeRgb: '99,102,241', color: 'indigo', dates: '6 July 2020 – 20 April 2021',
    summary: 'Specialized in custom theme development, third-party integrations, and performance engineering for enterprise Shopify storefronts.',
    achievements: [
      '<strong>Custom Theme Development:</strong> Built and customized responsive, mobile-friendly Shopify themes using Liquid, HTML5, SCSS, and JavaScript to boost storefront conversions.',
      '<strong>Performance & SEO Optimization:</strong> Optimized page load speeds, compressed assets, and applied SEO best practices to maximize Core Web Vitals rankings.',
      '<strong>App Integration & Custom Features:</strong> Integrated third-party apps and built custom functionality to extend core Shopify capabilities.',
      '<strong>Cross-Team Collaboration:</strong> Partnered with designers, marketing strategists, and backend engineers to deliver tailored e-commerce solutions.'
    ],
    tags: ['Shopify', 'Liquid', 'HTML5', 'SCSS', 'JavaScript', 'SEO', 'Asset Compression', 'App Integrations']
  },
  {
    company: 'Infibeam Avenues', title: 'Web Designer', badge: 'UI/UX Design & Web Development', badgeRgb: '244,63,94', color: 'rose', dates: '5 February 2018 – 3 July 2020',
    summary: 'Executed client-aligned wireframing, high-fidelity UI design, and responsive web implementation, delivering tangible engagement increases.',
    achievements: [
      '<strong>UI/UX Design & Prototyping:</strong> Designed client-aligned, visually engaging layouts and wireframes using Figma, Adobe XD, and Photoshop.',
      '<strong>Front-End Development:</strong> Built responsive, cross-browser compatible websites using HTML5, CSS3, JavaScript, and modern front-end frameworks.',
      '<strong>Usability & Engagement:</strong> Optimized site navigation and mobile performance, <strong>driving a 20% increase in user engagement</strong>.',
      '<strong>Brand Consistency:</strong> Partnered with developers, marketers, and content creators to maintain unified brand consistency across digital platforms.'
    ],
    tags: ['Figma', 'Adobe XD', 'Photoshop', 'HTML5', 'CSS3', 'JavaScript', 'Wireframing', 'Mobile Usability']
  }
]
</script>
