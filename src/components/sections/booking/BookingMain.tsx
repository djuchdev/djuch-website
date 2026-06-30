import BookingForm from '@/components/ui/BookingForm'
import {
  CalendarIcon,
  MessageIcon,
  HeadphonesIcon,
  MusicNoteIcon,
} from '@/components/ui/Icons'
import { booking } from '@/lib/content'
import type { BookingStep } from '@/types'

function StepIcon({ kind }: { kind: BookingStep['icon'] }) {
  if (kind === 'calendar')   return <CalendarIcon />
  if (kind === 'message')    return <MessageIcon />
  if (kind === 'headphones') return <HeadphonesIcon />
  return <MusicNoteIcon />
}

export default function BookingMain() {
  const { steps } = booking

  return (
    <section id="booking-form" className="bg-brand-dark border-t border-gold/30">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">

          {/* Left column: How It Works */}
          <div className="px-6 sm:px-10 lg:px-14 py-20 border-b lg:border-b-0 lg:border-r border-white/5">

            <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-12">
              How It Works
            </p>

            <div className="flex flex-col gap-10">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-5">

                  {/* Icon circle */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold">
                    <StepIcon kind={step.icon} />
                  </div>

                  {/* Text */}
                  <div className="pt-1">
                    <p className="text-[10px] text-gold/60 font-bold tracking-[0.18em] uppercase mb-1">
                      {step.number}
                    </p>
                    <h3 className="font-display font-bold uppercase text-white tracking-wide text-sm mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* Decorative quote */}
            <div className="mt-14 pt-10 border-t border-white/5">
              <p className="text-zinc-600 text-xs leading-relaxed italic">
                &ldquo;Every great event starts with a single conversation.&rdquo;
              </p>
              <p className="text-gold/50 text-[10px] font-semibold tracking-[0.2em] uppercase mt-3">
                — UCH
              </p>
            </div>

          </div>

          {/* Right column: Booking form */}
          <div className="px-6 sm:px-10 lg:px-14 py-20">
            <BookingForm />
          </div>

        </div>
      </div>
    </section>
  )
}
