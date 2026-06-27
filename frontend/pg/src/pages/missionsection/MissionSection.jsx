import React from "react";
import "./MissionSection.css";

export default function MissionSection() {
  return (
    <section className="mission">
      <div className="mission-grid">

        {/* LEFT: IMAGE COLLAGE */}
        <div className="collage">
          <div className="collage-col">
            <div className="frame portrait">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                alt="Mrs. Sharma, Chief Warden"
              />
            </div>

            <div className="card card-quote">
              <div className="name">Mrs. Sharma</div>
              <div className="role">Chief Warden</div>
              <p>
                "I treat every girl here like my own. Safety and discipline
                are our core values."
              </p>
            </div>
          </div>

          <div className="collage-col offset">
            <div className="frame group">
              <img
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop"
                alt="Residents chatting together in a common area"
              />
            </div>

            <div className="card card-stat">
              <div className="number">150+</div>
              <div className="label">Happy Residents</div>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="mission-content">
          <span className="eyebrow">Our Mission</span>
          <h2>More Than Just a Place to Sleep</h2>
          <p>
            Nestly was founded with a singular vision: to bridge the gap
            between quality accommodation and emotional security. We
            understand the anxieties of moving to a new city, and we strive
            to create an environment where parents feel confident and
            students feel inspired.
          </p>

          <div className="feature-list">
            <div className="feature">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
                </svg>
              </span>
              <div>
                <h4>Community First</h4>
                <p>Regular workshops, movie nights, and cultural celebrations.</p>
              </div>
            </div>

            <div className="feature">
              <span className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 2v9a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2" />
                  <path d="M9 13v9" />
                  <path d="M17 2c-1.5 1.5-2 3-2 5s.5 3.5 2 5c1.5-1.5 2-3 2-5s-.5-3.5-2-5z" />
                  <path d="M17 12v9" />
                </svg>
              </span>
              <div>
                <h4>Nutritious Meals</h4>
                <p>Home-style cooking with strict hygiene and quality standards.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}