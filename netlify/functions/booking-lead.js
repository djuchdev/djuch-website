const requiredFields = [
  'firstName',
  'lastName',
  'email',
  'phone',
  'eventType',
  'eventDate',
  'location',
  'message',
]

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://djuch.netlify.app',
  'Access-Control-Allow-Headers': 'content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
}

function cleanString(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function normalizeLead(raw) {
  const lead = {
    firstName: cleanString(raw.firstName),
    lastName: cleanString(raw.lastName),
    email: cleanString(raw.email).toLowerCase(),
    phone: cleanString(raw.phone),
    eventType: cleanString(raw.eventType),
    eventDate: cleanString(raw.eventDate),
    eventTime: cleanString(raw.eventTime),
    location: cleanString(raw.location),
    guestCount: cleanString(raw.guestCount),
    budget: cleanString(raw.budget),
    message: cleanString(raw.message),
    smsEmailConsent: raw.smsEmailConsent === true,
    source: cleanString(raw.source) || 'djuch-booking-form',
    pageUrl: cleanString(raw.pageUrl),
    userAgent: cleanString(raw.userAgent),
    submittedAt: cleanString(raw.submittedAt) || new Date().toISOString(),
  }

  return {
    ...lead,
    fullName: `${lead.firstName} ${lead.lastName}`.trim(),
    tags: ['DJUCH Booking Lead', lead.eventType].filter(Boolean),
  }
}

function validateLead(lead) {
  const errors = {}

  for (const field of requiredFields) {
    if (!lead[field]) errors[field] = 'Required'
  }

  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    errors.email = 'Enter a valid email'
  }

  if (!lead.smsEmailConsent) {
    errors.smsEmailConsent = 'Consent required'
  }

  return errors
}

exports.handler = async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' })
  }

  let payload
  try {
    payload = JSON.parse(event.body || '{}')
  } catch {
    return json(400, { error: 'Invalid JSON payload' })
  }

  if (cleanString(payload.companyWebsite)) {
    return json(200, { ok: true })
  }

  const lead = normalizeLead(payload)
  const errors = validateLead(lead)

  if (Object.keys(errors).length > 0) {
    return json(400, { error: 'Validation failed', errors })
  }

  const webhookUrl = process.env.GHL_BOOKING_WEBHOOK_URL

  if (!webhookUrl) {
    console.error('Missing GHL_BOOKING_WEBHOOK_URL')
    return json(503, { error: 'Booking intake is not configured yet' })
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'djuch-website-booking-form/1.0',
    },
    body: JSON.stringify({
      event: 'booking_inquiry.created',
      ...lead,
      lead,
    }),
  })

  if (!response.ok) {
    const text = await response.text().catch(() => '')
    console.error('GoHighLevel webhook failed', response.status, text.slice(0, 500))
    return json(502, { error: 'Booking intake failed' })
  }

  return json(200, { ok: true })
}
