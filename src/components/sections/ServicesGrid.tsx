import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/lib/content'

export default function ServicesGrid() {
  return (
    <section className="bg-brand-black border-t border-white/5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}
