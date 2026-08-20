import React from 'react';

/**
 * Organic decorative SVG shapes inspired by the circular outline,
 * leaf accents, and flowing hands of the Nest4U logo.
 */
export const LogoInspiredCurves = ({ className = "", color = "var(--primary-teal)", opacity = 0.08 }) => (
  <svg
    className={`decorative-curve ${className}`}
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
    aria-hidden="true"
  >
    {/* Concentric organic ring inspired by logo outer circle */}
    <circle cx="300" cy="300" r="240" stroke={color} strokeWidth="2.5" strokeDasharray="6 8" />
    <circle cx="300" cy="300" r="180" stroke={color} strokeWidth="1.5" />
    {/* Flowing leaf-like and hand-like curves */}
    <path
      d="M150,300 C150,180 260,140 380,180 C480,215 500,340 420,440 C350,520 220,480 180,410 C150,360 150,320 150,300 Z"
      fill={color}
      fillOpacity="0.04"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M240,240 Q320,180 390,260 T420,380"
      stroke="var(--copper)"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

export const WarmBlob = ({ className = "", color = "var(--gold)", opacity = 0.06 }) => (
  <svg
    className={`decorative-blob ${className}`}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
    aria-hidden="true"
  >
    <path
      d="M312,192 C338,254 300,332 238,354 C176,376 90,342 54,280 C18,218 32,128 88,82 C144,36 242,34 288,88 C334,142 286,130 312,192 Z"
      fill={color}
    />
  </svg>
);
