import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, CheckCircle2, AlertCircle, FileText, Stethoscope, ArrowRight, Phone } from 'lucide-react';
import { CONTACT } from '../data/contact';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/common/CTASection';

const PROCEDURES = [
  {
    title: "Complex Bowel Care",
    desc: "Management of prescribed bowel regimes, administration of prescribed laxatives/enemas, stoma monitoring, and rigorous charting under clinical plans."
  },
  {
    title: "Enteral Feeding & Management",
    desc: "Safe preparation and administration of nutrition/fluids via Percutaneous Endoscopic Gastrostomy (PEG) or Nasogastric (NG) tubes, site care, and pump monitoring."
  },
  {
    title: "Tracheostomy Management",
    desc: "Suctioning, inner cannula hygiene, tape changes, skin integrity management, and emergency protocol preparedness."
  },
  {
    title: "Urinary Catheter Management",
    desc: "Care for indwelling (IDC) and suprapubic (SPC) catheters, bag changes, fluid balance charting, and infection surveillance."
  },
  {
    title: "Ventilation Management",
    desc: "Assistance with non-invasive (CPAP/BiPAP) and invasive mechanical ventilation, circuit hygiene, mask fitting, and oxygen saturation checks."
  },
  {
    title: "Subcutaneous Injections",
    desc: "Administration of prescribed subcutaneous medications by trained and assessed staff in adherence to strict medication management protocols."
  },
  {
    title: "Pressure Care & Wound Management",
    desc: "Repositioning schedules, pressure injury prevention regimes, skin inspections, and wound dressing under nurse delegation."
  },
  {
    title: "Severe Dysphagia Management",
    desc: "Safe mealtime support in strict accordance with Speech Pathology Mealtime Management Plans, texture-modified foods, and fluid thickness levels."
  }
];

export default function HighIntensityCare() {
  return (
    <div id="main-content">
      {/* Header Banner */}
      <section className="section-sm bg-cream" style={{ borderBottom: '1px solid rgba(20, 93, 92, 0.08)' }}>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Services', to: '/services' },
              { label: 'High-Intensity Daily Personal Activities' }
            ]}
          />

          <div style={{ maxWidth: '820px' }}>
            <div className="badge badge-copper" style={{ marginBottom: '1rem' }}>
              SPECIALISED CLINICAL CARE & DIGNITY
            </div>
            <h1 style={{ color: 'var(--primary-teal)', marginBottom: '1.25rem', fontSize: 'clamp(2.2rem, 3.5vw, 3.4rem)' }}>
              High-Intensity Daily Personal Activities
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--charcoal-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
              Complex health needs require highly skilled, compassionate care delivered with meticulous safety standards, clinical oversight, and profound respect for individual dignity.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/contact?service=High-Intensity%20Daily%20Personal%20Activities" className="btn btn-copper btn-lg">
                <span>Enquire About High-Intensity Care</span>
                <ArrowRight size={18} />
              </Link>
              <a href={`tel:${CONTACT.phoneRaw}`} className="btn btn-secondary btn-lg">
                <Phone size={18} />
                <span>{CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Safety Mandatory Notice */}
      <section className="section-sm bg-white" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--cream)',
              border: '2px solid rgba(182, 106, 67, 0.25)',
              borderRadius: '20px',
              padding: '1.75rem 2rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <AlertCircle size={28} style={{ color: 'var(--copper)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 style={{ color: 'var(--primary-teal)', fontSize: '1.2rem', marginBottom: '0.4rem' }}>
                Clinical Governance & Safety Standards
              </h3>
              <p style={{ color: 'var(--charcoal)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                High-intensity supports provided by Nest4U Care Services are delivered strictly in accordance with participant-specific clinical care directives authored by treating health practitioners (GPs, nurse specialists, or hospital teams). All support workers delivering high-intensity care undergo verified competency assessments and ongoing clinical supervision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Catalog Grid */}
      <section className="section bg-white" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>CLINICAL SCOPE</div>
            <h2 style={{ color: 'var(--primary-teal)', marginBottom: '1rem' }}>
              Specialized Care Procedures Supported
            </h2>
            <p style={{ color: 'var(--charcoal-muted)', fontSize: '1.05rem', lineHeight: '1.65' }}>
              Our support team is trained to deliver individualized assistance across complex physical and medical routines:
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
              marginBottom: '3.5rem'
            }}
          >
            {PROCEDURES.map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  backgroundColor: 'var(--cream)',
                  border: '1px solid rgba(20, 93, 92, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(182, 106, 67, 0.15)',
                      color: 'var(--copper)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Activity size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-teal)', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--charcoal-muted)', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* How we maintain quality */}
          <div
            style={{
              backgroundColor: 'var(--beige)',
              borderRadius: '24px',
              padding: 'clamp(2rem, 3.5vw, 3rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem'
            }}
          >
            <div>
              <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>QUALITY FRAMEWORK</div>
              <h3 style={{ color: 'var(--primary-teal)', fontSize: '1.4rem', marginBottom: '1rem' }}>
                How We Deliver Safe High-Intensity Care
              </h3>
              <p style={{ color: 'var(--charcoal-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Safety in complex care relies on consistency, clear documentation, and trained staff who know when to escalate any clinical deviation immediately.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--charcoal)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--copper)' }} /> Tailored competency training before placing staff
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--charcoal)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--copper)' }} /> Rigorous documentation and clinical charting
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--charcoal)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--copper)' }} /> Continuous collaboration with GPs & Hospital teams
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
              <div className="card" style={{ backgroundColor: 'var(--white)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Stethoscope size={20} style={{ color: 'var(--primary-teal)' }} />
                  <strong style={{ color: 'var(--primary-teal)' }}>Nurse Collaboration</strong>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--charcoal-muted)', margin: 0, lineHeight: '1.5' }}>
                  Our registered nursing team provides guidance and oversight, ensuring all support staff strictly adhere to required clinical protocols.
                </p>
              </div>

              <div className="card" style={{ backgroundColor: 'var(--white)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <FileText size={20} style={{ color: 'var(--copper)' }} />
                  <strong style={{ color: 'var(--primary-teal)' }}>Care Plan Execution</strong>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--charcoal-muted)', margin: 0, lineHeight: '1.5' }}>
                  Every procedure follows your individualized management plan written by your medical practitioners or allied health specialists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Discuss High-Intensity Care in Caboolture & Moreton Bay"
        description="Speak directly with our clinical coordinators to understand how Nest4U Care Services can safely support your complex daily routines."
      />
    </div>
  );
}
