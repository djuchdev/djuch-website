import type { Metadata } from 'next'
import AboutHero from '@/components/sections/about/AboutHero'
import StorySection from '@/components/sections/about/StorySection'
import JourneyBar from '@/components/sections/about/JourneyBar'
import ConnectionSection from '@/components/sections/about/ConnectionSection'
import PressStrip from '@/components/sections/about/PressStrip'
import CTASection from '@/components/sections/CTASection'
import { about } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About UCH — The Story Behind the Atmosphere',
  description:
    "For over two decades, UCH has transformed events into unforgettable experiences. Discover the story, the mission, and the man behind the atmosphere.",
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <StorySection />
      <JourneyBar />
      <ConnectionSection />
      <PressStrip />
      <CTASection content={about.cta} />
    </main>
  )
}
