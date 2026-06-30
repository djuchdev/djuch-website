import Image from 'next/image'
import Link from 'next/link'
import { media } from '@/lib/content'

export default function PerformanceGrid() {
  const { performances } = media

  return (
    <section className="bg-brand-black border-t border-gold/30 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
              {performances.eyebrow}
            </p>
            <h2
              className="font-display font-extrabold uppercase text-white leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}
            >
              {performances.headline}
            </h2>
          </div>
        </div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {performances.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden bg-brand-dark block"
              style={{ aspectRatio: '4/3' }}
            >
              {/* Background */}
              {item.thumbnail ? (
                <Image
                  src={item.thumbnail}
                  fill
                  alt={item.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`}>
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(ellipse at 45% 30%, rgba(201,168,76,0.05) 0%, transparent 60%)',
                  }} />
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Play icon — appears on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="rgba(201,168,76,0.9)" className="ml-0.5">
                  <polygon points="2,1 11,6 2,11" />
                </svg>
              </div>

              {/* Text */}
              <div className="absolute bottom-0 inset-x-0 p-4">
                <h3 className="font-display font-bold uppercase text-white text-sm tracking-wider leading-tight mb-1 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-[10px] tracking-wide leading-snug">
                  {item.venue}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
