import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
      <ol
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontSize: "0.875rem",
          color: "var(--charcoal-muted)"
        }}
      >
        <li style={{ display: "inline-flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              color: "var(--primary-teal)",
              fontWeight: 500
            }}
          >
            <Home size={15} />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <ChevronRight size={14} style={{ opacity: 0.6 }} />
              {isLast || !item.to ? (
                <span
                  aria-current="page"
                  style={{
                    color: "var(--copper)",
                    fontWeight: 600,
                    maxWidth: "280px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  style={{
                    color: "var(--primary-teal)",
                    fontWeight: 500
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
