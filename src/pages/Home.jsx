import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import Hero from '../components/home/Hero';
import IntroTrust from '../components/home/IntroTrust';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesPreview from '../components/home/ServicesPreview';
import HighIntensityBanner from '../components/home/HighIntensityBanner';
import CommunitySILFeature from '../components/home/CommunitySILFeature';
import HowItWorks from '../components/home/HowItWorks';
import TestimonialsSection from '../components/home/TestimonialsSection';
import LocalCommunity from '../components/home/LocalCommunity';
import CTASection from '../components/common/CTASection';
import SectionHeading from '../components/common/SectionHeading';
import { FAQS } from '../data/faqs';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  // Show top 4 FAQs on the homepage
  const homeFaqs = FAQS.slice(0, 4);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div id="main-content">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Short Introduction & Core Trust */}
      <IntroTrust />

      {/* 3. Why Choose Nest4U */}
      <WhyChooseUs />

      {/* 4. Services Overview */}
      <ServicesPreview />

      {/* 5. High-Intensity Care Highlight */}
      <HighIntensityBanner />

      {/* 6. Community & SIL Section */}
      <CommunitySILFeature />

      {/* 7. How Our Support Works */}
      <HowItWorks />

      {/* 8. Testimonials & Community Voices */}
      <TestimonialsSection />

      {/* 9. FAQ Preview Section */}
      <section className="section bg-cream">
        <div className="container" style={{ maxWidth: '840px' }}>
          <SectionHeading
            eyebrow="COMMON QUESTIONS"
            title="Frequently Asked Questions"
            description="Have questions about getting started or how our care works? Here are answers to some of the most common enquiries."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            {homeFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(20, 93, 92, 0.08)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.25rem 1.5rem',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: isOpen ? 'var(--copper)' : 'var(--primary-teal)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      fontWeight: 600
                    }}
                  >
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '1rem' }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          style={{
                            padding: '0 1.5rem 1.25rem 1.5rem',
                            color: 'var(--charcoal-muted)',
                            fontSize: '0.95rem',
                            lineHeight: '1.65',
                            borderTop: '1px solid rgba(48, 53, 54, 0.05)',
                            paddingTop: '1rem'
                          }}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/faq" className="btn btn-secondary btn-sm">
              <HelpCircle size={16} />
              <span>View All Questions</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Local Community Section */}
      <LocalCommunity />

      {/* 11. Strong CTA Section */}
      <CTASection />
    </div>
  );
}
