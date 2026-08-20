import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Activity,
  Compass,
  HeartHandshake,
  Car,
  Stethoscope,
  Home,
  Sparkles,
  BookOpen,
  Sparkle,
  Users,
  Briefcase,
  Smile,
  ArrowRight
} from 'lucide-react';

const ICON_MAP = {
  GraduationCap,
  Activity,
  Compass,
  HeartHandshake,
  Car,
  Stethoscope,
  Home,
  Sparkles,
  BookOpen,
  Sparkle,
  Users,
  Briefcase,
  Smile
};

const CATEGORY_NAMES = {
  'daily-living': 'Daily Living & Home',
  'community-social': 'Community & Social',
  'clinical-specialised': 'Clinical & Specialised',
  'capacity-employment': 'Capacity & Employment'
};

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = ICON_MAP[service.iconName] || HeartHandshake;
  const categoryTag = CATEGORY_NAMES[service.category] || 'Care Service';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{ display: 'flex' }}
    >
      <div
        className="service-card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid rgba(48, 53, 54, 0.08)',
          padding: '2rem 1.75rem',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <style>{`
          .service-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 36px rgba(20, 93, 92, 0.12);
            border-color: rgba(182, 106, 67, 0.35);
          }
          .service-card:hover .service-icon-box {
            background-color: var(--primary-teal);
            color: var(--white);
            transform: scale(1.05);
          }
          .service-card:hover .service-accent-bar {
            width: 100%;
            background-color: var(--copper);
          }
          .service-card:hover .service-link-arrow {
            transform: translateX(4px);
            color: var(--copper);
          }
        `}</style>

        {/* Top copper accent transition line */}
        <div
          className="service-accent-bar"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '0%',
            height: '3px',
            backgroundColor: 'transparent',
            transition: 'all 0.3s ease'
          }}
        />

        {/* Card Header: Category Badge & Icon */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <span
              className="badge"
              style={{
                backgroundColor: service.isHighIntensity
                  ? 'rgba(182, 106, 67, 0.15)'
                  : 'rgba(20, 93, 92, 0.1)',
                color: service.isHighIntensity ? 'var(--copper)' : 'var(--primary-teal)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.03em'
              }}
            >
              {service.isHighIntensity ? 'SPECIALISED CARE' : categoryTag.toUpperCase()}
            </span>

            <div
              className="service-icon-box"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'var(--cream)',
                color: 'var(--primary-teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <IconComponent size={22} strokeWidth={2} />
            </div>
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.35',
              marginBottom: '0.75rem',
              color: 'var(--primary-teal)'
            }}
          >
            <Link
              to={`/services/${service.slug}`}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {service.title}
            </Link>
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'var(--charcoal-muted)',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}
          >
            {service.summary}
          </p>
        </div>

        {/* Footer Link */}
        <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(48, 53, 54, 0.06)' }}>
          <Link
            to={`/services/${service.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--primary-teal)',
              fontWeight: 600,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              fontFamily: 'var(--font-heading)'
            }}
          >
            <span>Learn More</span>
            <ArrowRight size={16} className="service-link-arrow" style={{ transition: 'transform 0.2s ease' }} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
