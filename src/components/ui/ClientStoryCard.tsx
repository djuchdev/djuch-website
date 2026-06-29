import Image from 'next/image'
import type { ClientStory } from '@/types'

export default function ClientStoryCard({
  quote,
  author,
  company,
  eventType,
  detail,
  image,
  imageAlt,
}: ClientStory) {
  return (
    <article className="group relative flex flex-col border-r border-white/5 last:border-r-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_56px_rgba(201,168,76,0.08)]">

      {/* Gold top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gold opacity-25 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Image */}
      <div className="relative h-64 sm:h-72 overflow-hidden flex-shrink-0">
        {image ? (
          <Image
            src={image}
            fill
            alt={imageAlt}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950" />
        )}
        {/* Gradient fade into card body */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-dark to-transparent" />

        {/* Event type badge — sits over image */}
        <div className="absolute bottom-5 left-6">
          <span className="inline-flex items-center px-3 py-1 border border-gold/50 bg-black/60 backdrop-blur-sm text-gold text-[9px] font-bold tracking-[0.2em] uppercase">
            {eventType}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-7 pt-7 pb-9 bg-brand-dark">

        {/* Decorative opening quote */}
        <span
          className="text-gold/30 leading-none select-none mb-3 block"
          style={{ fontSize: '3.5rem', fontFamily: 'Georgia, serif', lineHeight: 0.8 }}
          aria-hidden
        >
          &ldquo;
        </span>

        <p className="text-zinc-300 text-sm leading-relaxed flex-1 italic mb-7">
          {quote}
        </p>

        {/* Divider */}
        <div className="w-8 h-px bg-gold/40 mb-5" />

        {/* Attribution */}
        <p className="font-display font-bold uppercase text-white text-sm tracking-wide leading-tight">
          {author}
        </p>
        <p className="text-zinc-500 text-[11px] tracking-wide mt-1">
          {company}
        </p>

        {/* Detail */}
        <p className="text-gold/70 text-[10px] font-semibold tracking-[0.18em] uppercase mt-4">
          {detail}
        </p>
      </div>
    </article>
  )
}
