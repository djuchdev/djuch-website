import ReleaseCard from '@/components/ui/ReleaseCard'
import { music } from '@/lib/content'

export default function OriginalMusic() {
  const { releases } = music

  return (
    <section className="bg-brand-dark border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              {releases.eyebrow}
            </p>
            <h2
              className="font-display font-extrabold uppercase text-white leading-[0.9]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              {releases.headline}
            </h2>
          </div>
          <p className="text-zinc-400 text-base leading-relaxed max-w-sm lg:text-right">
            {releases.body}
          </p>
        </div>

        {/* Release grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {releases.items.map((release) => (
            <div key={release.title} className="bg-brand-dark">
              <ReleaseCard {...release} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
