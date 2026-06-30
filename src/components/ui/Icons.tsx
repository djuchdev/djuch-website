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

/* Corporate Events page icons */

export function StarIcon() {
  return (
    <svg {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export function SlidersIcon() {
  return (
    <svg {...props}>
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8"  x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1"  y1="14" x2="7"  y2="14" />
      <line x1="9"  y1="8"  x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  )
}

export function CheckCircleIcon() {
  return (
    <svg {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

export function BriefcaseIcon() {
  return (
    <svg {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  )
}

export function RocketIcon() {
  return (
    <svg {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

export function TrophyIcon() {
  return (
    <svg {...props}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
    </svg>
  )
}

export function CompassIcon() {
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

export function ToastIcon() {
  return (
    <svg {...props}>
      <path d="M17 11l1-8H6l1 8" />
      <path d="M6 11c0 4 2 6 6 6s6-2 6-6" />
      <line x1="12" y1="17" x2="12" y2="22" />
      <line x1="9"  y1="22" x2="15" y2="22" />
    </svg>
  )
}

/* Booking page icons */

export function CalendarIcon() {
  return (
    <svg {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="7" y1="14" x2="10" y2="14" />
    </svg>
  )
}

export function MessageIcon() {
  return (
    <svg {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export function LockIcon() {
  return (
    <svg {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ClockIcon() {
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export function ShieldCheckIcon() {
  return (
    <svg {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
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
