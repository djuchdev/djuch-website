import type { Metadata } from 'next'
import ClientsHero from '@/components/sections/clients/ClientsHero'
import ClientLogoWall from '@/components/sections/clients/ClientLogoWall'
import ClientStories from '@/components/sections/clients/ClientStories'
import StatsBar from '@/components/sections/StatsBar'
import CTASection from '@/components/sections/CTASection'
import { clients } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Clients — DJ UCH',
  description:
    "Trusted by W Hotels, MGM Resorts, Tommy Hilfiger, Caesars Entertainment, and dozens of the world's most prestigious brands and private clients.",
}

export default function ClientsPage() {
  return (
    <main>
      <ClientsHero />
      <ClientLogoWall />
      <ClientStories />
      <StatsBar />
      <CTASection content={clients.cta} />
    </main>
  )
}
