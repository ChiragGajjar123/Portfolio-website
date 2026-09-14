import fs from 'node:fs'
import path from 'node:path'

// Helper to ensure Chirag_Software_Engineer.pdf in public/ is always updated if dropped in project root
function autoSyncResume(rootDir: string) {
  const rootPdf = path.resolve(rootDir, 'Chirag_Software_Engineer.pdf')
  const publicPdf = path.resolve(rootDir, 'public', 'Chirag_Software_Engineer.pdf')

  if (fs.existsSync(rootPdf)) {
    try {
      const rootStat = fs.statSync(rootPdf)
      const publicStat = fs.existsSync(publicPdf) ? fs.statSync(publicPdf) : null
      if (!publicStat || rootStat.mtimeMs > publicStat.mtimeMs) {
        fs.copyFileSync(rootPdf, publicPdf)
        console.log('📄 [Auto-Sync] Copied new Chirag_Software_Engineer.pdf from root to public/')
      }
    } catch (e) {
      console.warn('Resume sync notice:', e)
    }
  }
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  routeRules: {
    '/Chirag_Software_Engineer.pdf': {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    },
    '/resume.pdf': {
      redirect: {
        to: '/Chirag_Software_Engineer.pdf',
        statusCode: 301
      }
    }
  },

  hooks: {
    ready: (nuxt) => {
      autoSyncResume(nuxt.options.rootDir)
    },
    'build:before': () => {
      autoSyncResume(process.cwd())
    }
  },

  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/css/main.css'],

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
        { property: 'og:title', content: 'Chirag Gajjar | Software Engineer' },
        {
          property: 'og:description',
          content: 'Explore the portfolio of Chirag Gajjar: 7+ years delivering scalable web platforms, high-concurrency Rust/Go microservices, and modern Liquid Glass interfaces.'
        },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      script: [
        {
          innerHTML: `(function(){try{var t=document.cookie.match(/(?:^|; )portfolio-theme=([^;]*)/);var v=t?decodeURIComponent(t[1]):'light';document.documentElement.className=v==='dark'?'dark':'light';}catch(e){document.documentElement.className='light';}})();`
        }
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

