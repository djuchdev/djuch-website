import Image from 'next/image'
import { media } from '@/lib/content'

export default function PhotoGallery() {
  const { gallery } = media
  const items = gallery.items

  return (
    <section className="bg-brand-dark border-t border-gold/30 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
            {gallery.eyebrow}
          </p>
          <h2
            className="font-display font-extrabold uppercase text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {gallery.headline}
          </h2>
        </div>

        {/*
          Asymmetric editorial grid — desktop:
          [0: 2col×2row] [1: 1col×1row]
          [             ] [2: 1col×1row]
          [3: 1col×1row]  [4: 1col×1row]  [5: 1col×1row]
        */}
        <div
          className="hidden lg:grid gap-px bg-white/5"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 280px)',
          }}
        >
          {/* Item 0 — feature (2×2) */}
          <GalleryCell item={items[0]} style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }} />
          {/* Item 1 */}
          <GalleryCell item={items[1]} style={{ gridColumn: '3 / 4', gridRow: '1 / 2' }} />
          {/* Item 2 */}
          <GalleryCell item={items[2]} style={{ gridColumn: '3 / 4', gridRow: '2 / 3' }} />
          {/* Items 3-5 bottom row */}
          <GalleryCell item={items[3]} style={{ gridColumn: '1 / 2', gridRow: '3 / 4' }} />
          <GalleryCell item={items[4]} style={{ gridColumn: '2 / 3', gridRow: '3 / 4' }} />
          <GalleryCell item={items[5]} style={{ gridColumn: '3 / 4', gridRow: '3 / 4' }} />
        </div>

        {/* Mobile: uniform 2-col grid */}
        <div className="lg:hidden grid grid-cols-2 gap-px bg-white/5">
          {items.map((item) => (
            <GalleryCell key={item.alt} item={item} style={{ height: 220 }} />
          ))}
        </div>

      </div>
    </section>
  )
}

function GalleryCell({
  item,
  style,
}: {
  item: { image: string | null; gradient: string; alt: string }
  style?: React.CSSProperties
}) {
  return (
    <div
      className="relative overflow-hidden group bg-brand-black"
      style={style}
    >
      {item.image ? (
        <Image
          src={item.image}
          fill
          alt={item.alt}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`}>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 60%)',
          }} />
        </div>
      )}
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      {/* Alt text on hover */}
      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white/60 text-[10px] font-semibold tracking-[0.18em] uppercase leading-tight">
          {item.alt}
        </p>
      </div>
    </div>
  )
}
