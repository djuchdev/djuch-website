import Hero from '@/components/sections/Hero'
import BrandLogosStrip from '@/components/sections/BrandLogosStrip'
import ServicesIntro from '@/components/sections/ServicesIntro'
import ServicesGrid from '@/components/sections/ServicesGrid'
import StatsBar from '@/components/sections/StatsBar'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BrandLogosStrip />
      <ServicesIntro />
      <ServicesGrid />
      <StatsBar />
      <CTASection />
    </main>
  )
}
