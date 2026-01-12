import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://agentika.es'
    const lastModified = new Date()

    // Define routes to include
    const routes = [''] // Homepage

    // Define locales
    const locales = ['es', 'en']

    // Generate URLs for each locale and route
    const sitemapEntries = routes.flatMap(route => {
        return locales.map(locale => {
            const url = `${baseUrl}/${locale}${route ? `/${route}` : ''}`;
            return {
                url,
                lastModified,
                changeFrequency: 'weekly' as const,
                priority: route === '' ? 1 : 0.8,
                alternates: {
                    languages: {
                        es: `${baseUrl}/es${route ? `/${route}` : ''}`,
                        en: `${baseUrl}/en${route ? `/${route}` : ''}`,
                    }
                }
            }
        })
    });

    return sitemapEntries;
}
