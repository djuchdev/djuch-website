import Image from 'next/image'
import { brands } from '@/lib/content'

export default function BrandLogosStrip() {
  return (
    <section className="bg-brand-dark border-y border-gold/30 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">

          {/* Label */}
          <div className="flex-shrink-0 pr-6 border-r border-white/10 hidden sm:block">
            <p className="text-zinc-400 text-[9px] font-semibold tracking-[0.2em] uppercase leading-5 whitespace-pre">
              {brands.eyebrow}
            </p>
          </div>

          {/* Logo strip */}
          <div className="flex-1 min-w-0">
            {brands.stripImage ? (
              <Image
                src={brands.stripImage}
                alt="World-class brand logos"
                width={900}
                height={56}
                className="h-11 w-full object-contain object-left"
                priority
              />
            ) : (
              <div className="flex items-center gap-8 overflow-x-auto">
                {brands.logos.map((logo) => (
                  <span
                    key={logo.name}
                    className="flex-shrink-0 text-white/50 text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap"
                  >
                    {logo.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Suffix */}
          <div className="flex-shrink-0 pl-6 border-l border-white/10 hidden sm:block">
            <span className="text-zinc-400 text-[9px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
              {brands.suffix}
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
