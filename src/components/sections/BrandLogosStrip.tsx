import Image from 'next/image'
import { brands } from '@/lib/content'

function LogoItem({ name, image }: { name: string; image: string | null }) {
  return (
    <span className="flex items-center justify-center flex-shrink-0 px-8">
      {image ? (
        <Image src={image} alt={name} width={100} height={40} className="object-contain opacity-60 hover:opacity-100 transition-opacity" />
      ) : (
        /* Placeholder — replace image: null with '/images/logo-name.png' in content.ts */
        <span className="text-white/50 text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap hover:text-white/80 transition-colors cursor-default">
          {name}
        </span>
      )}
    </span>
  )
}

export default function BrandLogosStrip() {
  const doubled = [...brands.logos, ...brands.logos]

  return (
    <section className="bg-brand-dark border-y border-white/5 py-7 overflow-hidden">
      <div className="flex items-center">

        {/* Static label */}
        <div className="flex-shrink-0 pl-6 pr-8 border-r border-white/10 mr-8 hidden sm:block">
          <p className="text-zinc-500 text-[9px] font-semibold tracking-[0.2em] uppercase leading-5 whitespace-pre">
            {brands.eyebrow}
          </p>
        </div>

        {/* Scrolling logos */}
        <div className="flex-1 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center">
            {doubled.map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} name={logo.name} image={logo.image} />
            ))}
            {/* Suffix shown once, outside the duplication to avoid repetition */}
          </div>
        </div>

        {/* "And More" */}
        <div className="flex-shrink-0 pl-8 pr-6 border-l border-white/10 hidden sm:block">
          <span className="text-zinc-500 text-[9px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
            {brands.suffix}
          </span>
        </div>
      </div>
    </section>
  )
}
