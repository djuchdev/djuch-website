import Image from 'next/image'
import { booking } from '@/lib/content'

export default function BookingTestimonial() {
  const { testimonial } = booking

  return (
    <section className="bg-brand-black border-t border-gold/30 overflow-hidden">
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr]"
        style={{ minHeight: '480px' }}
      >

        {/* Left atmospheric image */}
        <div className="relative hidden lg:block">
          {testimonial.leftImage ? (
            <>
              <Image
                src={testimonial.leftImage}
                fill
                alt=""
                className="object-cover opacity-50"
                style={{ objectPosition: 'center 30%' }}
              />
              {/* Fade into center */}
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-black to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-black/40" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-transparent" />
          )}
        </div>

        {/* Center: quote */}
        <div className="flex flex-col items-center justify-center text-center px-8 sm:px-12 lg:px-16 py-20">

          <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-10">
            {testimonial.eyebrow}
          </p>

          {/* Opening quote mark */}
          <div
            className="text-gold/20 select-none mb-2"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '5rem',
              lineHeight: 0.8,
            }}
            aria-hidden
          >
            &ldquo;
          </div>

          <blockquote className="text-zinc-200 text-lg md:text-xl leading-relaxed font-light italic max-w-xl mb-8">
            {testimonial.quote}
          </blockquote>

          <div className="w-8 h-px bg-gold/50 mb-6" />

          <p className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase">
            {testimonial.author}
          </p>
          <p className="text-zinc-600 text-[10px] font-semibold tracking-[0.18em] uppercase mt-2">
            {testimonial.title}
          </p>

        </div>

        {/* Right atmospheric image */}
        <div className="relative hidden lg:block">
          {testimonial.rightImage ? (
            <>
              <Image
                src={testimonial.rightImage}
                fill
                alt=""
                className="object-cover opacity-50"
                style={{ objectPosition: 'center 40%' }}
              />
              {/* Fade into center */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-black to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-black/40" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-l from-zinc-900/30 to-transparent" />
          )}
        </div>

      </div>
    </section>
  )
}
