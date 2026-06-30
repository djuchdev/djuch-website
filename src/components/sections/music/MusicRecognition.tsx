import Image from 'next/image'
import Link from 'next/link'
import { music } from '@/lib/content'

export default function MusicRecognition() {
  const { recognition } = music
  const { billboard, portrait, placements } = recognition

  return (
    <section className="bg-brand-dark border-t border-gold/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr_5fr]" style={{ minHeight: 380 }}>

          {/* Left: Billboard */}
          <div className="px-8 sm:px-12 py-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
              {billboard.eyebrow}
            </p>
            <h2
              className="font-sans font-light text-white uppercase leading-tight mb-8"
              style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)' }}
            >
              {billboard.headline}
            </h2>

            <div className="flex gap-6 mb-10">
              {billboard.stats.map((stat) => (
                <div key={stat.value} className="flex flex-col">
                  <span
                    className="font-display font-extrabold text-gold leading-tight"
                    style={{ fontSize: 'clamp(1.3rem, 2vw, 1.8rem)' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-zinc-500 text-[9px] font-semibold tracking-[0.12em] uppercase leading-tight mt-1 max-w-[10ch]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href={billboard.button.href}
              className="self-start inline-flex items-center gap-2 px-6 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-200"
            >
              {billboard.button.label} <span aria-hidden>›</span>
            </Link>
          </div>

          {/* Center: portrait — fills column, overflows top */}
          <div className="relative order-first lg:order-none min-h-[340px] lg:min-h-0">
            {portrait.image && (
              <div className="absolute inset-0">
                <Image
                  src={portrait.image}
                  fill
                  alt={portrait.imageAlt}
                  className="object-cover object-top"
                />
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-dark to-transparent" />
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-dark to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-brand-dark to-transparent" />
              </div>
            )}
          </div>

          {/* Right: Film & TV */}
          <div className="px-8 sm:px-12 py-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
              {placements.eyebrow}
            </p>
            <h2
              className="font-sans font-light text-white uppercase leading-tight mb-4"
              style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)' }}
            >
              {placements.headline}
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xs">
              {placements.body}
            </p>

            <div className="grid grid-cols-3 gap-x-6 gap-y-5 mb-10">
              {placements.networks.map((network) => (
                <span
                  key={network.name}
                  className={`${network.style} text-white/40 hover:text-white/70 transition-colors duration-200 cursor-default`}
                >
                  {network.name}
                </span>
              ))}
            </div>

            <Link
              href={placements.button.href}
              className="self-start inline-flex items-center gap-2 px-6 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-200"
            >
              {placements.button.label} <span aria-hidden>›</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
