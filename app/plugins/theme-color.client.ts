export default defineNuxtPlugin(() => {
  const updateThemeColor = () => {
    const canvas = getComputedStyle(document.documentElement).getPropertyValue('--bg-canvas').trim()
    if (!canvas) return
    let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'theme-color'
      document.head.appendChild(meta)
    }
    meta.content = canvas
  }

  const observer = new MutationObserver(updateThemeColor)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateThemeColor)
  } else {
    updateThemeColor()
  }
})
