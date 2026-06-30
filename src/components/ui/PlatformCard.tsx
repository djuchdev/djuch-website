import Link from 'next/link'
import type { StreamingPlatform } from '@/types'
import {
  SpotifyFullIcon,
  AppleMusicIcon,
  MixcloudIcon,
  SoundCloudIcon,
  YouTubeFullIcon,
} from '@/components/ui/Icons'

const iconMap = {
  'spotify':     SpotifyFullIcon,
  'apple-music': AppleMusicIcon,
  'mixcloud':    MixcloudIcon,
  'soundcloud':  SoundCloudIcon,
  'youtube':     YouTubeFullIcon,
}

export default function PlatformCard({ name, descriptor, href, icon }: StreamingPlatform) {
  const Icon = iconMap[icon]

  return (
    <Link
      href={href}
      className="group relative border-r border-b border-white/5 flex flex-col items-center text-center px-6 py-12 transition-all duration-300 hover:bg-brand-surface"
      aria-label={`Listen on ${name}`}
    >
      {/* Gold top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Platform icon */}
      <div className="text-white/35 group-hover:text-gold transition-colors duration-300 mb-6">
        <Icon size={32} />
      </div>

      {/* Platform name */}
      <p className="font-display font-bold uppercase text-base tracking-wide text-white/55 group-hover:text-white/90 transition-colors duration-300 mb-2 leading-tight">
        {name}
      </p>

      {/* Descriptor */}
      <p className="text-zinc-600 text-[11px] leading-relaxed mb-6 group-hover:text-zinc-500 transition-colors duration-300">
        {descriptor}
      </p>

      {/* Listen link */}
      <span className="inline-flex items-center gap-1.5 text-gold/50 text-[10px] font-bold tracking-[0.22em] uppercase group-hover:text-gold transition-colors duration-300">
        Listen <span aria-hidden>›</span>
      </span>
    </Link>
  )
}
