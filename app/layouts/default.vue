<template>
  <div class="app-layout">
    <!-- Ambient Liquid Glass Background -->
    <AsyncLiquidBlobBg />

    <!-- Frosted Glass Navbar -->
    <AsyncGlassNavbar />

    <!-- Dynamic Router Page Outlet -->
    <main class="main-content">
      <slot />
    </main>

    <!-- Liquid Glass Footer -->
    <AsyncGlassFooter />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import AppLoader from '~/components/AppLoader.vue'

const asyncOptions = (loader) => defineAsyncComponent({ loader, loadingComponent: AppLoader, delay: 0 })
const AsyncLiquidBlobBg = asyncOptions(() => import('~/components/LiquidBlobBg.vue'))
const AsyncGlassNavbar = asyncOptions(() => import('~/components/GlassNavbar.vue'))
const AsyncGlassFooter = asyncOptions(() => import('~/components/GlassFooter.vue'))
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

.main-content {
  flex: 1;
}
</style>
