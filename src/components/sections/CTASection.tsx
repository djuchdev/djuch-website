import Image from 'next/image'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import Button from '@/components/ui/Button'
import { ctaSection } from '@/lib/content'

export default function CTASection() {
  return (
    <section className="bg-brand-dark border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-0 min-h-[520px]">

          {/* Portrait */}
          <div className="relative h-72 lg:h-full lg:min-h-[520px] overflow-hidden">
            {ctaSection.image ? (
              <Image
                src={ctaSection.image}
                fill
                alt={ctaSection.imageAlt}
                className="object-cover object-top"
              />
            ) : (
              /* Placeholder — replace ctaSection.image in content.ts */
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-800 to-zinc-700 opacity-70" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-dark/80 hidden lg:block" />
          </div>

          {/* Text + CTA */}
          <div className="flex flex-col items-center text-center py-20 px-8">
            <SectionEyebrow>{ctaSection.eyebrow}</SectionEyebrow>

            <h2
              className="font-display font-extrabold uppercase text-white leading-[0.9] mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              {ctaSection.headline}
            </h2>

            <p className="text-zinc-400 text-sm mb-8">
              {ctaSection.body}
            </p>

            <Button href={ctaSection.button.href} variant="primary">
              {ctaSection.button.label} <span aria-hidden>›</span>
            </Button>
          </div>

          {/* Signature */}
          <div className="flex items-center justify-center py-12 lg:py-0">
            {ctaSection.signature ? (
              <Image
                src={ctaSection.signature}
                alt="DJ UCH signature"
                width={200}
                height={100}
                className="opacity-80"
              />
            ) : (
              /* Placeholder — replace ctaSection.signature in content.ts */
              <span
                className="text-gold opacity-60 select-none"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                }}
              >
                Uch
              </span>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
