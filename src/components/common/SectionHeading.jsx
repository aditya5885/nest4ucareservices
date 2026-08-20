import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = ""
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: align,
        maxWidth: isCenter ? "780px" : "100%",
        marginLeft: isCenter ? "auto" : "0",
        marginRight: isCenter ? "auto" : "0",
        marginBottom: " clamp(2rem, 3.5vw, 3.25rem)"
      }}
    >
      {eyebrow && (
        <div
          className="eyebrow"
          style={{
            color: light ? "var(--gold)" : "var(--copper)",
            justifyContent: isCenter ? "center" : "flex-start"
          }}
        >
          <span style={{ width: "18px", height: "2px", background: "currentColor", display: "inline-block" }}></span>
          {eyebrow}
          <span style={{ width: "18px", height: "2px", background: "currentColor", display: "inline-block" }}></span>
        </div>
      )}
      {title && (
        <h2
          style={{
            color: light ? "var(--white)" : "var(--primary-teal)",
            marginBottom: description ? "1rem" : "0",
            lineHeight: "1.25"
          }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          style={{
            fontSize: "1.125rem",
            color: light ? "rgba(255, 248, 238, 0.88)" : "var(--charcoal-muted)",
            lineHeight: "1.65",
            maxWidth: isCenter ? "680px" : "100%",
            marginLeft: isCenter ? "auto" : "0",
            marginRight: isCenter ? "auto" : "0"
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
