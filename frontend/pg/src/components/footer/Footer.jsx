import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">

        {/* BRAND */}
        <div className="footer-brand">
          <p className="brand-name">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Nestly
          </p>
          <p>
            A premium accommodation experience for women, redefining safety
            and comfort in urban living.
          </p>

          <div className="social-row">
            <button type="button" className="social-btn" aria-label="Message us">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.4 8.4 0 0 1-1.2 4.4L21 20l-4.3-1.1a8.4 8.4 0 1 1 4.3-7.4z" />
              </svg>
            </button>
            <button type="button" className="social-btn" aria-label="Share Nestly">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="18" cy="5" r="2.5" />
                <circle cx="6" cy="12" r="2.5" />
                <circle cx="18" cy="19" r="2.5" />
                <line x1="8.3" y1="10.8" x2="15.7" y2="6.2" />
                <line x1="8.3" y1="13.2" x2="15.7" y2="17.8" />
              </svg>
            </button>
          </div>
        </div>

        {/* QUICK LINKS */}
        <nav className="footer-col" aria-label="Quick links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/room-types">Room Types</a></li>
            <li><a href="/facilities">Facilities</a></li>
            <li><a href="/safety-standards">Safety Standards</a></li>
          </ul>
        </nav>

        {/* LEGAL */}
        <nav className="footer-col" aria-label="Legal">
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </nav>

        {/* CONTACT */}
        <div className="footer-col footer-contact">
          <h4>Contact Us</h4>
          <address>
            123 Tranquil Lane, Education Hub,
            <br />
            New Delhi - 110001
          </address>
          <a href="tel:+919876543210" className="contact-line">+91 98765 43210</a>
          <a href="mailto:hello@nestly.com" className="contact-line contact-email">hello@nestly.com</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {year} Nestly Girls' Hostels. <span className="accent">A sanctuary for modern students.</span>
        </p>
      </div>
    </footer>
  );
}