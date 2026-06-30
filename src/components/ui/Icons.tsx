const props = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function HeadphonesIcon() {
  return (
    <svg {...props}>
      <path d="M3 14s0-9 9-9 9 9 9 9" />
      <rect x="2" y="14" width="4" height="6" rx="1" />
      <rect x="18" y="14" width="4" height="6" rx="1" />
    </svg>
  )
}

export function PeopleIcon() {
  return (
    <svg {...props}>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-1a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6v1" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M21 21v-1a4 4 0 0 0-3-3.87" />
    </svg>
  )
}

export function PianoIcon() {
  return (
    <svg {...props}>
      <rect x="2" y="5" width="20" height="14" rx="1" />
      <line x1="2" y1="11" x2="22" y2="11" />
      <line x1="6" y1="5" x2="6" y2="11" />
      <line x1="10" y1="5" x2="10" y2="11" />
      <line x1="14" y1="5" x2="14" y2="11" />
      <line x1="18" y1="5" x2="18" y2="11" />
    </svg>
  )
}

export function WaveformIcon() {
  return (
    <svg {...props}>
      <polyline points="3 12 6 7 9 17 12 4 15 17 18 7 21 12" />
    </svg>
  )
}

export function VinylIcon() {
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function GlobeIcon() {
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <ellipse cx="12" cy="12" rx="4.5" ry="9" />
      <path d="M4.2 7.5 Q12 5 19.8 7.5" />
      <path d="M4.2 16.5 Q12 19 19.8 16.5" />
    </svg>
  )
}

export function FilmIcon() {
  return (
    <svg {...props}>
      <rect x="2" y="4" width="20" height="16" rx="1" />
      <line x1="7" y1="4" x2="7" y2="20" />
      <line x1="17" y1="4" x2="17" y2="20" />
      <line x1="2" y1="9" x2="7" y2="9" />
      <line x1="2" y1="15" x2="7" y2="15" />
      <line x1="17" y1="9" x2="22" y2="9" />
      <line x1="17" y1="15" x2="22" y2="15" />
    </svg>
  )
}

export function MicIcon() {
  return (
    <svg {...props}>
      {/* Handheld mic, tilted ~45° upper-right */}
      <g transform="rotate(45 12 12)">
        <ellipse cx="12" cy="6.5" rx="3.5" ry="4.5" />
        <rect x="10.5" y="10.5" width="3" height="9" rx="1.5" fill="none" />
      </g>
    </svg>
  )
}

export function ChevronDownIcon() {
  return (
    <svg {...props} width={12} height={12}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg {...props} width={22} height={22}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

export function XIcon() {
  return (
    <svg {...props} width={22} height={22}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export function MusicNoteIcon() {
  return (
    <svg {...props}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg {...props} width={18} height={18}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function YouTubeIcon() {
  return (
    <svg {...props} width={18} height={18}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function SpotifyIcon() {
  return (
    <svg {...props} width={18} height={18} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 13.5c2.5-1 5.5-1 8 0" />
      <path d="M7 10.5c3-1.5 7-1.5 10 0" />
      <path d="M9 16.5c2-0.7 4-0.7 6 0" />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg {...props} width={18} height={18}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

/* Platform icons — used in music streaming section */

export function AppleMusicIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3z" />
      <path d="M9 17V9.5l7-1.5V15" />
      <circle cx="9" cy="17" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="15" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MixcloudIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      <path d="M10 14h4" />
      <path d="M12 12v4" />
    </svg>
  )
}

export function SoundCloudIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14.5c0 1.38 1.12 2.5 2.5 2.5h11a3.5 3.5 0 0 0 0-7 3.5 3.5 0 0 0-3-1.72A5 5 0 0 0 4 12.5v2z" />
      <path d="M2 15v-2" />
      <path d="M2 15c0 .83.33 1.5.83 1.5" />
    </svg>
  )
}

export function SpotifyFullIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 13.5c2.5-1 5.5-1 8 0" />
      <path d="M7 10.5c3-1.5 7-1.5 10 0" />
      <path d="M9 16.5c2-0.7 4-0.7 6 0" />
    </svg>
  )
}

export function YouTubeFullIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  )
}
