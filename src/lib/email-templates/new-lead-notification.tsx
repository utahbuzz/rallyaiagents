import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

export interface NewLeadNotificationProps {
  source?: string
  name?: string
  organization?: string
  contact?: string
  detailLabel?: string
  detailValue?: string
  extraLabel?: string
  extraValue?: string
  submittedAt?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Section style={row}>
      <Text style={rowLabel}>{label}</Text>
      <Text style={rowValue}>{value}</Text>
    </Section>
  ) : null

const Email = ({
  source = 'Website',
  name = 'Unknown',
  organization,
  contact,
  detailLabel,
  detailValue,
  extraLabel,
  extraValue,
  submittedAt,
}: NewLeadNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New call request from ${name}${organization ? ` (${organization})` : ''}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={kicker}>{source}</Text>
        <Heading style={heading}>New call request</Heading>
        <Text style={intro}>Someone just asked to book a call with Rally.</Text>
        <Hr style={hr} />
        <Row label="Name" value={name} />
        {organization ? <Row label="Practice / Program" value={organization} /> : null}
        {contact ? <Row label="Contact" value={contact} /> : null}
        {detailValue ? <Row label={detailLabel || 'Detail'} value={detailValue} /> : null}
        {extraValue ? <Row label={extraLabel || 'Extra'} value={extraValue} /> : null}
        {submittedAt ? <Row label="Submitted" value={submittedAt} /> : null}
        <Hr style={hr} />
        <Text style={footer}>Reply to this person directly using the contact above.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `New call request: ${data['name'] || 'Website lead'}${
      data['organization'] ? ` — ${data['organization']}` : ''
    }`,
  displayName: 'New lead notification',
  to: 'hello@try-rally.com',
  previewData: {
    source: 'Rally — dental practices',
    name: 'Dr. Jane Miller',
    organization: 'Miller Orthodontics',
    contact: 'jane@millerortho.com',
    detailLabel: 'Practice size',
    detailValue: '3-6 people',
    extraLabel: 'Hardest part of the day',
    extraValue: 'New patient follow-up',
    submittedAt: 'Sep 1, 2026, 7:12 PM UTC',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '28px 28px 36px', maxWidth: '560px' }
const kicker = {
  fontSize: '12px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  color: '#8A8578',
  margin: '0 0 6px',
}
const heading = { fontSize: '24px', color: '#1A1A17', margin: '0 0 8px' }
const intro = { fontSize: '15px', color: '#4a4a45', margin: '0' }
const hr = { borderColor: '#e6e2d8', margin: '20px 0' }
const row = { margin: '0 0 14px' }
const rowLabel = {
  fontSize: '12px',
  color: '#8A8578',
  margin: '0 0 2px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
}
const rowValue = { fontSize: '16px', color: '#1A1A17', margin: '0' }
const footer = { fontSize: '13px', color: '#6B2332', margin: '0' }
