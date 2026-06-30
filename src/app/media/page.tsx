import type { Metadata } from 'next'
import MediaHero from '@/components/sections/media/MediaHero'
import FeaturedShowreel from '@/components/sections/media/FeaturedShowreel'
import ExperienceReels from '@/components/sections/media/ExperienceReels'
import PerformanceGrid from '@/components/sections/media/PerformanceGrid'
import PhotoGallery from '@/components/sections/media/PhotoGallery'
import PressSection from '@/components/sections/media/PressSection'
import CTASection from '@/components/sections/CTASection'
import { media } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Media — DJ UCH',
  description:
    'Watch showreels, experience reels, and photography from two decades of luxury events, corporate galas, private celebrations, and Billboard-charting performances.',
}

export default function MediaPage() {
  return (
    <main>
      <MediaHero />
      <FeaturedShowreel />
      <ExperienceReels />
      <PerformanceGrid />
      <PhotoGallery />
      <PressSection />
      <CTASection content={media.cta} />
    </main>
  )
}
