<template>
  <Html :class="htmlClass" :data-bs-theme="htmlClass">
    <Body>
      <div>
        <NuxtLoadingIndicator color="var(--cg-google-blue)" :height="3" />
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


