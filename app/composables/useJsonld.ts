export function useJsonld(data: Record<string, any>) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(data)
      }
    ]
  })
}
