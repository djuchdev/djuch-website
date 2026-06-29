# DJ UCH — Design System

> **Brand promise:** *I Create Unforgettable Atmospheres.*
> Every design decision should reinforce luxury, warmth, sophistication, and timeless confidence.
> Reference brands: Four Seasons, Ritz-Carlton, Apple, Aman Resorts, Soho House.
> This is **not** a nightclub. The product is **atmosphere**, not music.

---

## 1. Brand Colors

Defined in `src/app/globals.css` as Tailwind v4 theme tokens.

| Token | Hex | Usage |
|---|---|---|
| `bg-gold` / `text-gold` | `#C9A84C` | Primary accent — eyebrows, rules, CTAs, icon borders, active states |
| `bg-gold-light` / `text-gold-light` | `#D9BB6E` | Hover state for gold elements |
| `bg-brand-black` / `text-brand-black` | `#0A0A0A` | Page background, hero sections |
| `bg-brand-dark` | `#111111` | Card backgrounds, alternating sections |
| `bg-brand-surface` | `#1A1A1A` | Elevated surfaces (modals, dropdowns) |
| `text-white` | `#FFFFFF` | Primary headlines |
| `text-zinc-300` | — | Body copy on dark backgrounds |
| `text-zinc-400` | — | Secondary body copy |
| `text-zinc-500` | — | Muted labels, descriptions |
| `text-zinc-600` | — | Fine print, copyright |

**Never use:** pure white backgrounds, bright colors, neon, high-saturation palette, or nightclub-style color flashes.

---

## 2. Typography

Three fonts are loaded globally in `src/app/layout.tsx` via `next/font/google`.

### Font families

| CSS Variable | Tailwind class | Font | Use |
|---|---|---|---|
| `--font-barlow` | `font-display` | Barlow Condensed (400, 600, 700, 800) | Hero headlines, section titles, card headings, stats, all uppercase display text |
| `--font-geist` | `font-sans` | Geist | Body copy, UI text, nav, buttons, CTA headlines in light-weight |
| `--font-great-vibes` | `font-script` | Great Vibes | Signature / decorative script only |

### Headline styles (copy exactly)

**Hero H1 — Display condensed:**
```tsx
<h1
  className="font-display font-extrabold uppercase leading-[0.88]"
  style={{ fontSize: 'clamp(3.2rem, 8.5vw, 7.5rem)' }}
>
```

**Section H2 — Display condensed:**
```tsx
<h2
  className="font-display font-extrabold uppercase leading-[0.9]"
  style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
>
```

**Editorial H2 — Sans light (for narrative/story content):**
```tsx
<h2
  className="font-sans font-light text-white leading-[1.1]"
  style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
>
```

**CTA H2 — Sans light uppercase (for CTA sections):**
```tsx
<h2
  className="font-sans font-light uppercase"
  style={{ fontSize: 'clamp(2.6rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.07, color: '#F4F4F4' }}
>
```

### Eyebrow / label style (always gold)

```tsx
<p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">
  Section Label
</p>
```

Variants: `tracking-[0.22em]` for taglines, `tracking-[0.18em]` for nav/buttons.

### Body copy

```tsx
// Primary body
<p className="text-zinc-300 text-base md:text-lg leading-relaxed">
// Secondary body  
<p className="text-zinc-400 text-base leading-relaxed">
// Small descriptors
<p className="text-zinc-500 text-[11px] font-semibold tracking-[0.12em] uppercase leading-snug">
```

### Gold rule (divider)

Always `w-10 h-px bg-gold` (or `bg-gold/45`–`bg-gold/50` for lighter contexts). Never decorative lines in other colors.

---

## 3. Spacing System

Use Tailwind's default scale. Key recurring values:

| Context | Value |
|---|---|
| Section vertical padding | `py-24` → `py-28` → `py-40` (scale up with visual weight) |
| Section horizontal padding | `px-4 sm:px-6 lg:px-8` via `max-w-7xl mx-auto` |
| Content max-width | `max-w-7xl` for full-width sections; `max-w-3xl` / `max-w-xl` for centered copy |
| Eyebrow → headline gap | `mb-6` (with `mb-8` when headline is very large) |
| Headline → rule gap | `mb-8` (rule is `mb-8` below it) |
| Rule → body gap | already included in rule's margin-bottom |
| Body → CTA gap | `mb-10` → `mb-12` |
| Card body padding | `px-7 pt-6 pb-9` |
| Hero top padding (below nav) | `pt-36` |

---

## 4. Section Borders

All sections are separated by **thin gold borders**, never white or zinc:

```tsx
// Top border only (most common)
<section className="border-t border-gold/30">

// Top and bottom (for strips, press bars)
<section className="border-t border-gold/30 border-b border-b-gold/30">

// Combined top+bottom shorthand
<section className="border-y border-gold/30">
```

Internal dividers (e.g., between grid columns): `border-r border-white/5`.

---

## 5. Layout Patterns

### Full-bleed hero with text overlay

Hero sections use **absolute-positioned background** with directional gradient overlays:

```tsx
<section className="relative min-h-screen overflow-hidden bg-brand-black">
  <div className="absolute inset-0">
    <Image src={image} fill alt="" className="object-cover object-center" priority />
    {/* Heavy left for text legibility, fades right */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-black/10" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />
  </div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-screen">
      {/* Left: text — pt-36 pb-24 */}
      {/* Right: transparent — photo shows through */}
    </div>
  </div>
</section>
```

### Editorial split (text + image, equal columns)

```tsx
<section className="bg-brand-dark border-t border-gold/30 overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    {/* Text column: py-24 px-8 sm:px-12 lg:px-16 xl:px-20 */}
    {/* Image column: relative, fill image, dissolve gradient */}
  </div>
</section>
```

Image column always uses `relative` with `<Image fill>` and a dissolve gradient on the edge adjacent to text:
```tsx
<div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent" />
```

On mobile, image columns use `min-h-80` to give them natural height.

For reversed order on mobile (image above text), use `order-1 lg:order-2` / `order-2 lg:order-1`.

### Stats / journey bar

Centered grid with icon-above layout:
```tsx
<section className="bg-brand-black border-t border-gold/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <p className="text-gold text-[11px] ... text-center mb-16">Eyebrow</p>
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {/* Each: flex-col items-center text-center, border-r border-white/5 */}
    </div>
  </div>
</section>
```

### Three-column editorial CTA

See `CTASection.tsx`. Accepts a `content` prop — always pass page-specific content rather than relying on the global default.

---

## 6. Component Library

### Button (`src/components/ui/Button.tsx`)

Three variants — never deviate from these:

| Variant | Appearance | Use |
|---|---|---|
| `primary` | Gold fill, black text | Primary CTA ("Book an Experience") |
| `outline` | White border, white text → gold on hover | Secondary CTA ("Watch Showreel", "My Story") |
| `outline-gold` | Gold border, gold text → gold fill on hover | Tertiary/alternative CTA |

Base styles: `px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200`.

### SectionEyebrow (`src/components/ui/SectionEyebrow.tsx`)

Shorthand for the standard gold eyebrow label. Use when the eyebrow is the *only* element above a section headline.

### ServiceCard (`src/components/ui/ServiceCard.tsx`)

- Gold top accent line (low opacity at rest, full on hover)
- Image with `group-hover:scale-[1.03]` transition
- Gold icon with `group-hover:scale-110 origin-left`
- `hover:-translate-y-1` lift + gold shadow
- "Learn More ›" link in gold

### StatItem (`src/components/ui/StatItem.tsx`)

Horizontal layout: gold-bordered circle icon left, bold headline + muted description right. Used in the homepage StatsBar. For **vertical centered stats** (About Journey), use the inline pattern in `JourneyBar.tsx`.

### Icon circle

Standard pattern for all icon containers:
```tsx
<div className="w-14 h-14 rounded-full border border-gold/70 flex items-center justify-center overflow-hidden">
  {iconImage ? <Image src={iconImage} ... /> : <span className="text-gold"><Icon /></span>}
</div>
```

---

## 7. Icons (`src/components/ui/Icons.tsx`)

All icons are hand-drawn SVG at `20×20`, stroke `1.5`, `currentColor`, `round` caps/joins.

| Export | Use |
|---|---|
| `HeadphonesIcon` | Corporate Events service |
| `PeopleIcon` | Private Events service |
| `PianoIcon` | Mr. Martin Piano service |
| `WaveformIcon` | Music & Mixes service |
| `VinylIcon` | Vinyl / 20+ Years stat |
| `GlobeIcon` | Toured the World stat |
| `FilmIcon` | Film & TV stat |
| `MicIcon` | Microphone stat |
| `MusicNoteIcon` | #1 Records stat (About page) |
| `ChevronDownIcon` | Nav dropdown indicator |
| `MenuIcon` | Mobile hamburger |
| `XIcon` | Mobile menu close |
| `InstagramIcon` | Footer social |
| `YouTubeIcon` | Footer social |
| `SpotifyIcon` | Footer social |
| `MailIcon` | Footer social / email |

---

## 8. Image Patterns

### Image assets (in `public/images/`)

| File | Used in |
|---|---|
| `hero.png` | Homepage hero background |
| `world-class-brands.png` | Brand logos strip |
| `transform-the-room.png` | Services intro section |
| `corporate-events.png` | Corporate Events service card |
| `private-events.png` | Private Events service card |
| `mr-martin-piano.png` | Mr. Martin Piano service card |
| `music-and-mixes.png` | Music & Mixes service card |
| `cta-portrait.png` | CTA section portrait (left column) |
| `uch-signature.png` | CTA section signature (right column, `mix-blend-mode: screen`) |
| `icons/20-plus-years.png` | Stats: 20+ Years icon |
| `icons/toured-the-world.png` | Stats: Toured the World / Countries icon |
| `icons/music-in-film-and-tv.png` | Stats: Film & TV icon |
| `icons/number-1-records.png` | Stats: #1 Records icon |

### About page (images to be added)

| File | Used in |
|---|---|
| `about-hero.png` | About hero — portrait of UCH in suit, luxury interior |
| `about-story.png` | Story section — dramatic B&W DJ performance with crowd |
| `about-connection.png` | Connection section — UCH with guests at a luxury event |

**Set in `src/lib/content.ts`** as `null` until supplied. All components handle `null` gracefully with atmospheric dark gradient fallbacks.

### Image rules

- All images use `next/image` with `fill` + `object-cover` for full-bleed columns
- Hero images: `priority` prop always set
- Always provide a meaningful `alt` for portrait/content images; use `alt=""` for pure decorative backgrounds
- Dissolve gradients hide hard edges between image columns and adjacent content

---

## 9. Animation & Interaction

| Pattern | Implementation |
|---|---|
| Section hover lift | `hover:-translate-y-1 transition-all duration-300` |
| Card gold shadow on hover | `hover:shadow-[0_16px_56px_rgba(201,168,76,0.10)]` |
| Image subtle zoom on hover | `group-hover:scale-[1.03] transition-transform duration-500` |
| Top gold accent reveal | `opacity-30 group-hover:opacity-100 transition-opacity duration-500` |
| Button scale feedback | `active:scale-[0.98]` |
| Color transitions | `transition-colors duration-200` (fast) / `duration-300` (moderate) |
| Logo marquee | `animate-marquee` — 28s linear infinite; pauses on hover |
| Navbar scroll | Transparent → `bg-brand-black/95 backdrop-blur-sm border-b border-white/5` at 40px |

**No** bounce, spring, or playful animations. All motion is smooth, deliberate, and slow.

---

## 10. Content Patterns

All page content lives in `src/lib/content.ts`. **Never hardcode strings in components.**

### Content object conventions

- `eyebrow` — short label, rendered in gold uppercase
- `headlineLines[]` — array of white headline lines; last line often goes in gold via `headlineGold`
- `body` — single paragraph string, or `bodyLines[]` for poetic/line-break content
- `tagline` / `taglineLines[]` — secondary gold uppercase accent
- `image: string | null` — always nullable; components must handle null
- `imageAlt: string` — descriptive alt for screen readers
- `cta: { label, href }` — CTA button data

### Content type definitions

All types are in `src/types/index.ts`. Add new types there rather than inline.

---

## 11. Page Structure Template

Every new page follows this shell:

```tsx
// src/app/[page]/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title — DJ UCH',
  description: 'SEO description...',
}

export default function PageName() {
  return (
    <main>
      {/* Hero section — always first */}
      {/* Alternating bg-brand-black / bg-brand-dark sections */}
      {/* CTASection — always last, accepts content prop */}
    </main>
  )
}
```

Navbar and Footer are injected by `src/app/layout.tsx` — **never add them inside a page**.

### Section alternation rule

```
bg-brand-black  (hero)
bg-brand-dark   (first content section)
bg-brand-black  (stats / journey bar)
bg-brand-dark   (editorial / connection)
bg-brand-black  (press strip / media)
bg-brand-dark   (CTA — always this color, matches existing CTASection)
```

Strict alternation maintains visual rhythm and prevents adjacent sections from merging.

---

## 12. Navigation

Defined in `src/lib/content.ts` under `nav`. The active page link should visually differentiate — use `text-gold` or `text-white` instead of `text-white/65` when `usePathname()` matches.

Current pages and their nav labels:
- `/` — (no nav label, linked via logo)
- `/about` — About UCH
- `/experiences` — Experiences
- `/clients` — Clients
- `/media` — Media
- `/music` — Music
- `/booking` — Booking

---

## 13. Footer

`src/components/layout/Footer.tsx` — rendered globally in `layout.tsx`.

- Three-column desktop: Logo | Nav links | Social icons
- Social links defined in `footer.socials` in `content.ts` — update hrefs there
- Copyright year is computed dynamically (`new Date().getFullYear()`)
- Social icon buttons: `w-9 h-9 border border-white/15` → gold on hover

---

## 14. Do / Don't

| Do | Don't |
|---|---|
| Use `font-display` for any bold/headline display text | Mix font families arbitrarily |
| Keep all section transitions to `border-t border-gold/30` | Use zinc or white section borders |
| Use `text-gold` for all accent/emphasis text | Use yellow, orange, or other warm tones |
| Keep body copy at `text-zinc-300` to `text-zinc-400` | Use pure white for long-form body copy |
| Write `null` image paths and handle them gracefully | Leave broken `<img>` tags or assume images exist |
| Build every section as a reusable component | Inline section content in page files |
| Add new content to `content.ts`, new types to `types/index.ts` | Hardcode strings in component JSX |
| Use `clamp()` for headline font sizes | Use fixed `text-5xl` style sizes that break on intermediate screens |
| Keep luxury hospitality framing in all copy | Reference clubs, DJing, beats, or music-first language |
