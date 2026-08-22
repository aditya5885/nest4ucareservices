import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure loader shows long enough to provide a smooth, premium feel, but dismisses quickly
    const minLoadTime = 1200;
    const startTime = Date.now();

    const handleComplete = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);
      
      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleComplete();
    } else {
      window.addEventListener('load', handleComplete);
      // Fallback timer if load event takes too long
      const fallbackTimer = setTimeout(handleComplete, 2200);
      return () => {
        window.removeEventListener('load', handleComplete);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="nest4u-page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: 'blur(4px)' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFF8EE',
            backgroundImage: `
              radial-gradient(circle at 50% 35%, rgba(212, 154, 90, 0.12) 0%, transparent 60%),
              radial-gradient(circle at 20% 80%, rgba(20, 93, 92, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(182, 106, 67, 0.08) 0%, transparent 50%)
            `,
            overflow: 'hidden',
            pointerEvents: loading ? 'auto' : 'none'
          }}
          aria-label="Loading Nest4U Care Services"
        >
          {/* Animated Ambient Halo Rings */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Outer Pulsing Glow */}
            <motion.div
              animate={{
                scale: [1, 1.18, 1],
                opacity: [0.35, 0.65, 0.35]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                position: 'absolute',
                width: '230px',
                height: '230px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212, 154, 90, 0.3) 0%, rgba(20, 93, 92, 0.08) 60%, transparent 80%)',
                filter: 'blur(20px)',
                pointerEvents: 'none'
              }}
            />

            {/* Rotating Orbit Accent Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                position: 'absolute',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                border: '2px dashed rgba(20, 93, 92, 0.25)',
                borderTopColor: 'var(--copper, #B66A43)',
                borderRightColor: 'var(--gold, #D49A5A)',
                pointerEvents: 'none'
              }}
            />

            {/* Secondary Counter-rotating Gradient Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                position: 'absolute',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                border: '1.5px solid transparent',
                borderTop: '2px solid rgba(20, 93, 92, 0.6)',
                borderBottom: '2px solid rgba(212, 154, 90, 0.7)',
                pointerEvents: 'none'
              }}
            />

            {/* Logo Center Container Card */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: [0.96, 1.02, 0.96], opacity: 1 }}
              transition={{
                scale: {
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                },
                opacity: { duration: 0.5 }
              }}
              style={{
                position: 'relative',
                width: '136px',
                height: '136px',
                borderRadius: '28px',
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                boxShadow: '0 16px 36px rgba(20, 93, 92, 0.12), 0 4px 12px rgba(182, 106, 67, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)'
              }}
            >
              <img
                src="/logo.webp"
                alt="Nest4U Care Services"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.04))'
                }}
              />
            </motion.div>
          </div>

          {/* Typography & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            style={{
              marginTop: '1.75rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0 1rem'
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '1.25rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#145D5C'
              }}
            >
              Nest4U Care Services
            </span>

            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#6b7375',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}
            >
              Compassionate Care &amp; Independence
            </span>
          </motion.div>

          {/* Animated Gradient Progress Track */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              marginTop: '1.5rem',
              width: '160px',
              height: '4px',
              backgroundColor: 'rgba(20, 93, 92, 0.1)',
              borderRadius: '9999px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <motion.div
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: 'easeInOut'
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '60%',
                height: '100%',
                background: 'linear-gradient(90deg, #145D5C 0%, #B66A43 50%, #D49A5A 100%)',
                borderRadius: '9999px',
                boxShadow: '0 0 8px rgba(212, 154, 90, 0.5)'
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
