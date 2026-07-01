import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { services } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Experiences - DJ UCH',
  description:
    'Explore DJ UCH experiences for corporate events, private celebrations, live piano entertainment, and music-driven moments.',
}

const experienceLinks: Record<string, { href: string; cta: string; eyebrow: string }> = {
  'Corporate Events': {
    href: '/experiences/corporate',
    cta: 'Corporate Events',
    eyebrow: 'For Brands',
  },
  'Private Events': {
    href: '/experiences/private',
    cta: 'Private Events',
    eyebrow: 'For Celebrations',
  },
  'Mr. Martin Piano': {
    href: '/experiences/mr-martin-piano',
    cta: 'Mr. Martin Piano',
    eyebrow: 'Live Piano',
  },
  'Music & Mixes': {
    href: '/music',
    cta: 'Listen Now',
    eyebrow: 'Stream & Listen',
  },
}

export default function ExperiencesPage() {
  return (
    <main className="bg-brand-black text-white">
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/corporate-events.png"
            fill
            alt=""
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-black/30" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
            DJ UCH Experiences
          </p>

          <h1
            className="mb-8 max-w-5xl font-display font-extrabold uppercase leading-[0.9]"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            <span className="block">The Right</span>
            <span className="block text-gold">Atmosphere.</span>
            <span className="block">Every Time.</span>
          </h1>

          <div className="mb-8 h-px w-10 bg-gold" />

          <p className="mb-12 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            From polished corporate productions to personal celebrations and
            live piano moments, every UCH experience is built around reading
            the room and transforming it.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/booking">Book an Experience <span aria-hidden>›</span></Button>
            <Button href="#options" variant="outline">Explore Options</Button>
          </div>
        </div>
      </section>

      <section id="options" className="border-y border-white/10 bg-brand-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
              Choose The Format
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-tight text-white md:text-5xl">
              One mission. Multiple ways to move the room.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {services.map((service) => {
              const link = experienceLinks[service.title] ?? {
                href: service.href,
                cta: 'Learn More',
                eyebrow: 'Experience',
              }

              return (
                <article key={service.title} className="group bg-brand-black">
                  <div className="grid min-h-full grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
                    <div className="relative min-h-72 overflow-hidden">
                      {service.image ? (
                        <Image
                          src={service.image}
                          fill
                          alt={service.title}
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-zinc-900" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                    </div>

                    <div className="flex flex-col justify-between p-8 lg:p-10">
                      <div>
                        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                          {link.eyebrow}
                        </p>
                        <h3 className="mb-4 font-display text-2xl font-bold uppercase tracking-wide text-white">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-400">
                          {service.description}
                        </p>
                      </div>

                      <Button href={link.href} variant="outline-gold" className="mt-8 self-start">
                        {link.cta} <span aria-hidden>›</span>
                      </Button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
