import Image from 'next/image'
import Button from '@/components/ui/Button'
import { media } from '@/lib/content'

export default function MediaHero() {
  const { hero } = media

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-black">

      <div className="absolute inset-0">
        {hero.image ? (
          <Image src={hero.image} fill alt="" className="object-cover object-center" priority />
        ) : (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800" />
            {/* Cinematic lens-flare suggestion */}
            <div className="absolute inset-0" style={{
              backgroundImage:
                'radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.06) 0%, transparent 55%), radial-gradient(ellipse at 30% 70%, rgba(201,168,76,0.03) 0%, transparent 45%)',
            }} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/93 via-black/65 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-screen">

          {/* Left: typography */}
          <div className="flex flex-col justify-center pt-36 pb-24">

            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-6">
              {hero.eyebrow}
            </p>

            <h1
              className="font-display font-extrabold uppercase leading-[0.88] mb-8"
              style={{ fontSize: 'clamp(3.2rem, 8.5vw, 7.5rem)' }}
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
                <span aria-hidden className="text-[10px]">▶</span>
                {hero.ctas.primary.label}
              </Button>
              <Button href={hero.ctas.secondary.href} variant="outline-gold">
                {hero.ctas.secondary.label} <span aria-hidden>›</span>
              </Button>
            </div>
          </div>

          {/* Right: atmospheric */}
          <div className="hidden lg:block relative self-stretch">
            {!hero.image && (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-700/15 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-amber-950/15 to-transparent" />
                <div className="absolute inset-y-24 left-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
              </>
            )}
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold" />
      </div>
    </section>
  )
}
