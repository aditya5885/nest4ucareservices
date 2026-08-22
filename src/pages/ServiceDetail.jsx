import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Heart,
  Users,
  AlertCircle,
  HelpCircle,
  Calendar
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { CONTACT } from '../data/contact';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/common/CTASection';

const CATEGORY_LABELS = {
  'daily-living': 'Daily Living & Home',
  'community-social': 'Community & Social',
  'clinical-specialised': 'Clinical & Specialised Support',
  'capacity-employment': 'Employment & Capacity Building'
};

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const categoryLabel = CATEGORY_LABELS[service.category] || 'Care Service';

  return (
    <div id="main-content">
      {/* Top Breadcrumb & Hero */}
      <section className="section-sm bg-cream" style={{ borderBottom: '1px solid rgba(20, 93, 92, 0.08)' }}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Services', to: '/services' },
              { label: service.shortTitle || service.title }
            ]}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3rem)',
              alignItems: 'center'
            }}
          >
            {/* Left: Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span
                  className="badge"
                  style={{
                    backgroundColor: service.isHighIntensity ? 'rgba(182, 106, 67, 0.15)' : 'rgba(20, 93, 92, 0.1)',
                    color: service.isHighIntensity ? 'var(--copper)' : 'var(--primary-teal)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}
                >
                  {service.isHighIntensity ? 'SPECIALISED CLINICAL CARE' : categoryLabel.toUpperCase()}
                </span>

                {service.isHighIntensity && (
                  <span className="badge badge-copper">CLINICAL DIRECTIVE</span>
                )}
              </div>

              <h1 style={{ color: 'var(--primary-teal)', marginBottom: '1rem', fontSize: 'clamp(1.6rem, 2.4vw, 2.25rem)' }}>
                {service.title}
              </h1>

              <p style={{ fontSize: '1.2rem', color: 'var(--copper)', fontWeight: 600, marginBottom: '1.25rem', lineHeight: '1.4' }}>
                {service.tagline}
              </p>

              <p style={{ fontSize: '1.05rem', color: 'var(--charcoal-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
                {service.overview}
              </p>

              <div className="btn-stack-mobile" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="btn btn-primary btn-lg">
                  <span>Enquire About This Service</span>
                  <ArrowRight size={18} />
                </Link>
                <a href={`tel:${CONTACT.phoneRaw}`} className="btn btn-secondary btn-lg">
                  <Phone size={18} />
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right: Featured Hero Image */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: 'clamp(4px, 1.5vw, 6px) solid var(--white)',
                  aspectRatio: '4/3'
                }}
              >
                <img
                  src={service.heroImage}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="section bg-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)'
            }}
          >
            {/* Left Column: What It Involves & How We Support */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* What the service involves */}
              <div>
                <h2 style={{ color: 'var(--primary-teal)', fontSize: '1.75rem', marginBottom: '1.25rem' }}>
                  What This Support Involves
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {service.whatInvolves.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.85rem',
                        padding: '1rem 1.25rem',
                        backgroundColor: 'var(--cream)',
                        borderRadius: '12px',
                        border: '1px solid rgba(20, 93, 92, 0.08)'
                      }}
                    >
                      <CheckCircle2 size={20} style={{ color: 'var(--primary-teal)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'var(--charcoal)', fontSize: '0.975rem', lineHeight: '1.55' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialised Areas if High Intensity */}
              {service.specialisedAreas && (
                <div>
                  <h3 style={{ color: 'var(--primary-teal)', fontSize: '1.5rem', marginBottom: '1.25rem' }}>
                    Specific Clinical &amp; High-Intensity Procedures Managed
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.25rem' }}>
                    {service.specialisedAreas.map((area, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: 'var(--white)',
                          padding: '1.25rem',
                          borderRadius: '14px',
                          border: '1.5px solid rgba(182, 106, 67, 0.2)',
                          boxShadow: 'var(--shadow-xs)'
                        }}
                      >
                        <h4 style={{ color: 'var(--copper)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                          {area.title}
                        </h4>
                        <p style={{ fontSize: '0.875rem', color: 'var(--charcoal-muted)', margin: 0, lineHeight: '1.55' }}>
                          {area.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* How Nest4U Supports Participants */}
              <div>
                <h2 style={{ color: 'var(--primary-teal)', fontSize: '1.75rem', marginBottom: '1rem' }}>
                  How Nest4U Delivers This Care
                </h2>
                <p style={{ color: 'var(--charcoal)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                  {service.howWeSupport}
                </p>
                <p style={{ color: 'var(--charcoal-muted)', fontSize: '0.975rem', lineHeight: '1.65' }}>
                  We emphasize transparent communication with your family, support coordinators, and healthcare professionals to ensure your support runs seamlessly day in and day out.
                </p>
              </div>
            </div>

            {/* Right Column: Benefits, Who It's For & Disclaimers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Benefits Card */}
              <div
                className="card"
                style={{
                  backgroundColor: 'var(--cream)',
                  border: '1.5px solid rgba(20, 93, 92, 0.1)'
                }}
              >
                <h3 style={{ color: 'var(--primary-teal)', fontSize: '1.35rem', marginBottom: '1.25rem' }}>
                  Key Benefits & Outcomes
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--copper)', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.9375rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who This May Suit */}
              <div
                className="card"
                style={{
                  backgroundColor: 'var(--white)',
                  border: '1.5px solid rgba(48, 53, 54, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                  <Users size={22} style={{ color: 'var(--primary-teal)' }} />
                  <h3 style={{ color: 'var(--primary-teal)', fontSize: '1.25rem', margin: 0 }}>
                    Who This Service May Suit
                  </h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', lineHeight: '1.65', margin: 0 }}>
                  {service.whoSuits}
                </p>
              </div>

              {/* Safety & Compliance Notice */}
              <div
                style={{
                  backgroundColor: 'var(--beige)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '16px',
                  borderLeft: '4px solid var(--copper)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem'
                }}
              >
                <ShieldCheck size={22} style={{ color: 'var(--copper)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: 'var(--charcoal)', display: 'block', marginBottom: '4px', fontSize: '0.9rem' }}>
                    Compliance & Safety Guarantee
                  </strong>
                  <p style={{ fontSize: '0.85rem', color: 'var(--charcoal-muted)', margin: 0, lineHeight: '1.5' }}>
                    {service.disclaimer}
                  </p>
                </div>
              </div>

              {/* Quick Request Support Helper Card */}
              <div
                style={{
                  backgroundColor: 'var(--primary-teal)',
                  color: 'var(--cream)',
                  padding: '1.75rem',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <h4 style={{ color: 'var(--white)', fontSize: '1.2rem', margin: 0 }}>
                  Discuss Your Support Options
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255, 248, 238, 0.85)', margin: 0, lineHeight: '1.5' }}>
                  Have questions about this support service or want to check availability in Caboolture or Moreton Bay?
                </p>
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="btn btn-copper btn-sm"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                >
                  <span>Submit Service Enquiry</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Ready to Get Started with ${service.shortTitle}?`}
        description="Our compassionate Caboolture care coordinators are here to listen, answer your questions, and guide you every step of the way."
      />
    </div>
  );
}
