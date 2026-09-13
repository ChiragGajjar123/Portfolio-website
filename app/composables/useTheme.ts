export type ThemeName = 'dark' | 'light'

export function useTheme() {
  const theme = useCookie<ThemeName>('portfolio-theme', {
    default: () => 'light',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    path: '/'
  })

  const isDark = computed(() => theme.value !== 'light')
  const isLight = computed(() => !isDark.value)
  const htmlClass = computed(() => (isDark.value ? 'dark' : 'light'))

  useHead({
    htmlAttrs: {
      lang: 'en',
      class: htmlClass
    },
    meta: [
      {
        key: 'theme-color',
        name: 'theme-color',
        content: computed(() => (isDark.value ? '#0a0e27' : '#f8f9fa'))
      }
    ]
  })

  function setTheme(next: ThemeName) {
    theme.value = next
  }

  function toggleTheme() {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  return {
    theme,
    isDark,
    isLight,
    htmlClass,
    setTheme,
    toggleTheme
  }
}
