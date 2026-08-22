import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ShieldCheck, Heart, Users, Clock, Sparkles, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { CONTACT } from '../data/contact';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/common/CTASection';

const SIL_PILLARS = [
  {
    id: "01",
    icon: Clock,
    title: "24/7 Dedicated On-Site Support",
    desc: "Assistance available around the clock, including daytime guidance, evening relaxation routines, and active night or sleepover care.",
    tags: ["24/7 On-Call", "Active Night Support", "Sleepover Carers"],
    accentColor: "var(--primary-teal)",
    accentBg: "rgba(20, 93, 92, 0.08)"
  },
  {
    id: "02",
    icon: Sparkles,
    title: "Daily Living & Life Skills",
    desc: "Coaching and hands-on guidance with meal planning, grocery shopping, cooking, laundry, and personal budgeting skills.",
    tags: ["Cooking Coaching", "Budgeting Help", "Home Care Skills"],
    accentColor: "var(--copper)",
    accentBg: "rgba(182, 106, 67, 0.09)"
  },
  {
    id: "03",
    icon: Users,
    title: "Social Harmony & Companionship",
    desc: "Enjoying the warm companionship of compatible housemates while maintaining complete privacy and freedom in your personal bedroom.",
    tags: ["Compatibility Matching", "Private Bedroom", "Shared Outings"],
    accentColor: "var(--primary-teal)",
    accentBg: "rgba(20, 93, 92, 0.08)"
  },
  {
    id: "04",
    icon: Heart,
    title: "Choice, Control & Personal Routines",
    desc: "You decide your bedtime, your favourite meals, your weekend plans, and who enters your personal living sanctuary.",
    tags: ["Goal-Driven Plans", "Personal Dignity", "Custom Routine"],
    accentColor: "var(--copper)",
    accentBg: "rgba(182, 106, 67, 0.09)"
  }
];

export default function SILPage() {
  return (
    <div id="main-content">
      {/* Centered Immersive Hero Section with Background Image */}
      <section
        style={{
          position: 'relative',
          backgroundImage: `linear-gradient(180deg, rgba(14, 68, 67, 0.90) 0%, rgba(20, 93, 92, 0.85) 50%, rgba(14, 68, 67, 0.95) 100%), url('/images/caregiver-support.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--cream)',
          paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
          paddingBottom: 'clamp(4rem, 6vw, 6rem)',
          overflow: 'hidden'
        }}
      >
        {/* Ambient Decorative Lighting Elements */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '350px',
            borderRadius: '50%',
            backgroundColor: 'rgba(212, 154, 90, 0.18)',
            filter: 'blur(90px)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            right: '10%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            backgroundColor: 'rgba(45, 119, 116, 0.4)',
            filter: 'blur(80px)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Centered Breadcrumbs */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
            <nav aria-label="Breadcrumb">
              <ol
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  listStyle: "none",
                  padding: "0.45rem 1.25rem",
                  margin: 0,
                  fontSize: "0.875rem",
                  backgroundColor: "rgba(0, 0, 0, 0.28)",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(8px)"
                }}
              >
                <li>
                  <Link to="/" style={{ color: 'rgba(255, 248, 238, 0.85)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                    Home
                  </Link>
                </li>
                <li style={{ color: 'rgba(255, 248, 238, 0.45)' }}>/</li>
                <li>
                  <Link to="/services" style={{ color: 'rgba(255, 248, 238, 0.85)', textDecoration: 'none' }}>
                    Services
                  </Link>
                </li>
                <li style={{ color: 'rgba(255, 248, 238, 0.45)' }}>/</li>
                <li style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
                  Supported Independent Living (SIL)
                </li>
              </ol>
            </nav>
          </div>

          {/* Centered Main Content */}
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem'
            }}
          >
            {/* Pill Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(212, 154, 90, 0.2)',
                color: 'var(--gold-light)',
                padding: '0.45rem 1.3rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                border: '1px solid rgba(212, 154, 90, 0.35)',
                backdropFilter: 'blur(6px)'
              }}
            >
              <ShieldCheck size={16} />
              <span>SUPPORTED INDEPENDENT LIVING (SIL)</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                color: 'var(--white)',
                fontSize: 'clamp(1.85rem, 3.2vw, 2.65rem)',
                lineHeight: '1.2',
                fontWeight: 800,
                margin: '0.25rem 0'
              }}
            >
              Your Home, Your Choices, <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #E6B47C 0%, #D49A5A 50%, #CB7C53 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Your Independence
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                color: 'rgba(255, 248, 238, 0.92)',
                lineHeight: '1.75',
                maxWidth: '740px',
                margin: '0 auto 0.5rem auto'
              }}
            >
              Supported Independent Living (SIL) provides the freedom of living in a warm, welcoming home with dedicated 24/7 support tailored to your daily goals, routines, and lifestyle across Caboolture & Moreton Bay.
            </p>

            {/* Centered Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '0.5rem',
                marginBottom: '2.5rem'
              }}
            >
              <Link
                to="/contact?service=Supported%20Independent%20Living%20(SIL)"
                className="btn btn-copper btn-lg"
                style={{
                  boxShadow: '0 8px 24px rgba(182, 106, 67, 0.45)',
                  padding: '1rem 2rem',
                  fontSize: '1.05rem'
                }}
              >
                <span>Enquire About SIL Vacancies</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="btn btn-white btn-lg"
                style={{
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                  padding: '1rem 2rem',
                  fontSize: '1.05rem'
                }}
              >
                <Phone size={18} />
                <span>Call {CONTACT.phoneDisplay}</span>
              </a>
            </div>

            {/* Floating Glassmorphic Trust Grid (4 Columns) */}
            <div
              style={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                gap: '1rem',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(212, 154, 90, 0.25)',
                    color: 'var(--gold-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Clock size={20} />
                </div>
                <div>
                  <strong style={{ color: 'var(--white)', fontSize: '0.95rem', display: 'block', marginBottom: '2px' }}>
                    24/7 On-Site Care
                  </strong>
                  <span style={{ color: 'rgba(255, 248, 238, 0.75)', fontSize: '0.8125rem', lineHeight: '1.4', display: 'block' }}>
                    Day, Evening & Active Nights
                  </span>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(212, 154, 90, 0.25)',
                    color: 'var(--gold-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Sparkles size={20} />
                </div>
                <div>
                  <strong style={{ color: 'var(--white)', fontSize: '0.95rem', display: 'block', marginBottom: '2px' }}>
                    Daily Life Skills
                  </strong>
                  <span style={{ color: 'rgba(255, 248, 238, 0.75)', fontSize: '0.8125rem', lineHeight: '1.4', display: 'block' }}>
                    Cooking, Budgeting & Hygiene
                  </span>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(212, 154, 90, 0.25)',
                    color: 'var(--gold-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Users size={20} />
                </div>
                <div>
                  <strong style={{ color: 'var(--white)', fontSize: '0.95rem', display: 'block', marginBottom: '2px' }}>
                    Social Harmony
                  </strong>
                  <span style={{ color: 'rgba(255, 248, 238, 0.75)', fontSize: '0.8125rem', lineHeight: '1.4', display: 'block' }}>
                    Matched Housemates & Privacy
                  </span>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(212, 154, 90, 0.25)',
                    color: 'var(--gold-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Heart size={20} />
                </div>
                <div>
                  <strong style={{ color: 'var(--white)', fontSize: '0.95rem', display: 'block', marginBottom: '2px' }}>
                    Choice & Control
                  </strong>
                  <span style={{ color: 'rgba(255, 248, 238, 0.75)', fontSize: '0.8125rem', lineHeight: '1.4', display: 'block' }}>
                    Your Routines & Independence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of SIL Living */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <div
              className="eyebrow"
              style={{
                justifyContent: 'center',
                backgroundColor: 'rgba(182, 106, 67, 0.08)',
                color: 'var(--copper)',
                display: 'inline-flex',
                padding: '0.4rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1rem',
                gap: '0.45rem'
              }}
            >
              <Home size={15} />
              <span>A PLACE TO CALL HOME</span>
            </div>
            <h2 style={{ color: 'var(--primary-teal)', fontSize: 'clamp(1.45rem, 2.2vw, 2rem)', marginBottom: '1rem', lineHeight: '1.25' }}>
              Core Foundations of Our SIL Support
            </h2>
            <p style={{ color: 'var(--charcoal-muted)', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '680px', margin: '0 auto' }}>
              We believe a home is a sanctuary where you feel safe, valued, and empowered to grow every single day with dedicated 24/7 assistance.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.5rem',
              marginBottom: '4.5rem'
            }}
          >
            {SIL_PILLARS.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: '20px',
                    border: '1.5px solid rgba(20, 93, 92, 0.08)',
                    padding: 'clamp(1.25rem, 3vw, 2rem)',
                    boxShadow: '0 4px 24px rgba(20, 93, 92, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1.25rem',
                    position: 'relative'
                  }}
                >
                  <div>
                    {/* Top Row: Icon + Focus Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '14px',
                          backgroundColor: pillar.accentBg,
                          color: pillar.accentColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        <IconComponent size={26} strokeWidth={2.2} />
                      </div>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: pillar.accentColor,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          backgroundColor: pillar.accentBg,
                          padding: '0.35rem 0.75rem',
                          borderRadius: 'var(--radius-full)'
                        }}
                      >
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-teal)', marginBottom: '0.75rem', lineHeight: '1.3', fontWeight: 700 }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                      {pillar.desc}
                    </p>

                    {/* Feature bullet list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      {pillar.features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--charcoal)' }}>
                          <CheckCircle2 size={16} style={{ color: pillar.accentColor, flexShrink: 0, marginTop: '3px' }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(48, 53, 54, 0.06)' }}>
                    <Link
                      to={`/contact?service=Supported%20Independent%20Living&topic=${encodeURIComponent(pillar.title)}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: pillar.accentColor,
                        textDecoration: 'none',
                        transition: 'gap 0.2s ease'
                      }}
                    >
                      <span>Enquire about this support</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Daily Life in a Nest4U Home */}
          <div
            style={{
              backgroundColor: 'var(--cream)',
              borderRadius: '24px',
              padding: 'clamp(1.25rem, 4vw, 3.5rem)',
              border: '1.5px solid rgba(20, 93, 92, 0.1)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(1.75rem, 3.5vw, 3rem)',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="badge badge-copper" style={{ marginBottom: '1rem' }}>DAILY ROUTINES</div>
              <h3 style={{ color: 'var(--primary-teal)', fontSize: '1.6rem', marginBottom: '1rem' }}>
                Everyday Support Tailored to You
              </h3>
              <p style={{ color: 'var(--charcoal)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                From morning breakfast routines to evening relaxation, our support team is there to assist with personal care, medication prompting, household chores, and cooking wholesome meals.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--charcoal)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--copper)' }} /> Tailored meal planning and cooking assistance
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--charcoal)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--copper)' }} /> Assistance with personal hygiene & morning preparation
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--charcoal)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--copper)' }} /> Community outings, shopping trips & family visits
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--charcoal)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--copper)' }} /> Overnight active or sleepover support for safety
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--white)',
                padding: '2rem',
                borderRadius: '18px',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(48, 53, 54, 0.08)'
              }}
            >
              <h4 style={{ color: 'var(--primary-teal)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                How to Apply for SIL Support
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Whether you currently have SIL funding in your plan or are exploring an upcoming transition, we are here to assist you through the compatibility and onboarding process.
              </p>
              <Link to="/contact?service=SIL" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Enquire About SIL Today</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Looking for a Supported Living Home in Moreton Bay?"
        description="Connect with our accommodation team in Caboolture to discuss upcoming vacancies and suitability matching."
      />
    </div>
  );
}
