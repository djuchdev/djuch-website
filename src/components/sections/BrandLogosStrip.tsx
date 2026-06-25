import Image from 'next/image'
import { brands } from '@/lib/content'

export default function BrandLogosStrip() {
  if (brands.stripImage) {
    return (
      <section className="bg-brand-dark border-y border-white/5 py-5 overflow-hidden">
        <div className="flex items-center">
          <div className="flex-shrink-0 pl-6 pr-8 border-r border-white/10 mr-6 hidden sm:block">
            <p className="text-zinc-500 text-[9px] font-semibold tracking-[0.2em] uppercase leading-5 whitespace-pre">
              {brands.eyebrow}
            </p>
          </div>

          <div className="flex-1 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center">
              <Image
                src={brands.stripImage}
                alt="World-class brand logos"
                width={1200}
                height={60}
                className="object-contain flex-shrink-0 h-12 w-auto"
              />
              {/* Duplicate for seamless loop */}
              <Image
                src={brands.stripImage}
                alt=""
                aria-hidden
                width={1200}
                height={60}
                className="object-contain flex-shrink-0 h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Fallback: individual text logos
  const doubled = [...brands.logos, ...brands.logos]
  return (
    <section className="bg-brand-dark border-y border-white/5 py-7 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 pl-6 pr-8 border-r border-white/10 mr-8 hidden sm:block">
          <p className="text-zinc-500 text-[9px] font-semibold tracking-[0.2em] uppercase leading-5 whitespace-pre">
            {brands.eyebrow}
          </p>
        </div>
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee flex items-center">
            {doubled.map((logo, i) => (
              <span key={`${logo.name}-${i}`} className="flex-shrink-0 px-8 text-white/50 text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
