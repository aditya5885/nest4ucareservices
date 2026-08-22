import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck, Heart, MapPin, Sparkles } from 'lucide-react';
import { CONTACT } from '../../data/contact';
import { LogoInspiredCurves } from '../common/DecorativeShapes';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--cream)',
        paddingTop: 'clamp(2.5rem, 5vw, 5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 6rem)',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Brand SVG background shapes */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', pointerEvents: 'none' }}>
        <LogoInspiredCurves color="var(--primary-teal)" opacity={0.06} />
      </div>
      <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '350px', height: '350px', pointerEvents: 'none' }}>
        <LogoInspiredCurves color="var(--copper)" opacity={0.05} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <style>{`
          .hero-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
            gap: clamp(2rem, 4vw, 4.5rem);
            alignItems: center;
          }
          .hero-floating-card {
            position: absolute;
            bottom: -20px;
            left: 24px;
            background-color: var(--white);
            padding: 14px 20px;
            border-radius: 16px;
            box-shadow: 0 12px 28px rgba(20, 93, 92, 0.14);
            display: flex;
            align-items: center;
            gap: 12px;
            border: 1px solid rgba(20, 93, 92, 0.08);
          }
          @media (max-width: 640px) {
            .hero-floating-card {
              position: static;
              margin-top: 14px;
              width: 100%;
              padding: 12px 16px;
            }
          }
        `}</style>
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <div
              className="eyebrow"
              style={{
                backgroundColor: 'rgba(182, 106, 67, 0.1)',
                padding: '0.4rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.25rem',
                maxWidth: '100%'
              }}
            >
              <Sparkles size={15} style={{ color: 'var(--copper)', flexShrink: 0 }} />
              <span>COMPASSIONATE CARE • COMMUNITY • INDEPENDENCE</span>
            </div>

            {/* Main Heading */}
            <h1
              style={{
                color: 'var(--primary-teal)',
                fontSize: 'clamp(2rem, 4.2vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem'
              }}
            >
              Supporting You to <br />
              <span style={{ color: 'var(--copper)' }}>Live Life Your Way</span>
            </h1>

            {/* Supporting Text */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
                color: 'var(--charcoal-muted)',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '540px'
              }}
            >
              Person-centred care and support designed around your goals, independence, and everyday life in Caboolture and the Moreton Bay region.
            </p>

            {/* Hero CTAs */}
            <div
              className="btn-stack-mobile"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem'
              }}
            >
              <Link to="/services" className="btn btn-primary btn-lg">
                <span>Explore Our Services</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                <Phone size={18} />
                <span>Talk to Our Team</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(48, 53, 54, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(20, 93, 92, 0.1)',
                    color: 'var(--primary-teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary-teal)' }}>
                    Local Care Team
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--charcoal-muted)' }}>
                    22 Sims Street, Caboolture
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(182, 106, 67, 0.12)',
                    color: 'var(--copper)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Heart size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary-teal)' }}>
                    Person-Centred Care
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--charcoal-muted)' }}>
                    Dignity, Choice & Control
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            {/* Outer decorative halo border */}
            <div
              style={{
                position: 'relative',
                borderRadius: '28px',
                padding: 'clamp(6px, 2vw, 12px)',
                background: 'linear-gradient(135deg, rgba(20, 93, 92, 0.15) 0%, rgba(212, 154, 90, 0.2) 50%, rgba(182, 106, 67, 0.15) 100%)',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '4/3.2'
                }}
              >
                <img
                  src="/images/hero-elderly.jpg"
                  alt="Support worker providing compassionate in-home care"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Floating Reassurance Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="hero-floating-card"
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-teal)',
                    color: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--primary-teal)' }}>
                    Safety & Quality
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--charcoal-muted)' }}>
                    Trained & Dedicated Carers
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
