import type { MetadataRoute } from 'next'
import { siteUrl } from './site-config'

const pages = [
  { path: '', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/skills', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/experience', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(page => ({
    url: `${siteUrl}${page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }))
}
