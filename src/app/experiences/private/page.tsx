import type { Metadata } from 'next'
import PrivateHero from '@/components/sections/private/PrivateHero'
import PrivatePillarsBar from '@/components/sections/private/PrivatePillarsBar'
import PerfectForCelebrations from '@/components/sections/private/PerfectForCelebrations'
import MomentsGallery from '@/components/sections/private/MomentsGallery'
import PrivateTestimonials from '@/components/sections/private/PrivateTestimonials'
import CTASection from '@/components/sections/CTASection'
import { privateEvents } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Private Events — DJ UCH',
  description:
    "Personal moments, extraordinary atmospheres. DJ UCH creates unforgettable soundtracks for weddings, birthdays, anniversaries, and private celebrations. Let's create your moment.",
}

export default function PrivateEventsPage() {
  return (
    <main>
      <PrivateHero />
      <PrivatePillarsBar />
      <PerfectForCelebrations />
      <MomentsGallery />
      <PrivateTestimonials />
      <CTASection content={privateEvents.cta} />
    </main>
  )
}
