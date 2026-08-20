import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, UserCheck, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { LogoInspiredCurves } from '../common/DecorativeShapes';

const PILLARS = [
  {
    icon: Heart,
    title: 'Compassion & Warmth',
    tagline: 'Care delivered with genuine human kindness and empathy.',
    desc: 'We treat your home with profound respect, ensuring every interaction feels gentle, welcoming, and comforting for you and your family.'
  },
  {
    icon: UserCheck,
    title: 'Dignity & Choice',
    tagline: 'You stay in complete control of your life and decisions.',
    desc: 'From your morning schedule to your evening routines, your preferences guide how, when, and by whom support is delivered.'
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Clinical Quality',
    tagline: 'Rigorous safety standards and competent support staff.',
    desc: 'Whether assisting with daily hygiene or complex high-intensity clinical procedures, our team adheres to strict health and safety protocols.'
  },
  {
    icon: Sparkles,
    title: 'Fostering Real Independence',
    tagline: 'Building capacity and confidence for lifelong autonomy.',
    desc: 'We assist with what you need while actively coaching and empowering you to master daily life skills and explore your community.'
  }
];

export default function IntroTrust() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="section bg-white" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background subtle curve */}
      <div style={{ position: 'absolute', top: '-120px', left: '-100px', width: '450px', height: '450px', pointerEvents: 'none' }}>
        <LogoInspiredCurves color="var(--primary-teal)" opacity={0.04} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          eyebrow="OUR PHILOSOPHY"
          title="Care Built Around What Matters Most to You"
          description="At Nest4U Care Services, we believe quality support is rooted in trust, genuine connection, and deep respect for individual autonomy. We are here to help you live safely, comfortably, and independently in your community."
        />

        {/* Dynamic Split Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
            marginTop: '1rem'
          }}
        >
          {/* Left Column: Visual Showcase & Floating Reassurance */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '8px solid var(--cream)',
                aspectRatio: '4/3.4'
              }}
            >
              <img
                src="/images/careh.webp"
                alt="Support worker and participant having a friendly, respectful care interaction"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(20, 93, 92, 0.75) 100%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '24px',
                  right: '24px',
                  color: 'var(--white)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--white)', marginBottom: '4px' }}>
                  Person-Centred Care First
                </div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255, 248, 238, 0.9)' }}>
                  Listening first, understanding your goals, and providing support tailored to your journey.
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div
              style={{
                backgroundColor: 'var(--white)',
                padding: '16px 20px',
                borderRadius: '16px',
                boxShadow: '0 12px 30px rgba(20, 93, 92, 0.12)',
                border: '1.5px solid rgba(20, 93, 92, 0.1)',
                marginTop: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(182, 106, 67, 0.15)',
                    color: 'var(--copper)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.925rem', color: 'var(--primary-teal)' }}>
                    Local Caboolture Care Team
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--charcoal-muted)' }}>
                    Serving Moreton Bay & surrounding QLD
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--copper)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                <span>About Us</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Interconnected Feature Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activePillar === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  onClick={() => setActivePillar(idx)}
                  style={{
                    backgroundColor: isActive ? 'var(--cream)' : 'var(--off-white)',
                    borderRadius: '18px',
                    padding: '1.35rem 1.5rem',
                    border: '1.5px solid',
                    borderColor: isActive ? 'rgba(182, 106, 67, 0.4)' : 'rgba(48, 53, 54, 0.08)',
                    boxShadow: isActive ? '0 8px 24px rgba(20, 93, 92, 0.08)' : 'var(--shadow-xs)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: isActive ? 'var(--primary-teal)' : 'rgba(20, 93, 92, 0.1)',
                      color: isActive ? 'var(--white)' : 'var(--primary-teal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-teal)', margin: 0 }}>
                        {pillar.title}
                      </h3>
                      {isActive && (
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: 'var(--copper)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          Core Pillar
                        </span>
                      )}
                    </div>

                    <p style={{ fontSize: '0.9rem', color: 'var(--copper-dark)', fontWeight: 600, marginBottom: '0.4rem', lineHeight: '1.4' }}>
                      {pillar.tagline}
                    </p>

                    <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-muted)', margin: 0, lineHeight: '1.6' }}>
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
