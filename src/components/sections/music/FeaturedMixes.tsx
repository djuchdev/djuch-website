import MixCard from '@/components/ui/MixCard'
import { music } from '@/lib/content'

export default function FeaturedMixes() {
  const { mixes } = music

  return (
    <section className="bg-brand-black border-t border-gold/30">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              {mixes.eyebrow}
            </p>
            <h2
              className="font-display font-extrabold uppercase text-white leading-[0.9]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              {mixes.headline}
            </h2>
          </div>
        </div>
      </div>

      {/* Mix cards — 5-column grid matching the 5 mixes */}
      <div className="border-t border-gold/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {mixes.items.map((mix) => (
              <MixCard key={mix.title} {...mix} />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
