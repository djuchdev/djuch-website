import { music } from '@/lib/content'
import type { FilmTvPlacement } from '@/types'

const typeLabel: Record<FilmTvPlacement['type'], string> = {
  Film:          'Feature Film',
  Television:    'Television',
  Documentary:   'Documentary',
  Series:        'Streaming Series',
}

export default function FilmAndTv() {
  const { filmTv } = music

  return (
    <section className="bg-brand-dark border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Editorial split: intro left, list right */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24">

          {/* Left: section copy */}
          <div className="flex flex-col justify-center">
            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-6">
              {filmTv.eyebrow}
            </p>

            <h2
              className="font-display font-extrabold uppercase leading-[0.9] mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {filmTv.headlineLines.map((line) => (
                <span key={line} className="block text-white">{line}</span>
              ))}
              <span className="block text-gold">{filmTv.headlineGold}</span>
            </h2>

            <div className="w-10 h-px bg-gold/50 mb-8" />

            <p className="text-zinc-400 text-base leading-relaxed max-w-sm">
              {filmTv.body}
            </p>
          </div>

          {/* Right: placement list */}
          <div className="flex flex-col divide-y divide-white/5">
            {filmTv.placements.map((placement, i) => (
              <div
                key={placement.title + i}
                className="group flex items-start gap-6 py-8 first:pt-0 last:pb-0"
              >
                {/* Year accent */}
                <div className="flex-shrink-0 w-12 text-right">
                  <span className="text-gold/50 text-[10px] font-bold tracking-[0.15em] uppercase">
                    {placement.year}
                  </span>
                </div>

                {/* Gold vertical rule */}
                <div className="flex-shrink-0 w-px self-stretch bg-white/10 group-hover:bg-gold/30 transition-colors duration-300" />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-bold uppercase text-white text-base tracking-wide leading-tight">
                      {placement.title}
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 border border-white/10 text-zinc-500 text-[8px] font-bold tracking-[0.18em] uppercase">
                      {typeLabel[placement.type]}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {placement.description}
                  </p>
                </div>
              </div>
            ))}

            {/* "More placements" indicator */}
            <div className="pt-8 flex items-center gap-3">
              <div className="w-12" />
              <div className="w-px h-4 bg-white/10" />
              <p className="text-zinc-600 text-[10px] font-semibold tracking-[0.2em] uppercase">
                And many more productions
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
