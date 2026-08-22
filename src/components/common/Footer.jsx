import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, ArrowUp, Heart, ShieldCheck } from 'lucide-react';
import { CONTACT } from '../../data/contact';
import { SERVICES } from '../../data/services';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--primary-teal)',
        color: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative top border accent */}
      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold) 0%, var(--copper) 50%, var(--gold) 100%)' }} />

      {/* Main Footer Content */}
      <div className="container" style={{ paddingTop: 'clamp(2.75rem, 5vw, 4.5rem)', paddingBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: 'clamp(2rem, 3.5vw, 3rem)',
            marginBottom: '3rem'
          }}
        >
          {/* Column 1: Brand & Identity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link to="/" style={{ display: 'inline-block' }}>
              <img
                src="/logo.webp"
                alt="Nest4U Care Services"
                style={{
                  height: '96px',
                  width: 'auto',
                  maxWidth: '240px',
                  objectFit: 'contain',
                  backgroundColor: '#FFFFFF',
                  padding: '8px 16px',
                  borderRadius: '14px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
                }}
              />
            </Link>
            <p style={{ color: 'rgba(255, 248, 238, 0.85)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
              Nest4U Care Services provides compassionate, person-centred disability support, SIL, community nursing, and daily personal care designed around your dignity, goals, and independence.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-copper btn-sm"
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="btn btn-outline-white btn-sm"
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                <Phone size={16} />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/" style={{ color: 'rgba(255, 248, 238, 0.85)', textDecoration: 'none', fontSize: '0.9375rem' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'rgba(255, 248, 238, 0.85)', textDecoration: 'none', fontSize: '0.9375rem' }}>
                  About Us & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: 'rgba(255, 248, 238, 0.85)', textDecoration: 'none', fontSize: '0.9375rem' }}>
                  All Services Directory
                </Link>
              </li>
              <li>
                <Link to="/sil" style={{ color: 'rgba(255, 248, 238, 0.85)', textDecoration: 'none', fontSize: '0.9375rem' }}>
                  Supported Independent Living (SIL)
                </Link>
              </li>
              <li>
                <Link to="/community-nursing" style={{ color: 'rgba(255, 248, 238, 0.85)', textDecoration: 'none', fontSize: '0.9375rem' }}>
                  Community Nursing Care
                </Link>
              </li>
              <li>
                <Link to="/high-intensity-care" style={{ color: 'rgba(255, 248, 238, 0.85)', textDecoration: 'none', fontSize: '0.9375rem' }}>
                  High-Intensity Daily Activities
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: 'rgba(255, 248, 238, 0.85)', textDecoration: 'none', fontSize: '0.9375rem' }}>
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'rgba(255, 248, 238, 0.85)', textDecoration: 'none', fontSize: '0.9375rem' }}>
                  Contact & Referrals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Services */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Core Support Areas
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    style={{
                      color: 'rgba(255, 248, 238, 0.85)',
                      textDecoration: 'none',
                      fontSize: '0.925rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    <span style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>•</span>
                    <span>{service.shortTitle}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  style={{
                    color: 'var(--gold)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    marginTop: '0.25rem'
                  }}
                >
                  View All 13 Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Local Presence */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Location & Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9375rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--white)', display: 'block' }}>Nest4U Care Services</strong>
                  <span style={{ color: 'rgba(255, 248, 238, 0.85)' }}>{CONTACT.address}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <a href={`mailto:${CONTACT.email}`} style={{ color: 'rgba(255, 248, 238, 0.85)', textDecoration: 'none' }}>
                  {CONTACT.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <a href={`tel:${CONTACT.phoneRaw}`} style={{ color: 'rgba(255, 248, 238, 0.85)', textDecoration: 'none' }}>
                  {CONTACT.phoneDisplay}
                </a>
              </div>

              <div style={{ marginTop: '0.5rem', padding: '0.85rem', backgroundColor: 'rgba(0, 0, 0, 0.15)', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.8125rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '2px' }}>
                  Service Regions:
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'rgba(255, 248, 238, 0.8)' }}>
                  Caboolture, Moreton Bay, Brisbane North & Queensland
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Acknowledgement of Country */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.18)',
            borderRadius: '12px',
            marginBottom: '2.5rem',
            fontSize: '0.85rem',
            lineHeight: '1.55',
            color: 'rgba(255, 248, 238, 0.75)',
            borderLeft: '3px solid var(--copper)'
          }}
        >
          <strong style={{ color: 'var(--cream)', display: 'block', marginBottom: '4px' }}>
            Acknowledgement of Country
          </strong>
          Nest4U Care Services acknowledges the Traditional Custodians of the lands on which we live, work, and provide care across Caboolture and the Moreton Bay region. We pay our deep respects to Elders past, present, and emerging.
        </div>

        {/* Bottom Bar: Copyright, Legal & Back to Top */}
        <div
          style={{
            paddingTop: '1.75rem',
            borderTop: '1px solid rgba(255, 248, 238, 0.15)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.875rem',
            color: 'rgba(255, 248, 238, 0.7)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Nest4U Care Services. All rights reserved. | {CONTACT.domain}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/privacy" style={{ color: 'rgba(255, 248, 238, 0.7)', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={{ color: 'rgba(255, 248, 238, 0.7)', textDecoration: 'none' }}>
              Terms & Conditions
            </Link>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'var(--cream)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
