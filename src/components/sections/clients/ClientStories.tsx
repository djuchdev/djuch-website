import { clients } from '@/lib/content'
import ClientStoryCard from '@/components/ui/ClientStoryCard'

export default function ClientStories() {
  const { stories } = clients

  return (
    <section id="client-stories" className="bg-brand-black border-t border-gold/30">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-6">
          {stories.eyebrow}
        </p>
        <h2
          className="font-display font-extrabold uppercase leading-[0.9]"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
        >
          {stories.headlineLines.map((line) => (
            <span key={line} className="block text-white">{line}</span>
          ))}
          <span className="block text-gold">{stories.headlineGold}</span>
        </h2>
      </div>

      {/* Story cards grid */}
      <div className="border-t border-gold/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {stories.items.map((story) => (
              <ClientStoryCard key={story.company} {...story} />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
