// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Chirag Gajjar | Software Engineer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portfolio of Chirag Gajjar, a Software Engineer with 7+ years of experience delivering high-performance web applications across Angular, React, Vue, Next.js, Node.js, Go, Rust, AWS, and Cloud Architecture.'
        },
        { name: 'theme-color', content: '#050711' },
        { property: 'og:title', content: 'Chirag Gajjar | Software Engineer' },
        {
          property: 'og:description',
          content: 'Explore the portfolio of Chirag Gajjar: 7+ years delivering scalable web platforms, high-concurrency Rust/Go microservices, and modern Liquid Glass interfaces.'
        },
        { property: 'og:type', content: 'website' }
      ],
      script: [
        {
          innerHTML: "(() => { try { document.documentElement.classList.toggle('light', localStorage.getItem('theme') === 'light'); } catch (_) {} })()"
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || '',
    public: {
      contactEmail: 'chiraggajjar421@gmail.com',
      contactPhone: '+91 8401091573',
      githubUrl: 'https://github.com/ChiragGajjar123?tab=repositories',
      linkedinUrl: 'https://www.linkedin.com/in/chirag-gajjar-0ba075101'
    }
  }
})
