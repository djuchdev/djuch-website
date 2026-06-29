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
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {press.outlets.map((outlet) => (
            <span
              key={outlet.name}
              className={`text-white/40 hover:text-white/75 transition-colors duration-300 select-none cursor-default ${outlet.displayClass}`}
            >
              {outlet.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
