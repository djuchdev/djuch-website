import Image from 'next/image'
import { corporate } from '@/lib/content'

export default function EventGallery() {
  const { gallery } = corporate

  return (
    <section className="bg-brand-black border-t border-gold/30">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase text-center">
          {gallery.eyebrow}
        </p>
      </div>

      {/* Photo grid — 4 equal columns, no gutters */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {gallery.items.map((item, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden"
          >
            {item.image ? (
              <>
                <Image
                  src={item.image}
                  fill
                  alt={item.alt}
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
              </>
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}>
                {/* Atmospheric texture */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(255,255,255,0.03) 0%, transparent 50%)',
                  }}
                />
                {/* Simulated stage lighting */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
                  }}
                />
                {/* Faint overlay text for editorial feel */}
                {i === 0 && (
                  <div className="absolute bottom-4 left-5">
                    <p className="text-white/15 text-[9px] font-bold tracking-[0.3em] uppercase">Corporate Gala</p>
                  </div>
                )}
                {i === 3 && (
                  <div className="absolute bottom-4 right-5 text-right">
                    <p className="text-gold/20 text-[9px] font-bold tracking-[0.3em] uppercase">Thank You</p>
                    <p className="text-white/10 text-[7px] tracking-[0.2em] uppercase mt-0.5">DJ UCH</p>
                  </div>
                )}
              </div>
            )}

            {/* Hover border accent */}
            <div className="absolute inset-0 border border-white/0 hover:border-gold/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

    </section>
  )
}
