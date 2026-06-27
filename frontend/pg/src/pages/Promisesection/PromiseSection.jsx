import React from "react";
import "./PromiseSection.css";

export default function PromiseSection() {
  return (
    <section className="promise">
      <div className="promise-header">
        <h2>The Nestly Promise</h2>
        <p>
          We prioritize your peace of mind above all else. Our facilities are
          designed with rigorous safety protocols to ensure a worry-free stay.
        </p>
      </div>

      <div className="promise-grid">

        <div className="promise-card">
          <div className="promise-icon icon-green">
            <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3 3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z" />
              <path d="M19 11a7 7 0 1 1-14 0" />
              <path d="M12 18v3" />
              <path d="M9 21h6" />
            </svg>
          </div>
          <h3>Biometric Access</h3>
          <p>
            Only residents and verified staff can access the building using
            advanced facial and fingerprint recognition.
          </p>
        </div>

        <div className="promise-card">
          <div className="promise-icon icon-pink">
            <svg viewBox="0 0 24 24">
              <path d="M3 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z" />
              <path d="M16 10l5-3v10l-5-3z" fill="#FBF8F4" />
            </svg>
          </div>
          <h3>CCTV Monitoring</h3>
          <p>
            Common areas, corridors, and entry points are monitored 24/7 by
            our central command center.
          </p>
        </div>

        <div className="promise-card">
          <div className="promise-icon icon-purple">
            <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 14a8 8 0 1 1 16 0" />
              <path d="M12 14l4-4" />
              <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <h3>On-Site Warden</h3>
          <p>
            Our resident warden is available at all times to provide
            guidance, medical assistance, and support.
          </p>
        </div>

      </div>
    </section>
  );
}