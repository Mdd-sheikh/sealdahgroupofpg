import React, { useState } from "react";
import "./ContactUs.css";

const ADDRESS =
  "13, Dr Kartik Bose St, near University Carmichael Hostel, Sealdah, Baithakkhana, Kolkata, West Bengal 700009";

const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS
)}`;

const WHATSAPP_NUMBER = "918345872245";
const PHONE_NUMBER = "+918345872245";

export default function ContactUs() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    roomType: "Single Room",
    moveInDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your booking API / CRM endpoint.
    console.log("Callback request submitted:", form);
  };

  return (
    <section className="contact-page" aria-labelledby="contact-heading">
      <header className="contact-header">
        <h2 id="contact-heading">Get in Touch</h2>
        <p>
          Whether you're looking for a virtual tour or have questions about
          our safety standards, our team is here to help you find the
          perfect room.
        </p>
      </header>

      <div className="quick-actions">
        <a
          className="action-btn action-whatsapp"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.5 3.5A11 11 0 0 0 3.6 17.2L2 22l4.9-1.6A11 11 0 1 0 20.5 3.5zM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-3 1 1-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.3-.6-2.2-1.1-3.1-2.5-.2-.3 0-.5.1-.6.2-.2.4-.5.6-.7.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9 1-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 1.8 2.8 4.4 3.8 2.1.8 2.5.6 3 .5.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z" />
          </svg>
          Chat on WhatsApp
        </a>

        <a className="action-btn action-call" href={`tel:${PHONE_NUMBER}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.4z" />
          </svg>
          Call Us Now
        </a>
      </div>

      <div className="contact-grid">

        {/* BOOKING FORM */}
        <div className="booking-card">
          <h3>Book a Visit</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 00000 00000"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="roomType">Room Type</label>
                <select
                  id="roomType"
                  name="roomType"
                  value={form.roomType}
                  onChange={handleChange}
                >
                  <option>Single Room</option>
                  <option>Twin Sharing</option>
                  <option>Triple Sharing</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="moveInDate">Move-in Date</label>
                <input
                  id="moveInDate"
                  name="moveInDate"
                  type="date"
                  placeholder="dd-mm-yyyy"
                  value={form.moveInDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Request Callback
            </button>
          </form>
        </div>

        {/* MAP / LOCATION */}
        <div className="map-card">
          <h3>In the Heart of the Academic Hub</h3>

          <ul className="map-pills">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 1.5 9 1.5 12 0v-5" />
              </svg>
              3 Colleges Nearby
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="3" width="16" height="14" rx="2" />
                <path d="M9 21h6" />
                <path d="M9 17v4M15 17v4" />
              </svg>
              500m to Metro
            </li>
          </ul>

          <div className="map-embed">
            <iframe
              src={mapEmbedSrc}
              title="Map showing Nestly North Campus near University Carmichael Hostel, Sealdah"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="map-footer">
            <div>
              <div className="place-name">Nestly North Campus</div>
              <div className="place-sub">Block A, Student District</div>
            </div>
            <a href={directionsHref} target="_blank" rel="noopener noreferrer">
              Get Directions
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}