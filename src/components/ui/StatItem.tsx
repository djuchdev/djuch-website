import Image from 'next/image'
import type { Stat } from '@/types'
import { VinylIcon, GlobeIcon, FilmIcon, MicIcon } from '@/components/ui/Icons'

const iconMap = {
  vinyl: VinylIcon,
  globe: GlobeIcon,
  film:  FilmIcon,
  mic:   MicIcon,
}

export default function StatItem({ headline, description, icon, iconImage }: Stat) {
  const Icon = iconMap[icon]

  return (
    <div className="flex items-start gap-5 px-7 py-12 border-r border-white/5 last:border-r-0">

      <div className="flex-shrink-0 w-16 h-16 rounded-full border border-gold flex items-center justify-center overflow-hidden">
        {iconImage ? (
          <Image
            src={iconImage}
            alt={headline}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-gold">
            <Icon />
          </span>
        )}
      </div>

      <div>
        <p className="font-display font-bold uppercase text-white text-xl md:text-2xl leading-tight tracking-wide">
          {headline}
        </p>
        <p className="text-zinc-500 text-[11px] font-semibold tracking-[0.15em] uppercase mt-2 leading-snug">
          {description}
        </p>
      </div>
    </div>
  )
}
