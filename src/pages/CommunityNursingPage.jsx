import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stethoscope, ShieldCheck, Heart, FileText, CheckCircle2, ArrowRight, Phone, Clock, Activity, Pill, Droplet, Utensils, HeartPulse, Sparkles, UserCheck } from 'lucide-react';
import { CONTACT } from '../data/contact';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/common/CTASection';

const NURSING_SERVICES = [
  {
    id: "01",
    icon: Pill,
    title: "Medication Management & Administration",
    desc: "Safe dispensing, scheduled administration, Webster-pak auditing, and proactive monitoring for side effects in strict compliance with medical prescriptions.",
    tags: ["Webster-Pak Audits", "Scheduled Dosing", "Doctor Liaison"],
    accentColor: "var(--primary-teal)",
    accentBg: "rgba(20, 93, 92, 0.08)"
  },
  {
    id: "02",
    icon: Activity,
    title: "Complex Wound Care & Dressing",
    desc: "Post-operative dressing, chronic ulcer management, pressure injury care, aseptic techniques, and documented healing progress reports.",
    tags: ["Aseptic Techniques", "Pressure Injury Care", "Healing Progress Logs"],
    accentColor: "var(--copper)",
    accentBg: "rgba(182, 106, 67, 0.09)"
  },
  {
    id: "03",
    icon: Droplet,
    title: "Catheter & Continence Nursing",
    desc: "Catheter changes, bag hygiene, blockage troubleshooting, and continuous infection monitoring for indwelling and suprapubic catheters.",
    tags: ["Indwelling & SPC", "Infection Prevention", "Hygiene Protocols"],
    accentColor: "var(--primary-teal)",
    accentBg: "rgba(20, 93, 92, 0.08)"
  },
  {
    id: "04",
    icon: Utensils,
    title: "Enteral Nutrition (PEG/NG) Oversight",
    desc: "Clinical monitoring of enteral feeding lines, stoma site health, flushing routines, infusion pumps, and prescribed formula management.",
    tags: ["PEG / NG Feeds", "Stoma Site Care", "Pump Calibration"],
    accentColor: "var(--copper)",
    accentBg: "rgba(182, 106, 67, 0.09)"
  },
  {
    id: "05",
    icon: HeartPulse,
    title: "Diabetes Care & Blood Glucose",
    desc: "Routine blood glucose testing, insulin administration, dietary observation, symptom logging, and direct coordination with endocrinologists and GPs.",
    tags: ["BGL Monitoring", "Insulin Admin", "Dietary Support"],
    accentColor: "var(--primary-teal)",
    accentBg: "rgba(20, 93, 92, 0.08)"
  },
  {
    id: "06",
    icon: Stethoscope,
    title: "Comprehensive Vital Sign Checks",
    desc: "Routine blood pressure, heart rate, oxygen saturation (SpO2), and temperature monitoring to detect clinical changes and health shifts early.",
    tags: ["BP & SpO2 Tracking", "Early Intervention", "Clinical Observation"],
    accentColor: "var(--copper)",
    accentBg: "rgba(182, 106, 67, 0.09)"
  }
];

export default function CommunityNursingPage() {
  return (
    <div id="main-content">
      {/* Centered Immersive Hero Section with Background Image */}
      <section
        style={{
          position: 'relative',
          backgroundImage: `linear-gradient(180deg, rgba(28, 102, 101, 0.6) 0%, rgba(20, 93, 92, 0.85) 50%, rgba(14, 68, 67, 0.95) 100%), url('/images/heroM.webp')`,
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
                  Community Nursing Care
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
              <span>COMPREHENSIVE CLINICAL NURSING CARE</span>
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
              Professional Clinical Nursing <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #E6B47C 0%, #D49A5A 50%, #CB7C53 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                In the Comfort of Home
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
              Compassionate, qualified nursing care delivered with precision, dignity, and clinical excellence. We support your complex health needs in your familiar home environment across Caboolture & Moreton Bay.
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
                to="/contact?service=Community%20Nursing%20Care"
                className="btn btn-copper btn-lg"
                style={{
                  boxShadow: '0 8px 24px rgba(182, 106, 67, 0.45)',
                  padding: '1rem 2rem',
                  fontSize: '1.05rem'
                }}
              >
                <span>Request Nursing Support</span>
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
                  <UserCheck size={20} />
                </div>
                <div>
                  <strong style={{ color: 'var(--white)', fontSize: '0.95rem', display: 'block', marginBottom: '2px' }}>
                    Qualified RNs & ENs
                  </strong>
                  <span style={{ color: 'rgba(255, 248, 238, 0.75)', fontSize: '0.8125rem', lineHeight: '1.4', display: 'block' }}>
                    AHPRA Registered & Insured
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
                  <Activity size={20} />
                </div>
                <div>
                  <strong style={{ color: 'var(--white)', fontSize: '0.95rem', display: 'block', marginBottom: '2px' }}>
                    Complex Care
                  </strong>
                  <span style={{ color: 'rgba(255, 248, 238, 0.75)', fontSize: '0.8125rem', lineHeight: '1.4', display: 'block' }}>
                    Wounds, PEG, Meds & Lines
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
                  <Clock size={20} />
                </div>
                <div>
                  <strong style={{ color: 'var(--white)', fontSize: '0.95rem', display: 'block', marginBottom: '2px' }}>
                    7-Day Home Visits
                  </strong>
                  <span style={{ color: 'rgba(255, 248, 238, 0.75)', fontSize: '0.8125rem', lineHeight: '1.4', display: 'block' }}>
                    Flexible Scheduled Care
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
                  <HeartPulse size={20} />
                </div>
                <div>
                  <strong style={{ color: 'var(--white)', fontSize: '0.95rem', display: 'block', marginBottom: '2px' }}>
                    GP Collaboration
                  </strong>
                  <span style={{ color: 'rgba(255, 248, 238, 0.75)', fontSize: '0.8125rem', lineHeight: '1.4', display: 'block' }}>
                    Continuous Care Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nursing Clinical Services Catalog */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle ambient background glow */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            backgroundColor: 'rgba(212, 154, 90, 0.06)',
            filter: 'blur(70px)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '-5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundColor: 'rgba(20, 93, 92, 0.05)',
            filter: 'blur(60px)',
            pointerEvents: 'none'
          }}
        />

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
              <Stethoscope size={15} />
              <span>CLINICAL CAPABILITIES & SPECIALISED PROCEDURES</span>
            </div>
            <h2 style={{ color: 'var(--primary-teal)', fontSize: 'clamp(1.45rem, 2.2vw, 2rem)', marginBottom: '1rem', lineHeight: '1.25' }}>
              Comprehensive In-Home Nursing Services
            </h2>
            <p style={{ color: 'var(--charcoal-muted)', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '680px', margin: '0 auto' }}>
              Delivered by registered and enrolled nurses dedicated to clinical precision, infection control, and empathetic one-on-one care across Caboolture & Moreton Bay.
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
            {NURSING_SERVICES.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
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
                    position: 'relative',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease'
                  }}
                >
                  <div>
                    {/* Top Row: Icon + Service Index Tag */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '14px',
                          backgroundColor: service.accentBg,
                          color: service.accentColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        <IconComponent size={26} strokeWidth={2.2} />
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-teal)', marginBottom: '0.75rem', lineHeight: '1.35', fontWeight: 700 }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                      {service.desc}
                    </p>

                    {/* Key Capability Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '0.5rem' }}>
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                            color: 'var(--charcoal)',
                            backgroundColor: 'var(--cream)',
                            border: '1px solid rgba(20, 93, 92, 0.06)',
                            padding: '0.25rem 0.65rem',
                            borderRadius: '6px'
                          }}
                        >
                          <CheckCircle2 size={13} style={{ color: service.accentColor, flexShrink: 0 }} />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(48, 53, 54, 0.06)' }}>
                    <Link
                      to={`/contact?service=Community%20Nursing%20Care&topic=${encodeURIComponent(service.title)}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: service.accentColor,
                        textDecoration: 'none',
                        transition: 'gap 0.2s ease'
                      }}
                    >
                      <span>Enquire about this care</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Clinical Governance & GP Collaboration */}
          <div
            style={{
              backgroundColor: 'var(--beige)',
              borderRadius: '24px',
              padding: 'clamp(1.25rem, 3.5vw, 3rem)',
              border: '1.5px solid rgba(20, 93, 92, 0.1)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="badge badge-copper" style={{ marginBottom: '1rem' }}>GP & SPECIALIST COLLABORATION</div>
              <h3 style={{ color: 'var(--primary-teal)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Seamless Continuity of Medical Care
              </h3>
              <p style={{ color: 'var(--charcoal)', lineHeight: '1.7', marginBottom: '1rem' }}>
                Our nurses work in ongoing communication with your general practitioner, hospital discharge teams, and allied health specialists.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--charcoal)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--copper)' }} /> Comprehensive medical records and documentation
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--charcoal)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--copper)' }} /> Prompt escalation for any clinical changes or anomalies
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--charcoal)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--copper)' }} /> Respectful education for participants and family carers
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--white)',
                padding: '2rem',
                borderRadius: '18px',
                border: '1px solid rgba(48, 53, 54, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <ShieldCheck size={26} style={{ color: 'var(--primary-teal)' }} />
                <h4 style={{ color: 'var(--primary-teal)', fontSize: '1.2rem', margin: 0 }}>
                  Nursing Practice Standards
                </h4>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--charcoal-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                All nursing interventions are carried out in full compliance with current Australian Nursing and Midwifery Board standards and documented participant health directives.
              </p>
              <Link to="/contact?service=Community%20Nursing" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Connect With Our Nursing Team</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Arrange Community Nursing Care in Caboolture"
        description="Our clinical team is ready to discuss your medical support needs and coordinate seamlessly with your medical practitioners."
      />
    </div>
  );
}
