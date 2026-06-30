import Image from 'next/image'
import Link from 'next/link'
import type { Mix } from '@/types'

export default function MixCard({ title, description, duration, genre, gradient, image, href }: Mix) {
  return (
    <article className="group relative flex flex-col border-r border-white/5 last:border-r-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_56px_rgba(201,168,76,0.10)]">

      {/* Gold top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gold opacity-25 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Square artwork */}
      <div className="relative aspect-square overflow-hidden flex-shrink-0">
        {image ? (
          <Image
            src={image}
            fill
            alt={title}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
            {/* Subtle vinyl ring suggestion */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
              <div className="w-3/4 h-3/4 rounded-full border-[12px] border-white" />
              <div className="absolute w-1/3 h-1/3 rounded-full border-[6px] border-white" />
              <div className="absolute w-4 h-4 rounded-full bg-white" />
            </div>
          </div>
        )}
        {/* Fade into card body */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-dark to-transparent" />

        {/* Genre badge over artwork */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2.5 py-1 bg-black/60 backdrop-blur-sm border border-gold/40 text-gold text-[9px] font-bold tracking-[0.2em] uppercase">
            {genre}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-7 bg-brand-dark">
        <h3 className="font-display font-bold uppercase text-white text-lg tracking-wide leading-tight mb-2">
          {title}
        </h3>
        <p className="text-zinc-500 text-xs leading-relaxed flex-1 mb-5">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-zinc-600 text-[10px] font-semibold tracking-[0.15em] uppercase">
            {duration}
          </span>
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-gold text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-gold-light transition-colors duration-200"
          >
            Play <span aria-hidden>›</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
