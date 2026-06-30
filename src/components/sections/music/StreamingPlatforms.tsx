import PlatformCard from '@/components/ui/PlatformCard'
import { music } from '@/lib/content'

export default function StreamingPlatforms() {
  const { streaming } = music

  return (
    <section id="streaming" className="bg-brand-dark border-t border-gold/30">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
          {streaming.eyebrow}
        </p>
        <h2
          className="font-display font-extrabold uppercase text-white leading-[0.9] mb-5"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
          {streaming.headline}
        </h2>
        <p className="text-zinc-400 text-base leading-relaxed max-w-lg">
          {streaming.body}
        </p>
      </div>

      {/* Platform cards — seamless bordered grid */}
      <div className="max-w-7xl mx-auto border-l border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {streaming.platforms.map((platform) => (
            <PlatformCard key={platform.name} {...platform} />
          ))}
        </div>
      </div>

    </section>
  )
}
