import Image from 'next/image'
import Link from 'next/link'
import { privateEvents } from '@/lib/content'

export default function MomentsGallery() {
  const { gallery } = privateEvents

  return (
    <section className="bg-brand-dark border-t border-gold/30">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase">
          {gallery.eyebrow}
        </p>
      </div>

      {/* 5-photo gallery grid — full bleed, no gutters */}
      <div className="grid grid-cols-3 lg:grid-cols-5">
        {gallery.items.map((item, i) => (
          <div
            key={i}
            className={`relative overflow-hidden ${i === 3 || i === 4 ? 'hidden sm:block' : ''}`}
            style={{ aspectRatio: '3/4' }}
          >
            {item.image ? (
              <>
                <Image
                  src={item.image}
                  fill
                  alt={item.alt}
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/15 hover:bg-black/0 transition-colors duration-300" />
              </>
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient}`}>
                {/* Warm atmospheric texture */}
                <div className="absolute inset-0" style={{
                  backgroundImage:
                    'radial-gradient(ellipse at 40% 30%, rgba(201,168,76,0.10) 0%, transparent 60%), ' +
                    'radial-gradient(ellipse at 70% 75%, rgba(255,200,100,0.06) 0%, transparent 50%)',
                }} />
                {/* Subtle candlelight glow effect */}
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(255,180,60,0.14) 0%, transparent 70%)' }}
                />
                {/* Editorial faint label — first and last only */}
                {i === 0 && (
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white/12 text-[8px] font-bold tracking-[0.3em] uppercase">First Dance</p>
                  </div>
                )}
                {i === 4 && (
                  <div className="absolute bottom-4 right-4 text-right">
                    <p className="text-gold/15 text-[8px] font-bold tracking-[0.3em] uppercase">Thank You</p>
                    <p className="text-white/10 text-[7px] tracking-[0.2em] uppercase mt-0.5">DJ UCH</p>
                  </div>
                )}
              </div>
            )}
            {/* Hover border */}
            <div className="absolute inset-0 border border-white/0 hover:border-gold/15 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* View More button */}
      <div className="flex justify-center py-12 px-4">
        <Link
          href={gallery.button.href}
          className="inline-flex items-center gap-2.5 px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-200"
        >
          {gallery.button.label} <span aria-hidden>›</span>
        </Link>
      </div>

    </section>
  )
}
