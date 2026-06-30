import Image from 'next/image'
import Link from 'next/link'
import type { MusicRelease } from '@/types'

const typeBadgeStyles: Record<MusicRelease['type'], string> = {
  Single: 'border-gold/50 text-gold',
  EP:     'border-zinc-500/50 text-zinc-400',
  Album:  'border-white/30 text-white/70',
}

export default function ReleaseCard({ title, type, year, gradient, image, href }: MusicRelease) {
  return (
    <article className="group relative flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(201,168,76,0.08)]">

      {/* Square artwork */}
      <div className="relative aspect-square overflow-hidden">
        {image ? (
          <Image
            src={image}
            fill
            alt={title}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
            {/* Abstract waveform suggestion */}
            <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-[0.07]">
              {[3, 5, 8, 6, 9, 7, 4, 6, 8, 5, 3].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 mx-0.5 bg-white rounded-sm"
                  style={{ height: `${h * 6}px` }}
                />
              ))}
            </div>
          </div>
        )}
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-dark to-transparent" />

        {/* Type badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-2.5 py-1 border bg-black/50 backdrop-blur-sm text-[9px] font-bold tracking-[0.2em] uppercase ${typeBadgeStyles[type]}`}>
            {type}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="px-5 py-5 bg-brand-dark border-t border-white/5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display font-bold uppercase text-white text-base tracking-wide leading-tight truncate">
              {title}
            </h3>
            <p className="text-zinc-600 text-[10px] font-semibold tracking-[0.15em] uppercase mt-1">
              {year}
            </p>
          </div>
          <Link
            href={href}
            aria-label={`Stream ${title}`}
            className="flex-shrink-0 mt-0.5 text-gold/50 hover:text-gold transition-colors duration-200 text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            Stream ›
          </Link>
        </div>
      </div>
    </article>
  )
}
