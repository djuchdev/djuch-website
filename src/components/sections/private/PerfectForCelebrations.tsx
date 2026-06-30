import Image from 'next/image'
import {
  RingsIcon, CakeIcon, ToastIcon, BalloonIcon, StarIcon, HomeIcon,
} from '@/components/ui/Icons'
import { privateEvents } from '@/lib/content'
import type { PrivateCelebration } from '@/types'

function CelebrationIcon({ kind }: { kind: PrivateCelebration['icon'] }) {
  if (kind === 'rings')   return <RingsIcon />
  if (kind === 'cake')    return <CakeIcon />
  if (kind === 'toast')   return <ToastIcon />
  if (kind === 'balloon') return <BalloonIcon />
  if (kind === 'star')    return <StarIcon />
  return <HomeIcon />
}

export default function PerfectForCelebrations() {
  const { celebrations } = privateEvents

  return (
    <section className="bg-brand-black border-t border-gold/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-[600px]">

          {/* Left: eyebrow + 3×2 celebration grid */}
          <div className="px-6 sm:px-10 lg:px-14 py-20">

            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">
              {celebrations.eyebrow}
            </p>
            <div className="w-10 h-px bg-gold/50 mb-12" />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10">
              {celebrations.items.map((item) => (
                <div key={item.title} className="group flex flex-col gap-3">

                  {/* Icon circle */}
                  <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold/55 group-hover:border-gold/60 group-hover:text-gold transition-all duration-300">
                    <CelebrationIcon kind={item.icon} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold uppercase text-white text-xs tracking-widest leading-tight group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    {item.description}
                  </p>

                </div>
              ))}
            </div>
          </div>

          {/* Right: atmospheric image — warm celebration mood */}
          <div className="relative min-h-[400px] lg:min-h-0 order-first lg:order-last">
            {celebrations.image ? (
              <>
                <Image
                  src={celebrations.image}
                  fill
                  alt={celebrations.imageAlt}
                  className="object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-black to-transparent hidden lg:block" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-black to-transparent lg:hidden" />
                <div className="absolute inset-0 bg-black/25" />
              </>
            ) : (
              /* Atmospheric warm gradient for celebration mood */
              <div className="absolute inset-0 bg-gradient-to-br from-amber-950/90 via-yellow-950/60 to-zinc-950">
                <div className="absolute inset-0" style={{
                  backgroundImage:
                    'radial-gradient(ellipse at 35% 35%, rgba(201,168,76,0.12) 0%, transparent 55%), ' +
                    'radial-gradient(ellipse at 75% 70%, rgba(255,200,100,0.07) 0%, transparent 45%), ' +
                    'radial-gradient(ellipse at 20% 75%, rgba(201,168,76,0.08) 0%, transparent 40%)',
                }} />
                {/* Simulated string lights */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage:
                    'radial-gradient(circle 2px at 20% 30%, rgba(255,220,120,0.9) 0%, transparent 100%), ' +
                    'radial-gradient(circle 2px at 45% 20%, rgba(255,220,120,0.8) 0%, transparent 100%), ' +
                    'radial-gradient(circle 2px at 70% 35%, rgba(255,220,120,0.9) 0%, transparent 100%), ' +
                    'radial-gradient(circle 2px at 85% 15%, rgba(255,220,120,0.7) 0%, transparent 100%), ' +
                    'radial-gradient(circle 2px at 30% 60%, rgba(255,220,120,0.6) 0%, transparent 100%)',
                }} />
                {/* Subtle fade to left on desktop for seamless blend */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black to-transparent hidden lg:block" />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
