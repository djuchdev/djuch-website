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

const ghlApiBase = 'https://services.leadconnectorhq.com'

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

function ghlHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    Version: '2021-07-28',
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

function buildBookingNote(lead) {
  return [
    'DJ UCH booking inquiry',
    `Submitted: ${lead.submittedAt}`,
    `Experience: ${lead.eventType}`,
    `Event date: ${lead.eventDate}`,
    lead.eventTime ? `Event time: ${lead.eventTime}` : '',
    `Location: ${lead.location}`,
    lead.guestCount ? `Guest count: ${lead.guestCount}` : '',
    lead.budget ? `Budget: ${lead.budget}` : '',
    lead.pageUrl ? `Page URL: ${lead.pageUrl}` : '',
    '',
    lead.message,
  ].filter(Boolean).join('\n')
}

function buildInitialSms(lead) {
  const date = lead.eventDate ? ` for ${lead.eventDate}` : ''
  const location = lead.location ? ` in ${lead.location}` : ''

  return [
    `Hi ${lead.firstName}, this is DJ UCH's team.`,
    `Got your inquiry${date}${location}.`,
    'Is this still the best number to coordinate availability?',
    'Reply STOP to opt out.',
  ].join(' ')
}

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function buildInternalEmailHtml(lead) {
  const rows = [
    ['Name', lead.fullName],
    ['Email', lead.email],
    ['Phone', lead.phone],
    ['Experience', lead.eventType],
    ['Event Date', lead.eventDate],
    ['Event Time', lead.eventTime],
    ['Location', lead.location],
    ['Guest Count', lead.guestCount],
    ['Budget', lead.budget],
    ['Submitted', lead.submittedAt],
    ['Page URL', lead.pageUrl],
  ].filter(([, value]) => value)

  return `
    <h2>New DJ UCH booking inquiry</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
      ${rows.map(([label, value]) => `
        <tr>
          <td style="font-weight:bold;vertical-align:top">${escapeHtml(label)}</td>
          <td>${escapeHtml(value)}</td>
        </tr>
      `).join('')}
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap">${escapeHtml(lead.message)}</p>
  `
}

function buildInternalEmailSubject(lead) {
  const name = lead.fullName || 'New lead'
  const date = lead.eventDate ? ` - ${lead.eventDate}` : ''
  return `New DJ UCH booking inquiry: ${name}${date}`
}

async function ghlRequest(path, token, options) {
  const response = await fetch(`${ghlApiBase}${path}`, {
    ...options,
    headers: {
      ...ghlHeaders(token),
      ...options.headers,
    },
  })

  const text = await response.text().catch(() => '')
  let body = null

  if (text) {
    try {
      body = JSON.parse(text)
    } catch {
      body = { raw: text }
    }
  }

  if (!response.ok) {
    const detail = typeof body?.raw === 'string' ? body.raw : JSON.stringify(body)
    throw new Error(`HighLevel API ${path} failed: ${response.status} ${detail?.slice(0, 500) || ''}`)
  }

  return body
}

function getContactId(result) {
  return result?.contact?.id || result?.id || result?.contactId || result?.data?.id || result?.data?.contact?.id
}

async function sendInternalEmailNotice(lead, token, locationId) {
  if (process.env.GHL_SEND_INTERNAL_EMAIL === 'false') {
    return
  }

  const notificationEmail = process.env.GHL_NOTIFICATION_EMAIL || 'uchpromo@gmail.com'

  const contactResult = await ghlRequest('/contacts/upsert', token, {
    method: 'POST',
    body: JSON.stringify({
      locationId,
      firstName: 'DJ UCH',
      lastName: 'Booking Notices',
      name: 'DJ UCH Booking Notices',
      email: notificationEmail,
      source: 'DJ UCH Website Booking Notifications',
      tags: ['DJUCH Internal Notification'],
      customFields: [],
    }),
  })

  const contactId = getContactId(contactResult)

  if (!contactId) {
    throw new Error('HighLevel notification contact upsert succeeded but did not return a contact id')
  }

  await ghlRequest('/conversations/messages', token, {
    method: 'POST',
    body: JSON.stringify({
      type: 'Email',
      contactId,
      locationId,
      emailTo: notificationEmail,
      subject: buildInternalEmailSubject(lead),
      html: buildInternalEmailHtml(lead),
    }),
  })
}

async function sendToHighLevelApi(lead) {
  const token = process.env.GHL_API_TOKEN
  const locationId = process.env.GHL_LOCATION_ID

  if (!token || !locationId) {
    return false
  }

  const contactResult = await ghlRequest('/contacts/upsert', token, {
    method: 'POST',
    body: JSON.stringify({
      locationId,
      firstName: lead.firstName,
      lastName: lead.lastName,
      name: lead.fullName,
      email: lead.email,
      phone: lead.phone,
      source: 'DJ UCH Website Booking Form',
      tags: lead.tags,
      customFields: [],
    }),
  })

  const contactId = getContactId(contactResult)

  if (!contactId) {
    throw new Error('HighLevel contact upsert succeeded but did not return a contact id')
  }

  await ghlRequest(`/contacts/${contactId}/notes`, token, {
    method: 'POST',
    body: JSON.stringify({
      body: buildBookingNote(lead),
    }),
  })

  if (process.env.GHL_SEND_INITIAL_SMS !== 'false') {
    try {
      await ghlRequest('/conversations/messages', token, {
        method: 'POST',
        body: JSON.stringify({
          type: 'SMS',
          contactId,
          locationId,
          message: process.env.GHL_INITIAL_SMS_MESSAGE || buildInitialSms(lead),
        }),
      })
    } catch (error) {
      console.error(error)
    }
  }

  try {
    await sendInternalEmailNotice(lead, token, locationId)
  } catch (error) {
    console.error(error)
  }

  return true
}

async function sendToHighLevelWebhook(lead) {
  const webhookUrl = process.env.GHL_BOOKING_WEBHOOK_URL

  if (!webhookUrl) {
    return false
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
    throw new Error(`GoHighLevel webhook failed: ${response.status} ${text.slice(0, 500)}`)
  }

  return true
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

  try {
    const sentToApi = await sendToHighLevelApi(lead)
    const sentToWebhook = sentToApi ? false : await sendToHighLevelWebhook(lead)

    if (!sentToApi && !sentToWebhook) {
      console.error('Missing HighLevel API and webhook configuration')
      return json(503, { error: 'Booking intake is not configured yet' })
    }
  } catch (error) {
    console.error(error)
    return json(502, { error: 'Booking intake failed' })
  }

  return json(200, { ok: true })
}
