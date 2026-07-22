'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { media } from '@/lib/content'
import type { PerformanceItem } from '@/types'

function PlayMark({ visible = false }: { visible?: boolean }) {
  return (
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center transition-opacity duration-300 ${
      visible ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
    }`}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="rgba(201,168,76,0.9)" className="ml-0.5">
        <polygon points="2,1 11,6 2,11" />
      </svg>
    </div>
  )
}

function CardContent({ item }: { item: PerformanceItem }) {
  return (
    <>
      {/* Background */}
      {item.thumbnail ? (
        <Image
          src={item.thumbnail}
          fill
          alt={item.title}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`}>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(ellipse at 45% 30%, rgba(201,168,76,0.05) 0%, transparent 60%)',
          }} />
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <PlayMark visible={!!item.videoSrc} />

      {/* Text */}
      <div className="absolute bottom-0 inset-x-0 p-4 text-left">
        <h3 className="font-display font-bold uppercase text-white text-sm tracking-wider leading-tight mb-1 group-hover:text-gold transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-zinc-500 text-[10px] tracking-wide leading-snug">
          {item.venue}
        </p>
      </div>
    </>
  )
}

export default function PerformanceGrid() {
  const { performances } = media
  const [activeVideo, setActiveVideo] = useState<PerformanceItem | null>(null)

  useEffect(() => {
    if (!activeVideo) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setActiveVideo(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeVideo])

  return (
    <section className="bg-brand-black border-t border-gold/30 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
              {performances.eyebrow}
            </p>
            <h2
              className="font-display font-extrabold uppercase text-white leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}
            >
              {performances.headline}
            </h2>
          </div>
        </div>

        {/* 3x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {performances.items.map((item) => {
            const cardClass = 'group relative overflow-hidden bg-brand-dark block text-left'
            const cardStyle = { aspectRatio: '4/3' }

            if (item.videoSrc) {
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveVideo(item)}
                  className={cardClass}
                  style={cardStyle}
                  aria-label={`Play ${item.title}`}
                >
                  <CardContent item={item} />
                </button>
              )
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                className={cardClass}
                style={cardStyle}
              >
                <CardContent item={item} />
              </Link>
            )
          })}
        </div>

      </div>

      {activeVideo?.videoSrc && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 h-10 w-10 border border-white/20 text-white/70 hover:text-white hover:border-gold/50 transition-colors"
              aria-label="Close video"
            >
              x
            </button>
            <div className="relative overflow-hidden bg-black border border-white/10" style={{ aspectRatio: '16/9' }}>
              <video
                src={activeVideo.videoSrc}
                poster={activeVideo.thumbnail || undefined}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="mt-4">
              <p className="text-gold text-[10px] font-semibold tracking-[0.22em] uppercase">
                {activeVideo.venue}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wider text-white">
                {activeVideo.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
