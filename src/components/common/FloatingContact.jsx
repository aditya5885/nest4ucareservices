import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT } from '../../data/contact';

export default function FloatingContact() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  // Phone link formatted for tel:
  const phoneHref = `tel:${CONTACT.phoneRaw}`;
  // WhatsApp link formatted for wa.me
  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hello Nest4U Care Services, I would like to enquire about your support services.")}`;

  return (
    <div
      className="floating-contact-container"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '14px',
        zIndex: 990,
        pointerEvents: 'auto'
      }}
      aria-label="Quick contact options"
    >
      {/* Phone Button */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <AnimatePresence>
          {hoveredBtn === 'phone' && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              style={{
                position: 'absolute',
                right: '64px',
                backgroundColor: 'var(--charcoal)',
                color: 'var(--white)',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                boxShadow: 'var(--shadow-md)',
                pointerEvents: 'none'
              }}
            >
              Call Us
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={phoneHref}
          aria-label="Call Nest4U Care Services"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ scale: 1.1, translateY: -2 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setHoveredBtn('phone')}
          onMouseLeave={() => setHoveredBtn(null)}
          onFocus={() => setHoveredBtn('phone')}
          onBlur={() => setHoveredBtn(null)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary-teal)',
            color: 'var(--white)',
            boxShadow: '0 4px 18px rgba(20, 93, 92, 0.4)',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
        >
          <Phone size={22} strokeWidth={2.2} />
        </motion.a>
      </div>

      {/* WhatsApp Button */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <AnimatePresence>
          {hoveredBtn === 'whatsapp' && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              style={{
                position: 'absolute',
                right: '64px',
                backgroundColor: 'var(--charcoal)',
                color: 'var(--white)',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                boxShadow: 'var(--shadow-md)',
                pointerEvents: 'none'
              }}
            >
              WhatsApp Us
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse effect ring */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1.4],
            opacity: [0.6, 0, 0]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeOut"
          }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            backgroundColor: 'var(--whatsapp-green)',
            pointerEvents: 'none',
            zIndex: -1
          }}
        />

        <motion.a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Nest4U Care Services"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.1, translateY: -2 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setHoveredBtn('whatsapp')}
          onMouseLeave={() => setHoveredBtn(null)}
          onFocus={() => setHoveredBtn('whatsapp')}
          onBlur={() => setHoveredBtn(null)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            color: 'var(--white)',
            boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
            border: '2px solid rgba(255, 255, 255, 0.9)',
            cursor: 'pointer'
          }}
        >
          <MessageCircle size={26} strokeWidth={2.2} />
        </motion.a>
      </div>
    </div>
  );
}
