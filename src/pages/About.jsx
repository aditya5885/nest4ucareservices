import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, UserCheck, Sparkles, MapPin, Users, Award, CheckCircle2, ArrowRight, Clock, Activity, MessageSquare } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/common/CTASection';
import { CARE_PILLARS } from '../data/testimonials';
import { CONTACT } from '../data/contact';

export default function About() {
  return (
    <div id="main-content">
      {/* Header Banner */}
      <section className="section-sm bg-cream" style={{ borderBottom: '1px solid rgba(20, 93, 92, 0.08)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <div style={{ maxWidth: '800px' }}>
            <div className="badge badge-copper" style={{ marginBottom: '1rem' }}>
              OUR MISSION & STORY
            </div>
            <h1 style={{ color: 'var(--primary-teal)', marginBottom: '1.25rem' }}>
              Nurturing Independence, Dignity, and Warmth in Every Home
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--charcoal-muted)', lineHeight: '1.7' }}>
              Nest4U Care Services is a dedicated disability and community care provider headquartered in Caboolture, Queensland. We exist to provide authentic, person-centred support that empowers individuals to live life on their own terms.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Who We Are & Story */}
      <section className="section bg-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="eyebrow">WHO WE ARE</div>
              <h2 style={{ color: 'var(--primary-teal)', marginBottom: '1.25rem', fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)' }}>
                Care Shaped Around Your Life, Not Our Routine
              </h2>
              <p style={{ color: 'var(--charcoal)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                We established Nest4U Care Services with a simple yet profound belief: every person deserves support that honours their dignity, celebrates their individuality, and nurtures their independence.
              </p>
              <p style={{ color: 'var(--charcoal-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Whether providing high-intensity clinical care, supporting someone in their first shared living arrangement (SIL), or joining a participant for a weekend community outing across Moreton Bay, we bring warmth, empathy, and uncompromising safety standards to everything we do.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--copper)' }} />
                  <span style={{ fontWeight: 600, color: 'var(--charcoal)' }}>Local Caboolture team with deep Moreton Bay community roots</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--copper)' }} />
                  <span style={{ fontWeight: 600, color: 'var(--charcoal)' }}>Carefully matched support workers sharing your values and interests</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--copper)' }} />
                  <span style={{ fontWeight: 600, color: 'var(--charcoal)' }}>Strict clinical governance and safety compliance protocols</span>
                </div>
              </div>

              <Link to="/contact" className="btn btn-primary">
                <span>Speak With Our Team</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-xl)',
                  border: '8px solid var(--cream)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=80"
                  alt="Support worker and participant having a friendly, engaging conversation"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Core Values */}
      <section className="section bg-cream">
        <div className="container">
          <SectionHeading
            eyebrow="OUR VALUES"
            title="The Principles That Guide Our Care"
            description="Our core values are more than words on a page—they are the standards we uphold in every home visit, phone call, and care interaction."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem'
            }}
          >
            {(() => {
              const ICON_MAP = {
                Heart: Heart,
                ShieldCheck: ShieldCheck,
                Sparkles: Sparkles,
                Users: Users
              };
              return CARE_PILLARS.map((pillar, idx) => {
                const IconComponent = ICON_MAP[pillar.icon] || Sparkles;
                const accentColor = idx % 2 === 0 ? 'var(--primary-teal)' : 'var(--copper)';
                const accentBg = idx % 2 === 0 ? 'rgba(20, 93, 92, 0.08)' : 'rgba(182, 106, 67, 0.09)';
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      backgroundColor: 'var(--white)',
                      borderRadius: '20px',
                      border: '1.5px solid rgba(20, 93, 92, 0.08)',
                      padding: '2rem 1.75rem',
                      boxShadow: '0 4px 20px rgba(20, 93, 92, 0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.25rem',
                      transition: 'border-color 0.25s ease, box-shadow 0.25s ease'
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: accentBg,
                        color: accentColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComponent size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-teal)', fontWeight: 700, margin: 0 }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', lineHeight: '1.65', margin: 0 }}>
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* Section 3: Why Families Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="FAMILY PERSPECTIVE"
            title="Why Families & Coordinators Choose Nest4U"
            description="We know that welcoming support workers into your home or entrusting someone with your family member's care requires deep confidence."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Card 1: Consistency */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              style={{
                backgroundColor: 'var(--cream)',
                borderRadius: '20px',
                border: '1.5px solid rgba(20, 93, 92, 0.08)',
                padding: '2.25rem 2rem',
                boxShadow: '0 4px 24px rgba(20, 93, 92, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(20, 93, 92, 0.1)',
                      color: 'var(--primary-teal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Clock size={22} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: 'var(--primary-teal)',
                      backgroundColor: 'rgba(20, 93, 92, 0.08)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    CONSISTENCY
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-teal)', marginBottom: '0.75rem', fontWeight: 700 }}>
                  Familiar Faces, Predictable Rosters
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  We actively avoid constant roster turnover. You get regular, reliable support workers who get to know your personal routines and preferences inside out.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {["Reliable regular caregivers", "Personal routine stability", "No random worker rotations"].map((pt, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--charcoal)' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--primary-teal)' }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 2: Clinical Rigour */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              style={{
                backgroundColor: 'var(--cream)',
                borderRadius: '20px',
                border: '1.5px solid rgba(20, 93, 92, 0.08)',
                padding: '2.25rem 2rem',
                boxShadow: '0 4px 24px rgba(20, 93, 92, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(182, 106, 67, 0.1)',
                      color: 'var(--copper)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Activity size={22} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: 'var(--copper)',
                      backgroundColor: 'rgba(182, 106, 67, 0.09)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    CLINICAL RIGOUR
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-teal)', marginBottom: '0.75rem', fontWeight: 700 }}>
                  Supervised Health & High-Intensity Support
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  For complex medical conditions, our support workers operate under documented clinical guidelines, continuous training, and nurse supervision.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {["Supervised by Registered Nurses", "AHPRA Compliant standards", "Ongoing staff clinical assessments"].map((pt, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--charcoal)' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--copper)' }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 3: Collaboration */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              style={{
                backgroundColor: 'var(--cream)',
                borderRadius: '20px',
                border: '1.5px solid rgba(20, 93, 92, 0.08)',
                padding: '2.25rem 2rem',
                boxShadow: '0 4px 24px rgba(20, 93, 92, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(212, 154, 90, 0.15)',
                      color: 'var(--gold-dark, #a87232)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <MessageSquare size={22} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: 'var(--gold-dark, #a87232)',
                      backgroundColor: 'rgba(212, 154, 90, 0.12)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    COLLABORATION
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-teal)', marginBottom: '0.75rem', fontWeight: 700 }}>
                  Open Lines of Communication
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  Direct access to our local Caboolture management team. We promptly return calls, welcome feedback, and continuously refine your care.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {["Direct access to coordinators", "Prompt 24h callbacks", "Ongoing family feedback reviews"].map((pt, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--charcoal)' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--gold-dark, #a87232)' }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Experience Compassionate, Person-Centred Care?"
        description="Contact our friendly local team today to discuss how Nest4U Care Services can assist you or your family."
      />
    </div>
  );
}
