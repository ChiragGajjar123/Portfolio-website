export default defineNuxtPlugin(() => {
  // Remove all inline styles from html and body elements
  if (process.client) {
    const removeInlineStyles = () => {
      const html = document.documentElement
      const body = document.body
      
      if (html) {
        html.removeAttribute('style')
      }
      if (body) {
        body.removeAttribute('style')
      }
    }

    // Remove on mount
    removeInlineStyles()

    // Also observe and remove if they get added back
    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            const target = mutation.target as HTMLElement
            if (target === document.documentElement || target === document.body) {
              target.removeAttribute('style')
            }
          }
        })
      })

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['style']
      })

      if (document.body) {
        observer.observe(document.body, {
          attributes: true,
          attributeFilter: ['style']
        })
      }
    }
  }
})
