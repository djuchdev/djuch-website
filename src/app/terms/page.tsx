import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — DJ UCH',
  description: 'Terms of service for DJ UCH website and booking inquiries.',
}

export default function TermsPage() {
  return (
    <main className="bg-brand-black pt-36 pb-24">
      <section className="max-w-3xl mx-auto px-6">
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
          DJ UCH
        </p>
        <h1 className="font-display font-extrabold uppercase text-white text-4xl sm:text-5xl mb-6">
          Terms Of Service
        </h1>
        <p className="text-zinc-500 text-sm leading-relaxed mb-10">
          Last updated: July 22, 2026
        </p>

        <div className="space-y-9 text-zinc-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-white uppercase tracking-[0.16em] text-xs font-bold mb-3">
              Website Use
            </h2>
            <p>
              This website provides information about DJ UCH services and allows
              visitors to submit booking inquiries. You agree to provide accurate
              information and to use the website lawfully.
            </p>
          </section>

          <section>
            <h2 className="text-white uppercase tracking-[0.16em] text-xs font-bold mb-3">
              Booking Inquiries
            </h2>
            <p>
              Submitting a booking inquiry does not create a booking, contract, or
              guaranteed availability. Event details, fees, terms, and availability are
              confirmed separately in writing.
            </p>
          </section>

          <section>
            <h2 className="text-white uppercase tracking-[0.16em] text-xs font-bold mb-3">
              Email And SMS Terms
            </h2>
            <p>
              By opting in on the booking form, you agree to receive email and SMS
              messages related to your inquiry. Message and data rates may apply.
              Message frequency may vary. Reply STOP to opt out of SMS messages or HELP
              for help. Consent is not a condition of purchasing services.
            </p>
          </section>

          <section>
            <h2 className="text-white uppercase tracking-[0.16em] text-xs font-bold mb-3">
              Intellectual Property
            </h2>
            <p>
              Website text, images, branding, and other materials are owned by or
              licensed to DJ UCH and may not be copied or reused without permission.
            </p>
          </section>

          <section>
            <h2 className="text-white uppercase tracking-[0.16em] text-xs font-bold mb-3">
              Limitation Of Liability
            </h2>
            <p>
              The website is provided as-is. To the fullest extent permitted by law,
              DJ UCH is not liable for indirect, incidental, or consequential damages
              arising from website use.
            </p>
          </section>

          <section>
            <h2 className="text-white uppercase tracking-[0.16em] text-xs font-bold mb-3">
              Contact
            </h2>
            <p>
              Questions about these terms can be sent to{' '}
              <a href="mailto:events@uch1.com" className="text-gold underline underline-offset-4">
                events@uch1.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
