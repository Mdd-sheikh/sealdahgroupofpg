import React from "react";
import "./LocationSection.css";

const ADDRESS =
  "13, Dr Kartik Bose St, near University Carmichael Hostel, Sealdah, Baithakkhana, Kolkata, West Bengal 700009";

const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS
)}`;

const landmarks = [
  "5 minutes walk to Sealdah Railway Station",
  "Walking distance to University of Calcutta & Carmichael Hostel",
  "Close to College Street Book Market",
  "Surrounded by cafes and local eateries",
  "Near Beadon Street and Baithakkhana bus stops",
  "Close to Kolkata Medical College & Hospital",
  "Easy access to MG Road Metro Station",
];

export default function LocationSection() {
  return (
    <section className="location" aria-labelledby="location-heading">
      <header className="location-header">
        <h2 id="location-heading">Prime Location</h2>
        <p>Strategically located for your convenience</p>
      </header>

      <div className="location-grid">

        {/* MAP */}
        <div className="map-frame">
          <iframe
            src={mapEmbedSrc}
            title="Map showing the property location near University Carmichael Hostel, Sealdah"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* DETAILS */}
        <div className="location-details">

          <div className="detail-block">
            <span className="ico ico-blue" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
            <div>
              <h3>Address</h3>
              <address>
                13, Dr Kartik Bose St, near University Carmichael Hostel,
                Sealdah, Baithakkhana, Kolkata, West Bengal 700009
              </address>
            </div>
          </div>

          <div className="detail-block">
            <span className="ico ico-green" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
            </span>
            <div>
              <h3>Nearby Landmarks</h3>
              <ul className="landmark-list">
                {landmarks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="location-actions">
            <a
              className="btn btn-primary"
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Get Directions
            </a>
            <a className="btn btn-secondary" href="#book-a-visit">
              Book a Visit
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}