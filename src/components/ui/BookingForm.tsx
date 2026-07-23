'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, LockIcon, ClockIcon, ShieldCheckIcon } from '@/components/ui/Icons'
import { booking } from '@/lib/content'

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  eventType: string
  eventDate: string
  eventTime: string
  location: string
  guestCount: string
  budget: string
  message: string
  companyWebsite: string
  agreed: boolean
}

const empty: FormState = {
  firstName: '', lastName: '', email: '', phone: '',
  eventType: '', eventDate: '', eventTime: '',
  location: '', guestCount: '', budget: '', message: '',
  companyWebsite: '',
  agreed: false,
}

const requiredFields: (keyof FormState)[] = [
  'firstName', 'lastName', 'email', 'phone', 'eventType', 'eventDate', 'location', 'message',
]

const inputBase =
  'w-full bg-transparent border px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 ' +
  'focus:outline-none transition-colors duration-200'

const inputIdle  = 'border-white/[0.12] focus:border-gold/50'
const inputError = 'border-red-500/40 focus:border-red-500/60'

function TrustIcon({ kind }: { kind: 'lock' | 'clock' | 'shield' }) {
  if (kind === 'lock')   return <LockIcon />
  if (kind === 'clock')  return <ClockIcon />
  return <ShieldCheckIcon />
}

export default function BookingForm() {
  const [form, setForm]       = useState<FormState>(empty)
  const [errors, setErrors]   = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitting, setSub]  = useState(false)
  const [submitted, setDone]  = useState(false)
  const [submitError, setSubmitError] = useState('')
  const formRef               = useRef<HTMLFormElement>(null)

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
    if (submitError) setSubmitError('')
  }

  function validate(): Partial<Record<keyof FormState, string>> {
    const errs: Partial<Record<keyof FormState, string>> = {}
    requiredFields.forEach(f => {
      if (!form[f]) errs[f] = 'Required'
    })
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email'
    }
    if (!form.agreed) errs.agreed = 'Please agree to email and SMS follow-up'
    return errs
  }

  async function sendNetlifyNotification(submittedAt: string) {
    const body = new URLSearchParams({
      'form-name': 'booking-notification',
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      eventType: form.eventType,
      eventDate: form.eventDate,
      eventTime: form.eventTime,
      location: form.location,
      guestCount: form.guestCount,
      budget: form.budget,
      message: form.message,
      smsEmailConsent: form.agreed ? 'yes' : 'no',
      source: 'djuch-booking-form',
      pageUrl: window.location.href,
      submittedAt,
    })

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
    } catch (error) {
      console.error('Netlify booking notification failed', error)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      const first = formRef.current?.querySelector('[data-error]') as HTMLElement | null
      first?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setSub(true)
    try {
      const submittedAt = new Date().toISOString()
      const response = await fetch('/.netlify/functions/booking-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          smsEmailConsent: form.agreed,
          source: 'djuch-booking-form',
          pageUrl: window.location.href,
          userAgent: window.navigator.userAgent,
          submittedAt,
        }),
      })

      if (!response.ok) {
        throw new Error('Unable to send inquiry')
      }

      await sendNetlifyNotification(submittedAt)
      setDone(true)
      setForm(empty)
    } catch {
      setSubmitError('We could not send your inquiry. Please try again or email uchpromo@gmail.com.')
    } finally {
      setSub(false)
    }
  }

  const cls = (field: keyof FormState) =>
    `${inputBase} ${errors[field] ? inputError : inputIdle}`

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-20 px-4">
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
          Inquiry Received
        </p>
        <h3 className="font-sans font-light text-white text-2xl mb-5">
          Thank you. We&apos;ll be in touch.
        </h3>
        <div className="w-10 h-px bg-gold/50 mb-6" />
        <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
          I personally review every inquiry and will respond within 24 business hours
          to discuss your event.
        </p>
        <p className="text-zinc-600 text-xs tracking-wide mt-8">
          — UCH
        </p>
      </div>
    )
  }

  const { form: formContent } = booking

  return (
    <div>
      {/* Form header */}
      <div className="mb-8">
        <p className="text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">
          {formContent.eyebrow}
        </p>
        <p className="text-zinc-500 text-[11px] font-semibold tracking-[0.15em] uppercase">
          {formContent.subheading}
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        name="booking-notification"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="companyWebsite"
        noValidate
      >
        <input type="hidden" name="form-name" value="booking-notification" />
        <div className="flex flex-col gap-3">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="companyWebsite">Company Website</label>
            <input
              id="companyWebsite"
              name="companyWebsite"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.companyWebsite}
              onChange={e => update('companyWebsite', e.target.value)}
            />
          </div>

          {/* Row 1: First Name / Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div data-error={errors.firstName ? true : undefined}>
              <label htmlFor="firstName" className="sr-only">First Name</label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name *"
                name="firstName"
                autoComplete="given-name"
                value={form.firstName}
                onChange={e => update('firstName', e.target.value)}
                className={cls('firstName')}
                aria-required="true"
                aria-invalid={!!errors.firstName}
              />
              {errors.firstName && (
                <p className="text-red-400 text-[10px] mt-1 px-1">{errors.firstName}</p>
              )}
            </div>
            <div data-error={errors.lastName ? true : undefined}>
              <label htmlFor="lastName" className="sr-only">Last Name</label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name *"
                name="lastName"
                autoComplete="family-name"
                value={form.lastName}
                onChange={e => update('lastName', e.target.value)}
                className={cls('lastName')}
                aria-required="true"
                aria-invalid={!!errors.lastName}
              />
              {errors.lastName && (
                <p className="text-red-400 text-[10px] mt-1 px-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div data-error={errors.email ? true : undefined}>
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Email Address *"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={e => update('email', e.target.value)}
              className={cls('email')}
              aria-required="true"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-red-400 text-[10px] mt-1 px-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div data-error={errors.phone ? true : undefined}>
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number *"
              name="phone"
              autoComplete="tel"
              value={form.phone}
              onChange={e => update('phone', e.target.value)}
              className={cls('phone')}
              aria-required="true"
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="text-red-400 text-[10px] mt-1 px-1">{errors.phone}</p>
            )}
          </div>

          {/* Event Type */}
          <div data-error={errors.eventType ? true : undefined}>
            <label htmlFor="eventType" className="sr-only">Event Type</label>
            <div className="relative">
              <select
                id="eventType"
                name="eventType"
                value={form.eventType}
                onChange={e => update('eventType', e.target.value)}
                className={`${cls('eventType')} appearance-none bg-brand-black cursor-pointer`}
                aria-required="true"
                aria-invalid={!!errors.eventType}
              >
                <option value="" disabled>Select an Experience *</option>
                {formContent.eventTypes.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                <ChevronDownIcon />
              </div>
            </div>
            {errors.eventType && (
              <p className="text-red-400 text-[10px] mt-1 px-1">{errors.eventType}</p>
            )}
          </div>

          {/* Event Date / Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div data-error={errors.eventDate ? true : undefined}>
              <label htmlFor="eventDate" className="sr-only">Event Date</label>
              <input
                id="eventDate"
                type="text"
                placeholder="Event Date * (DD/MM/YYYY)"
                name="eventDate"
                value={form.eventDate}
                onChange={e => update('eventDate', e.target.value)}
                className={cls('eventDate')}
                aria-required="true"
                aria-invalid={!!errors.eventDate}
              />
              {errors.eventDate && (
                <p className="text-red-400 text-[10px] mt-1 px-1">{errors.eventDate}</p>
              )}
            </div>
            <div>
              <label htmlFor="eventTime" className="sr-only">Event Time</label>
              <input
                id="eventTime"
                type="text"
                placeholder="Preferred Start Time"
                name="eventTime"
                value={form.eventTime}
                onChange={e => update('eventTime', e.target.value)}
                className={inputBase + ' ' + inputIdle}
              />
            </div>
          </div>

          {/* Location */}
          <div data-error={errors.location ? true : undefined}>
            <label htmlFor="location" className="sr-only">Event Location</label>
            <input
              id="location"
              type="text"
              placeholder="Event Location *"
              name="location"
              autoComplete="street-address"
              value={form.location}
              onChange={e => update('location', e.target.value)}
              className={cls('location')}
              aria-required="true"
              aria-invalid={!!errors.location}
            />
            {errors.location && (
              <p className="text-red-400 text-[10px] mt-1 px-1">{errors.location}</p>
            )}
          </div>

          {/* Guest Count / Budget Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="guestCount" className="sr-only">Guest Count</label>
              <input
                id="guestCount"
                type="text"
                placeholder="Guest Count (Estimated)"
                name="guestCount"
                value={form.guestCount}
                onChange={e => update('guestCount', e.target.value)}
                className={inputBase + ' ' + inputIdle}
              />
            </div>
            <div>
              <label htmlFor="budget" className="sr-only">Budget Range</label>
              <div className="relative">
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={e => update('budget', e.target.value)}
                  className={`${inputBase} ${inputIdle} appearance-none bg-brand-black cursor-pointer`}
                >
                  <option value="" disabled>Budget Range</option>
                  {formContent.budgetRanges.map(r => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                  <ChevronDownIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div data-error={errors.message ? true : undefined}>
            <label htmlFor="message" className="sr-only">Tell Me About Your Event</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell Me About Your Event *  —  Share as much detail as possible so we can create the perfect experience."
              value={form.message}
              onChange={e => update('message', e.target.value)}
              rows={5}
              className={`${cls('message')} resize-none`}
              aria-required="true"
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="text-red-400 text-[10px] mt-1 px-1">{errors.message}</p>
            )}
          </div>

          {/* Terms checkbox */}
          <div className="flex items-start gap-3 pt-1">
            <input
              id="agreed"
              name="smsEmailConsent"
              type="checkbox"
              checked={form.agreed}
              onChange={e => update('agreed', e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded-none border border-white/20 bg-transparent accent-gold cursor-pointer flex-shrink-0"
              aria-required="true"
            />
            <label htmlFor="agreed" className="text-zinc-500 text-xs leading-relaxed cursor-pointer">
              I agree to receive email and SMS follow-up about this booking inquiry from DJ UCH. Message and data rates may apply. Reply STOP to opt out. I also agree to the{' '}
              <Link href="/privacy-policy/" className="text-gold underline underline-offset-2">Privacy Policy</Link>
              {' '}and{' '}
              <Link href="/terms/" className="text-gold underline underline-offset-2">Terms of Service</Link>.
            </label>
          </div>
          {errors.agreed && (
            <p className="text-red-400 text-[10px] -mt-1 px-1">{errors.agreed}</p>
          )}

          {submitError && (
            <p className="text-red-400 text-xs leading-relaxed px-1" role="alert">
              {submitError}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="mt-2 w-full bg-gold text-black text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold-light active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? 'Sending…' : <>Send Inquiry <span aria-hidden>›</span></>}
          </button>

        </div>
      </form>

      {/* Trust indicators */}
      <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
        {formContent.trustIndicators.map((item) => (
          <div key={item.line1} className="flex flex-col items-center text-center gap-2">
            <div className="text-zinc-500">
              <TrustIcon kind={item.icon} />
            </div>
            <div>
              <p className="text-zinc-400 text-[9px] font-semibold tracking-[0.15em] uppercase leading-tight">
                {item.line1}
              </p>
              <p className="text-zinc-400 text-[9px] font-semibold tracking-[0.15em] uppercase leading-tight">
                {item.line2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
