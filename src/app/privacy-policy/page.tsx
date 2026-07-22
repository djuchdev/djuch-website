import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — DJ UCH',
  description:
    'Privacy policy for DJ UCH booking inquiries, communications, and website use.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-brand-black pt-36 pb-24">
      <section className="max-w-3xl mx-auto px-6">
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
          DJ UCH
        </p>
        <h1 className="font-display font-extrabold uppercase text-white text-4xl sm:text-5xl mb-6">
          Privacy Policy
        </h1>
        <p className="text-zinc-500 text-sm leading-relaxed mb-10">
          Last updated: July 22, 2026
        </p>

        <div className="space-y-9 text-zinc-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-white uppercase tracking-[0.16em] text-xs font-bold mb-3">
              Information We Collect
            </h2>
            <p>
              When you submit a booking inquiry, we collect the information you provide,
              including your name, email address, phone number, event type, event date,
              location, guest count, budget range, and event details.
            </p>
          </section>

          <section>
            <h2 className="text-white uppercase tracking-[0.16em] text-xs font-bold mb-3">
              How We Use Information
            </h2>
            <p>
              We use your information to respond to your inquiry, confirm availability,
              coordinate event details, send booking-related email and SMS messages, and
              improve our booking process.
            </p>
          </section>

          <section>
            <h2 className="text-white uppercase tracking-[0.16em] text-xs font-bold mb-3">
              Email And SMS Communications
            </h2>
            <p>
              By submitting the booking form and opting in, you agree to receive email
              and SMS communications from DJ UCH related to your inquiry. Message and
              data rates may apply. Message frequency may vary. Reply STOP to opt out
              of SMS messages or HELP for help.
            </p>
          </section>

          <section>
            <h2 className="text-white uppercase tracking-[0.16em] text-xs font-bold mb-3">
              Sharing Information
            </h2>
            <p>
              We do not sell your personal information. We may share information with
              service providers that help us operate the website, manage booking
              inquiries, send communications, or provide related business services.
              Mobile opt-in information and consent are not shared with third parties
              for their own marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-white uppercase tracking-[0.16em] text-xs font-bold mb-3">
              Data Security
            </h2>
            <p>
              We use reasonable administrative and technical safeguards to protect the
              information submitted through this website, but no online system can be
              guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-white uppercase tracking-[0.16em] text-xs font-bold mb-3">
              Contact
            </h2>
            <p>
              Questions about this policy can be sent to{' '}
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
