import Image from 'next/image'
import {
  StarIcon, SlidersIcon, CheckCircleIcon, HeadphonesIcon,
} from '@/components/ui/Icons'
import { corporate } from '@/lib/content'
import type { CorporatePillar } from '@/types'

function PillarIcon({ kind }: { kind: CorporatePillar['icon'] }) {
  if (kind === 'star')       return <StarIcon />
  if (kind === 'sliders')    return <SlidersIcon />
  if (kind === 'check')      return <CheckCircleIcon />
  return <HeadphonesIcon />
}

export default function WhyChooseUch() {
  const { pillars } = corporate

  return (
    <section className="bg-brand-black border-t border-gold/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

          {/* Left: pillars */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-20">

            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-12">
              {pillars.eyebrow}
            </p>

            <div className="flex flex-col gap-10">
              {pillars.items.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-5 group">

                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gold/35 flex items-center justify-center text-gold/70 group-hover:border-gold/70 group-hover:text-gold transition-all duration-300">
                    <PillarIcon kind={pillar.icon} />
                  </div>

                  {/* Text */}
                  <div className="pt-1.5">
                    <h3 className="font-display font-bold uppercase text-white text-sm tracking-widest mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Right: editorial image */}
          <div className="relative min-h-[400px] lg:min-h-0 order-first lg:order-last">
            {pillars.image ? (
              <>
                <Image
                  src={pillars.image}
                  fill
                  alt={pillars.imageAlt}
                  className="object-cover"
                  style={{ objectPosition: 'center 40%' }}
                />
                {/* Fade towards text on desktop */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black to-transparent hidden lg:block" />
                {/* Bottom fade on mobile */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-black to-transparent lg:hidden" />
                <div className="absolute inset-0 bg-black/30" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 via-zinc-800/40 to-amber-950/20" />
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
