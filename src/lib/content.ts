import type {
  NavLink, BrandLogo, Service, Stat, JourneyStat, PressOutlet,
  ClientBrand, ClientStory,
  StreamingPlatform, Mix, MusicRelease, FilmTvPlacement, MusicHighlightStat,
} from '@/types'

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
  image: '/images/hero.png' as string | null,
  imageAlt: 'DJ UCH performing at a live event',
}

export const brands = {
  eyebrow: 'Trusted by\nWorld-Class\nBrands',
  // Combined logo strip — replace with '/images/world-class-brands.png' path already set
  stripImage: '/images/world-class-brands.png' as string | null,
  // Kept for type compatibility; no longer used for individual rendering
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
  image: '/images/transform-the-room.png' as string | null,
}

export const services: Service[] = [
  {
    title: 'Corporate Events',
    description: 'I help brands connect, engage, and impress. Creating the right atmosphere for clients, teams, and partners to do business and celebrate.',
    href: '/experiences#corporate',
    icon: 'headphones',
    image: '/images/corporate-events.png',
  },
  {
    title: 'Private Events',
    description: 'Weddings, birthdays, milestone celebrations and more. I create unforgettable experiences you and your guests will remember for years to come.',
    href: '/experiences#private',
    icon: 'people',
    image: '/images/private-events.png',
  },
  {
    title: 'Mr. Martin Piano',
    description: 'An interactive blend of live piano, comedy, and energy. High-end lounge entertainment that\'s anything but ordinary.',
    href: '/experiences#piano',
    icon: 'piano',
    image: '/images/mr-martin-piano.png',
  },
  {
    title: 'Music & Mixes',
    description: 'Stream hand-curated mixes and exclusive sets. Perfect for your day, your party, or your creative flow.',
    href: '/music',
    icon: 'waveform',
    image: '/images/music-and-mixes.png',
  },
]

export const stats: Stat[] = [
  {
    headline: '#1 Records',
    description: 'Multiple Billboard Charts',
    icon: 'vinyl',
    iconImage: '/images/icons/number-1-records.png',
  },
  {
    headline: 'Toured the World',
    description: 'Performed on International Stages',
    icon: 'globe',
    iconImage: '/images/icons/toured-the-world.png',
  },
  {
    headline: 'Music in Film & TV',
    description: 'Soundtracks for Major Film & Television',
    icon: 'film',
    iconImage: '/images/icons/music-in-film-and-tv.png',
  },
  {
    headline: '20+ Years',
    description: 'Of Creating Moments Worth Remembering',
    icon: 'mic',
    iconImage: '/images/icons/20-plus-years.png',
  },
]

export const ctaSection = {
  eyebrow: 'Ready to Create',
  headline: 'Something Unforgettable?',
  body: "Let's make your event legendary.",
  button: { label: 'Get in Touch', href: '/booking' },
  image: '/images/cta-portrait.png' as string | null,
  imageAlt: 'DJ UCH portrait',
  signature: '/images/uch-signature.png' as string | null,
}

// ─── About Page ────────────────────────────────────────────────────────────────

export const about = {
  hero: {
    eyebrow: 'About UCH',
    headlineLines: ['The Story', 'Behind The'],
    headlineGold: 'Atmosphere.',
    body: "For over two decades, I've had one mission: transform the room and create moments people never forget.",
    cta: { label: 'My Story', href: '#story' },
    image: null as string | null,
    imageAlt: 'UCH at a luxury event',
  },

  story: {
    eyebrow: 'My Story',
    headlineLines: ['It started with music.', 'It became a mission.'],
    body: "From DJing in small clubs to headlining world-class events, music has always been my language. Over the years, I've evolved as an artist, producer, pianist, and entertainer—but the mission has never changed.",
    tagline: 'I create atmospheres that bring people together.',
    image: null as string | null,
    imageAlt: 'UCH performing at the DJ booth with a crowd behind him',
  },

  journey: {
    eyebrow: 'The Journey',
    stats: [
      {
        value: '20+',
        label: 'Years',
        description: 'Of Creating Moments Worth Remembering',
        icon: 'vinyl' as const,
        iconImage: '/images/icons/20-plus-years.png',
      },
      {
        value: '30+',
        label: 'Countries',
        description: 'Performed on International Stages',
        icon: 'globe' as const,
        iconImage: '/images/icons/toured-the-world.png',
      },
      {
        value: 'Film & TV',
        label: 'Music Featured In',
        description: 'Major Film & Television Soundtracks',
        icon: 'film' as const,
        iconImage: '/images/icons/music-in-film-and-tv.png',
      },
      {
        value: '#1 Records',
        label: 'Multiple Billboard',
        description: 'Charts',
        icon: 'note' as const,
        iconImage: '/images/icons/number-1-records.png',
      },
    ] satisfies JourneyStat[],
  },

  connection: {
    headlineLines: ['More Than Music.', "It's About Connection."],
    bodyLines: [
      'I read the room. I feel the energy.',
      'I anticipate the moment.',
      'Then I elevate it.',
    ],
    taglineLines: ['Every event is unique.', 'Every experience is personal.'],
    closing: "That's how I create unforgettable atmospheres.",
    image: null as string | null,
    imageAlt: 'UCH engaging with guests at a luxury event',
  },

  press: {
    eyebrow: 'Featured In',
    outlets: [
      { name: 'billboard',     displayClass: 'font-display font-black text-2xl tracking-tight' },
      { name: 'Forbes',        displayClass: 'font-sans text-xl font-light tracking-tight' },
      { name: 'Rolling Stone', displayClass: 'font-sans text-lg font-normal' },
      { name: 'COMPLEX',       displayClass: 'font-display font-black text-xl tracking-[0.1em]' },
      { name: 'VIBE',          displayClass: 'font-display font-black text-2xl tracking-[0.15em]' },
    ] satisfies PressOutlet[],
  },

  cta: {
    eyebrow: "Let's Create",
    headline: 'Something Unforgettable.',
    body: "Whether it's a corporate event, private celebration, or an intimate live performance, I'm here to transform your next event.",
    button: { label: 'Get in Touch', href: '/booking' },
    image: '/images/cta-portrait.png' as string | null,
    imageAlt: 'DJ UCH portrait',
    signature: '/images/uch-signature.png' as string | null,
  },
}

// ─── Clients Page ───────────────────────────────────────────────────────────────

export const clients = {
  hero: {
    eyebrow: 'Our Clients',
    headlineLines: ['Trusted by Brands.'],
    headlineGold: 'Loved by People.',
    body: "For over two decades, I've created unforgettable atmospheres for some of the world's most prestigious brands, venues, and private events — from intimate celebrations to stadium-scale productions.",
    image: null as string | null,
    imageAlt: 'UCH performing at a world-class corporate event',
  },

  logoWall: {
    eyebrow: 'Trusted By',
    intro: 'A roster built on results. These brands chose UCH because the atmosphere he creates reflects their own standard of excellence.',
    brands: [
      { name: 'W Hotels',               category: 'Hospitality' },
      { name: 'MGM Resorts',            category: 'Entertainment' },
      { name: 'Caesars Entertainment',  category: 'Entertainment' },
      { name: 'TAO Group',              category: 'Hospitality' },
      { name: 'Tommy Hilfiger',         category: 'Fashion' },
      { name: 'Armani Exchange',        category: 'Fashion' },
      { name: 'Marriott International', category: 'Hospitality' },
      { name: 'American Express',       category: 'Finance' },
      { name: 'BET Networks',           category: 'Media' },
      { name: 'Live Nation',            category: 'Entertainment' },
      { name: 'Ritz-Carlton',           category: 'Hospitality' },
      { name: 'Four Seasons',           category: 'Hospitality' },
    ] satisfies ClientBrand[],
    suffix: 'And many more world-class clients',
  },

  stories: {
    eyebrow: 'Client Stories',
    headlineLines: ['Experiences That'],
    headlineGold: 'Speak for Themselves.',
    items: [
      {
        quote: "UCH transformed our annual leadership summit into something our clients and team still talk about years later. He didn't just play music — he created a moment.",
        author: 'Senior Vice President',
        company: 'Global Financial Services Firm',
        eventType: 'Corporate Event',
        detail: '500+ Guests · Manhattan, New York',
        image: '/images/corporate-events.png',
        imageAlt: 'Corporate gala in a New York venue',
      },
      {
        quote: "Every event UCH performs at becomes the highlight of our social calendar. Our guests consistently ask who the artist is — and how they can book him privately.",
        author: 'Director of Experiences',
        company: 'W Hotels Worldwide',
        eventType: 'Hospitality Residency',
        detail: 'Multiple Residencies · Global',
        image: '/images/private-events.png',
        imageAlt: 'Luxury hotel event with guests',
      },
      {
        quote: "We wanted our anniversary to feel cinematic. UCH delivered something beyond our imagination. Our guests are still sending us messages about that night.",
        author: 'Private Client',
        company: 'Miami, Florida',
        eventType: 'Private Celebration',
        detail: 'Intimate Evening · Miami, FL',
        image: '/images/mr-martin-piano.png',
        imageAlt: 'Private luxury celebration',
      },
    ] satisfies ClientStory[],
  },

  cta: {
    eyebrow: "Let's Create",
    headline: 'Your Best Event Yet.',
    body: "Join the world's most prestigious brands and private clients who trust UCH to create their most unforgettable moments.",
    button: { label: 'Book UCH', href: '/booking' },
    image: '/images/cta-portrait.png' as string | null,
    imageAlt: 'DJ UCH portrait',
    signature: '/images/uch-signature.png' as string | null,
  },
}

// ─── Music Page ─────────────────────────────────────────────────────────────────

export const music = {
  hero: {
    eyebrow: 'Music & Mixes',
    headlineLines: ['Music That Moves', 'People.'],
    headlineGold: 'Atmospheres That Stay.',
    body: "Music is the invisible architecture of every unforgettable experience. Explore the sounds, mixes, and original recordings that have moved audiences across the world.",
    ctas: {
      primary:   { label: 'Listen Now',    href: '#streaming' },
      secondary: { label: 'Watch Showreel', href: '#' },
    },
    image: '/images/music-and-mixes.png' as string | null,
    imageAlt: 'UCH behind the decks at a world-class event',
  },

  streaming: {
    eyebrow: 'Stream',
    headline: 'Find Your Sound.',
    body: 'Every curated mix, original track, and exclusive set — available wherever you listen.',
    platforms: [
      {
        name: 'Spotify',
        descriptor: 'Stream curated playlists and mixes',
        href: '#',
        icon: 'spotify' as const,
      },
      {
        name: 'Apple Music',
        descriptor: 'Original tracks and chart hits',
        href: '#',
        icon: 'apple-music' as const,
      },
      {
        name: 'Mixcloud',
        descriptor: 'Full DJ sets and exclusive shows',
        href: '#',
        icon: 'mixcloud' as const,
      },
      {
        name: 'SoundCloud',
        descriptor: 'Previews, edits, and underground cuts',
        href: '#',
        icon: 'soundcloud' as const,
      },
      {
        name: 'YouTube',
        descriptor: 'Live performances and music videos',
        href: '#',
        icon: 'youtube' as const,
      },
    ] satisfies StreamingPlatform[],
  },

  mixes: {
    eyebrow: 'Featured Mixes',
    headline: 'Curated for Every Atmosphere.',
    items: [
      {
        title: 'Lounge Nights',
        description: 'The soundtrack to upscale evenings and intimate conversations.',
        duration: '75 min',
        genre: 'Luxury Lounge',
        gradient: 'from-amber-950/60 via-zinc-900 to-zinc-950',
        image: null as string | null,
        href: '#',
      },
      {
        title: 'Sunset Sessions',
        description: 'Golden hour vibes for rooftops, terraces, and sundowners.',
        duration: '90 min',
        genre: 'Sunset Soul',
        gradient: 'from-orange-950/50 via-zinc-900 to-zinc-950',
        image: null as string | null,
        href: '#',
      },
      {
        title: 'City Lights',
        description: 'Urban elegance — the sound of the city after midnight.',
        duration: '80 min',
        genre: 'Urban Chic',
        gradient: 'from-zinc-700 via-zinc-800 to-zinc-950',
        image: null as string | null,
        href: '#',
      },
      {
        title: 'Party Starters',
        description: 'High-energy selections built to move a room.',
        duration: '60 min',
        genre: 'Peak Hour',
        gradient: 'from-zinc-800 via-stone-900 to-zinc-950',
        image: null as string | null,
        href: '#',
      },
      {
        title: 'Road Trip',
        description: 'Miles of premium listening for long drives and open roads.',
        duration: '120 min',
        genre: 'Journey',
        gradient: 'from-stone-800 via-zinc-900 to-zinc-950',
        image: null as string | null,
        href: '#',
      },
    ] satisfies Mix[],
  },

  releases: {
    eyebrow: 'Original Music',
    headline: 'Beyond the Mix.',
    body: 'Original productions, collaborations, and studio recordings — music built to last.',
    items: [
      {
        title: 'Feel the Atmosphere',
        type: 'Single' as const,
        year: '2024',
        gradient: 'from-amber-950/50 via-zinc-900 to-zinc-950',
        image: null as string | null,
        href: '#',
      },
      {
        title: 'Connected',
        type: 'EP' as const,
        year: '2023',
        gradient: 'from-zinc-700 via-zinc-800 to-zinc-950',
        image: null as string | null,
        href: '#',
      },
      {
        title: 'Elevate',
        type: 'Single' as const,
        year: '2023',
        gradient: 'from-stone-800 via-zinc-900 to-zinc-950',
        image: null as string | null,
        href: '#',
      },
      {
        title: 'The Experience',
        type: 'Album' as const,
        year: '2022',
        gradient: 'from-zinc-800 via-zinc-900 to-zinc-950',
        image: null as string | null,
        href: '#',
      },
    ] satisfies MusicRelease[],
  },

  highlights: {
    eyebrow: 'The Record',
    intro: 'A career measured not in plays, but in rooms transformed.',
    stats: [
      { value: '#1',       label: 'Billboard Charts',  description: 'Multiple chart-topping recordings' },
      { value: '20+',      label: 'Years',              description: 'Of crafting unforgettable atmospheres' },
      { value: '30+',      label: 'Countries',          description: 'Music heard around the world' },
      { value: 'Film & TV', label: 'Featured In',       description: 'Major international productions' },
    ] satisfies MusicHighlightStat[],
  },

  filmTv: {
    eyebrow: 'Film & Television',
    headlineLines: ['Music That Sets'],
    headlineGold: 'The Scene.',
    body: "When a director needs a sound that makes an audience feel something, they call. Here's where the music has landed.",
    placements: [
      {
        title: 'Major Network Drama Series',
        type: 'Television' as const,
        year: '2024',
        description: 'Original compositions and curated score across multiple season episodes.',
      },
      {
        title: 'International Feature Film',
        type: 'Film' as const,
        year: '2023',
        description: 'Original score contribution and soundtrack supervision.',
      },
      {
        title: 'Global Lifestyle Documentary',
        type: 'Documentary' as const,
        year: '2023',
        description: 'Featured throughout — primary atmospheric soundtrack.',
      },
      {
        title: 'Premium Streaming Series',
        type: 'Series' as const,
        year: '2022',
        description: 'Recurring soundtrack placement across two seasons.',
      },
    ] satisfies FilmTvPlacement[],
  },

  cta: {
    eyebrow: 'Every Great Event',
    headline: 'Deserves Great Music.',
    body: "Music sets the tone, builds the energy, and creates the memories. Let's make your event one people never stop talking about.",
    button: { label: 'Book UCH', href: '/booking' },
    image: '/images/cta-portrait.png' as string | null,
    imageAlt: 'DJ UCH portrait',
    signature: '/images/uch-signature.png' as string | null,
  },
}

export const footer = {
  socials: [
    { label: 'Instagram', icon: 'instagram' as const, href: '#' },
    { label: 'YouTube',   icon: 'youtube'   as const, href: '#' },
    { label: 'Spotify',   icon: 'spotify'   as const, href: '#' },
    { label: 'Email',     icon: 'mail'      as const, href: 'mailto:booking@djuch.com' },
  ],
}

export const siteMetadata = {
  title: 'DJ UCH — Unforgettable Experiences',
  description: 'For over two decades, DJ UCH has transformed events into unforgettable experiences. Corporate events, private celebrations, live piano, and more.',
}
