import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { CONTACT } from '../data/contact';

export default function TermsConditions() {
  return (
    <div id="main-content">
      <section className="section-sm bg-cream" style={{ borderBottom: '1px solid rgba(20, 93, 92, 0.08)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
          <h1 style={{ color: 'var(--primary-teal)', marginBottom: '0.5rem' }}>Terms & Conditions</h1>
          <p style={{ color: 'var(--charcoal-muted)' }}>Last updated: August 2026</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-narrow">
          <div style={{ color: 'var(--charcoal)', lineHeight: '1.8', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Welcome to the Nest4U Care Services website ({CONTACT.domain}). By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 style={{ color: 'var(--primary-teal)', fontSize: '1.4rem' }}>1. General Information Only</h2>
            <p>
              The content provided on this website is for general informational and educational purposes. While we strive for accuracy, service availability, specific care procedures, and arrangements are confirmed through individual participant agreements and care plans.
            </p>

            <h2 style={{ color: 'var(--primary-teal)', fontSize: '1.4rem' }}>2. Intellectual Property</h2>
            <p>
              All branding, logos, graphics, text, and design elements on this website are the property of Nest4U Care Services and are protected by Australian intellectual property laws.
            </p>

            <h2 style={{ color: 'var(--primary-teal)', fontSize: '1.4rem' }}>3. Service Agreements</h2>
            <p>
              Formal delivery of disability support, SIL, community nursing, or high-intensity care is governed by individual Service Agreements established directly between Nest4U Care Services and the participant (or their authorized representative).
            </p>

            <h2 style={{ color: 'var(--primary-teal)', fontSize: '1.4rem' }}>4. Governing Law</h2>
            <p>
              These terms are governed by the laws of Queensland and the Commonwealth of Australia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
