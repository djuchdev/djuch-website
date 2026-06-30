import type { Metadata } from 'next'
import MusicHero from '@/components/sections/music/MusicHero'
import StreamingPlatforms from '@/components/sections/music/StreamingPlatforms'
import FeaturedMixes from '@/components/sections/music/FeaturedMixes'
import OriginalMusic from '@/components/sections/music/OriginalMusic'
import MusicHighlights from '@/components/sections/music/MusicHighlights'
import FilmAndTv from '@/components/sections/music/FilmAndTv'
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
      <StreamingPlatforms />
      <FeaturedMixes />
      <OriginalMusic />
      <MusicHighlights />
      <FilmAndTv />
      <CTASection content={music.cta} />
    </main>
  )
}
