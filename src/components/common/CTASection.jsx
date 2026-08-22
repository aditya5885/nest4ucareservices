import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, HeartHandshake, ShieldCheck } from 'lucide-react';
import { CONTACT } from '../../data/contact';

export default function CTASection({
  title = "Ready to Discuss Your Support Needs?",
  description = "Whether you are exploring options for yourself or a loved one, our friendly team is here to listen, guide, and support you every step of the way.",
  showContactButtons = true
}) {
  return (
    <section
      className="section"
      style={{
        background: 'linear-gradient(135deg, #9C552F 0%, #B66A43 45%, #8A431F 100%)',
        color: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Decorative Rings */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-120px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '2px dashed rgba(255, 248, 238, 0.25)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          backgroundColor: 'rgba(212, 154, 90, 0.25)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}
        >
          {/* Eyebrow */}
          <div
            className="eyebrow"
            style={{
              color: 'var(--cream)',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.22)',
              padding: '0.45rem 1.3rem',
              borderRadius: 'var(--radius-full)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <HeartHandshake size={16} style={{ color: 'var(--gold-light)' }} />
            <span>Serving Caboolture & Moreton Bay</span>
          </div>

          <h2 style={{ color: 'var(--white)', fontSize: 'clamp(1.5rem, 2.4vw, 2.15rem)', lineHeight: '1.25' }}>
            {title}
          </h2>

          <p style={{ color: 'rgba(255, 248, 238, 0.95)', fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '680px' }}>
            {description}
          </p>

          {/* Quick reassurance pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.25rem',
              margin: '0.5rem 0 1rem 0'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.925rem', color: 'var(--cream)', fontWeight: 500 }}>
              <ShieldCheck size={17} style={{ color: 'var(--gold-light)' }} />
              <span>Person-Centred & Dignified</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.925rem', color: 'var(--cream)', fontWeight: 500 }}>
              <ShieldCheck size={17} style={{ color: 'var(--gold-light)' }} />
              <span>Local Caboolture Team</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.925rem', color: 'var(--cream)', fontWeight: 500 }}>
              <ShieldCheck size={17} style={{ color: 'var(--gold-light)' }} />
              <span>Tailored To Your Goals</span>
            </div>
          </div>

          {showContactButtons && (
            <div className="btn-stack-mobile" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link
                to="/contact"
                className="btn btn-primary btn-lg"
                style={{
                  backgroundColor: 'var(--primary-teal)',
                  borderColor: 'var(--primary-teal)',
                  color: 'var(--white)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)'
                }}
              >
                <span>Request Support</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="btn btn-white btn-lg"
                style={{
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
                }}
              >
                <Phone size={18} />
                <span>Contact Us Today</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
