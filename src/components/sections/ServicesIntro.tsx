import Image from 'next/image'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import { servicesIntro } from '@/lib/content'

export default function ServicesIntro() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-brand-black">

      {/* Background */}
      <div className="absolute inset-0">
        {servicesIntro.image ? (
          <Image
            src={servicesIntro.image}
            fill
            alt=""
            className="object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-brand-black" />
        )}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionEyebrow>{servicesIntro.eyebrow}</SectionEyebrow>

        <h2
          className="font-display font-extrabold uppercase text-white leading-[0.9] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          {servicesIntro.headline}
        </h2>

        <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-4">
          {servicesIntro.body}
        </p>

        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase">
          {servicesIntro.tagline}
        </p>
      </div>
    </section>
  )
}
