import Image from 'next/image'
import Button from '@/components/ui/Button'
import { music } from '@/lib/content'

export default function MusicHero() {
  const { hero, cta } = music

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-black">

      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        {hero.image ? (
          <Image
            src={hero.image}
            fill
            alt=""
            className="object-cover object-center"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-screen">

          {/* Left: typography */}
          <div className="flex flex-col justify-center pt-36 pb-24">

            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-6">
              {hero.eyebrow}
            </p>

            <h1
              className="font-display font-extrabold uppercase leading-[0.9] mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              {hero.headlineLines.map((line) => (
                <span key={line} className="block text-white">{line}</span>
              ))}
              <span className="block text-gold">{hero.headlineGold}</span>
            </h1>

            <div className="w-10 h-px bg-gold mb-8" />

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-md mb-12">
              {hero.body}
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Button href={hero.ctas.primary.href} variant="primary">
                {hero.ctas.primary.label} <span aria-hidden>›</span>
              </Button>

              {/* Play-circle secondary CTA */}
              <a
                href={hero.ctas.secondary.href}
                className="group inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200"
              >
                <span className="w-9 h-9 rounded-full border border-white/30 group-hover:border-gold/60 flex items-center justify-center transition-colors duration-200">
                  <svg width={10} height={10} viewBox="0 0 10 10" fill="currentColor">
                    <polygon points="2,1 9,5 2,9" />
                  </svg>
                </span>
                <span className="text-xs font-bold tracking-[0.18em] uppercase">
                  {hero.ctas.secondary.label}
                </span>
              </a>
            </div>
          </div>

          {/* Right: signature overlay */}
          <div className="hidden lg:flex items-end justify-end pb-20 pr-4 relative">
            {cta.signature && (
              <div className="relative w-36 h-20 opacity-60">
                <Image
                  src={cta.signature}
                  fill
                  alt="UCH signature"
                  className="object-contain object-right-bottom"
                />
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold" />
      </div>
    </section>
  )
}
