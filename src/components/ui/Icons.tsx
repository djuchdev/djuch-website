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
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function GlobeIcon() {
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3a14 14 0 0 1 4 9 14 14 0 0 1-4 9 14 14 0 0 1-4-9 14 14 0 0 1 4-9z" />
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
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="17" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
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
