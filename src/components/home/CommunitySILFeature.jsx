import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Users, Briefcase, ArrowRight, Check } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export default function CommunitySILFeature() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="INDEPENDENCE & PARTICIPATION"
          title="Living, Working, and Belonging in Your Community"
          description="We support participants to thrive across all dimensions of daily life—from modern supported shared living, to exciting social outings, and rewarding employment opportunities."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1.75rem'
          }}
        >
          {/* Card 1: Supported Independent Living (SIL) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card"
            style={{
              backgroundColor: 'var(--cream)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--primary-teal)',
                  color: 'var(--white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <Home size={26} />
              </div>
              <div className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>
                SUPPORTED INDEPENDENT LIVING
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-teal)', marginBottom: '0.75rem' }}>
                Supported Independent Living (SIL)
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Safe, comfortable homes with 24/7 dedicated support. Build domestic skills, enjoy shared companionship, and maintain your personal independence.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--charcoal)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={16} style={{ color: 'var(--copper)' }} /> 24/7 on-site and sleepover support
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={16} style={{ color: 'var(--copper)' }} /> Meal prep, cooking & life skills development
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={16} style={{ color: 'var(--copper)' }} /> Choice of housemates & private routines
                </li>
              </ul>
            </div>
            <Link to="/sil" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
              <span>Explore SIL Living</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Card 2: Community & Social Participation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="card"
            style={{
              backgroundColor: 'var(--cream)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--copper)',
                  color: 'var(--white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <Users size={26} />
              </div>
              <div className="badge badge-copper" style={{ marginBottom: '0.75rem' }}>
                COMMUNITY & SOCIAL PARTICIPATION
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-teal)', marginBottom: '0.75rem' }}>
                Active Community & Social Outings
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Discover new hobbies, visit local Moreton Bay markets, join sports clubs, and create meaningful friendships with one-on-one companion assistance.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--charcoal)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={16} style={{ color: 'var(--copper)' }} /> Innovative arts, digital & creative workshops
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={16} style={{ color: 'var(--copper)' }} /> Group centre activities, games & day trips
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={16} style={{ color: 'var(--copper)' }} /> Transport support across Caboolture & beyond
                </li>
              </ul>
            </div>
            <Link to="/services/participation-community-social-civic-activities" className="btn btn-copper btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
              <span>Social & Community Care</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Card 3: Employment & Education Pathways */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="card"
            style={{
              backgroundColor: 'var(--cream)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--secondary-teal)',
                  color: 'var(--white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <Briefcase size={26} />
              </div>
              <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
                EMPLOYMENT & CAPACITY BUILDING
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-teal)', marginBottom: '0.75rem' }}>
                Employment & Education Pathways
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--charcoal-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Build career capacity, prepare for job interviews, navigate university or TAFE campuses, and access specialized on-the-job workplace mentoring.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--charcoal)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={16} style={{ color: 'var(--copper)' }} /> Resume writing & interview coaching
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={16} style={{ color: 'var(--copper)' }} /> On-the-job specialized supported employment
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={16} style={{ color: 'var(--copper)' }} /> Higher education campus orientation & transit
                </li>
              </ul>
            </div>
            <Link to="/services/employment-higher-education-assistance" className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
              <span>Career & Study Support</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
