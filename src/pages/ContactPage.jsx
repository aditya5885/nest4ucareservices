import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { CONTACT } from '../data/contact';
import { SERVICES } from '../data/services';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    contactMethod: 'phone',
    service: preselectedService,
    participantType: 'participant', // participant, family, support-coordinator
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please provide your full name.';
    if (!formData.phone.trim()) newErrors.phone = 'Please provide a valid contact number.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please share a brief message about your support enquiry.';
    if (!formData.consent) newErrors.consent = 'Please confirm consent for our team to contact you.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div id="main-content">
      {/* Header Banner */}
      <section className="section-sm bg-cream" style={{ borderBottom: '1px solid rgba(20, 93, 92, 0.08)' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <div style={{ maxWidth: '800px' }}>
            <div className="badge badge-copper" style={{ marginBottom: '1rem' }}>
              GET IN TOUCH
            </div>
            <h1 style={{ color: 'var(--primary-teal)', marginBottom: '1rem' }}>
              Contact Nest4U Care Services
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--charcoal-muted)', lineHeight: '1.7' }}>
              We welcome your enquiries, referrals, and questions. Speak directly with our local Caboolture team to discuss your support options.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="section bg-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'stretch'
            }}
          >
            {/* Left Column: Contact Form */}
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ color: 'var(--primary-teal)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  Request Support or Make an Enquiry
                </h2>
                <p style={{ color: 'var(--charcoal-muted)', fontSize: '0.975rem' }}>
                  Fill in the form below and one of our friendly team members will get back to you promptly.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    backgroundColor: 'var(--cream)',
                    borderRadius: '20px',
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    border: '2px solid var(--primary-teal)'
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-teal)',
                      color: 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto'
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ color: 'var(--primary-teal)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                    Thank You, {formData.fullName}!
                  </h3>
                  <p style={{ color: 'var(--charcoal-muted)', fontSize: '1rem', lineHeight: '1.6', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                    We have received your enquiry. Our team in Caboolture will contact you via your preferred method ({formData.contactMethod}) shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        contactMethod: 'phone',
                        service: '',
                        participantType: 'participant',
                        message: '',
                        consent: false
                      });
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`form-input ${errors.fullName ? 'error' : ''}`}
                    />
                    {errors.fullName && <div className="form-error">{errors.fullName}</div>}
                  </div>

                  {/* Phone & Email Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.25rem' }}>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone Number <span className="required">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. 0400 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                      />
                      {errors.phone && <div className="form-error">{errors.phone}</div>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`form-input ${errors.email ? 'error' : ''}`}
                      />
                      {errors.email && <div className="form-error">{errors.email}</div>}
                    </div>
                  </div>

                  {/* Who are you enquiring for */}
                  <div className="form-group">
                    <label className="form-label">I am enquiring as:</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {[
                        { id: 'participant', label: 'Participant' },
                        { id: 'family', label: 'Family Carer / Advocate' },
                        { id: 'coordinator', label: 'Support Coordinator / Provider' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, participantType: item.id })}
                          style={{
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1.5px solid',
                            borderColor: formData.participantType === item.id ? 'var(--primary-teal)' : 'rgba(48, 53, 54, 0.15)',
                            backgroundColor: formData.participantType === item.id ? 'rgba(20, 93, 92, 0.08)' : 'var(--white)',
                            color: formData.participantType === item.id ? 'var(--primary-teal)' : 'var(--charcoal)',
                            fontWeight: formData.participantType === item.id ? 700 : 500,
                            fontSize: '0.875rem',
                            cursor: 'pointer'
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div className="form-group">
                    <label htmlFor="service" className="form-label">
                      Service Interested In (Optional)
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="form-select"
                    >
                      <option value="">-- Select a Service Category --</option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.shortTitle || s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="form-group">
                    <label className="form-label">Preferred Contact Method:</label>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                      {['phone', 'email', 'whatsapp'].map((method) => (
                        <label key={method} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9375rem', textTransform: 'capitalize' }}>
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={formData.contactMethod === method}
                            onChange={() => setFormData({ ...formData, contactMethod: method })}
                            style={{ accentColor: 'var(--primary-teal)' }}
                          />
                          <span>{method === 'whatsapp' ? 'WhatsApp' : method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      How Can We Help You? <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Please share details about your support needs, location, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                    />
                    {errors.message && <div className="form-error">{errors.message}</div>}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="form-group">
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--charcoal)' }}>
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        style={{ marginTop: '3px', accentColor: 'var(--primary-teal)' }}
                      />
                      <span>
                        I consent to Nest4U Care Services securely storing my contact details to reply to this enquiry in accordance with the Privacy Policy.
                      </span>
                    </label>
                    {errors.consent && <div className="form-error">{errors.consent}</div>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Office Location & Quick Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
              {/* Headquarters Details Card */}
              <div
                className="card"
                style={{
                  backgroundColor: 'var(--cream)',
                  border: '1.5px solid rgba(20, 93, 92, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}
              >
                <div>
                  <div className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>OFFICE LOCATION</div>
                  <h3 style={{ color: 'var(--primary-teal)', fontSize: '1.35rem', marginBottom: '0.25rem' }}>
                    Nest4U Care Services
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', marginTop: '0.75rem' }}>
                    <MapPin size={20} style={{ color: 'var(--copper)', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '1rem', color: 'var(--charcoal)', fontWeight: 600 }}>
                      {CONTACT.address}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(48, 53, 54, 0.08)', paddingTop: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone size={18} style={{ color: 'var(--primary-teal)' }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--charcoal-muted)', textTransform: 'uppercase' }}>Phone</div>
                      <a href={`tel:${CONTACT.phoneRaw}`} style={{ color: 'var(--primary-teal)', fontWeight: 600, textDecoration: 'none' }}>
                        {CONTACT.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <MessageSquare size={18} style={{ color: 'var(--whatsapp-green-dark)' }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--charcoal-muted)', textTransform: 'uppercase' }}>WhatsApp</div>
                      <a
                        href={`https://wa.me/${CONTACT.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--primary-teal)', fontWeight: 600, textDecoration: 'none' }}
                      >
                        {CONTACT.whatsappDisplay}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail size={18} style={{ color: 'var(--copper)' }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--charcoal-muted)', textTransform: 'uppercase' }}>Email</div>
                      <a href={`mailto:${CONTACT.email}`} style={{ color: 'var(--primary-teal)', fontWeight: 600, textDecoration: 'none' }}>
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Clock size={18} style={{ color: 'var(--primary-teal)', flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--charcoal-muted)', textTransform: 'uppercase' }}>Operating Hours</div>
                      <span style={{ fontSize: '0.9rem', color: 'var(--charcoal)' }}>
                        {CONTACT.openingHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(48, 53, 54, 0.1)',
                  boxShadow: 'var(--shadow-md)',
                  flex: 1,
                  minHeight: '380px',
                  display: 'flex'
                }}
              >
                <iframe
                  title="Nest4U Location Map"
                  src={CONTACT.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, flex: 1, width: '100%', minHeight: '100%' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
