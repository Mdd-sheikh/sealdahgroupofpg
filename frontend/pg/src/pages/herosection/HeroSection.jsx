import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-grid">

        {/* LEFT: COPY */}
        <div className="copy">
          <span className="badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
            </svg>
            UGC Guidelines Compliant
          </span>

          <h1>
            A Safe Home
            <span className="accent">Away From Home</span>
          </h1>

          <p className="desc">
            Designed exclusively for young women, Nestly offers more than
            just a room—it's a curated community built on safety, comfort,
            and growth.
          </p>

          <div className="cta-row">
            <button className="btn btn-primary-frst">Book a Visit</button>
            <Link to="/room">
              <button className="btn btn-secondary-send">View Rooms</button>
            </Link>
          </div>
        </div>

        {/* RIGHT: VISUAL */}
        <div className="visual">
          <div className="blob"></div>

          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=900&auto=format&fit=crop"
              alt="Cozy bedroom interior"
            />
          </div>

          <div className="info-card card-security">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
              </svg>
            </div>
            <div className="info-text">
              <div className="title">24/7 Security</div>
              <div className="sub">Round-the-clock guarding</div>
            </div>
          </div>

          <div className="info-card card-verified">
            <div className="info-icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 2l2.4 2.4 3.3-.3.3 3.3L20.4 9 18 12l2.4 3-2.4 2.4-3.3.3-.3 3.3-3.3-.3L9 22.4 6 20l-3.3-.3-.3-3.3L0 14l2.4-3L0 9l2.4-2.4 3.3.3.3-3.3 3.3.3L12 2z"
                  fill="none"
                />
                <circle cx="12" cy="12" r="6.2" fill="none" />
              </svg>
            </div>
            <div className="info-text">
              <div className="title">Verified Property</div>
              <div className="sub">100% Quality Assurance</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}