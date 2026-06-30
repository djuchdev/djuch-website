'use client'

import { useState } from 'react'
import Image from 'next/image'
import { media } from '@/lib/content'

export default function FeaturedShowreel() {
  const { showreel } = media
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    if (showreel.videoId) {
      setPlaying(true)
    } else {
      window.open(showreel.videoHref, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="showreel" className="bg-brand-black border-t border-gold/30 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
            {showreel.eyebrow}
          </p>
          <h2
            className="font-display font-extrabold uppercase text-white leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            {showreel.headline}
          </h2>
        </div>

        {/* Player */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>

          {playing && showreel.videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${showreel.videoId}?autoplay=1&rel=0&modestbranding=1`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="UCH Showreel"
            />
          ) : (
            <>
              {/* Thumbnail / gradient background */}
              <div className="absolute inset-0">
                {showreel.thumbnail ? (
                  <Image
                    src={showreel.thumbnail}
                    fill
                    alt="Showreel thumbnail"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950">
                    <div className="absolute inset-0" style={{
                      backgroundImage:
                        'radial-gradient(ellipse at 50% 45%, rgba(201,168,76,0.1) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.04) 0%, transparent 40%)',
                    }} />
                    {/* Simulated film grain / cinematic bars */}
                    <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/60 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                )}
                {/* Scrim */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Play button */}
              <button
                onClick={handlePlay}
                aria-label="Play showreel"
                className="absolute inset-0 flex flex-col items-center justify-center gap-5 group"
              >
                {/* Outer ring */}
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gold/50 group-hover:border-gold transition-colors duration-300 absolute scale-125 group-hover:scale-150 opacity-30 group-hover:opacity-50" />
                  {/* Play circle */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/90 group-hover:bg-gold flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-2xl">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="#0A0A0A"
                      className="ml-1.5"
                    >
                      <polygon points="5,3 25,14 5,25" />
                    </svg>
                  </div>
                </div>
                <span className="text-white/60 text-[10px] font-semibold tracking-[0.25em] uppercase group-hover:text-white/80 transition-colors duration-200">
                  Play Showreel
                </span>
              </button>

              {/* Duration / label overlay */}
              <div className="absolute bottom-4 right-4 px-2.5 py-1 bg-black/60 text-white/70 text-[9px] font-bold tracking-[0.18em] uppercase">
                Full Showreel
              </div>
            </>
          )}
        </div>

        {/* Body copy */}
        <p className="text-zinc-500 text-sm md:text-base leading-relaxed text-center mt-8 max-w-xl mx-auto">
          {showreel.body}
        </p>

      </div>
    </section>
  )
}
