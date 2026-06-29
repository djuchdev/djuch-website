import Image from 'next/image'
import Button from '@/components/ui/Button'
import { about } from '@/lib/content'

export default function AboutHero() {
  const { hero } = about

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-black">

      {/* Full-bleed background */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />
      </div>

      {/* Two-column grid */}
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

            <div>
              <Button href={hero.cta.href} variant="outline">
                {hero.cta.label} <span aria-hidden>›</span>
              </Button>
            </div>
          </div>

          {/* Right: image area — photo shows through, fallback renders atmosphere */}
          <div className="hidden lg:block relative self-stretch">
            {!hero.image && (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-700/20 via-zinc-800/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-3/4 bg-gradient-to-t from-amber-950/20 via-amber-900/5 to-transparent" />
                <div className="absolute inset-y-24 left-0 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
