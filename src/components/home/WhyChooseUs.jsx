import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, HeartHandshake, Award, Clock, Users, Shield } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const REASONS = [
  {
    icon: HeartHandshake,
    title: 'Participant-First Matching',
    desc: 'We match you with support workers who share your interests, respect your communication preferences, and complement your home environment.'
  },
  {
    icon: Shield,
    title: 'High-Intensity & Clinical Competency',
    desc: 'From complex bowel care to enteral feeding and catheter care, our staff operate under qualified clinical care directives and safety guidelines.'
  },
  {
    icon: Clock,
    title: 'Reliability & Consistency',
    desc: 'We prioritize consistent rosters so you see familiar, trusted faces who know your routine, reducing anxiety and disruption.'
  },
  {
    icon: Users,
    title: 'Local Community Presence',
    desc: 'Based at 22 Sims Street, Caboolture, we are deeply embedded in the Moreton Bay region with extensive local knowledge and community ties.'
  },
  {
    icon: Award,
    title: 'Collaborative Care Ecosystem',
    desc: 'We work harmoniously with your GPs, allied health clinicians, support coordinators, and families to maintain seamless continuity.'
  },
  {
    icon: CheckCircle2,
    title: 'Transparent Communication',
    desc: 'No hidden complexities. We listen carefully, provide straightforward advice, and keep you in total control of your support schedule.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-cream" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          eyebrow="WHY NEST4U"
          title="A Caring Partner You and Your Family Can Trust"
          description="Choosing the right care provider is a deeply personal decision. Here is why participants, families, and coordinators choose Nest4U Care Services."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="card"
                style={{
                  backgroundColor: 'var(--white)',
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
                    backgroundColor: 'rgba(182, 106, 67, 0.12)',
                    color: 'var(--copper)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-teal)', marginBottom: '0.4rem' }}>
                    {reason.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--charcoal-muted)', lineHeight: '1.6' }}>
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
