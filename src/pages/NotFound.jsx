import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowRight, HeartHandshake } from 'lucide-react';

export default function NotFound() {
  return (
    <div id="main-content">
      <section className="section bg-cream" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <div
            className="badge badge-copper"
            style={{ marginBottom: '1.25rem', padding: '0.4rem 1rem' }}
          >
            404 • PAGE NOT FOUND
          </div>

          <h1 style={{ color: 'var(--primary-teal)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
            Looking for Support?
          </h1>

          <p style={{ color: 'var(--charcoal-muted)', fontSize: '1.15rem', lineHeight: '1.65', marginBottom: '2.5rem' }}>
            The page you are looking for might have been moved or doesn't exist. Let us help you find what you need.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/" className="btn btn-primary btn-lg">
              <Home size={18} />
              <span>Back to Homepage</span>
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              <span>Browse Services</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
