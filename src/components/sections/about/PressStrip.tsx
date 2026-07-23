import Image from 'next/image'
import { about } from '@/lib/content'

export default function PressStrip() {
  const { press } = about

  return (
    <section className="bg-brand-black border-t border-gold/30 border-b border-b-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Eyebrow */}
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase text-center mb-12">
          {press.eyebrow}
        </p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-12">
          {press.outlets.map((outlet) => {
            const textClass =
              'displayClass' in outlet && outlet.displayClass
                ? outlet.displayClass
                : 'font-sans text-xl font-semibold tracking-tight'

            return (
              <span
                key={outlet.name}
                className="flex h-14 min-w-20 items-center justify-center opacity-45 grayscale transition-opacity duration-300 hover:opacity-75"
              >
                {outlet.logo ? (
                  <Image
                    src={outlet.logo}
                    alt={outlet.name}
                    width={outlet.width ?? 140}
                    height={outlet.height ?? 48}
                    className="h-auto max-h-12 w-auto object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                ) : (
                  <span
                    className={`text-white transition-colors duration-300 select-none cursor-default ${textClass}`}
                  >
                    {outlet.name}
                  </span>
                )}
              </span>
            )
          })}
        </div>

      </div>
    </section>
  )
}
