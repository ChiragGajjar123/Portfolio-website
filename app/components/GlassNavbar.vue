<template>
  <header class="navbar-wrapper">
    <div class="site-container">
      <nav
        class="liquid-navbar"
        aria-label="Main Navigation"
      >
        <!-- Logo / Brand -->
        <NuxtLink to="/" class="nav-brand" aria-label="Chirag Gajjar Home">
          <div class="brand-badge">
            <span class="brand-initials">CG</span>
            <span class="brand-glow"></span>
          </div>
          <div class="brand-info">
            <span class="brand-name">Chirag Gajjar</span>
            <span class="brand-role">Software Engineer</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <ul class="nav-links">
          <li>
            <NuxtLink to="/" class="nav-link" :class="{ active: isActive('/') }">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="nav-link" :class="{ active: isActive('/about') }">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/skills" class="nav-link" :class="{ active: isActive('/skills') }">
              Skills
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" class="nav-link" :class="{ active: isActive('/projects') }">
              Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/experience" class="nav-link" :class="{ active: isActive('/experience') }">
              Experience
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="nav-link" :class="{ active: isActive('/contact') }">
              Contact
            </NuxtLink>
          </li>
        </ul>

        <!-- Theme, Resume Download & Mobile Navigation -->
        <div class="nav-actions">
          <ThemeToggleButton />
          <AsyncResumeDownloadButton />

          <!-- Mobile Toggle Button -->
          <button
            class="mobile-menu-btn"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle navigation menu"
          >
            <svg v-if="!isMobileMenuOpen" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg v-else viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Dropdown Menu -->
      <div v-if="isMobileMenuOpen" class="mobile-drawer liquid-glass">
        <ul class="mobile-nav-links">
          <li><NuxtLink to="/" @click="isMobileMenuOpen = false" :class="{ active: isActive('/') }">Home</NuxtLink></li>
          <li><NuxtLink to="/about" @click="isMobileMenuOpen = false" :class="{ active: isActive('/about') }">About</NuxtLink></li>
          <li><NuxtLink to="/skills" @click="isMobileMenuOpen = false" :class="{ active: isActive('/skills') }">Skills</NuxtLink></li>
          <li><NuxtLink to="/projects" @click="isMobileMenuOpen = false" :class="{ active: isActive('/projects') }">Projects</NuxtLink></li>
          <li><NuxtLink to="/experience" @click="isMobileMenuOpen = false" :class="{ active: isActive('/experience') }">Experience</NuxtLink></li>
          <li><NuxtLink to="/contact" @click="isMobileMenuOpen = false" :class="{ active: isActive('/contact') }">Contact</NuxtLink></li>
        </ul>
        <div class="mobile-actions">
          <a
            href="/Chirag_Software_Engineer.pdf"
            download="Chirag_Software_Engineer.pdf"
            class="btn-liquid-primary"
            @click="isMobileMenuOpen = false"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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

const isMobileMenuOpen = ref(false)
const route = useRoute()
const asyncOptions = (loader) => defineAsyncComponent({ loader, loadingComponent: AppLoader, delay: 0 })
const AsyncResumeDownloadButton = asyncOptions(() => import('~/components/ResumeDownloadButton.vue'))

const isActive = (path) => {
  const currentPath = route.path.replace(/\/$/, '') || '/'
  return currentPath === path
}
</script>
