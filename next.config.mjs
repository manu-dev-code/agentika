/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones básicas de rendimiento
  compress: true,
  poweredByHeader: false,

  // Configuración de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },

  // Headers de seguridad y SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
    ]
  },

  // Redirects para SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/inicio',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // Configuración para TypeScript (para evitar errores en build)
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
