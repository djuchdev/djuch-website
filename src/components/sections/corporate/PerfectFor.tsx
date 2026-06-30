import {
  BriefcaseIcon, PeopleIcon, RocketIcon,
  TrophyIcon, CompassIcon, ToastIcon,
} from '@/components/ui/Icons'
import { corporate } from '@/lib/content'
import type { EventTypeItem } from '@/types'

function EventIcon({ kind }: { kind: EventTypeItem['icon'] }) {
  if (kind === 'briefcase') return <BriefcaseIcon />
  if (kind === 'people')    return <PeopleIcon />
  if (kind === 'rocket')    return <RocketIcon />
  if (kind === 'trophy')    return <TrophyIcon />
  if (kind === 'compass')   return <CompassIcon />
  return <ToastIcon />
}

export default function PerfectFor() {
  const { eventTypes } = corporate

  return (
    <section className="bg-brand-dark border-t border-gold/30">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase text-center">
          {eventTypes.eyebrow}
        </p>
      </div>

      {/* Seamless bordered 6-col grid */}
      <div className="max-w-7xl mx-auto border-l border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {eventTypes.items.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col items-center text-center px-6 py-12 border-r border-b border-white/5 transition-colors duration-300 hover:bg-brand-surface cursor-default"
            >
              {/* Gold circle icon */}
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold/60 group-hover:border-gold/60 group-hover:text-gold mb-5 transition-all duration-300">
                <EventIcon kind={item.icon} />
              </div>

              <h3 className="font-display font-bold uppercase text-white/60 text-[10px] tracking-[0.18em] group-hover:text-white transition-colors duration-300 leading-snug">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-6" />

    </section>
  )
}
