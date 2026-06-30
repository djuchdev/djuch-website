import Link from 'next/link'
import {
  HeadphonesIcon,
  PeopleIcon,
  PianoIcon,
  WaveformIcon,
} from '@/components/ui/Icons'
import { booking } from '@/lib/content'

type IconKey = 'headphones' | 'people' | 'piano' | 'waveform'

function ExperienceIcon({ kind }: { kind: IconKey }) {
  if (kind === 'headphones') return <HeadphonesIcon />
  if (kind === 'people')     return <PeopleIcon />
  if (kind === 'piano')      return <PianoIcon />
  return <WaveformIcon />
}

const serviceHrefs: Record<IconKey, string> = {
  headphones: '/experiences#corporate',
  people:     '/experiences#private',
  piano:      '/experiences#piano',
  waveform:   '/music',
}

export default function ExperiencesStrip() {
  const { experiences } = booking

  return (
    <section className="bg-brand-dark border-t border-gold/30">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase text-center">
          {experiences.eyebrow}
        </p>
      </div>

      {/* 4-column grid — seamless bordered, full width within max-w */}
      <div className="max-w-7xl mx-auto border-l border-t border-white/5">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {experiences.items.map((item) => {
            const href = serviceHrefs[item.icon]
            return (
              <Link
                key={item.title}
                href={href}
                className="group flex flex-col items-center text-center px-8 py-14 border-r border-b border-white/5 transition-colors duration-300 hover:bg-brand-surface"
              >
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold/60 group-hover:border-gold/60 group-hover:text-gold mb-6 transition-all duration-300">
                  <ExperienceIcon kind={item.icon} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold uppercase text-white text-sm tracking-widest mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                  {item.description}
                </p>

              </Link>
            )
          })}
        </div>
      </div>

      <div className="pb-6" />

    </section>
  )
}
