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
