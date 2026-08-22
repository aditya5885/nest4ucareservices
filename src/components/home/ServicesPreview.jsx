import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Grid } from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '../../data/services';
import ServiceCard from '../services/ServiceCard';
import SectionHeading from '../common/SectionHeading';

export default function ServicesPreview() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section className="section bg-white" id="services-overview">
      <div className="container">
        <SectionHeading
          eyebrow="TAILORED SUPPORTS"
          title="Comprehensive Disability & Community Care"
          description="Explore our complete range of registered support categories, designed to support you at home, in shared living, at work, and within your local community."
        />

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.625rem',
            marginBottom: '2.5rem'
          }}
        >
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.625rem 1.25rem',
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

        {/* Services Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <ServiceCard key={service.code} service={service} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA to view all */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/services" className="btn btn-secondary btn-lg">
            <Grid size={18} />
            <span>View Full Service Catalog (13 Services)</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
