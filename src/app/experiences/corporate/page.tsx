import type { Metadata } from 'next'
import CorporateHero from '@/components/sections/corporate/CorporateHero'
import TrustedBrandsStrip from '@/components/sections/corporate/TrustedBrandsStrip'
import WhyChooseUch from '@/components/sections/corporate/WhyChooseUch'
import PerfectFor from '@/components/sections/corporate/PerfectFor'
import EventGallery from '@/components/sections/corporate/EventGallery'
import CorporateTestimonials from '@/components/sections/corporate/CorporateTestimonials'
import CTASection from '@/components/sections/CTASection'
import { corporate } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Corporate Events — DJ UCH',
  description:
    'Professional, polished, and unforgettable. DJ UCH creates premium entertainment experiences for corporate galas, conferences, product launches, award ceremonies, and executive retreats.',
}

export default function CorporateEventsPage() {
  return (
    <main>
      <CorporateHero />
      <TrustedBrandsStrip />
      <WhyChooseUch />
      <PerfectFor />
      <EventGallery />
      <CorporateTestimonials />
      <CTASection content={corporate.cta} />
    </main>
  )
}
