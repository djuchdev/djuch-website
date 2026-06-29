import Image from 'next/image'
import { about } from '@/lib/content'

export default function StorySection() {
  const { story } = about

  return (
    <section id="story" className="bg-brand-dark border-t border-gold/30 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left: text */}
        <div className="flex flex-col justify-center py-24 px-8 sm:px-12 lg:px-16 xl:px-20">

          <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-8">
            {story.eyebrow}
          </p>

          <h2
            className="font-sans font-light text-white leading-[1.1] mb-8"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
          >
            {story.headlineLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>

          <div className="w-10 h-px bg-gold/50 mb-8" />

          <p className="text-zinc-400 text-base leading-relaxed mb-10 max-w-md">
            {story.body}
          </p>

          <p className="text-gold text-[11px] font-bold tracking-[0.22em] uppercase leading-loose">
            {story.tagline}
          </p>
        </div>

        {/* Right: image */}
        <div className="relative min-h-80 lg:min-h-0 overflow-hidden">
          {story.image ? (
            <>
              <Image
                src={story.image}
                fill
                alt={story.imageAlt}
                className="object-cover object-center"
              />
              {/* Dissolve into text column on desktop */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-dark/60 to-transparent" />
            </>
          ) : (
            /* Atmospheric stage-light fallback */
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950">
              <div className="absolute top-0 right-1/3 w-72 h-72 bg-amber-900/12 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-zinc-700/20 rounded-full blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
