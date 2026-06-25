import Image from 'next/image'
import Button from '@/components/ui/Button'
import { ctaSection } from '@/lib/content'

export default function CTASection() {
  return (
    <section className="bg-brand-dark border-t border-gold/30 overflow-hidden">

      {/* ── Desktop: full-bleed 3-col editorial grid ── */}
      <div
        className="hidden lg:grid"
        style={{
          gridTemplateColumns: '35% 1fr 25%',
          minHeight: '640px',
        }}
      >
        {/* Col 1 — Portrait, bleeds to grid edge */}
        <div className="relative overflow-hidden">
          {ctaSection.image && (
            <>
              <Image
                src={ctaSection.image}
                fill
                alt={ctaSection.imageAlt}
                className="object-cover"
                style={{ objectPosition: 'center 18%' }}
                priority
              />
              {/* Dissolve into text column */}
              <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-brand-dark to-transparent" />
            </>
          )}
        </div>

        {/* Col 2 — CTA content */}
        <div
          className="flex flex-col justify-center"
          style={{
            paddingTop:    'clamp(80px, 10vw, 140px)',
            paddingBottom: 'clamp(80px, 10vw, 140px)',
            paddingLeft:   'clamp(64px, 6.5vw, 112px)',
            paddingRight:  'clamp(64px, 6.5vw, 112px)',
          }}
        >
          {/* Eyebrow */}
          <p
            className="text-gold font-semibold uppercase"
            style={{ fontSize: '0.6rem', letterSpacing: '0.38em', marginBottom: '1.75rem' }}
          >
            {ctaSection.eyebrow}
          </p>

          {/* Headline — two lines, maximum visual weight */}
          <h2
            className="font-display font-extrabold uppercase text-white"
            style={{
              fontSize: 'clamp(3rem, 4.6vw, 5rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.01em',
            }}
          >
            <span className="block">Something</span>
            <span className="block">Unforgettable?</span>
          </h2>

          {/* Gold rule — visual breath between headline and copy */}
          <div
            className="bg-gold/45"
            style={{ height: '1px', width: '3rem', marginTop: '2.25rem', marginBottom: '1.75rem' }}
          />

          {/* Body copy */}
          <p
            className="text-zinc-400"
            style={{ fontSize: '0.875rem', lineHeight: 1.9, maxWidth: '22rem' }}
          >
            {ctaSection.body}
          </p>

          {/* Button — isolated with generous top margin */}
          <div style={{ marginTop: '3.5rem' }}>
            <Button href={ctaSection.button.href} variant="primary">
              {ctaSection.button.label} <span aria-hidden>›</span>
            </Button>
          </div>
        </div>

        {/* Col 3 — Signature as oversized typographic element */}
        <div className="relative flex items-center justify-center border-l border-gold/10">
          {ctaSection.signature ? (
            <Image
              src={ctaSection.signature}
              alt="DJ UCH signature"
              width={280}
              height={140}
              className="opacity-75"
            />
          ) : (
            <span
              className="text-gold select-none"
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: 'clamp(7rem, 11vw, 12rem)',
                lineHeight: 1,
                opacity: 0.82,
                display: 'block',
                textAlign: 'center',
              }}
            >
              Uch.
            </span>
          )}
        </div>
      </div>

      {/* ── Mobile: stacked layout ── */}
      <div className="lg:hidden">
        {/* Portrait */}
        {ctaSection.image && (
          <div className="relative h-80 overflow-hidden">
            <Image
              src={ctaSection.image}
              fill
              alt={ctaSection.imageAlt}
              className="object-cover"
              style={{ objectPosition: 'center 15%' }}
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="px-6 pt-12 pb-16">
          <p
            className="text-gold font-semibold uppercase mb-5"
            style={{ fontSize: '0.6rem', letterSpacing: '0.35em' }}
          >
            {ctaSection.eyebrow}
          </p>

          <h2
            className="font-display font-extrabold uppercase text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', lineHeight: 0.9 }}
          >
            <span className="block">Something</span>
            <span className="block">Unforgettable?</span>
          </h2>

          <div className="h-px w-10 bg-gold/45 mt-7 mb-6" />

          <p className="text-zinc-400 text-sm leading-loose max-w-sm">
            {ctaSection.body}
          </p>

          <div className="mt-10 flex items-center gap-8">
            <Button href={ctaSection.button.href} variant="primary">
              {ctaSection.button.label} <span aria-hidden>›</span>
            </Button>

            {/* Signature — shown inline on mobile */}
            {!ctaSection.signature && (
              <span
                className="text-gold select-none"
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: '3.5rem',
                  lineHeight: 1,
                  opacity: 0.75,
                }}
              >
                Uch.
              </span>
            )}
          </div>
        </div>
      </div>

    </section>
  )
}
