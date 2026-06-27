import React from "react";
import "./ComfortAndAmenities.css";
import Testimonials from "../../testimonial/Testimonial";

const amenities = [
  {
    id: "wifi",
    title: "High-Speed Wi-Fi",
    desc: "Uninterrupted connectivity for intensive study sessions and entertainment.",
    variant: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.5a10 10 0 0 1 14 0" />
        <path d="M8.5 16a5.5 5.5 0 0 1 7 0" />
        <circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "meals",
    title: "Nutritious Meals",
    desc: "4 home-style meals a day prepared with love, nutrition, and hygiene in mind.",
    variant: "pink",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 2v8a2 2 0 0 0 4 0V2H8v6H7V2H6z" />
        <path d="M16 2c-1.5 1.5-2 3.5-2 5.5 0 1.6.7 3 1.5 4L15 22h2l-.5-10.5c.8-1 1.5-2.4 1.5-4 0-2-.5-4-2-5.5z" />
      </svg>
    ),
  },
  {
    id: "security",
    title: "24/7 Security",
    desc: "Biometric entry, CCTV monitoring, and dedicated female-only support staff.",
    variant: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    id: "laundry",
    title: "Laundry Service",
    desc: "Professional washing and ironing facilities included in your stay.",
    variant: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <circle cx="12" cy="13" r="5" />
      </svg>
    ),
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    desc: "Daily cleaning of rooms and common areas for a pristine living environment.",
    variant: "pink",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11 19 1l2 2-10 10" />
        <path d="M14 6l4 4" />
        <path d="M4 20c0-3 2-6 5-7l4 4c-1 3-4 5-7 5l-2-2z" />
      </svg>
    ),
  },
  {
    id: "recreation",
    title: "Recreation Area",
    desc: "Yoga studio, indoor games, and a curated mini-library for your downtime.",
    variant: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="6" r="2.5" />
        <path d="M12 8.5v6l-3 6" />
        <path d="M12 14.5l3 6" />
        <path d="M8 12l4-1.5L16 12" />
      </svg>
    ),
  },
  {
    id: "power",
    title: "Power Backup",
    desc: "24/7 power backup ensures your life and studies never stop.",
    variant: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
  {
    id: "study",
    title: "Study Room",
    desc: "Quiet, air-conditioned space designed for deep, focused learning.",
    variant: "pink",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];

export default function ComfortAndAmenities() {
  return (
    <div className="comfort-page">

      {/* DIV 1: Every Comfort of Home */}
      <section className="comfort-hero" aria-labelledby="comfort-heading">
        <div className="comfort-hero-grid">
          <div className="comfort-copy">
            <h2 id="comfort-heading">
              Every Comfort
              <span className="accent">of Home</span>
            </h2>
            <p>
              At Nestly, we believe your hostel should be more than just a
              room. Experience an all-inclusive sanctuary designed
              specifically for modern students and professionals, blending
              premium amenities with a warm community spirit.
            </p>

            <ul className="comfort-pills">
              <li className="pill-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                </svg>
                Safety Certified
              </li>
              <li className="pill-pink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.4" />
                </svg>
                Girls' Exclusive
              </li>
            </ul>
          </div>

          <div className="comfort-visual">
            <div className="comfort-image">
              <img
                src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=900&auto=format&fit=crop"
                alt="Bright lounge area with city skyline view and cozy seating"
                loading="lazy"
                width="700"
                height="525"
              />
            </div>

            <div className="comfort-float-card">
              <span className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.4" />
                </svg>
              </span>
              <span>
                <span className="title">Total Peace of Mind</span>
                <br />
                <span className="sub">Verified sanctuary</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DIV 2: Designed for Your Success (amenities grid) */}
      <section className="amenities" aria-labelledby="amenities-heading">
        <header className="amenities-header">
          <span className="amenities-eyebrow">Amenities</span>
          <h2 id="amenities-heading">Designed for Your Success</h2>
        </header>

        <ul className="amenities-grid">
          {amenities.map((item) => (
            <li className="amenity-card" key={item.id}>
              <span className={`ico icon-${item.variant}`} aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>
       <div className="testimonial">
        <Testimonials/>
       </div>
    </div>
  );
}