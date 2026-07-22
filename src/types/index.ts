export type NavLink = {
  label: string
  href: string
  hasDropdown?: boolean
  dropdown?: {
    label: string
    href: string
  }[]
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
  gradient: string
  image: string | null
  audioSrc: string
  duration: string
}

export type MusicRelease = {
  title: string
  artist: string
  year: string
  gradient: string
  image: string | null
  href: string
}

export type BillboardStat = {
  value: string
  label: string
}

export type PrivatePillar = {
  icon: 'heart' | 'note' | 'star' | 'people'
  title: string
  description: string
}

export type PrivateCelebration = {
  icon: 'rings' | 'cake' | 'toast' | 'balloon' | 'star' | 'home'
  title: string
  description: string
}

export type CorporatePillar = {
  icon: 'star' | 'sliders' | 'check' | 'headphones'
  title: string
  description: string
}

export type EventTypeItem = {
  icon: 'briefcase' | 'people' | 'rocket' | 'trophy' | 'compass' | 'toast'
  label: string
}

export type GalleryItem = {
  image: string | null
  gradient: string
  alt: string
}

export type CorporateTestimonial = {
  quote: string
  author: string
  title: string
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

export type VideoReel = {
  title: string
  category: string
  description: string
  duration: string
  thumbnail: string | null
  gradient: string
  href: string
}

export type PerformanceItem = {
  title: string
  venue: string
  thumbnail: string | null
  gradient: string
  href: string
  videoSrc?: string
}

export type PressItem = {
  outlet: string
  outletStyle: string
  type: 'podcast' | 'television' | 'interview' | 'article'
  title: string
  description: string
  href: string
}

export type MediaGalleryItem = {
  image: string | null
  gradient: string
  alt: string
}
