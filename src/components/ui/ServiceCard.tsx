import Image from 'next/image'
import Link from 'next/link'
import type { Service } from '@/types'
import {
  HeadphonesIcon,
  PeopleIcon,
  PianoIcon,
  WaveformIcon,
} from '@/components/ui/Icons'

const iconMap = {
  headphones: HeadphonesIcon,
  people: PeopleIcon,
  piano: PianoIcon,
  waveform: WaveformIcon,
}

// Distinct placeholder gradients so each card looks different before real photos land
const placeholderGradients: Record<string, string> = {
  headphones: 'from-zinc-800 via-zinc-900 to-zinc-950',
  people:     'from-zinc-700 via-zinc-800 to-zinc-950',
  piano:      'from-zinc-800 via-stone-900 to-zinc-950',
  waveform:   'from-zinc-700 via-zinc-900 to-stone-950',
}

export default function ServiceCard({ title, description, href, icon, image }: Service) {
  const Icon = iconMap[icon]

  return (
    <article className="group relative flex flex-col border-r border-white/5 last:border-r-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_56px_rgba(201,168,76,0.10)]">

      {/* Gold top accent line — slides in from left on hover */}
      <div className="absolute top-0 inset-x-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />

      {/* Image */}
      <div className="relative h-60 sm:h-72 overflow-hidden flex-shrink-0">
        {image ? (
          <Image
            src={image}
            fill
            alt={title}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-b ${placeholderGradients[icon]} transition-opacity duration-300 group-hover:opacity-80`} />
        )}
        {/* Bottom fade into card body */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-dark to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-7 pt-6 pb-9 bg-brand-dark">
        <div className="text-gold mb-4 transition-transform duration-300 group-hover:scale-110 origin-left">
          <Icon />
        </div>

        <h3 className="font-display font-bold uppercase text-white text-xl tracking-wide mb-3">
          {title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-7">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-gold text-[11px] font-bold tracking-[0.2em] uppercase group-hover:text-gold-light transition-colors duration-200"
        >
          Learn More
          <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
        </Link>
      </div>
    </article>
  )
}
