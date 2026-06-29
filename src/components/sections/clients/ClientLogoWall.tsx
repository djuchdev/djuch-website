import { clients } from '@/lib/content'

export default function ClientLogoWall() {
  const { logoWall } = clients

  return (
    <section className="bg-brand-dark border-t border-gold/30">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
          {logoWall.eyebrow}
        </p>
        <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
          {logoWall.intro}
        </p>
      </div>

      {/* Logo grid — border-l/t on container, border-r/b on each cell creates seamless grid */}
      <div className="max-w-7xl mx-auto border-l border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {logoWall.brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative border-r border-b border-white/5 px-5 py-8 sm:px-8 sm:py-10 cursor-default"
            >
              {/* Gold top accent on hover */}
              <div className="absolute top-0 inset-x-0 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <p className="font-display font-bold uppercase text-base sm:text-lg tracking-wide text-white/50 group-hover:text-white/85 transition-colors duration-300 leading-tight">
                {brand.name}
              </p>
              <p className="text-gold/55 text-[9px] font-semibold tracking-[0.22em] uppercase mt-2 group-hover:text-gold/80 transition-colors duration-300">
                {brand.category}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Suffix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-white/5">
        <p className="text-zinc-600 text-[10px] font-semibold tracking-[0.2em] uppercase">
          {logoWall.suffix}
        </p>
      </div>

    </section>
  )
}
