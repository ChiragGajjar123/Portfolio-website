<template>
  <div class="app-loader" role="status" aria-live="polite" aria-label="Loading content">
    <span class="app-loader-ring"></span>
  </div>
</template>

<style scoped>
.app-loader {
  display: grid;
  place-items: center;
  min-height: 3rem;
  color: var(--liquid-cyan);
}

.app-loader-ring {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid color-mix(in srgb, currentColor 25%, transparent);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: app-loader-spin 0.7s linear infinite;
}

@keyframes app-loader-spin {
  to { transform: rotate(360deg); }
}
</style>
