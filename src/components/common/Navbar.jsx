import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Heart, ChevronDown, ChevronRight, Home, Stethoscope, Activity, Users, Sparkles, Briefcase } from 'lucide-react';
import { CONTACT } from '../../data/contact';

const FEATURED_SERVICES = [
  {
    label: 'Supported Independent Living (SIL)',
    to: '/sil',
    desc: '24/7 on-site support in welcoming shared or individual homes.',
    icon: Home
  },
  {
    label: 'Community Nursing Care',
    to: '/community-nursing',
    desc: 'Qualified in-home clinical nursing & medication management.',
    icon: Stethoscope
  },
  {
    label: 'High-Intensity Daily Activities',
    to: '/high-intensity-care',
    desc: 'Complex clinical care delivered with utmost safety & dignity.',
    icon: Activity
  },
  {
    label: 'Daily Personal Activities',
    to: '/services/daily-personal-activities',
    desc: 'Gentle, respectful personal hygiene & morning/evening care.',
    icon: Heart
  },
  {
    label: 'Community, Social & Civic Activities',
    to: '/services/participation-community-social-civic-activities',
    desc: 'Active social outings, sports clubs & community connection.',
    icon: Users
  },
  {
    label: 'Employment & Higher Education',
    to: '/services/employment-higher-education-assistance',
    desc: 'Career pathways, study support & workplace mentoring.',
    icon: Briefcase
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 248, 238, 0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid rgba(48, 53, 54, 0.08)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 20px rgba(20, 93, 92, 0.06)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container navbar-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <style>{`
          .navbar-container {
            padding: 8px 0;
          }
          .navbar-logo-img {
            height: 100px;
            width: auto;
            object-fit: contain;
            display: block;
            transition: height 0.25s ease, transform 0.25s ease;
          }
          @media (max-width: 991px) {
            .navbar-container {
              padding: 6px 0;
            }
            .navbar-logo-img {
              height: 60px;
            }
          }
          @media (max-width: 768px) {
            .navbar-container {
              padding: 5px 0;
            }
            .navbar-logo-img {
              height: 50px;
            }
          }
          @media (max-width: 480px) {
            .navbar-container {
              padding: 4px 0;
            }
            .navbar-logo-img {
              height: 44px;
            }
          }
          @media (min-width: 1060px) {
            .desktop-nav { display: flex !important; }
            .mobile-toggle-btn { display: none !important; }
          }
        `}</style>

        {/* Brand Logo */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
          aria-label="Nest4U Care Services Home"
        >
          <img
            src="/logo.webp"
            alt="Nest4U Care Services Logo"
            className="navbar-logo-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{ display: 'none', alignItems: 'center', gap: '1.6rem' }}
          className="desktop-nav"
          aria-label="Main Navigation"
        >

          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9375rem',
              fontWeight: isActive ? 700 : 600,
              color: isActive ? 'var(--copper)' : 'var(--primary-teal)',
              position: 'relative',
              padding: '0.5rem 0',
              textDecoration: 'none'
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9375rem',
              fontWeight: isActive ? 700 : 600,
              color: isActive ? 'var(--copper)' : 'var(--primary-teal)',
              position: 'relative',
              padding: '0.5rem 0',
              textDecoration: 'none'
            })}
          >
            About Us
          </NavLink>

          {/* Services with Hover/Click Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9375rem',
                fontWeight: location.pathname.includes('/services') || location.pathname === '/sil' || location.pathname === '/community-nursing' || location.pathname === '/high-intensity-care' ? 700 : 600,
                color: location.pathname.includes('/services') || location.pathname === '/sil' || location.pathname === '/community-nursing' || location.pathname === '/high-intensity-care' ? 'var(--copper)' : 'var(--primary-teal)',
                padding: '0.5rem 0'
              }}
            >
              <NavLink to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>
                Services
              </NavLink>
              <ChevronDown
                size={16}
                style={{
                  transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s ease',
                  color: 'inherit'
                }}
              />
            </div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-140px',
                    width: '560px',
                    backgroundColor: 'var(--white)',
                    borderRadius: '16px',
                    boxShadow: '0 20px 45px rgba(20, 93, 92, 0.15)',
                    border: '1px solid rgba(20, 93, 92, 0.1)',
                    padding: '1.25rem',
                    zIndex: 1000,
                    marginTop: '0.5rem'
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                    {FEATURED_SERVICES.map((s, idx) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={idx}
                          to={s.to}
                          onClick={() => setServicesDropdownOpen(false)}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                            padding: '0.65rem 0.75rem',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            transition: 'background-color 0.15s ease',
                            backgroundColor: 'transparent'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--cream)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              backgroundColor: 'rgba(20, 93, 92, 0.1)',
                              color: 'var(--primary-teal)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px'
                            }}
                          >
                            <Icon size={16} />
                          </div>
                          <div>
                            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary-teal)', lineHeight: '1.3' }}>
                              {s.label}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--charcoal-muted)', lineHeight: '1.4', marginTop: '2px' }}>
                              {s.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div
                    style={{
                      borderTop: '1px solid rgba(48, 53, 54, 0.08)',
                      paddingTop: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{ fontSize: '0.8125rem', color: 'var(--charcoal-muted)' }}>
                      Personalised, person-centred disability support
                    </span>
                    <Link
                      to="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--copper)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        textDecoration: 'none'
                      }}
                    >
                      <span>View All Services</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/sil"
            style={({ isActive }) => ({
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9375rem',
              fontWeight: isActive ? 700 : 600,
              color: isActive ? 'var(--copper)' : 'var(--primary-teal)',
              position: 'relative',
              padding: '0.5rem 0',
              textDecoration: 'none'
            })}
          >
            SIL
          </NavLink>

          <NavLink
            to="/community-nursing"
            style={({ isActive }) => ({
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9375rem',
              fontWeight: isActive ? 700 : 600,
              color: isActive ? 'var(--copper)' : 'var(--primary-teal)',
              position: 'relative',
              padding: '0.5rem 0',
              textDecoration: 'none'
            })}
          >
            Community Nursing
          </NavLink>

          <NavLink
            to="/faq"
            style={({ isActive }) => ({
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9375rem',
              fontWeight: isActive ? 700 : 600,
              color: isActive ? 'var(--copper)' : 'var(--primary-teal)',
              position: 'relative',
              padding: '0.5rem 0',
              textDecoration: 'none'
            })}
          >
            FAQ
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9375rem',
              fontWeight: isActive ? 700 : 600,
              color: isActive ? 'var(--copper)' : 'var(--primary-teal)',
              position: 'relative',
              padding: '0.5rem 0',
              textDecoration: 'none'
            })}
          >
            Contact
          </NavLink>
        </nav>

        {/* Action Button */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-nav">
          <Link to="/contact" className="btn btn-primary btn-sm" style={{ padding: '0.625rem 1.4rem' }}>
            <Heart size={16} fill="#EF4444" color="#EF4444" style={{ flexShrink: 0 }} />
            <span>Get Support</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--primary-teal)',
            padding: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px'
          }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              backgroundColor: 'var(--white)',
              borderBottom: '2px solid var(--beige)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              maxHeight: 'calc(100vh - 80px)',
              overflowY: 'auto'
            }}
          >
            <div className="container" style={{ padding: '1.25rem 1.25rem 2rem 1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--charcoal)',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    textDecoration: 'none'
                  }}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--charcoal)',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    textDecoration: 'none'
                  }}
                >
                  About Us
                </NavLink>

                {/* Mobile Services Accordion Submenu */}
                <div style={{ borderRadius: 'var(--radius-md)', backgroundColor: 'var(--cream)', overflow: 'hidden' }}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: 'var(--primary-teal)',
                      fontWeight: 700,
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1rem'
                    }}
                  >
                    <span>Our Services</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s ease'
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ padding: '0.25rem 1rem 0.75rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                      >
                        {FEATURED_SERVICES.map((s, idx) => (
                          <Link
                            key={idx}
                            to={s.to}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                              fontSize: '0.875rem',
                              color: 'var(--charcoal)',
                              textDecoration: 'none',
                              padding: '0.35rem 0',
                              fontWeight: 500
                            }}
                          >
                            • {s.label}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            color: 'var(--copper)',
                            textDecoration: 'none',
                            paddingTop: '0.35rem',
                            borderTop: '1px dashed rgba(48, 53, 54, 0.1)'
                          }}
                        >
                          View All Services &rarr;
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink
                  to="/sil"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--charcoal)',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    textDecoration: 'none'
                  }}
                >
                  Supported Living (SIL)
                </NavLink>

                <NavLink
                  to="/community-nursing"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--charcoal)',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    textDecoration: 'none'
                  }}
                >
                  Community Nursing
                </NavLink>

                <NavLink
                  to="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--charcoal)',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    textDecoration: 'none'
                  }}
                >
                  FAQ
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--charcoal)',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    textDecoration: 'none'
                  }}
                >
                  Contact
                </NavLink>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--beige)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Heart size={18} fill="#EF4444" color="#EF4444" style={{ flexShrink: 0 }} />
                  <span>Get Support</span>
                </Link>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Phone size={18} />
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
