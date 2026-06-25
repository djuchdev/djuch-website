import { brands } from '@/lib/content'

export default function BrandLogosStrip() {
  return (
    <section className="bg-brand-dark border-y border-gold/30 py-5 overflow-hidden">
      <div className="flex items-center">

        {/* Left label */}
        <div className="flex-shrink-0 pl-6 pr-6 border-r border-white/10 hidden sm:block">
          <p className="text-zinc-500 text-[9px] font-semibold tracking-[0.2em] uppercase leading-5 whitespace-pre">
            {brands.eyebrow}
          </p>
        </div>

        {/* Scrolling names */}
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee flex items-center">
            {[...brands.logos, ...brands.logos].map((logo, i) => (
              <span
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 px-8 text-white/50 text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap"
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right label */}
        <div className="flex-shrink-0 pl-6 pr-6 border-l border-white/10 hidden sm:block">
          <span className="text-zinc-500 text-[9px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
            {brands.suffix}
          </span>
        </div>

      </div>
    </section>
  )
}
