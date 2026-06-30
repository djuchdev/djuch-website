import {
  HeartIcon, MusicNoteIcon, StarIcon, PeopleIcon,
} from '@/components/ui/Icons'
import { privateEvents } from '@/lib/content'
import type { PrivatePillar } from '@/types'

function PillarIcon({ kind }: { kind: PrivatePillar['icon'] }) {
  if (kind === 'heart')  return <HeartIcon />
  if (kind === 'note')   return <MusicNoteIcon />
  if (kind === 'star')   return <StarIcon />
  return <PeopleIcon />
}

export default function PrivatePillarsBar() {
  const { pillars } = privateEvents

  return (
    <section className="bg-brand-dark border-t border-gold/30">
      <div className="max-w-7xl mx-auto border-l border-t border-white/5">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex items-start gap-4 px-7 py-10 border-r border-b border-white/5 transition-colors duration-300 hover:bg-brand-surface"
            >
              {/* Icon — gold, no circle (more intimate feel) */}
              <div className="flex-shrink-0 text-gold/50 group-hover:text-gold transition-colors duration-300 mt-0.5">
                <PillarIcon kind={pillar.icon} />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-display font-bold uppercase text-white text-xs tracking-widest mb-2 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
