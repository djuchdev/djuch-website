import Image from 'next/image'
import Button from '@/components/ui/Button'
import { ctaSection } from '@/lib/content'

type CTAContent = typeof ctaSection

export default function CTASection({ content = ctaSection }: { content?: CTAContent }) {
  return (
    <section className="bg-brand-dark border-t border-gold/30 overflow-hidden">

      {/* ── Desktop: full-bleed 3-col editorial grid ── */}
      <div
        className="hidden lg:grid"
        style={{
          gridTemplateColumns: '33% 1fr 32%',
          minHeight: '640px',
        }}
      >
        {/* Col 1 — Portrait, bleeds to grid edge */}
        <div className="relative overflow-hidden">
          {content.image && (
            <>
              <Image
                src={content.image}
                fill
                alt={content.imageAlt}
                className="object-cover"
                style={{ objectPosition: '65% 15%' }}
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
            paddingTop:    'clamp(72px, 9vw, 120px)',
            paddingBottom: 'clamp(72px, 9vw, 120px)',
            paddingLeft:   'clamp(40px, 4.5vw, 80px)',
            paddingRight:  'clamp(40px, 4.5vw, 80px)',
          }}
        >
          {/* Eyebrow */}
          <p
            className="text-gold uppercase"
            style={{
              fontSize: '17px',
              fontWeight: 500,
              letterSpacing: '0.16em',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
            }}
          >
            {content.eyebrow}
          </p>

          {/* Headline — large light-weight, luxury typographic statement */}
          <h2
            className="font-sans font-light uppercase"
            style={{
              fontSize: 'clamp(2.6rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.07,
              letterSpacing: 0,
              color: '#F4F4F4',
            }}
          >
            {content.headline}
          </h2>

          {/* Gold rule */}
          <div
            className="bg-gold/45"
            style={{ height: '1px', width: '3rem', marginTop: '2rem', marginBottom: '1.75rem' }}
          />

          {/* Body copy */}
          <p
            style={{
              fontSize: '21px',
              fontWeight: 400,
              lineHeight: 1.55,
              color: '#D3D3D3',
            }}
          >
            {content.body}
          </p>

          {/* Button */}
          <div style={{ marginTop: '2.5rem' }}>
            <Button
              href={content.button.href}
              variant="primary"
              className="!text-[18px] !font-semibold !tracking-[0.02em]"
            >
              {content.button.label} <span aria-hidden>›</span>
            </Button>
          </div>
        </div>

        {/* Col 3 — Signature image */}
        <div className="relative flex items-center justify-center">
          {content.signature ? (
            <div style={{ mixBlendMode: 'screen' }}>
              <Image
                src={content.signature}
                alt="DJ UCH signature"
                width={480}
                height={240}
                className="w-full max-w-[420px] h-auto"
              />
            </div>
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
        {content.image && (
          <div className="relative h-80 overflow-hidden">
            <Image
              src={content.image}
              fill
              alt={content.imageAlt}
              className="object-cover"
              style={{ objectPosition: 'center 15%' }}
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="px-6 pt-12 pb-16">
          <p
            className="text-gold uppercase mb-5"
            style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '0.16em', lineHeight: 1.2 }}
          >
            {content.eyebrow}
          </p>

          <h2
            className="font-sans font-light uppercase"
            style={{ fontSize: 'clamp(2.2rem, 8vw, 3rem)', lineHeight: 1.07, letterSpacing: 0, color: '#F4F4F4' }}
          >
            {content.headline}
          </h2>

          <div className="h-px w-10 bg-gold/45 mt-6 mb-5" />

          <p style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.55, color: '#D3D3D3' }}>
            {content.body}
          </p>

          <div className="mt-10 flex items-center gap-8">
            <Button href={content.button.href} variant="primary">
              {content.button.label} <span aria-hidden>›</span>
            </Button>

            {/* Signature — shown inline on mobile */}
            {!content.signature && (
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
