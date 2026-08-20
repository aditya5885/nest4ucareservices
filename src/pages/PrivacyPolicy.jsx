import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { CONTACT } from '../data/contact';

export default function PrivacyPolicy() {
  return (
    <div id="main-content">
      <section className="section-sm bg-cream" style={{ borderBottom: '1px solid rgba(20, 93, 92, 0.08)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 style={{ color: 'var(--primary-teal)', marginBottom: '0.5rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--charcoal-muted)' }}>Last updated: August 2026</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-narrow">
          <div style={{ color: 'var(--charcoal)', lineHeight: '1.8', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Nest4U Care Services (referred to as "we", "us", or "our") is dedicated to protecting the privacy, confidentiality, and personal dignity of all participants, family members, carers, and website visitors in accordance with the Australian Privacy Principles (APPs) and the Privacy Act 1988 (Cth).
            </p>

            <h2 style={{ color: 'var(--primary-teal)', fontSize: '1.4rem' }}>1. Information We Collect</h2>
            <p>
              We collect information reasonably necessary to provide person-centred disability support, supported independent living, and nursing services. This may include your name, contact details (phone, email, residential address), health and care support requirements, emergency contact information, and relevant support funding details.
            </p>

            <h2 style={{ color: 'var(--primary-teal)', fontSize: '1.4rem' }}>2. How We Use Your Information</h2>
            <p>
              Your information is used strictly to:
            </p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Deliver safe, tailored, and individualized care services;</li>
              <li>Coordinate support with your authorized healthcare team and family;</li>
              <li>Respond to your direct enquiries and support requests;</li>
              <li>Comply with applicable legal, regulatory, and quality assurance obligations.</li>
            </ul>

            <h2 style={{ color: 'var(--primary-teal)', fontSize: '1.4rem' }}>3. Confidentiality and Data Security</h2>
            <p>
              We maintain strict technical and administrative safeguards to protect your personal and sensitive health records from unauthorized access, loss, or disclosure. Information is accessible only by authorized personnel directly involved in your care planning and delivery.
            </p>

            <h2 style={{ color: 'var(--primary-teal)', fontSize: '1.4rem' }}>4. Contacting Our Privacy Officer</h2>
            <p>
              If you have any questions, feedback, or wish to request access to your personal records, please contact our team at:
            </p>
            <p style={{ backgroundColor: 'var(--cream)', padding: '1rem 1.5rem', borderRadius: '10px' }}>
              <strong>Nest4U Care Services</strong><br />
              Address: {CONTACT.address}<br />
              Email: {CONTACT.email}<br />
              Website: {CONTACT.domain}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
