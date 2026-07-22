import Image from 'next/image'
import Link from 'next/link'
import { music } from '@/lib/content'

export default function OriginalReleases() {
  const { releases } = music
  const buttonIsExternal = releases.button.href.startsWith('http')

  return (
    <section className="bg-brand-black border-t border-gold/30 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_5fr]">

        {/* Left: editorial text — vertically centered, no self-imposed height */}
        <div className="px-6 sm:px-10 lg:px-12 py-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
          <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
            {releases.eyebrow}
          </p>
          <h2
            className="font-sans font-light text-white uppercase leading-tight mb-5"
            style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}
          >
            {releases.headline}
          </h2>
          <div className="w-8 h-px bg-gold/50 mb-5" />
          <p className="text-zinc-500 text-sm leading-relaxed mb-8">
            {releases.body}
          </p>
          <Link
            href={releases.button.href}
            target={buttonIsExternal ? '_blank' : undefined}
            rel={buttonIsExternal ? 'noreferrer' : undefined}
            className="self-start inline-flex items-center gap-2 px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-200"
          >
            {releases.button.label} <span aria-hidden>›</span>
          </Link>
        </div>

        {/* Right: 5 release covers — height naturally set by cover images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 self-start py-12">
          {releases.items.map((release) => {
            const isExternal = release.href.startsWith('http')

            return (
              <Link
                key={release.title}
                href={release.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className="group flex flex-col border-r border-b border-white/5 lg:border-b-0 last:border-r-0 overflow-hidden"
              >
                {/* Cover art */}
                <div className="relative aspect-square overflow-hidden">
                  {release.image ? (
                    <Image
                      src={release.image}
                      fill
                      alt={release.title}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-b ${release.gradient}`} />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
                </div>

                {/* Release info */}
                <div className="px-3 py-3 border-t border-white/5 group-hover:border-gold/15 transition-colors duration-300">
                  <h3 className="font-display font-bold uppercase text-white text-[10px] tracking-widest leading-tight mb-1 group-hover:text-gold transition-colors duration-300">
                    {release.title}
                  </h3>
                  <p className="text-zinc-500 text-[9px] tracking-wide leading-snug mb-1">
                    {release.artist}
                  </p>
                  <p className="text-gold/60 text-[9px] font-bold tracking-[0.18em]">
                    {release.year}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
