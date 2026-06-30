import type { Metadata } from 'next'
import BookingHero from '@/components/sections/booking/BookingHero'
import BookingMain from '@/components/sections/booking/BookingMain'
import BookingTestimonial from '@/components/sections/booking/BookingTestimonial'
import ExperiencesStrip from '@/components/sections/booking/ExperiencesStrip'
import CTASection from '@/components/sections/CTASection'
import { booking } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Book UCH — DJ UCH',
  description:
    "Ready to create an unforgettable atmosphere? Book DJ UCH for your corporate event, private celebration, or luxury experience. Inquire today.",
}

export default function BookingPage() {
  return (
    <main>
      <BookingHero />
      <BookingMain />
      <BookingTestimonial />
      <ExperiencesStrip />
      <CTASection content={booking.cta} />
    </main>
  )
}
