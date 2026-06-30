export type NavLink = {
  label: string
  href: string
  hasDropdown?: boolean
}

export type BrandLogo = {
  name: string
  image: string | null
}

export type Service = {
  title: string
  description: string
  href: string
  icon: 'headphones' | 'people' | 'piano' | 'waveform'
  image: string | null
}

export type Stat = {
  headline: string
  description: string
  icon: 'vinyl' | 'globe' | 'film' | 'mic'
  iconImage?: string | null
}

export type JourneyStat = {
  value: string
  label: string
  description: string
  icon: 'vinyl' | 'globe' | 'film' | 'note'
  iconImage?: string | null
}

export type PressOutlet = {
  name: string
  displayClass: string
}

export type ClientBrand = {
  name: string
  category: string
}

export type ClientStory = {
  quote: string
  author: string
  company: string
  eventType: string
  detail: string
  image: string | null
  imageAlt: string
}

export type StreamingPlatform = {
  name: string
  descriptor: string
  href: string
  icon: 'spotify' | 'apple-music' | 'mixcloud' | 'soundcloud' | 'youtube'
}

export type Mix = {
  title: string
  description: string
  duration: string
  genre: string
  gradient: string
  image: string | null
  href: string
}

export type MusicRelease = {
  title: string
  type: 'Single' | 'EP' | 'Album'
  year: string
  gradient: string
  image: string | null
  href: string
}

export type FilmTvPlacement = {
  title: string
  type: 'Film' | 'Television' | 'Documentary' | 'Series'
  year: string
  description: string
}

export type MusicHighlightStat = {
  value: string
  label: string
  description: string
}

export type BookingStep = {
  number: string
  title: string
  description: string
  icon: 'calendar' | 'message' | 'headphones' | 'note'
}

export type TrustIndicator = {
  icon: 'lock' | 'clock' | 'shield'
  line1: string
  line2: string
}
