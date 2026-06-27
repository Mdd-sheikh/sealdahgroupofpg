import React, { useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Explore", href: "/explore" },
  { label: "Facilities", href: "/facilities" },
  { label: "Safety", href: "/safety" },
  { label: "Contact", href: "/contact" },
];

/**
 * Site navigation for Nestly.
 * Semantic <header>/<nav> structure, descriptive link text, and
 * aria-current on the active route for SEO + accessibility.
 */
export default function Navbar({ activePath = "/explore" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <div className="navbar__inner">
          <a href="/" className="navbar__brand" aria-label="Nestly home">
            <svg
              className="navbar__pin"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <span className="navbar__brand-text">Nestly</span>
          </a>

          <button
            className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul id="primary-menu" className={`navbar__links ${menuOpen ? "is-open" : ""}`}>
            {NAV_LINKS.map((link) => {
              const isActive = link.href === activePath;
              return (
                <li key={link.label} className="navbar__item">
                  <a
                    href={link.href}
                    className={`navbar__link ${isActive ? "is-active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a href="/book" className="navbar__cta">
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
}