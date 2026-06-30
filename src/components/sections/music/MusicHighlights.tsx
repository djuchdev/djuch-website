import { music } from '@/lib/content'

export default function MusicHighlights() {
  const { highlights } = music

  return (
    <section className="bg-brand-black border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Eyebrow + intro */}
        <div className="text-center mb-16">
          <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
            {highlights.eyebrow}
          </p>
          <p className="text-zinc-500 text-sm tracking-wide max-w-sm mx-auto">
            {highlights.intro}
          </p>
        </div>

        {/* Stat grid — centered, vertical layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {highlights.stats.map((stat, i) => (
            <div
              key={stat.value + i}
              className="flex flex-col items-center text-center px-6 py-10 border-r border-white/5 last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r"
            >
              {/* Gold rule accent */}
              <div className="w-6 h-px bg-gold/50 mb-7" />

              {/* Primary value */}
              <p
                className="font-display font-extrabold uppercase text-white leading-tight mb-2"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                {stat.value}
              </p>

              {/* Gold label */}
              <p className="text-gold text-[10px] font-bold tracking-[0.22em] uppercase mb-3">
                {stat.label}
              </p>

              {/* Description */}
              <p className="text-zinc-600 text-[10px] font-semibold tracking-[0.12em] uppercase leading-snug max-w-[16ch] mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
