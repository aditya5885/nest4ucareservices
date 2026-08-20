import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';
import SectionHeading from '../common/SectionHeading';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slider every 6 seconds if not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="section bg-white" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <SectionHeading
          eyebrow="COMMUNITY VOICES"
          title="Centred Around Dignity, Trust & Warmth"
          description="Hear what participants and families appreciate most about our personalized, compassionate approach to everyday care."
        />

        {/* Carousel Container */}
        <div
          style={{ maxWidth: '880px', margin: '0 auto', position: 'relative' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card with AnimatePresence */}
          <div
            style={{
              backgroundColor: 'var(--cream)',
              borderRadius: '24px',
              border: '1.5px solid rgba(20, 93, 92, 0.1)',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            {/* Top Quote & Rating Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="var(--gold)" color="var(--gold)" />
                ))}
              </div>

              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(182, 106, 67, 0.12)',
                  color: 'var(--copper)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Quote size={24} />
              </div>
            </div>

            {/* Testimonial Quote Text with Slide Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <p
                  style={{
                    fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                    color: 'var(--primary-teal)',
                    lineHeight: '1.6',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    marginBottom: '2rem'
                  }}
                >
                  "{currentTestimonial.quote}"
                </p>

                {/* Author Info */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    borderTop: '1px solid rgba(48, 53, 54, 0.1)',
                    paddingTop: '1.25rem'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--charcoal)', fontSize: '1.05rem', fontFamily: 'var(--font-heading)' }}>
                      {currentTestimonial.author}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--charcoal-muted)' }}>
                      {currentTestimonial.location}
                    </div>
                  </div>

                  <span
                    className="badge badge-copper"
                    style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}
                  >
                    {currentTestimonial.tag}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls: Arrows & Indicators */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '1.75rem',
              padding: '0 0.5rem'
            }}
          >
            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  style={{
                    width: currentIndex === idx ? '28px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    backgroundColor: currentIndex === idx ? 'var(--copper)' : 'rgba(20, 93, 92, 0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0
                  }}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(20, 93, 92, 0.2)',
                  backgroundColor: 'var(--white)',
                  color: 'var(--primary-teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: 'var(--shadow-xs)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-teal)';
                  e.currentTarget.style.color = 'var(--white)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--white)';
                  e.currentTarget.style.color = 'var(--primary-teal)';
                }}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(20, 93, 92, 0.2)',
                  backgroundColor: 'var(--white)',
                  color: 'var(--primary-teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: 'var(--shadow-xs)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-teal)';
                  e.currentTarget.style.color = 'var(--white)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--white)';
                  e.currentTarget.style.color = 'var(--primary-teal)';
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
