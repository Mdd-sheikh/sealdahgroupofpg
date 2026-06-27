import React, { useEffect, useRef, useState } from "react";
import "./ComfortsSection.css";

const comforts = [
  {
    id: "wifi",
    title: "High-Speed Wi-Fi",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.5a10 10 0 0 1 14 0" />
        <path d="M8.5 16a5.5 5.5 0 0 1 7 0" />
        <circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "ac",
    title: "Air Conditioning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h13a3 3 0 1 0-2-5" />
        <path d="M3 14h17a3 3 0 1 1-2 5" />
        <path d="M3 19h9" />
      </svg>
    ),
  },
  {
    id: "food",
    title: "Home-Style Meals",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3l8 8" />
        <path d="M5 3 3 5l7 7-5 7 1.5 1.5L13 13" />
        <path d="M14 14l7 7" />
        <path d="M21 3l-7 7" />
      </svg>
    ),
  },
  {
    id: "cctv",
    title: "Round-the-Clock CCTV",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="14" height="11" rx="2" />
        <path d="M17 9.5 21 7v10l-4-2.5" />
      </svg>
    ),
  },
  {
    id: "water",
    title: "Uninterrupted Water Supply",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3c0 3-4 5-4 9a4 4 0 0 0 8 0c0-4-4-6-4-9z" />
        <path d="M15 10c0 1.8-2 2.8-2 5a2.5 2.5 0 0 0 5 0c0-2.2-3-3.2-3-5z" />
      </svg>
    ),
  },
  {
    id: "power",
    title: "Power Backup",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
  {
    id: "cleaning",
    title: "Daily Housekeeping",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z" />
        <path d="M5 16l.8 1.8L7.5 18.5l-1.8.8L5 21l-.8-1.8L2.5 18.5l1.8-.8L5 16z" />
        <path d="M18 15l.6 1.4 1.4.6-1.4.6L18 19l-.6-1.4L16 17l1.4-.6L18 15z" />
      </svg>
    ),
  },
  {
    id: "lounge",
    title: "Common Lounge",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 17v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M3 17h18v2H3z" />
        <path d="M6 11V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
      </svg>
    ),
  },
  {
    id: "study",
    title: "Quiet Study Zone",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6c-1.8-1.2-4.2-1.8-6.5-1.5A1 1 0 0 0 4.7 5.5v12c0 .6.5 1.1 1.1 1A12 12 0 0 1 12 19" />
        <path d="M12 6c1.8-1.2 4.2-1.8 6.5-1.5.5.1.8.5.8 1v12c0 .6-.5 1.1-1.1 1A12 12 0 0 0 12 19" />
        <path d="M12 6v13" />
      </svg>
    ),
  },
  {
    id: "secure",
    title: "Secure Building Access",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
];

export default function ComfortsSection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Reveal the grid once it scrolls into view.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Show the "back to top" button once the page has scrolled a bit.
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className={`comforts${isInView ? " in-view" : ""}`}
      aria-labelledby="comforts-heading"
    >
      <header className="comforts-header">
        <h2 id="comforts-heading">Everyday Comforts, Built In</h2>
        <p>Everything you need for comfortable and convenient living.</p>
      </header>

      <ul className="comforts-grid">
        {comforts.map((item) => (
          <li className="comfort-card" key={item.id}>
            <span className="ico" aria-hidden="true">
              {item.icon}
            </span>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>

      {/* Floating page controls, fixed to the viewport */}
      <div className="fab-stack">
        <button
          type="button"
          className={`fab-top${showScrollTop ? " visible" : ""}`}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          tabIndex={showScrollTop ? 0 : -1}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>

        <button type="button" className="fab-chat" aria-label="Chat with us">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span className="fab-chat-label">Chat with us</span>
        </button>
      </div>
    </section>
  );
}