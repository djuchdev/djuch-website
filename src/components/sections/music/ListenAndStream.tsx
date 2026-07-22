'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { music } from '@/lib/content'

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return '0:00'

  const wholeSeconds = Math.floor(seconds)
  const minutes = Math.floor(wholeSeconds / 60)
  const remainingSeconds = wholeSeconds % 60

  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

function PlayIcon({ isPlaying }: { isPlaying: boolean }) {
  if (isPlaying) {
    return (
      <svg width={10} height={10} viewBox="0 0 10 10" fill="#0A0A0A" aria-hidden="true">
        <rect x="2" y="1" width="2" height="8" />
        <rect x="6" y="1" width="2" height="8" />
      </svg>
    )
  }

  return (
    <svg width={10} height={10} viewBox="0 0 10 10" fill="#0A0A0A" aria-hidden="true">
      <polygon points="2,1 9,5 2,9" />
    </svg>
  )
}

export default function ListenAndStream() {
  const { mixes } = music
  const audioRef = useRef<HTMLAudioElement>(null)
  const [activeTitle, setActiveTitle] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [errorTitle, setErrorTitle] = useState('')

  const activeMix = useMemo(
    () => mixes.items.find((mix) => mix.title === activeTitle),
    [activeTitle, mixes.items],
  )

  useEffect(() => {
    if (!audioRef.current) return
    const player = audioRef.current

    function handleTimeUpdate() {
      setCurrentTime(player.currentTime)
    }

    function handleLoadedMetadata() {
      setDuration(player.duration)
    }

    function handleEnded() {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    function handlePlay() {
      setIsPlaying(true)
    }

    function handlePause() {
      setIsPlaying(false)
    }

    function handleError() {
      if (activeTitle) setErrorTitle(activeTitle)
      setIsPlaying(false)
    }

    player.addEventListener('timeupdate', handleTimeUpdate)
    player.addEventListener('loadedmetadata', handleLoadedMetadata)
    player.addEventListener('ended', handleEnded)
    player.addEventListener('play', handlePlay)
    player.addEventListener('pause', handlePause)
    player.addEventListener('error', handleError)

    return () => {
      player.removeEventListener('timeupdate', handleTimeUpdate)
      player.removeEventListener('loadedmetadata', handleLoadedMetadata)
      player.removeEventListener('ended', handleEnded)
      player.removeEventListener('play', handlePlay)
      player.removeEventListener('pause', handlePause)
      player.removeEventListener('error', handleError)
    }
  }, [activeTitle])

  async function toggleMix(mix: typeof mixes.items[number]) {
    if (!mix.audioSrc) {
      setErrorTitle(mix.title)
      return
    }

    const audio = audioRef.current
    if (!audio) return

    setErrorTitle('')

    if (activeTitle === mix.title) {
      if (audio.paused) {
        await audio.play().catch(() => setErrorTitle(mix.title))
      } else {
        audio.pause()
      }
      return
    }

    setActiveTitle(mix.title)
    setCurrentTime(0)
    setDuration(0)
    audio.src = mix.audioSrc
    audio.load()
    await audio.play().catch(() => setErrorTitle(mix.title))
  }

  function seek(value: string) {
    const audio = audioRef.current
    if (!audio) return

    const nextTime = Number(value)
    audio.currentTime = nextTime
    setCurrentTime(nextTime)
  }

  return (
    <section id="listen" className="bg-brand-dark border-t border-gold/30">
      <audio ref={audioRef} preload="metadata" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
          {mixes.eyebrow}
        </p>
        <p className="text-zinc-400 text-sm tracking-wide">
          {mixes.subheading}
        </p>
      </div>

      {/* 5-col mix grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {mixes.items.map((mix) => {
            const isActive = activeTitle === mix.title
            const showPause = isActive && isPlaying
            const activeDuration = duration || 0
            const progressMax = activeDuration > 0 ? activeDuration : 1
            const progressValue = isActive ? Math.min(currentTime, progressMax) : 0

            return (
              <article
                key={mix.title}
                className={`group flex flex-col bg-brand-black border transition-all duration-300 overflow-hidden ${
                  isActive ? 'border-gold/40' : 'border-white/5 hover:border-gold/20'
                }`}
              >
                {/* Image area */}
                <div className="relative aspect-square overflow-hidden">
                  {mix.image ? (
                    <Image
                      src={mix.image}
                      fill
                      alt={mix.title}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-b ${mix.gradient}`}>
                      <div className="absolute inset-0" style={{
                        backgroundImage:
                          'radial-gradient(ellipse at 40% 35%, rgba(201,168,76,0.08) 0%, transparent 60%)',
                      }} />
                    </div>
                  )}

                  {/* Hover scrim */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Play button */}
                  <button
                    type="button"
                    onClick={() => void toggleMix(mix)}
                    className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-gold flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-gold/70 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label={`${showPause ? 'Pause' : 'Play'} ${mix.title}`}
                  >
                    <PlayIcon isPlaying={showPause} />
                  </button>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-4 gap-2">
                  <h3 className="font-display font-bold uppercase text-white text-xs tracking-widest leading-tight group-hover:text-gold transition-colors duration-300">
                    {mix.title}
                  </h3>
                  <p className="text-zinc-500 text-[11px] leading-relaxed flex-1">
                    {mix.description}
                  </p>

                  <div className="mt-2 min-h-12">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                      <span>{isActive ? formatTime(currentTime) : 'Ready'}</span>
                      <span>{isActive && duration ? formatTime(duration) : mix.duration}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={progressMax}
                      step="1"
                      value={progressValue}
                      onChange={(event) => seek(event.target.value)}
                      disabled={!isActive}
                      aria-label={`Seek ${mix.title}`}
                      className="mt-2 h-1 w-full appearance-none bg-white/10 accent-gold disabled:opacity-50"
                    />
                    {errorTitle === mix.title && (
                      <p className="mt-2 text-[10px] leading-relaxed text-red-400">
                        Playback is not available yet.
                      </p>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {activeMix && (
        <p className="sr-only" aria-live="polite">
          {isPlaying ? `Playing ${activeMix.title}` : `${activeMix.title} paused`}
        </p>
      )}
    </section>
  )
}
