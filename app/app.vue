<template>
  <Html :class="htmlClass">
    <Body>
      <div>
        <NuxtLoadingIndicator color="var(--color-cyan)" :height="3" />
        <NuxtRouteAnnouncer />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </Body>
  </Html>
</template>

<script setup>
const { htmlClass } = useTheme()
</script>


