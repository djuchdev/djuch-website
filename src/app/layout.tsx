import type { Metadata } from 'next'
import { Geist, Great_Vibes } from 'next/font/google'
import { Barlow_Condensed } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import { siteMetadata } from '@/lib/content'
import './globals.css'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

const greatVibes = Great_Vibes({
  variable: '--font-great-vibes',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${barlowCondensed.variable} ${greatVibes.variable}`} >
      <body className="min-h-screen bg-brand-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
