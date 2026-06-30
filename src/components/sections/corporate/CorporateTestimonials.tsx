import { corporate } from '@/lib/content'

export default function CorporateTestimonials() {
  const { testimonials } = corporate

  return (
    <section className="bg-brand-dark border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Section header */}
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase text-center mb-16">
          {testimonials.eyebrow}
        </p>

        {/* Testimonial cards — 3-col desktop, horizontal scroll mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {testimonials.items.map((item, i) => (
            <div
              key={i}
              className="bg-brand-dark px-8 py-10 flex flex-col relative group"
            >
              {/* Gold top accent on hover */}
              <div className="absolute top-0 inset-x-0 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Decorative quote mark */}
              <div
                className="text-gold/20 leading-none select-none mb-4"
                style={{ fontFamily: 'Georgia, serif', fontSize: '4.5rem', lineHeight: 0.8 }}
                aria-hidden
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <blockquote className="text-zinc-300 text-base leading-relaxed italic flex-1 mb-8">
                {item.quote}
              </blockquote>

              {/* Gold rule */}
              <div className="w-8 h-px bg-gold/40 mb-6" />

              {/* Attribution */}
              <p className="text-gold text-[10px] font-bold tracking-[0.25em] uppercase">
                — {item.author}
              </p>
              <p className="text-zinc-600 text-[9px] font-semibold tracking-[0.18em] uppercase mt-1.5">
                {item.title}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
