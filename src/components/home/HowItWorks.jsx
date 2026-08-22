import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ClipboardCheck, UserCheck, RefreshCw } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const STEPS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Connect With Us",
    desc: "Reach out via phone, WhatsApp, or our online form. We will have an initial friendly chat about what support you are seeking."
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "Understand Your Goals",
    desc: "We meet with you and your family to listen to your preferences, daily routines, clinical needs, and long-term aspirations."
  },
  {
    step: "03",
    icon: UserCheck,
    title: "Tailored Care & Matching",
    desc: "We match you with compatible, skilled support workers and establish a clear, personalized support schedule that suits your life."
  },
  {
    step: "04",
    icon: RefreshCw,
    title: "Ongoing Support & Review",
    desc: "We provide reliable day-to-day care with ongoing check-ins, adapting seamlessly whenever your support needs evolve."
  }
];

export default function HowItWorks() {
  return (
    <section className="section bg-cream">
      <div className="container">
        <SectionHeading
          eyebrow="SIMPLE & TRANSPARENT"
          title="How Our Support Journey Works"
          description="Getting started with Nest4U Care Services is a clear, collaborative, and stress-free process."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '1.5rem',
            position: 'relative'
          }}
        >
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.25rem 1.75rem',
                  border: '1px solid rgba(20, 93, 92, 0.08)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {/* Step badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    color: 'rgba(182, 106, 67, 0.25)'
                  }}
                >
                  {item.step}
                </div>

                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(20, 93, 92, 0.1)',
                    color: 'var(--primary-teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={24} />
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-teal)' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.9375rem', color: 'var(--charcoal-muted)', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
