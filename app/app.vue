<template>
  <Html :class="htmlClass">
    <Body>
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
    </Body>
  </Html>
</template>

<script setup>
import AppLoader from '~/components/AppLoader.vue'

const { htmlClass } = useTheme()
</script>


