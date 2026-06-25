import StatItem from '@/components/ui/StatItem'
import { stats } from '@/lib/content'

export default function StatsBar() {
  return (
    <section className="bg-brand-black border-t border-gold/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.headline} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
