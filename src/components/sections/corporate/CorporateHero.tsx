import Image from 'next/image'
import Button from '@/components/ui/Button'
import { corporate } from '@/lib/content'

export default function CorporateHero() {
  const { hero } = corporate

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-black">

      {/* Full-bleed background */}
      <div className="absolute inset-0">
        {hero.image ? (
          <Image
            src={hero.image}
            fill
            alt=""
            className="object-cover"
            style={{ objectPosition: 'center 25%' }}
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25" />
      </div>

      {/* Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-screen">

          {/* Left: typography */}
          <div className="flex flex-col justify-center pt-36 pb-28">

            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-6">
              {hero.eyebrow}
            </p>

            <h1
              className="font-display font-extrabold uppercase leading-[0.88] mb-8"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              {hero.headlineLines.map((line) => (
                <span key={line} className="block text-white">{line}</span>
              ))}
              <span className="block text-gold">{hero.headlineGold}</span>
            </h1>

            <div className="w-10 h-px bg-gold mb-8" />

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-lg mb-12">
              {hero.body}
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Button href={hero.ctas.primary.href} variant="primary">
                {hero.ctas.primary.label} <span aria-hidden>›</span>
              </Button>

              <button
                className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 group"
                aria-label="View Corporate Reel"
              >
                {/* Play circle */}
                <span className="w-9 h-9 rounded-full border border-white/30 group-hover:border-gold/60 flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                  <svg
                    width={10} height={10} viewBox="0 0 10 10" fill="currentColor"
                    className="translate-x-[1px] text-white/70 group-hover:text-gold transition-colors duration-200"
                  >
                    <polygon points="0,0 10,5 0,10" />
                  </svg>
                </span>
                <span className="text-xs font-bold tracking-[0.18em] uppercase">
                  {hero.ctas.secondary.label}
                </span>
              </button>
            </div>

          </div>

          {/* Right: image bleeds through */}
          <div className="hidden lg:block relative self-stretch" />

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-35">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold" />
      </div>

    </section>
  )
}
