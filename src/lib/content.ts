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
  // Replace with the official hero photo when available (subject on right side of frame)
  image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1920&q=85' as string | null,
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
  // Replace with a wide crowd/celebration photo when available
  image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1920&q=85' as string | null,
}

export const services: Service[] = [
  {
    title: 'Corporate Events',
    description: 'I help brands connect, engage, and impress. Creating the right atmosphere for clients, teams, and partners to do business and celebrate.',
    href: '/experiences#corporate',
    icon: 'headphones',
    // Replace with official corporate event photo when available
    image: 'https://images.unsplash.com/photo-1716070251589-711efc5e077e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Private Events',
    description: 'Weddings, birthdays, milestone celebrations and more. I create unforgettable experiences you and your guests will remember for years to come.',
    href: '/experiences#private',
    icon: 'people',
    // Replace with official private event/wedding photo when available
    image: 'https://images.unsplash.com/photo-1481653125770-b78c206c59d4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Mr. Martin Piano',
    description: 'An interactive blend of live piano, comedy, and energy. High-end lounge entertainment that’s anything but ordinary.',
    href: '/experiences#piano',
    icon: 'piano',
    // Replace with official piano performance photo when available
    image: 'https://images.unsplash.com/photo-1684784176798-aae206e325e7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Music & Mixes',
    description: 'Stream hand-curated mixes and exclusive sets. Perfect for your day, your party, or your creative flow.',
    href: '/music',
    icon: 'waveform',
    // Replace with official DJ/mixing photo when available
    image: 'https://images.unsplash.com/photo-1541126274323-dbac58d14741?auto=format&fit=crop&w=900&q=80',
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
  // Replace with official entertainer portrait when available
  image: 'https://images.unsplash.com/photo-1586232902955-df204f34b36e?auto=format&fit=crop&w=700&q=80' as string | null,
  imageAlt: 'DJ UCH portrait',
  // Replace null with '/images/signature.png' when the signature asset is ready
  signature: null as string | null,
}

export const siteMetadata = {
  title: 'DJ UCH — Unforgettable Experiences',
  description: 'For over two decades, DJ UCH has transformed events into unforgettable experiences. Corporate events, private celebrations, live piano, and more.',
}
