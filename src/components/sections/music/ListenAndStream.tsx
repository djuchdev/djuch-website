import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  SpotifyFullIcon, AppleMusicIcon, MixcloudIcon, SoundCloudIcon, YouTubeFullIcon,
} from '@/components/ui/Icons'
import { music } from '@/lib/content'
import type { Mix } from '@/types'

const platformConfig: Record<Mix['platform'], { label: string; icon: ReactNode; color: string }> = {
  'spotify':     { label: 'Spotify',     icon: <SpotifyFullIcon size={14} />,  color: 'text-[#1DB954]' },
  'apple-music': { label: 'Apple Music', icon: <AppleMusicIcon size={14} />,   color: 'text-[#FC3C44]' },
  'mixcloud':    { label: 'Mixcloud',    icon: <MixcloudIcon size={14} />,     color: 'text-[#5000ff]' },
  'soundcloud':  { label: 'SoundCloud',  icon: <SoundCloudIcon size={14} />,   color: 'text-[#FF5500]' },
  'youtube':     { label: 'YouTube',     icon: <YouTubeFullIcon size={14} />,  color: 'text-[#FF0000]' },
}

export default function ListenAndStream() {
  const { mixes } = music

  return (
    <section id="listen" className="bg-brand-dark border-t border-gold/30">

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {mixes.items.map((mix) => {
            const platform = platformConfig[mix.platform]
            return (
              <Link
                key={mix.title}
                href={mix.href}
                className="group flex flex-col bg-brand-black border border-white/5 hover:border-gold/20 transition-all duration-300 overflow-hidden"
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

                  {/* Play button — bottom right */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-gold flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg width={10} height={10} viewBox="0 0 10 10" fill="#0A0A0A">
                      <polygon points="2,1 9,5 2,9" />
                    </svg>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-4 gap-2">
                  <h3 className="font-display font-bold uppercase text-white text-xs tracking-widest leading-tight group-hover:text-gold transition-colors duration-300">
                    {mix.title}
                  </h3>
                  <p className="text-zinc-500 text-[11px] leading-relaxed flex-1">
                    {mix.description}
                  </p>

                  {/* Platform badge */}
                  <div className={`flex items-center gap-1.5 mt-1 ${platform.color}`}>
                    {platform.icon}
                    <span className="text-[9px] font-semibold tracking-[0.12em] uppercase">
                      {platform.label}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* View all button */}
      <div className="flex justify-center py-14 px-4">
        <Link
          href={mixes.button.href}
          className="inline-flex items-center gap-2.5 px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-200"
        >
          {mixes.button.label} <span aria-hidden>›</span>
        </Link>
      </div>

    </section>
  )
}
