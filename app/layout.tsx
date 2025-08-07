import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Lumbung Group - Sinergi Untuk Kemajuan Bersama',
  description: 'A leading Indonesian conglomerate powering progress across logistics, energy, technology, and travel services.',
  keywords: 'Lumbung Group, logistics, energy, technology, travel, Indonesia, conglomerate',
  authors: [{ name: 'Lumbung Group' }],
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'Lumbung Group - Sinergi Untuk Kemajuan Bersama',
    description: 'A leading Indonesian conglomerate powering progress across logistics, energy, technology, and travel services.',
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: 'Lumbung Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumbung Group - Sinergi Untuk Kemajuan Bersama',
    description: 'A leading Indonesian conglomerate powering progress across logistics, energy, technology, and travel services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="smooth-scroll">
      <body>{children}</body>
    </html>
  )
}