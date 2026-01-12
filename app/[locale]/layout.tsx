import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"


const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(', '),
    metadataBase: new URL("https://agentika.es"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'es': '/es',
        'en': '/en'
      }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://agentika.es/${locale}`,
      siteName: "Agentika",
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
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
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'JsonLd' });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t('name'),
    description: t('description'),
    url: `https://agentika.es/${locale}`,
    logo: "https://agentika.es/android-chrome-512x512.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34-900-123-456",
      contactType: t('contact_point.contact_type'),
      availableLanguage: t('contact_point.available_language'),
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Elche",
      addressCountry: "ES",
    },
    sameAs: ["https://twitter.com/agentika_es", "https://linkedin.com/company/agentika"],
    offers: {
      "@type": "Offer",
      name: t('offers.name'),
      description: t('offers.description'),
      price: "0",
      priceCurrency: "EUR",
    },
    service: {
      "@type": "Service",
      name: t('service.name'),
      description: t('service.description'),
      provider: {
        "@type": "Organization",
        name: "Agentika",
      },
      areaServed: "ES",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: t('service.catalog.name'),
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: t('service.catalog.items.0'),
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: t('service.catalog.items.1'),
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: t('service.catalog.items.2'),
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: t('service.catalog.items.3'),
            },
          },
        ],
      },
    },
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Toaster position="top-right" richColors />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
