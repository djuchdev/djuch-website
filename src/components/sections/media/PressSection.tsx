import Link from 'next/link'
import { media } from '@/lib/content'

const typeLabel: Record<string, string> = {
  podcast:    'Podcast',
  television: 'Television',
  interview:  'Interview',
  article:    'Article',
}

export default function PressSection() {
  const { press } = media

  return (
    <section className="bg-brand-black border-t border-gold/30 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
            {press.eyebrow}
          </p>
          <h2
            className="font-display font-extrabold uppercase text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {press.headline}
          </h2>
        </div>

        {/* 3-col grid on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-white/5">
          {press.items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-r border-b border-white/5 px-6 py-8 flex flex-col gap-5 hover:bg-white/[0.02] transition-colors duration-200"
            >
              {/* Type chip */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                <span className="text-gold/70 text-[9px] font-bold tracking-[0.25em] uppercase">
                  {typeLabel[item.type]}
                </span>
              </div>

              {/* Outlet name — editorial styled */}
              <p className={`${item.outletStyle} text-white/80 group-hover:text-white transition-colors duration-200 leading-tight`}>
                {item.outlet}
              </p>

              {/* Gold rule */}
              <div className="w-6 h-px bg-gold/40 group-hover:w-10 transition-all duration-300" />

              {/* Title */}
              <h3 className="text-zinc-300 text-sm font-medium leading-relaxed flex-1">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-600 text-[11px] leading-relaxed">
                {item.description}
              </p>

              {/* Arrow link */}
              <span className="text-gold/50 text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-gold transition-colors duration-200 flex items-center gap-1.5">
                Read More <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
