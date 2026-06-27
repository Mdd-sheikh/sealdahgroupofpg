import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Facilities", to: "/facilities" },
  { label: "Safety", to: "/safety" },
  { label: "Contact", to: "/contact" },
  { label: "Room Plans", to: "/room" }
];

/**
 * Site navigation for Nestly.
 * Semantic <header>/<nav> structure, descriptive link text, and
 * aria-current on the active route for SEO + accessibility.
 */
export default function Navbar({ activePath = "/explore", setContactFormVisible, contactFormVisible }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      <header className="site-header">
        <div className="topbar">
          <div className="contact-detail">

            <div className="first-detail">
              Address: 13, Dr Kartik Bose St, near University Carmichael Hostel,
              Sealdah, Baithakkhana, Kolkata, West Bengal 700009
            </div>

            <div className="second-detail">
              <a href="tel:+918345872245" aria-label="Call us at +91 83458 72245">
                <span className="icon icon-phone" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.4z" />
                  </svg>
                </span>
                <span className="label">+91 83458 72245</span>
              </a>

              <a
                href="https://wa.me/918345872245"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
              >
                <span className="icon icon-whatsapp" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 3.5A11 11 0 0 0 3.6 17.2L2 22l4.9-1.6A11 11 0 1 0 20.5 3.5zM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-3 1 1-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.3-.6-2.2-1.1-3.1-2.5-.2-.3 0-.5.1-.6.2-.2.4-.5.6-.7.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9 1-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 1.8 2.8 4.4 3.8 2.1.8 2.5.6 3 .5.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z" />
                  </svg>
                </span>
                <span className="label">+91 83458 72245</span>
              </a>

              <a
                href="https://www.facebook.com/nestlypg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <span className="icon icon-facebook" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2h-2.4V14h2.4v7h3z" />
                  </svg>
                </span>
                <span className="label">facebook.com/nestlypg</span>
              </a>
            </div>

            <div className="third-detail">
              <a href="mailto:info@nestly.com" aria-label="Email us at info@nestly.com">
                <span className="icon icon-email" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </span>
                <span className="label">info@nestly.com</span>
              </a>
            </div>

          </div>
        </div>
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
                    <Link
                      to={link.to}
                      className={`navbar__link ${isActive ? "is-active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link to="/contact" className="navbar__cta">
              Contact Us
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}