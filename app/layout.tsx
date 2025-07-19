import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agentika - Automatización Empresarial con IA | Ahorra hasta 95% del Tiempo",
  description:
    "Automatiza procesos repetitivos con agentes de IA personalizados. Análisis gratuito, solo pagas si implementas. Ahorra hasta 95% del tiempo en tareas operativas.",
  keywords: [
    "automatización empresarial",
    "agentes de IA",
    "inteligencia artificial",
    "automatización procesos",
    "ahorro tiempo",
    "productividad empresarial",
    "IA personalizada",
    "automatización tareas",
    "agentes inteligentes",
    "optimización procesos",
    "eficiencia empresarial",
    "automatización España",
    "IA para empresas",
    "robots de proceso",
    "automatización workflow",
  ],
  authors: [{ name: "Agentika" }],
  creator: "Agentika",
  publisher: "Agentika",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://agentika.es"),
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
    },
  },
  openGraph: {
    title: "Agentika - Automatización Empresarial con IA | Ahorra hasta 95% del Tiempo",
    description:
      "Automatiza procesos repetitivos con agentes de IA personalizados. Análisis gratuito, solo pagas si implementas. Ahorra hasta 95% del tiempo en tareas operativas.",
    url: "https://agentika.es",
    siteName: "Agentika",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agentika - Automatización Empresarial con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentika - Automatización Empresarial con IA",
    description:
      "Automatiza procesos repetitivos con agentes de IA personalizados. Análisis gratuito, ahorra hasta 95% del tiempo.",
    images: ["/og-image.png"],
    creator: "@agentika_es",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Agentika",
  description:
    "Empresa especializada en automatización empresarial con agentes de inteligencia artificial personalizados",
  url: "https://agentika.es",
  logo: "https://agentika.es/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34-900-123-456",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Elche",
    addressCountry: "ES",
  },
  sameAs: ["https://twitter.com/agentika_es", "https://linkedin.com/company/agentika"],
  offers: {
    "@type": "Offer",
    name: "Análisis de Automatización Gratuito",
    description:
      "Análisis completo y personalizado de procesos empresariales para identificar oportunidades de automatización",
    price: "0",
    priceCurrency: "EUR",
  },
  service: {
    "@type": "Service",
    name: "Automatización Empresarial con IA",
    description:
      "Desarrollo de agentes de inteligencia artificial personalizados para automatizar procesos repetitivos empresariales",
    provider: {
      "@type": "Organization",
      name: "Agentika",
    },
    areaServed: "ES",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Automatización",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Seguimiento Automático de Leads",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Envío de Emails Personalizados",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Integración entre Herramientas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Creación Automática de Informes",
          },
        },
      ],
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-ES">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
