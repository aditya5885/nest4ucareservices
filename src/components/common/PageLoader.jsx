import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock body scroll while loader is visible
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const minLoadTime = 2400;
    const startTime = Date.now();

    const handleComplete = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = originalOverflow || 'unset';
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleComplete();
    } else {
      window.addEventListener('load', handleComplete);
      const fallbackTimer = setTimeout(handleComplete, 3500);
      return () => {
        window.removeEventListener('load', handleComplete);
        clearTimeout(fallbackTimer);
        document.body.style.overflow = originalOverflow || 'unset';
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="nest4u-page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100dvh',
            minHeight: '100vh',
            zIndex: 999999,
            display: 'grid',
            placeItems: 'center',
            placeContent: 'center',
            backgroundColor: '#FFF8EE',
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(212, 154, 90, 0.18) 0%, transparent 65%),
              radial-gradient(circle at 20% 85%, rgba(20, 93, 92, 0.09) 0%, transparent 50%),
              radial-gradient(circle at 80% 85%, rgba(182, 106, 67, 0.09) 0%, transparent 50%)
            `,
            overflow: 'hidden',
            padding: '1rem',
            margin: 0,
            boxSizing: 'border-box',
            pointerEvents: loading ? 'auto' : 'none'
          }}
          aria-label="Loading Nest4U Care Services"
        >
          {/* Centered Content Wrapper */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
              maxWidth: '360px',
              margin: '0 auto',
              padding: 0
            }}
          >
            {/* Concentric Halo Orbit & Center Logo */}
            <div
              style={{
                position: 'relative',
                width: '180px',
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto'
              }}
            >
              {/* 1. Ambient Glow Halo */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.35, 0.65, 0.35]
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  position: 'absolute',
                  inset: '-15px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(212, 154, 90, 0.35) 0%, rgba(20, 93, 92, 0.12) 60%, transparent 80%)',
                  filter: 'blur(16px)',
                  pointerEvents: 'none'
                }}
              />

              {/* 2. Outer Rotating Dashed Orbit Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{
                  position: 'absolute',
                  inset: '4px',
                  borderRadius: '50%',
                  border: '2px dashed rgba(20, 93, 92, 0.25)',
                  borderTopColor: '#B66A43',
                  borderRightColor: '#D49A5A',
                  pointerEvents: 'none'
                }}
              />

              {/* 3. Inner Counter-Rotating Gradient Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{
                  position: 'absolute',
                  inset: '16px',
                  borderRadius: '50%',
                  border: '1.5px solid transparent',
                  borderTop: '2px solid rgba(20, 93, 92, 0.65)',
                  borderBottom: '2px solid rgba(212, 154, 90, 0.75)',
                  pointerEvents: 'none'
                }}
              />

              {/* 4. Perfect Circular Center Logo Badge */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: [0.97, 1.03, 0.97], opacity: 1 }}
                transition={{
                  scale: {
                    duration: 2.6,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  },
                  opacity: { duration: 0.4 }
                }}
                style={{
                  position: 'relative',
                  width: '116px',
                  height: '116px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 12px 32px rgba(20, 93, 92, 0.14), 0 4px 12px rgba(182, 106, 67, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="/logo.webp"
                  alt="Nest4U Care Services"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.04))'
                  }}
                />
              </motion.div>
            </div>

            {/* Brand Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                marginTop: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.35rem',
                width: '100%'
              }}
            >
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(1.15rem, 4vw, 1.35rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#145D5C',
                  margin: 0,
                  lineHeight: 1.2
                }}
              >
                Nest4U Care Services
              </h2>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.72rem, 2.6vw, 0.82rem)',
                  fontWeight: 600,
                  color: '#6b7375',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  margin: 0,
                  lineHeight: 1.3
                }}
              >
                Compassionate Care &amp; Independence
              </p>
            </motion.div>

            {/* Glowing Gradient Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              style={{
                marginTop: '1.25rem',
                width: 'clamp(130px, 36vw, 170px)',
                height: '4px',
                backgroundColor: 'rgba(20, 93, 92, 0.12)',
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
                  duration: 1.35,
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
                  boxShadow: '0 0 10px rgba(212, 154, 90, 0.6)'
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
