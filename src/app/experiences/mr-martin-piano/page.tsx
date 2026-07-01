import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import {
  MusicNoteIcon,
  PeopleIcon,
  PianoIcon,
  StarIcon,
  ToastIcon,
} from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Mr. Martin Piano - DJ UCH',
  description:
    'Live piano, soul, elegance, and connection for lounges, private dinners, weddings, corporate events, and VIP celebrations.',
}

const heroImage = '/images/mr-martin-piano.png'

const experiencePillars = [
  {
    title: 'Live Piano Mastery',
    description: 'A diverse repertoire performed with soul and precision.',
    Icon: PianoIcon,
  },
  {
    title: 'Upscale Atmosphere',
    description: 'Elegant energy that elevates the room without overpowering it.',
    Icon: ToastIcon,
  },
  {
    title: 'Audience Connection',
    description: 'A personal performance that reads the moment and draws guests in.',
    Icon: PeopleIcon,
  },
  {
    title: 'Versatile & Refined',
    description: 'Perfect for lounges, dinners, weddings, and VIP experiences.',
    Icon: StarIcon,
  },
]

const perfectFor = [
  ['Lounge & Restaurants', 'Create a classy, relaxing ambience your guests will love.'],
  ['Private Dinners', 'Set the tone for intimate, unforgettable evenings.'],
  ['Weddings & Ceremonies', 'Add elegance and emotion to your special day.'],
  ['Corporate Events', 'Impress clients and colleagues with sophisticated live entertainment.'],
]

const repertoire = [
  ['Classic Soul', 'Stevie Wonder', 'Marvin Gaye', 'Alicia Keys', 'Bill Withers'],
  ['R&B Favorites', 'John Legend', 'Usher', 'Brian McKnight', 'Ne-Yo'],
  ['Pop & Current Hits', 'Bruno Mars', 'Ed Sheeran', 'Adele', 'The Weeknd'],
  ['Timeless Standards', 'Frank Sinatra', 'Nat King Cole', 'Elton John', 'Billy Joel'],
]

const gallery = [
  {
    title: 'Mr. Martin Piano Showreel',
    description: 'Live moments. Real emotion.',
    image: heroImage,
  },
  {
    title: 'Intimate Moments',
    description: 'Up close and personal.',
    image: '/images/about-connection.png',
  },
  {
    title: 'Timeless Atmosphere',
    description: 'The perfect backdrop.',
    image: '/images/client-story-3.png',
  },
  {
    title: 'Unforgettable Nights',
    description: 'Memories that last.',
    image: '/images/private-events.png',
  },
]

const testimonials = [
  {
    quote: 'Mr. Martin Piano turned our dinner into an experience. His talent and presence are unmatched.',
    author: 'James T.',
    detail: 'Restaurant Owner, Las Vegas',
  },
  {
    quote: 'Our wedding felt like a movie. The music and emotion were absolutely perfect.',
    author: 'Lisa & Andrew',
    detail: 'Newlyweds',
  },
  {
    quote: 'Professional, polished, and truly gifted. He reads the room and creates magic every time.',
    author: 'Melissa R.',
    detail: 'Event Planner',
  },
]

export default function MrMartinPianoPage() {
  return (
    <main className="bg-brand-black text-white">
      <section className="relative min-h-[94vh] overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            fill
            alt="Mr. Martin Piano performing at a grand piano"
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-black/35" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[94vh] max-w-7xl items-center gap-10 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[0.95fr_1fr] lg:px-8">
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em] text-gold">
              Mr. Martin Piano
            </p>
            <h1
              className="max-w-3xl font-display font-extrabold uppercase leading-[0.9] text-white"
              style={{ fontSize: 'clamp(3.25rem, 7vw, 6.7rem)' }}
            >
              <span className="block">Live Piano.</span>
              <span className="block">Real Connection.</span>
              <span className="block text-gold">Timeless Atmosphere.</span>
            </h1>
            <div className="my-8 h-px w-12 bg-gold" />
            <p className="max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">
              Mr. Martin Piano brings sophistication, soul, and class to every room.
              A sit-back-and-savor experience your guests will never forget.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/booking">Check Availability <span aria-hidden>›</span></Button>
              <Button href="#showreel" variant="outline-gold">Watch Mr. Martin</Button>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="max-w-sm border-l border-gold/35 pl-8">
              <p className="font-display text-7xl leading-none text-gold">&quot;</p>
              <p className="-mt-4 text-lg leading-relaxed text-white/80">
                Piano has a way of turning moments into memories.
              </p>
              <p className="mt-5 font-script text-4xl text-gold">Mr. Martin</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-brand-dark py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.6fr] lg:px-8">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
              The Mr. Martin Experience
            </p>
            <h2 className="font-sans text-4xl font-light leading-[1.12] text-white md:text-5xl">
              More than music. It&apos;s an atmosphere.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              From intimate lounge settings to grand celebrations, Mr. Martin
              creates the perfect backdrop for connection, elegance, and unforgettable moments.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {experiencePillars.map((item) => (
              <article key={item.title} className="bg-brand-black p-7 text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center text-gold">
                  <item.Icon />
                </div>
                <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-brand-black">
        <div className="grid lg:grid-cols-[0.9fr_1.6fr]">
          <div className="px-4 py-16 sm:px-6 lg:px-12 xl:px-[max(3rem,calc((100vw-80rem)/2))]">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
              Perfect For
            </p>
            <div className="space-y-6">
              {perfectFor.map(([title, description]) => (
                <div key={title} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center border border-gold/40 text-gold">
                    <MusicNoteIcon />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[26rem] overflow-hidden lg:min-h-[34rem]">
            <Image
              src="/images/private-events.png"
              fill
              alt="Elegant candlelit event with live piano atmosphere"
              className="object-cover"
              sizes="(min-width: 1024px) 65vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-brand-dark py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.7fr] lg:px-8">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
              A Repertoire That Connects
            </p>
            <p className="text-lg leading-relaxed text-zinc-300">
              From classic favorites to today&apos;s hits, Mr. Martin Piano delivers
              the soundtrack to every moment.
            </p>
            <Button href="/booking" variant="outline-gold" className="mt-8">
              View Full Repertoire <span aria-hidden>›</span>
            </Button>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {repertoire.map(([category, ...artists]) => (
              <article key={category} className="bg-brand-black p-7">
                <h3 className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                  <span className="text-gold">♪</span>
                  {category}
                </h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  {artists.map((artist) => (
                    <li key={artist}>{artist}</li>
                  ))}
                  <li>And more</li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="showreel" className="border-b border-white/10 bg-brand-black py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
            Experience Mr. Martin
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <article key={item.title} className="group">
                <div className="relative aspect-[16/10] overflow-hidden border border-gold/20">
                  <Image
                    src={item.image}
                    fill
                    alt={item.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-black/35 text-gold backdrop-blur-sm">
                        <span className="ml-1 text-2xl">▶</span>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-brand-dark py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-10 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
            What Clients Say
          </p>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.author} className="bg-brand-black p-8">
                <blockquote className="text-base leading-relaxed text-zinc-300">
                  <span className="font-display text-5xl leading-none text-gold">&quot;</span>
                  {item.quote}
                </blockquote>
                <figcaption className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                  {item.author}
                  <span className="mt-1 block text-gold/70">{item.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black">
        <div className="grid lg:grid-cols-[0.95fr_1.3fr]">
          <div className="relative min-h-[24rem] overflow-hidden">
            <Image
              src={heroImage}
              fill
              alt="Mr. Martin smiling at a piano"
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-black/80" />
          </div>
          <div className="flex flex-col justify-center px-4 py-16 sm:px-6 lg:px-12 xl:pr-[max(3rem,calc((100vw-80rem)/2))]">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
              Let&apos;s Create Something Beautiful
            </p>
            <h2 className="font-sans text-4xl font-light leading-[1.12] text-white md:text-5xl">
              Live piano. Timeless moments. Let&apos;s make it unforgettable.
            </h2>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/booking">Book Mr. Martin <span aria-hidden>›</span></Button>
              <Link
                href="/experiences"
                className="inline-flex items-center px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-gold"
              >
                View All Experiences
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
