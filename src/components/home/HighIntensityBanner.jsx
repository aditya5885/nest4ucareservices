import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

const HIGH_INTENSITY_ITEMS = [
  "Complex Bowel Care",
  "Enteral (PEG/NG) Feeding & Management",
  "Tracheostomy Management",
  "Urinary Catheter Management (IDC/SPC)",
  "Ventilation & Respiratory Support",
  "Subcutaneous Injections",
  "Pressure Care & Complex Wound Management",
  "Severe Dysphagia Management"
];

export default function HighIntensityBanner() {
  return (
    <section className="section bg-beige" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--white)',
            borderRadius: '24px',
            border: '2px solid rgba(182, 106, 67, 0.2)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            boxShadow: 'var(--shadow-lg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Context & Disclaimers */}
          <div>
            <div
              className="badge"
              style={{
                backgroundColor: 'rgba(182, 106, 67, 0.15)',
                color: 'var(--copper)',
                marginBottom: '1rem'
              }}
            >
              <Activity size={15} />
              <span>SPECIALISED CLINICAL CARE</span>
            </div>

            <h2 style={{ color: 'var(--primary-teal)', fontSize: 'clamp(1.45rem, 2vw, 1.95rem)', marginBottom: '1rem', lineHeight: '1.25' }}>
              High-Intensity Daily Personal Activities
            </h2>

            <p style={{ color: 'var(--charcoal-muted)', fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              Participants with complex personal health needs require compassionate support delivered with utmost clinical precision, safety, and personal dignity.
            </p>

            <div
              style={{
                backgroundColor: 'var(--cream)',
                padding: '1.25rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--copper)',
                marginBottom: '1.75rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}
            >
              <AlertCircle size={20} style={{ color: 'var(--copper)', flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.875rem', color: 'var(--charcoal)', margin: 0, lineHeight: '1.5' }}>
                <strong>Quality & Safeguards Note:</strong> All high-intensity activities are delivered by workers with verified competencies under individualized care plans, participant-specific health directives, and applicable regulatory frameworks.
              </p>
            </div>

            <Link to="/high-intensity-care" className="btn btn-copper btn-lg">
              <span>Explore High-Intensity Support</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Column: Key Activity Badges */}
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-teal)', marginBottom: '1.25rem' }}>
              Specialized Care Areas We Support:
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.875rem'
              }}
            >
              {HIGH_INTENSITY_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    backgroundColor: 'var(--cream)',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(20, 93, 92, 0.08)'
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: 'var(--primary-teal)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--charcoal)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--charcoal-muted)' }}>
              <ShieldCheck size={18} style={{ color: 'var(--primary-teal)' }} />
              <span>Coordinated with treating doctors, allied health, and registered nurses.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
