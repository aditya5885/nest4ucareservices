import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Grid, Filter, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '../data/services';
import ServiceCard from '../components/services/ServiceCard';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/common/CTASection';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (service.shortTitle && service.shortTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        service.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div id="main-content">
      {/* Page Header */}
      <section className="section-sm bg-cream" style={{ borderBottom: '1px solid rgba(20, 93, 92, 0.08)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Our Services' }]} />
          <div style={{ maxWidth: '800px' }}>
            <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>
              COMPREHENSIVE SUPPORT SERVICES
            </div>
            <h1 style={{ color: 'var(--primary-teal)', marginBottom: '1rem' }}>
              Our Care & Support Services
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--charcoal-muted)', lineHeight: '1.7' }}>
              We provide tailored support services designed to help you build independence, achieve your goals, and participate actively in your community.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Directory Section */}
      <section className="section bg-white">
        <div className="container">
          {/* Controls Bar: Search & Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}
          >
            {/* Search Input */}
            <div style={{ position: 'relative', maxWidth: '480px' }}>
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
                placeholder="Search services by keyword (e.g. SIL, Nursing, Personal Care, Transport)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '48px', borderRadius: 'var(--radius-full)' }}
              />
            </div>

            {/* Category Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              {SERVICE_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '0.55rem 1.25rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1.5px solid',
                      borderColor: isActive ? 'var(--primary-teal)' : 'rgba(48, 53, 54, 0.15)',
                      backgroundColor: isActive ? 'var(--primary-teal)' : 'var(--cream)',
                      color: isActive ? 'var(--white)' : 'var(--charcoal)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
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

          {/* Service Cards Grid */}
          {filteredServices.length > 0 ? (
            <motion.div
              layout
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                gap: '1.5rem',
                marginBottom: '3.5rem'
              }}
            >
              <AnimatePresence mode="popLayout">
                {filteredServices.map((service, idx) => (
                  <ServiceCard key={service.slug} service={service} index={idx} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div
              style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                backgroundColor: 'var(--cream)',
                borderRadius: '16px',
                marginBottom: '3.5rem'
              }}
            >
              <h3 style={{ color: 'var(--primary-teal)', marginBottom: '0.5rem' }}>No services found</h3>
              <p style={{ color: 'var(--charcoal-muted)', marginBottom: '1.5rem' }}>
                We couldn't find any services matching "{searchQuery}". Try a different search term or category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="btn btn-secondary btn-sm"
              >
                Clear Search & Filters
              </button>
            </div>
          )}

          {/* Quality Assurance Note */}
          <div
            style={{
              padding: '1.5rem 2rem',
              backgroundColor: 'var(--cream)',
              borderRadius: '16px',
              borderLeft: '4px solid var(--primary-teal)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem'
            }}
          >
            <ShieldCheck size={24} style={{ color: 'var(--primary-teal)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ color: 'var(--primary-teal)', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                Professional Delivery Standards
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', margin: 0, lineHeight: '1.6' }}>
                All services are delivered in accordance with individual participant agreements, approved support plans, qualified staff competencies, and applicable Australian quality and safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Help Finding the Right Support?"
        description="Our experienced team can walk you through the options and help tailor a support package to your specific goals and preferences."
      />
    </div>
  );
}
