import Image from 'next/image'
import Link from 'next/link'
import { media } from '@/lib/content'

export default function ExperienceReels() {
  const { reels } = media

  return (
    <section className="bg-brand-dark border-t border-gold/30 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
            {reels.eyebrow}
          </p>
          <h2
            className="font-display font-extrabold uppercase text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {reels.headline}
          </h2>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
          {reels.items.map((reel) => (
            <Link
              key={reel.title}
              href={reel.href}
              className="group relative overflow-hidden bg-brand-black block"
              style={{ aspectRatio: '16/9' }}
            >
              {/* Background */}
              {reel.thumbnail ? (
                <Image
                  src={reel.thumbnail}
                  fill
                  alt={reel.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${reel.gradient} transition-transform duration-700 group-hover:scale-105`}>
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(ellipse at 40% 35%, rgba(201,168,76,0.06) 0%, transparent 55%)',
                  }} />
                </div>
              )}

              {/* Cinematic bars */}
              <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Category badge — top left */}
              <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/50 border border-white/10 text-white/60 text-[9px] font-bold tracking-[0.2em] uppercase">
                {reel.category}
              </div>

              {/* Duration badge — top right */}
              <div className="absolute top-4 right-4 px-2.5 py-1 bg-black/50 text-white/60 text-[9px] font-bold tracking-[0.18em]">
                {reel.duration}
              </div>

              {/* Play button — center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center shadow-xl">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="#0A0A0A" className="ml-1">
                    <polygon points="3,2 16,9 3,16" />
                  </svg>
                </div>
              </div>

              {/* Title / desc — bottom */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="font-display font-bold uppercase text-white text-sm md:text-base tracking-wider leading-tight mb-1 group-hover:text-gold transition-colors duration-300">
                  {reel.title}
                </h3>
                <p className="text-zinc-400 text-[11px] leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {reel.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
