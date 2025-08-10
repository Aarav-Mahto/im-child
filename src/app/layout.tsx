
//src/app/layout.tsx
//src/app/layout.tsx

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wondrous - AI Operating System for Fitness Studios',
  description: 'Transform your fitness studio with AI workforce that handles bookings, retention, and growth automatically. £14K+ monthly revenue boost guaranteed.',
  keywords: 'fitness studio software, AI booking system, studio management, fitness CRM, studio automation',
  authors: [{ name: 'Wondrous Technologies' }],
  openGraph: {
    title: 'Wondrous - Your Studio Runs Itself',
    description: 'AI Operating System for Modern Fitness Studios. Stop drowning in admin while AI handles bookings, retention, and growth.',
    url: 'https://allwondrous.com',
    siteName: 'Wondrous',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wondrous - AI Operating System for Fitness Studios',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wondrous - Your Studio Runs Itself',
    description: 'AI Operating System for Modern Fitness Studios. £14K+ monthly revenue boost guaranteed.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}