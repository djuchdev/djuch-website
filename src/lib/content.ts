import type { NavLink, BrandLogo, Service, Stat } from '@/types'

export const nav = {
  logo: { prefix: 'DJ ', name: 'UCH' },
  links: [
    { label: 'Experiences', href: '/experiences', hasDropdown: true },
    { label: 'About UCH', href: '/about' },
    { label: 'Clients', href: '/clients' },
    { label: 'Media', href: '/media' },
    { label: 'Music', href: '/music' },
    { label: 'Booking', href: '/booking' },
  ] satisfies NavLink[],
  cta: { label: 'Book UCH', href: '/booking' },
}

export const hero = {
  headlineLines: ['I Create', 'Unforgettable'],
  headlineGold: 'Atmospheres.',
  body: "For over two decades, I've helped people celebrate, connect, and do business—transforming moments into experiences they talk about for years.",
  taglineGold: 'Fun. Atmosphere. Connection.',
  taglineWhite: "That's what I deliver.",
  ctas: {
    primary: { label: 'Book an Experience', href: '/booking' },
    secondary: { label: 'Watch Showreel', href: '#' },
  },
  // Replace null with '/images/hero.jpg' when the hero photo is ready
  image: null as string | null,
  imageAlt: 'DJ UCH performing at a live event',
}

export const brands = {
  eyebrow: 'Trusted by\nWorld-Class\nBrands',
  logos: [
    { name: 'W Hotels', image: null },
    { name: 'Tommy Hilfiger', image: null },
    { name: 'Armani Exchange', image: null },
    { name: 'Caesars Entertainment', image: null },
    { name: 'TAO Group', image: null },
    { name: 'MGM Resorts', image: null },
  ] satisfies BrandLogo[],
  suffix: 'And More',
}

export const servicesIntro = {
  eyebrow: 'My Job is Simple:',
  headline: 'Transform The Room.',
  body: "Whether it's a corporate event, a private celebration, a live piano experience, or a packed dance floor—my mission is the same.",
  tagline: 'Make it Unforgettable.',
  // Replace null with '/images/event-crowd.jpg' when the background photo is ready
  image: null as string | null,
}

export const services: Service[] = [
  {
    title: 'Corporate Events',
    description:
      'I help brands connect, engage, and impress. Creating the right atmosphere for clients, teams, and partners to do business and celebrate.',
    href: '/experiences#corporate',
    icon: 'headphones',
    image: null, // Replace with '/images/service-corporate.jpg'
  },
  {
    title: 'Private Events',
    description:
      'Weddings, birthdays, milestone celebrations and more. I create unforgettable experiences you and your guests will remember for years to come.',
    href: '/experiences#private',
    icon: 'people',
    image: null, // Replace with '/images/service-private.jpg'
  },
  {
    title: 'Mr. Martin Piano',
    description:
      'An interactive blend of live piano, comedy, and energy. High-end lounge entertainment that’s anything but ordinary.',
    href: '/experiences#piano',
    icon: 'piano',
    image: null, // Replace with '/images/service-piano.jpg'
  },
  {
    title: 'Music & Mixes',
    description:
      'Stream hand-curated mixes and exclusive sets. Perfect for your day, your party, or your creative flow.',
    href: '/music',
    icon: 'waveform',
    image: null, // Replace with '/images/service-music.jpg'
  },
]

export const stats: Stat[] = [
  {
    headline: '#1 Records',
    description: 'Multiple Billboard Charts',
    icon: 'vinyl',
  },
  {
    headline: 'Toured the World',
    description: 'Performed on International Stages',
    icon: 'globe',
  },
  {
    headline: 'Music in Film & TV',
    description: 'Soundtracks for Major Film & Television',
    icon: 'film',
  },
  {
    headline: '20+ Years',
    description: 'Of Creating Moments Worth Remembering',
    icon: 'mic',
  },
]

export const ctaSection = {
  eyebrow: 'Ready to Create',
  headline: 'Something Unforgettable?',
  body: "Let's make your event legendary.",
  button: { label: 'Get in Touch', href: '/booking' },
  // Replace null with '/images/cta-portrait.jpg' when the portrait photo is ready
  image: null as string | null,
  imageAlt: 'DJ UCH smiling',
  // Replace null with '/images/signature.png' when the signature asset is ready
  signature: null as string | null,
}

export const siteMetadata = {
  title: 'DJ UCH — Unforgettable Experiences',
  description:
    'For over two decades, DJ UCH has transformed events into unforgettable experiences. Corporate events, private celebrations, live piano, and more.',
}
