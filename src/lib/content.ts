import type {
  NavLink, BrandLogo, Service, Stat, JourneyStat, PressOutlet,
  ClientBrand, ClientStory,
  Mix, MusicRelease, BillboardStat,
  BookingStep, TrustIndicator,
  CorporatePillar, EventTypeItem, GalleryItem, CorporateTestimonial,
  PrivatePillar, PrivateCelebration,
  VideoReel, PerformanceItem, PressItem, MediaGalleryItem,
} from '@/types'

const mixAudioBaseUrl = process.env.NEXT_PUBLIC_MIX_AUDIO_BASE_URL || ''
const mixAudio = (fileName: string) => mixAudioBaseUrl ? `${mixAudioBaseUrl}/mixes/${fileName}` : ''
const mediaAssetBaseUrl = process.env.NEXT_PUBLIC_MEDIA_ASSET_BASE_URL || mixAudioBaseUrl
const mediaAsset = (path: string) => mediaAssetBaseUrl ? `${mediaAssetBaseUrl}/${path}` : ''

export const nav = {
  logo: { prefix: 'DJ ', name: 'UCH' },
  links: [
    {
      label: 'Experiences',
      href: '/experiences',
      hasDropdown: true,
      dropdown: [
        { label: 'Corporate Events', href: '/experiences/corporate' },
        { label: 'Private Events', href: '/experiences/private' },
        { label: 'Mr. Martin Piano', href: '/experiences/mr-martin-piano' },
      ],
    },
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
    href: '/experiences/corporate',
    icon: 'headphones',
    image: '/images/corporate-events.png',
  },
  {
    title: 'Private Events',
    description: 'Weddings, birthdays, milestone celebrations and more. I create unforgettable experiences you and your guests will remember for years to come.',
    href: '/experiences/private',
    icon: 'people',
    image: '/images/private-events.png',
  },
  {
    title: 'Mr. Martin Piano',
    description: 'An interactive blend of live piano, comedy, and energy. High-end lounge entertainment that\'s anything but ordinary.',
    href: '/experiences/mr-martin-piano',
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
    image: '/images/about-hero.png' as string | null,
    imageAlt: 'UCH at a luxury event',
  },

  story: {
    eyebrow: 'My Story',
    headlineLines: ['It started with music.', 'It became a mission.'],
    body: "From DJing in small clubs to headlining world-class events, music has always been my language. Over the years, I've evolved as an artist, producer, pianist, and entertainer—but the mission has never changed.",
    tagline: 'I create atmospheres that bring people together.',
    image: '/images/about-story.png' as string | null,
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
        iconImage: '/images/about-icon-years.png',
      },
      {
        value: '16',
        label: 'Countries',
        description: 'Performed on International Stages',
        icon: 'globe' as const,
        iconImage: '/images/about-icon-globe.png',
      },
      {
        value: 'Music',
        label: 'Featured In',
        description: 'Major Film & Television',
        icon: 'film' as const,
        iconImage: '/images/about-icon-film.png',
      },
      {
        value: '#1 Records',
        label: 'On Beatport',
        description: 'Plus Billboard Top 15',
        icon: 'note' as const,
        iconImage: '/images/about-icon-records.png',
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
    image: '/images/about-connection.png' as string | null,
    imageAlt: 'UCH engaging with guests at a luxury event',
  },

  press: {
    eyebrow: 'Featured In',
    outlets: [
      { name: 'Page Six', displayClass: 'font-sans text-xl font-light tracking-tight' },
      { name: 'FOX',      displayClass: 'font-display font-black text-2xl tracking-tight' },
      { name: 'NBC',      displayClass: 'font-display font-black text-2xl tracking-[0.12em]' },
      { name: 'ABC',      displayClass: 'font-sans text-2xl font-semibold tracking-tight' },
      { name: 'BBC Radio 1', displayClass: 'font-sans text-xl font-bold tracking-[0.08em]' },
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
    image: '/images/client-hero.png' as string | null,
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
        image: '/images/client-story-1.png',
        imageAlt: 'Corporate gala in a New York venue',
      },
      {
        quote: "Every event UCH performs at becomes the highlight of our social calendar. Our guests consistently ask who the artist is — and how they can book him privately.",
        author: 'Director of Experiences',
        company: 'W Hotels Worldwide',
        eventType: 'Hospitality Residency',
        detail: 'Multiple Residencies · Global',
        image: '/images/client-story-2.png',
        imageAlt: 'Luxury hotel event with guests',
      },
      {
        quote: "We wanted our anniversary to feel cinematic. UCH delivered something beyond our imagination. Our guests are still sending us messages about that night.",
        author: 'Private Client',
        company: 'Miami, Florida',
        eventType: 'Private Celebration',
        detail: 'Intimate Evening · Miami, FL',
        image: '/images/client-story-3.png',
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
    eyebrow: 'The Sound Of Atmosphere',
    headlineLines: ['Music That Moves People.'],
    headlineGold: 'Atmospheres That Stay With Them.',
    body: "From original music to curated mixes, every sound is designed to create a feeling you can't forget.",
    ctas: {
      primary:   { label: 'Stream Now',  href: '#listen' },
      secondary: { label: 'Watch Video', href: '#'       },
    },
    image: '/images/music-hero-v2.png' as string | null,
    imageAlt: 'UCH behind the decks at a world-class event',
  },

  mixes: {
    eyebrow: 'Listen & Stream',
    subheading: 'Curated mixes for every mood. Press play.',
    button: { label: 'View All Mixes', href: '#' },
    items: [
      {
        title: 'Lounge Nights',
        description: 'Smooth vibes for sophisticated nights.',
        gradient: 'from-amber-950 via-stone-900 to-zinc-950',
        image: '/images/music-mix-lounge-nights.png' as string | null,
        audioSrc: mixAudio('lounge-nights.mp3'),
        duration: '56:02',
      },
      {
        title: 'City Lights',
        description: 'Uplifting house and electronic selections.',
        gradient: 'from-indigo-950 via-zinc-900 to-zinc-950',
        image: '/images/music-mix-city-lights.png' as string | null,
        audioSrc: mixAudio('city-lights.mp3'),
        duration: '30:54',
      },
      {
        title: 'Party Starters',
        description: 'High energy mixes to get the party going.',
        gradient: 'from-purple-950 via-zinc-900 to-zinc-950',
        image: '/images/music-mix-party-starters.png' as string | null,
        audioSrc: mixAudio('party-starters.mp3'),
        duration: '23:22',
      },
      {
        title: 'Sunset Sessions',
        description: 'Chill beats and warm sunset energy.',
        gradient: 'from-orange-950 via-stone-900 to-zinc-950',
        image: '/images/music-mix-sunset-sessions.png' as string | null,
        audioSrc: mixAudio('sunset-sessions.mp3'),
        duration: '33:20',
      },
      {
        title: 'Road Trip',
        description: 'The perfect soundtrack for the ride.',
        gradient: 'from-teal-950 via-zinc-900 to-zinc-950',
        image: '/images/music-mix-road-trip.png' as string | null,
        audioSrc: mixAudio('road-trip.mp3'),
        duration: '65:03',
      },
    ] satisfies Mix[],
  },

  releases: {
    eyebrow: 'Original Music & Releases',
    headline: 'The journey behind the sound.',
    body: 'Original records, collaborations, and productions that have been supported worldwide.',
    button: { label: 'View All Releases', href: 'https://open.spotify.com/artist/0DwWk352O9u1BN0eNJx9wT' },
    items: [
      {
        title: 'Here & Now',
        artist: 'Roland Clark, Uch, Reza',
        year: '2024',
        gradient: 'from-zinc-800 via-zinc-900 to-zinc-950',
        image: '/images/releases/here-and-now.png' as string | null,
        href: 'https://open.spotify.com/track/77rnTxbYYYlbEXUkKhba71',
      },
      {
        title: 'Genius Of House (Sam Divine Remix)',
        artist: 'Uch, Sam Divine',
        year: '2021',
        gradient: 'from-stone-800 via-zinc-900 to-zinc-950',
        image: '/images/releases/genius-of-house-sam-divine-remix.png' as string | null,
        href: 'https://open.spotify.com/track/6afaqLMDUO3DNchA0i5W1h',
      },
      {
        title: 'Live For Now',
        artist: 'Uch, Mr. V',
        year: '2021',
        gradient: 'from-red-950 via-zinc-900 to-zinc-950',
        image: '/images/releases/live-for-now.png' as string | null,
        href: 'https://open.spotify.com/track/1GbxLer3F0qDbR8OE8zk3r',
      },
      {
        title: 'Underground Sound',
        artist: 'Uch',
        year: '2021',
        gradient: 'from-zinc-700 via-zinc-800 to-zinc-950',
        image: '/images/releases/underground-sound.png' as string | null,
        href: 'https://open.spotify.com/track/7tTgJbLfc693oaKqFSP8gr',
      },
      {
        title: 'Miami Calling',
        artist: 'John Spinosa, Uch, Morsy',
        year: '2020',
        gradient: 'from-amber-950 via-stone-900 to-zinc-950',
        image: '/images/releases/miami-calling.png' as string | null,
        href: 'https://open.spotify.com/track/5pLJw0M0n6vYAfMyHtIjyQ',
      },
    ] satisfies MusicRelease[],
  },

  recognition: {
    billboard: {
      eyebrow: 'Billboard Recognition',
      headline: 'Charted. Celebrated. Remembered.',
      stats: [
        { value: '#1',       label: 'Billboard Dance Chart' },
        { value: 'Multiple', label: 'Top 10 Billboard Hits' },
        { value: 'Global',   label: 'Radio Support'         },
      ] satisfies BillboardStat[],
      button: { label: 'View Chart History', href: '#' },
    },
    portrait: {
      image: '/images/music-recognition-portrait.png' as string | null,
      imageAlt: 'UCH portrait',
    },
    placements: {
      eyebrow: 'Featured In',
      headline: 'Film. TV. Culture.',
      body: "Uch's music and productions have been featured in major film, television, and entertainment projects.",
      networks: [
        { name: 'HBO',     style: 'font-display font-black text-xl tracking-tight'       },
        { name: 'ESPN',    style: 'font-display font-black text-lg tracking-[0.08em]'    },
        { name: 'BET★',   style: 'font-display font-extrabold text-lg tracking-wide'    },
        { name: 'NETFLIX', style: 'font-sans font-black text-base tracking-[0.04em]'     },
        { name: 'VH1',    style: 'font-display font-black text-xl tracking-[0.06em]'    },
        { name: 'MTV',    style: 'font-display font-extrabold text-xl tracking-widest'  },
      ],
      button: { label: 'View All Placements', href: '#' },
    },
  },

  cta: {
    eyebrow: "Let's Create Your Soundtrack",
    headline: "Every Event Has A Vibe. Let's Make It Unforgettable.",
    body: "From the perfect first song to the final moment, I'll craft the soundtrack your guests will remember.",
    button: { label: 'Book UCH', href: '/booking' },
    image: '/images/cta-portrait.png' as string | null,
    imageAlt: 'DJ UCH portrait',
    signature: '/images/uch-signature.png' as string | null,
  },
}

export const footer = {
  socials: [
    { label: 'Instagram', icon: 'instagram' as const, href: 'https://instagram.com/djuch' },
    { label: 'Spotify',   icon: 'spotify'   as const, href: 'https://open.spotify.com/artist/0DwWk352O9u1BN0eNJx9wT' },
    { label: 'Email',     icon: 'mail'      as const, href: 'mailto:uchpromo@gmail.com' },
  ],
}

// ─── Private Events Page ───────────────────────────────────────────────────────

export const privateEvents = {
  hero: {
    eyebrow: 'Private Events',
    headlineLines: ['Personal Moments.'],
    headlineGold: 'Extraordinary Atmospheres.',
    body: "From intimate celebrations to once-in-a-lifetime moments — Uch creates the soundtrack and atmosphere that you and your guests will never forget.",
    ctas: {
      primary:   { label: 'Check Availability',      href: '/booking' },
      secondary: { label: 'View Private Event Reel', href: '#'        },
    },
    image:    '/images/private-events.png' as string | null,
    imageAlt: 'UCH performing at a luxury private event with floral arrangements',
  },

  pillars: [
    {
      icon:        'heart'  as const,
      title:       'Personal & Curated',
      description: 'Every event is designed around you.',
    },
    {
      icon:        'note'   as const,
      title:       'The Perfect Soundtrack',
      description: 'The right music at the right moment.',
    },
    {
      icon:        'star'   as const,
      title:       'Seamless Experience',
      description: 'Planning, flow, and execution handled with care.',
    },
    {
      icon:        'people' as const,
      title:       'Unforgettable Memories',
      description: 'Moments you and your guests will always remember.',
    },
  ] satisfies PrivatePillar[],

  celebrations: {
    eyebrow: 'Perfect For Every Celebration',
    items: [
      {
        icon: 'rings'   as const,
        title: 'Weddings',
        description: 'Ceremonies, cocktail hours, receptions and after parties.',
      },
      {
        icon: 'cake'    as const,
        title: 'Birthdays',
        description: 'Milestone celebrations made unforgettable.',
      },
      {
        icon: 'toast'   as const,
        title: 'Anniversaries',
        description: 'Romantic, elegant, and uniquely you.',
      },
      {
        icon: 'balloon' as const,
        title: 'Private Parties',
        description: 'From intimate dinners to full-scale celebrations.',
      },
      {
        icon: 'star'    as const,
        title: 'Celebrations',
        description: 'Engagements, graduations, retirements and more.',
      },
      {
        icon: 'home'    as const,
        title: 'At Home Events',
        description: 'Elevate your space into the perfect experience.',
      },
    ] satisfies PrivateCelebration[],
    image:    '/images/private-events.png' as string | null,
    imageAlt: 'Elegant private celebration with candlelight and florals',
  },

  gallery: {
    eyebrow: 'Moments That Speak For Themselves',
    button:  { label: 'View More Gallery', href: '#' },
    items: [
      { image: '/images/private-events.png'             as string | null, gradient: 'from-amber-950 via-amber-900/60 to-zinc-900',   alt: 'First dance sparkler exit'            },
      { image: '/images/client-story-3.png'             as string | null, gradient: 'from-yellow-950 via-amber-800/50 to-zinc-900', alt: 'Candlelit intimate celebration'        },
      { image: '/images/about-connection.png'           as string | null, gradient: 'from-violet-950 via-amber-900/35 to-zinc-900', alt: 'Dance floor celebration'               },
      { image: '/images/booking-testimonial-1.png'      as string | null, gradient: 'from-orange-950 via-amber-900/50 to-zinc-900', alt: 'Elegant tablescape with florals'        },
      { image: '/images/booking-testimonial-2.png'      as string | null, gradient: 'from-rose-950 via-amber-900/40 to-zinc-900',   alt: 'String lights at outdoor reception'    },
    ],
  },

  testimonials: {
    eyebrow: 'What Our Clients Say',
    items: [
      {
        quote:  "Uch made our wedding feel like a movie. The energy was perfect all night and our guests are still talking about it.",
        author: 'Jessica & Marcus',
        title:  'Los Angeles, CA',
      },
      {
        quote:  "Professional, responsive, and truly talented. He understood our vibe instantly and elevated our entire celebration.",
        author: 'Nicole',
        title:  'Birthday Celebration, Las Vegas',
      },
      {
        quote:  "The music, the transitions, the atmosphere — everything was flawless. Worth every penny.",
        author: 'David & Sarah',
        title:  'Anniversary Party, Miami',
      },
    ] satisfies CorporateTestimonial[],
  },

  cta: {
    eyebrow:  "Let's Create Your Moment",
    headline: 'Ready to Create Your Unforgettable Celebration?',
    body:     "Let's bring your vision to life.",
    button:   { label: 'Book a Consultation', href: '/booking' },
    image:     '/images/cta-portrait.png'   as string | null,
    imageAlt:  'DJ UCH portrait',
    signature: '/images/uch-signature.png'  as string | null,
  },
}

// ─── Corporate Events Page ──────────────────────────────────────────────────────

export const corporate = {
  hero: {
    eyebrow: 'Corporate Events',
    headlineLines: ['Professional.', 'Polished.'],
    headlineGold: 'Unforgettable.',
    body: "From conferences to galas, product launches to executive retreats — Uch creates the perfect atmosphere that elevates your brand and leaves a lasting impression.",
    ctas: {
      primary:   { label: 'Check Availability',   href: '/booking' },
      secondary: { label: 'View Corporate Reel',  href: '#' },
    },
    image:    '/images/corporate-events.png' as string | null,
    imageAlt: 'DJ UCH performing at a luxury corporate gala',
  },

  brands: {
    eyebrow: 'Trusted by Leading Brands',
    names: [
      { name: "McDonald's",          style: 'bold-sans'   },
      { name: 'Nike',                style: 'light-sans'  },
      { name: 'Amazon',              style: 'regular-sans' },
      { name: 'Microsoft',           style: 'bold-sans'   },
      { name: 'Google',              style: 'light-sans'  },
      { name: 'Marquee Nightclub',   style: 'serif'       },
      { name: 'Caesars Entertainment', style: 'regular-sans' },
    ],
    suffix: 'And Many More',
  },

  pillars: {
    eyebrow: 'Why Companies Choose UCH',
    items: [
      {
        icon: 'star'       as const,
        title: 'Experience That Delivers',
        description: '15+ years creating premium experiences for top brands, executives, and teams.',
      },
      {
        icon: 'sliders'    as const,
        title: 'Tailored to Your Vision',
        description: 'Every detail curated around your goals, brand, and audience.',
      },
      {
        icon: 'check'      as const,
        title: 'Seamless & Professional',
        description: 'From planning to execution, we handle it all — so you can focus on your event.',
      },
      {
        icon: 'headphones' as const,
        title: 'Atmosphere That Inspires',
        description: 'The right energy at the right moment drives engagement and impact.',
      },
    ] satisfies CorporatePillar[],
    image:    '/images/transform-the-room.png' as string | null,
    imageAlt: 'Corporate ballroom filled with guests',
  },

  eventTypes: {
    eyebrow: 'Perfect For',
    items: [
      { icon: 'briefcase' as const, label: 'Corporate Parties'      },
      { icon: 'people'    as const, label: 'Conferences & Summits'  },
      { icon: 'rocket'    as const, label: 'Product Launches'        },
      { icon: 'trophy'    as const, label: 'Award Ceremonies'        },
      { icon: 'compass'   as const, label: 'Executive Retreats'      },
      { icon: 'toast'     as const, label: 'Client Appreciation'     },
    ] satisfies EventTypeItem[],
  },

  gallery: {
    eyebrow: 'Corporate Event Moments',
    items: [
      { image: '/images/corporate-events.png', gradient: 'from-blue-950 via-blue-900/60 to-zinc-900',     alt: 'Corporate ballroom event with stage lighting' },
      { image: '/images/client-story-1.png',    gradient: 'from-amber-950 via-amber-900/50 to-zinc-900',   alt: 'Gala dinner with candlelit tables'             },
      { image: '/images/about-story.png',       gradient: 'from-violet-950 via-violet-900/50 to-zinc-900', alt: 'Awards ceremony with spotlights'              },
      { image: '/images/booking-hero.png',      gradient: 'from-teal-950 via-teal-900/50 to-zinc-900',     alt: 'Product launch event with lighting'            },
    ] satisfies GalleryItem[],
  },

  testimonials: {
    eyebrow: 'What Our Clients Say',
    items: [
      {
        quote: "Uch took our annual gala to another level. The energy, the transitions, the attention to detail — everything was perfect.",
        author: 'Jason T.',
        title: 'Marketing Director, Nike',
      },
      {
        quote: "Our team still talks about the night. Uch created an atmosphere that was elevated, seamless, and unforgettable.",
        author: 'Lisa M.',
        title: 'Global Events, Amazon',
      },
      {
        quote: "A true professional who reads the room perfectly. He understands how to represent our brand with class.",
        author: 'Michael R.',
        title: 'VP of Operations, Microsoft',
      },
    ] satisfies CorporateTestimonial[],
  },

  cta: {
    eyebrow: "Let's Create Something Remarkable",
    headline: 'Ready To Elevate Your Next Corporate Event?',
    body: "Let's discuss your vision. I'll handle the atmosphere. You get the impact.",
    button: { label: 'Book a Consultation', href: '/booking' },
    image:     '/images/cta-portrait.png'    as string | null,
    imageAlt:  'DJ UCH portrait',
    signature: '/images/uch-signature.png'   as string | null,
  },
}

export const siteMetadata = {
  title: 'DJ UCH — Unforgettable Experiences',
  description: 'For over two decades, DJ UCH has transformed events into unforgettable experiences. Corporate events, private celebrations, live piano, and more.',
}

// ─── Media Page ─────────────────────────────────────────────────────────────────

export const media = {
  hero: {
    eyebrow: 'Media',
    headlineLines: ['See The', 'Atmosphere'],
    headlineGold: 'In Motion.',
    body: 'Every event tells a different story. Watch how atmosphere, connection, and elegance come together to create something unforgettable.',
    ctas: {
      primary:   { label: 'Watch Showreel',      href: '#showreel'  },
      secondary: { label: 'Book an Experience',  href: '/booking'   },
    },
    image:    '/images/about-hero.png' as string | null,
    imageAlt: 'UCH performing at a luxury event',
  },

  showreel: {
    eyebrow:   'Featured Showreel',
    headline:  'The Full Experience.',
    body:      'Two decades of atmosphere, connection, and unforgettable moments — captured in one cinematic showreel.',
    videoId:   '' as string,
    videoHref: '#' as string,
    thumbnail: '/images/music-hero-v2.png' as string | null,
  },

  reels: {
    eyebrow:  'Experience Reels',
    headline: 'Every Event. A Different Story.',
    items: [
      {
        title:       'Corporate Events',
        category:    'Corporate',
        description: 'Atmosphere that impresses clients, elevates brands, and turns business into pleasure.',
        duration:    '2:34',
        thumbnail:   '/images/corporate-events.png' as string | null,
        gradient:    'from-violet-950 via-indigo-900/60 to-zinc-950',
        href:        '#',
      },
      {
        title:       'Private Events',
        category:    'Private',
        description: 'Intimate celebrations transformed into lifelong memories for every guest in the room.',
        duration:    '1:58',
        thumbnail:   '/images/private-events.png' as string | null,
        gradient:    'from-amber-950 via-orange-900/50 to-zinc-950',
        href:        '#',
      },
      {
        title:       'Mr. Martin Piano',
        category:    'Piano',
        description: 'Live piano, original comedy, and interactive performance that creates a one-of-a-kind experience.',
        duration:    '3:12',
        thumbnail:   '/images/mr-martin-piano.png' as string | null,
        gradient:    'from-emerald-950 via-teal-900/50 to-zinc-950',
        href:        '#',
      },
      {
        title:       'Live DJ Performances',
        category:    'DJ',
        description: 'High-energy performances that fill every room, every dance floor, and every moment.',
        duration:    '2:47',
        thumbnail:   '/images/booking-testimonial-2.png' as string | null,
        gradient:    'from-rose-950 via-pink-900/40 to-zinc-950',
        href:        '#',
      },
    ] satisfies VideoReel[],
  },

  performances: {
    eyebrow:  'Featured Performances',
    headline: 'From Stage to Celebration.',
    items: [
      { title: 'Conference Keynote',  venue: 'Fortune 500 Annual Summit',   thumbnail: '/images/client-hero.png'            as string | null, gradient: 'from-violet-900/60 to-zinc-950', href: '#' },
      { title: 'Wedding Reception',   venue: 'The Grand Ballroom, NYC',     thumbnail: '/images/client-story-1.png'         as string | null, gradient: 'from-rose-900/50 to-zinc-950',   href: '#' },
      {
        title: 'Lounge Experience',
        venue: 'Eclipse at W Barcelona',
        thumbnail: '/images/booking-testimonial-1.png' as string | null,
        gradient: 'from-teal-900/50 to-zinc-950',
        href: mediaAsset('videos/lounge-experience-w-barcelona-v2.mp4'),
        videoSrc: mediaAsset('videos/lounge-experience-w-barcelona-v2.mp4'),
      },
      {
        title: 'Festival Stage',
        venue: 'International Music Festival',
        thumbnail: '/images/about-connection.png' as string | null,
        gradient: 'from-amber-900/60 to-zinc-950',
        href: mediaAsset('videos/festival-stage.mp4'),
        videoSrc: mediaAsset('videos/festival-stage.mp4'),
      },
      {
        title: 'Corporate Gala',
        venue: 'PSI Seminars Gala — Santa Fe',
        thumbnail: '/images/client-story-2.png' as string | null,
        gradient: 'from-indigo-900/60 to-zinc-950',
        href: mediaAsset('videos/psi-seminars-gala-santa-fe.mp4'),
        videoSrc: mediaAsset('videos/psi-seminars-gala-santa-fe.mp4'),
      },
      {
        title: 'Piano Session',
        venue: 'Private Penthouse Event',
        thumbnail: '/images/mr-martin-piano.png' as string | null,
        gradient: 'from-emerald-900/50 to-zinc-950',
        href: mediaAsset('videos/piano-session.mp4'),
        videoSrc: mediaAsset('videos/piano-session.mp4'),
        videoAspectRatio: '9 / 16',
      },
    ] satisfies PerformanceItem[],
  },

  gallery: {
    eyebrow:  'Photography',
    headline: 'The Moments Between Moments.',
    items: [
      { image: '/images/booking-hero.png'              as string | null, gradient: 'from-amber-950 via-orange-900/60 to-zinc-950',  alt: 'UCH commanding the room at a gala'   },
      { image: '/images/about-story.png'               as string | null, gradient: 'from-violet-950 via-purple-900/60 to-zinc-950', alt: 'Stage lighting at a corporate event'  },
      { image: '/images/client-story-3.png'            as string | null, gradient: 'from-rose-950 via-red-900/40 to-zinc-950',      alt: 'Dance floor at a private celebration' },
      { image: '/images/music-recognition-portrait.png'as string | null, gradient: 'from-teal-950 via-cyan-900/50 to-zinc-950',    alt: 'UCH portrait at a luxury event'       },
      { image: '/images/about-connection.png'          as string | null, gradient: 'from-indigo-950 via-blue-900/50 to-zinc-950',   alt: 'UCH connecting with guests'           },
      { image: '/images/cta-portrait.png'              as string | null, gradient: 'from-emerald-950 via-green-900/40 to-zinc-950', alt: 'UCH portrait'                         },
    ] satisfies MediaGalleryItem[],
  },

  press: {
    eyebrow:  'Press & Interviews',
    headline: 'In The Conversation.',
    items: [
      {
        outlet:      'Billboard',
        outletStyle: 'font-display font-extrabold text-2xl tracking-tight',
        type:        'article' as const,
        title:       'Chart-Topping DJs Reshaping the Event Industry',
        description: 'How UCH built a career at the intersection of music and luxury hospitality.',
        href:        '#',
      },
      {
        outlet:      'Forbes',
        outletStyle: 'font-sans font-bold text-2xl tracking-tight',
        type:        'article' as const,
        title:       'The New Face of Luxury Entertainment',
        description: 'Inside the business of creating unforgettable atmospheres for the world\'s top brands.',
        href:        '#',
      },
      {
        outlet:      'Entertainment Tonight',
        outletStyle: 'font-sans font-semibold text-lg tracking-wide',
        type:        'television' as const,
        title:       'Celebrity Events & the Music Behind Them',
        description: 'A behind-the-scenes look at the artists who shape the most exclusive events.',
        href:        '#',
      },
      {
        outlet:      'The Breakfast Club',
        outletStyle: 'font-display font-bold text-xl tracking-tight',
        type:        'podcast' as const,
        title:       'Music, Events & the Art of the Atmosphere',
        description: 'UCH sits down to talk two decades in the industry, Billboard success, and what\'s next.',
        href:        '#',
      },
      {
        outlet:      'Luxury Living',
        outletStyle: 'font-sans font-light text-2xl tracking-[0.12em] uppercase',
        type:        'article' as const,
        title:       'The DJ Behind the Brand: UCH\'s Story',
        description: 'From small venues to Fortune 500 stages — a profile of one of the industry\'s most sought-after entertainers.',
        href:        '#',
      },
      {
        outlet:      'Variety',
        outletStyle: 'font-sans italic font-bold text-2xl',
        type:        'interview' as const,
        title:       'Film & TV Music: The UCH Sessions',
        description: 'How UCH\'s productions found their way into major network placements.',
        href:        '#',
      },
    ] satisfies PressItem[],
  },

  cta: {
    eyebrow:   'Ready To Experience It Live?',
    headline:  "Let's Create Something They'll Never Forget.",
    body:      "Every event is a blank canvas. I bring the atmosphere.",
    button:    { label: 'Book UCH', href: '/booking' },
    image:     '/images/cta-portrait.png' as string | null,
    imageAlt:  'DJ UCH portrait',
    signature: '/images/uch-signature.png' as string | null,
  },
}

// ─── Booking Page ───────────────────────────────────────────────────────────────

export const booking = {
  hero: {
    eyebrow: 'Book UCH',
    headlineLines: ["Let's Create", 'Something'],
    headlineGold: 'Unforgettable.',
    body: "Tell me about your event and I'll handle the rest. From the first conversation to the final song, I've got you.",
    cta: { label: 'Check Availability', href: '#booking-form' },
    image: '/images/booking-hero.png' as string | null,
    imageAlt: 'UCH at a luxury event',
  },

  steps: [
    {
      number: '01',
      title: 'Check Availability',
      description: 'Fill out the form with your event details and date.',
      icon: 'calendar' as const,
    },
    {
      number: '02',
      title: 'We Connect',
      description: "We'll confirm availability and schedule a quick call.",
      icon: 'message' as const,
    },
    {
      number: '03',
      title: 'Plan Your Experience',
      description: 'We customize every detail to match your vision.',
      icon: 'headphones' as const,
    },
    {
      number: '04',
      title: 'You Enjoy The Moment',
      description: 'I handle everything so you can be fully present.',
      icon: 'note' as const,
    },
  ] satisfies BookingStep[],

  form: {
    eyebrow: 'Book An Experience',
    subheading: "Complete the form below and we'll be in touch shortly.",
    eventTypes: [
      'Corporate Event',
      'Private Event',
      'Wedding',
      'Birthday Celebration',
      'Milestone Event',
      'Mr. Martin Piano',
      'Luxury Hospitality',
      'Other',
    ],
    budgetRanges: [
      'Under $5,000',
      '$5,000 – $10,000',
      '$10,000 – $25,000',
      '$25,000 – $50,000',
      '$50,000+',
      "Let's Discuss",
    ],
    trustIndicators: [
      { icon: 'lock'  as const, line1: 'Your Information', line2: 'Is 100% Secure'       },
      { icon: 'clock' as const, line1: 'We Respond Within', line2: '24 Business Hours'   },
      { icon: 'shield' as const, line1: 'No Obligation,',  line2: 'Ever.'                },
    ] satisfies TrustIndicator[],
  },

  testimonial: {
    eyebrow: 'What Clients Say',
    quote: "A terrific week working together, we did very well!  The feedback was clear, it was another fantastic time.",
    author: 'Arty',
    title: "Harrah's Lake Tahoe",
    leftImage:  '/images/booking-testimonial-2.png' as string | null,
    rightImage: '/images/booking-testimonial-1.png' as string | null,
  },

  experiences: {
    eyebrow: 'Experiences Tailored To You',
    items: [
      {
        icon: 'headphones' as const,
        title: 'Corporate Events',
        description: 'Elevate your brand and impress your guests with seamless entertainment.',
      },
      {
        icon: 'people' as const,
        title: 'Private Events',
        description: 'Weddings, birthdays, milestone celebrations and more. Made unforgettable.',
      },
      {
        icon: 'piano' as const,
        title: 'Mr. Martin Piano',
        description: 'Live piano, comedy, and interaction that creates a one-of-a-kind experience.',
      },
      {
        icon: 'waveform' as const,
        title: 'Music & Mixes',
        description: 'Curated mixes and custom sets for your party, brand, or creative project.',
      },
    ],
  },

  cta: {
    eyebrow: 'Ready to Get Started?',
    headline: "Let's Create An Atmosphere They Won't Forget.",
    body: "I'm here to make your vision happen.",
    button: { label: 'Get in Touch', href: '#booking-form' },
    image: '/images/cta-portrait.png' as string | null,
    imageAlt: 'DJ UCH portrait',
    signature: '/images/uch-signature.png' as string | null,
  },
}
