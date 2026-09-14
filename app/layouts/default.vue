<template>
  <div class="app-layout">
    <AsyncLiquidBlobBg />
    <AsyncGlassNavbar />
    <main class="main-content">
      <slot />
    </main>
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
