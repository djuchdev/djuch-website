import Image from 'next/image'
import { hero } from '@/lib/content'
import Button from '@/components/ui/Button'

export default function Hero() {
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
          /* Base atmosphere — replaced by hero.image in content.ts */
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800" />
        )}
        {/* Directional overlays: heavy left for text legibility, fades out right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />
      </div>

      {/* Two-column grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-screen">

          {/* ── Left: typography ── */}
          <div className="flex flex-col justify-center pt-36 pb-24">

            <h1
              className="font-display font-extrabold uppercase leading-[0.88] mb-8"
              style={{ fontSize: 'clamp(3.2rem, 8.5vw, 7.5rem)' }}
            >
              {hero.headlineLines.map((line) => (
                <span key={line} className="block text-white">
                  {line}
                </span>
              ))}
              <span className="block text-gold">{hero.headlineGold}</span>
            </h1>

            {/* Divider */}
            <div className="w-10 h-px bg-gold mb-8" />

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-md mb-6">
              {hero.body}
            </p>

            <p className="text-gold text-[11px] font-semibold tracking-[0.22em] uppercase mb-1.5">
              {hero.taglineGold}
            </p>
            <p className="text-white/75 text-sm mb-12">
              {hero.taglineWhite}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href={hero.ctas.primary.href} variant="primary">
                {hero.ctas.primary.label} <span aria-hidden>›</span>
              </Button>
              <Button href={hero.ctas.secondary.href} variant="outline">
                <span aria-hidden className="text-[10px]">▶</span>
                {hero.ctas.secondary.label}
              </Button>
            </div>
          </div>

          {/* ── Right: portrait area ── */}
          <div className="hidden lg:block relative self-stretch">
            {/*
              When hero.image is set, this column is transparent — the full-bleed
              background photo shows through here (the DJ naturally on the right).
              When no image, render an atmospheric warm placeholder.
            */}
            {!hero.image && (
              <>
                {/* Overhead stage light suggestion */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-700/30 via-zinc-800/10 to-transparent" />
                {/* Warm floor glow */}
                <div className="absolute bottom-0 inset-x-0 h-3/4 bg-gradient-to-t from-amber-950/25 via-amber-900/8 to-transparent" />
                {/* Thin gold left-edge accent */}
                <div className="absolute inset-y-24 left-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
