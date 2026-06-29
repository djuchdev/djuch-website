import Image from 'next/image'
import { about } from '@/lib/content'
import { VinylIcon, GlobeIcon, FilmIcon, MusicNoteIcon } from '@/components/ui/Icons'

const iconMap = {
  vinyl: VinylIcon,
  globe: GlobeIcon,
  film:  FilmIcon,
  note:  MusicNoteIcon,
}

export default function JourneyBar() {
  const { journey } = about

  return (
    <section className="bg-brand-black border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Eyebrow */}
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase text-center mb-16">
          {journey.eyebrow}
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {journey.stats.map((stat, i) => {
            const Icon = iconMap[stat.icon]
            return (
              <div
                key={stat.value + i}
                className="flex flex-col items-center text-center px-6 py-8 border-r border-white/5 last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r"
              >
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-full border border-gold/70 flex items-center justify-center mb-7 overflow-hidden flex-shrink-0">
                  {stat.iconImage ? (
                    <Image
                      src={stat.iconImage}
                      alt={stat.label}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-gold"><Icon /></span>
                  )}
                </div>

                {/* Primary value */}
                <p
                  className="font-display font-extrabold uppercase text-white leading-tight mb-2"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
                >
                  {stat.value}
                </p>

                {/* Gold label */}
                <p className="text-gold text-[10px] font-bold tracking-[0.22em] uppercase mb-3">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-zinc-500 text-[10px] font-semibold tracking-[0.12em] uppercase leading-snug max-w-[14ch] mx-auto">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
