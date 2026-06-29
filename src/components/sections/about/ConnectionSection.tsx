import Image from 'next/image'
import { about } from '@/lib/content'

export default function ConnectionSection() {
  const { connection } = about

  return (
    <section className="bg-brand-dark border-t border-gold/30 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* Left: text */}
        <div className="flex flex-col justify-center py-24 px-8 sm:px-12 lg:px-16 xl:px-20 order-2 lg:order-1">

          <h2
            className="font-sans font-light text-white leading-[1.1] mb-10"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3.25rem)' }}
          >
            {connection.headlineLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>

          <div className="space-y-1 mb-8">
            {connection.bodyLines.map((line, i) => (
              <p key={i} className="text-zinc-400 text-base leading-relaxed">
                {line}
              </p>
            ))}
          </div>

          <div className="mb-6">
            {connection.taglineLines.map((line, i) => (
              <p key={i} className="text-gold text-[11px] font-bold tracking-[0.22em] uppercase leading-loose">
                {line}
              </p>
            ))}
          </div>

          <p className="text-zinc-300 text-base leading-relaxed">
            {connection.closing}
          </p>
        </div>

        {/* Right: image */}
        <div className="relative min-h-80 lg:min-h-0 overflow-hidden order-1 lg:order-2">
          {connection.image ? (
            <>
              <Image
                src={connection.image}
                fill
                alt={connection.imageAlt}
                className="object-cover object-center"
              />
              <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-dark/60 to-transparent" />
            </>
          ) : (
            /* Warm event-lighting fallback */
            <div className="absolute inset-0 bg-gradient-to-bl from-zinc-800 via-zinc-900 to-zinc-950">
              <div className="absolute top-1/4 left-1/2 w-80 h-80 bg-amber-950/15 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zinc-700/15 rounded-full blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/50 via-transparent to-transparent" />
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
