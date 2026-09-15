<template>
  <header class="top-0 start-0 w-100 glass navbar-border header-sticky">
    <div class="container">
      <nav class="d-flex align-items-center justify-content-between py-2" aria-label="Main Navigation">
        <!-- Logo / Brand -->
        <NuxtLink to="/" class="d-flex align-items-center gap-2 text-decoration-none" aria-label="Chirag Gajjar Home">
          <div class="brand-box">
            <span class="fw-bold text-white text-brand">CG</span>
          </div>
          <div class="d-flex flex-column">
            <span class="fw-semibold text-body text-brand">Chirag Gajjar</span>
            <span class="text-body-secondary text-brand-sub">Software Engineer</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <ul class="d-none d-lg-flex list-unstyled gap-1 mb-0">
          <li v-for="link in navLinks" :key="link.path">
            <NuxtLink
              :to="link.path"
              class="nav-link px-2 py-1 rounded-3 cg-link text-decoration-none"
              :class="isActive(link.path) ? 'nav-active' : ''"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Actions -->
        <div class="d-flex align-items-center gap-2">
          <ThemeToggleButton />
          <AsyncResumeDownloadButton />

          <!-- Mobile Toggle -->
          <button
            class="d-lg-none btn btn-icon p-0 rounded-3 border"
            @click="isMobileOpen = !isMobileOpen"
            :aria-expanded="isMobileOpen"
            aria-label="Toggle navigation menu"
          >
            <svg v-if="!isMobileOpen" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg v-else viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Drawer -->
      <div v-if="isMobileOpen" class="mobile-menu-panel d-lg-none">
        <ul class="list-unstyled mb-2 mobile-menu-list">
          <li v-for="link in navLinks" :key="link.path">
            <NuxtLink
              :to="link.path"
              class="d-block px-2 py-2 rounded-3 cg-link text-decoration-none"
              :class="isActive(link.path) ? 'nav-active-mobile' : ''"
              @click="isMobileOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <div class="mobile-menu-cta">
          <a
            href="/Chirag_Software_Engineer.pdf"
            download="Chirag_Software_Engineer.pdf"
            class="btn w-100 fw-semibold rounded-3 btn-gradient"
            @click="isMobileOpen = false"
          >
            <svg class="me-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
import AppLoader from '~/components/AppLoader.vue'

const isMobileOpen = ref(false)
const route = useRoute()
const asyncOptions = (loader) => defineAsyncComponent({ loader, loadingComponent: AppLoader, delay: 0 })
const AsyncResumeDownloadButton = asyncOptions(() => import('~/components/ResumeDownloadButton.vue'))

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/contact', label: 'Contact' }
]

const isActive = (path) => {
  const currentPath = route.path.replace(/\/$/, '') || '/'
  return currentPath === path
}
</script>
