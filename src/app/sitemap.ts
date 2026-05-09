import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://easy-hscode.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://easy-hscode.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://easy-hscode.com/privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    { 
      url: 'https://easy-hscode.com/blog/what-is-hscode', 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: 'https://easy-hscode.com/blog/how-to-find-hscode', 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: 'https://easy-hscode.com/blog/hscode-ai', 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
  ]
}