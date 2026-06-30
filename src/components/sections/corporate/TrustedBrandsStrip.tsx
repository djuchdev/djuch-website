import { corporate } from '@/lib/content'

const styleMap: Record<string, string> = {
  'bold-sans':    'font-display font-extrabold tracking-wide',
  'light-sans':   'font-sans font-extralight tracking-[0.06em]',
  'regular-sans': 'font-sans font-normal tracking-[0.04em]',
  'serif':        'font-sans font-light italic tracking-wide',
}

export default function TrustedBrandsStrip() {
  const { brands } = corporate

  return (
    <section className="bg-brand-dark border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Eyebrow */}
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase text-center mb-12">
          {brands.eyebrow}
        </p>

        {/* Brand logos — text-based, styled to suggest each brand's personality */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {brands.names.map(({ name, style }) => (
            <span
              key={name}
              className={`${styleMap[style] ?? styleMap['regular-sans']} text-white/35 hover:text-white/65 transition-colors duration-300 cursor-default select-none uppercase`}
              style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}
            >
              {name}
            </span>
          ))}
        </div>

        {/* Suffix */}
        <p className="text-center mt-8 text-zinc-700 text-[10px] font-semibold tracking-[0.25em] uppercase">
          {brands.suffix}
        </p>

      </div>
    </section>
  )
}
