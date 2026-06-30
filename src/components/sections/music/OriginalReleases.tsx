import Image from 'next/image'
import Link from 'next/link'
import { music } from '@/lib/content'

export default function OriginalReleases() {
  const { releases } = music

  return (
    <section className="bg-brand-black border-t border-gold/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr]">

          {/* Left: editorial text */}
          <div className="px-6 sm:px-10 lg:px-12 py-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              {releases.eyebrow}
            </p>
            <h2
              className="font-sans font-light text-white uppercase leading-tight mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              {releases.headline}
            </h2>
            <div className="w-8 h-px bg-gold/50 mb-6" />
            <p className="text-zinc-500 text-sm leading-relaxed mb-10">
              {releases.body}
            </p>
            <Link
              href={releases.button.href}
              className="self-start inline-flex items-center gap-2 px-6 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-200"
            >
              {releases.button.label} <span aria-hidden>›</span>
            </Link>
          </div>

          {/* Right: 5 release covers */}
          <div className="grid grid-cols-5">
            {releases.items.map((release) => (
              <Link
                key={release.title}
                href={release.href}
                className="group flex flex-col border-r border-white/5 last:border-r-0 overflow-hidden"
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
                    <div className={`absolute inset-0 bg-gradient-to-b ${release.gradient}`}>
                      <div className="absolute inset-0" style={{
                        backgroundImage:
                          'radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 55%)',
                      }} />
                      {/* Faint title watermark on placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p
                          className="text-white/8 font-display font-black uppercase text-center leading-tight px-2"
                          style={{ fontSize: 'clamp(0.9rem, 2vw, 1.4rem)' }}
                        >
                          {release.title}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
                </div>

                {/* Release info */}
                <div className="px-3 py-4 bg-brand-black border-t border-white/5 group-hover:border-gold/15 transition-colors duration-300 flex-1">
                  <h3 className="font-display font-bold uppercase text-white text-[10px] tracking-widest leading-tight mb-1 group-hover:text-gold transition-colors duration-300">
                    {release.title}
                  </h3>
                  <p className="text-zinc-600 text-[9px] tracking-wide leading-snug mb-1.5">
                    {release.artist}
                  </p>
                  <p className="text-gold/60 text-[9px] font-bold tracking-[0.18em]">
                    {release.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
