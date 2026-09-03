<template>
  <header class="navbar-wrapper">
    <div class="site-container">
      <nav
        class="liquid-navbar"
        aria-label="Main Navigation"
        style="backdrop-filter: blur(20px);"
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

        <!-- Resume Download & Mobile Navigation -->
        <div class="nav-actions">
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
            style="width: 100%;"
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

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 1.25rem;
  left: 0;
  right: 0;
  z-index: 100;
}

.liquid-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 1.4rem;
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 9999px;
  box-shadow: var(--glass-shadow);
  transition: all 0.3s ease;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-badge {
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(0, 245, 212, 0.2) 0%, rgba(99, 102, 241, 0.25) 100%);
  border: 1px solid rgba(0, 245, 212, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-initials {
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: -0.05em;
  background: linear-gradient(135deg, #ffffff, #00f5d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.brand-info {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-primary);
  line-height: 1.2;
}

.brand-role {
  font-size: 0.72rem;
  color: var(--liquid-cyan);
  font-family: var(--font-mono);
  letter-spacing: 0.04em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
}

.nav-link {
  padding: 0.5rem 0.95rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: 9999px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-glass-pill);
}

.nav-link.active {
  color: var(--liquid-cyan);
  background: rgba(0, 245, 212, 0.09);
  border: 1px solid rgba(0, 245, 212, 0.25);
  box-shadow: 0 0 12px rgba(0, 245, 212, 0.15);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-resume-nav {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 1.15rem;
  background: linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(99, 102, 241, 0.2) 100%);
  border: 1px solid var(--glass-border-cyan);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.85rem;
  border-radius: 9999px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px var(--liquid-cyan-glow);
  transition: all 0.25s ease;
}

.btn-resume-nav:hover {
  background: linear-gradient(135deg, rgba(0, 245, 212, 0.3) 0%, rgba(99, 102, 241, 0.35) 100%);
  border-color: rgba(0, 245, 212, 0.7);
  box-shadow: 0 4px 20px rgba(0, 245, 212, 0.3);
  transform: translateY(-1px);
}

.mobile-menu-btn {
  display: none;
  color: var(--text-primary);
  padding: 0.35rem;
  border-radius: 8px;
}

.mobile-drawer {
  margin-top: 0.75rem;
  padding: 1.25rem;
  border-radius: 20px;
  background: var(--bg-card-hover);
}

.mobile-nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.mobile-nav-links a {
  display: block;
  padding: 0.75rem 1rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-highlight);
  border-radius: 10px;
}

.mobile-nav-links a.active {
  color: var(--liquid-cyan);
  background: rgba(0, 245, 212, 0.1);
  border: 1px solid rgba(0, 245, 212, 0.2);
}

@media (max-width: 900px) {
  .nav-links {
    display: none;
  }
  .mobile-menu-btn {
    display: flex;
  }
}

@media (max-width: 500px) {
  .brand-role {
    display: none;
  }
}
</style>
