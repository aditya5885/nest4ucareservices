import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Compass, Phone, MessageSquare } from 'lucide-react';
import { CONTACT } from '../../data/contact';
import SectionHeading from '../common/SectionHeading';

export default function LocalCommunity() {
  return (
    <section className="section bg-cream">
      <div className="container">
        <SectionHeading
          eyebrow="SERVING OUR COMMUNITY"
          title="Proudly Based in Caboolture, Queensland"
          description="We are passionate about creating strong local connections throughout Caboolture and the Moreton Bay region. We welcome you to reach out and speak directly with our team."
        />

        <div
          style={{
            backgroundColor: 'var(--white)',
            borderRadius: '24px',
            border: '1.5px solid rgba(20, 93, 92, 0.1)',
            padding: 'clamp(2rem, 3.5vw, 3rem)',
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Location details */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--primary-teal)',
                  color: 'var(--white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <MapPin size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-teal)', margin: 0 }}>
                  Caboolture Headquarters
                </h3>
                <span style={{ fontSize: '0.875rem', color: 'var(--copper)', fontWeight: 600 }}>
                  22 Sims Street, Caboolture, QLD 4510
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--charcoal-muted)', fontSize: '0.975rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              Our team operates across Moreton Bay, providing mobile in-home care, SIL accommodation support, nursing, and community transport directly where you need it most.
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-teal)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Key Regions We Support:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {CONTACT.serviceAreas.map((area, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: 'var(--cream)',
                      color: 'var(--charcoal)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      border: '1px solid rgba(20, 93, 92, 0.08)'
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
              <Link to="/contact" className="btn btn-primary btn-sm">
                <Navigation size={16} />
                <span>Contact Local Team</span>
              </Link>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <Compass size={16} />
                <span>View on Map</span>
              </a>
            </div>
          </div>

          {/* Location Map Preview card */}
          <div
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(48, 53, 54, 0.1)',
              boxShadow: 'var(--shadow-sm)',
              height: '320px',
              position: 'relative'
            }}
          >
            <iframe
              title="Nest4U Care Services Caboolture Location"
              src={CONTACT.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
