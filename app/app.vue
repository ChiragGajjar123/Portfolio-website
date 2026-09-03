<template>
  <div>
    <NuxtLoadingIndicator color="var(--liquid-cyan)" :height="3" />
    <NuxtRouteAnnouncer />
    <Suspense>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <template #fallback>
        <AppLoader />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AppLoader from '~/components/AppLoader.vue'
</script>

<style>
/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease-out;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
