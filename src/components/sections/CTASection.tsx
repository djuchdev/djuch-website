import Image from 'next/image'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import Button from '@/components/ui/Button'
import { ctaSection } from '@/lib/content'

export default function CTASection() {
  return (
    <section className="bg-brand-dark border-t border-gold/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-0 min-h-[460px]">

          {/* Portrait */}
          <div className="relative h-72 lg:h-full overflow-hidden">
            {ctaSection.image ? (
              <Image
                src={ctaSection.image}
                fill
                alt={ctaSection.imageAlt}
                className="object-cover object-center"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-800 to-zinc-700 opacity-70" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-dark/80 hidden lg:block" />
          </div>

          {/* Text + CTA */}
          <div className="flex flex-col justify-center py-16 px-10">
            <SectionEyebrow className="text-left">{ctaSection.eyebrow}</SectionEyebrow>

            <h2
              className="font-display font-extrabold uppercase text-white leading-[0.9] mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
            >
              {ctaSection.headline}
            </h2>

            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              {ctaSection.body}
            </p>

            <div>
              <Button href={ctaSection.button.href} variant="primary">
                {ctaSection.button.label} <span aria-hidden>›</span>
              </Button>
            </div>
          </div>

          {/* Signature */}
          <div className="flex items-center justify-center py-12 lg:py-0">
            {ctaSection.signature ? (
              <Image
                src={ctaSection.signature}
                alt="DJ UCH signature"
                width={220}
                height={110}
                className="opacity-80"
              />
            ) : (
              <div className="text-center select-none">
                <span
                  className="text-gold"
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: 'clamp(4rem, 7vw, 6.5rem)',
                    lineHeight: 1.1,
                    display: 'block',
                  }}
                >
                  Uch.
                </span>
                <div className="h-px w-24 bg-gold/40 mx-auto mt-1" />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
