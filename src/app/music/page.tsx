import type { Metadata } from 'next'
import MusicHero from '@/components/sections/music/MusicHero'
import ListenAndStream from '@/components/sections/music/ListenAndStream'
import OriginalReleases from '@/components/sections/music/OriginalReleases'
import MusicRecognition from '@/components/sections/music/MusicRecognition'
import CTASection from '@/components/sections/CTASection'
import { music } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Music — DJ UCH',
  description:
    'Stream curated mixes, explore original releases, and discover the music behind unforgettable atmospheres. Spotify, Apple Music, Mixcloud, SoundCloud, and YouTube.',
}

export default function MusicPage() {
  return (
    <main>
      <MusicHero />
      <ListenAndStream />
      <OriginalReleases />
      <MusicRecognition />
      <CTASection content={music.cta} />
    </main>
  )
}
