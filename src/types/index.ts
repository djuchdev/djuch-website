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
