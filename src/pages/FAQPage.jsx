import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { FAQS, FAQ_CATEGORIES } from '../data/faqs';
import { CONTACT } from '../data/contact';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/common/CTASection';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory =
        activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div id="main-content">
      {/* Header Banner */}
      <section className="section-sm bg-cream" style={{ borderBottom: '1px solid rgba(20, 93, 92, 0.08)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
          <div style={{ maxWidth: '800px' }}>
            <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>
              HELP & INFORMATION
            </div>
            <h1 style={{ color: 'var(--primary-teal)', marginBottom: '1rem' }}>
              Frequently Asked Questions
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--charcoal-muted)', lineHeight: '1.7' }}>
              Find quick answers to common questions about our support services, SIL living, high-intensity nursing care, and how to get started in Caboolture and Moreton Bay.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '920px' }}>
          {/* Search & Filter bar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <div style={{ position: 'relative' }}>
              <Search
                size={20}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--charcoal-muted)'
                }}
              />
              <input
                type="text"
                placeholder="Search questions or keywords (e.g. SIL, transport, matching, nursing)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '48px', borderRadius: 'var(--radius-full)' }}
              />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {FAQ_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      padding: '0.5rem 1.15rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1.5px solid',
                      borderColor: isActive ? 'var(--primary-teal)' : 'rgba(48, 53, 54, 0.15)',
                      backgroundColor: isActive ? 'var(--primary-teal)' : 'var(--cream)',
                      color: isActive ? 'var(--white)' : 'var(--charcoal)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* FAQ Accordion List */}
          {filteredFaqs.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }}>
              {filteredFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    style={{
                      backgroundColor: 'var(--cream)',
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
                        padding: '1.35rem 1.5rem',
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
                              padding: '0 1.5rem 1.35rem 1.5rem',
                              color: 'var(--charcoal)',
                              fontSize: '0.975rem',
                              lineHeight: '1.7',
                              borderTop: '1px solid rgba(20, 93, 92, 0.08)',
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
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'var(--cream)', borderRadius: '16px', marginBottom: '3rem' }}>
              <p style={{ color: 'var(--charcoal-muted)' }}>No questions match your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '0.5rem' }}
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Still have questions helper box */}
          <div
            style={{
              backgroundColor: 'var(--beige)',
              borderRadius: '20px',
              padding: '2rem 2.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <h3 style={{ color: 'var(--primary-teal)', fontSize: '1.25rem', marginBottom: '0.35rem' }}>
                Still have questions?
              </h3>
              <p style={{ color: 'var(--charcoal-muted)', fontSize: '0.95rem', margin: 0 }}>
                We are always available to help answer your specific questions in plain English.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href={`tel:${CONTACT.phoneRaw}`} className="btn btn-primary btn-sm">
                <Phone size={16} />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-copper btn-sm"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
